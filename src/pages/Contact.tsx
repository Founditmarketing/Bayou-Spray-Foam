import { motion } from "motion/react";
import { Phone, MapPin, Clock, Facebook } from "lucide-react";
import { useState, useEffect } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    document.title = "Get Your Free Quote | Bayou Spray Foam | Choudrant, LA";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Request a free spray foam insulation estimate from Bayou Spray Foam. Serving residential and commercial clients across Northwest Louisiana.");
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/xpwzgron", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <div className="pt-24 min-h-screen font-sans">
      {/* 13 — Page Hero */}
      <section className="bg-bayou-deep-green py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-bayou-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-bayou-gold/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-extrabold text-white mb-6"
          >
            Get Your Free Quote Today
          </motion.h1>
          <p className="text-white/70 text-xl font-medium max-w-2xl mx-auto">
            We serve all of Northwest Louisiana with professional, high-performance spray foam insulation. We respond to all requests within 1 business day.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white relative z-20 -mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left (55%) — Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-warm-cream p-10 lg:p-14 rounded-3xl shadow-2xl relative"
            >
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-8 py-20">
                  <div className="w-24 h-24 bg-bayou-gold rounded-full flex items-center justify-center text-white shadow-2xl animate-bounce">
                    <svg className="w-14 h-14 fill-current" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-4xl font-display font-extrabold text-bayou-deep-green mb-4">Request Sent!</h2>
                    <p className="text-dark-charcoal/70 text-xl font-medium max-w-md mx-auto leading-relaxed">
                      Thank you for choosing Bayou Spray Foam. One of our insulation specialists will contact you shortly to schedule your site visit.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-bayou-deep-green text-white px-10 py-4 rounded-lg font-display font-extrabold uppercase tracking-widest shadow-xl transition-all hover:scale-105"
                  >
                    SEND ANOTHER REQUEST
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <input
                        type="text"
                        name="firstName"
                        required
                        className="w-full bg-white border-2 border-transparent focus:border-bayou-gold rounded-xl px-6 py-5 outline-none transition-all peer placeholder-transparent shadow-sm"
                        id="firstName"
                        placeholder="First Name"
                      />
                      <label 
                        htmlFor="firstName"
                        className="absolute left-6 top-5 text-dark-charcoal/40 transition-all pointer-events-none peer-focus:-top-4 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-bayou-gold peer-focus:text-white peer-focus:px-2 peer-focus:rounded peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-bayou-gold peer-[:not(:placeholder-shown)]:text-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:rounded"
                      >
                        First Name
                      </label>
                    </div>
                    <div className="relative group">
                      <input
                        type="text"
                        name="lastName"
                        required
                        className="w-full bg-white border-2 border-transparent focus:border-bayou-gold rounded-xl px-6 py-5 outline-none transition-all peer placeholder-transparent shadow-sm"
                        id="lastName"
                        placeholder="Last Name"
                      />
                      <label 
                         htmlFor="lastName"
                         className="absolute left-6 top-5 text-dark-charcoal/40 transition-all pointer-events-none peer-focus:-top-4 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-bayou-gold peer-focus:text-white peer-focus:px-2 peer-focus:rounded peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-bayou-gold peer-[:not(:placeholder-shown)]:text-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:rounded"
                      >
                        Last Name
                      </label>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full bg-white border-2 border-transparent focus:border-bayou-gold rounded-xl px-6 py-5 outline-none transition-all peer placeholder-transparent shadow-sm"
                        id="email"
                        placeholder="Email"
                      />
                      <label 
                        htmlFor="email"
                        className="absolute left-6 top-5 text-dark-charcoal/40 transition-all pointer-events-none peer-focus:-top-4 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-bayou-gold peer-focus:text-white peer-focus:px-2 peer-focus:rounded peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-bayou-gold peer-[:not(:placeholder-shown)]:text-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:rounded"
                      >
                        Email Address
                      </label>
                    </div>
                    <div className="relative group">
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full bg-white border-2 border-transparent focus:border-bayou-gold rounded-xl px-6 py-5 outline-none transition-all peer placeholder-transparent shadow-sm"
                        id="phone"
                        placeholder="Phone"
                      />
                      <label 
                        htmlFor="phone"
                        className="absolute left-6 top-5 text-dark-charcoal/40 transition-all pointer-events-none peer-focus:-top-4 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-bayou-gold peer-focus:text-white peer-focus:px-2 peer-focus:rounded peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-bayou-gold peer-[:not(:placeholder-shown)]:text-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:rounded"
                      >
                        Phone Number
                      </label>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-2">
                        <span className="text-xs font-display font-extrabold text-dark-charcoal/40 uppercase tracking-widest ml-2">Service Interested In</span>
                        <select name="service" className="w-full bg-white border-2 border-transparent focus:border-bayou-gold rounded-xl px-6 py-5 outline-none transition-all font-bold text-dark-charcoal/80 appearance-none shadow-sm">
                          <option>Residential Insulation</option>
                          <option>Commercial Insulation</option>
                          <option>Retrofit Insulation</option>
                          <option>Other / Not Sure</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <span className="text-xs font-display font-extrabold text-dark-charcoal/40 uppercase tracking-widest ml-2">Best Time to Call</span>
                        <select name="callTime" className="w-full bg-white border-2 border-transparent focus:border-bayou-gold rounded-xl px-6 py-5 outline-none transition-all font-bold text-dark-charcoal/80 appearance-none shadow-sm">
                          <option>Morning (7AM - 11AM)</option>
                          <option>Afternoon (12PM - 4PM)</option>
                          <option>Late Afternoon (4PM - 6PM)</option>
                          <option>Anytime</option>
                        </select>
                      </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-display font-extrabold text-dark-charcoal/40 uppercase tracking-widest ml-2 pl-1">How Did You Hear About Us?</span>
                    <select name="referral" className="w-full bg-white border-2 border-transparent focus:border-bayou-gold rounded-xl px-6 py-5 outline-none transition-all font-bold text-dark-charcoal/80 appearance-none shadow-sm">
                      <option>Google Search</option>
                      <option>Facebook</option>
                      <option>Referral / Neighbor</option>
                      <option>Billboard / Sign</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="relative group">
                     <textarea
                      rows={5}
                      name="message"
                      required
                      className="w-full bg-white border-2 border-transparent focus:border-bayou-gold rounded-xl px-6 py-5 outline-none transition-all peer placeholder-transparent shadow-sm"
                      placeholder="Project Description"
                      id="description"
                    />
                    <label 
                      htmlFor="description"
                      className="absolute left-6 top-5 text-dark-charcoal/40 transition-all pointer-events-none peer-focus:-top-4 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-bayou-gold peer-focus:text-white peer-focus:px-2 peer-focus:rounded peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-bayou-gold peer-[:not(:placeholder-shown)]:text-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:rounded"
                    >
                      How can we help? (Project size, home type, budget...)
                    </label>
                  </div>
                  {error && (
                    <p className="text-red-500 text-sm font-bold text-center">
                      Something went wrong. Please call us at (318) 732-3061.
                    </p>
                  )}
                  <button
                    type="submit"
                    className="w-full bg-bayou-gold hover:bg-bayou-gold/90 text-white font-display font-extrabold py-6 rounded-xl tracking-[0.2em] uppercase transition-all shadow-2xl shadow-bayou-gold/30 text-lg hover:scale-[1.02] active:scale-95"
                  >
                    SEND MY REQUEST →
                  </button>
                </form>
              )}
            </motion.div>

            {/* Right (45%) — Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-16"
            >
              <div className="space-y-10">
                <div className="space-y-4">
                  <img
                    src="/images/logo.png"
                    alt="Bayou Spray Foam"
                    className="h-20 w-auto"
                  />
                  <p className="text-dark-charcoal/60 text-lg font-medium leading-relaxed">
                    Locally owned and operated in Choudrant, Louisiana. Serving Northwest Louisiana with pride since 2008.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-12">
                   <div className="flex items-start gap-8 group">
                    <div className="w-16 h-16 bg-warm-cream rounded-2xl flex items-center justify-center text-bayou-gold group-hover:bg-bayou-gold group-hover:text-white transition-all shadow-lg shrink-0">
                      <MapPin size={32} />
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-2xl text-bayou-deep-green mb-1">Our Location</h4>
                      <p className="text-dark-charcoal/70 text-xl font-medium">206 Crocker Rd,<br />Choudrant, LA 71227</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-8 group">
                    <div className="w-16 h-16 bg-warm-cream rounded-2xl flex items-center justify-center text-bayou-gold group-hover:bg-bayou-gold group-hover:text-white transition-all shadow-lg shrink-0">
                      <Phone size={32} />
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-2xl text-bayou-deep-green mb-1">Direct Line</h4>
                      <a href="tel:3187323061" className="text-3xl font-extrabold text-dark-charcoal hover:text-bayou-gold transition-colors leading-none">(318) 732-3061</a>
                      <p className="text-dark-charcoal/40 font-bold uppercase text-xs mt-2 tracking-widest">Click to Call</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-8 group">
                    <div className="w-16 h-16 bg-warm-cream rounded-2xl flex items-center justify-center text-bayou-gold group-hover:bg-bayou-gold group-hover:text-white transition-all shadow-lg shrink-0">
                      <Clock size={32} />
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-2xl text-bayou-deep-green mb-1">Business Hours</h4>
                      <p className="text-dark-charcoal/70 text-xl font-medium">Mon–Fri: 7:00 AM – 5:00 PM</p>
                      <p className="text-dark-charcoal/70 text-xl font-medium">Sat–Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-bayou-deep-green p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl translate-x-12 -translate-y-12" />
                <h4 className="font-display font-extrabold text-2xl mb-6 relative z-10">Follow Our Work</h4>
                <div className="flex gap-6 relative z-10">
                  <a href="https://www.facebook.com/people/Bayou-Foam-LLC/100093674896284/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center hover:bg-bayou-gold hover:text-white transition-all group scale-110">
                    <Facebook size={28} className="group-hover:scale-125 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full-Width Map */}
      <section className="h-[500px] w-full relative group saturate-[0.1] hover:saturate-100 transition-all duration-1000 grayscale hover:grayscale-0">
        <div className="absolute inset-0 bg-bayou-deep-green/10 pointer-events-none group-hover:opacity-0 transition-opacity z-10" />
        <iframe
          src="https://www.google.com/maps?q=206+Crocker+Rd,+Choudrant,+LA+71227&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </section>
    </div>
  );
}
