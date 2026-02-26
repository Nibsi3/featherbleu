import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Settings } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CTA } from "@/components/CTA";

const R2_CDN = "https://pub-fae086c900b645d8a58b68eb2162dbca.r2.dev";

export const metadata: Metadata = {
  title: "Maintenance Advice George | Security System Maintenance Garden Route | Featherbleu",
  description: "Expert maintenance advice for security and automation systems in George, Knysna, Oudtshoorn, Wilderness & Sedgefield. Keep your garage doors, gates, and CCTV running smoothly.",
  keywords: "maintenance advice George, garage door maintenance Garden Route, gate motor service Knysna, CCTV maintenance Oudtshoorn, security system upkeep Wilderness, automation maintenance Sedgefield",
  openGraph: {
    title: "Maintenance Advice | Garden Route | Featherbleu Industries",
    description: "Expert maintenance tips for security and automation systems across the Garden Route.",
  },
};

const articles = [
  {
    title: "Garage Door Maintenance: A Complete Guide",
    excerpt: "Keep your garage door operating smoothly with our expert maintenance tips and schedule.",
    date: "2026-01-25",
    slug: "garage-door-maintenance",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    alt: "Garage door maintenance tips Garden Route George",
  },
  {
    title: "Gate Motor Maintenance Tips",
    excerpt: "Essential maintenance practices to extend the life of your gate motor and ensure reliable operation.",
    date: "2026-01-18",
    slug: "gate-motor-maintenance",
    thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
    alt: "Gate motor maintenance advice Garden Route",
  },
  {
    title: "Keeping Your CCTV System in Top Shape",
    excerpt: "Regular maintenance tasks to ensure your security cameras provide clear, reliable footage.",
    date: "2026-01-08",
    slug: "cctv-maintenance-tips",
    thumbnail: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80",
    alt: "CCTV camera maintenance tips Garden Route",
  },
];

export default function MaintenanceAdvicePage() {
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
                <Settings className="h-4 w-4 text-[#2979FF]" />
                Maintenance Advice
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-black">
                Maintenance Advice for the Garden Route
              </h1>
              <p className="text-lg text-black/70 max-w-2xl">
                Keep your security and automation systems running smoothly with expert maintenance tips for George, Knysna, Oudtshoorn, Wilderness, and Sedgefield properties.
              </p>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, index) => (
                <article
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#2979FF]/50 hover:shadow-lg transition-all duration-300 shadow-sm"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.thumbnail}
                      alt={article.alt || article.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <Calendar className="h-3 w-3" />
                      {new Date(article.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#2979FF] transition">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-2 text-sm text-[#2979FF] hover:text-[#1e5dd8] font-medium transition"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Maintenance Services Across the Garden Route
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
              We provide maintenance and repair services throughout:
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
          title="Need maintenance or repairs?"
          description="Contact us for professional maintenance and repair services across the Garden Route."
          primaryText="Book a Service"
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
