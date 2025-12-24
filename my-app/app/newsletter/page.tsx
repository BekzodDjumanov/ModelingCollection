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
        <h2 className="text-xl uppercase tracking-[0.3em]">
          Weekly Newsletter
        </h2>
        <div className="w-full max-w-md mx-auto">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col md:flex-row gap-0 group"
          >
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="
            flex-1 bg-black text-white px-4 py-3 text-sm tracking-widest
            border border-white/20 outline-none
            transition-all duration-300
            /* Red glow only on the border when typing */
            focus:border-[#FF2D55]
            placeholder:text-zinc-600 uppercase
          "
            />

            <button
              type="submit"
              className="
            px-8 py-3 text-sm font-bold uppercase tracking-[0.2em]
            bg-white text-black transition-all duration-300
            hover:bg-[#FF2D55] hover:text-white
            active:opacity-80 cursor-pointer max-md:mt-2
          "
            >
              Join
            </button>
          </form>

          <div
            className="
        w-full h-[1px] mt-2 bg-zinc-800 relative overflow-hidden
      "
          >
            <div
              className="
          absolute inset-0 bg-[#FF2D55] translate-x-[-100%] 
          group-focus-within:translate-x-0 transition-transform duration-700 ease-in-out
        "
            />
          </div>

          <p className="mt-4 text-[10px] text-zinc-500 uppercase tracking-[0.3em] text-center">
            Private & Secure
          </p>
        </div>
      </main>
    </div>
  );
}
