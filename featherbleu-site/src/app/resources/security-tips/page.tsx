import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Shield } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CTA } from "@/components/CTA";

const R2_CDN = "https://pub-fae086c900b645d8a58b68eb2162dbca.r2.dev";

export const metadata: Metadata = {
  title: "Security Tips George | Home Security Advice Garden Route | Featherbleu",
  description: "Expert security tips for homes and businesses in George, Knysna, Oudtshoorn, Wilderness & Sedgefield. Protect your Garden Route property with professional advice from Featherbleu Industries.",
  keywords: "security tips George, home security advice Garden Route, property protection Knysna, security best practices Oudtshoorn, home safety tips Wilderness, security guide Sedgefield",
  openGraph: {
    title: "Security Tips | Garden Route | Featherbleu Industries",
    description: "Expert security advice for Garden Route homes and businesses. Protect your property with our professional tips.",
  },
};

const articles = [
  {
    title: "5 Essential Security Tips for Your Home",
    excerpt: "Protect your property with these fundamental security practices that every homeowner should implement.",
    date: "2026-02-01",
    slug: "essential-security-tips",
    thumbnail: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80",
    alt: "Home security tips for Garden Route properties George Knysna",
  },
  {
    title: "CCTV Systems: What You Need to Know",
    excerpt: "Everything you need to know about choosing and installing the right CCTV system for your property.",
    date: "2026-01-20",
    slug: "cctv-systems-guide",
    thumbnail: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80",
    alt: "CCTV security camera systems guide Garden Route",
  },
  {
    title: "Securing Your Garden Route Property",
    excerpt: "Local security considerations for homes in George, Knysna, and surrounding areas of the Garden Route.",
    date: "2026-01-08",
    slug: "securing-garden-route-property",
    thumbnail: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80",
    alt: "Security tips for Garden Route George Knysna properties",
  },
];

export default function SecurityTipsPage() {
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
                <Shield className="h-4 w-4 text-[#2979FF]" />
                Security Tips
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-black">
                Security Tips for the Garden Route
              </h1>
              <p className="text-lg text-black/70 max-w-2xl">
                Expert advice to help you protect your home or business in George, Knysna, Oudtshoorn, Wilderness, and Sedgefield.
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
              Protecting the Garden Route
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
              Our security expertise covers homes and businesses across:
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
          title="Need professional security advice?"
          description="Contact us for a free security assessment of your Garden Route property."
          primaryText="Get in Touch"
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
