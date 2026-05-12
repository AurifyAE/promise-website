'use client';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";

const policies = [
  {
    title: "ABC Policy 2025",
    href: "/pdfs/policies/ABC Policy-2025.pdf#toolbar=0&navpanes=0&scrollbar=0",
  },
  {
    title: "AML CFT Policy 2025",
    href: "/pdfs/policies/AML-CFT-Policy-2025.pdf#toolbar=0&navpanes=0&scrollbar=0",
  },
  {
    title: "EHS Policy 2025",
    href: "/pdfs/policies/EHS Policy-2025.pdf#toolbar=0&navpanes=0&scrollbar=0",
  },
  {
    title: "ESG Policy 2025",
    href: "/pdfs/policies/ESG POLICY 2025.pdf#toolbar=0&navpanes=0&scrollbar=0",
  },
  {
    title: "EWRA Policy 2025",
    href: "/pdfs/policies/EWRA POLICY 2025.pdf#toolbar=0&navpanes=0&scrollbar=0",
  },
  {
    title: "Grievance and Whistleblowing Policy 2025",
    href: "/pdfs/grievances/PGR-Grievance-and-Whistleblowing-Policy-2025.pdf#toolbar=0&navpanes=0&scrollbar=0",
  },
  {
    title: "Human Rights & Labour Policy 2025",
    href: "/pdfs/policies/Human Rights-Bonded Labour and Labour Policy 2025.pdf#toolbar=0&navpanes=0&scrollbar=0",
  },
  {
    title: "Supply Chain Policy 2025",
    href: "/pdfs/policies/Supply Chain Policy 2025.pdf#toolbar=0&navpanes=0&scrollbar=0",
  },
];

const accreditations = [
  {
    title: "ISO 14001:2015",
    href: "/pdfs/accreditations/UAF0903141818_PROMISE GOLD REFINERY FZE_14001.pdf#toolbar=0&navpanes=0&scrollbar=0",
  },
  {
    title: "ISO 45001:2018",
    href: "/pdfs/accreditations/UAF0903451819_PROMISE GOLD REFINERY FZE_45001.pdf#toolbar=0&navpanes=0&scrollbar=0",
  },
  {
    title: "ISO 9001:2015",
    href: "/pdfs/accreditations/UAF090391817_PROMISE GOLD REFINERY FZE_9001.pdf#toolbar=0&navpanes=0&scrollbar=0",
  },
  {
    title: "ISO 37101:2016",
    href: "/pdfs/accreditations/UMS0903U2160_PROMISE GOLD REFINERY FZE_37101.pdf#toolbar=0&navpanes=0&scrollbar=0",
  },
  {
    title: "ISO 28000:2022",
    href: "/pdfs/accreditations/UMS0903U2161_PROMISE GOLD REFINERY FZE_28000.pdf#toolbar=0&navpanes=0&scrollbar=0",
  },
];

interface PdfModalProps {
  src: string;
  title: string;
  onClose: () => void;
}

function PdfModal({ src, title, onClose }: PdfModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-white shrink-0">
            <span className="text-sm font-semibold text-[#1F2B34] truncate pr-4">{title}</span>
            <button
              onClick={onClose}
              aria-label="Close"
              className="flex items-center justify-center w-8 h-8 rounded-full text-gray-400 hover:text-[#133C22] hover:bg-gray-100 transition-colors shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* PDF iframe — toolbar already hidden via URL params */}
          <iframe
            src={src}
            title={title}
            className="flex-1 w-full border-none"
          // Disable right-click context menu inside iframe via pointer-events is not possible,
          // but #toolbar=0&navpanes=0 already strips the browser PDF toolbar
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function CertificateAndPolicies() {
  const [activePdf, setActivePdf] = useState<{ src: string; title: string } | null>(null);

  const openPdf = (href: string, title: string) => {
    setActivePdf({ src: href, title });
  };

  const closePdf = () => {
    setActivePdf(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* PDF Modal */}
      {activePdf && (
        <PdfModal src={activePdf.src} title={activePdf.title} onClose={closePdf} />
      )}

      <div className="pt-20 md:pt-24">
        {/* Policies Section */}
        <section className="py-20 px-4 md:px-8">
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl md:text-4xl font-bold text-black text-center mb-8"
            >
              Policies & Certificates
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-gray-700 leading-relaxed mb-12 max-w-5xl mx-auto text-justify md:text-left text-sm md:text-base"
            >
              Promise Gold Refinery demonstrates its commitment to ethical and responsible business practices through a comprehensive set of policies and certifications. Our adherence to industry standards is evidenced by our AML-Certification, ensuring compliance with anti-money laundering and counter-financing of terrorism regulations. We maintain rigorous due diligence and risk assessment protocols, as outlined in our Due Diligence and Risk Assessment policy. Our dedication to fair practices is further reinforced by our Grievance policy, which provides a clear mechanism for addressing concerns. The Antibribery Policy underscores our zero-tolerance approach to corruption, while our Responsible Sourcing Policy guarantees that we procure materials ethically and sustainably. These policies collectively reflect Promise Gold Refinery's unwavering commitment to integrity, transparency, and responsible gold refining practices.
            </motion.p>
          </div>

          <div className="grid gap-4 max-w-3xl mx-auto">
            {policies.map((policy, index) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  onClick={() => openPdf(policy.href, policy.title)}
                  className="w-full flex items-center justify-between rounded-2xl border border-gray-200 px-6 py-4 text-base md:text-lg font-semibold text-[#1F2B34] hover:bg-[#133C22] hover:text-[#F6E6BF] hover:border-[#133C22] transition-colors text-left"
                >
                  <span>{policy.title}</span>
                  <span className="text-xl" aria-hidden="true">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Accreditations Section */}
        <section className="pt-10 pb-20 px-4 md:px-8">
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl md:text-4xl font-bold text-black text-center mb-8"
            >
              Accreditations & Compliance
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-gray-700 leading-relaxed mb-12 max-w-5xl mx-auto text-justify md:text-left text-sm md:text-base"
            >
              At Promise Gold Refinery, compliance is a core part of our operations. We regularly review and strengthen our policies while conducting periodic audits to evaluate our processes and systems, ensuring responsible and ethical business practices.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto px-4">
            {accreditations.map((accreditation, index) => (
              <motion.div
                key={accreditation.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: 0.15 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col items-center gap-4"
              >
                <div className="relative w-full flex flex-col items-center gap-3 rounded-2xl border border-[#C9A84C]/20 bg-linear-to-b from-[#C9A84C]/5 to-transparent px-3 pt-6 pb-4 hover:border-[#C9A84C]/60 hover:from-[#C9A84C]/10 transition-all duration-300 hover:shadow-[0_0_24px_rgba(201,168,76,0.12)]">

                  {/* ISO Icon with glow */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-[#C9A84C]/10 blur-md scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                      src="icons/iso.svg"
                      alt="ISO"
                      className="relative w-14 h-14 object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Title */}
                  <span className="text-xs font-bold tracking-wider text-[#C9A84C] text-center uppercase leading-tight">
                    {accreditation.title}
                  </span>

                  {/* View Button — opens modal, no direct link */}
                  <button
                    onClick={() => openPdf(accreditation.href, accreditation.title)}
                    className="relative overflow-hidden w-full text-center text-[10px] font-bold tracking-widest uppercase px-2 py-2 rounded-lg border border-[#C9A84C]/50 text-[#C9A84C] group-hover:border-[#C9A84C] transition-all duration-300
                      before:absolute before:inset-0 before:bg-[#C9A84C] before:translate-y-full before:transition-transform before:duration-300
                      hover:before:translate-y-0 hover:text-white"
                  >
                    <span className="relative z-10">View</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}