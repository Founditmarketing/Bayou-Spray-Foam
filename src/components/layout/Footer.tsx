import { Link } from "react-router-dom";
import { Facebook, MapPin, Phone, Clock, ChevronRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F3320] text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 - Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-12 h-12 bg-bayou-gold rounded shadow-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-white fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 4.5c1.1 0 2.15.3 3-1 .85.7 1.4 1.7 1.5 2.85h-1.5c-.1-.7-.45-1.3-.9-1.75s-1.1-.7-1.85-.75l.1-1.3c.1-.1.25-.1.65-.1zM9.5 12h5v6h-5v-6z" />
                </svg>
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter">
                BAYOU <span className="text-bayou-gold">SPRAY FOAM</span>
              </span>
            </Link>
            <p className="text-white/70 leading-relaxed max-w-sm">
              Insulating Louisiana, One Building at a Time. We provide high-performance energy solutions for homes and businesses across Northwest Louisiana.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/people/Bayou-Foam-LLC/100093674896284/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-bayou-gold hover:border-bayou-gold transition-all group">
                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-xl border-b-2 border-bayou-gold w-fit pb-1">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Residential", path: "/residential" },
                { name: "Commercial", path: "/commercial" },
                { name: "Retrofit", path: "/retrofit" },
                { name: "Blog", path: "/blog" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="flex items-center gap-2 text-white/70 hover:text-bayou-gold hover:translate-x-1 transition-all">
                    <ChevronRight size={14} className="text-bayou-gold" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-xl border-b-2 border-bayou-gold w-fit pb-1">Our Services</h4>
            <ul className="space-y-4">
              {[
                "Residential Insulation",
                "Commercial Insulation",
                "Retrofit Insulation",
                "Open Cell Foam",
                "Closed Cell Foam",
              ].map((service) => (
                <li key={service}>
                  <span className="flex items-center gap-2 text-white/70 hover:text-bayou-gold transition-all cursor-default">
                    <div className="w-1 h-1 bg-bayou-gold rounded-full" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-xl border-b-2 border-bayou-gold w-fit pb-1">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin size={20} className="text-bayou-gold shrink-0 mt-1" />
                <span>206 Crocker Rd,<br />Choudrant, LA 71227</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-bayou-gold" />
                <a href="tel:3187323061" className="text-xl font-bold hover:text-bayou-gold transition-colors">(318) 732-3061</a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Clock size={20} className="text-bayou-gold" />
                <span>Mon–Fri · 7:00 AM – 5:00 PM</span>
              </li>
            </ul>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=206+Crocker+Rd,+Choudrant,+LA+71227" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block border border-bayou-gold text-bayou-gold hover:bg-bayou-gold hover:text-white px-5 py-2 rounded font-semibold text-sm transition-all"
            >
              GET DIRECTIONS
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {currentYear} Bayou Spray Foam. All Rights Reserved.</p>
          <span>Built with Pride for Bayou Spray Foam</span>
        </div>
      </div>
    </footer>
  );
}
