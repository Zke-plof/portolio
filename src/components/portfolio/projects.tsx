'use client'

import * as React from 'react'
import { ArrowUpRight } from 'lucide-react'

type Project = {
  n: string
  title: string
  kind: string
  year: string
  blurb: string
  stack: string[]
  link?: string
  status: 'live' | 'wip' | 'archived'
}

const projects: Project[] = [
  {
    n: '01',
    title: 'Pluton',
    kind: 'R&D lab — fungal bio-electrochemical systems',
    year: '2026',
    blurb:
      'An early-stage R&D lab researching whether fungal mycelium networks can work as bio-electrochemical systems for cell batteries. Running experiments on electron transfer mechanisms, building test rigs, and documenting everything in public.',
    stack: ['Electrochemistry', 'Mycology', 'R&D'],
    link: 'https://r-d-phi.vercel.app',
    status: 'wip',
  },
  {
    n: '02',
    title: 'Lili Modeler',
    kind: 'Lightweight 3D modeler for engineers',
    year: '2026',
    blurb:
      'An open-source 3D modeling app built with Tauri v2, Rust, and Three.js. ~5MB binary, starts in under a second. Full mesh editing, sculpt mode, boolean operations, physics, and animation — aimed at engineering students who deserve better tools than Blender\'s 200MB.',
    stack: ['Rust', 'Tauri v2', 'Three.js', 'TypeScript'],
    link: 'https://github.com/Zke-plof/lili-modeler',
    status: 'wip',
  },
  {
    n: '03',
    title: 'Server Story Engine',
    kind: 'Minecraft narrative history plugin',
    year: '2026',
    blurb:
      'A Paper plugin that watches what players do and writes it into living history — not logs, actual stories. Tracks wars, economies, and milestones, auto-generates collectible lore books, drops landmarks, and posts events to Discord.',
    stack: ['Java', 'Paper API', 'Maven'],
    link: 'https://github.com/Zke-plof/ServerStoryEngine',
    status: 'live',
  },
  {
    n: '04',
    title: 'Anguard',
    kind: 'Real-time fake player detection',
    year: '2026',
    blurb:
      'A lightweight Paper plugin that detects bots, alt accounts, vote farmers, and AFK grinders in real-time. Four independent detection modules, DiscordSRV integration, live config editing, and zero impact on server TPS.',
    stack: ['Java', 'Paper API', 'DiscordSRV'],
    link: 'https://github.com/Zke-plof/Anguard',
    status: 'live',
  },
  {
    n: '06',
    title: 'MangaLive',
    kind: 'Manga reader web app',
    year: '2025',
    blurb:
      'A MangaDex-style manga reader with a custom UI — search, library, reading modes, and advanced search. Built as a frontend practice project cloning the MangaDex style guide from screenshots.',
    stack: ['React', 'JavaScript', 'SCSS'],
    link: 'https://manga-live.vercel.app',
    status: 'live',
  },
]

const statusLabel: Record<Project['status'], string> = {
  live: 'live',
  wip: 'wip',
  archived: 'archived',
}

export function Projects() {
  const [hovered, setHovered] = React.useState<number | null>(null)

  return (
    <section id="work" className="rule-b">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16 sm:py-24">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-4 mb-12 sm:mb-16">
          <div className="col-span-12 md:col-span-2 font-mono-display text-[10px] uppercase tracking-widest text-muted-foreground">
            §01 / Work
          </div>
          <div className="col-span-12 md:col-span-7">
            <h2 className="font-display text-4xl sm:text-6xl leading-[0.95] tracking-tight">
              Six things I&apos;ve{' '}
              <span className="italic text-muted-foreground">actually shipped</span>,
              <br />
              in roughly the order I&apos;m proud of them.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-3 md:text-right">
            <p className="font-mono-display text-xs text-muted-foreground leading-relaxed mt-2">
              Not every project is here. Some died. Some taught me enough that I deleted them. These are the ones still on the air.
            </p>
          </div>
        </div>

        {/* Projects list */}
        <div className="rule-t">
          {projects.map((p, i) => (
            <a
              key={p.n}
              href={p.link ?? undefined}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`group block rule-b py-7 sm:py-9 transition-colors ${
                hovered === i ? 'bg-foreground/[0.025]' : ''
              }`}
            >
              <div className="grid grid-cols-12 gap-x-4 sm:gap-x-6 items-baseline">
                {/* Number */}
                <div className="col-span-2 sm:col-span-1 font-mono-display text-xs text-muted-foreground">
                  {p.n}
                </div>

                {/* Title + kind */}
                <div className="col-span-10 sm:col-span-4">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h3 className="font-display text-3xl sm:text-5xl leading-none tracking-tight">
                      {p.title}
                    </h3>
                    <span className={`font-mono-display text-[10px] uppercase tracking-widest px-1.5 py-0.5 ${
                      p.status === 'live'
                        ? 'bg-accent text-ink'
                        : 'bg-foreground/10 text-muted-foreground'
                    }`}>
                      {statusLabel[p.status]}
                    </span>
                  </div>
                  <p className="font-mono-display text-xs uppercase tracking-widest text-muted-foreground mt-1.5">
                    {p.kind}
                  </p>
                </div>

                {/* Blurb */}
                <div className="col-span-12 sm:col-span-5 mt-3 sm:mt-0">
                  <p className="font-serif-display text-base sm:text-lg leading-[1.45] text-foreground/85">
                    {p.blurb}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono-display text-[11px] text-muted-foreground">
                    {p.stack.map((s, si) => (
                      <span key={s}>
                        {s}
                        {si < p.stack.length - 1 && <span className="ml-3 text-foreground/20">/</span>}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Year + arrow */}
                <div className="col-span-12 sm:col-span-2 mt-3 sm:mt-0 flex sm:flex-col sm:items-end justify-between sm:justify-start gap-2">
                  <span className="font-mono-display text-xs text-muted-foreground">{p.year}</span>
                  {p.link && (
                    <span className="inline-flex items-center gap-1 font-mono-display text-xs uppercase tracking-widest text-foreground group-hover:text-accent transition-colors">
                      Visit
                      <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-8 font-mono-display text-xs text-muted-foreground">
          Older work (2021–2022) was mostly tutorial follow-alongs and is intentionally not listed.
        </p>
      </div>
    </section>
  )
}
