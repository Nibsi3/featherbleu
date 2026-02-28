import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Wrench, Shield, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BlogSidebar } from "@/components/BlogSidebar";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Garage Door Maintenance: A Complete Guide | Featherbleu Industries",
  description:
    "Keep your garage door operating smoothly with our expert maintenance tips and schedule. Learn what to check monthly, quarterly, and annually.",
  keywords:
    "garage door maintenance, garage door safety, garage door lubrication, garage door springs, garage door rollers, garage door opener",
};

const relatedPosts = [
  { title: "5 Essential Security Tips for Your Home", slug: "essential-security-tips", date: "2026-02-01", category: "Security Tips" },
  { title: "CCTV Systems: What You Need to Know", slug: "cctv-systems-guide", date: "2026-01-20", category: "Security Tips" },
  { title: "Gate Automation: Benefits and Options", slug: "gate-automation-benefits", date: "2026-01-10", category: "Installation Guides" },
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
                    Home Maintenance &amp; Security
                  </span>
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                    Garage Door Maintenance: A Complete Guide
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Keep your garage door operating smoothly with our expert maintenance tips and schedule.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 gap-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      January 25, 2026
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Featherbleu Team
                    </div>
                  </div>
                </div>

                <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-200 mb-8 shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                    alt="Garage door maintenance and safety guide"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="prose max-w-none">
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Your garage door is one of the hardest-working components of your home. It opens and closes thousands of times a year, endures the elements, and plays a critical role in your home's security — yet it's one of the most overlooked when it comes to regular maintenance.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    The good news? Keeping your garage door in peak condition doesn't require specialist skills or expensive callouts. With a basic toolkit, a little time, and a consistent maintenance routine, you can extend the life of your door significantly, prevent costly repairs, and keep your home secure.
                  </p>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Shield className="h-6 w-6 text-[#2979FF]" />
                      Why Garage Door Maintenance Matters
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Neglecting your garage door can lead to a cascade of problems that start small and quickly become expensive. A worn spring, a dry roller, or a misaligned track might seem minor, but left unattended these issues can cause the door to fail completely — sometimes without warning.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Beyond the inconvenience, a malfunctioning garage door poses real safety risks. Regular maintenance keeps those risks in check and gives you peace of mind that your door will work reliably every time.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Wrench className="h-6 w-6 text-[#2979FF]" />
                      Your Complete Garage Door Maintenance Checklist
                    </h2>

                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Monthly checks (10–15 minutes)</h3>
                    <ul className="space-y-2 text-gray-600 leading-relaxed mb-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#2979FF] mt-0.5" />
                        <span>Visual inspection of springs, cables, rollers, tracks, and hinges.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#2979FF] mt-0.5" />
                        <span>Listen as the door operates for grinding, squeaking, rattling, or banging.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#2979FF] mt-0.5" />
                        <span>Test the balance by disconnecting the opener and checking whether the door holds at waist height.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#2979FF] mt-0.5" />
                        <span>Test the auto-reverse safety feature with a piece of wood placed under the door.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#2979FF] mt-0.5" />
                        <span>Check photo-eye sensors for alignment and cleanliness.</span>
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Every three months</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Lubrication is one of the simplest and most effective maintenance tasks you can perform. Use a silicone-based or lithium-based spray lubricant.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Lubricate rollers (bearings, not the track), hinges, springs (light coat), and the opener's chain or screw drive where applicable. Clean tracks with a damp cloth and dry thoroughly. Inspect weatherstripping and tighten any loose hardware.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Every six months</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Inspect springs for signs of wear or rust. Check and clean the opener, inspect door panels for damage, and test/reprogram remote controls.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Annually</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Perform a full system inspection, check cable condition, assess roller wear, and consider professional servicing every one to two years.
                    </p>
                  </div>

                  <div className="bg-[#2979FF]/5 border border-[#2979FF]/20 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <AlertTriangle className="h-6 w-6 text-[#2979FF]" />
                      When to Call a Professional
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      While much of garage door maintenance is well within the reach of a capable homeowner, some tasks should always be left to the experts.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Contact a professional when you notice broken or visibly worn springs, frayed or snapped cables, a door that has come off its tracks, unusual grinding that persists after lubrication, or a door that fails the balance test.
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
                      Get maintenance advice
                    </Link>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <BlogSidebar currentSlug="garage-door-maintenance" relatedPosts={relatedPosts} />
                </div>
              </div>
            </div>
          </div>
        </article>

        <CTA
          title="Need help with garage door automation or repairs?"
          description="Contact us for advice, parts, and professional installation options."
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
