import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesPricing } from "@/components/ServicesPricing";
import { BookingForm } from "@/components/BookingForm";
import { Reviews } from "@/components/Reviews";
import { ContactHours } from "@/components/ContactHours";
import { MapAndFooter } from "@/components/MapAndFooter";
import { MessageCircle } from "lucide-react";

export default function Home() {
  const WHATSAPP_URL =
    "https://wa.me/27736969918?text=Hi,%20I%20would%20like%20to%20schedule%20a%20laundry%20pickup";

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-sky-500 selection:text-white">
      {/* Top sticky navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Services & Price List */}
        <ServicesPricing />

        {/* Online Booking System */}
        <BookingForm />

        {/* Real Customer Reviews */}
        <Reviews />

        {/* Contact & Operating Hours */}
        <ContactHours />

        {/* Google Maps & Footer */}
        <MapAndFooter />
      </main>

      {/* Floating WhatsApp Action Pill for instant conversion on any scroll position */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all duration-300 font-semibold text-sm group"
      >
        <MessageCircle className="w-5 h-5 fill-white text-white group-hover:rotate-12 transition-transform duration-300" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>
    </div>
  );
}
