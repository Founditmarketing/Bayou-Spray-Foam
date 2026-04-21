import { motion } from "motion/react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Clock, User, ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const posts: Record<string, {
  title: string;
  category: string;
  date: string;
  image: string;
  intro: string;
  h2: string;
  body: string;
  quote: string;
  h3: string;
  body2: string;
  verdict: string;
}> = {
  "1": {
    title: "Open Cell vs Closed Cell Spray Foam: Which Is Right for Your Louisiana Home?",
    category: "INSULATION TIPS",
    date: "April 15, 2026",
    image: "/images/1-1.png",
    intro: "When it comes to insulating your home in the Deep South, especially in high-humidity areas like Choudrant and Ruston, the choice between open cell and closed cell spray foam is one of the most critical decisions you'll make.",
    h2: "Understanding the Core Differences",
    body: "Both types of foam offer superior performance compared to traditional fiberglass or cellulose. However, their physical properties differ significantly. Open cell foam is \"breathable\" and softer, while closed cell is dense and rigid.",
    quote: "\"In Louisiana, the goal isn't just to keep heat out — it's to control moisture. Spray foam is the only material that solves both problems simultaneously.\"",
    h3: "Why Louisiana Climate Matters",
    body2: "Our humidity is relentless. In crawlspaces and on exterior-facing walls, closed cell spray foam acts as a vapor barrier, preventing moisture from seeping into your wood framing. In attics, open cell foam is often preferred for its cost-effectiveness and flexibility.",
    verdict: "Ultimately, the best choice depends on your specific budget and the area being insulated. For many Northwest Louisiana homeowners, a hybrid approach works best.",
  },
  "2": {
    title: "How Much Can Spray Foam Insulation Save You Per Month in Louisiana?",
    category: "ENERGY SAVINGS",
    date: "April 10, 2026",
    image: "/images/2.png",
    intro: "Louisiana homeowners are no strangers to steep utility bills — especially during summer months when the AC never seems to catch a break. Spray foam insulation is one of the most effective ways to dramatically reduce those costs.",
    h2: "The Numbers Don't Lie",
    body: "On average, homeowners who switch to spray foam insulation see a 30–50% reduction in their heating and cooling costs. For a home with a $300/month summer electric bill, that's $90–$150 back in your pocket every single month.",
    quote: "\"After Bayou Spray Foam insulated our attic, our electric bill dropped by nearly $200 the very first month. I wish we'd done it years ago.\"",
    h3: "What Drives the Savings",
    body2: "Traditional insulation allows conditioned air to escape through gaps and cracks in your building envelope. Spray foam expands and seals those gaps completely, forcing your HVAC system to do far less work — and run far less often.",
    verdict: "The typical payback period for spray foam insulation in Louisiana is 3–5 years, after which you're essentially getting free savings every month for the life of the foam.",
  },
  "3": {
    title: "5 Signs Your Home's Insulation Is Failing",
    category: "HOME MAINTENANCE",
    date: "April 5, 2026",
    image: "/images/3.png",
    intro: "Most homeowners don't think about their insulation until something goes wrong — but by then, they've already been losing money for months or years. Here are five warning signs that your insulation is no longer doing its job.",
    h2: "1. Your AC Runs Constantly",
    body: "If your HVAC system seems to never turn off, especially in summer, that's a red flag. A properly insulated home holds conditioned air effectively. If the air is escaping, your system will run overtime trying to maintain your set temperature.",
    quote: "\"Insulation is invisible infrastructure. When it fails, you feel it in your comfort and you see it in your bill.\"",
    h3: "2. Uneven Temperatures Room to Room",
    body2: "Walking from a cool living room into a stuffy bedroom is a classic sign of missing or degraded insulation. Hot spots and cold drafts indicate that certain areas of your envelope aren't sealed. Other warning signs include high humidity indoors, walls that feel warm to the touch in summer, and visible gaps around windows or doors.",
    verdict: "If you're experiencing any of these issues, a spray foam assessment from Bayou Spray Foam can identify exactly where your home is losing efficiency — and fix it for good.",
  },
  "4": {
    title: "Commercial vs. Residential Spray Foam: What's the Difference?",
    category: "INDUSTRY NEWS",
    date: "March 28, 2026",
    image: "/images/4-dec.png",
    intro: "Spray foam is spray foam, right? Not quite. While the core chemistry is the same, commercial and residential spray foam projects differ significantly in scope, equipment, foam density, and code requirements.",
    h2: "Scale and Equipment",
    body: "Commercial projects — think warehouses, metal buildings, and distribution centers — require high-output spray rigs capable of applying foam across thousands of square feet quickly and consistently. Residential rigs are precision tools designed for attics, crawlspaces, and wall cavities.",
    quote: "\"Commercial spray foam is about total enclosure at scale. Residential is about surgical precision in occupied spaces.\"",
    h3: "Code and Density Requirements",
    body2: "Commercial buildings are subject to stricter Louisiana energy codes that mandate higher R-values and, in many cases, fire-rated foam products. Closed cell foam is almost always required in commercial applications for its structural rigidity and higher R-value per inch.",
    verdict: "Whether you're insulating a 2,000 sq ft home or a 50,000 sq ft warehouse, Bayou Spray Foam has the equipment and experience to get the job done right.",
  },
  "5": {
    title: "Why Louisiana's Climate Makes Spray Foam a Must-Have",
    category: "LOCAL INSIGHTS",
    date: "March 20, 2026",
    image: "/images/5.png",
    intro: "Louisiana isn't like the rest of the country. Our climate — defined by crushing summer heat, extreme humidity, and mild but damp winters — creates insulation challenges that most standard products simply weren't designed to handle.",
    h2: "The Humidity Problem",
    body: "Relative humidity in Northwest Louisiana regularly exceeds 80–90% during summer months. Traditional insulation materials like fiberglass batts can absorb moisture, lose R-value when wet, and become breeding grounds for mold. Spray foam, especially closed cell, doesn't absorb moisture and acts as its own vapor barrier.",
    quote: "\"In Louisiana, insulation isn't just about temperature — it's about moisture management. Spray foam is the only product that handles both.\"",
    h3: "Built for the Bayou",
    body2: "Spray foam's airtight seal prevents the infiltration of humid outdoor air into your conditioned space. This reduces the load on your HVAC system, prevents condensation inside your walls, and keeps your indoor air quality high all year round.",
    verdict: "For Louisiana homeowners, spray foam isn't a premium upgrade — it's the right tool for the job. No other insulation product handles our climate as effectively.",
  },
  "6": {
    title: "The Complete Guide to Retrofit Insulation for Older Homes",
    category: "RETROFIT GUIDE",
    date: "March 15, 2026",
    image: "/images/6-1.png",
    intro: "Thousands of homes across Northwest Louisiana were built before modern insulation standards existed. If your home was built before 1990, there's a strong chance it's operating at a fraction of its potential efficiency — costing you hundreds to thousands of dollars a year.",
    h2: "What Is Retrofit Insulation?",
    body: "Retrofit insulation is the process of adding or improving insulation in an existing structure without full demolition. Modern injection foam techniques allow Bayou Spray Foam to fill wall cavities, attic spaces, and crawlspaces through small access points — minimal mess, maximum impact.",
    quote: "\"You don't have to tear down walls to get a modern thermal envelope. Retrofit spray foam changed everything for our older home.\"",
    h3: "The Retrofit Process",
    body2: "Our team starts with a thermal assessment to identify exactly where your home is losing efficiency. We then strategically apply foam through access points, sealing gaps and bringing your building envelope up to modern standards — without a full renovation.",
    verdict: "Retrofit spray foam is one of the highest-ROI home improvements available to Louisiana homeowners. If your home is over 30 years old, a retrofit assessment is well worth the call.",
  },
};

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = id ? posts[id] : null;

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Bayou Spray Foam Blog`;
    }
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const relatedIds = Object.keys(posts).filter((k) => k !== id).slice(0, 3);

  return (
    <div className="min-h-screen font-sans">
      {/* Featured Image Hero */}
      <section className="relative h-[60vh] w-full">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </section>

      <article className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-dark-charcoal/40 font-bold uppercase text-xs mb-8">
            <Link to="/" className="hover:text-bayou-gold">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-bayou-gold">Blog</Link>
            <span>/</span>
            <span className="text-bayou-gold truncate max-w-[200px]">{post.title.split(":")[0]}</span>
          </div>

          <span className="text-bayou-gold font-display font-bold text-sm uppercase tracking-widest mb-4 block">
            {post.category}
          </span>

          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-bayou-deep-green leading-tight mb-8">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-8 py-6 border-y border-dark-charcoal/10 mb-12">
            <div className="flex items-center gap-2 text-dark-charcoal/60 font-bold">
              <User size={18} className="text-bayou-gold" />
              <span>By Bayou Team</span>
            </div>
            <div className="flex items-center gap-2 text-dark-charcoal/60 font-bold">
              <Clock size={18} className="text-bayou-gold" />
              <span>{post.date} · 5 min read</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-extrabold prose-headings:text-bayou-deep-green prose-p:text-dark-charcoal/80 prose-p:leading-relaxed prose-strong:text-bayou-deep-green">
            <p className="text-xl font-medium !text-dark-charcoal leading-relaxed mb-10">{post.intro}</p>

            <h2 className="text-3xl mt-12 mb-6">{post.h2}</h2>
            <p>{post.body}</p>

            <blockquote className="border-l-4 border-bayou-gold pl-8 my-12 italic text-2xl font-display font-bold text-bayou-deep-green">
              {post.quote}
            </blockquote>

            <h3 className="text-2xl mt-10 mb-4">{post.h3}</h3>
            <p>{post.body2}</p>

            {/* In-article CTA */}
            <div className="my-16 bg-bayou-gold p-10 rounded-2xl text-dark-charcoal text-center space-y-6 shadow-xl">
               <h3 className="text-3xl font-display font-extrabold">Need a Custom Recommendation?</h3>
               <p className="text-lg font-bold opacity-80">Our experts can evaluate your home and recommend the perfect foam solution.</p>
               <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <a href="tel:3187323061" className="bg-bayou-deep-green text-white px-8 py-4 rounded-lg font-display font-extrabold shadow-lg hover:scale-105 transition-all whitespace-nowrap">
                    CALL (318) 732-3061
                  </a>
                  <Link to="/contact" className="bg-white text-dark-charcoal px-8 py-4 rounded-lg font-display font-extrabold shadow-lg hover:scale-105 transition-all whitespace-nowrap">
                    FREE QUOTE
                  </Link>
               </div>
            </div>

            <h2 className="text-3xl mt-12 mb-6">The Verdict</h2>
            <p>{post.verdict}</p>
          </div>

          <div className="mt-20 pt-10 border-t border-dark-charcoal/10">
            <Link to="/blog" className="flex items-center gap-2 text-bayou-gold font-display font-extrabold hover:-translate-x-2 transition-transform w-fit">
              <ArrowLeft size={20} /> BACK TO BLOG
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-extrabold text-bayou-deep-green mb-12">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedIds.map((pid) => (
              <motion.div
                key={pid}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border-t-4 border-bayou-gold"
              >
                <img src={posts[pid].image} alt={posts[pid].title} className="w-full h-40 object-cover" />
                <div className="p-6">
                  <span className="text-bayou-gold font-display font-bold text-[10px] uppercase tracking-widest mb-2 block">{posts[pid].category}</span>
                  <h3 className="text-lg font-display font-bold text-bayou-deep-green mb-4 leading-tight">{posts[pid].title}</h3>
                  <Link to={`/blog/${pid}`} className="text-bayou-gold font-display font-extrabold text-xs uppercase tracking-widest hover:translate-x-2 transition-transform inline-block">
                    READ STORY →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
