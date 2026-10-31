"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  ExternalLink,
  Navigation,
  Phone,
  Mail,
  Clock,
  Shirt,
  Heart,
  Sparkles,
} from "lucide-react";

export function MapAndFooter() {
  const address = "E2A Arcade, 76 Main Road, Mowbray, Cape Town, 7700";
  const mapEmbedUrl =
    "https://maps.google.com/maps?q=Joy%20Sky%20Laundry%2C%2076%20Main%20Road%2C%20Mowbray%2C%20Cape%20Town%2C%207700%2C%20South%20Africa&t=&z=17&ie=UTF8&iwloc=&output=embed";
  const googleMapsDirectionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Joy+Sky+Laundry,+76+Main+Road,+Mowbray,+Cape+Town,+7700,+South+Africa";

  return (
    <footer id="map" className="relative pt-10 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Google Maps Section Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card-glow rounded-3xl p-4 sm:p-6 mb-16 overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 px-2">
            <div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-sky-500" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Visit Us at E2A Arcade, Mowbray
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {address} • Convenient street & arcade parking
              </p>
            </div>

            <a
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs sm:text-sm font-semibold shadow-md transition-all hover:scale-105"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </div>

          {/* Responsive Map Container */}
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-700/80 shadow-inner relative">
            <iframe
              title="Joy Sky Laundry Location Map"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter contrast-[1.02] dark:opacity-90"
            />
          </div>
        </motion.div>

        {/* Footer Top: Main Brand & Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200/70 dark:border-slate-800/80 text-sm">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-sky-500/25">
                <Shirt className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-700 dark:from-sky-400 dark:via-cyan-300 dark:to-blue-400 bg-clip-text text-transparent">
                Joy Sky Laundry
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Cape Town&apos;s trusted laundromat at E2A Arcade, Mowbray. Providing
              wash, dry, fold, ironing, blanket cleaning, and shoe restoration with
              free soap, softener, and fragrance freshener included.
            </p>
            <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 space-y-1">
              <p>📍 {address}</p>
              <p>📞 Phone/WhatsApp: +27 73 696 9918</p>
              <p>
                <a
                  href="mailto:joyskylaundry@gmail.com"
                  className="hover:text-sky-500 transition-colors inline-flex items-center gap-1.5"
                >
                  ✉️ joyskylaundry@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#services" className="hover:text-sky-500 transition-colors">
                  Services & Price List
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-sky-500 transition-colors">
                  Schedule Pickup
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-sky-500 transition-colors">
                  Customer Reviews (4.1★)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-500 transition-colors">
                  Hours & Contact
                </a>
              </li>
              <li>
                <a href="#map" className="hover:text-sky-500 transition-colors">
                  Store Location
                </a>
              </li>
            </ul>
          </div>

          {/* Special Offers & Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Promos & Offers
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li className="text-amber-600 dark:text-amber-400 font-semibold">
                ★ Wash 5x Get 5kg Free!
              </li>
              <li className="text-emerald-600 dark:text-emerald-400 font-semibold">
                ★ Drop & Go 10% Discount
              </li>
              <li>
                <a href="#services" className="hover:text-sky-500 transition-colors">
                  Standard Laundry (from R25 - R35/kg)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-500 transition-colors">
                  Ironing Only (from R15/item)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-500 transition-colors">
                  Blankets, Curtains & Rugs
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-500 transition-colors">
                  Shoe & Suit Cleaning
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Transport */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Hours & Transport
            </h4>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-1.5">
              <p>
                <strong className="text-slate-800 dark:text-slate-200">Mon–Sat:</strong>{" "}
                8:00 AM – 6:00 PM
              </p>
              <p>
                <strong className="text-slate-800 dark:text-slate-200">Sunday:</strong>{" "}
                9:00 AM – 5:00 PM
              </p>
              <div className="pt-2">
                <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  Collect & Deliver Transport: R100
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© 2026 Joy Sky Laundry. All rights reserved. E2A Arcade, Mowbray, Cape Town.</p>
          <div className="flex items-center gap-2 text-center sm:text-right">
            <span>Accepted: Cash on Delivery • Yoco Card • FNB EFT • E-Wallet • Driver Card Machine</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
