"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );

      // Grid items animation
      gsap.fromTo(
        ".service-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "General Dentistry",
      description:
        "Comprehensive exams, cleanings, and preventative care to keep your natural teeth healthy for a lifetime.",
      icon: "ri-pulse-line",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Cosmetic Dentistry",
      description:
        "Transform your smile with veneers, bonding, and professional whitening treatments tailored to you.",
      icon: "ri-sparkling-line",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      title: "Dental Implants",
      description:
        "Permanent, natural-looking solutions for missing teeth that restore both function and confidence.",
      icon: "ri-shield-user-line",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Orthodontics",
      description:
        "Correct misaligned teeth and bite issues with our modern braces or clear aligner solutions.",
      icon: "ri-microscope-line",
      color: "from-sky-500 to-sky-600",
    },
    {
      title: "Pediatric Dentistry",
      description:
        "Gentle, fun, and specialized dental care for children of all ages in a kid-friendly environment.",
      icon: "ri-parent-line",
      color: "from-blue-400 to-blue-500",
    },
    {
      title: "Emergency Care",
      description:
        "Quick and compassionate relief for dental pain, broken teeth, or other urgent dental needs.",
      icon: "ri-alarm-warning-line",
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-[#f0f8ff] to-white relative overflow-hidden scroll-mt-20"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#61a5c2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#2a6f97]/10 text-[#2a6f97] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <i className="ri-service-line"></i>
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Comprehensive Dental{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2a6f97] to-[#61a5c2]">
              Services
            </span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            From routine checkups to advanced procedures, we offer a full range
            of dental services to keep your smile healthy and beautiful.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card group bg-white border border-[#61a5c2]/30 rounded-2xl p-7 hover:shadow-xl hover:border-[#61a5c2]/60 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <i className={`${service.icon} text-white text-2xl`} ></i>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Learn more link */}
              <div className="flex items-center gap-2 text-[#2a6f97] text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                <span>Learn More</span>
                <i className="ri-arrow-right-line"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}