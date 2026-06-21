'use client'

import * as React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'

export function Contact() {
  const { toast } = useToast()
  const [sending, setSending] = React.useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    await new Promise((r) => setTimeout(r, 700))
    setSending(false)
    toast({
      title: 'Got it.',
      description: 'I usually reply within a day. Sometimes two.',
    })
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section id="contact" className="rule-b">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-12 gap-4 mb-12">
          <div className="col-span-12 md:col-span-2 font-mono-display text-[10px] uppercase tracking-widest text-muted-foreground">
            §05 / Contact
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.92] tracking-tight">
              Write me an{' '}
              <span className="marker-solid">email.</span>
              <br />
              <span className="italic text-muted-foreground">I read all of them.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-12 mt-10">
          {/* Left: contact options */}
          <div className="col-span-12 md:col-span-5">
            <p className="font-serif-display text-lg sm:text-xl leading-[1.5] text-foreground/85 max-w-md">
              Freelance slots open for Spring 2026. Open to collaborations, internships,
              and interesting side-quests. No brief too weird. I&apos;m eighteen —
              I&apos;ll probably say yes.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:hello@zkeplof.dev"
                className="group flex items-baseline justify-between rule-b pb-3"
              >
                <span className="font-mono-display text-[10px] uppercase tracking-widest text-muted-foreground">
                  Email
                </span>
                <span className="font-display text-2xl sm:text-3xl group-hover:text-accent transition-colors">
                  hello@zkeplof.dev
                </span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between rule-b pb-3"
              >
                <span className="font-mono-display text-[10px] uppercase tracking-widest text-muted-foreground">
                  GitHub
                </span>
                <span className="font-display text-2xl sm:text-3xl inline-flex items-center gap-1.5 group-hover:text-accent transition-colors">
                  @zkeplof
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between rule-b pb-3"
              >
                <span className="font-mono-display text-[10px] uppercase tracking-widest text-muted-foreground">
                  Twitter
                </span>
                <span className="font-display text-2xl sm:text-3xl inline-flex items-center gap-1.5 group-hover:text-accent transition-colors">
                  @zkeplof
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </a>
              <div className="flex items-baseline justify-between pb-3">
                <span className="font-mono-display text-[10px] uppercase tracking-widest text-muted-foreground">
                  Location
                </span>
                <span className="font-display text-2xl sm:text-3xl">Berlin, DE</span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={onSubmit}
            className="col-span-12 md:col-span-6 md:col-start-7 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block font-mono-display text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  Your name
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Jane Q."
                  className="bg-transparent border-0 border-b rounded-none px-0 h-10 focus-visible:ring-0 focus-visible:border-accent text-lg font-serif-display"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-mono-display text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  Your email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@domain.com"
                  className="bg-transparent border-0 border-b rounded-none px-0 h-10 focus-visible:ring-0 focus-visible:border-accent text-lg font-serif-display"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block font-mono-display text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                What&apos;s it about
              </label>
              <Input
                id="subject"
                name="subject"
                required
                placeholder="A freelance gig / a collab / just hi"
                className="bg-transparent border-0 border-b rounded-none px-0 h-10 focus-visible:ring-0 focus-visible:border-accent text-lg font-serif-display"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-mono-display text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                The actual message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell me about it. Plain words are fine."
                className="bg-transparent border-0 border-b rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent text-lg font-serif-display resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="font-mono-display text-[10px] uppercase tracking-widest text-muted-foreground">
                Plain text only · no attachments
              </span>
              <Button
                type="submit"
                disabled={sending}
                className="rounded-none bg-foreground text-background hover:bg-accent hover:text-ink h-12 px-6 font-mono-display text-xs uppercase tracking-widest disabled:opacity-50"
              >
                {sending ? 'Sending…' : 'Send →'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
