"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const LOGO_URL = "/logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-6">
      {/* Desktop Pill Navigation */}
      <nav className="hidden lg:block mx-auto w-full max-w-[1200px]">
        <div className={`flex items-center mx-auto transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] bg-white border border-gray-200 rounded-full shadow-lg ${
          isScrolled
            ? "w-full max-w-[1200px] px-11 py-4 shadow-2xl"
            : "w-full max-w-[720px] px-6 py-3.5 hover:max-w-[1200px] hover:px-11 hover:py-4 hover:shadow-2xl"
        }`}>
          {/* Logo */}
          <Link
            href="/"
            className={`transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${isScrolled ? "-translate-x-4" : ""}`}
          >
            <Image
              src={LOGO_URL}
              alt="Featherbleu Industries"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              priority
            />
          </Link>

          {/* Nav Links */}
          <ul className="flex items-center gap-7 mx-auto">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-gray-700 text-sm hover:text-[#2979FF] transition-colors group/link"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1.5 w-full h-0.5 bg-[#2979FF] scale-x-0 origin-right transition-transform duration-300 group-hover/link:scale-x-100 group-hover/link:origin-left" />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="/contact"
            className={`bg-[#2979FF] text-white px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:bg-[#1e5dd8] hover:shadow-lg hover:shadow-[#2979FF]/30 ${isScrolled ? "translate-x-4" : ""}`}
          >
            Get a Quote
          </Link>
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between bg-white border border-gray-200 rounded-full px-5 py-3 shadow-lg">
        <Link href="/">
          <Image
            src={LOGO_URL}
            alt="Featherbleu Industries"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-700 p-1"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden mt-2 bg-white rounded-3xl overflow-hidden grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(.22,1,.36,1)] shadow-lg ${
          isMobileMenuOpen
            ? "grid-rows-[1fr] border border-gray-200"
            : "grid-rows-[0fr] pointer-events-none border-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className={`p-4 space-y-1 transition-opacity duration-500 ease-out ${
              isMobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-gray-700 hover:text-[#2979FF] hover:bg-gray-50 rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-3 border-t border-white/10">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-[#2979FF] text-white py-3 rounded-xl font-medium hover:bg-[#1e5dd8] transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
