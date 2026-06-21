'use client'

import Link from 'next/link'
import { ArrowUp } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-10">
        <div className="grid grid-cols-12 gap-4 items-end">
          <div className="col-span-12 md:col-span-6">
            <div className="font-display text-6xl sm:text-8xl leading-none tracking-tight">
              Zke<span className="text-accent">·</span>Plof
            </div>
            <p className="font-mono-display text-[10px] uppercase tracking-widest text-muted-foreground mt-3">
              Hand-coded · No tracking · No cookies · No newsletter (yet)
            </p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="font-mono-display text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
              This site
            </div>
            <ul className="space-y-1.5 text-sm">
              <li><Link href="#work" className="link-underline">Work</Link></li>
              <li><Link href="#about" className="link-underline">About</Link></li>
              <li><Link href="#notes" className="link-underline">Tools</Link></li>
              <li><Link href="#contact" className="link-underline">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3 md:text-right">
            <div className="font-mono-display text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
              Elsewhere
            </div>
            <ul className="space-y-1.5 text-sm md:flex md:flex-col md:items-end">
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="link-underline">GitHub</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="link-underline">Twitter</a></li>
              <li><a href="mailto:hello@zkeplof.dev" className="link-underline">Email</a></li>
              <li><a href="https://zkeplof.dev/rss.xml" className="link-underline">RSS</a></li>
            </ul>
          </div>
        </div>

        <div className="rule-t mt-10 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono-display text-[10px] uppercase tracking-widest text-muted-foreground">
          <span>© {new Date().getFullYear()} Zke-Plof · Built in Berlin · v4.0</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Last edit: just now
          </span>
          <Link href="#top" className="inline-flex items-center gap-1 hover:text-foreground transition">
            Back to top
            <ArrowUp className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
