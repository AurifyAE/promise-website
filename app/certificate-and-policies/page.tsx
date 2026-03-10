'use client';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


const policies = [
  {
    title: "View Supplier Chain Risk Policy 2024",
    href: "/pdfs/policies/Supplier-Chain-Risk-Policy-2024.pdf",
  },
  {
    title: "View Risk Based Assessment Policy 2024",
    href: "/pdfs/policies/Risk-Based-Assessment-Policy-2024.pdf",
  },
  {
    title: "View PGR-AML CFT Policy 2024",
    href: "/pdfs/policies/PGR-AML-CFT-Policy-2024.pdf",
  },
  {
    title: "View Independent Reasonable Assurance Report 2024",
    href: "/pdfs/policies/IndependentReasonableAssuranceReport-PromiseGold2025FINAL.pdf",
  },
  {
    title: "View PGR MOE Refiners Compliance Report 2024",
    href: "/pdfs/policies/PGR-MOE-Refiners-Compliance-Report-2024.pdf",
  },
  {
    title: "MOE Reviewers Assurance report Promise Gold signed",
    href: "/pdfs/policies/MOE-Reviewers-Assurance-report-Promise-Gold-signed.pdf"
  }
];

const accreditations = [
  {
    title: "ISO 14001:2015",
    href: "/pdfs/accreditations/UAF0903141818_PROMISE GOLD REFINERY FZE_14001.pdf",
  },
  {
    title: "ISO 45001:2018",
    href: "/pdfs/accreditations/UAF0903451819_PROMISE GOLD REFINERY FZE_45001.pdf",
  },
  {
    title: "ISO 9001:2015",
    href: "/pdfs/accreditations/UAF090391817_PROMISE GOLD REFINERY FZE_9001.pdf",
  },
  {
    title: "ISO 37101:2016",
    href: "/pdfs/accreditations/UMS0903U2160_PROMISE GOLD REFINERY FZE_37101.pdf",
  },
  {
    title: "ISO 28000:2022",
    href: "/pdfs/accreditations/UMS0903U2161_PROMISE GOLD REFINERY FZE_28000.pdf",
  }
];

export default function CertificateAndPolicies() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-20 md:pt-24">
        <section className="py-20 px-4 md:px-8">
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-2xl md:text-4xl font-bold text-black text-center mb-8"
            >
              Policies & Certificates
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
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
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href={policy.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-gray-200 px-6 py-4 text-base md:text-lg font-semibold text-[#1F2B34] hover:bg-[#133C22] hover:text-[#F6E6BF] hover:border-[#133C22] transition-colors"
                >
                  <span>{policy.title}</span>
                  <span className="text-xl" aria-hidden="true">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="pt-10 pb-20 px-4 md:px-8">
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-2xl md:text-4xl font-bold text-black text-center mb-8"
            >
              Accreditations & Compliance
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-gray-700 leading-relaxed mb-12 max-w-5xl mx-auto text-justify md:text-left text-sm md:text-base"
            >
              At Tigris Gold, we take due cognizance of compliance and revise our policies regularly. Subsequently, we do conduct periodical audits to access the impact being made in process and system to ensure fair business practice.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto px-4">
            {accreditations.map((accreditation, index) => (
              <motion.div
                key={accreditation.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.55,
                  delay: 0.15 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col items-center gap-4"
              >
                {/* Card */}
                <div className="relative w-full flex flex-col items-center gap-3 rounded-2xl border border-[#C9A84C]/20 bg-gradient-to-b from-[#C9A84C]/5 to-transparent px-3 pt-6 pb-4 hover:border-[#C9A84C]/60 hover:from-[#C9A84C]/10 transition-all duration-300 hover:shadow-[0_0_24px_rgba(201,168,76,0.12)]">

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

                  {/* Download Button */}
                  <Link
                    href={accreditation.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden w-full text-center text-[10px] font-bold tracking-widest uppercase px-2 py-2 rounded-lg border border-[#C9A84C]/50 text-[#C9A84C] group-hover:border-[#C9A84C] transition-all duration-300
                      before:absolute before:inset-0 before:bg-[#C9A84C] before:translate-y-full before:transition-transform before:duration-300
                      hover:before:translate-y-0 hover:text-white"
                  >
                    <span className="relative z-10">View Download</span>
                  </Link>
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