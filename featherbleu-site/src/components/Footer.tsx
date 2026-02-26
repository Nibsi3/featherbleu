import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, Phone, MapPin, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="https://pub-fae086c900b645d8a58b68eb2162dbca.r2.dev/feather/518310704_122193704732284491_4324853967079482507_n.jpg"
                alt="Featherbleu Industries"
                width={48}
                height={48}
                className="rounded-xl"
              />
              <div>
                <div className="font-bold text-white">Featherbleu</div>
                <div className="text-sm text-gray-400">Industries</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Professional security and automation solutions for homes and businesses. Live smarter. Be safer.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/featherbleu_ind"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#2979FF] hover:border-[#2979FF]/50 transition"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/p/Featherbleu-Industries-Southern-Cape-61558534739026/"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#2979FF] hover:border-[#2979FF]/50 transition"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://share.google/LO15CRN3MqBAgm7ka"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#2979FF] hover:border-[#2979FF]/50 transition"
              >
                <MapPin className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@featherbleu.co.za"
                className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#2979FF] hover:border-[#2979FF]/50 transition"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:+27829217299"
                className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#2979FF] hover:border-[#2979FF]/50 transition"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-400 hover:text-[#2979FF] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-400 hover:text-[#2979FF] transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-gray-400 hover:text-[#2979FF] transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-[#2979FF] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-[#2979FF] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/smart-home-automation" className="text-sm text-gray-400 hover:text-[#2979FF] transition">
                  Smart Home Automation
                </Link>
              </li>
              <li>
                <Link href="/services/garage-doors" className="text-sm text-gray-400 hover:text-[#2979FF] transition">
                  Garage Doors
                </Link>
              </li>
              <li>
                <Link href="/services/gate-automation" className="text-sm text-gray-400 hover:text-[#2979FF] transition">
                  Gate Automation
                </Link>
              </li>
              <li>
                <Link href="/services/cctv" className="text-sm text-gray-400 hover:text-[#2979FF] transition">
                  CCTV Systems
                </Link>
              </li>
              <li>
                <Link href="/services/access-control" className="text-sm text-gray-400 hover:text-[#2979FF] transition">
                  Access Control
                </Link>
              </li>
            </ul>
          </div>

          {/* Blog & Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-sm text-gray-400 hover:text-[#2979FF] transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/security-tips" className="text-sm text-gray-400 hover:text-[#2979FF] transition">
                  Security Tips
                </Link>
              </li>
              <li>
                <Link href="/resources/installation-guides" className="text-sm text-gray-400 hover:text-[#2979FF] transition">
                  Installation Guides
                </Link>
              </li>
              <li>
                <Link href="/resources/maintenance-advice" className="text-sm text-gray-400 hover:text-[#2979FF] transition">
                  Maintenance Advice
                </Link>
              </li>
              <li>
                <Link href="/resources/industry-news" className="text-sm text-gray-400 hover:text-[#2979FF] transition">
                  Industry News
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} Featherbleu Industries. All rights reserved.
          </p>
          <a
            href="https://www.pixaloom.co.za"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-500 hover:text-[#2979FF] transition"
          >
            Built by Pixaloom
          </a>
          <p className="text-sm text-gray-500">
            Live Smarter. Be Safer.
          </p>
        </div>
      </div>
    </footer>
  );
}
