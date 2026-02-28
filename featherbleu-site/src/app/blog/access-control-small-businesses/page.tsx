import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, KeyRound, Shield, Building2, Users, Camera, Smartphone } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BlogSidebar } from "@/components/BlogSidebar";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Access Control for Garden Route Businesses | Featherbleu Industries",
  description:
    "How modern access control systems can protect your business and streamline operations — from small enterprises to hospitality venues across the Garden Route.",
  keywords:
    "access control Garden Route, business security, keypads, RFID cards, biometrics, smart locks, visitor management, CCTV integration",
};

const relatedPosts = [
  { title: "CCTV Systems: What You Need to Know", slug: "cctv-systems-guide", date: "2026-01-20", category: "Security Tips" },
  { title: "The Future of Home Security", slug: "future-of-home-security", date: "2026-01-15", category: "Industry News" },
  { title: "5 Essential Security Tips for Your Home", slug: "essential-security-tips", date: "2026-02-01", category: "Security Tips" },
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
                    Business Security &amp; Access Control
                  </span>
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                    Access Control for Garden Route Businesses
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    How Modern Access Control Systems Can Protect Your Business and Streamline Operations — From Small Enterprises to Major Hospitality Venues
                  </p>
                  <div className="flex flex-wrap items-center gap-4 gap-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      January 2, 2026
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Featherbleu Team
                    </div>
                  </div>
                </div>

                <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-200 mb-8 shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80"
                    alt="Access control systems for Garden Route businesses"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="prose max-w-none">
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Every business in the Garden Route has a front door. Whether it's a café on Knysna's waterfront, a medical practice in George, a boutique hotel on the Plett beachfront, a logistics warehouse outside Mossel Bay, or a wine estate in the Langkloof foothills — that front door, and every other point of access to your premises, represents both a welcome and a vulnerability.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Access control is the discipline of managing that tension intelligently. Not just keeping the wrong people out, but ensuring the right people can get in — efficiently, securely, and with a level of accountability that protects your business, your staff, your guests, and your assets.
                  </p>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Shield className="h-6 w-6 text-[#2979FF]" />
                      Why Access Control Matters for Garden Route Businesses
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Modern access control helps manage the operational realities of the Garden Route: seasonal staffing changes, security pressures, compliance needs, and load shedding — while creating an auditable record of who entered where and when.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <KeyRound className="h-6 w-6 text-[#2979FF]" />
                      Access Control Technologies: Understanding Your Options
                    </h2>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">PIN keypads</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Affordable, simple, and effective — but codes can be shared. Best suited to lower-risk areas.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Proximity cards and key fobs</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      The commercial workhorse: easy credential management and strong logging, with optional multi-factor upgrades.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Biometrics</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Fingerprint or facial recognition authenticates the person, not the credential — ideal for higher accountability zones.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart locks and app-based access</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Flexible, trackable access management for hospitality, rentals, and multi-site businesses.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Intercom and video access systems</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Visitor verification plus door release, with remote answering via smartphone.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Building2 className="h-6 w-6 text-[#2979FF]" />
                      Where Access Control Delivers the Biggest Value
                    </h2>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-3">
                        <Camera className="h-5 w-5 text-[#2979FF] mt-0.5" />
                        <span>Integration with CCTV for verified access events.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-[#2979FF] mt-0.5" />
                        <span>Better staff accountability through detailed access logs.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Smartphone className="h-5 w-5 text-[#2979FF] mt-0.5" />
                        <span>Remote management for owners who travel or manage multiple properties.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#2979FF]/5 border border-[#2979FF]/20 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Final Thoughts</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Access control is now practical and essential for businesses across the Garden Route. If you want help choosing the right system, Featherbleu can assist with design, supply, and support tailored to your premises.
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
                      Talk to our team
                    </Link>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <BlogSidebar currentSlug="access-control-small-businesses" relatedPosts={relatedPosts} />
                </div>
              </div>
            </div>
          </div>
        </article>

        <CTA
          title="Need access control advice for your business?"
          description="Contact Featherbleu for expert guidance on access control solutions across the Garden Route."
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
