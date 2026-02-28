import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Home, Shield, Thermometer, Lightbulb, Lock } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BlogSidebar } from "@/components/BlogSidebar";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Understanding Smart Home Automation | Featherbleu Industries",
  description:
    "A comprehensive guide to smart home technology and how it can make your life easier and safer. Expert advice from Featherbleu Industries.",
  keywords:
    "smart home automation, smart home technology, smart lighting, smart security, smart thermostats, home automation South Africa",
};

const relatedPosts = [
  { title: "5 Essential Security Tips for Your Home", slug: "essential-security-tips", date: "2026-02-01", category: "Security Tips" },
  { title: "CCTV Systems: What You Need to Know", slug: "cctv-systems-guide", date: "2026-01-20", category: "Security Tips" },
  { title: "The Future of Home Security", slug: "future-of-home-security", date: "2026-01-15", category: "Industry News" },
  { title: "Smart Home Technology in 2026", slug: "smart-home-technology-2026", date: "2026-01-05", category: "Industry News" },
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
                    Home Technology
                  </span>
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                    Understanding Smart Home Automation
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    A comprehensive guide to smart home technology and how it can make your life easier and safer.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 gap-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      January 28, 2026
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Featherbleu Team
                    </div>
                  </div>
                </div>

                <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-200 mb-8 shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=1200&q=80"
                    alt="Understanding smart home automation for South African homes"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="prose max-w-none">
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    If you've ever wished you could turn off the lights without getting out of bed, check who's at your front door while you're at the office, or have your home automatically cool down before you arrive — welcome to the world of smart home automation.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Smart home technology has moved well beyond the novelty stage. Today, it's an accessible, practical, and increasingly affordable way to upgrade everyday living. Whether you're building from scratch or simply looking to enhance your existing home, this guide will walk you through everything you need to know.
                  </p>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Home className="h-6 w-6 text-[#2979FF]" />
                      What Is Smart Home Automation?
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      At its core, smart home automation refers to the use of connected devices and systems that allow you to monitor and control aspects of your home — lighting, security, temperature, appliances, and more — either automatically or remotely via a smartphone, tablet, or voice command.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      These devices communicate through your home's Wi-Fi network or dedicated protocols like Zigbee and Z-Wave, allowing them to talk to one another and respond intelligently to your habits, schedules, and preferences.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Lightbulb className="h-6 w-6 text-[#2979FF]" />
                      The Key Components of a Smart Home
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Understanding how a smart home works starts with knowing its building blocks.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Hub or Controller</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      This is the brain of your smart home ecosystem. Devices like Amazon Echo, Google Nest Hub, or Apple HomePod act as central controllers that allow different smart devices to communicate and be managed from a single interface. Many modern systems are now hub-free, connecting directly via Wi-Fi or Bluetooth.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Lighting</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      One of the easiest starting points for any homeowner. Smart bulbs and switches allow you to control lighting remotely, set schedules, dim lights, and even change colour temperature. Brands like Philips Hue, LIFX, and TP-Link offer reliable, widely available options.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Security</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      From video doorbells and smart locks to motion sensors and full CCTV systems with remote access, smart security gives you real-time awareness of what's happening in and around your home — no matter where you are.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Thermostats</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Devices like the Google Nest or Honeywell Home learn your temperature preferences over time and automatically adjust settings to save energy. They can also be controlled remotely, so your home is always the right temperature when you arrive.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Appliances</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Washing machines, ovens, fridges, and robot vacuums that can be scheduled, monitored, or operated remotely. These devices not only offer convenience but can also help you reduce energy usage and household running costs.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Entertainment</h3>
                    <p className="text-gray-600 leading-relaxed">
                      From multi-room audio systems to smart TVs and streaming devices, your home's entertainment can be fully integrated and controlled through a single app or voice command.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Thermometer className="h-6 w-6 text-[#2979FF]" />
                      How Smart Home Automation Makes Life Easier
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      The real appeal of home automation lies in how seamlessly it fits into daily life. Here are just a few practical ways it simplifies your routine:
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Morning routines on autopilot</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Imagine waking up to your lights gradually brightening, your coffee machine starting, and your favourite playlist or morning news already playing — all triggered by a single alarm or scheduled routine.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Remote control from anywhere</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Left home in a rush and can't remember if you locked the door or turned off the stove? With smart devices, you can check and control almost everything from your phone, wherever you are in the world.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Voice-activated convenience</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Integration with voice assistants like Amazon Alexa, Google Assistant, or Apple Siri means you can control your home without lifting a finger.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Energy efficiency</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Smart thermostats, lighting schedules, and energy monitors help you understand and reduce your home's energy consumption. Over time, this translates to meaningful savings on your electricity bill.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Tailored environments</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Create scenes or modes that adjust multiple devices at once. A Movie Night scene could dim the lights, close the blinds, switch on the TV, and lower the thermostat — all with one tap.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Shield className="h-6 w-6 text-[#2979FF]" />
                      How Smart Home Automation Makes Your Home Safer
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Security is one of the most compelling reasons to invest in smart home technology, particularly in the South African context where home security is a priority for many households.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time surveillance</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Smart cameras with motion detection send instant alerts to your phone when movement is detected on your property. Many offer live feeds and cloud recording.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart locks and access control</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Keypad and app-enabled locks allow you to grant access to family members, domestic workers, or service providers without ever handing over a physical key. You can lock and unlock your doors remotely, and receive notifications whenever someone enters or exits.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Video doorbells</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      See, hear, and speak to anyone at your front door — even when you're not home. Smart doorbells are a powerful deterrent and a practical security tool in one.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Smoke, gas, and flood detectors</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Smart sensors send notifications directly to your phone, meaning you can respond quickly even if you're not at home. Some systems can automatically shut off water valves or trigger ventilation when an issue is detected.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Lighting as a deterrent</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Automated exterior lighting that reacts to motion, or interior lights set on schedules when you're away, create the impression that someone is always home — significantly reducing the risk of break-ins.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Lock className="h-6 w-6 text-[#2979FF]" />
                      Getting Started: Where to Begin
                    </h2>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Start small</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Choose one area — perhaps smart lighting or a video doorbell — and get comfortable with how it works before expanding.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose a compatible ecosystem</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Decide early whether you want to build around Amazon Alexa, Google Home, or Apple HomeKit. Choosing a primary ecosystem makes for a more seamless experience.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Check your Wi-Fi</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Smart devices rely on a stable and reasonably fast internet connection. If your router is older or your signal is weak in certain rooms, consider upgrading your network before investing in smart devices.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Prioritise your needs</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Think about what would genuinely improve your daily life or address a real pain point. Security, energy saving, and convenience tend to offer the highest return for most homeowners.
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Consider professional installation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      For more complex systems — whole-home audio, integrated security, or advanced automation — professional installation ensures everything is configured correctly and working as intended from day one.
                    </p>
                  </div>

                  <div className="bg-[#2979FF]/5 border border-[#2979FF]/20 rounded-2xl p-6 mb-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Final Thoughts</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Smart home automation is no longer the preserve of tech enthusiasts or high-end properties. It's a practical, accessible way to make your home more comfortable, more efficient, and significantly safer.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      At Featherbleu, we're passionate about helping you find solutions that fit your home, your lifestyle, and your budget. Explore our range of smart home products and let us help you take the first step toward a more connected home.
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
                  <BlogSidebar currentSlug="smart-home-automation-guide" relatedPosts={relatedPosts} />
                </div>
              </div>
            </div>
          </div>
        </article>

        <CTA
          title="Need help choosing smart home tech?"
          description="Contact us for advice on smart home automation and security solutions for your property."
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
