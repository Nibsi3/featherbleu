import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Camera, Eye, Shield, Smartphone, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CTA } from "@/components/CTA";

const R2_CDN = "https://pub-fae086c900b645d8a58b68eb2162dbca.r2.dev";

export const metadata: Metadata = {
  title: "CCTV Installation George | Security Cameras Garden Route | Featherbleu",
  description: "Professional CCTV installation in George, Knysna, Oudtshoorn, Wilderness & Sedgefield. HD security cameras, remote viewing & 24/7 recording. Garden Route's trusted CCTV specialists.",
  keywords: "CCTV installation George, security cameras Garden Route, CCTV Knysna, surveillance cameras Oudtshoorn, security camera installation Wilderness, CCTV installer Sedgefield, home security cameras near me",
  openGraph: {
    title: "CCTV Systems | Garden Route | Featherbleu Industries",
    description: "Professional CCTV installation and security camera systems across the Garden Route. HD cameras with remote viewing.",
  },
};

const services = [
  { icon: Camera, title: "HD Cameras", desc: "High-definition cameras for crystal-clear footage day and night" },
  { icon: Eye, title: "24/7 Recording", desc: "Continuous recording with local and cloud storage options" },
  { icon: Smartphone, title: "Remote Viewing", desc: "Watch your property live from anywhere on your phone" },
  { icon: Shield, title: "Motion Detection", desc: "Smart alerts when movement is detected on your property" },
];

const benefits = [
  "Deter crime and vandalism",
  "Monitor your property 24/7",
  "Evidence for insurance claims",
  "Check on your home while away",
  "Monitor staff and deliveries",
  "Peace of mind for your family",
];

export default function CCTVPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative pt-40 pb-16 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/3465067d-41b4-4e43-b018-75749a9c9818_3840w.jpg"
              alt="Hero background"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="relative mx-auto max-w-4xl px-6 z-10">
            <div className="rounded-3xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-2xl p-8 md:p-10 flex flex-col items-center text-center gap-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium shadow-lg">
                <Camera className="h-4 w-4 text-[#2979FF]" />
                CCTV Systems
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
                CCTV Installation in the Garden Route
              </h1>
              <p className="text-lg text-black/70 max-w-2xl">
                Professional security camera installation for homes and businesses in George, Knysna, Oudtshoorn, Wilderness, and Sedgefield.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-black hover:bg-gray-100 transition shadow-xl"
                >
                  Get a Free Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-black/20 bg-white/80 px-8 py-4 text-base font-semibold text-black hover:border-[#2979FF] hover:text-[#2979FF] transition"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                CCTV Features & Services
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Complete surveillance solutions for Garden Route properties
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#2979FF]/50 transition shadow-sm">
                  <div className="h-12 w-12 rounded-xl bg-[#2979FF]/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-[#2979FF]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-500">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80"
                  alt="HD security camera surveillance system with night vision for Garden Route homes and businesses"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Why Install CCTV?
                </h2>
                <p className="text-gray-500 mb-8">
                  CCTV is one of the most effective security measures for Garden Route properties. Whether you're protecting your home, business, or farm — cameras provide 24/7 surveillance and peace of mind.
                </p>

                <div className="space-y-4">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#2979FF] mt-0.5 shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              CCTV Installation Across the Garden Route
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
              We install and service security camera systems throughout the region:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["George", "Knysna", "Oudtshoorn", "Wilderness", "Sedgefield", "Mossel Bay", "Plettenberg Bay"].map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-5 py-2.5 text-sm text-gray-700"
                >
                  <span className="h-2 w-2 rounded-full bg-[#2979FF]" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        <CTA
          title="Ready to secure your property with CCTV?"
          description="Contact us for a free site assessment and quote. We'll design a camera system perfect for your needs."
          primaryText="Get Started"
          primaryHref="/contact"
          secondaryText="Call Us"
          secondaryHref="tel:+27829217299"
        />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
