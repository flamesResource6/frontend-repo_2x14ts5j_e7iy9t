import { ArrowRight, BookOpen, Clock } from "lucide-react";

const posts = [
  {
    title: "Preparing Your Heart for Umrah: A Practical Guide",
    excerpt:
      "From intention to etiquette, explore how to approach your journey with focus and sincerity.",
    readingTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1549572189-90ca77df5b25?q=80&w=1740&auto=format&fit=crop",
  },
  {
    title: "Choosing the Right Package: What Truly Matters",
    excerpt:
      "Not all itineraries are equal. Learn how to evaluate hotels, flights, and guidance.",
    readingTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1590229114800-34597dc40a1a?q=80&w=1740&auto=format&fit=crop",
  },
  {
    title: "Essential Ziyarat in Makkah and Madinah",
    excerpt:
      "A concise overview of historical sites to enrich your understanding and connection.",
    readingTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1523441413437-f043f9bdfc9d?q=80&w=1740&auto=format&fit=crop",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="bg-emerald-50/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Insights & Resources</h2>
          <p className="mt-3 text-gray-600">Recent articles to help you prepare for a purposeful journey.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img src={post.image} alt="" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <BookOpen className="h-4 w-4" />
                  <span>Umrah Guide</span>
                  <span className="mx-1">•</span>
                  <Clock className="h-4 w-4" />
                  <span>{post.readingTime}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{post.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:underline">
                  Read article <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
