import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Wrench, Zap, ThermometerSnowflake, Ruler, ShieldAlert, History } from "lucide-react";
import { useEffect } from "react";

export default function Retrofit() {
  useEffect(() => {
    document.title = "Retrofit Insulation | Spray Foam for Existing Homes | Bayou Spray Foam Louisiana";
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
    setMeta("description", "Retrofit spray foam insulation for existing homes and buildings in Northwest Louisiana. Minimal demolition, maximum energy savings. Call Bayou Spray Foam at (318) 732-3061.");
    setMeta("og:title", "Retrofit Insulation | Spray Foam for Existing Homes | Bayou Spray Foam Louisiana", true);
    setMeta("og:description", "Retrofit spray foam insulation for existing homes and buildings in Northwest Louisiana. Minimal demolition, maximum energy savings. Call Bayou Spray Foam at (318) 732-3061.", true);
    setMeta("og:url", "https://bayouspray.com/retrofit", true);
    setLink("canonical", "https://bayouspray.com/retrofit");
    const script = document.createElement("script");
    script.id = "faq-schema-retrofit";
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org", "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Do you have to remove old insulation before installing spray foam?", "acceptedAnswer": { "@type": "Answer", "text": "In most cases, we recommend removing old, saturated, or ineffective insulation to ensure a perfect seal with the new spray foam." } },
        { "@type": "Question", "name": "Can spray foam be installed in wall cavities without tearing down drywall?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We use injection foam techniques and strategic access points to fill cavities with minimal disruption to finished surfaces." } },
        { "@type": "Question", "name": "Is retrofit spray foam more expensive than new construction insulation?", "acceptedAnswer": { "@type": "Answer", "text": "The cost per square foot is slightly higher due to access complexity, but the energy savings are equally dramatic — often paying back the investment within 3–5 years." } },
        { "@type": "Question", "name": "Will I notice an immediate difference after retrofit spray foam?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Most homeowners report a noticeable improvement in temperature stability and comfort the very same day installation is complete." } }
      ]
    });
    document.head.appendChild(script);
    return () => { document.getElementById("faq-schema-retrofit")?.remove(); };
  }, []);


  const signs = [
    { icon: <Zap className="text-bayou-gold" />, label: "High monthly energy bills" },
    { icon: <ThermometerSnowflake className="text-bayou-gold" />, label: "Uneven temperatures room-to-room" },
    { icon: <ShieldAlert className="text-bayou-gold" />, label: "Drafty walls or ceilings" },
    { icon: <Ruler className="text-bayou-gold" />, label: "HVAC system working overtime" },
    { icon: <History className="text-bayou-gold" />, label: "Home built before 1990" },
    { icon: <Wrench className="text-bayou-gold" />, label: "Existing insulation is failing" },
  ];

  return (
    <div className="min-h-screen font-sans">
      {/* Page Hero */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/1-1.png"
            alt="Retrofit Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 pt-36">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-extrabold text-white mb-4"
          >
            Retrofit Insulation
          </motion.h1>
          <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto mb-6 font-secondary">
            Already built? We'll seal the gaps you didn't know you had.
          </p>
          <div className="text-white/80 font-display font-bold uppercase tracking-widest text-sm">
            <Link to="/" className="hover:text-bayou-gold">Home</Link>
            <span className="mx-2 opacity-30 text-white">|</span>
            Services
            <span className="mx-2 opacity-30 text-white">|</span>
            Retrofit
          </div>
        </div>
      </section>

      {/* 10A — INTRODUCTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-bayou-deep-green leading-tight">
                What Is Retrofit Insulation?
              </h2>
              <div className="w-20 h-0.5 bg-bayou-gold" />
              <div className="space-y-4 text-dark-charcoal/80 text-lg leading-relaxed">
                <p>
                  Retrofit insulation is the process of adding or replacing insulation in an existing structure. Many older Louisiana homes and buildings were built with minimal insulation or techniques that have since failed.
                </p>
                <p>
                  By retrofitting with spray foam, we can inject or apply high-performance insulation into attics, crawlspaces, and even wall cavities without the need for major demolition. This dramatically improves the thermal envelope of a building that was once "leaky."
                </p>
              </div>
            </div>
            <div className="bg-warm-cream p-10 rounded-2xl shadow-xl relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-bayou-gold/10 rounded-full -translate-y-12 translate-x-12" />
                <h3 className="text-2xl font-display font-extrabold text-bayou-deep-green mb-8">Signs You Need a Retrofit</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {signs.map((sign, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <div className="p-2 bg-white rounded shadow-sm">
                                {sign.icon}
                            </div>
                            <span className="font-bold text-dark-charcoal/80 text-sm leading-tight">{sign.label}</span>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10C — THE PROCESS */}
      <section className="py-24 bg-bayou-deep-green text-white">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-display font-extrabold mb-6">The Retrofit Process</h2>
          <div className="w-20 h-0.5 bg-bayou-gold mx-auto" />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", desc: "Thermal imaging and visual check of current insulation." },
              { step: "02", title: "Prep", desc: "Removing old material if necessary and shielding surfaces." },
              { step: "03", title: "Injection", desc: "Applying foam to seal gaps and fill cavities." },
              { step: "04", title: "Finishing", desc: "Final quality check and total job site cleanup." },
            ].map((step, i) => (
              <div key={i} className="relative p-6 border border-white/10 rounded-xl bg-white/5 text-center">
                <div className="text-4xl font-display font-extrabold text-bayou-gold mb-4 opacity-50">{step.step}</div>
                <h3 className="text-xl font-display font-bold mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm">{step.desc}</p>
                {i < 3 && <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-bayou-gold/20 translate-y-1/2" />}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 10E — FAQ */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-display font-extrabold text-bayou-deep-green text-center mb-16">Retrofit FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Do you have to remove old insulation?", a: "In most cases, we recommend removing old, saturated, or ineffective material to ensure a perfect seal with the new spray foam." },
              { q: "Can you retrofit wall cavities without tearing down drywall?", a: "Yes, we can use injection foam techniques or strategic access points to fill cavities with minimal disruption." },
              { q: "Is retrofit more expensive than new construction?", a: "The cost per square foot is higher due to access complexity, but the energy savings are often even more dramatic." },
              { q: "Will I notice an immediate difference?", a: "Absolutely. Most homeowners report a noticeable difference in temperature stability the very same day." },
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

      {/* 10F — CTA */}
      <section className="bg-bayou-gold py-16">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-dark-charcoal capitalize">Upgrade Your Existing Building</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="tel:3187323061" className="bg-bayou-deep-green hover:bg-bayou-deep-green/90 text-white font-display font-extrabold px-10 py-5 rounded-md tracking-widest uppercase transition-all shadow-xl whitespace-nowrap">
              CALL (318) 732-3061
            </a>
            <Link to="/contact" className="bg-white hover:bg-white/90 text-bayou-deep-green font-display font-extrabold px-10 py-5 rounded-md tracking-widest uppercase transition-all shadow-xl whitespace-nowrap">
              SCHEDULE INSPECTION
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
