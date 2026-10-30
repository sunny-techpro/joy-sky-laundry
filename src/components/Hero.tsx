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
  Gift,
  Tag,
  Droplets,
} from "lucide-react";

export function Hero() {
  const WHATSAPP_URL =
    "https://wa.me/27736969918?text=Hi,%20I%20would%20like%20to%20schedule%20a%20laundry%20pickup";

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Ambient background glows for glassmorphism */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-sky-400/20 via-cyan-400/15 to-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10 dark:from-sky-500/15 dark:via-cyan-500/10 dark:to-indigo-500/15" />
      <div className="absolute top-10 right-5 w-72 h-72 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none -z-10 dark:bg-emerald-500/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline, Promos, CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Location & Delivery Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold glass-panel border border-sky-300/60 dark:border-sky-500/30 text-sky-700 dark:text-sky-300 mb-5 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <Truck className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span>E2A Arcade, Mowbray • Collect & Deliver Service</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Premium Laundry in Cape Town <br />
              <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 dark:from-sky-400 dark:via-cyan-300 dark:to-blue-400 bg-clip-text text-transparent">
                Fresh & Immaculate Care
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Located at <strong>E2A Arcade, 76 Main Road, Mowbray</strong>. We provide
              hygienic washing, tumble drying, crisp ironing, and custom folding.
              From student bundles to bulky duvets and suits.
            </p>

            {/* Promos Row: WASH 5X GET 5KG FREE & 10% DISCOUNT & FREE SOAP */}
            <div className="mt-6 w-full space-y-2.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Promo 1: Wash 5x Get 5kg Free */}
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-gradient-to-r from-amber-500/15 via-amber-400/10 to-transparent border border-amber-400/40 text-xs sm:text-sm">
                  <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Gift className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-extrabold text-amber-700 dark:text-amber-300 uppercase tracking-wide block">
                      WASH 5X GET 5KG FREE!
                    </span>
                    <span className="text-[11px] text-slate-600 dark:text-slate-400">
                      Our signature loyalty reward program
                    </span>
                  </div>
                </div>

                {/* Promo 2: Drop & Go 10% Discount */}
                <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-gradient-to-r from-emerald-500/15 via-emerald-400/10 to-transparent border border-emerald-400/40 text-xs sm:text-sm">
                  <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Tag className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-extrabold text-emerald-700 dark:text-emerald-300 uppercase tracking-wide block">
                      Drop & Go - 10% Discount
                    </span>
                    <span className="text-[11px] text-slate-600 dark:text-slate-400">
                      On collection & delivery services
                    </span>
                  </div>
                </div>
              </div>

              {/* Free inclusions highlight */}
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-sky-50 dark:bg-slate-800/70 border border-sky-200/80 dark:border-sky-500/20 text-xs font-medium text-slate-700 dark:text-slate-200">
                <Droplets className="w-4 h-4 text-sky-500 shrink-0" />
                <span>
                  ✨ <strong className="text-sky-600 dark:text-sky-400">Every wash includes:</strong> Free soap, premium fabric softener & unique freshener!
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
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
            <div className="mt-7 pt-5 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-3 w-full text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Min. 5KG for Wash & Fold</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Express Service Available</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Yoco, Card Machine & EFT</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Glassmorphism Card Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="glass-card-glow rounded-3xl p-6 sm:p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-44 h-44 bg-sky-400/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-5 border-b border-slate-200/60 dark:border-slate-700/60">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-500 to-cyan-400 flex items-center justify-center text-white shadow-md">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                      Joy Sky Laundry
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      E2A Arcade, 76 Main Rd, Mowbray
                    </p>
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>4.1 / 5.0</span>
                </div>
              </div>

              {/* Price Highlight Box */}
              <div className="my-5 p-4 rounded-2xl bg-gradient-to-br from-sky-500/10 via-cyan-500/5 to-transparent border border-sky-400/30">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs uppercase tracking-wider font-bold text-sky-600 dark:text-sky-400">
                    Standard Wash - Dry - Fold
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-sky-500 text-white">
                    Min 5KG
                  </span>
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                    R35.00
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    / KG
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                  Includes free soap, fabric softener & unique freshener! Neatly folded.
                </p>
              </div>

              {/* Key Quick Rates Table */}
              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/50 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/40">
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    Wash Only / Dry Only
                  </span>
                  <span className="font-bold text-sky-600 dark:text-sky-400">
                    R25.00 /kg
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/50 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/40">
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    Linen / Towels Wash & Dry
                  </span>
                  <span className="font-bold text-sky-600 dark:text-sky-400">
                    R40.00 /kg
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/50 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/40">
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    Wash - Dry - Iron
                  </span>
                  <span className="font-bold text-sky-600 dark:text-sky-400">
                    R60.00 /kg
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-400/30">
                  <span className="font-medium text-emerald-800 dark:text-emerald-300">
                    Collect & Deliver Transport
                  </span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    R100.00
                  </span>
                </div>
              </div>

              {/* Card Footer: Hours & Location */}
              <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>📍 E2A Arcade, Mowbray</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> Mon-Sat 8-6, Sun 9-5
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
