"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CountUp({
  end,
  suffix,
  duration = 2,
}: {
  end: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      onEnter: () => {
        if (started.current) return;
        started.current = true;
        const startTime = performance.now();
        const animate = (currentTime: number) => {
          const elapsed = (currentTime - startTime) / 1000;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * end));
          if (progress < 1) requestAnimationFrame(animate);
          else setCount(end);
        };
        requestAnimationFrame(animate);
      },
    });
    return () => trigger.kill();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
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
        ".stat-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      end: 5,
      suffix: "+",
      label: "Years of Excellence",
      description: "Serving the community with world class dental care",
      icon: "ri-calendar-check-line",
    },
    {
      end: 2000,
      suffix: "+",
      label: "Happy Patients",
      description: "Patients who trust us with their smiles every year",
      icon: "ri-emotion-happy-line",
    },
    {
      end: 15,
      suffix: "+",
      label: "Expert Dentists",
      description: "Certified specialists dedicated to your oral health",
      icon: "ri-user-star-line",
    },
    {
      end: 99,
      suffix: "%",
      label: "Success Rate",
      description: "Consistently achieving outstanding treatment results",
      icon: "ri-award-line",
    },
    {
      end: 12,
      suffix: "+",
      label: "Services Offered",
      description: "Comprehensive dental solutions under one roof",
      icon: "ri-service-line",
    },
    {
      end: 98,
      suffix: "%",
      label: "Patient Satisfaction",
      description: "Patients who recommend us to their family and friends",
      icon: "ri-heart-line",
    },
  ];

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Full gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom right, #0d2f45, #1a5276)",
        }}
      />

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative icon */}
      <div className="absolute top-10 left-10 text-white opacity-5 text-9xl pointer-events-none">
        <i className="ri-tooth-line"></i>
      </div>
      <div className="absolute bottom-10 right-10 text-white opacity-5 text-9xl pointer-events-none">
        <i className="ri-heart-pulse-line"></i>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4"
            style={{ backgroundColor: "rgba(255,255,255,0.10)" }}
          >
            <i className="ri-bar-chart-line"></i>
            Our Numbers
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Our Track Record{" "}
            <span style={{ color: "#61a5c2" }}>Speaks For Itself</span>
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Numbers that reflect our commitment to excellence and patient
            satisfaction over the years.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card rounded-2xl p-8 flex flex-col gap-4 transition-all duration-300 border"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                borderColor: "rgba(255,255,255,0.10)",
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(to bottom right, #2a6f97, #61a5c2)",
                }}
              >
                <i className={`${stat.icon} text-white text-xl`}></i>
              </div>

              {/* Number */}
              <div
                className="text-4xl md:text-5xl font-bold"
                style={{ color: "#61a5c2" }}
              >
                <CountUp end={stat.end} suffix={stat.suffix} duration={2} />
              </div>

              {/* Label */}
              <div>
                <h3 className="text-white font-bold text-lg mb-1">
                  {stat.label}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}