'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

// const servicesSubmenu = [
//   { label: 'Gold Refining', path: '/services/gold-refining' },
//   { label: 'Silver Refining', path: '/services/silver-refining' },
//   { label: 'Metal Recycling', path: '/services/metal-recycling' },
//   { label: 'Assaying Services', path: '/services/assaying-services' },
// ];

type MenuItem = {
  label: string;
  path: string;
  submenu?: Array<{ label: string; path: string }>;
};

const menuItems: MenuItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  // { label: 'Services', path: '/services', submenu: servicesSubmenu },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
  // { label: 'Team', path: '/teams' },
  { label: 'Contact', path: '/contact-us' },
  { label: 'Policies & Certifications', path: '/certificate-and-policies' },
  { label: 'Gallery', path: '/gallery' },
];


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const pathname = usePathname();

  const toggle = () => setIsOpen(v => !v);
  const close = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
  };
  
  const toggleSubmenu = (path: string) => {
    setOpenSubmenu(openSubmenu === path ? null : path);
  };

  return (
    <>
      {/* Fixed Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#294734]/85 backdrop-blur-md shadow-2xl">
        <div className="relative flex items-center justify-between px-6 py-5 md:px-10 h-20 md:h-24">
          {/* Hamburger Button — visible only on mobile */}
          <button
            onClick={toggle}
            className="relative z-50 flex h-8 w-10 flex-col justify-center gap-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            {/* Top line → becomes top arm of X */}
            <span
              className={`block h-1 w-9 bg-[#A97C50]/60 rounded-full transition-all duration-300 origin-center ${
                isOpen
                  ? 'rotate-45 translate-y-1'
                  : 'rotate-0 translate-y-0'
              }`}
            />

            {/* Middle line → fades out */}
            <span
              className={`block h-1 w-9 bg-[#A97C50]/60 rounded-full transition-all duration-300 ${
                isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
              }`}
            />

            {/* Bottom line → becomes bottom arm of X */}
            <span
              className={`block h-1 w-9 bg-[#A97C50]/60 rounded-full transition-all duration-300 origin-center ${
                isOpen
                  ? '-rotate-45 -translate-y-3'
                  : 'rotate-0 translate-y-0'
              }`}
            />
          </button>
          

          {/* Logo — Centered on mobile, left-aligned on md+ */}
          <div className="absolute inset-x-0 flex justify-center pointer-events-none md:pointer-events-auto md:static">
            <Link href="/" onClick={close} className="pointer-events-auto">
              <Image
                src="/images/home/promise-refinery-logo.svg"
                alt="Promise Gold Refinery"
                width={200}
                height={36}
                priority
                className="h-24 w-auto md:h-36"
              />
            </Link>
          </div>
          
          {/* Contact Us Dropdown with delayed open/close on hover/focus */}
          <div className="relative w-32 h-10 flex items-center justify-end"
            onMouseEnter={() => {
              clearTimeout((window as any).__contactDropdownTimeout__);
              (window as any).__contactDropdownTimeout__ = setTimeout(() => setDropdownOpen(true), 160);
            }}
            onMouseLeave={() => {
              clearTimeout((window as any).__contactDropdownTimeout__);
              (window as any).__contactDropdownTimeout__ = setTimeout(() => setDropdownOpen(false), 180);
            }}
            onFocus={() => {
              clearTimeout((window as any).__contactDropdownTimeout__);
              (window as any).__contactDropdownTimeout__ = setTimeout(() => setDropdownOpen(true), 160);
            }}
            onBlur={() => {
              clearTimeout((window as any).__contactDropdownTimeout__);
              (window as any).__contactDropdownTimeout__ = setTimeout(() => setDropdownOpen(false), 180);
            }}
            tabIndex={-1}
          >
            <button
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#294734]/90 hover:bg-[#294734] text-white text-sm font-medium transition focus:outline-none"
              tabIndex={0}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onClick={() => setDropdownOpen(v => !v)}
              onFocus={() => setDropdownOpen(true)}
              onBlur={e => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setDropdownOpen(false);
                }
              }}
            >
              Contact Us
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 20 20"><path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div
              className={`
                absolute right-0 top-10 mt-2 w-44 bg-white rounded-xl shadow-lg border border-zinc-200
                transition-opacity duration-200 z-50
                ${dropdownOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
              `}
              tabIndex={-1}
              onMouseEnter={() => {
                clearTimeout((window as any).__contactDropdownTimeout__);
                setDropdownOpen(true);
              }}
              onMouseLeave={() => {
                clearTimeout((window as any).__contactDropdownTimeout__);
                setDropdownOpen(false);
              }}
            >
                    <ul className="py-2">
                      {/* WhatsApp Option */}
                      <li>
                        <a
                          href="https://wa.me/971505794931"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-2 hover:bg-zinc-100 transition text-[#294734]"
                        >
                          <Image
                            src="/icons/whatsapp-yellow.svg"
                            alt="WhatsApp"
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                          WhatsApp
                        </a>
                      </li>
                      {/* Email Option */}
                      <li>
                        <a
                          href="mailto:contact@promise-refinery.com"
                          className="flex items-center gap-3 px-4 py-2 hover:bg-zinc-100 transition text-[#294734]"
                        >
                          <Image
                            src="/icons/email-yellow.svg"
                            alt="Email"
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                          Email
                        </a>
                      </li>
                      {/* Call Option */}
                      <li>
                        <button
                          type="button"
                          onClick={async (e) => {
                            e.preventDefault();
                            // On mobile, use tel: link
                            if (window.innerWidth < 1024) {
                              window.location.href = 'tel:+971505794931';
                              return;
                            }
                            // On desktop, copy to clipboard
                            try {
                              await navigator.clipboard.writeText('+971 50 579 4931');
                              setPhoneCopied(true);
                              setTimeout(() => {
                                setPhoneCopied(false);
                              }, 2000);
                            } catch (err) {
                              // Fallback: open tel link if clipboard fails
                              window.location.href = 'tel:+971505794931';
                            }
                          }}
                          className="flex items-center gap-3 px-4 py-2 hover:bg-zinc-100 transition text-[#294734] group w-full text-left relative"
                        >
                          <Image
                            src="/icons/phone-yellow.svg"
                            alt="Call"
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                          <span className="relative">
                            Call
                            <span className="hidden lg:inline-block absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 rounded bg-zinc-100 text-[#294734] text-xs shadow transition-opacity duration-200 opacity-0 group-hover:opacity-100 group-hover:visible whitespace-nowrap">
                              +971 50 579 4931
                            </span>
                            {/* Copied message - only visible on desktop */}
                            {phoneCopied && (
                              <motion.span
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="hidden lg:inline-block absolute left-full top-12 px-2 py-1 rounded bg-emerald-100 text-emerald-800 text-xs shadow whitespace-nowrap z-50"
                              >
                                Copied!
                              </motion.span>
                            )}
                          </span>
                        </button>
                      </li>
                    </ul>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Sidebar */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="fixed inset-0 z-40 pointer-events-none"
      >
        {/* Backdrop */}
        <motion.div
          variants={{
            open: { opacity: 1, pointerEvents: "auto" },
            closed: { opacity: 0, pointerEvents: "none" },
          }}
          onClick={close}
          className="absolute inset-0 bg-black/60"
        />

        {/* Sidebar */}
        <motion.aside
          variants={{
            open: { x: 0 },
            closed: { x: "-100%" },
          }}
          transition={{ type: "spring", damping: 35, stiffness: 300 }}
          className="absolute left-0 top-0 h-full w-96 max-w-[90vw] bg-[#133C22] shadow-2xl pointer-events-auto flex flex-col border-l border-[#333]"
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-8 border-b border-[#333]">
            <Image
              src="/images/home/promise-refinery-logo.svg"
              alt="Logo"
              width={160}
              height={42}
              className="h-10 w-auto"
            />
            <button
              onClick={close}
              className="text-4xl text-gray-400 hover:text-[#A97C50] transition"
            >
              ×
            </button>
          </div>

          {/* Animated Menu Items */}
          <nav className="flex-1 p-6">
            <motion.ul
              variants={{
                open: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.2 }
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 }
                }
              }}
              className="space-y-2"
            >
              {menuItems.map((item) => {
                const active = pathname === item.path || (item.submenu && item.submenu.some(sub => pathname === sub.path));
                const isSubmenuOpen = openSubmenu === item.path;

                return (
                  <motion.li
                    key={item.path}
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: { y: { stiffness: 1000, velocity: -100 } }
                      },
                      closed: {
                        y: 50,
                        opacity: 0,
                        transition: { y: { stiffness: 1000 } }
                      }
                    }}
                    whileHover={{ scale: 1.03, x: 8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.submenu ? (
                      <div>
                        <button
                          onClick={() => toggleSubmenu(item.path)}
                          className={`w-full flex items-center justify-between rounded-xl px-4 py-2 font-medium transition-all duration-200 ${
                            active
                              ? "bg-[#A97C50]/15 text-[#A97C50] border border-[#A97C50]/40 shadow-inner"
                              : "text-gray-300 hover:bg-[#294734] hover:text-[#A97C50]"
                          }`}
                        >
                          <span>{item.label}</span>
                          <span
                            className={`transition-transform duration-200 ${
                              isSubmenuOpen ? "-rotate-90" : "rotate-90"
                            }`}
                          >
                            <svg
                              className="w-3 h-3 text-current"
                              viewBox="0 0 10 10"
                              aria-hidden="true"
                            >
                              <path
                                d="M3 1.5L7 5 3 8.5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </button>
                        {isSubmenuOpen && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 ml-4 space-y-1"
                          >
                            {item.submenu.map((subItem) => {
                              const subActive = pathname === subItem.path;
                              return (
                                <motion.li
                                  key={subItem.path}
                                  initial={{ x: -20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <Link
                                    href={subItem.path}
                                    onClick={close}
                                    className={`block rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                                      subActive
                                        ? "bg-[#A97C50]/20 text-[#A97C50] border border-[#A97C50]/30"
                                        : "text-gray-400 hover:bg-[#294734] hover:text-[#A97C50]"
                                    }`}
                                  >
                                    {subItem.label}
                                  </Link>
                                </motion.li>
                              );
                            })}
                          </motion.ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.path}
                        onClick={close}
                        className={`block rounded-xl px-4 py-2 font-medium transition-all duration-200 ${
                          active
                            ? "bg-[#A97C50]/15 text-[#A97C50] border border-[#A97C50]/40 shadow-inner"
                            : "text-gray-300 hover:bg-[#294734] hover:text-[#A97C50]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.li>
                );
              })}
            </motion.ul>
          </nav>

          {/* Footer */}
          <div className="border-t border-[#A97C50]/40 p-8 text-center text-sm text-gray-500">
            © 2025 Promise Gold Refinery. All rights reserved.
          </div>
        </motion.aside>
      </motion.div>
    </>
  );
}