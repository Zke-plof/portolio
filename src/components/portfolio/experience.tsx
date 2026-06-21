'use client'

const entries = [
  {
    year: '2026',
    title: 'Open-source maintainer',
    where: 'Nebula UI · self-directed',
    desc: 'Maintaining a small but real component library. Reviewing PRs, writing docs, slowly shipping v2. Mostly answering GitHub issues at 1am.',
  },
  {
    year: '2025',
    title: 'Freelance web developer',
    where: 'self-employed',
    desc: 'Marketing sites and internal tools for indie founders. Five clients so far. I turn down work that smells like a death-march.',
  },
  {
    year: '2024',
    title: 'Frontend intern (remote)',
    where: 'a small Berlin startup',
    desc: 'Three months on their design system. Wrote the migration guide they still link to in onboarding. Learned that ship-cadence matters more than scope.',
  },
  {
    year: '2023',
    title: 'Started taking it seriously',
    where: 'self-taught, evening hours',
    desc: 'Discovered TypeScript. Stopped copy-pasting from tutorials. First open-source PR merged (it was a typo fix; they were kind about it).',
  },
  {
    year: '2022',
    title: 'First line of Python',
    where: 'a bored 14-year-old, midnight',
    desc: 'print("hello world") in a Replit. Everything I&apos;ve done since has been downstream of that evening.',
  },
]

export function Experience() {
  return (
    <section id="experience" className="rule-b">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-12 gap-4 mb-12">
          <div className="col-span-12 md:col-span-2 font-mono-display text-[10px] uppercase tracking-widest text-muted-foreground">
            §04 / Timeline
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="font-display text-4xl sm:text-6xl leading-[0.95] tracking-tight">
              A short, honest{' '}
              <span className="italic text-muted-foreground">history</span>.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-span-10 md:col-start-3">
            <ol className="space-y-0">
              {entries.map((e, i) => (
                <li
                  key={e.year}
                  className={`grid grid-cols-12 gap-x-4 sm:gap-x-6 py-7 ${
                    i !== 0 ? 'rule-t' : ''
                  }`}
                >
                  <div className="col-span-3 sm:col-span-2 font-mono-display text-sm text-muted-foreground">
                    {e.year}
                  </div>
                  <div className="col-span-9 sm:col-span-10">
                    <h3 className="font-display text-2xl sm:text-3xl tracking-tight leading-tight">
                      {e.title}
                    </h3>
                    <p className="font-mono-display text-[11px] uppercase tracking-widest text-accent mt-1 mb-3">
                      {e.where}
                    </p>
                    <p
                      className="font-serif-display text-base sm:text-lg leading-[1.5] text-foreground/85 max-w-2xl"
                      dangerouslySetInnerHTML={{ __html: e.desc }}
                    />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
