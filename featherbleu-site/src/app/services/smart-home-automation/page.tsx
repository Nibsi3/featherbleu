import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Home, Smartphone, Lightbulb, Lock, Thermometer, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CTA } from "@/components/CTA";

const R2_CDN = "https://pub-fae086c900b645d8a58b68eb2162dbca.r2.dev";

export const metadata: Metadata = {
  title: "Smart Home Automation George | Garden Route Home Automation Experts | Featherbleu",
  description: "Professional smart home automation installation in George, Knysna, Oudtshoorn, Wilderness & Sedgefield. Control lighting, security, access & climate from your phone. Garden Route's trusted automation specialists.",
  keywords: "smart home automation George, home automation Garden Route, smart home Knysna, automation installer Oudtshoorn, smart lighting Wilderness, home automation Sedgefield, smart home installer near me",
  openGraph: {
    title: "Smart Home Automation | Garden Route | Featherbleu Industries",
    description: "Transform your Garden Route home with professional smart automation. Lighting, security, access control & more.",
  },
};

const features = [
  { icon: Lightbulb, title: "Smart Lighting", desc: "Automated lighting scenes, schedules, and remote control for every room" },
  { icon: Lock, title: "Smart Access", desc: "Keyless entry, remote gate control, and visitor management" },
  { icon: Thermometer, title: "Climate Control", desc: "Automated heating, cooling, and ventilation for optimal comfort" },
  { icon: Smartphone, title: "App Control", desc: "Control your entire home from your smartphone, anywhere in the world" },
];

const benefits = [
  "Reduce energy bills with automated scheduling",
  "Enhanced security with smart locks and alerts",
  "Convenience of controlling everything from one app",
  "Increase property value with modern automation",
  "Peace of mind when you're away from home",
  "Customised solutions for your lifestyle",
];

export default function SmartHomeAutomationPage() {
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
                <Home className="h-4 w-4 text-[#2979FF]" />
                Smart Home Automation
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
                Smart Home Automation in the Garden Route
              </h1>
              <p className="text-lg text-black/70 max-w-2xl">
                Transform your home in George, Knysna, Oudtshoorn, Wilderness, or Sedgefield into a connected smart home. We design and install automation systems that make life easier, safer, and more efficient.
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

        {/* Features */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                What We Automate
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Complete smart home solutions tailored for Garden Route homes and businesses
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#2979FF]/50 transition shadow-sm">
                  <div className="h-12 w-12 rounded-xl bg-[#2979FF]/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-[#2979FF]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Smart Home Automation?
                </h2>
                <p className="text-gray-500 mb-8">
                  Whether you're in George, Knysna, or anywhere along the Garden Route, smart home automation brings convenience, security, and energy savings to your doorstep.
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

              <div className="relative aspect-square rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=800&q=80"
                  alt="Smart home control panel and automation hub for Garden Route properties"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Serving the Entire Garden Route
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
              We install smart home automation systems across the Garden Route region, including:
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
          title="Ready to automate your home?"
          description="Contact us for a free consultation and quote. We'll design a smart home solution perfect for your Garden Route property."
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
