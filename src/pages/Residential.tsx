import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Minus, Plus } from "lucide-react";
import { useState, useEffect } from "react";

export default function Residential() {
  const [sqft, setSqft] = useState(2000);
  const [bill, setBill] = useState(300);

  useEffect(() => {
    document.title = "Residential Spray Foam Insulation | Bayou Spray Foam | Northwest Louisiana";
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
    setMeta("description", "Expert residential spray foam insulation for attics, crawlspaces, and walls across Northwest Louisiana. Open cell and closed cell foam. Call Bayou Spray Foam at (318) 732-3061.");
    setMeta("og:title", "Residential Spray Foam Insulation | Bayou Spray Foam | Northwest Louisiana", true);
    setMeta("og:description", "Expert residential spray foam insulation for attics, crawlspaces, and walls across Northwest Louisiana. Open cell and closed cell foam. Call Bayou Spray Foam at (318) 732-3061.", true);
    setMeta("og:url", "https://bayouspray.com/residential", true);
    setLink("canonical", "https://bayouspray.com/residential");
    const script = document.createElement("script");
    script.id = "faq-schema-residential";
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org", "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How long does residential spray foam installation take?", "acceptedAnswer": { "@type": "Answer", "text": "Most residential projects are completed in 1–2 days depending on the size of the attic or crawlspace." } },
        { "@type": "Question", "name": "Is spray foam insulation safe for my family?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Once fully cured — typically within 24 hours — spray foam is completely inert and safe for residents, children, and pets." } },
        { "@type": "Question", "name": "How soon can I return home after spray foam installation?", "acceptedAnswer": { "@type": "Answer", "text": "We recommend staying out of the home for 24 hours to allow for proper off-gassing and complete curing." } },
        { "@type": "Question", "name": "How much can spray foam save on energy costs in Louisiana?", "acceptedAnswer": { "@type": "Answer", "text": "Homeowners typically see a 30–50% reduction in heating and cooling costs after spray foam installation." } },
        { "@type": "Question", "name": "What areas of my home benefit most from spray foam insulation?", "acceptedAnswer": { "@type": "Answer", "text": "The attic is the #1 priority, followed by crawlspaces and rim joists — the areas where the most conditioned air escapes." } }
      ]
    });
    document.head.appendChild(script);
    return () => { document.getElementById("faq-schema-residential")?.remove(); };
  }, []);


  const estimatedSavings = Math.floor(bill * 0.4);

  const faqData = [
    { q: "How long does the installation take?", a: "Most residential projects are completed in 1-2 days depending on the size of the attic or crawlspace." },
    { q: "Is spray foam safe for my family?", a: "Yes. Once fully cured (typically within 24 hours), spray foam is completely inert and safe for residents." },
    { q: "How soon can I return to my home?", a: "We typically recommend staying out for 24 hours to allow for proper off-gassing and complete curing." },
    { q: "How much can I save on energy costs?", a: "Homeowners typically see a 30% to 50% reduction in heating and cooling costs." },
    { q: "What areas benefit most?", a: "The attic is the #1 priority, followed by crawlspaces and rim joists." },
  ];

  return (
    <div className="pt-24 min-h-screen font-sans">
      {/* 8A — Page Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/9.png"
            alt="Residential Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-bayou-deep-green/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-extrabold text-white mb-4"
          >
            Residential Spray Foam
          </motion.h1>
          <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto mb-6">
            Keep the Louisiana heat out. Keep your money in your pocket.
          </p>
          <div className="text-white/80 font-display font-bold uppercase tracking-widest text-sm">
            <Link to="/" className="hover:text-bayou-gold font-bold">Home</Link>
            <span className="mx-2 font-bold opacity-30 text-white">|</span>
            Services
            <span className="mx-2 font-bold opacity-30 text-white">|</span>
            Residential
          </div>
        </div>
      </section>

      {/* 8A — INTRODUCTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-bayou-deep-green leading-tight">
                The Smartest Investment for Your Home
              </h2>
              <div className="w-20 h-0.5 bg-bayou-gold" />
              <div className="space-y-4 text-dark-charcoal/80 text-lg leading-relaxed">
                <p>
                  Spray foam insulation is the most effective way to seal your home's envelope. Unlike traditional fiberglass, spray foam expands to fill every crack and crevice, preventing unconditioned Louisiana air from leaking in.
                </p>
                <p>
                  This airtight seal transforms your home from a drafty energy-waster into a high-performance sanctuary. You'll notice quieter rooms, more even temperatures, and significantly lower utility bills.
                </p>
              </div>
              <ul className="grid grid-cols-2 gap-4">
                {["Attics", "Walls", "Crawlspaces", "Garages", "Rim Joists", "Cove Ceilings"].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-bold text-bayou-deep-green">
                    <CheckCircle className="text-bayou-gold shrink-0" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/10.png"
                alt="Residential Application"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8B — COMPARISON */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-extrabold text-bayou-deep-green text-center mb-16">Open Cell vs. Closed Cell</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Open Cell Card */}
            <div className="bg-white p-10 rounded-2xl shadow-xl border-t-8 border-bayou-light-green">
              <h3 className="text-3xl font-display font-bold text-bayou-light-green mb-6">Open Cell Foam</h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b pb-2"><strong>Density:</strong> <span>Lighter, softer</span></li>
                <li className="flex justify-between border-b pb-2"><strong>R-Value:</strong> <span>~R-3.7 per inch</span></li>
                <li className="flex justify-between border-b pb-2"><strong>Best For:</strong> <span>Interior walls, attics</span></li>
                <li className="flex justify-between border-b pb-2"><strong>Performance:</strong> <span>Excellent sound dampening</span></li>
                <li className="flex justify-between border-b pb-2"><strong>Cost:</strong> <span>More budget-friendly</span></li>
              </ul>
            </div>
            {/* Closed Cell Card */}
            <div className="bg-white p-10 rounded-2xl shadow-xl border-t-8 border-bayou-gold">
              <h3 className="text-3xl font-display font-bold text-bayou-gold mb-6">Closed Cell Foam</h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b pb-2"><strong>Density:</strong> <span>Dense, rigid</span></li>
                <li className="flex justify-between border-b pb-2"><strong>R-Value:</strong> <span>~R-7 per inch</span></li>
                <li className="flex justify-between border-b pb-2"><strong>Best For:</strong> <span>Exterior, moisture areas</span></li>
                <li className="flex justify-between border-b pb-2"><strong>Performance:</strong> <span>Adds structural strength</span></li>
                <li className="flex justify-between border-b pb-2"><strong>Cost:</strong> <span>Higher investment</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8E — ENERGY SAVINGS CALCULATOR */}
      <section className="py-24 bg-bayou-deep-green text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white/5 p-12 rounded-3xl border border-bayou-gold/20 backdrop-blur-sm">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-center mb-12">Energy Savings Estimator</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="space-y-6">
                 <div>
                  <label className="block font-display font-bold text-sm uppercase tracking-widest text-bayou-gold mb-4">Current Monthly Bill ($)</label>
                  <div className="flex items-center gap-4">
                    <button onClick={() => setBill(Math.max(50, bill - 10))} className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-bayou-gold">
                      <Minus />
                    </button>
                    <input 
                      type="number" 
                      value={bill} 
                      onChange={(e) => setBill(Number(e.target.value))}
                      className="bg-transparent border-b-2 border-bayou-gold text-center text-4xl font-display font-bold w-full outline-none"
                    />
                    <button onClick={() => setBill(bill + 10)} className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-bayou-gold">
                      <Plus />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-bayou-gold rounded-2xl p-8 text-dark-charcoal text-center flex flex-col justify-center">
                 <span className="font-display font-bold uppercase text-xs mb-2">Estimated Monthly Savings</span>
                 <div className="text-6xl font-display font-extrabold mb-1">${estimatedSavings}</div>
                 <span className="font-semibold opacity-70">Up to ${estimatedSavings * 12} per year</span>
              </div>
            </div>
            <p className="text-center text-white/50 text-sm italic">
              *Estimates based on average 40% reduction in heating/cooling costs. Actual results may vary by home efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* 8F — FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-display font-extrabold text-bayou-deep-green text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((item, i) => (
              <details key={i} className="group bg-warm-cream rounded-xl p-6 cursor-pointer">
                <summary className="font-display font-bold text-xl text-bayou-deep-green flex justify-between items-center list-none">
                  {item.q}
                  <span className="text-bayou-gold group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-dark-charcoal/70 leading-relaxed font-medium">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>



      {/* 8G — CTA */}
      <section className="bg-bayou-gold py-16">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-dark-charcoal text-center">Ready for a Cooler, Cheaper Summer?</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="tel:3187323061" className="bg-bayou-deep-green hover:bg-bayou-deep-green/90 text-white font-display font-extrabold px-10 py-5 rounded-md tracking-widest uppercase transition-all shadow-xl whitespace-nowrap">
              CALL (318) 732-3061
            </a>
            <Link to="/contact" className="bg-white hover:bg-white/90 text-bayou-deep-green font-display font-extrabold px-10 py-5 rounded-md tracking-widest uppercase transition-all shadow-xl whitespace-nowrap">
              GET A FREE ESTIMATE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
