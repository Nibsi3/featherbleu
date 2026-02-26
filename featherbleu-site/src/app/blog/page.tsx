import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Shield } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Blog | Featherbleu Industries",
  description: "Security tips, installation guides, maintenance advice, and industry news from Featherbleu Industries.",
};

const R2_CDN = "https://pub-fae086c900b645d8a58b68eb2162dbca.r2.dev";

const blogPosts = [
  {
    title: "5 Essential Security Tips for Your Home",
    excerpt: "Protect your property with these fundamental security practices that every homeowner should implement.",
    category: "Security Tips",
    date: "2026-02-01",
    slug: "essential-security-tips",
    thumbnail: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80",
    alt: "Home security tips for Garden Route properties George Knysna",
  },
  {
    title: "Understanding Smart Home Automation",
    excerpt: "A comprehensive guide to smart home technology and how it can make your life easier and safer.",
    category: "Installation Guides",
    date: "2026-01-28",
    slug: "smart-home-automation-guide",
    thumbnail: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=600&q=80",
    alt: "Smart home automation guide for Garden Route homes",
  },
  {
    title: "Garage Door Maintenance: A Complete Guide",
    excerpt: "Keep your garage door operating smoothly with our expert maintenance tips and schedule.",
    category: "Maintenance Advice",
    date: "2026-01-25",
    slug: "garage-door-maintenance",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    alt: "Garage door maintenance tips Garden Route George",
  },
  {
    title: "CCTV Systems: What You Need to Know",
    excerpt: "Everything you need to know about choosing and installing the right CCTV system for your property.",
    category: "Security Tips",
    date: "2026-01-20",
    slug: "cctv-systems-guide",
    thumbnail: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80",
    alt: "CCTV security camera systems guide Garden Route",
  },
  {
    title: "The Future of Home Security",
    excerpt: "Explore emerging trends in home security technology and what they mean for property owners.",
    category: "Industry News",
    date: "2026-01-15",
    slug: "future-of-home-security",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
    alt: "Future home security technology trends Garden Route",
  },
  {
    title: "Gate Automation: Benefits and Options",
    excerpt: "Discover the advantages of automated gates and the different systems available for your property.",
    category: "Installation Guides",
    date: "2026-01-10",
    slug: "gate-automation-benefits",
    thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
    alt: "Gate automation benefits and options Garden Route",
  },
  {
    title: "Securing Your Garden Route Property",
    excerpt: "Local security considerations for homes in George, Knysna, and surrounding areas of the Garden Route.",
    category: "Security Tips",
    date: "2026-01-08",
    slug: "securing-garden-route-property",
    thumbnail: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80",
    alt: "Security tips for Garden Route George Knysna properties",
  },
  {
    title: "Smart Home Technology in 2026",
    excerpt: "The latest advancements in smart home automation and what's coming to the Garden Route.",
    category: "Industry News",
    date: "2026-01-05",
    slug: "smart-home-technology-2026",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    alt: "Smart home technology trends 2026 Garden Route",
  },
  {
    title: "Access Control for Small Businesses",
    excerpt: "How modern access control systems can protect your Garden Route business and streamline operations.",
    category: "Installation Guides",
    date: "2026-01-02",
    slug: "access-control-small-businesses",
    thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80",
    alt: "Access control systems for Garden Route businesses",
  },
];

const categories = [
  { name: "All", href: "/blog" },
  { name: "Security Tips", href: "/resources/security-tips" },
  { name: "Installation Guides", href: "/resources/installation-guides" },
  { name: "Maintenance Advice", href: "/resources/maintenance-advice" },
  { name: "Industry News", href: "/resources/industry-news" },
];

export default function BlogPage() {
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
                Blog & Resources
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
                Security insights & expert advice
              </h1>
              <p className="text-lg text-black/70 max-w-2xl">
                Stay informed with our latest articles on security, automation, maintenance tips, and industry trends.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                    category.name === "All"
                      ? "bg-[#2979FF] text-white"
                      : "bg-white text-gray-500 border border-gray-200 hover:border-[#2979FF]/50 hover:text-gray-900"
                  }`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#2979FF]/50 hover:shadow-lg transition-all duration-300 shadow-sm"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.thumbnail}
                      alt={post.alt || post.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-medium text-[#2979FF] px-3 py-1 rounded-full bg-[#2979FF]/10">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#2979FF] transition">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
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

        {/* CTA */}
        <CTA
          title="Need professional advice?"
          description="Our team is here to help with any security or automation questions you may have."
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
