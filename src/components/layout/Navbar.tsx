import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Phone, Menu, X, Facebook, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "#",
      dropdown: [
        { name: "Residential", path: "/residential" },
        { name: "Commercial", path: "/commercial" },
        { name: "Retrofit", path: "/retrofit" },
      ],
    },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bayou-deep-green py-3 shadow-2xl"
          : "bg-bayou-deep-green/90 py-5"
      } border-b border-bayou-gold/30`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <img
            src="/images/logo.png"
            alt="Bayou Spray Foam"
            className="h-14 w-auto transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.dropdown ? (
                <div className="flex items-center gap-1 cursor-pointer text-white font-secondary font-semibold hover:text-bayou-gold transition-colors">
                  {link.name}
                  <motion.span
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 180 }}
                    className="text-xs"
                  >
                    ▼
                  </motion.span>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-bayou-deep-green border border-bayou-gold/20 rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-4 py-3 text-white hover:bg-bayou-light-green hover:text-white transition-colors border-b border-white/5 last:border-0"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className={`relative text-white font-secondary font-semibold transition-colors hover:text-bayou-gold ${
                    location.pathname === link.path ? "text-bayou-gold" : ""
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-bayou-gold"
                    />
                  )}
                </Link>
              )}
            </div>
          ))}
          <a
            href="tel:3187323061"
            className="bg-bayou-gold hover:bg-bayou-gold/90 text-white px-6 py-2 rounded-full font-display font-bold text-sm tracking-widest transition-all hover:scale-105 flex items-center gap-2"
          >
            <Phone size={16} />
            (318) 732-3061
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white hover:text-bayou-gold transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-bayou-deep-green lg:hidden flex flex-col p-8 pt-24"
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="flex flex-col gap-4">
                      <span className="text-bayou-gold font-display font-bold text-2xl uppercase tracking-wider">
                        {link.name}
                      </span>
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="text-white text-xl font-secondary hover:text-bayou-gold transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-white text-3xl font-display font-bold uppercase tracking-wider hover:text-bayou-gold transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-auto flex flex-col gap-6 items-center">
              <a
                href="tel:3187323061"
                className="w-full bg-bayou-gold text-white text-center py-5 rounded-xl font-display font-bold text-xl flex items-center justify-center gap-3 shadow-2xl"
              >
                <Phone />
                (318) 732-3061
              </a>
              <div className="flex gap-8 text-white">
                <a href="https://www.facebook.com/people/Bayou-Foam-LLC/100093674896284/" target="_blank" rel="noopener noreferrer">
                  <Facebook size={24} className="hover:text-bayou-gold transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
