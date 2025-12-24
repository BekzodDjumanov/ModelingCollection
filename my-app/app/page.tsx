"use client";

import { ShinyButton } from "@/components/ui/shining-button";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { ShineBorder } from "@/components/ui/shine-border";
import { MenuIconOnly } from "@/components/ui/skiper-ui/skiper99";
import { DropDown } from "@/components/ui/dropdown";
import { CaseStudyCard } from "@/components/ui/card";
import { FeaturedPublications } from "@/components/ui/publications";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import Link from "next/link";

export default function Home() {
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [renderMenu, setRenderMenu] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      setRenderMenu(true);
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!renderMenu) return;
    if (!overlayRef.current || !panelRef.current) return;

    gsap.set(overlayRef.current, { opacity: 0 });
    gsap.set(panelRef.current, { x: 300, opacity: 0 });

    gsap.to(overlayRef.current, {
      opacity: 1,
      duration: 0.25,
    });

    gsap.to(panelRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.45,
      ease: "power3.out",
    });
  }, [renderMenu]);

  useEffect(() => {
    if (mobileMenuOpen) return;
    if (!overlayRef.current || !panelRef.current) return;

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.25,
    });

    gsap.to(panelRef.current, {
      x: 300,
      opacity: 0,
      duration: 0.35,
      ease: "power3.in",
      onComplete: () => setRenderMenu(false),
    });
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!headerRef.current) return;

    gsap.fromTo(
      headerRef.current,
      { opacity: 0, filter: "blur(10px)", y: -20 },
      { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current.querySelectorAll(".fade-in"),
      { opacity: 0, y: -20, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.2,
      }
    );
  }, []);

  return (
    <div className="flex min-h-screen flex-col gap-8 bg-[#121212] text-[#fff] dark:bg-[#f3f3f3] dark:text-[#0f0f0f]">
      {/* Header */}
      <header
        ref={headerRef}
        className="flex z-50 h-16 items-center justify-between px-6 border-b border-[#1f2227] dark:border-[rgba(123,124,140,0.4)]"
      >
        {/* Left: Logo / Title */}
        <div className="flex items-center gap-4">
          <h1 className="text-sm font-semibold tracking-wide whitespace-nowrap">
            <ShinyButton>
              <span>Modeling Collection</span>
            </ShinyButton>
          </h1>
          {/*<DropDown /> */}
        </div>

        {/* Right: Full menu for medium+ screens */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/newsletter">
            <div className="relative px-4 py-1.5 rounded-md text-sm transition-all duration-500 ease-out font-medium uppercase tracking-[0.1em] bg-[#0f0f0f]/30 border border-red-900 shadow-[0_8px_20px_rgba(0,0,0,0.6)] dark: bg-[#1A1A1A] dark: text-[#fff] dark: border dark:border-black hover:-translate-y-1 hover:bg-white hover:text-black hover:border-white dark:hover:border-white">
              <p className="relative z-10">Newsletter</p>
            </div>
          </Link>

          <Link
            href="/contact"
            className="
            rounded-md px-4 py-1.5 text-sm font-medium uppercase tracking-[0.1em]
            text-gray-200 bg-[rgba(50,50,50,0.3)] 
            border border-[rgba(255,255,255,0.15)] 
            backdrop-blur-sm
            shadow-[0_4px_8px_rgba(0,0,0,0.6)]
            transition-all duration-500 ease-out
            hover:-translate-y-1 hover:bg-white hover:text-black
            dark:bg-[#1A1A1A] dark:text-white dark:border-none dark:hover:bg-gray-100 dark:hover:text-black
        "
          >
            Contact
          </Link>

          <AnimatedThemeToggler className="cursor-pointer" />
        </div>

        {/* Right: Menu icon for small screens */}
        <div className="md:hidden">
          <div
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="cursor-pointer"
          >
            <MenuIconOnly />
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}

      {renderMenu && (
        <>
          <div
            ref={overlayRef}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          <div
            ref={panelRef}
            className="md:hidden fixed top-16 right-0 w-64 h-screen bg-black/90 backdrop-blur-md p-6 flex flex-col gap-4 z-50 dark:bg-white"
          >
            <Link href="/newsletter">
              <div className="relative px-4 py-2 rounded-md text-sm font-medium border border-[rgba(255,255,255,0.1)] bg-[rgba(15,15,15,0.3)] shadow-md transition-all duration-500 ease-out dark: bg-black text-white dark:hover:bg-gray-100 dark:hover:text-black hover:border-white">
                Newsletter
              </div>
            </Link>
            <Link href="/contact">
              <div className="relative px-4 py-2 rounded-md text-sm font-medium border border-[rgba(255,255,255,0.1)] bg-[rgba(15,15,15,0.3)] shadow-md transition-all duration-500 ease-out dark: bg-black text-white dark:border-[rgba(255,255,255,0.25)] dark:hover:bg-gray-100 dark:hover:text-black hover:border-white">
                Contact
              </div>
            </Link>
          </div>
        </>
      )}

      {/* Main */}
      <main
        ref={containerRef}
        className="flex-1 flex flex-col items-center gap-5 mt-5 px-4 py-1 m-auto"
      >
        <div className="fade-in text-xl text-center uppercase tracking-[0.1em]">
          Featured Publications
        </div>
        <div ref={containerRef} className="fade-in relative w-1/2 h-px -mt-3">
          {/* 1. The Main Line: Using a vibrant Red-Rose (oklch or hex equivalent) */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,45,85,0.4)] to-transparent" />

          {/* 2. The Secondary Glow: Adds depth to the "platform" look */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,45,85,0.2)] to-transparent blur-[2px]" />

          {/* 3. The Highlight: A tiny 1px spark in the center */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,100,130,0.8)] to-transparent" />
        </div>

        <div className="fade-in text-sm text-zinc-400 -mt-3 uppercase tracking-[0.1em]">
          A list of equity reports
        </div>

        {/*
        <section
          ref={containerRef}
          className="fade-in w-full max-w-5xl mx-auto px-6 py-20 -mt-17.5"
        >
          <div className="flex flex-col gap-12">
            <div className="case-card">
              <CaseStudyCard
                title="Abercrombie & Fitch"
                imageUrl="/images/abercrombie.jpg"
                details={[
                  "3-statement model",
                  "Revenue Forecasting",
                  "Scenario analysis",
                ]}
                modelLink="#"
                companyLink="#"
              />
            </div>

            <div className="case-card">
              <CaseStudyCard
                title="Uber Technologies"
                imageUrl="/images/uber.png"
                details={[
                  "DCF Valuation",
                  "Market Expansion Analysis",
                  "Cost Structure Modeling",
                ]}
                modelLink="#"
                companyLink="#"
              />
            </div>
          </div>
        </section> */}

        <div ref={containerRef} className="fade-in">
          <FeaturedPublications></FeaturedPublications>
        </div>
      </main>
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
        © 2025 Boburkhan Djumanov
      </p>
    </div>
  );
}
