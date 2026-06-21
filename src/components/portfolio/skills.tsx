'use client'

export function Skills() {
  return (
    <section id="notes" className="rule-b">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-12 gap-4 mb-10">
          <div className="col-span-12 md:col-span-2 font-mono-display text-[10px] uppercase tracking-widest text-muted-foreground">
            §03 / Tools
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="font-display text-4xl sm:text-6xl leading-[0.95] tracking-tight">
              The honest{' '}
              <span className="italic text-muted-foreground">tool list</span>.
              <br />
              No progress bars. They&apos;d be lying.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-12 mt-14">
          {/* Big prose paragraph with inline tool mentions */}
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <div className="font-serif-display text-xl sm:text-2xl leading-[1.55] text-foreground/90 space-y-6">
              <p>
                I write <span className="marker">TypeScript</span> every day and{' '}
                <span className="marker">JavaScript</span> when I have to. The framework
                I reach for is <span className="marker">Next.js</span>, paired with{' '}
                <span className="marker">Tailwind v4</span> and{' '}
                <span className="marker">Radix</span>. For motion I use Framer Motion,
                though I&apos;m increasingly convinced most sites animate too much.
              </p>
              <p>
                On the back end I&apos;m happy in <span className="marker">Node.js</span> or{' '}
                <span className="marker">Bun</span>, with{' '}
                <span className="marker">Prisma</span> in front of{' '}
                <span className="marker">PostgreSQL</span>. I&apos;ve written enough{' '}
                <span className="marker">Python</span> to be dangerous and enough{' '}
                <span className="marker">Rust</span> to be humble.
              </p>
              <p>
                I design in <span className="marker">Figma</span> before I touch code,
                prototype in <span className="marker">Penpot</span> when I want to feel
                open-source, and ship my own type when the brief earns it. I run{' '}
                <span className="marker">Linux</span> on my laptop,{' '}
                <span className="marker">Docker</span> on the server, and{' '}
                <span className="marker">Git</span> with too many aliases.
              </p>
              <p>
                Things I&apos;m currently learning, badly:{' '}
                <span className="marker">Three.js</span>,{' '}
                <span className="marker">Go</span>, and how to write documentation
                that someone other than me can follow.
              </p>
            </div>
          </div>
        </div>

        {/* Compact grid of "now / next" — small, honest */}
        <div className="grid grid-cols-12 gap-4 mt-20">
          <div className="col-span-12 md:col-span-2 font-mono-display text-[10px] uppercase tracking-widest text-muted-foreground">
            Status
          </div>
          <div className="col-span-12 md:col-span-10 grid sm:grid-cols-3 gap-8">
            <div>
              <div className="font-mono-display text-[10px] uppercase tracking-widest text-accent mb-3">
                Now
              </div>
              <p className="font-serif-display text-lg leading-snug">
                Building a synth-driven UI kit and rewriting my blog for the fourth time.
              </p>
            </div>
            <div>
              <div className="font-mono-display text-[10px] uppercase tracking-widest text-accent mb-3">
                Next
              </div>
              <p className="font-serif-display text-lg leading-snug">
                A small CRDT-based note app. Probably. Or another side-quest. We&apos;ll see.
              </p>
            </div>
            <div>
              <div className="font-mono-display text-[10px] uppercase tracking-widest text-accent mb-3">
                Avoiding
              </div>
              <p className="font-serif-display text-lg leading-snug">
                Anything that ships with &ldquo;AI-powered&rdquo; in the tagline, on principle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
