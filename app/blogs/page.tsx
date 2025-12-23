import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const posts = [
  {
    title: "Responsible Gold Refining: Our Approach",
    date: "Dec 2025",
    summary:
      "How Promise Gold Refinery integrates OECD-aligned due diligence, traceability, and advanced technology to deliver ethical refining.",
  },
  {
    title: "Assaying Accuracy: Why Certification Matters",
    date: "Nov 2025",
    summary:
      "A look at our certified assaying workflows and quality controls that give clients confidence in every transaction.",
  },
  {
    title: "Closing the Loop with Metal Recycling",
    date: "Oct 2025",
    summary:
      "Eco-friendly recovery of precious metals from e-waste and industrial scrap, reducing environmental impact.",
  },
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative mt-20 h-56 md:h-64 w-full">
        <div className="absolute inset-0 bg-[#294734]" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Blogs</h1>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl grid gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-gray-200 p-6 shadow-sm transition hover:shadow-md"
            >
              <p className="text-sm text-gray-500">{post.date}</p>
              <h2 className="text-2xl font-semibold text-black mt-2">{post.title}</h2>
              <p className="text-gray-700 leading-relaxed mt-3">{post.summary}</p>
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

