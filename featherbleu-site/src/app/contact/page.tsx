import { Metadata } from "next";
import Image from "next/image";
import { Instagram, Mail, MessageCircle, Phone, MapPin, Clock, Shield } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Contact Us | Featherbleu Industries",
  description: "Get in touch with Featherbleu Industries for security and automation solutions. Call, email, or WhatsApp us for a free consultation.",
};

export default function ContactPage() {
  const whatsappWerner =
    "https://wa.me/27829217299?text=Hi%20Featherbleu%20Industries%2C%20I%27d%20like%20a%20quote%20for%20automation%2Fsecurity.";
  const whatsappJoe =
    "https://wa.me/27645120021?text=Hi%20Featherbleu%20Industries%2C%20I%27d%20like%20a%20quote%20for%20automation%2Fsecurity.";

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
                Get In Touch
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
                Let's discuss your security needs
              </h1>
              <p className="text-lg text-black/70 max-w-2xl">
                Ready to upgrade your security and automation? Contact us today for a free consultation and quote.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
              {/* Werner */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-[#2979FF]/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-[#2979FF]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Werner</div>
                    <a
                      href="tel:+27829217299"
                      className="text-sm text-gray-500 hover:text-[#2979FF] transition"
                    >
                      082 921 7299
                    </a>
                  </div>
                </div>
                <a
                  href={whatsappWerner}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#2979FF] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#1e5dd8] transition w-full"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>

              {/* Joe */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-[#2979FF]/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-[#2979FF]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Joe</div>
                    <a
                      href="tel:+27645120021"
                      className="text-sm text-gray-500 hover:text-[#2979FF] transition"
                    >
                      064 512 0021
                    </a>
                  </div>
                </div>
                <a
                  href={whatsappJoe}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#2979FF] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#1e5dd8] transition w-full"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>

              {/* Email */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-[#2979FF]/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-[#2979FF]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <a
                      href="mailto:info@featherbleu.co.za"
                      className="text-sm text-gray-500 hover:text-[#2979FF] transition break-all"
                    >
                      info@featherbleu.co.za
                    </a>
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-[#2979FF]/10 flex items-center justify-center">
                    <Instagram className="h-6 w-6 text-[#2979FF]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Instagram</div>
                    <a
                      href="https://www.instagram.com/featherbleu_ind"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-gray-500 hover:text-[#2979FF] transition"
                    >
                      @featherbleu_ind
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Info Card */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-16 shadow-sm">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <Image
                  src="https://pub-fae086c900b645d8a58b68eb2162dbca.r2.dev/feather/518310704_122193704732284491_4324853967079482507_n.jpg"
                  alt="Featherbleu Industries"
                  width={80}
                  height={80}
                  className="rounded-xl"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Featherbleu Industries
                  </h3>
                  <p className="text-[#2979FF] mb-4 font-medium">
                    Live Smarter. Be Safer.
                  </p>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    While we can't control the world around us, we can take control of how we protect what matters most. 
                    From access control and CCTV systems to gate, garage, and home automation solutions, we help you create 
                    safer, smarter spaces.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-[#2979FF] mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">Service Area</div>
                        <div className="text-sm text-gray-500">Mossel Bay to Plettenberg Bay</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-[#2979FF] mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">Availability</div>
                        <div className="text-sm text-gray-500">Available for Emergencies</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Contact Us */}
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Free Consultation",
                  desc: "Get expert advice on the best security solutions for your property at no cost.",
                },
                {
                  title: "Fast Response",
                  desc: "We respond quickly to all inquiries and can schedule assessments at your convenience.",
                },
                {
                  title: "Custom Solutions",
                  desc: "Every property is unique. We tailor our solutions to your specific needs and budget.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
