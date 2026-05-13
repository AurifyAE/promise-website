'use client';

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

interface PdfModalProps {
    src: string;
    title: string;
    onClose: () => void;
}

export default function PdfModal({ src, title, onClose }: PdfModalProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [pages, setPages] = useState<HTMLCanvasElement[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        const renderPdf = async () => {
            try {
                setLoading(true);
                setError(null);
                setPages([]);
                setCurrentPage(1);

                // Dynamically import pdfjs-dist to avoid SSR issues
                const pdfjsLib = await import("pdfjs-dist");

                // Use the worker bundled with pdfjs-dist — no CDN version mismatch
                pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
                    "pdfjs-dist/build/pdf.worker.mjs",
                    import.meta.url
                ).toString();

                const pdf = await pdfjsLib.getDocument(src).promise;
                if (cancelled) return;

                setTotalPages(pdf.numPages);

                const rendered: HTMLCanvasElement[] = [];

                for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                    if (cancelled) return;

                    const page = await pdf.getPage(pageNum);
                    const viewport = page.getViewport({ scale: 2 }); // scale=2 for sharpness

                    const canvas = document.createElement("canvas");
                    canvas.width = viewport.width;
                    canvas.height = viewport.height;
                    canvas.style.width = "100%";
                    canvas.style.height = "auto";
                    canvas.style.display = "block";

                    const ctx = canvas.getContext("2d")!;

                    await page.render({ canvasContext: ctx, viewport, canvas }).promise;
                    if (cancelled) return;

                    rendered.push(canvas);
                }

                if (!cancelled) {
                    setPages(rendered);
                    setLoading(false);
                }
            } catch (err) {
                if (!cancelled) {
                    console.error("PDF render error:", err);
                    setError("Failed to load document.");
                    setLoading(false);
                }
            }
        };

        renderPdf();
        return () => { cancelled = true; };
    }, [src]);

    // Inject canvases into DOM
    useEffect(() => {
        if (!containerRef.current || pages.length === 0) return;
        containerRef.current.innerHTML = "";
        pages.forEach((canvas) => {
            canvas.style.marginBottom = "12px";
            canvas.style.borderRadius = "8px";
            canvas.style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
            containerRef.current!.appendChild(canvas);
        });
    }, [pages]);

    // Scroll to current page canvas
    useEffect(() => {
        if (!containerRef.current || pages.length === 0) return;
        const canvas = containerRef.current.children[currentPage - 1] as HTMLElement;
        canvas?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, [currentPage, pages]);

    // Track which page is in view via IntersectionObserver
    useEffect(() => {
        if (!containerRef.current || pages.length === 0) return;
        const canvases = Array.from(containerRef.current.children) as HTMLElement[];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = canvases.indexOf(entry.target as HTMLElement);
                        if (index !== -1) setCurrentPage(index + 1);
                    }
                });
            },
            { threshold: 0.4 }
        );

        canvases.forEach((c) => observer.observe(c));
        return () => observer.disconnect();
    }, [pages]);

    // Disable context menu (right-click) inside modal
    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
    };

    // Prevent save and print shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 's' || e.key === 'P' || e.key === 'S')) {
                e.preventDefault();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 16 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full max-w-4xl h-[90vh] bg-[#f5f5f0] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                    onContextMenu={handleContextMenu}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 bg-white shrink-0">
                        <span className="text-sm font-semibold text-[#1F2B34] truncate pr-4">{title}</span>
                        <div className="flex items-center gap-3 shrink-0">
                            {totalPages > 1 && (
                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                    <button
                                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                        disabled={currentPage === 1}
                                        className="p-1 rounded hover:bg-gray-100 disabled:opacity-30 transition-colors"
                                        aria-label="Previous page"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                    </button>
                                    <span className="w-20 text-center">
                                        {currentPage} / {totalPages}
                                    </span>
                                    <button
                                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                        disabled={currentPage === totalPages}
                                        className="p-1 rounded hover:bg-gray-100 disabled:opacity-30 transition-colors"
                                        aria-label="Next page"
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            )}
                            <button
                                onClick={onClose}
                                aria-label="Close"
                                className="flex items-center justify-center w-8 h-8 rounded-full text-gray-400 hover:text-[#133C22] hover:bg-gray-100 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div
                        className="flex-1 overflow-y-auto px-6 py-6"
                        style={{ userSelect: "none", WebkitUserSelect: "none" }}
                    >
                        {loading && (
                            <div className="flex flex-col items-center justify-center h-full gap-3 text-gray-400">
                                <Loader2 className="w-8 h-8 animate-spin" />
                                <span className="text-sm">Loading document…</span>
                            </div>
                        )}

                        {error && (
                            <div className="flex items-center justify-center h-full text-red-500 text-sm">
                                {error}
                            </div>
                        )}

                        {/* Canvas pages injected here */}
                        <div ref={containerRef} className="max-w-3xl mx-auto" />
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}