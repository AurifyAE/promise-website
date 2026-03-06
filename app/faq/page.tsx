"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does Promise Gold Refinery provide?",
    answer: (
      <p>
        We offer gold and silver refining, certified assaying services, and sustainable metal recycling aligned with international standards.
      </p>
    ),
  },
  {
    question: "How do you ensure ethical sourcing?",
    answer: (
      <p>
        All materials undergo strict due diligence against OECD guidelines to verify legitimate, conflict-free, and traceable origins.
      </p>
    ),
  },
  {
    question: "Can I request a custom quote?",
    answer: (
      <p>
        Yes. Contact us with your material details and requirements, and our team will provide a tailored quote and timeline.
      </p>
    ),
  },
  {
    question: "How can my company Open Account with PGR?",
    answer: (
      <div className="space-y-4">
        <p>
          To open an account, your company must first contact the Compliance Department of Promise Gold Refinery FZE through the email address provided in the "Contact Us" section of our website.
        </p>
        <p>
          Our Compliance Team will provide you with the Account Opening Form and required declarations, which must be completed and submitted along with the supporting documents listed below for initial compliance assessment.
        </p>
        <div className="mt-4">
          <p className="font-semibold text-gray-900 mb-3 text-sm md:text-base">List of Documents to be provided to Open Account with Promise Gold Refinery:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            {[
              "Trade Licence Copy",
              "Memorandum of Association",
              "Certificate of Incorporation",
              "Share Certificates",
              "TRN and CTRN Certificate",
              "Latest Audited Financials of the Company",
              "Latest Bank Statement",
              "Letter of Good Standing",
              "Proof of Go AML Registration",
              "Tenancy Contract | Utility Bills Under the name of Entity",
              "AML-CFT Policy of Entity",
              "Supply Chain Policy",
              "Valid Passport Copy All Shareholder and Manager",
              "Emirate ID of All Shareholder and Manager",
              "Visa copy of All Shareholder and Manager",
              "Residency Proof Tenancy Contract | Utility Bill of all Shareholders",
              "Duly Filled signed and Stamped copy of Account Opening Form",
              "Duly Filled signed and Stamped copy of all Declarations"
            ].map((doc, i) => (
              <div key={i} className="flex gap-3 text-xs md:text-sm">
                <span className="text-gold-600 font-bold">{i + 1}.</span>
                <span className="text-gray-600">{doc}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 p-4 md:p-6 bg-gray-50 rounded-xl border border-gray-100 text-xs md:text-sm text-gray-600 space-y-3">
          <p><span className="font-semibold text-gray-900">Note:</span> We only accept documents in English or Arabic.</p>
          <p>The list above are basic minimum requirements, we may request for additional supporting documents.</p>
          <p>
            Documents and information including the company, shareholders, beneficial owners, and person/s who will operate the account are processed and checked against the Screening database and other third-party due diligence software and service providers as part of our compliance procedure.
          </p>
          <p className="text-gold-700 font-medium">
            Promise Gold reserves the right to reject or deny an application without disclosing the reason.
          </p>
        </div>
      </div>
    ),
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Banner Section */}
      <section className="relative mt-20 h-56 md:h-72 w-full overflow-hidden">
        <div className="absolute inset-0 bg-[#294734]" />
        <div className="absolute inset-0 bg-black/30" />
        {/* Decorative Elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl"></div>

        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Frequently Asked <span className="text-gold-400">Questions</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-gray-200 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed"
            >
              <p>
                We provide clear answers to common operational and procedural questions regarding refining, assay, processing timelines, and settlement practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`
                                        group border rounded-2xl transition-all duration-300 overflow-hidden
                                        ${isOpen
                      ? 'border-gold-200 bg-white shadow-lg shadow-gold-500/5'
                      : 'border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-200'
                    }
                                    `}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors"
                  >
                    <span className={`
                                            text-lg md:text-xl font-bold transition-colors
                                            ${isOpen ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'}
                                        `}>
                      {item.question}
                    </span>
                    <div className={`
                                            flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-300
                                            ${isOpen ? 'bg-gold-500 text-white rotate-180' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'}
                                        `}>
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 md:px-8 pb-8 pt-2">
                          <div className="h-px w-full bg-gray-100 mb-6"></div>
                          <div className="text-gray-600 leading-relaxed text-sm md:text-base">
                            {item.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

