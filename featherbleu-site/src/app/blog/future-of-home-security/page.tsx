import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Shield, Cpu, Wifi, BatteryCharging, Eye, KeyRound, Flame, Cloud, Lock } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BlogSidebar } from "@/components/BlogSidebar";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "The Future of Home Security | Featherbleu Industries",
  description:
    "Exploring emerging trends in home security technology and what they mean for South African property owners.",
  keywords:
    "future of home security, AI security, wireless security, load shedding security, smart locks, Ajax Systems, South Africa home security",
};

const relatedPosts = [
  { title: "CCTV Systems: What You Need to Know", slug: "cctv-systems-guide", date: "2026-01-20", category: "Security Tips" },
  { title: "Smart Home Technology in 2026", slug: "smart-home-technology-2026", date: "2026-01-05", category: "Industry News" },
  { title: "Understanding Smart Home Automation", slug: "smart-home-automation-guide", date: "2026-01-28", category: "Home Technology" },
  { title: "Securing Your Garden Route Property", slug: "securing-garden-route-property", date: "2026-01-08", category: "Security Tips" },
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
                    Home Security &amp; Smart Technology
                  </span>
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                    The Future of Home Security
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Exploring Emerging Trends in Home Security Technology and What They Mean for South African Property Owners
                  </p>
                  <div className="flex flex-wrap items-center gap-4 gap-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      January 15, 2026
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Featherbleu Team
                    </div>
                  </div>
                </div>

                <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-200 mb-8 shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
                    alt="Future home security technology trends"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="prose max-w-none">
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    South Africa has always demanded a lot from its security technology. High crime rates, rolling power outages, extreme weather, and properties that range from compact urban apartments to sprawling rural estates mean that the average South African homeowner needs solutions that are robust, intelligent, and resilient — not systems designed for the relatively predictable security environments of Europe or North America.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    The good news is that the global security industry is evolving rapidly, and much of what is emerging at the cutting edge is exceptionally well-suited to local conditions. Artificial intelligence, wireless connectivity, cloud-based monitoring, and fully integrated smart ecosystems are no longer concepts reserved for luxury installations. They are increasingly accessible, increasingly affordable, and increasingly essential.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    This article explores the most important trends shaping the future of home security — and what they mean for property owners right here in South Africa.
                  </p>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Cpu className="h-6 w-6 text-[#2979FF]" />
                      1. AI-Powered Detection: The End of False Alarms
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      AI-powered systems can now distinguish between a human, a vehicle, an animal, and an inanimate object — dramatically reducing false alarms and making alerts more trustworthy.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Shield className="h-6 w-6 text-[#2979FF]" />
                      2. Integrated Ecosystems: One System, Total Control
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      The future belongs to integrated ecosystems where alarms, cameras, access control, automation, and environmental monitoring work together and are managed from a single platform.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Wifi className="h-6 w-6 text-[#2979FF]" />
                      3. Wireless-First Architecture: Security Without Compromise
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Modern wireless security uses encrypted, proprietary protocols with anti-jamming capability — enabling robust protection without invasive cabling.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <BatteryCharging className="h-6 w-6 text-[#2979FF]" />
                      4. Load Shedding Resilience: Security That Doesn't Switch Off
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Power resilience is now a core requirement — backup batteries, cellular failover, and low-power sensors keep systems running when the grid is down.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Eye className="h-6 w-6 text-[#2979FF]" />
                      5. Visual Alarm Verification: Seeing Before Acting
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Visual verification delivers photos or video to your phone when an alarm triggers — allowing faster, more confident decision-making and fewer unnecessary callouts.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <KeyRound className="h-6 w-6 text-[#2979FF]" />
                      6. Smart Access Control: Beyond Keys and Remotes
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Digital access control makes it possible to grant, revoke and audit access in real time, from anywhere — without handing out physical keys.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Flame className="h-6 w-6 text-[#2979FF]" />
                      7. Fire, Flood, and Environmental Monitoring: Total Property Protection
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Next-generation systems integrate fire detection, leak detection and air quality monitoring alongside intrusion protection.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Cloud className="h-6 w-6 text-[#2979FF]" />
                      8. Remote Monitoring and the Cloud: Your Home, Anywhere
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Cloud-connected platforms deliver real-time status, logs, notifications and live video to your smartphone wherever you are.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Lock className="h-6 w-6 text-[#2979FF]" />
                      9. Cybersecurity: Protecting Your Smart Home from Digital Threats
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      As systems become more connected, cybersecurity becomes non-negotiable: encryption, secure pairing, authentication, and regular firmware updates.
                    </p>
                  </div>

                  <div className="bg-[#2979FF]/5 border border-[#2979FF]/20 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Final Thoughts</h2>
                    <p className="text-gray-600 leading-relaxed">
                      The future of home security in South Africa is integrated, intelligent, resilient, and accessible. If you're ready to future-proof your home security, get in touch with the Featherbleu team for advice tailored to your property and budget.
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
                      Get expert advice
                    </Link>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <BlogSidebar currentSlug="future-of-home-security" relatedPosts={relatedPosts} />
                </div>
              </div>
            </div>
          </div>
        </article>

        <CTA
          title="Ready to future-proof your home security?"
          description="Contact Featherbleu for smart security solutions designed for South African realities."
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
