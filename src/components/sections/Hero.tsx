"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !badgeRef.current ||
      !headingRef.current ||
      !subRef.current ||
      !btnsRef.current
    )
      return;

    const tl = gsap.timeline({ delay: 0.4 });
    tl.fromTo(
      badgeRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
    )
      .fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        subRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        btnsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.4"
      );
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-x-clip scroll-mt-20"
    >
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1920&q=90"
          alt="Dental clinic background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(20,50,70,0.75) 0%, rgba(20,50,70,0.65) 60%, rgba(20,50,70,0.85) 100%)",
          }}
        />
      </div>

      {/* Content — centered */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center gap-6 pt-24 sm:pt-32 pb-16">

        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-full border border-white border-opacity-30 text-white"
          style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
        >
          <i className="ri-shield-check-line text-[#61a5c2]"></i>
          Trusted Dental Care Since 2019
        </div>

        {/* Heading */}
        <h1
          ref={headingRef}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
        >
          Advanced Dental Care{" "}
          <span
            className="block"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundImage: "linear-gradient(to right, #61a5c2, #a8d8ea)",
              backgroundClip: "text",
            }}
          >
            With Compassion
          </span>
        </h1>

        {/* Subtext */}
        <p
          ref={subRef}
          className="text-white text-opacity-80 text-lg md:text-xl leading-relaxed max-w-2xl"
          style={{ color: "rgba(255,255,255,0.80)" }}
        >
          We provide world-class dental treatments in a calm, comfortable
          environment. From routine checkups to advanced cosmetic procedures —
          your smile is our mission.
        </p>

        {/* Buttons */}
        <div
          ref={btnsRef}
          className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto"
        >
          <a
            href="#appointment"
            className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-base"
            style={{
              background: "linear-gradient(to right, #2a6f97, #61a5c2)",
            }}
          >
            <i className="ri-calendar-check-line text-lg"></i>
            Book Appointment
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base border-2 border-white text-white hover:bg-white hover:text-[#2a6f97]"
          >
            <i className="ri-stethoscope-line text-lg"></i>
            Our Services
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
        }}
      />
    </section>
  );
}