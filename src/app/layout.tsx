import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joy Sky Laundry | Premium Laundry in Cape Town - Free Collection & Delivery",
  description:
    "Cape Town's premier laundry & dry cleaning service in Mowbray. Free collection and delivery across Cape Town. Wash, Dry & Fold from R70/9kg load. Book online or via WhatsApp +27 73 696 9918.",
  keywords: [
    "laundry cape town",
    "laundromat mowbray",
    "laundry collection cape town",
    "wash dry fold cape town",
    "Joy Sky Laundry",
  ],
  authors: [{ name: "Joy Sky Laundry" }],
  openGraph: {
    title: "Joy Sky Laundry - Premium Laundry in Cape Town",
    description: "Wash, Dry, and Fold at R70 per 9kg load. Free Collection & Delivery.",
    type: "website",
    locale: "en_ZA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100 flex flex-col selection:bg-sky-500 selection:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 4500,
              style: {
                borderRadius: "14px",
                background: "#0f172a",
                color: "#ffffff",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
