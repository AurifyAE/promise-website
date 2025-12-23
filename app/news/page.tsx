import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const newsItems = [
  {
    title: "Promise Gold Refinery Achieves New Compliance Milestone",
    date: "Dec 2025",
    summary:
      "We completed our latest independent assurance review, reaffirming adherence to global responsible sourcing and AML standards.",
  },
  {
    title: "Facility Upgrade Boosts Recovery Efficiency",
    date: "Nov 2025",
    summary:
      "New precision equipment has increased recovery rates while reducing environmental impact across our refining lines.",
  },
  {
    title: "Community Outreach for Responsible Sourcing",
    date: "Oct 2025",
    summary:
      "We partnered with local suppliers to strengthen ESG practices and support traceable, conflict-free supply chains.",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative mt-20 h-56 md:h-64 w-full">
        <div className="absolute inset-0 bg-[#294734]" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">News</h1>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl grid gap-8">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-gray-200 p-6 shadow-sm transition hover:shadow-md"
            >
              <p className="text-sm text-gray-500">{item.date}</p>
              <h2 className="text-2xl font-semibold text-black mt-2">{item.title}</h2>
              <p className="text-gray-700 leading-relaxed mt-3">{item.summary}</p>
              <button className="mt-4 inline-flex items-center gap-2 text-[#294734] font-semibold hover:underline">
                Read more
              </button>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

