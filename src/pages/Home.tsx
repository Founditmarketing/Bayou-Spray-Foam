import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Shield, Zap, Calendar, Phone, ArrowRight, CheckCircle, ChevronDown } from "lucide-react";

const heroSlides = [
  {
    image: "/images/283607484_366864912143153_1078984636564088581_n.jpg",
    title: "SEAL THE HEAT.",
    subtitle: "SLASH YOUR BILLS.",
  },
  {
    image: "/images/274989377_318653286964316_23606304055393642_n-1.jpg",
    title: "INDUSTRIAL STRENGTH.",
    subtitle: "LOCAL EXPERTISE.",
  },
  {
    image: "/images/275013596_318653153630996_6992363925091704088_n.jpg",
    title: "YEAR-ROUND COMFORT.",
    subtitle: "BUILT FOR LOUISIANA.",
  },
  {
    image: "/images/275054529_318653293630982_4475796836120558996_n.jpg",
    title: "PROFESSIONAL CREWS.",
    subtitle: "SUPERIOR RESULTS.",
  },
  {
    image: "/images/275122244_318653240297654_7172800932167715288_n.jpg",
    title: "MAXIMUM EFFICIENCY.",
    subtitle: "START SAVING TODAY.",
  },
];

const stats = [
  { value: 500, label: "Homes Insulated", suffix: "+" },
  { value: 15, label: "Years Experience", suffix: "+" },
  { value: 100, label: "Satisfaction Focused", suffix: "%" },
  { value: 2, label: "Day Average Install", suffix: "" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={elementRef} className="text-center">
      <div className="text-5xl md:text-6xl font-display font-extrabold text-dark-charcoal mb-2">
        {count}{suffix}
      </div>
    </div>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    document.title = "Bayou Spray Foam | Spray Foam Insulation Northwest Louisiana | (318) 732-3061";
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
    setMeta("description", "Bayou Spray Foam provides professional open cell and closed cell spray foam insulation for homes and businesses across Northwest Louisiana. Free estimates – call (318) 732-3061.");
    setMeta("og:title", "Bayou Spray Foam | Northwest Louisiana's Insulation Experts", true);
    setMeta("og:description", "Professional spray foam insulation for homes and businesses across Northwest Louisiana. Free estimates. Call (318) 732-3061.", true);
    setMeta("og:url", "https://bayouspray.com/", true);
    setLink("canonical", "https://bayouspray.com/");
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* 6A — HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-black/55 z-10" />
            <img
              src={heroSlides[currentSlide].image}
              alt="Spray Foam Hero"
              className="w-full h-full object-cover animate-ken-burns"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        <div className="container mx-auto px-4 relative z-20 text-center pt-20 md:pt-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-bayou-gold font-display font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4 md:mb-6"
          >
            NORTHWEST LOUISIANA'S #1 SPRAY FOAM CONTRACTOR
          </motion.p>
          
          <h1 className="text-white font-display font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 md:mb-8 drop-shadow-[0_2px_10px_rgba(200,151,31,0.3)]">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, staggerChildren: 0.15 }}
              className="block"
            >
              {heroSlides[currentSlide].title.split(" ").map((word, i) => (
                <motion.span key={i} className="inline-block mr-2 md:mr-4 last:mr-0">
                  {word}
                </motion.span>
              ))}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="block text-bayou-gold"
            >
              {heroSlides[currentSlide].subtitle}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-white/90 text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 font-secondary font-medium leading-relaxed"
          >
            Professional spray foam insulation for homes and businesses across Louisiana. Stop energy loss at the source.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, type: "spring" }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-bayou-gold hover:bg-bayou-gold/90 text-white font-display font-extrabold px-10 py-5 rounded-md tracking-widest uppercase transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              GET A FREE QUOTE <ArrowRight size={20} />
            </Link>
            <Link
              to="/residential"
              className="border-2 border-white hover:bg-white hover:text-bayou-deep-green text-white font-display font-extrabold px-10 py-5 rounded-md tracking-widest uppercase transition-all whitespace-nowrap"
            >
              SEE OUR SERVICES
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <ChevronDown size={40} />
        </motion.div>

        {/* Navigation Dots */}
        <div className="absolute bottom-10 right-10 z-20 flex gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === i ? "bg-bayou-gold w-8" : "bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Particles */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-bayou-gold rounded-full opacity-30"
              style={{
                width: Math.random() * 5 + 3,
                height: Math.random() * 5 + 3,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </section>

      {/* 6B — TRUST BAR */}
      <section className="bg-bayou-gold relative z-30 py-8 lg:py-0 lg:h-32 flex items-center shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 items-center">
            {[
              { icon: <Shield />, label: "Licensed & Insured", sub: "Fully Covered" },
              { icon: <Zap />, label: "Energy Savings", sub: "Guaranteed" },
              { icon: <Calendar />, label: "Mon–Fri · 7AM–5PM", sub: "Ready to Serve" },
              { icon: <Phone />, label: "(318) 732-3061", sub: "Call Anytime", href: "tel:3187323061" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 group cursor-default"
              >
                <div className="text-dark-charcoal bg-white/20 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <div className="font-display font-extrabold text-dark-charcoal uppercase text-sm lg:text-base">
                    {item.label}
                  </div>
                  <div className="text-dark-charcoal/70 text-xs font-semibold">{item.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6C — ABOUT US PREVIEW */}
      <section className="py-24 bg-warm-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-24 bg-bayou-gold -skew-y-2 origin-top-left -translate-y-12" />
        <div className="container mx-auto px-4 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-bayou-gold rounded-lg -z-10" />
              <img
                src="/images/274989377_318653286964316_23606304055393642_n-1.jpg"
                alt="About Bayou Spray Foam"
                className="rounded-lg shadow-2xl relative z-10 w-full aspect-[4/3] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-bayou-gold font-display font-bold uppercase tracking-widest text-sm">WHO WE ARE</span>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-bayou-deep-green leading-tight">
                Louisiana's Trusted Spray Foam Specialists
              </h2>
              <div className="w-20 h-0.5 bg-bayou-gold" />
              <div className="space-y-4 text-dark-charcoal/80 text-lg leading-relaxed">
                <p>
                  Bayou Spray Foam is a locally owned and operated insulation contractor dedicated to serving homeowners and business owners throughout Northwest Louisiana.
                </p>
                <p>
                  We believe that professional insulation is an investment that should pay for itself through comfort and energy savings. That's why we use only the highest quality materials and state-of-the-art equipment.
                </p>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
                {[
                  "Locally owned & operated",
                  "Residential & Commercial",
                  "Open & closed cell options",
                  "Pro, clean installations",
                ].map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3">
                    <CheckCircle className="text-bayou-gold" size={20} />
                    <span className="font-semibold text-dark-charcoal">{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-block bg-bayou-gold hover:bg-bayou-gold/90 text-white font-display font-extrabold px-10 py-5 rounded-md tracking-widest uppercase transition-all shadow-lg shadow-bayou-gold/20"
              >
                LEARN MORE ABOUT US
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6D — SERVICES PREVIEW */}
      <section className="py-24 bg-bayou-deep-green text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-24 bg-warm-cream skew-y-2 origin-top-left -translate-y-12" />
        <div className="container mx-auto px-4 text-center mt-12 relative z-10">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-muted-gold font-display font-bold uppercase tracking-widest text-sm block mb-4"
          >
            WHAT WE DO
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-extrabold mb-6"
          >
            Spray Foam Solutions for Every Structure
          </motion.h2>
          <div className="w-20 h-0.5 bg-bayou-gold mx-auto mb-8" />
          <p className="max-w-2xl mx-auto text-white/70 text-lg mb-16">
            We provide specialized insulation services tailored to the unique climate of Northwest Louisiana, ensuring your building remains sealed and efficient year-round.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Residential Insulation",
                desc: "Keep your home comfortable year-round and cut energy costs with open or closed cell spray foam in attics, walls, and crawlspaces.",
                path: "/residential",
                icon: (
                  <svg className="w-12 h-12 text-bayou-gold mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
              },
              {
                title: "Commercial Insulation",
                desc: "High-performance insulation for warehouses, metal buildings, office spaces, and more. Built to industrial spec, delivered on schedule.",
                path: "/commercial",
                icon: (
                  <svg className="w-12 h-12 text-bayou-gold mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
              },
              {
                title: "Retrofit Insulation",
                desc: "Already built? No problem. We retrofit spray foam into existing structures to dramatically improve their thermal envelope.",
                path: "/retrofit",
                icon: (
                  <svg className="w-12 h-12 text-bayou-gold mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                ),
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 p-8 rounded-xl border-t-4 border-bayou-gold hover:bg-white/10 transition-all duration-300 group"
              >
                {card.icon}
                <h3 className="text-2xl font-display font-bold mb-4">{card.title}</h3>
                <p className="text-white/60 mb-8 font-medium leading-relaxed">{card.desc}</p>
                <Link
                  to={card.path}
                  className="text-bayou-gold font-display font-extrabold flex items-center gap-2 group-hover:translate-x-2 transition-all"
                >
                  LEARN MORE <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6E — STATS / SOCIAL PROOF BAND */}
      <section className="bg-bayou-gold py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <Counter value={stat.value} suffix={stat.suffix} />
                <div className="text-dark-charcoal font-display font-bold uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6F — BLOG PREVIEW */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <span className="text-bayou-gold font-display font-bold uppercase tracking-widest text-sm block mb-4">
            LATEST FROM THE BLOG
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-bayou-deep-green mb-6">
            Tips, Insights & Industry News
          </h2>
          <div className="w-20 h-0.5 bg-bayou-gold mx-auto mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-16">
            {[1, 2, 3].map((post) => (
              <motion.div
                key={post}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-card"
              >
                <img
                  src={["/images/1-1.png", "/images/2.png", "/images/3.png"][post - 1]}
                  alt="Blog post"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-3">
                  <span className="text-bayou-gold font-display font-bold text-xs uppercase tracking-widest">
                    INSULATION TIPS
                  </span>
                  <h3 className="text-xl font-display font-bold text-bayou-deep-green">
                    How Much Can Spray Foam Save You Per Month?
                  </h3>
                  <p className="text-dark-charcoal/60 text-sm line-clamp-2">
                    Discover how professional spray foam installation dramatically reduces cooling costs during hot Louisiana summers.
                  </p>
                  <Link to="/blog/1" className="inline-block text-bayou-gold font-display font-extrabold text-sm border-b border-bayou-gold pb-1 mt-2">
                    READ MORE
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <Link
            to="/blog"
            className="border-2 border-bayou-gold text-bayou-gold font-display font-extrabold px-10 py-5 rounded-md tracking-widest uppercase transition-all hover:bg-bayou-gold hover:text-white"
          >
            VIEW ALL POSTS
          </Link>
        </div>
      </section>

      {/* 6G — GALLERY PREVIEW */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-4 text-center">
          <span className="text-bayou-gold font-display font-bold uppercase tracking-widest text-sm block mb-4">
            OUR WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-bayou-deep-green mb-6">
            See the Difference Spray Foam Makes
          </h2>
          <div className="w-20 h-0.5 bg-bayou-gold mx-auto mb-16" />

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((img) => (
              <motion.div
                key={img}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
              >
                <div className="absolute inset-0 bg-bayou-gold/0 group-hover:bg-bayou-gold/20 transition-all z-10 flex items-center justify-center">
                  <div className="bg-white/90 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-6 h-6 text-bayou-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
                <img
                  src={[
                    "/images/274693112_324838713012440_6417728910726516074_n.jpg",
                    "/images/274806584_324838736345771_81741261338194522_n.jpg",
                    "/images/283607484_366864912143153_1078984636564088581_n.jpg",
                    "/images/275914710_324838589679119_347201262690062545_n.jpg",
                    "/images/275088357_318653143630997_3012413985274798449_n.jpg",
                    "/images/274989377_318653286964316_23606304055393642_n-1.jpg",
                  ][img - 1]}
                  alt="Spray foam project"
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          <Link
            to="/residential"
            className="inline-block bg-bayou-deep-green hover:bg-bayou-deep-green/90 text-white font-display font-extrabold px-10 py-5 rounded-md tracking-widest uppercase mt-16 transition-all"
          >
            VIEW MORE WORK
          </Link>
        </div>
      </section>



      {/* 6I — FINAL HOME PAGE CTA BAND */}
      <section className="relative overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 bg-bayou-deep-green p-16 lg:p-24 flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white max-w-lg mb-8">
              Ready to Stop Losing Money Through Your Walls?
            </h2>
            <p className="text-white/70 text-xl font-medium max-w-lg mb-10">
              Call us today or request a free quote online. We serve all of Northwest Louisiana.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="tel:3187323061"
                className="border-2 border-white hover:bg-white hover:text-bayou-deep-green text-white font-display font-extrabold px-10 py-5 rounded-md tracking-widest uppercase transition-all whitespace-nowrap"
              >
                CALL (318) 732-3061
              </a>
              <Link
                to="/contact"
                className="bg-white hover:bg-white/90 text-bayou-deep-green font-display font-extrabold px-10 py-5 rounded-md tracking-widest uppercase transition-all flex items-center justify-center gap-2"
              >
                GET A FREE QUOTE
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 bg-bayou-gold p-16 lg:p-24 flex items-center justify-center">
            <div className="relative group overflow-hidden rounded-xl shadow-2xl w-full max-w-md">
               <img
                src="/images/4-dec.png"
                alt="Spray Foam Close Up"
                className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
              <div className="absolute inset-0 border-[16px] border-white/20 pointer-events-none group-hover:border-white/0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* SEO Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Bayou Spray Foam",
          "image": "https://bayouspray.com/logo.png",
          "telephone": "(318) 732-3061",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "206 Crocker Rd",
            "addressLocality": "Choudrant",
            "addressRegion": "LA",
            "postalCode": "71227",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 32.5532,
            "longitude": -92.5251
          },
          "openingHours": ["Mo-Fr 07:00-17:00"],
          "url": "https://bayouspray.com"
        })}
      </script>
    </div>
  );
}
