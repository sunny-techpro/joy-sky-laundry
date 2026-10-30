"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Check,
  CreditCard,
  Banknote,
  Smartphone,
  Building2,
  Truck,
  ArrowRight,
  Shirt,
  Wind,
  Layers,
  Sparkle,
  Gift,
  Tag,
  Droplets,
  AlertCircle,
  Scissors,
  Bed,
  Footprints,
} from "lucide-react";

export function ServicesPricing() {
  const [activeTab, setActiveTab] = useState<"all" | "standard" | "ironing" | "blankets" | "special">("all");

  const categories = [
    { id: "all", label: "All Services" },
    { id: "standard", label: "Standard Laundry (Per KG)" },
    { id: "ironing", label: "Ironing Only" },
    { id: "blankets", label: "Blankets, Curtains & Rugs" },
    { id: "special", label: "Special Items" },
  ];

  const standardItems = [
    { name: "Wash Only / Dry Only", price: "R25.00", unit: "per KG", desc: "Single wash or tumble dry cycle" },
    { name: "Wash - Dry - Fold", price: "R35.00", unit: "per KG", popular: true, desc: "Our signature flagship service. Free soap, softener & freshener included (Min 5KG)" },
    { name: "Linen / Towels Wash & Dry", price: "R40.00", unit: "per KG", desc: "Heavy cotton sheets, bath towels & hospitality linens" },
    { name: "Stain Wash & Dry", price: "R50.00", unit: "per KG", desc: "Targeted pre-treatment and deep stain removal cycles" },
    { name: "Wash - Dry - Iron", price: "R60.00", unit: "per KG", desc: "Full service with professional steam pressing and folding" },
    { name: "Linen Stain Wash Dry Iron", price: "R80.00", unit: "per KG", desc: "Stain treatment + deep wash, drying & crisp hand ironing" },
    { name: "Express Service", price: "R90.00", unit: "per KG", highlight: true, desc: "Same-day priority turnaround wash, dry & pack" },
  ];

  const ironingItems = [
    { name: "Pillowcase Ironing", price: "R15.00", unit: "per item", desc: "Crisp hotel-standard steam press" },
    { name: "Linen / Clothing", price: "R25.00", unit: "per item", desc: "Shirts, trousers, dresses, blouses on hanger or folded" },
    { name: "Ironing Bulk Rate", price: "R35.00", unit: "per 1 KG", desc: "Affordable by-weight ironing for full family wardrobes" },
  ];

  const blanketItems = [
    { name: "Pillow Inner", price: "R80.00", unit: "each", desc: "Hygienic anti-allergen wash & fluff dry" },
    { name: "Small Blanket", price: "R150.00", unit: "each", desc: "Single bed throws and fleece blankets" },
    { name: "Medium / Double Blanket", price: "R200.00", unit: "each", desc: "Double bed blankets & medium duvets" },
    { name: "Large / Queen Blanket", price: "R250.00", unit: "each", desc: "Queen & King size winter comforters" },
    { name: "Curtains", price: "R60.00", unit: "per KG", desc: "Gentle dust extraction and sanitizing wash" },
    { name: "Couch Cover", price: "R70.00", unit: "per KG", desc: "Heavy fabric upholstery & couch slipcovers" },
    { name: "Matt / Rug", price: "R80.00", unit: "per KG", desc: "Deep fiber carpet & area rug cleaning" },
  ];

  const specialItems = [
    { name: "Shoe Cleaning", price: "R100.00", unit: "per pair", desc: "Detailed sneaker & casual shoe deep clean" },
    { name: "Special Clean Jacket / Coat", price: "R160.00", unit: "per item", desc: "Puffer jackets, trench coats & wool garments" },
    { name: "Three Piece Suit", price: "R210.00", unit: "per suit", desc: "Jacket, waistcoat & trousers premium care" },
  ];

  const paymentMethods = [
    {
      name: "Cash on Delivery",
      icon: Banknote,
      desc: "Pay directly to our delivery driver or at the Mowbray shop",
    },
    {
      name: "Online Card Payment",
      icon: CreditCard,
      desc: "Secure instant checkout via Yoco link",
    },
    {
      name: "EFT",
      icon: Building2,
      desc: "Direct bank transfer (First National Bank - FNB)",
    },
    {
      name: "E-Wallet",
      icon: Smartphone,
      desc: "Instant mobile wallet payments supported",
    },
    {
      name: "Card on Delivery",
      icon: CreditCard,
      desc: "Driver will bring a mobile card machine to your door",
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold glass-panel border border-sky-400/40 text-sky-600 dark:text-sky-300 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            100% Transparent Price List
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Comprehensive Services & Pricing
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Professional laundry, dry pressing, shoe care, and bulky linen services in Cape Town.
            No hidden costs — exceptional care with every wash.
          </p>
        </div>

        {/* Promos Highlight Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {/* Promo 1: Wash 5x Get 5kg Free */}
          <div className="glass-card-glow rounded-2xl p-5 border-l-4 border-l-amber-500 flex items-start gap-3.5 shadow-md">
            <div className="p-2.5 rounded-xl bg-amber-500 text-white shrink-0 shadow-sm">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider block">
                Loyalty Reward
              </span>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                WASH 5X GET 5KG FREE!
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                Complete 5 standard laundry loads and get your next 5kg washed, dried & folded free of charge.
              </p>
            </div>
          </div>

          {/* Promo 2: Drop & Go 10% Discount */}
          <div className="glass-card-glow rounded-2xl p-5 border-l-4 border-l-emerald-500 flex items-start gap-3.5 shadow-md">
            <div className="p-2.5 rounded-xl bg-emerald-600 text-white shrink-0 shadow-sm">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                Special Discount
              </span>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                Drop & Go - 10% Discount
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                Take advantage of our 10% discount on Drop & Go collection and delivery service.
              </p>
            </div>
          </div>

          {/* Promo 3: Free soap & softener */}
          <div className="glass-card-glow rounded-2xl p-5 border-l-4 border-l-sky-500 flex items-start gap-3.5 shadow-md">
            <div className="p-2.5 rounded-xl bg-sky-500 text-white shrink-0 shadow-sm">
              <Droplets className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block">
                Complimentary Care
              </span>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                Free Premium Inclusions
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                Free soap, gentle fabric softener & our unique fragrance freshener included with every load!
              </p>
            </div>
          </div>
        </div>

        {/* Important Notice Pill */}
        <div className="mb-8 p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300/60 dark:border-amber-800/60 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
            <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>
              <strong>Important Requirement:</strong> Minimum <strong>5KG</strong> load for Wash, Dry & Fold service.
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 rounded-xl">
            <Truck className="w-3.5 h-3.5" />
            <span>Collect & Deliver Transport: R100.00</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as typeof activeTab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-sky-500 text-white shadow-md shadow-sky-500/25 scale-105"
                  : "glass-card text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Pricing Lists by Category */}
        <div className="space-y-10">
          {/* Category 1: Standard Laundry (Per KG) */}
          {(activeTab === "all" || activeTab === "standard") && (
            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-slate-200/80 dark:border-slate-800/80 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 dark:bg-sky-400/20 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                    <Shirt className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Standard Laundry (Per KG)
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Minimum 5KG for Wash, Dry & Fold
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 self-start sm:self-auto">
                  Includes Free Soap, Softener & Freshener
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {standardItems.map((item) => (
                  <div
                    key={item.name}
                    className={`p-4 rounded-2xl transition-all duration-200 ${
                      item.popular
                        ? "glass-card-glow ring-2 ring-sky-500"
                        : item.highlight
                        ? "bg-amber-50/70 dark:bg-amber-950/30 border border-amber-300/50"
                        : "bg-white/60 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60"
                    }`}
                  >
                    <div className="flex items-baseline justify-between mb-1">
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                        {item.name}
                      </h4>
                      {item.popular && (
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-sky-500 text-white uppercase">
                          Popular
                        </span>
                      )}
                      {item.highlight && (
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-500 text-white uppercase">
                          Fast
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-1 my-2">
                      <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
                        {item.price}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {item.unit}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Category 2: Ironing Only */}
          {(activeTab === "all" || activeTab === "ironing") && (
            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-200/80 dark:border-slate-800/80">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 dark:bg-cyan-400/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                  <Wind className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Ironing Only
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Precision commercial steam pressing for crisp, wrinkle-free garments
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ironingItems.map((item) => (
                  <div
                    key={item.name}
                    className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60"
                  >
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                      {item.name}
                    </h4>
                    <div className="flex items-baseline gap-1 my-2">
                      <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
                        {item.price}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {item.unit}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Category 3: Special Items */}
          {(activeTab === "all" || activeTab === "special") && (
            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-200/80 dark:border-slate-800/80">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 dark:bg-purple-400/20 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <Footprints className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Special Items & Footwear
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Hand cleaning, tailored coat restoration, and formal suits
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {specialItems.map((item) => (
                  <div
                    key={item.name}
                    className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60"
                  >
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                      {item.name}
                    </h4>
                    <div className="flex items-baseline gap-1 my-2">
                      <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
                        {item.price}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {item.unit}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Category 4: Blankets, Curtains & Rugs */}
          {(activeTab === "all" || activeTab === "blankets") && (
            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-200/80 dark:border-slate-800/80">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-400/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Bed className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Blankets, Curtains & Rugs
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Heavy-duty deep sanitized washing and fluffy thermal drying
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {blanketItems.map((item) => (
                  <div
                    key={item.name}
                    className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60"
                  >
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                      {item.name}
                    </h4>
                    <div className="flex items-baseline gap-1 my-2">
                      <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
                        {item.price}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {item.unit}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Logistics & Transport Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-transparent border border-sky-400/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg">
                  Collect & Deliver Transport: R100.00
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  Reliable direct door-to-door collection & delivery across Cape Town.
                </p>
              </div>
            </div>

            <a
              href="#booking"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white text-xs sm:text-sm font-semibold shadow-md whitespace-nowrap transition-transform hover:scale-105"
            >
              Schedule Pickup &rarr;
            </a>
          </div>
        </div>

        {/* Small Disclaimer Text Required by User */}
        <div className="mt-8 text-center">
          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 italic">
            * All Laundry Is Cleaned At The Owner&apos;s Risk.
          </p>
        </div>

        {/* Updated Payment Methods Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 glass-panel rounded-3xl p-6 sm:p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-sky-500" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Convenient & Safe Payment Methods
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                Choose the payment method that suits you best:
              </p>
            </div>

            {/* Payment method pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <div
                    key={method.name}
                    className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 shadow-xs text-xs font-semibold text-slate-700 dark:text-slate-200"
                    title={method.desc}
                  >
                    <Icon className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                    <span>{method.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
