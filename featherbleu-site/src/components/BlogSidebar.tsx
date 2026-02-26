import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

type BlogPost = {
  title: string;
  slug: string;
  date: string;
  category: string;
};

type BlogSidebarProps = {
  currentSlug?: string;
  relatedPosts: BlogPost[];
};

export function BlogSidebar({ currentSlug, relatedPosts }: BlogSidebarProps) {
  const filteredPosts = relatedPosts.filter((post) => post.slug !== currentSlug);

  return (
    <aside className="space-y-8">
      {/* CTA Card */}
      <div className="bg-[#2979FF]/5 border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Need Expert Advice?
        </h3>
        <p className="text-gray-500 text-sm mb-4">
          Get a free consultation from our security and automation specialists.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-[#2979FF] px-4 py-3 text-sm font-medium text-white hover:bg-[#1e5dd8] transition"
        >
          Contact Us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Related Posts */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
        <div className="space-y-4">
          {filteredPosts.slice(0, 4).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#2979FF] transition line-clamp-2 mb-1">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[#2979FF] hover:text-[#1e5dd8] font-medium mt-4 transition"
        >
          View All Articles
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Services CTA */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Services</h3>
        <ul className="space-y-2 mb-4">
          <li className="text-sm text-gray-500">• Smart Home Automation</li>
          <li className="text-sm text-gray-500">• Garage Doors</li>
          <li className="text-sm text-gray-500">• Gate Automation</li>
          <li className="text-sm text-gray-500">• CCTV Systems</li>
          <li className="text-sm text-gray-500">• Access Control</li>
        </ul>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm text-[#2979FF] hover:text-[#1e5dd8] font-medium transition"
        >
          Learn More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

    </aside>
  );
}
