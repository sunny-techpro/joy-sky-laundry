"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Phone,
  Mail,
  MapPin,
  Calendar,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export function ContactHours() {
  const WHATSAPP_URL =
    "https://wa.me/27736969918?text=Hi,%20I%20would%20like%20to%20schedule%20a%20laundry%20pickup";

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold glass-panel border border-sky-400/40 text-sky-600 dark:text-sky-300 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Always Accessible
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Operating Hours & Direct Contact
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Conveniently situated at E2A Arcade in Mowbray. Drop off your items or book
            a scheduled collection via phone or WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Operating Hours Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card-glow rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/10 dark:bg-sky-400/20 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Operating Hours
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Open 7 Days a Week in Mowbray
                    </p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-300/40">
                  Open Today
                </span>
              </div>

              <div className="space-y-4">
                {/* Mon - Sat */}
                <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-sky-500" />
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        Monday – Saturday
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Full wash, dry, iron & collection service
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-extrabold text-sky-600 dark:text-sky-400 font-mono">
                      8:00 AM – 6:00 PM
                    </span>
                  </div>
                </div>

                {/* Sun */}
                <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-amber-500" />
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        Sunday
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Drop-offs & scheduled returns
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-extrabold text-amber-600 dark:text-amber-400 font-mono">
                      9:00 AM – 5:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
              <span>🚀 Collect & Deliver Transport: R100</span>
              <span className="font-semibold text-sky-600 dark:text-sky-400">Express Available</span>
            </div>
          </motion.div>

          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 dark:bg-emerald-400/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Contact Details
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Phone / WhatsApp & Email
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href="tel:+27736969918"
                  className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between hover:border-sky-400/60 dark:hover:border-sky-500 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-sky-500 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Phone / WhatsApp
                      </div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        +27 73 696 9918
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-sky-600 dark:text-sky-400">
                    Call Now &rarr;
                  </span>
                </a>

                {/* Email */}
                <a
                  href="mailto:joyskylaundry@gmail.com"
                  className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between hover:border-sky-400/60 dark:hover:border-sky-500 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-sky-500 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Email Address
                      </div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white break-all">
                        joyskylaundry@gmail.com
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 shrink-0">
                    Email Us &rarr;
                  </span>
                </a>

                {/* Address */}
                <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-sky-500 shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Physical Store Address
                      </div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        E2A Arcade, 76 Main Road, Mowbray, Cape Town, 7700
                      </div>
                    </div>
                  </div>
                  <a
                    href="#map"
                    className="text-xs font-semibold text-sky-600 dark:text-sky-400 shrink-0 ml-2"
                  >
                    View Map &darr;
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm text-center flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp (+27 73 696 9918)
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
