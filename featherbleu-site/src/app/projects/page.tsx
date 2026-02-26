import { Metadata } from "next";
import Image from "next/image";
import { Shield } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CTA } from "@/components/CTA";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { ScrollToTop } from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Our Projects | Featherbleu Industries",
  description: "View our portfolio of completed security and automation installations. Quality work across residential and commercial properties.",
};

const BASE = "/images/projects2/pics";

const galleryItems = [
  {
    kind: "beforeafter" as const,
    id: "ba-1",
    before: `${BASE}/before-1.jpg`,
    after: `${BASE}/after-1.jpg`,
    label: "Triple Garage Door Replacement",
  },
  {
    kind: "beforeafter" as const,
    id: "ba-2",
    before: `${BASE}/before-2.jpeg`,
    after: `${BASE}/after-2.jpeg`,
    label: "Garage Door Installation - Blue House",
  },
  {
    kind: "video" as const,
    id: "vid-1",
    src: `${BASE}/WhatsApp-Video-2025-11-16-at-13.40.59.mp4`,
    label: "Gate Motor Installation in Action",
  },
  {
    kind: "photo" as const,
    id: "p-1",
    src: `${BASE}/20240712_115003.jpg`,
    label: "Automated Sliding Gate Installation",
  },
  {
    kind: "photo" as const,
    id: "p-2",
    src: `${BASE}/20241011_133405.jpg`,
    label: "Double Garage Door - Charcoal Sectional",
  },
  {
    kind: "photo" as const,
    id: "p-3",
    src: `${BASE}/20241021_102127.jpg`,
    label: "Triple Garage Door - Panel Installation",
  },
  {
    kind: "photo" as const,
    id: "p-4",
    src: `${BASE}/20241029_142515.jpg`,
    label: "Single Garage Door - Sectional",
  },
  {
    kind: "photo" as const,
    id: "p-5",
    src: `${BASE}/20241105_151303.jpg`,
    label: "Double Garage Door - White Panelled",
  },
  {
    kind: "photo" as const,
    id: "p-6",
    src: `${BASE}/0c503ae6-64d3-4064-b6e7-e97a97985c7c.jpeg`,
    label: "Garage Door - Modern Home",
  },
  {
    kind: "photo" as const,
    id: "p-7",
    src: `${BASE}/111.jpeg`,
    label: "Double Garage Door - Sea View Property",
  },
  {
    kind: "photo" as const,
    id: "p-8",
    src: `${BASE}/1368f661-0d92-4821-913c-27b123e268f5.jpeg`,
    label: "Centurion Gate Motor Install",
  },
  {
    kind: "photo" as const,
    id: "p-9",
    src: `${BASE}/8d74e29c-c362-4edf-ab5d-a600afe2ca8f.jpeg`,
    label: "Garage Door - Stone Facade Home",
  },
  {
    kind: "photo" as const,
    id: "p-10",
    src: `${BASE}/9317a341-bdbe-4c01-8cfa-39085c386c87.jpeg`,
    label: "Garage Door - Stone Facade (Side View)",
  },
  {
    kind: "photo" as const,
    id: "p-11",
    src: `${BASE}/a2becb00-64bb-49b7-8bfd-84ae150eb967.jpeg`,
    label: "Centurion D3 Smart Gate Motor",
  },
  {
    kind: "photo" as const,
    id: "p-12",
    src: `${BASE}/d69a90ad-1c40-4ea7-a431-e14e9b56784a.jpeg`,
    label: "CCTV Camera Installation",
  },
  {
    kind: "photo" as const,
    id: "p-13",
    src: `${BASE}/Garage-Doors.jpeg`,
    label: "Double Garage Door - Coastal Property",
  },
  {
    kind: "photo" as const,
    id: "p-14",
    src: `${BASE}/WhatsApp-Image-2025-10-28-at-19.07.30.jpeg`,
    label: "Smart Garage Door Motor",
  },
  {
    kind: "photo" as const,
    id: "p-15",
    src: `${BASE}/WhatsApp-Image-2025-10-28-at-19.07.38-(1).jpeg`,
    label: "Centurion Gate Motor - Sliding Gate",
  },
  {
    kind: "photo" as const,
    id: "p-16",
    src: `${BASE}/WhatsApp-Image-2025-10-28-at-19.07.38.jpeg`,
    label: "Centurion D3 Smart - Sliding Gate",
  },
  {
    kind: "photo" as const,
    id: "p-17",
    src: `${BASE}/WhatsApp-Image-2025-10-28-at-19.37.31.jpeg`,
    label: "Joe - Hands-On Installer",
  },
  {
    kind: "photo" as const,
    id: "p-18",
    src: `${BASE}/WhatsApp-Image-2025-11-04-at-10.40.13.jpeg`,
    label: "Smart Garage Motor Installed",
  },
  {
    kind: "photo" as const,
    id: "p-19",
    src: `${BASE}/WhatsApp-Image-2025-11-04-at-10.40.20.jpeg`,
    label: "Double Garage Door - Blue Panelled",
  },
  {
    kind: "photo" as const,
    id: "p-20",
    src: `${BASE}/WhatsApp-Image-2025-11-09-at-18.48.45.jpeg`,
    label: "Centurion Gate Motor - Farm Gate",
  },
  {
    kind: "photo" as const,
    id: "p-21",
    src: `${BASE}/WhatsApp-Image-2025-11-16-at-13.40.58.jpeg`,
    label: "CCTV Monitor & Camera Setup",
  },
  {
    kind: "photo" as const,
    id: "p-22",
    src: `${BASE}/WhatsApp-Image-2025-11-16-at-13.40.59-(1).jpeg`,
    label: "CCTV Camera - Warehouse Install",
  },
  {
    kind: "photo" as const,
    id: "p-23",
    src: `${BASE}/WhatsApp-Image-2025-11-16-at-13.40.59.jpeg`,
    label: "CCTV & Motion Sensor Install",
  },
  {
    kind: "photo" as const,
    id: "p-24",
    src: `${BASE}/WhatsApp-Image-2025-11-16-at-13.41.01-(1).jpeg`,
    label: "Centurion D3 Smart - Gate Motor",
  },
  {
    kind: "photo" as const,
    id: "p-25",
    src: `${BASE}/WhatsApp-Image-2025-11-16-at-13.41.01.jpeg`,
    label: "Automated Sliding Gate",
  },
  {
    kind: "photo" as const,
    id: "p-26",
    src: `${BASE}/WhatsApp-Image-2025-11-25-at-21.14.52.jpeg`,
    label: "Happy Clients - Captain's Sportsbar",
  },
  {
    kind: "photo" as const,
    id: "p-27",
    src: `${BASE}/WhatsApp-Image-2025-12-02-at-17.42.46.jpeg`,
    label: "Gate Motor Installation - Brenton",
  },
  {
    kind: "photo" as const,
    id: "p-28",
    src: `${BASE}/WhatsApp-Image-2025-12-02-at-17.42.48.jpeg`,
    label: "Centurion Motor - Timber Sliding Gate",
  },
  {
    kind: "photo" as const,
    id: "p-29",
    src: `${BASE}/WhatsApp-Image-2025-12-02-at-17.42.49.jpeg`,
    label: "Gate Motor Closeup - Timber Gate",
  },
  {
    kind: "photo" as const,
    id: "p-30",
    src: `${BASE}/WhatsApp-Image-2026-01-29-at-20.45.06.jpeg`,
    label: "Centurion Motor - Timber Privacy Gate",
  },
  {
    kind: "photo" as const,
    id: "p-31",
    src: `${BASE}/WhatsApp-Image-2026-01-29-at-20.45.07.jpeg`,
    label: "Hikvision Video Intercom",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <ScrollToTop />
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
                Our Work
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
                Projects worth talking about
              </h1>
              <p className="text-lg text-black/70 max-w-2xl">
                A showcase of our installations, upgrades, and repairs across gates, garage doors, CCTV, and automation systems. Every project reflects our commitment to quality.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-black">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "1000+", label: "Projects Completed" },
                { number: "20+", label: "Years Experience" },
                { number: "5★", label: "Average Rating" },
                { number: "Garden", label: "Route Coverage" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Work Gallery</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Drag the slider on before &amp; after photos to see the transformation. Click any photo to view full screen.
              </p>
            </div>
            <ProjectsGallery items={galleryItems} />
          </div>
        </section>

        {/* CTA */}
        <CTA
          title="Ready to start your project?"
          description="Let's discuss your security and automation needs. We'll create a custom solution that exceeds your expectations."
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
