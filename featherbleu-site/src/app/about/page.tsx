import { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Handshake, PenTool, TrendingUp, Award, Shield } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "About Us | Featherbleu Industries",
  description: "Learn about Featherbleu Industries - your trusted partner in security and automation solutions. Professional, reliable, and committed to excellence.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
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
                <Shield className="h-4 w-4 text-[#2979FF]" />
                About Us
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
                Live Smarter. Be Safer.
              </h1>
              <p className="text-lg text-black/70 max-w-2xl">
                We're Featherbleu Industries, your trusted partner in creating safer, smarter spaces through professional security and automation solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-500 leading-relaxed">
                  <p>
                    In a world of uncertainty, peace of mind matters more than ever. Featherbleu Industries was founded on the belief that everyone deserves to feel safe and secure in their own space.
                  </p>
                  <p>
                    While we can't control the world around us, we can take control of how we protect what matters most. From access control and CCTV systems to gate, garage, and home automation solutions, we help you create safer, smarter spaces.
                  </p>
                  <p>
                    Everything we do is guided by our core values: we do work worth signing, we earn trust through honesty, we grow through collaboration with our clients, and we pursue excellence in every execution. These aren't just words - they define how we show up on every job.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                  <Image
                    src="/about/our-story.jpeg"
                    alt="Featherbleu Industries professional security automation team Garden Route George"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                What We Stand For
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Our values guide everything we do, from initial consultation to ongoing support.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: PenTool,
                  title: "We Do Work Worth Signing",
                  desc: "Every project carries our name. We take pride in delivering work we'd happily put our signature on.",
                },
                {
                  icon: Handshake,
                  title: "Trust Is Earned",
                  desc: "Through honest communication, transparent pricing, and always keeping our word.",
                },
                {
                  icon: TrendingUp,
                  title: "Growth Through Collaboration",
                  desc: "We grow by working closely with our clients, learning, and building lasting partnerships.",
                },
                {
                  icon: Award,
                  title: "Excellence in Execution",
                  desc: "Attention to detail, neat installations, and a relentless pursuit of quality in everything we do.",
                },
              ].map((value, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm"
                >
                  <div className="h-16 w-16 rounded-xl bg-[#2979FF]/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-[#2979FF]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-500 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Meet The Team
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                The professionals behind Featherbleu Industries, dedicated to your security and peace of mind.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
                <div className="relative h-24 w-24 rounded-full overflow-hidden border border-gray-200 mx-auto mb-6">
                  <Image
                    src="/joeandwerner/werner.jpeg"
                    alt="Werner"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Werner</h3>
                <p className="text-[#2979FF] mb-4">Co-Owner / Hands-On Installer</p>
                <a
                  href="tel:+27829217299"
                  className="text-sm text-gray-500 hover:text-[#2979FF] transition"
                >
                  082 921 7299
                </a>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
                <div className="relative h-24 w-24 rounded-full overflow-hidden border border-gray-200 mx-auto mb-6">
                  <Image
                    src="/joeandwerner/joe.jpeg"
                    alt="Joe"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Joe</h3>
                <p className="text-[#2979FF] mb-4">Co-Owner / Hands-On Installer</p>
                <a
                  href="tel:+27645120021"
                  className="text-sm text-gray-500 hover:text-[#2979FF] transition"
                >
                  064 512 0021
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTA
          title="Ready to work with us?"
          description="Experience the Featherbleu difference. Professional service, quality work, and peace of mind guaranteed."
          primaryText="Get In Touch"
          primaryHref="/contact"
          secondaryText="View Our Services"
          secondaryHref="/services"
        />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
