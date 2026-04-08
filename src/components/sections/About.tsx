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

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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
        ".about-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".stat-number",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: "ri-heart-pulse-line",
      title: "Patient-Centered Care",
      description:
        "Every treatment plan is tailored specifically to your needs, ensuring comfort and the best possible outcomes.",
    },
    {
      icon: "ri-microscope-line",
      title: "Advanced Technology",
      description:
        "We use the latest dental technology and techniques to deliver precise, effective, and painless treatments.",
    },
    {
      icon: "ri-team-line",
      title: "Expert Team",
      description:
        "Our team of certified dental specialists brings years of experience and a passion for creating beautiful smiles.",
    },
  ];

  const stats = [
    {
      end: 5,
      suffix: "+",
      label: "Years Experience",
      icon: "ri-calendar-check-line",
    },
    {
      end: 2000,
      suffix: "+",
      label: "Happy Patients",
      icon: "ri-emotion-happy-line",
    },
    {
      end: 15,
      suffix: "+",
      label: "Certified Dentists",
      icon: "ri-user-star-line",
    },
    {
      end: 99,
      suffix: "%",
      label: "Success Rate",
      icon: "ri-award-line",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f0f8ff] rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#2a6f97] bg-opacity-10 text-[#2a6f97] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <i className="ri-information-line"></i>
            About Our Clinic
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            We Are Committed To Your{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(to right, #2a6f97, #61a5c2)",
              }}
            >
              Dental Health
            </span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            At Ibest P&C Dental Care, we believe everyone deserves a healthy,
            beautiful smile. Our clinic combines compassionate care with
            cutting-edge technology to give you the best dental experience.
          </p>
        </div>

        {/* Feature Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="about-card group bg-white border border-[#61a5c2]/20 rounded-2xl p-7 hover:border-[#61a5c2]/50 transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: "linear-gradient(to bottom right, #2a6f97, #61a5c2)",
                }}
              >
                <i className={`${feature.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 rounded-3xl p-8"
          style={{
            background: "linear-gradient(to right, #2a6f97, #61a5c2)",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-number flex flex-col items-center text-center gap-2"
            >
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-1">
                <i className={`${stat.icon} text-white text-xl`}></i>
              </div>
              <span className="text-3xl md:text-4xl font-bold text-white">
                <CountUp end={stat.end} suffix={stat.suffix} duration={2} />
              </span>
              <span className="text-white text-opacity-80 text-sm font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}