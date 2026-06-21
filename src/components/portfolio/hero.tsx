'use client'

import Link from 'next/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative rule-b">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-14 sm:pt-20 pb-16 sm:pb-24">
        {/* Top meta line */}
        <div className="grid grid-cols-12 gap-4 font-mono-display text-[10px] uppercase tracking-widest text-muted-foreground mb-10 sm:mb-16">
          <div className="col-span-6 sm:col-span-3">
            <span className="text-foreground">№ 001</span> · Personal site
          </div>
          <div className="hidden sm:block sm:col-span-6 text-center">
            Vol. 04 — Spring 2026
          </div>
          <div className="col-span-6 sm:col-span-3 text-right">
            Berlin / 52.5200°N
          </div>
        </div>

        {/* Big editorial headline */}
        <h1 className="font-display tracking-tight leading-[0.92] text-[clamp(3rem,11vw,11rem)]">
          <span className="block">
            Zke<span className="text-accent mx-[0.15em]">·</span>Plof,
          </span>
          <span className="block italic font-normal text-muted-foreground pl-[6vw] sm:pl-[12vw]">
            eighteen,
          </span>
          <span className="block">
            making <span className="marker-block">software</span>
          </span>
          <span className="block">
            out of <span className="italic">spite</span> &amp; curiosity.
          </span>
        </h1>

        {/* Lead paragraph + side metadata */}
        <div className="mt-12 sm:mt-16 grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 md:col-span-5 lg:col-span-4 md:col-start-7 lg:col-start-8">
            <p className="font-serif-display text-lg sm:text-xl leading-[1.45] text-foreground/90">
              I&apos;m a self-taught developer in Berlin. I write a lot of TypeScript,
              ship too many side-projects, and care more about how things feel than how
              they scale. This site is a portfolio, a notebook, and a small{' '}
              <Link href="#notes" className="marker-solid link-underline">argument</Link>{' '}
              for hand-crafted software.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link
                href="#work"
                className="group inline-flex items-center gap-2 text-sm font-mono-display uppercase tracking-widest"
              >
                <span className="h-px w-6 bg-foreground group-hover:w-10 transition-all" />
                See the work
                <ArrowDown className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="#contact"
                className="text-sm font-mono-display uppercase tracking-widest text-muted-foreground hover:text-foreground transition"
              >
                Or write me <ArrowUpRight className="inline h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Right column index */}
          <div className="col-span-12 md:col-span-3 md:col-start-1 md:row-start-1">
            <div className="font-mono-display text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
              Index
            </div>
            <ol className="space-y-1.5 text-sm">
              <li className="flex justify-between rule-b pb-1.5">
                <span><span className="text-muted-foreground mr-2">01</span>Work</span>
                <span className="text-muted-foreground">06</span>
              </li>
              <li className="flex justify-between rule-b pb-1.5">
                <span><span className="text-muted-foreground mr-2">02</span>About</span>
                <span className="text-muted-foreground">—</span>
              </li>
              <li className="flex justify-between rule-b pb-1.5">
                <span><span className="text-muted-foreground mr-2">03</span>Notes</span>
                <span className="text-muted-foreground">04</span>
              </li>
              <li className="flex justify-between pb-1.5">
                <span><span className="text-muted-foreground mr-2">04</span>Contact</span>
                <span className="text-muted-foreground">—</span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="rule-t bg-foreground text-background overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap py-2.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-6 font-mono-display text-xs uppercase tracking-widest px-3">
              <span>Open to freelance · Spring 2026</span>
              <span className="text-accent">✦</span>
              <span>Replies in &lt; 24h</span>
              <span className="text-accent">✦</span>
              <span>TypeScript · React · Rust</span>
              <span className="text-accent">✦</span>
              <span>Currently building: a synth-driven UI kit</span>
              <span className="text-accent">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
