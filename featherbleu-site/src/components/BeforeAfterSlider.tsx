"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type BeforeAfterSliderProps = {
  before: string;
  after: string;
  label?: string;
};

export function BeforeAfterSlider({ before, after, label }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getPosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    getPosition(e.clientX);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    getPosition(e.touches[0].clientX);
  };

  useEffect(() => {
    if (!isDragging) return;

    const onMouseMove = (e: MouseEvent) => getPosition(e.clientX);
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      getPosition(e.touches[0].clientX);
    };
    const onEnd = () => setIsDragging(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onEnd);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onEnd);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, [isDragging, getPosition]);

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden select-none shadow-xl border border-white/10 group">
      {/* AFTER image (full, behind) */}
      <div className="absolute inset-0">
        <Image src={after} alt="After" fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
      </div>

      {/* BEFORE image (clipped by position) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={before} alt="Before" fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-10">
        <span className="bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 uppercase tracking-wider">
          Before
        </span>
      </div>
      <div className="absolute top-4 right-4 z-10">
        <span className="bg-[#2979FF]/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-[#2979FF]/30 uppercase tracking-wider">
          After
        </span>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 z-20 w-px bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]"
        style={{ left: `${position}%` }}
      />

      {/* Drag handle */}
      <div
        ref={containerRef}
        className="absolute inset-0 z-30 cursor-ew-resize"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 z-40 pointer-events-none"
        style={{ left: `${position}%`, transform: `translateX(-50%) translateY(-50%)` }}
      >
        <div
          className={`h-10 w-10 rounded-full bg-white shadow-[0_4px_24px_rgba(0,0,0,0.35)] border-2 border-white flex items-center justify-center transition-transform duration-150 ${isDragging ? "scale-110" : "group-hover:scale-105"}`}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 5L3 10L7 15" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 5L17 10L13 15" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Optional label */}
      {label && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
