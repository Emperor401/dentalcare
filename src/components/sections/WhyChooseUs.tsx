"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

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

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
          },
        }
      );

      // Features animation
      gsap.fromTo(
        ".why-feature",
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: "ri-customer-service-2-line",
      title: "Personalized Approach",
      description:
        "We take the time to listen to your concerns and goals to create a customized treatment plan.",
    },
    {
      icon: "ri-stethoscope-line",
      title: "Latest Equipment",
      description:
        "Our clinic is equipped with the newest digital imaging and treatment technology for better results.",
    },
    {
      icon: "ri-money-dollar-circle-line",
      title: "Flexible Financing",
      description:
        "We offer various payment plans and accept most insurance to make quality care affordable.",
    },
    {
      icon: "ri-time-line",
      title: "Convenient Hours",
      description:
        "With early morning and late evening appointments, we work around your busy schedule.",
    },
  ];

  return (
    <section
      id="whyus"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden scroll-mt-20"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#2a6f97]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#61a5c2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#2a6f97]/10 text-[#2a6f97] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <i className="ri-star-line"></i>
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Why Patients Trust{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2a6f97] to-[#61a5c2]">
              Ibest P&C
            </span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            We combine expertise, technology, and genuine care to deliver an
            exceptional dental experience every single visit.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Image */}
          <div ref={imageRef} className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2a6f97]/20 to-[#61a5c2]/20 blur-xl" />
            <img
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80"
              alt="Professional dentist with patient"
              className="relative rounded-3xl w-full object-cover shadow-2xl"
              style={{ height: "520px" }}
            />
            {/* Floating card */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2a6f97] to-[#61a5c2] rounded-full flex items-center justify-center">
                <i className="ri-shield-check-line text-white text-lg"></i>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">100% Safe</p>
                <p className="text-xs text-gray-500">Sterile Environment</p>
              </div>
            </div>
          </div>

          {/* Right — Features */}
          <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="why-feature group flex flex-col gap-3 bg-white border border-[#61a5c2]/20 rounded-2xl p-5 hover:shadow-lg hover:border-[#61a5c2]/50 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#2a6f97] to-[#61a5c2] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className={`${feature.icon} text-white text-lg`}></i>
                </div>
                <h3 className="text-sm font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}