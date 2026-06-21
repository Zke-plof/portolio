'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Work', href: '#work', n: '01' },
  { label: 'About', href: '#about', n: '02' },
  { label: 'Notes', href: '#notes', n: '03' },
  { label: 'Contact', href: '#contact', n: '04' },
]

export function Navbar() {
  const [open, setOpen] = React.useState(false)
  const [time, setTime] = React.useState('')

  React.useEffect(() => {
    const update = () => {
      const d = new Date()
      const opts: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Europe/Berlin',
      }
      setTime(`${d.toLocaleTimeString('en-GB', opts)} BER`)
    }
    update()
    const t = setInterval(update, 30_000)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md rule-b">
        <nav className="mx-auto max-w-[1400px] px-5 sm:px-8 h-14 flex items-center justify-between">
          <Link href="#top" className="group flex items-baseline gap-2">
            <span className="font-display text-xl leading-none">Zke-Plof</span>
            <span className="hidden sm:inline font-mono-display text-[10px] text-muted-foreground uppercase tracking-widest">
              [est. 2007]
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-baseline gap-1.5 text-sm"
              >
                <span className="font-mono-display text-[10px] text-muted-foreground group-hover:text-accent transition-colors">
                  {item.n}
                </span>
                <span className="link-underline">{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4 font-mono-display text-[10px] uppercase tracking-widest text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {time}
            </span>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid place-items-center h-9 w-9 -mr-2"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {open && (
        <div className="md:hidden fixed inset-x-0 top-14 z-40 bg-background rule-b">
          <div className="px-5 py-4 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 py-3 rule-b last:border-0"
              >
                <span className="font-mono-display text-[10px] text-muted-foreground">{item.n}</span>
                <span className="font-display text-2xl">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
