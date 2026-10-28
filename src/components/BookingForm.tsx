"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import {
  Calendar,
  Clock,
  User,
  Phone,
  MapPin,
  Sparkles,
  CheckCircle2,
  Send,
  MessageCircle,
  FileText,
  ShieldCheck,
} from "lucide-react";

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Wash, Dry & Fold - R70 per load (9kg)",
    pickupDate: "",
    message: "",
    address: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const serviceOptions = [
    "Wash, Dry & Fold - R70 per load (9kg)",
    "Steam Ironing & Pressing - from R85",
    "Duvets, Blankets & Bulky Bedding - from R110",
    "Delicates & Specialty Care - from R95",
    "Commercial & Student Package",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading("Sending your booking request...");

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit booking");
      }

      toast.success(
        data.demoMode
          ? "Booking received! (Demo Mode: Request registered successfully)"
          : "Booking confirmed! Confirmation email dispatched.",
        { id: toastId, duration: 5000 }
      );

      setIsSuccess(true);
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast.error(errorMsg, { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  // WhatsApp prefilled message
  const whatsappBookingUrl = `https://wa.me/27736969918?text=${encodeURIComponent(
    `Hi Joy Sky Laundry! I would like to schedule a laundry pickup:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Service: ${formData.service}\n• Pickup Date: ${formData.pickupDate}\n• Address: ${formData.address || "Cape Town"}\n• Message: ${formData.message || "None"}`
  )}`;

  return (
    <section id="booking" className="py-20 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold glass-panel border border-sky-400/40 text-sky-600 dark:text-sky-300 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Easy 1-Minute Booking
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Schedule Your Free Pickup
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Submit your details below. Our team in Mowbray will collect, sanitize,
            and deliver your laundry fresh to your Cape Town address.
          </p>
        </div>

        {/* Card Container */}
        <div className="glass-card-glow rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {isSuccess ? (
            /* Success confirmation state */
            <div className="text-center py-10 space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Pickup Request Received!
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Thank you, <strong>{formData.name || "Customer"}</strong>. Your booking
                  details have been dispatched to our Mowbray dispatch hub for pickup on{" "}
                  <strong>{formData.pickupDate}</strong>.
                </p>
              </div>

              {/* Summary box */}
              <div className="max-w-md mx-auto p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-left text-xs sm:text-sm space-y-1.5 text-slate-700 dark:text-slate-300">
                <div>
                  <strong>Service:</strong> {formData.service}
                </div>
                <div>
                  <strong>Phone:</strong> {formData.phone}
                </div>
                {formData.address && (
                  <div>
                    <strong>Address:</strong> {formData.address}
                  </div>
                )}
                {formData.message && (
                  <div>
                    <strong>Notes:</strong> {formData.message}
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <a
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md flex items-center justify-center gap-2 transition-transform hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4" />
                  Confirm via WhatsApp Instantly
                </a>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm transition-colors"
                >
                  Book Another Pickup
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Sipho Ndlovu"
                      value={formData.name}
                      onChange={handleChange}
                      className="glass-input w-full pl-10 pr-4 py-3 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="e.g. +27 73 696 9918"
                      value={formData.phone}
                      onChange={handleChange}
                      className="glass-input w-full pl-10 pr-4 py-3 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Service & Pickup Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Service <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="glass-input w-full px-4 py-3 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all cursor-pointer"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-white dark:bg-slate-900">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="pickupDate"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Pickup Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="pickupDate"
                      name="pickupDate"
                      type="date"
                      required
                      value={formData.pickupDate}
                      onChange={handleChange}
                      className="glass-input w-full pl-10 pr-4 py-3 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Collection Address */}
              <div>
                <label
                  htmlFor="address"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                >
                  Pickup Address (Cape Town)
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="e.g. 76 Main Rd, Mowbray / Rondebosch / Observatory"
                    value={formData.address}
                    onChange={handleChange}
                    className="glass-input w-full pl-10 pr-4 py-3 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                >
                  Message / Special Instructions
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us about special garment care, preferred time window, gate access code, etc."
                    value={formData.message}
                    onChange={handleChange}
                    className="glass-input w-full px-4 py-3 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-xl shadow-sky-500/30 hover:shadow-sky-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Dispatching Booking...
                    </span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Confirm Online Booking (Free Pickup)</span>
                    </>
                  )}
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400 text-center">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>No upfront payment required. Accepted: Cash, Card, Snap, Scan, EFT.</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
