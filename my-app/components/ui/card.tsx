"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react"; // Optional: for modern icons

interface CaseStudyCardProps {
  title: string;
  imageUrl: string;
  details: string[];
  modelLink: string;
  companyLink: string;
  year: number; // <-- new
}

export function CaseStudyCard({
  title,
  imageUrl,
  details,
  modelLink,
  companyLink,
}: CaseStudyCardProps) {
  return (
    <div className="group relative flex flex-col md:flex-row rounded-2xl bg-gradient-to-b from-[rgba(30,30,30,0.4)] to-[rgba(10,10,10,0.6)] border border-[rgba(255,255,255,0.08)] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[rgba(255,255,255,0.2)] hover:shadow-[0_20px_80px_rgba(0,0,0,0.6)] dark: bg-[#1b1b1b]">
      {/* Subtle Inner Glow Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Left side: Image Section */}
      <div className="md:w-1/2 p-6 flex flex-col justify-center bg-black/20">
        <div className="relative overflow-hidden rounded-xl bg-black/40 border border-white/5 shadow-2xl">
          <img
            src={imageUrl}
            alt={title}
            className="object-contain w-full h-48 md:h-64 opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
          />
        </div>
      </div>

      {/* Right side: Content Section */}
      <div className="md:w-1/2 p-8 flex flex-col items-start">
        {/* 1. Status Pill - Moved to top for better hierarchy */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[oklch(79.2%_0.209_151.711/0.08)] border border-[oklch(79.2%_0.209_151.711/0.2)] backdrop-blur-md text-[oklch(79.2%_0.209_151.711)] mb-4">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-40"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-current shadow-[0_0_8px_currentColor]"></span>
          </span>
          <span>Complete</span>
        </div>

        {/* 2. Text Content */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h2>
          <ul className="space-y-4">
            {details.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300"
              >
                {/* Modern "Technical" bullet point */}
                <span className="mr-3 h-[1px] w-3 bg-blue-500/50"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Buttons Section */}
        <div className="flex flex-wrap lg:flex-nowrap gap-3 mt-auto w-full">
          <a
            href={modelLink}
            target="_blank"
            className="flex-1 flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold
          text-white bg-blue-600/90 border border-blue-400/20 backdrop-blur-sm
          shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-300
          hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/20 whitespace-nowrap"
          >
            View Model <ArrowUpRight size={16} />
          </a>

          <a
            href={companyLink}
            target="_blank"
            className="flex-1 flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold
          text-gray-200 bg-white/5 border border-white/10 backdrop-blur-sm
          transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black whitespace-nowrap"
          >
            Company <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
