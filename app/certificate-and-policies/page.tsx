import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { ArrowRight } from "lucide-react";

const policies = [
  {
    title:
      "Anti Money Laundering And Countering The Financing Of Terrorism Policy",
    href: "#aml-cft-policy",
  },
  {
    title: "Grevience Policy",
    href: "#grievance-policy",
  },
  {
    title: "Responsible Sourcing Policy",
    href: "#responsible-sourcing",
  },
  {
    title: "Due Diligence and Risk Assessment 2023",
    href: "#due-diligence-2023",
  },
  {
    title: "Antibribery Policy 2023",
    href: "#antibribery-2023",
  },
];

export default function CertificateAndPolicies() {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />

        <div className="pt-20 md:pt-24">
        <section className="py-20 px-4 md:px-8">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-8">
                POLICIES AND CERTIFICATES
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto text-center md:text-left">
                Promise Gold Refinery demonstrates its commitment to ethical and responsible business practices through a comprehensive set of policies and certifications. Our adherence to industry standards is evidenced by our AML-Certification, ensuring compliance with anti-money laundering and counter-financing of terrorism regulations. We maintain rigorous due diligence and risk assessment protocols, as outlined in our Due Diligence and Risk Assessment policy. Our dedication to fair practices is further reinforced by our Grievance policy, which provides a clear mechanism for addressing concerns. The Antibribery Policy underscores our zero-tolerance approach to corruption, while our Responsible Sourcing Policy guarantees that we procure materials ethically and sustainably. These policies collectively reflect Promise Gold Refinery's unwavering commitment to integrity, transparency, and responsible gold refining practices.
            </p>
          </div>

          <div className="grid gap-4 max-w-3xl mx-auto">
            {policies.map((policy) => (
              <a
                key={policy.title}
                href={policy.href}
                className="flex items-center justify-between rounded-2xl border border-gray-200 px-6 py-4 text-base md:text-lg font-semibold text-[#1F2B34] hover:bg-[#133C22] hover:text-[#F6E6BF] hover:border-[#133C22] transition-colors"
              >
                <span>{policy.title}</span>
                <span className="text-xl" aria-hidden="true">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>
        </section>

        </div>

        
      <Footer />
    </div>
  );
}