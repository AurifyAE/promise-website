import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const faqs = [
  {
    question: "What services does Promise Gold Refinery provide?",
    answer:
      "We offer gold and silver refining, certified assaying services, and sustainable metal recycling aligned with international standards.",
  },
  {
    question: "How do you ensure ethical sourcing?",
    answer:
      "All materials undergo strict due diligence against OECD guidelines to verify legitimate, conflict-free, and traceable origins.",
  },
  {
    question: "Can I request a custom quote?",
    answer:
      "Yes. Contact us with your material details and requirements, and our team will provide a tailored quote and timeline.",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative mt-20 h-56 md:h-64 w-full">
        <div className="absolute inset-0 bg-[#294734]" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Frequently Asked Questions</h1>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl space-y-8">
          {faqs.map((item) => (
            <div key={item.question} className="border-b border-gray-200 pb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-black mb-3">{item.question}</h2>
              <p className="text-gray-700 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

