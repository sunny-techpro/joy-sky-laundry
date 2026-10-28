"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Check,
  CreditCard,
  Banknote,
  QrCode,
  ArrowRight,
  Shirt,
  Wind,
  Layers,
  Sparkle,
} from "lucide-react";

export function ServicesPricing() {
  const services = [
    {
      id: "wash-dry-fold",
      title: "Wash, Dry & Fold",
      tagline: "Our Signature Flagship Service",
      price: "R70",
      unit: "per load (9kg)",
      popular: true,
      description:
        "Everyday clothes washed with quality detergents, tumble dried to soft perfection, and crisply folded ready for your wardrobe.",
      features: [
        "Full 9kg capacity load",
        "Free Collection & Delivery in Cape Town",
        "Fabric softener included",
        "Whites & colors separated safely",
        "Neatly packaged in protective wrap",
      ],
      ctaText: "Book Wash, Dry & Fold",
    },
    {
      id: "iron-press",
      title: "Steam Ironing & Pressing",
      tagline: "Wrinkle-Free Precision",
      price: "R85",
      unit: "per bundle / R15 per shirt",
      popular: false,
      description:
        "Professional high-pressure steam pressing for business shirts, trousers, dresses, and linens that demand a crisp, polished look.",
      features: [
        "Hanger or flat-fold delivery",
        "Collar & cuff detailing",
        "Gentle on delicate synthetics & cottons",
        "Crease-free guarantee",
        "Ideal for professionals and students",
      ],
      ctaText: "Book Ironing Service",
    },
    {
      id: "duvets-blankets",
      title: "Duvets, Blankets & Bulky",
      tagline: "Deep Hygienic Sanitization",
      price: "R110",
      unit: "from R110 / single to king",
      popular: false,
      description:
        "Large drum machines engineered for thick duvets, heavy winter blankets, pillows, and comforters that domestic machines cannot handle.",
      features: [
        "Deep anti-allergen sanitizing wash",
        "Fluffy down & synthetic drying",
        "Thermal mite eradication",
        "Breathable storage bag packaging",
        "Same week delivery",
      ],
      ctaText: "Book Bulky Laundry",
    },
    {
      id: "delicates-specialty",
      title: "Delicates & Specialty Care",
      tagline: "Extra Gentle Fabric Treatment",
      price: "R95",
      unit: "per load / specialty item",
      popular: false,
      description:
        "Specialized temperature control, gentle cycle, and mild cleansing agents for woolens, silks, gym-wear, and sensitive fabrics.",
      features: [
        "Low heat & gentle moisture extraction",
        "Hypoallergenic detergent options",
        "Preserves fabric elasticity and color",
        "Hand-wash simulation cycle",
        "Thorough inspection before packaging",
      ],
      ctaText: "Book Delicates Care",
    },
  ];

  const paymentMethods = [
    { name: "Cash", icon: Banknote, desc: "Cash on delivery or drop-off" },
    { name: "Cards (Visa / Master)", icon: CreditCard, desc: "Tap & Go card terminals" },
    { name: "SnapScan", icon: QrCode, desc: "Fast QR mobile payment" },
    { name: "Zapper / Scan to Pay", icon: Sparkle, desc: "Scan QR with your banking app" },
    { name: "EFT", icon: ArrowRight, desc: "Instant bank transfers accepted" },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold glass-panel border border-sky-400/40 text-sky-600 dark:text-sky-300 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent, Affordable Rates
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Services & Transparent Price List
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Premium laundry care crafted for Cape Town residents, students, and
            businesses. No hidden fees — just spotless clothes delivered on time.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                service.popular
                  ? "glass-card-glow ring-2 ring-sky-500 shadow-xl shadow-sky-500/15"
                  : "glass-card hover:shadow-lg hover:border-sky-300/60 dark:hover:border-sky-500/40"
              }`}
            >
              {/* Highlight Badge */}
              {service.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-extrabold tracking-wide uppercase shadow-md flex items-center gap-1.5 whitespace-nowrap">
                  <Sparkles className="w-3 h-3" />
                  Most Popular • Best Value
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-xs text-sky-600 dark:text-sky-400 font-medium mt-1">
                  {service.tagline}
                </p>

                {/* Price Display */}
                <div className="my-5 pb-5 border-b border-slate-200/80 dark:border-slate-800/80">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-extrabold text-slate-900 dark:text-white">
                      {service.price}
                    </span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {service.unit}
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <div className="mt-0.5 rounded-full p-0.5 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <a
                href="#booking"
                className={`w-full py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  service.popular
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-md shadow-sky-500/25 hover:shadow-sky-500/40"
                    : "bg-slate-100 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400"
                }`}
              >
                <span>{service.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Accepted Payment Methods Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 glass-panel rounded-3xl p-6 sm:p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-sky-500" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Flexible Accepted Payment Options
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                Pay conveniently on delivery, at our Mowbray shop, or digitally:
              </p>
            </div>

            {/* Payment method pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <div
                    key={method.name}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 shadow-xs text-xs font-semibold text-slate-700 dark:text-slate-200"
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

