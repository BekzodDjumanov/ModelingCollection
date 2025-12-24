"use client";

import { ShinyButton } from "@/components/ui/shining-button";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { ShineBorder } from "@/components/ui/shine-border";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { MdOutlineArrowBackIos } from "react-icons/md";

export default function Home() {
  return (
    <div
      className="
        flex min-h-screen flex-col 
        font-sans bg-[#121212] text-[#fff]
        dark:bg-white dark:text-black
      "
    >
      <div className="absolute left-10 top-10 group cursor-pointer">
        <div className="flex items-center gap-3 transition-all duration-300">
          <div className="relative flex items-center justify-center">
            <MdOutlineArrowBackIos className="text-sm text-zinc-500 transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-[#FF2D55]" />
          </div>
          <Link href="/">
            <p
              className="
      text-xs font-bold uppercase tracking-[0.3em] 
      text-zinc-400 transition-colors duration-300 
      group-hover:text-white
      dark:text-zinc-600 dark:group-hover:text-black
    "
            >
              Back
            </p>
          </Link>
        </div>
      </div>
      <main className="flex-1 flex flex-col items-center justify-center gap-5 px-4">
        <div className="text-lg uppercase tracking-[0.3em]">Contact</div>
        <div className="w-full max-w-md mx-auto">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-4 group"
          >
            {/* Email Input */}
            {/* Email Input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 ml-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="YOUR@EMAIL.COM"
                className="
      /* Darker than the #121212 bg to create depth */
      bg-black/40 text-white px-4 py-3 text-sm tracking-widest
      border border-white/5 outline-none
      transition-all duration-300
      
      /* Modern Red Focus with a slight outer glow */
      focus:border-[#FF2D55]/60 focus:ring-1 focus:ring-[#FF2D55]/20
      
      /* Placeholder: zinc-500 stands out perfectly against #121212 */
      placeholder:text-zinc-500 placeholder:opacity-100 uppercase
    "
              />
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 ml-1">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="TYPE YOUR MESSAGE HERE..."
                className="
      bg-black/40 text-white px-4 py-3 text-sm tracking-widest
      border border-white/5 outline-none resize-none
      transition-all duration-300
      
      focus:border-[#FF2D55]/60 focus:ring-1 focus:ring-[#FF2D55]/20
      
      placeholder:text-zinc-500 placeholder:opacity-100 uppercase
    "
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="
            w-full py-4 mt-2 text-xs font-bold uppercase tracking-[0.4em]
            bg-white text-black transition-all duration-500
            hover:bg-[#FF2D55] hover:text-white
            active:scale-[0.99] cursor-pointer
          "
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
