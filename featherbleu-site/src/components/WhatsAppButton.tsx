import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const whatsappUrl =
    "https://wa.me/27829217299?text=Hi%20Featherbleu%20Industries%2C%20I%27d%20like%20a%20quote%20for%20automation%2Fsecurity.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-[#2979FF] px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-[#2979FF]/30 hover:bg-[#1e5dd8] transition-all hover:scale-105"
      aria-label="Chat with Featherbleu Industries on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:block">WhatsApp us</span>
    </a>
  );
}
