"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Loader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      logoRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        textRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        barRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.5, ease: "power2.inOut", transformOrigin: "left center" },
        "-=0.2"
      )
      .to(loaderRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => setVisible(false),
      });
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ backgroundColor: "#0d2f45" }}
    >
      {/* Logo */}
      <div ref={logoRef} className="flex flex-col items-center gap-4 mb-8">
        {/* Icon */}
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl"
          style={{
            background: "linear-gradient(to bottom right, #2a6f97, #61a5c2)",
          }}
        >
          <i className="ri-tooth-line text-white text-4xl"></i>
        </div>

        {/* Name */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Ibest{" "}
            <span style={{ color: "#61a5c2" }}>P&C</span>
          </h1>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.50)" }}>
            Dental Care
          </p>
        </div>
      </div>

      {/* Loading bar */}
      <div className="w-48 h-1 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.10)" }}>
        <div
          ref={barRef}
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(to right, #2a6f97, #61a5c2)",
          }}
        />
      </div>

      {/* Text */}
      <p
        ref={textRef}
        className="text-xs mt-4 tracking-widest uppercase"
        style={{ color: "rgba(255,255,255,0.40)" }}
      >
        Loading...
      </p>
    </div>
  );
}