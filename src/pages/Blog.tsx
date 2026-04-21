import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Search, Clock, ChevronRight } from "lucide-react";
import { useEffect } from "react";

const posts = [
  {
    id: "1",
    title: "Open Cell vs Closed Cell Spray Foam: Which Is Right for Your Louisiana Home?",
    category: "INSULATION TIPS",
    date: "April 15, 2026",
    excerpt: "Understand the key differences between foam types and how the Louisiana humidity affects your choice.",
    image: "/images/1-1.png",
  },
  {
    id: "2",
    title: "How Much Can Spray Foam Insulation Save You Per Month in Louisiana?",
    category: "ENERGY SAVINGS",
    date: "April 10, 2026",
    excerpt: "We break down the real-world utility bill reductions seen by local homeowners after switching to foam.",
    image: "/images/2.png",
  },
  {
    id: "3",
    title: "5 Signs Your Home's Insulation Is Failing",
    category: "HOME MAINTENANCE",
    date: "April 5, 2026",
    excerpt: "If your AC is constantly running or your walls feel warm to the touch, it's time for an upgrade.",
    image: "/images/3.png",
  },
  {
    id: "4",
    title: "Commercial vs. Residential Spray Foam: What's the Difference?",
    category: "INDUSTRY NEWS",
    date: "March 28, 2026",
    excerpt: "Scale, density, and equipment — how commercial projects differ from residential installs.",
    image: "/images/4-dec.png",
  },
  {
    id: "5",
    title: "Why Louisiana's Climate Makes Spray Foam a Must-Have",
    category: "LOCAL INSIGHTS",
    date: "March 20, 2026",
    excerpt: "Moisture barriers and thermal breaks are the only way to beat the Southern humidity.",
    image: "/images/5.png",
  },
  {
    id: "6",
    title: "The Complete Guide to Retrofit Insulation for Older Homes",
    category: "RETROFIT GUIDE",
    date: "March 15, 2026",
    excerpt: "Don't tear down walls. Learn how injection foam can modernize your heritage home's efficiency.",
    image: "/images/6-1.png",
  },
];

export default function Blog() {
  useEffect(() => {
    document.title = "Spray Foam Insulation Tips & Insights | Bayou Spray Foam Blog";
        const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!el) { el = document.createElement("link"); el.setAttribute("rel", rel); document.head.appendChild(el); }
      el.setAttribute("href", href);
    };
    setMeta("description", "Expert articles on spray foam insulation, energy savings, and Louisiana home improvement from Bayou Spray Foam — your Northwest Louisiana insulation specialists.");
    setMeta("og:title", "Spray Foam Insulation Tips & Insights | Bayou Spray Foam Blog", true);
    setMeta("og:description", "Expert articles on spray foam insulation, energy savings, and Louisiana home improvement from Bayou Spray Foam — your Northwest Louisiana insulation specialists.", true);
    setMeta("og:url", "https://bayouspray.com/blog", true);
    setLink("canonical", "https://bayouspray.com/blog");
  }, []);

  return (
    <div className="pt-24 min-h-screen font-sans">
      <section className="bg-bayou-deep-green py-16 text-center">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-extrabold text-white mb-4"
          >
            Spray Foam Insights
          </motion.h1>
          <div className="text-white/80 font-display font-bold uppercase tracking-widest text-sm">
            <Link to="/" className="hover:text-bayou-gold">Home</Link>
            <span className="mx-2 opacity-30 text-white">|</span>
            Blog
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left — Blog Posts */}
            <div className="lg:w-[70%] space-y-12">
              {posts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i % 3) * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row gap-8 bg-warm-cream rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all"
                >
                  <div className="md:w-[40%] overflow-hidden h-64 md:h-auto">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="md:w-[60%] p-8 flex flex-col justify-center">
                    <span className="text-bayou-gold font-display font-bold text-xs uppercase tracking-widest mb-2 block">
                      {post.category}
                    </span>
                    <Link to={`/blog/${post.id}`}>
                      <h2 className="text-2xl font-display font-bold text-bayou-deep-green mb-4 hover:text-bayou-gold transition-colors leading-tight">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-dark-charcoal/70 mb-6 line-clamp-3 font-medium">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-dark-charcoal/10">
                      <div className="flex items-center gap-2 text-dark-charcoal/40 text-xs font-bold">
                        <Clock size={16} />
                        {post.date}
                      </div>
                      <Link to={`/blog/${post.id}`} className="flex items-center gap-2 text-bayou-gold font-display font-extrabold text-sm hover:translate-x-2 transition-transform">
                        READ MORE <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Sidebar */}
            <aside className="lg:w-[30%] space-y-12">
              <div className="bg-warm-cream p-8 rounded-2xl shadow-xl">
                 <h4 className="font-display font-extrabold text-xl mb-6 text-bayou-deep-green border-b-2 border-bayou-gold pb-2 w-fit">Search</h4>
                 <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search articles..." 
                      className="w-full px-5 py-4 rounded-lg bg-white border border-transparent focus:border-bayou-gold outline-none shadow-sm"
                    />
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-charcoal/30" />
                 </div>
              </div>

              <div className="bg-bayou-deep-green p-8 rounded-2xl shadow-xl text-white">
                 <h4 className="font-display font-extrabold text-xl mb-6 border-b-2 border-bayou-gold pb-2 w-fit">Need Help?</h4>
                 <p className="text-white/70 mb-8 font-medium">Not sure which foam is right for your project? Talk to a specialist today.</p>
                 <a href="tel:3187323061" className="w-full bg-bayou-gold text-white text-center py-4 rounded-lg font-display font-extrabold block mb-4 hover:translate-y-[-2px] transition-all">
                    CALL US NOW
                 </a>
                 <Link to="/contact" className="w-full border-2 border-white text-white text-center py-4 rounded-lg font-display font-extrabold block hover:bg-white hover:text-bayou-deep-green transition-all">
                    FREE QUOTE
                 </Link>
              </div>

              <div className="bg-warm-cream p-8 rounded-2xl shadow-xl">
                 <h4 className="font-display font-extrabold text-xl mb-6 text-bayou-deep-green border-b-2 border-bayou-gold pb-2 w-fit">Popular Posts</h4>
                 <div className="space-y-6">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="flex gap-4 group cursor-pointer">
                            <div className="w-16 h-16 rounded overflow-hidden shrink-0">
                                <img src={[
                                    "/images/274693112_324838713012440_6417728910726516074_n.jpg",
                                    "/images/274806584_324838736345771_81741261338194522_n.jpg",
                                    "/images/283607484_366864912143153_1078984636564088581_n.jpg",
                                ][i - 1]} alt="Popular" className="w-full h-full object-cover" />
                            </div>
                            <h5 className="font-display font-bold text-sm text-dark-charcoal group-hover:text-bayou-gold transition-colors leading-snug">
                                How Much Can Spray Foam Save You Per Month?
                            </h5>
                        </div>
                    ))}
                 </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
