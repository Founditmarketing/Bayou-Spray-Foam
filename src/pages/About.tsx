import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle, Award, ShieldCheck, Heart, Zap } from "lucide-react";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About Bayou Spray Foam | Locally Owned Insulation Contractor | Choudrant, LA";
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
    setMeta("description", "Learn about Bayou Spray Foam — a locally owned insulation contractor serving Northwest Louisiana with professional spray foam services since our founding in Choudrant, LA.");
    setMeta("og:title", "About Bayou Spray Foam | Locally Owned Insulation Contractor | Choudrant, LA", true);
    setMeta("og:description", "Learn about Bayou Spray Foam — a locally owned insulation contractor serving Northwest Louisiana with professional spray foam services since our founding in Choudrant, LA.", true);
    setMeta("og:url", "https://bayouspray.com/about", true);
    setLink("canonical", "https://bayouspray.com/about");
  }, []);

  return (
    <div className="pt-36 min-h-screen font-sans">
      {/* Page Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/275054529_318653293630982_4475796836120558996_n.jpg"
            alt="About Hero"
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
            About Bayou Spray Foam
          </motion.h1>
          <div className="text-white/80 font-display font-bold uppercase tracking-widest text-sm">
            <Link to="/" className="hover:text-bayou-gold font-bold">Home</Link>
            <span className="mx-2 font-bold opacity-30 text-white">|</span>
            About Us
          </div>
        </div>
      </section>

      {/* 7A — OUR STORY */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-bayou-gold rounded-lg -z-10" />
              <img
                src="/images/Stock-Photos.png"
                alt="Our Story"
                className="rounded-lg shadow-2xl relative z-10 w-full aspect-[4/3] object-cover"
              />
            </motion.div>
            <div className="space-y-6">
              <span className="text-bayou-gold font-display font-bold uppercase tracking-widest text-sm">OUR STORY</span>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-bayou-deep-green">
                Born in Louisiana. Built for Louisiana.
              </h2>
              <div className="w-20 h-0.5 bg-bayou-gold" />
              <div className="space-y-4 text-dark-charcoal/80 text-lg leading-relaxed">
                <p>
                  Bayou Spray Foam was started with a simple mission: to help our neighbors in Northwest Louisiana stay comfortable while saving money on their energy bills.
                </p>
                <p>
                  Based in Choudrant, we understand the unique challenges of the Louisiana climate—the crushing summer heat and the intense humidity. Standard insulation often falls short, but spray foam provides an airtight seal that standard material simply can't match.
                </p>
                <p>
                  Over the years, we've grown from a small family operation into the area's premier spray foam specialists, but our commitment to quality and personal service hasn't changed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7B — MISSION & VALUES */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-bayou-deep-green mb-6">Our Mission & Values</h2>
          <div className="w-20 h-0.5 bg-bayou-gold mx-auto" />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award className="text-bayou-gold" size={40} />, title: "Quality First", desc: "We don't cut corners, period. We use the highest grade foam and equipment." },
              { icon: <Heart className="text-bayou-gold" size={40} />, title: "Community Roots", desc: "Locally owned, locally invested. We care about the property we work on." },
              { icon: <Zap className="text-bayou-gold" size={40} />, title: "Energy Efficiency", desc: "Helping Louisiana homes breathe easier and run smarter." },
              { icon: <ShieldCheck className="text-bayou-gold" size={40} />, title: "Professional Service", desc: "On time, on budget, and we leave every job site spotless." },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-bayou-gold"
              >
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-display font-bold text-bayou-deep-green mb-4">{value.title}</h3>
                <p className="text-dark-charcoal/70 font-medium leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7C — OUR WORK IN ACTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-bayou-deep-green mb-6">Our Work in Action</h2>
          <div className="w-20 h-0.5 bg-bayou-gold mx-auto mb-6" />
          <p className="text-dark-charcoal/70 text-lg max-w-2xl mx-auto">From residential attics to commercial warehouses — here's a look at what we do best.</p>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "/images/275088357_318653143630997_3012413985274798449_n.jpg",
              "/images/274989377_318653286964316_23606304055393642_n-1.jpg",
              "/images/275013596_318653153630996_6992363925091704088_n.jpg",
              "/images/274693112_324838713012440_6417728910726516074_n.jpg",
              "/images/283607484_366864912143153_1078984636564088581_n.jpg",
              "/images/275914710_324838589679119_347201262690062545_n.jpg",
            ].map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="aspect-square overflow-hidden rounded-xl shadow-lg"
              >
                <img src={src} alt="Bayou Spray Foam project" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7E — CTA */}
      <section className="bg-bayou-gold py-16">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-dark-charcoal">Ready to Work With Us?</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="tel:3187323061" className="bg-bayou-deep-green hover:bg-bayou-deep-green/90 text-white font-display font-extrabold px-10 py-5 rounded-md tracking-widest uppercase transition-all shadow-xl whitespace-nowrap">
              CALL (318) 732-3061
            </a>
            <Link to="/contact" className="bg-white hover:bg-white/90 text-bayou-deep-green font-display font-extrabold px-10 py-5 rounded-md tracking-widest uppercase transition-all shadow-xl whitespace-nowrap">
              GET A FREE QUOTE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
