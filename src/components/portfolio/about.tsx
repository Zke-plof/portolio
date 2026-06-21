'use client'

export function About() {
  return (
    <section id="about" className="rule-b bg-foreground text-background">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-12 gap-4 mb-10">
          <div className="col-span-12 md:col-span-2 font-mono-display text-[10px] uppercase tracking-widest text-background/60">
            §02 / About
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="font-display text-4xl sm:text-6xl leading-[0.95] tracking-tight">
              A few honest{' '}
              <span className="italic text-accent">sentences</span>
              <br />
              in place of a bio.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-12 mt-12">
          {/* Left: prose */}
          <div className="col-span-12 md:col-span-7 md:col-start-3">
            <div className="font-serif-display text-xl sm:text-2xl leading-[1.5] space-y-6">
              <p className="dropcap">
                I started writing code when I was fourteen. The first thing I ever shipped was
                a Discord bot that yelled at people for using the wrong channel. It&apos;s still
                running. I&apos;m not sure if that&apos;s embarrassing or charming.
              </p>
              <p>
                Four years later I&apos;ve put twelve things on the internet. Six of them are
                still up. Two of them I&apos;m proud of. The other four taught me more than the
                two did, which is the whole point, I think.
              </p>
              <p>
                I care about interfaces that feel alive, code that ages well, and{' '}
                <span className="marker">documentation that doesn&apos;t lie</span>. I dislike
                dashboards that look like dashboards, frameworks that hide their magic, and
                the word &ldquo;seamless&rdquo;.
              </p>
              <p>
                When I&apos;m not at the keyboard I&apos;m probably skateboarding badly,
                patching a synth in Ableton, or arguing about typography with strangers
                on the internet. I read more fiction than is good for a programmer.
              </p>
            </div>
          </div>
        </div>

        {/* Facts table */}
        <div className="grid grid-cols-12 gap-4 mt-16">
          <div className="col-span-12 md:col-span-2 font-mono-display text-[10px] uppercase tracking-widest text-background/60">
            Facts
          </div>
          <div className="col-span-12 md:col-span-10">
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3 font-mono-display text-sm">
              {[
                ['Born', '2007, summer'],
                ['Based', 'Berlin, DE'],
                ['First language', 'Python 3.9'],
                ['Current language', 'TypeScript'],
                ['Editor', 'Zed (was Neovim)'],
                ['Browser', 'Firefox (yes, really)'],
                ['Coffee', 'filter, no milk'],
                ['Hours of sleep', 'negotiable'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between rule-b py-2">
                  <dt className="text-background/60 uppercase text-[11px] tracking-widest">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
