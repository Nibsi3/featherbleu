import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Camera, DoorClosed, Star, MapPin, CheckCircle2, Lock, Wrench } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CTA } from "@/components/CTA";
import { HeroBackground } from "@/components/GridBackground";

export const metadata: Metadata = {
  title: "Featherbleu Industries | Smart Security & Home Automation",
  description: "Professional smart home automation, garage doors, gate automation, CCTV and access control. From Mossel Bay to Plettenberg Bay. Live smarter. Be safer.",
};

const R2_CDN = "https://pub-fae086c900b645d8a58b68eb2162dbca.r2.dev";

const projectImages = [
  `${R2_CDN}/feather/475866091_122169498716284491_6782023766995823618_n.jpg`,
  `${R2_CDN}/feather/476012091_122169498086284491_5958448199652639795_n.jpg`,
  `${R2_CDN}/feather/476164445_122169498500284491_296521340978272458_n.jpg`,
  `${R2_CDN}/feather/476168592_122169498308284491_7317111331494673910_n.jpg`,
  `${R2_CDN}/feather/476283919_122169498158284491_3332934235826273000_n.jpg`,
  `${R2_CDN}/feather/476360208_122169498470284491_8552460379997528590_n.jpg`,
  `${R2_CDN}/feather/476365693_122169497840284491_8950330315969080726_n.jpg`,
];

const testimonials = [
  "Absolutely outstanding work from this team. I couldn't have asked for better.",
  "Werner arrived at the scheduled time and quickly fixed the issue. Great service!",
  "Your friendly attitude and extra effort are truly appreciated. Everything is working perfectly.",
  "Professional and friendly service, I highly recommend.",
  "Excellent service. Werner provided excellent service and kept his word.",
  "Very neat installation, I can recommend them for your garage door needs.",
  "Absolute top class customer service! Nothing is too much trouble for Werner and Joe.",
  "You are efficient, hard working, honest and really go the extra mile.",
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-12">
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/3465067d-41b4-4e43-b018-75749a9c9818_3840w.jpg"
              alt="Featherbleu hero background"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-14 z-10">
            <div className="grid gap-8 items-start lg:grid-cols-[1.25fr_0.9fr]">
            <div className="relative rounded-3xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-2xl p-6 sm:p-10 md:p-12 flex flex-col items-center text-center gap-5 justify-start lg:h-[560px] overflow-hidden">
              <div className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium shadow-lg">
                <Shield className="h-4 w-4 text-[#2979FF]" />
                Security & Automation - Garden Route
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-[1.05] tracking-tight">
                Live smarter.
                <br />
                <span className="text-[#2979FF]">Be safer.</span>
              </h1>

              <p className="text-base sm:text-lg text-black/70 max-w-xl leading-relaxed">
                Professional security and automation solutions for homes and businesses - from Mossel Bay to Plettenberg Bay. We install, repair, and upgrade with care.
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
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-black/20 bg-white/80 px-8 py-4 text-base font-semibold text-black hover:border-[#2979FF] hover:text-[#2979FF] transition"
                >
                  Our Services
                </Link>
              </div>

              <div className="mt-auto flex flex-wrap items-center justify-center gap-6 pt-6 pb-1 w-full">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-black leading-none">1000+</div>
                  <div className="text-xs uppercase tracking-wider text-black/60 mt-1 leading-tight">Projects</div>
                </div>
                <div className="w-px h-10 bg-black/10" />
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-black leading-none">5★</div>
                  <div className="text-xs uppercase tracking-wider text-black/60 mt-1 leading-tight">Rating</div>
                </div>
                <div className="w-px h-10 bg-black/10" />
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-black leading-none">20+</div>
                  <div className="text-xs uppercase tracking-wider text-black/60 mt-1 leading-tight">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right frosted glass card with team photo */}
            <div className="hidden lg:flex flex-col items-center text-center rounded-3xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-2xl p-10 md:p-14 gap-6 lg:h-[560px] justify-start overflow-hidden">
              <div className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium shadow-lg">
                <Shield className="h-4 w-4 text-[#2979FF]" />
                Hands-On. Every Job.
              </div>
              <div className="relative w-full rounded-2xl overflow-hidden border border-white/40 shadow-lg h-[260px]">
                <Image
                  src="/joeandwerner/group.jpeg"
                  alt="Werner and Joe on the job - Featherbleu Industries"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-black/70 leading-relaxed">
                Werner and Joe personally handle every installation - no subcontractors, no shortcuts.
              </p>
              <div className="mt-auto flex items-center gap-3 bg-white/90 rounded-2xl px-5 py-4 shadow-lg mx-auto">
                <div className="flex -space-x-2">
                  <div className="h-9 w-9 rounded-full bg-[#2979FF] flex items-center justify-center text-white text-xs font-bold">W</div>
                  <div className="h-9 w-9 rounded-full bg-[#2979FF] flex items-center justify-center text-white text-xs font-bold">J</div>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-black text-sm">Werner & Joe</div>
                  <div className="text-xs text-black/70">Co-Owners / Hands-On Installers</div>
                </div>
              </div>
            </div>

            </div>
          </div>
        </section>

        {/* Values Strip */}
        <section className="py-16 bg-black">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { title: "Work Worth Signing", desc: "Every project reflects pride in our craft" },
                { title: "Trust Is Earned", desc: "Honest communication, always" },
                { title: "Growth Through Collaboration", desc: "We grow together with our clients" },
                { title: "Excellence in Execution", desc: "Quality in every detail" },
              ].map((value, i) => (
                <div key={i} className="text-center">
                  <div className="h-12 w-12 rounded-xl bg-[#2979FF]/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-6 w-6 text-[#2979FF]" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">{value.title}</h3>
                  <p className="text-sm text-gray-400">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 lg:grid-cols-12 items-start">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#2979FF] uppercase tracking-wider mb-4">
                  <MapPin className="h-4 w-4" />
                  Garden Route coverage
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Local, reliable security & automation - from Mossel Bay to Plett
                </h2>
                <p className="text-lg text-gray-500 max-w-2xl">
                  We operate across the Garden Route and surrounding areas, delivering professional installations, repairs, and upgrades for homes and businesses.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                    "Mossel Bay",
                    "George",
                    "Wilderness",
                    "Sedgefield",
                    "Knysna",
                    "Plettenberg Bay",
                    "Oudtshoorn",
                  ].map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2979FF]" />
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg shadow-black/5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    What you can expect
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Clear communication & honest advice",
                      "Neat installations with attention to detail",
                      "Quality components and reliable workmanship",
                      "Fast support for repairs and troubleshooting",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle2 className="h-5 w-5 text-[#2979FF] mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/projects"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 hover:border-[#2979FF]/50 hover:bg-[#2979FF]/5 transition"
                    >
                      View Our Work
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#2979FF] px-4 py-3 text-sm font-semibold text-white hover:bg-[#1e5dd8] transition"
                    >
                      Request a Quote
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-24 bg-gray-50/50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-[#2979FF] uppercase tracking-wider mb-4">
                Our Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Complete security & automation solutions
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                From installation to repairs, we provide end-to-end services for all your security and automation needs.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Shield, title: "Smart Home Automation", desc: "Control lighting, access, and smart devices", href: "/services/smart-home-automation" },
                { icon: DoorClosed, title: "Garage Doors", desc: "Installations, upgrades, and servicing", href: "/services/garage-doors" },
                { icon: Camera, title: "CCTV Systems", desc: "Cameras, monitoring and recording setups", href: "/services/cctv" },
                { icon: Lock, title: "Gate Automation", desc: "New motors, repairs, and replacements", href: "/services/gate-automation" },
                { icon: Shield, title: "Access Control", desc: "Keypads, remotes, and secure entry solutions", href: "/services/access-control" },
                { icon: Wrench, title: "Servicing & Repairs", desc: "Fast diagnostics and quality workmanship", href: "/services" },
              ].map((service, i) => (
                <Link key={i} href={service.href} className="group bg-black border border-black rounded-2xl p-8 hover:bg-[#2979FF] hover:border-[#2979FF] transition-all duration-300">
                  <div className="h-14 w-14 rounded-xl bg-[#2979FF] flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300">
                    <service.icon className="h-7 w-7 text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-400 group-hover:text-white/80 transition-colors duration-300">{service.desc}</p>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[#2979FF] hover:text-[#1e5dd8] font-medium transition"
              >
                View All Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-[#2979FF] uppercase tracking-wider mb-4">
                Client Reviews
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                All 5-star reviews
              </h2>
              <p className="text-lg text-gray-500">
                Loyalty is earned day-by-day - here's what clients say
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-black">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

              <div className="marquee flex w-max gap-4 py-8 px-4">
                {[...testimonials, ...testimonials].map((quote, idx) => (
                  <div
                    key={idx}
                    className="w-[340px] shrink-0 rounded-xl bg-white/5 border border-white/10 p-6"
                  >
                    <div className="flex items-center gap-1 text-[#2979FF] mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#2979FF]" />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed text-gray-300">"{quote}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTA
          title="Ready to secure your property?"
          description="Get in touch with our team for a free consultation and quote. We'll help you find the perfect security and automation solution."
          primaryText="Get Started"
          primaryHref="/contact"
          secondaryText="View Projects"
          secondaryHref="/projects"
        />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
