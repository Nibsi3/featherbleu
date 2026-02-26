"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Play, ZoomIn } from "lucide-react";

/* ─── Types ─────────────────────────────────────────────── */
type BeforeAfterPair = {
  kind: "beforeafter";
  id: string;
  before: string;
  after: string;
  label: string;
};

type VideoItem = {
  kind: "video";
  id: string;
  src: string;
  label: string;
};

type PhotoItem = {
  kind: "photo";
  id: string;
  src: string;
  label: string;
};

type GalleryItem = BeforeAfterPair | VideoItem | PhotoItem;

export type ProjectsGalleryProps = {
  items: GalleryItem[];
};

/* ─── Before/After inline slider ───────────────────────── */
function BeforeAfterCard({ item }: { item: BeforeAfterPair }) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const calcPos = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const mm = (e: MouseEvent) => calcPos(e.clientX);
    const tm = (e: TouchEvent) => { e.preventDefault(); calcPos(e.touches[0].clientX); };
    const end = () => setDragging(false);
    window.addEventListener("mousemove", mm);
    window.addEventListener("mouseup", end);
    window.addEventListener("touchmove", tm, { passive: false });
    window.addEventListener("touchend", end);
    return () => {
      window.removeEventListener("mousemove", mm);
      window.removeEventListener("mouseup", end);
      window.removeEventListener("touchmove", tm);
      window.removeEventListener("touchend", end);
    };
  }, [dragging, calcPos]);

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-video w-full rounded-2xl overflow-hidden select-none cursor-ew-resize group shadow-lg border border-gray-100">
        {/* After (base) */}
        <div className="absolute inset-0">
          <Image src={item.after} alt="After" fill className="object-cover" sizes="(max-width: 768px) 100vw, 600px" />
        </div>
        {/* Before (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={item.before} alt="Before" fill className="object-cover" sizes="(max-width: 768px) 100vw, 600px" />
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 z-20 bg-black/70 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">Before</span>
        <span className="absolute top-3 right-3 z-20 bg-[#2979FF] text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">After</span>

        {/* Divider line */}
        <div className="absolute top-0 bottom-0 z-20 w-[2px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]" style={{ left: `${pos}%` }} />

        {/* Drag hit area */}
        <div
          ref={containerRef}
          className="absolute inset-0 z-30"
          onMouseDown={(e) => { e.preventDefault(); setDragging(true); calcPos(e.clientX); }}
          onTouchStart={(e) => { setDragging(true); calcPos(e.touches[0].clientX); }}
        />

        {/* Handle */}
        <div className="absolute top-1/2 z-40 pointer-events-none" style={{ left: `${pos}%`, transform: "translateX(-50%) translateY(-50%)" }}>
          <div className={`h-9 w-9 rounded-full bg-white shadow-xl border-2 border-white flex items-center justify-center transition-transform ${dragging ? "scale-125" : "group-hover:scale-110"}`}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M7 5L3 10L7 15" stroke="#111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 5L17 10L13 15" stroke="#111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Drag hint (fades after interaction) */}
        <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 z-10 transition-opacity ${dragging ? "opacity-0" : "opacity-100"}`}>
          <span className="bg-black/60 backdrop-blur-sm text-white text-[11px] px-3 py-1 rounded-full flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 20 20" fill="none"><path d="M7 5L3 10L7 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13 5L17 10L13 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Drag to compare
          </span>
        </div>
      </div>
      <p className="text-sm font-semibold text-gray-700 text-center">{item.label}</p>
    </div>
  );
}

/* ─── Video card ─────────────────────────────────────────── */
function VideoCard({ item, onClick }: { item: VideoItem; onClick: () => void }) {
  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={onClick}
        className="relative aspect-video w-full rounded-2xl overflow-hidden group shadow-lg border border-gray-100 cursor-pointer"
        aria-label={`Play ${item.label}`}
      >
        <video
          src={item.src}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
          <div className="h-14 w-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
            <Play className="h-6 w-6 text-[#2979FF] ml-0.5" fill="#2979FF" />
          </div>
        </div>
        <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">Video</span>
      </button>
      <p className="text-sm font-semibold text-gray-700 text-center">{item.label}</p>
    </div>
  );
}

/* ─── Photo card ─────────────────────────────────────────── */
function PhotoCard({ item, onClick }: { item: PhotoItem; onClick: () => void }) {
  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={onClick}
        className="relative aspect-video w-full rounded-2xl overflow-hidden group shadow-lg border border-gray-100 cursor-pointer"
        aria-label={`View ${item.label}`}
      >
        <Image src={item.src} alt={item.label} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 600px" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <ZoomIn className="h-5 w-5 text-gray-800" />
          </div>
        </div>
      </button>
      <p className="text-sm font-semibold text-gray-700 text-center">{item.label}</p>
    </div>
  );
}

/* ─── Lightbox ───────────────────────────────────────────── */
function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-999 bg-black/95 backdrop-blur-md flex items-center justify-center"
      onClick={onClose}
    >
      {/* Content */}
      <div
        className="relative w-full max-w-5xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {item.kind === "video" ? (
          <video
            src={item.src}
            controls
            autoPlay
            className="w-full max-h-[80vh] rounded-2xl bg-black"
          />
        ) : item.kind === "beforeafter" ? (
          <BeforeAfterCard item={item} />
        ) : (
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
            <Image src={(item as PhotoItem).src} alt={item.label} fill className="object-contain" sizes="100vw" />
          </div>
        )}

        {/* Label */}
        <p className="text-white/80 text-sm text-center mt-4">{item.label}</p>

        {/* Counter */}
        <p className="text-white/50 text-xs text-center mt-1">{index + 1} / {items.length}</p>
      </div>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition"
        aria-label="Previous"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition"
        aria-label="Next"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}

/* ─── Main gallery ───────────────────────────────────────── */
export function ProjectsGallery({ items }: ProjectsGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + items.length) % items.length));
  const next = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % items.length));

  const beforeAfterItems = items.filter((i) => i.kind === "beforeafter");
  const otherItems = items.filter((i) => i.kind !== "beforeafter");

  return (
    <div className="space-y-16">
      {/* ── Before & After Section ── */}
      {beforeAfterItems.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gray-200" />
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-sm font-semibold">
              <span className="h-2 w-2 rounded-full bg-[#2979FF]" />
              Before &amp; After
            </div>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {beforeAfterItems.map((item) => (
              <BeforeAfterCard key={item.id} item={item as BeforeAfterPair} />
            ))}
          </div>
        </div>
      )}

      {/* ── Photos & Video Section ── */}
      {otherItems.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gray-200" />
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-sm font-semibold">
              <span className="h-2 w-2 rounded-full bg-[#2979FF]" />
              Project Gallery
            </div>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherItems.map((item, idx) => {
              const globalIdx = items.findIndex((i) => i.id === item.id);
              return item.kind === "video" ? (
                <VideoCard key={item.id} item={item} onClick={() => openLightbox(globalIdx)} />
              ) : (
                <PhotoCard key={item.id} item={item as PhotoItem} onClick={() => openLightbox(globalIdx)} />
              );
            })}
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={items}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
        />
      )}
    </div>
  );
}
