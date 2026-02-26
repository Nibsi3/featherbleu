import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CTAProps = {
  title: string;
  description: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
};

export function CTA({
  title,
  description,
  primaryText = "Get Started",
  primaryHref = "/contact",
  secondaryText,
  secondaryHref,
}: CTAProps) {
  return (
    <section className="py-20 bg-black">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2979FF] px-8 py-4 text-base font-semibold text-white hover:bg-[#1e5dd8] transition shadow-lg shadow-[#2979FF]/30"
          >
            {primaryText}
            <ArrowRight className="h-5 w-5" />
          </Link>
          {secondaryText && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:border-[#2979FF] hover:bg-[#2979FF]/5 transition"
            >
              {secondaryText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
