"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "./page.css";

import HeroSection from "./hero/hero";

export default function SoftwareDevelopment() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const router = useRouter();

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu/dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        !dropdownRef.current?.contains(target) &&
        !document.querySelector(".hamburger")?.contains(target)
      ) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close mobile menu
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <Link href="/">
              <img src="/Ayunextlogo.png" alt="Ayunext Logo" />
            </Link>
          </div>

          <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <li>
              <a href="#hero" className="nav-link" onClick={(e) => handleSmoothScroll(e, "hero")}>Home</a>
            </li>
            <li>
              <a href="#about-us" className="nav-link" onClick={(e) => handleSmoothScroll(e, "about-us")}>About Us</a>
            </li>
            <li className="services-nav" ref={dropdownRef}>
              <button
                className={`nav-link dropdown-arrow ${dropdownOpen ? "open" : ""}`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Services ▼
              </button>
              <div className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
                <a
                  href="/services/software-development"
                  className="dropdown-item"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/services/software-development");
                    setDropdownOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Software Development
                </a>
                <a
                  href="#hero"
                  className="dropdown-item"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("#hero");
                    setDropdownOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Digital Marketing
                </a>
                <a
                  href="/services/financial-services"
                  className="dropdown-item"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/services/financial-services");
                    setDropdownOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Financial Services
                </a>
              </div>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={(e) => handleSmoothScroll(e, "contact")}>Contact</a>
            </li>
          </ul>

          <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <HeroSection />
    </>
  );
}
