"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Regular Patient",
      initials: "SJ",
      rating: 5,
      text: "Ibest P&C Dental Care completely transformed my smile. The team is incredibly professional and gentle. I used to be terrified of dentists but now I actually look forward to my appointments!",
    },
    {
      name: "Michael Okafor",
      role: "Dental Implant Patient",
      initials: "MO",
      rating: 5,
      text: "I got dental implants here and the results are absolutely amazing. The procedure was painless and the staff made me feel comfortable throughout. Highly recommend to anyone!",
    },
    {
      name: "Amara Nwosu",
      role: "Teeth Whitening Patient",
      initials: "AN",
      rating: 5,
      text: "The teeth whitening service here is outstanding. My teeth are several shades brighter and I feel so much more confident. The clinic is so clean and modern too!",
    },
    {
      name: "David Chen",
      role: "Orthodontics Patient",
      initials: "DC",
      rating: 5,
      text: "After just 8 months with clear aligners from Ibest P&C, my teeth are perfectly straight. The process was smooth and the team checked in on me every step of the way.",
    },
    {
      name: "Fatima Al-Hassan",
      role: "General Dentistry Patient",
      initials: "FA",
      rating: 5,
      text: "Best dental clinic I have ever visited. The doctors are knowledgeable, the staff is warm and welcoming, and the facility is spotless. My whole family comes here now!",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.fromTo(
        ".testimonial-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".testimonials-grid",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-[#f0f8ff] to-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2a6f97] opacity-5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#61a5c2] opacity-10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#2a6f97] bg-opacity-10 text-[#2a6f97] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <i className="ri-chat-quote-line"></i>
            Patient Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            What Our Patients{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(to right, #2a6f97, #61a5c2)",
              }}
            >
              Are Saying
            </span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Real stories from real patients who trusted us with their smiles.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-white rounded-3xl shadow-xl border border-[#61a5c2] border-opacity-20 p-8 md:p-12 mb-10 transition-all duration-500">
          <div className="flex flex-col md:flex-row gap-8 items-center">

            {/* Avatar — Initials only */}
            <div className="shrink-0">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                style={{
                  background: "linear-gradient(to bottom right, #2a6f97, #61a5c2)",
                }}
              >
                {testimonials[active].initials}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                ))}
              </div>
              {/* Quote icon */}
              <i className="ri-double-quotes-l text-4xl text-[#61a5c2] opacity-40"></i>
              {/* Quote */}
              <p className="text-gray-700 text-lg leading-relaxed italic">
                {testimonials[active].text}
              </p>
              {/* Name */}
              <div>
                <p className="font-bold text-gray-900">{testimonials[active].name}</p>
                <p className="text-sm text-[#2a6f97]">{testimonials[active].role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center items-center gap-3 mb-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: active === i ? "32px" : "10px",
                height: "10px",
                backgroundColor: active === i ? "#2a6f97" : "#61a5c2",
                opacity: active === i ? 1 : 0.4,
              }}
            />
          ))}
        </div>

        {/* Testimonial Cards Grid */}
        <div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-white border border-[#61a5c2] border-opacity-20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
                ))}
              </div>

              {/* Quote */}
              <i className="ri-double-quotes-l text-2xl text-[#61a5c2] opacity-30 mb-2 block"></i>

              {/* Text */}
              <p className="text-gray-500 text-sm leading-relaxed mb-5 italic">
                {testimonial.text}
              </p>

              {/* Patient — initials avatar */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                  style={{
                    background: "linear-gradient(to bottom right, #2a6f97, #61a5c2)",
                  }}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-xs text-[#2a6f97]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}