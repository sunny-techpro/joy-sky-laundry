"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle, Quote, ThumbsUp } from "lucide-react";

export function Reviews() {
  const reviews = [
    {
      name: "Annelize Marais",
      suburb: "Rondebosch, Cape Town",
      role: "Verified Local Resident",
      date: "2 weeks ago",
      rating: 5,
      review:
        "Joy Sky Laundry is hands-down the best service in Cape Town! I booked online in the morning, they collected right from my doorstep and delivered everything back that evening. Everything was folded with unbelievable neatness and smelled crisp and fresh. Free collection and delivery is such a blessing!",
      highlight: "Prompt delivery & clean folding",
    },
    {
      name: "Tshepo Mokwena",
      suburb: "Mowbray, Cape Town",
      role: "UCT Student & Mowbray Local",
      date: "1 month ago",
      rating: 5,
      review:
        "Joy Sky has been my go-to weekly laundry spot at E2A Arcade. R35/kg for wash, dry, and fold with free soap, softener, and that unique freshener is the best deal in Mowbray. Plus the 'Wash 5x Get 5kg Free' reward program is awesome. Punctual, fresh, and friendly service!",
      highlight: "Unbeatable R35/kg & 5kg Free Reward",
    },
    {
      name: "Liam De Villiers",
      suburb: "Observatory, Cape Town",
      role: "Verified Google Reviewer",
      date: "3 weeks ago",
      rating: 5,
      review:
        "Super prompt delivery and the clean folding is top tier — literally went straight into my drawers with zero fuss. WhatsApp communication makes scheduling quick and easy. Reliable, honest, and high standard.",
      highlight: "Military-grade folding & fast turnaround",
    },
  ];

  return (
    <section id="reviews" className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Google Rating Pill */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold glass-panel border border-amber-400/40 text-amber-700 dark:text-amber-300 mb-4 shadow-sm">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            Verified Customer Ratings
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Trusted by Cape Town Locals
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            See why families, young professionals, and students across Mowbray
            and the Southern Suburbs rely on Joy Sky Laundry daily.
          </p>

          {/* Google 4.1 Rating Card */}
          <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-4 rounded-2xl glass-card-glow border border-amber-300/40 dark:border-amber-500/20 shadow-md">
            <div className="flex items-center gap-3">
              {/* Google stylized G icon */}
              <div className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center font-bold text-lg text-blue-600">
                G
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black text-slate-900 dark:text-white">
                    4.1
                  </span>
                  <div className="flex items-center text-amber-400">
                    {[1, 2, 3, 4].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                    <Star className="w-4 h-4 fill-amber-400/40 text-amber-400" />
                  </div>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Actual Google Business Rating (Cape Town)
                </span>
              </div>
            </div>

            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block" />

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <CheckCircle className="w-4 h-4" />
              <span>Verified Customer Experiences</span>
            </div>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card rounded-3xl p-7 flex flex-col justify-between hover:shadow-xl hover:border-sky-300/60 dark:hover:border-sky-500/40 transition-all duration-300 relative group"
            >
              <div>
                {/* Quote watermark */}
                <Quote className="w-8 h-8 text-sky-500/20 absolute top-6 right-6 pointer-events-none group-hover:text-sky-500/40 transition-colors" />

                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Highlight Pill */}
                <div className="inline-block px-2.5 py-1 rounded-md bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 text-xs font-semibold mb-3 border border-sky-100 dark:border-sky-900/50">
                  {rev.highlight}
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  &ldquo;{rev.review}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="mt-6 pt-5 border-t border-slate-200/70 dark:border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {rev.suburb}
                  </p>
                </div>
                <span className="text-[11px] text-slate-400 dark:text-slate-500">
                  {rev.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

