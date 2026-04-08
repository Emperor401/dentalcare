"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "How often should I visit the dentist?",
            answer:
                "We recommend visiting the dentist every 6 months for routine checkups and cleanings. However, if you have specific dental concerns or conditions, your dentist may recommend more frequent visits.",
        },
        {
            question: "Do you accept dental insurance?",
            answer:
                "Yes, we work with most major dental insurance providers. Our team will help you understand your coverage and maximize your benefits. Please contact us to verify your specific insurance plan.",
        },
        {
            question: "Are your dental procedures painful?",
            answer:
                "We prioritize your comfort at all times. We use modern anesthesia and pain management techniques to ensure your procedures are as comfortable and pain-free as possible.",
        },
        {
            question: "How long does teeth whitening last?",
            answer:
                "Professional teeth whitening results typically last between 1 to 3 years depending on your diet and oral hygiene habits. We recommend touch-up treatments to maintain your bright smile.",
        },
        {
            question: "What should I do in a dental emergency?",
            answer:
                "If you experience a dental emergency such as a broken tooth, severe pain, or knocked-out tooth, contact us immediately. We offer same-day emergency appointments to address urgent dental issues.",
        },
        {
            question: "How long do dental implants last?",
            answer:
                "With proper care and maintenance, dental implants can last a lifetime. They are a permanent solution for missing teeth and are designed to look, feel, and function just like natural teeth.",
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
                ".faq-item",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: ".faq-list",
                        start: "top 85%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section
            id="faq"
            ref={sectionRef}
            className="py-24 relative overflow-hidden"
            style={{
                background: "linear-gradient(to bottom right, #f0f8ff, #ffffff)",
            }}
        >
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#61a5c2] opacity-5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">

                {/* Section Header */}
                <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16">
                    <div
                        className="inline-flex items-center gap-2 text-[#2a6f97] text-sm font-semibold px-4 py-2 rounded-full mb-4"
                        style={{ backgroundColor: "rgba(42,111,151,0.10)" }}
                    >
                        <i className="ri-question-line"></i>
                        FAQ
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        Frequently Asked{" "}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{
                                backgroundImage: "linear-gradient(to right, #2a6f97, #61a5c2)",
                            }}
                        >
                            Questions
                        </span>
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        Have questions? We have answers. If you need more information,
                        don&apos;t hesitate to contact us directly.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="faq-list flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="faq-item bg-white border rounded-2xl overflow-hidden transition-all duration-300"
                            style={{
                                borderColor:
                                    activeIndex === index
                                        ? "rgba(97,165,194,0.5)"
                                        : "rgba(97,165,194,0.2)",
                            }}
                        >
                            {/* Question */}
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex items-center justify-between gap-4 p-6 text-left transition-all duration-300"
                            >
                                <span
                                    className="font-semibold text-base"
                                    style={{
                                        color: activeIndex === index ? "#2a6f97" : "#1a1a2e",
                                    }}
                                >
                                    {faq.question}
                                </span>
                                <div
                                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                                    style={{
                                        background:
                                            activeIndex === index
                                                ? "linear-gradient(to bottom right, #2a6f97, #61a5c2)"
                                                : "rgba(42,111,151,0.10)",
                                    }}
                                >
                                    <i
                                        className={`${activeIndex === index
                                                ? "ri-subtract-line text-white"
                                                : "ri-add-line text-[#2a6f97]"
                                            } text-sm transition-all duration-300`}
                                    ></i>
                                </div>
                            </button>

                            {/* Answer */}
                            {activeIndex === index && (
                                <div className="px-6 pb-6">
                                    <div
                                        className="w-full h-px mb-4"
                                        style={{ backgroundColor: "rgba(97,165,194,0.2)" }}
                                    />
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <p className="text-gray-500 text-sm mb-4">
                        Still have questions? We are here to help.
                    </p>
                    <a
                        href="#appointment"
                        className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        style={{
                            background: "linear-gradient(to right, #2a6f97, #61a5c2)",
                        }}
                    >
                        <i className="ri-phone-line"></i>
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}