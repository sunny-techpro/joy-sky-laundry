"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Sparkles, Menu, X, PhoneCall, Shirt, MapPin } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const WHATSAPP_URL =
    "https://wa.me/27736969918?text=Hi,%20I%20would%20like%20to%20schedule%20a%20laundry%20pickup";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Price List & Offers", href: "#services" },
    { label: "Book Pickup", href: "#booking" },
    { label: "Customer Reviews", href: "#reviews" },
    { label: "Hours & Location", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? "glass-panel shadow-md shadow-sky-500/5 py-3 border-b"
          : "bg-white/40 dark:bg-slate-950/40 backdrop-blur-sm py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-sky-500/25 group-hover:scale-105 transition-transform duration-300">
              <Shirt className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-700 dark:from-sky-400 dark:via-cyan-300 dark:to-blue-400 bg-clip-text text-transparent">
                Joy Sky Laundry
              </span>
              <span className="text-[11px] font-medium tracking-wide text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-sky-500" />
                E2A Arcade, Mowbray • Cape Town
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm hover:shadow-emerald-500/20 transition-all duration-300 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <PhoneCall className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href="#booking"
              className="px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-md shadow-sky-500/25 transition-all duration-300 flex items-center gap-1.5 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4" />
              Book Online
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-sky-500" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700 dark:text-slate-200" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-slate-200/60 dark:border-slate-800/80 rounded-2xl glass-panel p-4 flex flex-col gap-3 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-slate-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2 border-t border-slate-200/50 dark:border-slate-800/50">
              <a
                href="#booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-sm flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Book Online
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl text-sm font-semibold bg-emerald-600 text-white shadow-sm flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                Order via WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
