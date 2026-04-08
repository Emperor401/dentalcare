"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Navbar() {
    const navRef = useRef<HTMLDivElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // GSAP entrance animation
        gsap.fromTo(
            navRef.current,
            { y: -80, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
        );

        // Scroll shrink effect
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Why Us", href: "#whyus" },
        { label: "Testimonials", href: "#testimonials" },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5">
            <div
                ref={navRef}
                className={`flex items-center justify-between bg-white/70 backdrop-blur-lg border border-white/40 shadow-xl rounded-full transition-all duration-300 ${scrolled ? "px-6 py-2 scale-95" : "px-8 py-3"
                    } w-[92%] max-w-5xl`}
            >
                {/* Logo */}
                <a href="#home" className="text-[#2a6f97] font-bold text-lg tracking-tight shrink-0">
                    Ibest <span className="text-[#61a5c2]">P&C</span>
                </a>

                {/* Desktop Nav Links */}
                <nav className="hidden md:flex items-center gap-7">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-gray-600 hover:text-[#2a6f97] transition-colors duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* CTA Button */}
                <a
                    href="#appointment"
                    className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-[#2a6f97] to-[#61a5c2] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 shrink-0"
                >
                    <i className="ri-calendar-line text-base"></i>
                    Book Appointment
                </a>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-[#2a6f97] text-2xl focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <i className={menuOpen ? "ri-close-line" : "ri-menu-3-line"}></i>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-20 w-[92%] max-w-5xl bg-white/90 backdrop-blur-lg border border-white/40 shadow-xl rounded-2xl px-6 py-5 flex flex-col gap-4 md:hidden">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-sm font-medium text-gray-700 hover:text-[#2a6f97] transition-colors duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#appointment"
                        onClick={() => setMenuOpen(false)}
                        className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#2a6f97] to-[#61a5c2] text-white text-sm font-semibold px-5 py-3 rounded-full hover:shadow-lg transition-all duration-300 w-full"
                    >
                        <i className="ri-calendar-line text-base"></i>
                        Book Appointment
                    </a>
                </div>
            )}
        </div>
    );
}