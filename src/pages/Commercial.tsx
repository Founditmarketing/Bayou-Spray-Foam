import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Building2, Warehouse, Factory, Landmark, Tractor, Construction, CheckCircle } from "lucide-react";
import { useEffect } from "react";

export default function Commercial() {
  useEffect(() => {
    document.title = "Commercial Spray Foam Insulation | Warehouses & Metal Buildings | Northwest Louisiana";
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
    setMeta("description", "High-performance commercial spray foam insulation for warehouses, metal buildings, and industrial facilities in Northwest Louisiana. Free estimates — call Bayou Spray Foam.");
    setMeta("og:title", "Commercial Spray Foam Insulation | Warehouses & Metal Buildings | Northwest Louisiana", true);
    setMeta("og:description", "High-performance commercial spray foam insulation for warehouses, metal buildings, and industrial facilities in Northwest Louisiana. Free estimates — call Bayou Spray Foam.", true);
    setMeta("og:url", "https://bayouspray.com/commercial", true);
    setLink("canonical", "https://bayouspray.com/commercial");
  }, []);

  const buildingTypes = [
    { icon: <Warehouse size={40} className="text-bayou-gold" />, label: "Warehouses & Distribution", desc: "Energy-efficient sealing for massive logistics spaces." },
    { icon: <Factory size={40} className="text-bayou-gold" />, label: "Metal Buildings & Barns", desc: "Prevents condensation and temperature spikes in steel structures." },
    { icon: <Building2 size={40} className="text-bayou-gold" />, label: "Office Buildings", desc: "Superior comfort and sound dampening for productive workspaces." },
    { icon: <Landmark size={40} className="text-bayou-gold" />, label: "Cold Storage Facilities", desc: "Critical thermal control for temperature-sensitive environments." },
    { icon: <Tractor size={40} className="text-bayou-gold" />, label: "Agricultural Structures", desc: "Long-lasting protection for livestock and equipment housing." },
    { icon: <Construction size={40} className="text-bayou-gold" />, label: "New Construction", desc: "Meeting and exceeding modern Louisiana energy codes." },
  ];

  return (
    <div className="min-h-screen font-sans">
      {/* Page Hero */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/2.png"
            alt="Commercial Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-bayou-deep-green/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10 pt-36">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-extrabold text-white mb-4"
          >
            Commercial Spray Foam
          </motion.h1>
          <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto mb-6 font-secondary">
            Industrial-strength insulation for businesses that mean business.
          </p>
          <div className="text-white/80 font-display font-bold uppercase tracking-widest text-sm">
            <Link to="/" className="hover:text-bayou-gold">Home</Link>
            <span className="mx-2 opacity-30 text-white">|</span>
            Services
            <span className="mx-2 opacity-30 text-white">|</span>
            Commercial
          </div>
        </div>
      </section>

      {/* 9A — INTRODUCTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-bayou-deep-green leading-tight">
                Built for the Demands of Commercial Construction
              </h2>
              <div className="w-20 h-0.5 bg-bayou-gold" />
              <div className="space-y-4 text-dark-charcoal/80 text-lg leading-relaxed">
                <p>
                  For commercial buildings, energy efficiency isn't just about comfort—it's about the bottom line. Large-scale structures like warehouses and office buildings face massive thermal loads that can drive utility costs to extremes.
                </p>
                <p>
                  Bayou Spray Foam provides high-performance solutions that meet all Louisiana commercial energy codes. Our spray foam application creates a continuous air barrier that significantly reduces HVAC load and adds structural integrity to the building envelope.
                </p>
              </div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
            >
                <img src="/images/5.png" className="rounded-lg shadow-xl aspect-square object-cover" alt="Commercial 1" />
                <img src="/images/3.png" className="rounded-lg shadow-xl aspect-square object-cover mt-8" alt="Commercial 2" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9B — APPLICATIONS GRID */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-4 text-center mb-16">
          <span className="text-bayou-gold font-display font-bold uppercase tracking-widest text-sm block mb-4">VERSATILE SOLUTIONS</span>
          <h2 className="text-4xl font-display font-extrabold text-bayou-deep-green mb-6">Commercial Applications</h2>
          <div className="w-20 h-0.5 bg-bayou-gold mx-auto" />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buildingTypes.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-bayou-gold hover:shadow-2xl transition-all"
              >
                <div className="mb-6">{type.icon}</div>
                <h3 className="text-xl font-display font-bold text-bayou-deep-green mb-3">{type.label}</h3>
                <p className="text-dark-charcoal/70 font-medium leading-relaxed">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9C — WHY CHOOSE US */}
      <section className="py-24 bg-bayou-deep-green text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-20 h-20 bg-bayou-gold rounded-full flex items-center justify-center mx-auto text-white shadow-xl">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-display font-bold">Fast Installation</h3>
              <p className="text-white/60">Minimize business downtime with our optimized crew deployment.</p>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 bg-bayou-gold rounded-full flex items-center justify-center mx-auto text-white shadow-xl">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-display font-bold">Code Compliant</h3>
              <p className="text-white/60">Meets or exceeds all Louisiana commercial building standards.</p>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 bg-bayou-gold rounded-full flex items-center justify-center mx-auto text-white shadow-xl">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-display font-bold">Scalable Teams</h3>
              <p className="text-white/60">From small retail shops to massive logistics warehouses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9D — CASE STUDY highlight */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-bayou-deep-green rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <img 
                src="/images/2.png" 
                alt="Case Study" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center space-y-8">
              <span className="text-bayou-gold font-display font-bold uppercase tracking-widest text-sm border-l-2 border-bayou-gold pl-4">FEATURED PROJECT</span>
              <h3 className="text-3xl md:text-4xl font-display font-extrabold text-white">Monroe Logistics Warehouse</h3>
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/10">
                <div>
                  <div className="text-bayou-gold font-display font-extrabold text-2xl">45,000</div>
                  <div className="text-white/60 text-xs uppercase tracking-widest font-bold">Square Feet</div>
                </div>
                <div>
                  <div className="text-bayou-gold font-display font-extrabold text-2xl">30%</div>
                  <div className="text-white/60 text-xs uppercase tracking-widest font-bold">HVAC Savings</div>
                </div>
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                "We needed a solution that would prevent condensation in our metal distribution center. Bayou Spray Foam delivered a perfect seal ahead of schedule."
              </p>
              <div className="text-white font-display font-bold uppercase tracking-widest text-sm">— Mark S., Operations Manager</div>
            </div>
          </div>
        </div>
      </section>

      {/* 9E — FAQ */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-display font-extrabold text-bayou-deep-green text-center mb-16">Commercial FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Is spray foam code-compliant for commercial builds?", a: "Yes, we use fire-rated foam that meets or exceeds Louisiana commercial building codes." },
              { q: "Can you work around our business hours?", a: "We offer flexible scheduling, including weekends and night shifts, to minimize operational downtime." },
              { q: "How long does the application last?", a: "Spray foam is a permanent solution and does not sag or lose R-value over time like traditional materials." },
              { q: "Does it help with moisture control?", a: "Closed cell foam is an excellent vapor barrier, preventing condensation in metal buildings and warehouses." },
            ].map((item, i) => (
              <details key={i} className="group bg-white rounded-xl p-6 cursor-pointer shadow-sm">
                <summary className="font-display font-bold text-xl text-bayou-deep-green flex justify-between items-center list-none">
                  {item.q}
                  <span className="text-bayou-gold group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-dark-charcoal/70 leading-relaxed font-medium">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9F — CTA BAND */}
      <section className="bg-bayou-gold py-16">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-dark-charcoal">Request a Commercial Quote</h2>
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
