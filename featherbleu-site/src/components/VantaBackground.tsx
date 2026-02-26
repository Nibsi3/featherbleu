"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

export function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    const initVanta = () => {
      if (window.VANTA && window.THREE) {
        vantaEffect.current = window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x2979ff,
          backgroundColor: 0x0,
          points: 13.0,
          maxDistance: 22.0,
          spacing: 14.0,
        });
      }
    };

    if (window.VANTA && window.THREE) {
      initVanta();
    } else {
      const checkInterval = setInterval(() => {
        if (window.VANTA && window.THREE) {
          initVanta();
          clearInterval(checkInterval);
        }
      }, 100);

      return () => clearInterval(checkInterval);
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
