import { Metadata } from "next";
import Image from "next/image";
import { Camera, DoorClosed, KeyRound, Shield, Wrench, Zap } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Our Services | Featherbleu Industries",
  description: "Professional smart home automation, garage doors, gate automation, CCTV systems, access control, and repair services. Available for emergencies.",
};

const services = [
  {
    icon: Zap,
    title: "Smart Home Automation",
    description: "Control lighting, access, and smart devices with solutions designed around your space. We integrate cutting-edge technology to make your home more efficient and convenient.",
    features: ["Lighting Control", "Smart Locks", "Climate Control", "Voice Integration", "Remote Access"],
  },
  {
    icon: DoorClosed,
    title: "Garage Doors",
    description: "Installations, upgrades, and servicing for smooth, reliable operation. We work with top brands to ensure quality and longevity.",
    features: ["New Installations", "Motor Upgrades", "Spring Replacement", "Track Alignment", "Remote Programming"],
  },
  {
    icon: KeyRound,
    title: "Gate Automation",
    description: "New motors, repairs, and replacements to keep your access secure and convenient. From sliding gates to swing gates, we handle it all.",
    features: ["Motor Installation", "Gate Repairs", "Remote Systems", "Intercom Integration", "Solar Options"],
  },
  {
    icon: Camera,
    title: "CCTV Systems",
    description: "Cameras, monitoring and recording setups to protect what matters most. High-definition surveillance with remote viewing capabilities.",
    features: ["HD Cameras", "Night Vision", "Remote Monitoring", "Cloud Storage", "Motion Detection"],
  },
  {
    icon: Shield,
    title: "Access Control",
    description: "Keypads, remotes, and secure entry solutions for homes and businesses. Control who enters your property with advanced access systems.",
    features: ["Biometric Systems", "Keypad Entry", "Card Access", "Remote Management", "Visitor Logs"],
  },
  {
    icon: Wrench,
    title: "Servicing & Repairs",
    description: "Fast diagnostics and neat workmanship — we show up and stand behind our work. Regular maintenance keeps your systems running smoothly.",
    features: ["Emergency Repairs", "Preventive Maintenance", "System Diagnostics", "Parts Replacement", "Available for Emergencies"],
  },
];

export default function ServicesPage() {
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
                Our Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
                Complete security & automation solutions
              </h1>
              <p className="text-lg text-black/70 max-w-2xl">
                From installation to repairs, we provide end-to-end services for all your security and automation needs. Professional, reliable, and available for emergencies.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-black border border-black rounded-2xl p-8 hover:bg-[#2979FF] hover:border-[#2979FF] transition-all duration-300 shadow-sm"
                >
                  <div className="h-16 w-16 rounded-xl bg-[#2979FF] flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-white/80 mb-6 leading-relaxed transition-colors duration-300">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-white/80 transition-colors duration-300">
                        <div className="h-1.5 w-1.5 rounded-full bg-white group-hover:bg-white" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why choose Featherbleu Industries?
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                We're not just another security company. We're your partners in creating safer, smarter spaces.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Professional Expertise",
                  desc: "Years of experience in security and automation systems across residential and commercial properties.",
                },
                {
                  title: "Quality Guaranteed",
                  desc: "We use only top-tier equipment and stand behind every installation with comprehensive warranties.",
                },
                {
                  title: "Available for Emergencies",
                  desc: "When something goes wrong, we're here to help. Available for emergency callouts when you need us most.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTA
          title="Ready to upgrade your security?"
          description="Contact us today for a free consultation. We'll assess your needs and provide a customized solution that fits your budget."
          primaryText="Get a Free Quote"
          primaryHref="/contact"
          secondaryText="View Our Work"
          secondaryHref="/projects"
        />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
