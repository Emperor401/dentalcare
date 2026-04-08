"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const footerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".footer-col",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 90%",
                    },
                }
            );
        }, footerRef);

        return () => ctx.revert();
    }, []);

    const quickLinks = [
        { label: "Home", href: "#home" },
        { label: "About Us", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Why Choose Us", href: "#whyus" },
        { label: "Testimonials", href: "#testimonials" },
    ];

    const services = [
        "General Dentistry",
        "Cosmetic Dentistry",
        "Dental Implants",
        "Orthodontics",
        "Pediatric Dentistry",
        "Emergency Care",
    ];

    const socials = [
        { icon: "ri-facebook-fill", href: "#", label: "Facebook" },
        { icon: "ri-instagram-line", href: "#", label: "Instagram" },
        { icon: "ri-twitter-fill", href: "#", label: "Twitter" },
        { icon: "ri-linkedin-fill", href: "#", label: "LinkedIn" },
    ];

    return (
        <footer ref={footerRef} className="bg-[#1e4f6f] text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Column 1 — Logo & Description */}
                    <div className="footer-col flex flex-col gap-5 lg:col-span-1">
                        <a href="#home" className="text-2xl font-bold tracking-tight">
                            Ibest{" "}
                            <span className="text-[#61a5c2]">P&C</span>
                        </a>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Providing advanced dental care with compassion since 2019. Your
                            smile is our mission and your comfort is our priority.
                        </p>
                        {/* Social Icons */}
                        <div className="flex items-center gap-3 mt-2">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-9 h-9 bg-white/10 hover:bg-[#61a5c2] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                >
                                    <i className={`${social.icon} text-sm`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2 — Quick Links */}
                    <div className="footer-col flex flex-col gap-5">
                        <h3 className="text-base font-bold text-white tracking-wide">
                            Quick Links
                        </h3>
                        <ul className="flex flex-col gap-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-white/60 hover:text-[#61a5c2] text-sm transition-colors duration-200 flex items-center gap-2"
                                    >
                                        <i className="ri-arrow-right-s-line text-[#61a5c2]"></i>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 — Services */}
                    <div className="footer-col flex flex-col gap-5">
                        <h3 className="text-base font-bold text-white tracking-wide">
                            Our Services
                        </h3>
                        <ul className="flex flex-col gap-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <a
                                        href="#services"
                                        className="text-white/60 hover:text-[#61a5c2] text-sm transition-colors duration-200 flex items-center gap-2"
                                    >
                                        <i className="ri-arrow-right-s-line text-[#61a5c2]"></i>
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 — Contact Info */}
                    <div className="footer-col flex flex-col gap-5">
                        <h3 className="text-base font-bold text-white tracking-wide">
                            Contact Us
                        </h3>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                    <i className="ri-map-pin-line text-[#61a5c2] text-sm"></i>
                                </div>
                                <div>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        123 Dental Street, Victoria Island,
                                        Lagos, Nigeria
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                    <i className="ri-phone-line text-[#61a5c2] text-sm"></i>
                                </div>
                                <a
                                    href="tel:+2341234567890"
                                    className="text-white/60 hover:text-[#61a5c2] text-sm transition-colors duration-200"
                                >
                                    +234 123 456 7890
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                    <i className="ri-mail-line text-[#61a5c2] text-sm"></i>
                                </div>
                                <a
                                    href="mailto:info@ibestdental.com"
                                    className="text-white/60 hover:text-[#61a5c2] text-sm transition-colors duration-200"
                                >
                                    info@ibestdental.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                                    <i className="ri-time-line text-[#61a5c2] text-sm"></i>
                                </div>
                                <div>
                                    <p className="text-white/60 text-sm">Mon - Fri: 8am - 7pm</p>
                                    <p className="text-white/60 text-sm">Sat: 9am - 5pm</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-sm text-center sm:text-left">
                        © 2026 Ibest P&C Dental Care. All rights reserved.
                    </p>
                    <div className="flex items-center gap-5">
                        <a href="#" className="text-white/40 hover:text-white/70 text-sm transition-colors duration-200">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-white/40 hover:text-white/70 text-sm transition-colors duration-200">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}