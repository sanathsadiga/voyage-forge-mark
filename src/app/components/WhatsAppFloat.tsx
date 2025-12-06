"use client";
import { FaWhatsapp } from "react-icons/fa";

type WhatsAppFloatProps = {
  phone?: string; // E.164 format without '+' e.g., 15551234567
  message?: string;
};

export default function WhatsAppFloat({
  phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+918904355301",
  message = "Hello! I'd like to know more about Voyage Forge.",
}: WhatsAppFloatProps) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div
        className="w-14 h-14 md:w-16 md:h-16 rounded-full
          bg-gradient-to-br from-emerald-500 via-green-500 to-emerald-600
          flex items-center justify-center text-white
          ring-2 ring-white/20 backdrop-blur-sm
          animate-floatPulse
          transition-transform duration-300 ease-out
          hover:scale-105 hover:shadow-2xl"
      >
        <FaWhatsapp className="text-2xl md:text-3xl drop-shadow-sm" />
      </div>
      {/* Tooltip */}
      <span
        className="absolute -top-8 right-0 translate-y-1 opacity-0 group-hover:opacity-100
          bg-black/70 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap
          transition-opacity duration-200"
      >
        Chat with us
      </span>
    </a>
  );
}
