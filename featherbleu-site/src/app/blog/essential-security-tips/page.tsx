import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Shield, Lock, Camera, Eye, Bell } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BlogSidebar } from "@/components/BlogSidebar";
import { CTA } from "@/components/CTA";

const R2_CDN = "https://pub-fae086c900b645d8a58b68eb2162dbca.r2.dev";

export const metadata: Metadata = {
  title: "5 Essential Security Tips for Your Home | Featherbleu Industries",
  description: "Protect your property with these fundamental security practices that every homeowner should implement. Expert advice from Featherbleu Industries.",
  keywords: "home security, security tips, property protection, home safety, security best practices",
};

const relatedPosts = [
  { title: "Understanding Smart Home Automation", slug: "smart-home-automation-guide", date: "2026-01-28", category: "Installation Guides" },
  { title: "CCTV Systems: What You Need to Know", slug: "cctv-systems-guide", date: "2026-01-20", category: "Security Tips" },
  { title: "Gate Automation: Benefits and Options", slug: "gate-automation-benefits", date: "2026-01-10", category: "Installation Guides" },
  { title: "The Future of Home Security", slug: "future-of-home-security", date: "2026-01-15", category: "Industry News" },
];

export default function BlogPost() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24">
        <article className="py-12">
          <div className="mx-auto max-w-7xl px-6">
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#2979FF] transition mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Header */}
                <div className="mb-8">
                  <span className="inline-block text-xs font-medium text-[#2979FF] px-3 py-1 rounded-full bg-[#2979FF]/10 mb-4">
                    Security Tips
                  </span>
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                    5 Essential Security Tips for Your Home
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 gap-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      February 1, 2026
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Featherbleu Team
                    </div>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-200 mb-8 shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80"
                    alt="Essential home security tips and installation guide for Garden Route properties George Knysna Oudtshoorn"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    In today's world, home security is more important than ever. Whether you're protecting your family, valuables, or simply seeking peace of mind, implementing proper security measures is essential. Here are five fundamental security practices that every homeowner should consider.
                  </p>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Shield className="h-6 w-6 text-[#2979FF]" />
                      1. Install a Comprehensive CCTV System
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      A well-placed CCTV system acts as both a deterrent and a recording device. Modern systems offer high-definition video, night vision, and remote viewing capabilities through your smartphone.
                    </p>
                    <ul className="space-y-2 text-gray-500">
                      <li className="flex items-start gap-2">
                        <span className="text-[#2979FF] mt-1">•</span>
                        <span>Position cameras at all entry points including doors, windows, and garage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#2979FF] mt-1">•</span>
                        <span>Ensure cameras have clear sight lines without obstructions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#2979FF] mt-1">•</span>
                        <span>Choose systems with cloud storage for secure footage backup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#2979FF] mt-1">•</span>
                        <span>Consider motion-activated recording to save storage space</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Lock className="h-6 w-6 text-[#2979FF]" />
                      2. Upgrade to Smart Access Control
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Traditional locks are no longer enough. Smart access control systems give you complete control over who enters your property and when.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Modern access control includes biometric scanners, keypad entry, card readers, and smartphone-controlled locks. These systems allow you to grant temporary access to visitors, track entry logs, and receive alerts when doors are opened.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      For maximum security, consider implementing multi-factor authentication that requires both a code and biometric verification.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Camera className="h-6 w-6 text-[#2979FF]" />
                      3. Automate Your Gates and Garage Doors
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Automated gates and garage doors aren't just convenient—they're a crucial security layer. Manual gates can be left open accidentally, creating vulnerabilities.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Modern automation systems include:
                    </p>
                    <ul className="space-y-2 text-gray-500 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="text-[#2979FF] mt-1">•</span>
                        <span>Remote control operation from your vehicle or smartphone</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#2979FF] mt-1">•</span>
                        <span>Auto-close timers to ensure gates don't stay open</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#2979FF] mt-1">•</span>
                        <span>Obstacle detection for safety</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#2979FF] mt-1">•</span>
                        <span>Integration with intercom systems for visitor verification</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Eye className="h-6 w-6 text-[#2979FF]" />
                      4. Maintain Proper Lighting
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Good lighting is one of the most effective and affordable security measures. Well-lit properties deter potential intruders who prefer to operate in darkness.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Install motion-activated lights around your property's perimeter, especially near entry points. Consider smart lighting that can be programmed to turn on and off at specific times, creating the appearance that someone is home even when you're away.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      LED lights are energy-efficient and provide bright, clear illumination that also improves CCTV footage quality at night.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Bell className="h-6 w-6 text-[#2979FF]" />
                      5. Implement a Monitored Alarm System
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      A comprehensive alarm system provides an additional layer of protection. Modern systems can detect intrusion, fire, carbon monoxide, and even water leaks.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Key features to look for:
                    </p>
                    <ul className="space-y-2 text-gray-500 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="text-[#2979FF] mt-1">•</span>
                        <span>24/7 professional monitoring services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#2979FF] mt-1">•</span>
                        <span>Smartphone alerts for instant notifications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#2979FF] mt-1">•</span>
                        <span>Battery backup for power outages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#2979FF] mt-1">•</span>
                        <span>Integration with other smart home devices</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#2979FF]/5 border border-[#2979FF]/20 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Conclusion
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Implementing these five security measures will significantly improve your home's protection. Remember, security is not a one-time investment but an ongoing commitment to maintaining and updating your systems.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      At Featherbleu Industries, we specialize in designing and installing comprehensive security solutions tailored to your specific needs. Our team can assess your property and recommend the best combination of systems to keep you and your family safe.
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
                      Get a Security Assessment
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <BlogSidebar currentSlug="essential-security-tips" relatedPosts={relatedPosts} />
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* CTA */}
        <CTA
          title="Ready to upgrade your security?"
          description="Contact us today for a free consultation and custom security solution for your property."
          primaryText="Get Started"
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
