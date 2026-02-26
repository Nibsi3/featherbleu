import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, DoorClosed, Wrench, Shield, Zap, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CTA } from "@/components/CTA";

const R2_CDN = "https://pub-fae086c900b645d8a58b68eb2162dbca.r2.dev";

export const metadata: Metadata = {
  title: "Sectional Garage Doors George | Garage Door Installation Garden Route | Featherbleu",
  description: "Professional sectional garage door installation, repairs & servicing in George, Knysna, Oudtshoorn, Wilderness & Sedgefield. Quality garage doors for Garden Route homes. Free quotes available.",
  keywords: "garage doors George, sectional garage doors Garden Route, garage door installation Knysna, garage door repairs Oudtshoorn, automated garage doors Wilderness, garage door service Sedgefield",
  openGraph: {
    title: "Sectional Garage Doors | Garden Route | Featherbleu Industries",
    description: "Quality sectional garage door installation and repairs across the Garden Route. Professional service guaranteed.",
  },
};

const services = [
  { icon: DoorClosed, title: "New Installations", desc: "Premium sectional garage doors installed to perfection" },
  { icon: Wrench, title: "Repairs & Servicing", desc: "Fast, reliable repairs and regular maintenance" },
  { icon: Zap, title: "Motor Automation", desc: "Upgrade to automated opening with quality motors" },
  { icon: Shield, title: "Safety Features", desc: "Anti-pinch, auto-reverse, and security locks" },
];

const benefits = [
  "Space-saving vertical opening design",
  "Excellent insulation and weather sealing",
  "Wide range of styles and finishes",
  "Quiet, smooth operation",
  "Enhanced security features",
  "Low maintenance requirements",
];

export default function GarageDoorsPage() {
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
                <DoorClosed className="h-4 w-4 text-[#2979FF]" />
                Garage Doors
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
                Garage Doors in the Garden Route
              </h1>
              <p className="text-lg text-black/70 max-w-2xl">
                Quality garage door installations, repairs, and servicing for homes in George, Knysna, Oudtshoorn, Wilderness, and Sedgefield.
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
                Our Garage Door Services
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Complete garage door solutions for Garden Route properties
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
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
                  alt="Automated garage door motor and opener installation for Garden Route homes"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Sectional Garage Doors?
                </h2>
                <p className="text-gray-500 mb-8">
                  Sectional garage doors are the preferred choice for Garden Route homeowners. They offer superior insulation, security, and aesthetics compared to traditional roll-up doors.
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
              Garage Door Services Across the Garden Route
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
              We install and service garage doors throughout the region:
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
          title="Need a new garage door or repair?"
          description="Contact us for a free quote. We offer competitive pricing and professional installation across the Garden Route."
          primaryText="Get a Quote"
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
