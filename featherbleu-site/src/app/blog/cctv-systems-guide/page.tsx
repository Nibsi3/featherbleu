import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Camera, Shield, Wifi, HardDrive } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BlogSidebar } from "@/components/BlogSidebar";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "CCTV Systems: What You Need to Know | Featherbleu Industries",
  description:
    "Everything you need to know about choosing and installing the right CCTV system for your property. Analog vs IP, features, planning, and load shedding resilience.",
  keywords:
    "CCTV systems, IP cameras, analog CCTV, NVR DVR, CCTV installation South Africa, home security cameras",
};

const relatedPosts = [
  { title: "5 Essential Security Tips for Your Home", slug: "essential-security-tips", date: "2026-02-01", category: "Security Tips" },
  { title: "The Future of Home Security", slug: "future-of-home-security", date: "2026-01-15", category: "Industry News" },
  { title: "Securing Your Garden Route Property", slug: "securing-garden-route-property", date: "2026-01-08", category: "Security Tips" },
  { title: "Understanding Smart Home Automation", slug: "smart-home-automation-guide", date: "2026-01-28", category: "Installation Guides" },
];

export default function BlogPost() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24">
        <article className="py-12">
          <div className="mx-auto max-w-7xl px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#2979FF] transition mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <span className="inline-block text-xs font-medium text-[#2979FF] px-3 py-1 rounded-full bg-[#2979FF]/10 mb-4">
                    Home Security &amp; Surveillance
                  </span>
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                    CCTV Systems: What You Need to Know
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Everything you need to know about choosing and installing the right CCTV system for your property.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 gap-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      January 20, 2026
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Featherbleu Team
                    </div>
                  </div>
                </div>

                <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-200 mb-8 shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80"
                    alt="CCTV camera system guide for homes and businesses"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="prose max-w-none">
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Security has never been more top of mind for South African homeowners and businesses. Whether you're protecting your family, your property, or your livelihood, a well-designed CCTV system is one of the most effective tools available — providing real-time awareness, a powerful visual deterrent, and critical evidence when you need it most.
                  </p>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Shield className="h-6 w-6 text-[#2979FF]" />
                      Why CCTV Is Worth the Investment
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      A visible camera is often enough to make a would-be intruder think twice. Modern systems also offer remote monitoring, recorded evidence, and peace of mind — all from a smartphone app.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      High-quality video evidence can be invaluable for insurance claims and investigations, and the ability to check in at any time offers reassurance that's hard to put a price on.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Camera className="h-6 w-6 text-[#2979FF]" />
                      Understanding the Types of CCTV Systems
                    </h2>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Analog CCTV (Traditional)</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Cameras connect to a DVR via coaxial cable. Analog systems are reliable and cost-effective, and HD-over-coax options have significantly improved resolution in recent years.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">IP CCTV (Network-Based)</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      IP cameras connect via network cable (Cat5e/Cat6) or Wi-Fi and record to an NVR or cloud storage. They typically offer higher resolution and smarter features like motion zones and object recognition.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Wireless CCTV</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Wireless cameras transmit footage over Wi-Fi, making them useful for rentals and retrofits. The trade-off is reliability — Wi-Fi can be affected by signal quality and power outages.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud-Based CCTV</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Cloud storage protects footage even if your local recorder is stolen or damaged, but typically comes with a subscription fee and requires considering retention and privacy policies.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Wifi className="h-6 w-6 text-[#2979FF]" />
                      Key Features to Look For
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      The specifications that matter most include resolution, field of view, night vision, weatherproofing, and motion detection quality.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      For most homes, 1080p is the minimum worth considering, while 4MP or 8MP cameras are better for identifying faces or reading number plates.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      In South Africa, load shedding resilience is critical — ensure your recorder, router, and key cameras are connected to a UPS or battery backup.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <HardDrive className="h-6 w-6 text-[#2979FF]" />
                      Planning Your CCTV Installation
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Identify priority areas like entrances, driveways, gates, side passages, and garages. Map coverage to ensure overlapping views, and consider lighting conditions and cable routing before drilling.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      For wired IP systems, PoE simplifies installation by carrying power and data over a single cable. For critical security applications, wired is generally more dependable than Wi-Fi.
                    </p>
                  </div>

                  <div className="bg-[#2979FF]/5 border border-[#2979FF]/20 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Final Thoughts</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      A CCTV system is one of the most tangible investments you can make in the safety and security of your property. The key is to plan carefully, choose equipment that matches your needs, and ensure your system is installed and maintained properly.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      At Featherbleu, we carry a comprehensive range of CCTV cameras, NVR and DVR systems, accessories, and smart home security solutions — and our team can help you design the right system for your property.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-gray-200">
                    <Link
                      href="/blog"
                      className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#2979FF] transition"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back to Blog
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2979FF] text-white text-sm font-medium hover:bg-[#1e5dd8] transition"
                    >
                      Get CCTV advice
                    </Link>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <BlogSidebar currentSlug="cctv-systems-guide" relatedPosts={relatedPosts} />
                </div>
              </div>
            </div>
          </div>
        </article>

        <CTA
          title="Ready to install or upgrade your CCTV?"
          description="Contact us for a CCTV assessment and the right system for your property."
          primaryText="Contact Us"
          primaryHref="/contact"
          secondaryText="View Services"
          secondaryHref="/services"
        />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
