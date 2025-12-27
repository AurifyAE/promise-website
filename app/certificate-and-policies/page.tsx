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
              className="text-4xl md:text-5xl font-bold text-black text-center mb-8"
            >
                POLICIES AND CERTIFICATES
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
              className="text-gray-700 leading-relaxed mb-12 max-w-5xl mx-auto text-center md:text-left"
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
        </div>

        
      <Footer />
    </div>
  );
}