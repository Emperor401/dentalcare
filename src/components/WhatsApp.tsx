"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function WhatsApp() {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.fromTo(
        btnRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          delay: 2,
        }
      );

      // Pulse animation
      gsap.to(btnRef.current, {
        scale: 1.1,
        duration: 1,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2.6,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">

      {/* Tooltip */}
      <div
        ref={tooltipRef}
        className="bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-full shadow-lg opacity-0 pointer-events-none transition-all duration-300"
        id="wa-tooltip"
      >
        Chat with us!
      </div>

      {/* WhatsApp Button */}
      <a
        ref={btnRef}
        href="https://wa.me/2341234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300"
        style={{ backgroundColor: "#25D366" }}
        onMouseEnter={() => {
          if (tooltipRef.current) {
            tooltipRef.current.style.opacity = "1";
            tooltipRef.current.style.transform = "translateX(0)";
          }
        }}
        onMouseLeave={() => {
          if (tooltipRef.current) {
            tooltipRef.current.style.opacity = "0";
          }
        }}
      >
        <i className="ri-whatsapp-line text-white text-3xl"></i>
      </a>
    </div>
  );
}