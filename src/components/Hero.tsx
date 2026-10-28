"use client";

import { motion } from "framer-motion";
import {
  Truck,
  Sparkles,
  MessageCircle,
  CalendarCheck,
  Star,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Flame,
} from "lucide-react";

export function Hero() {
  const WHATSAPP_URL =
    "https://wa.me/27736969918?text=Hi,%20I%20would%20like%20to%20schedule%20a%20laundry%20pickup";

  return (
    <section className="relative overflow-hidden pt-8 pb-20 md:pt-16 md:pb-28">
      {/* Ambient background glows for glassmorphism */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-sky-400/20 via-cyan-400/15 to-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10 dark:from-sky-500/15 dark:via-cyan-500/10 dark:to-indigo-500/15" />
      <div className="absolute top-10 right-5 w-72 h-72 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none -z-10 dark:bg-emerald-500/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, CTAs, Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Cape Town Free Delivery Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold glass-panel border border-sky-300/60 dark:border-sky-500/30 text-sky-700 dark:text-sky-300 mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <Truck className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span>Free Collection & Delivery in Cape Town</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Premium Laundry in Cape Town <br />
              <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 dark:from-sky-400 dark:via-cyan-300 dark:to-blue-400 bg-clip-text text-transparent">
                Free Collection & Delivery
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Experience Mowbray&apos;s highest-rated laundromat service. We pick
              up from your doorstep anywhere in Cape Town, professionally wash,
              dry, press, and deliver fresh clothes with immaculate folding.
            </p>

            {/* Key Value Highlight Pill */}
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200 bg-sky-50 dark:bg-slate-800/60 px-3.5 py-2 rounded-xl border border-sky-100 dark:border-slate-700">
              <Flame className="w-4 h-4 text-amber-500" />
              <span>Featured Offer:</span>
              <strong className="text-sky-600 dark:text-sky-400 font-bold">
                Wash, Dry & Fold — Only R70 per 9kg load!
              </strong>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl text-base font-semibold text-white bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-lg shadow-sky-500/30 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <CalendarCheck className="w-5 h-5" />
                Book Online
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Order via WhatsApp
              </a>
            </div>

            {/* Reassurance Micro-items */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>24-Hour Express Available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Eco-Friendly Detergents</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>SnapScan & Card Accepted</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Glassmorphism Cards Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Interactive Glass Card */}
            <div className="glass-card-glow rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-44 h-44 bg-sky-400/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-6 border-b border-slate-200/60 dark:border-slate-700/60">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-cyan-400 flex items-center justify-center text-white shadow-md">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                      Joy Sky Laundromat
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      76 Main Rd, Mowbray, Cape Town
                    </p>
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>4.1 / 5.0</span>
                </div>
              </div>

              {/* Offer Highlight Box */}
              <div className="my-6 p-4 rounded-2xl bg-gradient-to-br from-sky-500/10 via-cyan-500/5 to-transparent border border-sky-400/30">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs uppercase tracking-wider font-bold text-sky-600 dark:text-sky-400">
                    Flagship Value Deal
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-sky-500 text-white">
                    9kg Load
                  </span>
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                    R70
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    / load (Wash, Dry & Fold)
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                  Includes hygienic hot or cold wash, tumble dry, and crisp packaging.
                </p>
              </div>

              {/* Feature list in card */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/50 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/40 text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5">
                    <Truck className="w-4 h-4 text-sky-500" />
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      Free Cape Town Pickup
                    </span>
                  </div>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                    Free
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/50 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/40 text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-sky-500" />
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      Standard Turnaround
                    </span>
                  </div>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    Same / Next Day
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/50 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/40 text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-sky-500" />
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      Fabric Safety Guarantee
                    </span>
                  </div>
                  <span className="font-semibold text-sky-600 dark:text-sky-400">
                    100% Care
                  </span>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>📍 Mowbray, Cape Town</span>
                <span className="text-emerald-500 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> Open Mon-Sat 8-6, Sun 9-5:30
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
