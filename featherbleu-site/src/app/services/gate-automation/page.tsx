import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Lock, Smartphone, Zap, Shield, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CTA } from "@/components/CTA";

const R2_CDN = "https://pub-fae086c900b645d8a58b68eb2162dbca.r2.dev";

export const metadata: Metadata = {
  title: "Gate Automation George | Automated Gates Garden Route | Featherbleu",
  description: "Professional gate automation installation in George, Knysna, Oudtshoorn, Wilderness & Sedgefield. Sliding gates, swing gates, intercoms & access control. Garden Route gate motor specialists.",
  keywords: "gate automation George, automated gates Garden Route, gate motors Knysna, sliding gate installation Oudtshoorn, swing gate automation Wilderness, gate installer Sedgefield, electric gates near me",
  openGraph: {
    title: "Gate Automation | Garden Route | Featherbleu Industries",
    description: "Professional gate automation for sliding and swing gates across the Garden Route. Expert installation and repairs.",
  },
};

const services = [
  { icon: Lock, title: "Sliding Gates", desc: "Automated sliding gate motors for driveways and entrances" },
  { icon: Zap, title: "Swing Gates", desc: "Swing gate automation for single and double gates" },
  { icon: Smartphone, title: "Remote & App Control", desc: "Control your gate from anywhere with smart remotes and apps" },
  { icon: Shield, title: "Intercoms & Access", desc: "Video intercoms and access control integration" },
];

const benefits = [
  "Enhanced property security",
  "Convenient remote access",
  "Increased property value",
  "Weather-resistant motors",
  "Battery backup options",
  "Integration with smart home systems",
];

export default function GateAutomationPage() {
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
                <Lock className="h-4 w-4 text-[#2979FF]" />
                Gate Automation
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
                Gate Automation in the Garden Route
              </h1>
              <p className="text-lg text-black/70 max-w-2xl">
                Professional gate motor installation and repairs for properties in George, Knysna, Oudtshoorn, Wilderness, and Sedgefield.
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
                Gate Automation Services
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Complete gate automation solutions for Garden Route homes and businesses
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
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Why Automate Your Gate?
                </h2>
                <p className="text-gray-500 mb-8">
                  Gate automation is one of the best investments for your Garden Route property. It provides security, convenience, and adds value to your home.
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
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=800&q=80"
                  alt="Professional gate automation system with remote control for Garden Route properties"
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
              Gate Automation Across the Garden Route
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
              We install and repair gate motors throughout the region:
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
          title="Ready to automate your gate?"
          description="Contact us for a free consultation and quote. We'll recommend the best gate motor solution for your property."
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
