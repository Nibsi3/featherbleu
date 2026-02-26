"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectsSliderProps = {
  images: string[];
};

export function ProjectsSlider({ images }: ProjectsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasInteracted = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffsetX, setDragOffsetX] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const safeImages = useMemo(() => (images.length > 0 ? images : []), [images]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? safeImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === safeImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [safeImages.length]);

  useEffect(() => {
    if (!hasInteracted.current) {
      hasInteracted.current = true;
      return;
    }
    const thumbs = thumbsRef.current;
    if (!thumbs) return;

    const active = thumbs.querySelector<HTMLButtonElement>(
      `button[data-idx="${currentIndex}"]`
    );
    active?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [currentIndex]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (safeImages.length <= 1) return;
    dragStartX.current = e.clientX;
    setIsDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging || dragStartX.current === null) return;
    setDragOffsetX(e.clientX - dragStartX.current);
  };

  const endDrag = () => {
    if (!isDragging) return;
    const threshold = 80;
    if (dragOffsetX > threshold) goToPrevious();
    if (dragOffsetX < -threshold) goToNext();
    setIsDragging(false);
    setDragOffsetX(0);
    dragStartX.current = null;
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Main Slider */}
      <div
        className="relative aspect-video rounded-3xl overflow-hidden border border-gray-200 bg-gray-50 select-none touch-pan-y shadow-sm"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >
        <div
          className="absolute inset-0 flex"
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffsetX}px))`,
            transition: isDragging ? "none" : "transform 450ms cubic-bezier(.22,1,.36,1)",
          }}
        >
          {safeImages.map((src, idx) => (
            <div key={src} className="relative h-full w-full shrink-0">
              <Image
                src={src}
                alt={`Project ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority={idx === currentIndex}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm border border-gray-200 text-gray-700 p-3 rounded-full transition-all hover:scale-110 shadow-sm"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm border border-gray-200 text-gray-700 p-3 rounded-full transition-all hover:scale-110 shadow-sm"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Counter */}
        <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-full text-gray-700 text-sm shadow-sm">
          {safeImages.length === 0 ? "0 / 0" : `${currentIndex + 1} / ${safeImages.length}`}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div ref={thumbsRef} className="mt-4 flex gap-2 overflow-x-auto pb-2">
        {safeImages.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            data-idx={index}
            className={`relative shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
              index === currentIndex
                ? "border-[#2979FF] scale-105"
                : "border-gray-200 hover:border-gray-400 opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
