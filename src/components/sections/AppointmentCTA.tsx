"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AppointmentCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Button pulse animation
      gsap.to(btnRef.current, {
        scale: 1.05,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="appointment"
      ref={sectionRef}
      className="py-24 relative overflow-hidden scroll-mt-20"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2a6f97] to-[#61a5c2]" />

      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative icons */}
      <div className="absolute top-10 left-10 text-white/10 text-8xl">
        <i className="ri-tooth-line"></i>
      </div>
      <div className="absolute bottom-10 right-10 text-white/10 text-8xl">
        <i className="ri-heart-pulse-line"></i>
      </div>
      <div className="absolute top-10 right-40 text-white/10 text-6xl">
        <i className="ri-stethoscope-line"></i>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        <div ref={contentRef} className="text-center flex flex-col items-center gap-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full">
            <i className="ri-calendar-check-line"></i>
            Book Your Visit Today
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Ready For Your Best{" "}
            <span className="text-white/80">Smile Ever?</span>
          </h2>

          {/* Description */}
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
            Take the first step towards a healthier, more beautiful smile today.
            Our team is ready to welcome you and provide the exceptional dental
            care you deserve.
          </p>

          {/* Features row */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: "ri-time-line", text: "Flexible Hours" },
              { icon: "ri-shield-check-line", text: "Safe & Sterile" },
              { icon: "ri-money-dollar-circle-line", text: "Affordable Plans" },
              { icon: "ri-user-star-line", text: "Expert Dentists" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 text-white/90 text-sm font-medium"
              >
                <i className={`${item.icon} text-white text-base`}></i>
                {item.text}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            ref={btnRef}
            href="tel:+2341234567890"
            className="inline-flex items-center gap-3 bg-white text-[#2a6f97] font-bold px-10 py-5 rounded-full hover:shadow-2xl transition-all duration-300 text-lg"
          >
            <i className="ri-calendar-check-line text-xl"></i>
            Book An Appointment
          </a>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-2">
            <a
              href="tel:+2341234567890"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 text-sm"
            >
              <i className="ri-phone-line"></i>
              +234 123 456 7890
            </a>
            <div className="w-px h-4 bg-white/30 hidden sm:block" />
            <a
              href="mailto:info@ibestdental.com"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 text-sm"
            >
              <i className="ri-mail-line"></i>
              info@ibestdental.com
            </a>
            <div className="w-px h-4 bg-white/30 hidden sm:block" />
            <span className="flex items-center gap-2 text-white/80 text-sm">
              <i className="ri-map-pin-line"></i>
              Lagos, Nigeria
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}