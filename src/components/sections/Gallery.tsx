"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

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
        ".gallery-item",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".gallery-grid",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=85",
      alt: "Modern dental clinic",
      span: "col-span-2 row-span-2",
      height: "400px",
    },
    {
      src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=90",
      alt: "Dental equipment",
      span: "col-span-1 row-span-1",
      height: "190px",
    },
    {
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=85",
      alt: "Dentist with patient",
      span: "col-span-1 row-span-1",
      height: "190px",
    },
    {
      src: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&q=85",
      alt: "Dental tools",
      span: "col-span-1 row-span-1",
      height: "190px",
    },
    {
      src: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=800&q=85",
      alt: "Smiling patient",
      span: "col-span-1 row-span-1",
      height: "190px",
    },
  ];

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#f0f8ff] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 text-[#2a6f97] text-sm font-semibold px-4 py-2 rounded-full mb-4"
            style={{ backgroundColor: "rgba(42,111,151,0.10)" }}
          >
            <i className="ri-image-line"></i>
            Our Clinic
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            A Glimpse Inside{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(to right, #2a6f97, #61a5c2)",
              }}
            >
              Our Clinic
            </span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Our state-of-the-art facility is designed to make you feel calm,
            comfortable, and confident in the care you receive.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`gallery-item relative overflow-hidden rounded-2xl group cursor-pointer ${image.span}`}
              style={{ height: image.height }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{
                  background: "linear-gradient(to bottom, rgba(42,111,151,0.3), rgba(42,111,151,0.7))",
                }}
              >
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <i className="ri-zoom-in-line text-white text-xl"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}