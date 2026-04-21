import { motion } from "motion/react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Clock, User, ArrowLeft } from "lucide-react";
import { useEffect } from "react";

import { posts } from "../data/blogPosts";


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
            <p className="text-xl font-medium !text-dark-charcoal leading-relaxed mb-10">{post.content.intro}</p>

            {post.content.sections.map((section, idx) => (
              <div key={idx} className="mb-12">
                <h2 className="text-3xl mt-12 mb-6">{section.heading}</h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
                
                {section.listItems && (
                  <ul className="my-6 pl-6 space-y-2 list-disc marker:text-bayou-gold">
                    {section.listItems.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.quote && (
                  <blockquote className="border-l-4 border-bayou-gold pl-8 my-12 italic text-2xl font-display font-bold text-bayou-deep-green bg-warm-cream/50 p-6 rounded-r-xl">
                    "{section.quote}"
                  </blockquote>
                )}
              </div>
            ))}

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

            <h2 className="text-3xl mt-12 mb-6">{post.content.conclusion.heading}</h2>
            <p>{post.content.conclusion.paragraph}</p>
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
