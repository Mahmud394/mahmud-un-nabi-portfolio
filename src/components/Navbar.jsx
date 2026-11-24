
import React, { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'
import { profile } from '../data/profile.js'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = links
        .map(link => document.querySelector(link.href))
        .filter(Boolean)

      let current = '#home'

      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 150) {
          current = `#${section.id}`
        }
      })

      setActive(current)
    }

    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = (href) => {
    setOpen(false)
    setActive(href)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <nav
        className={`max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-7 h-[68px] rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'bg-white/75 dark:bg-[#101820]/80 backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-lg shadow-black/5'
            : 'bg-white/40 dark:bg-white/[0.03] backdrop-blur-md border border-black/5 dark:border-white/10'
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={() => closeMenu('#home')}
          className="group flex items-center gap-2"
        >
          <span className="text-2xl font-black tracking-tighter">
            <span className="text-cyan-500">&lt;</span>
            <span className="text-ink dark:text-white">
              {profile.brand || 'MAHMUD'}
            </span>
            <span className="text-cyan-500">/&gt;</span>
          </span>
          <span className="hidden sm:block w-px h-6 bg-black/10 dark:bg-white/15" />
          <span className="hidden sm:block text-[10px] tracking-[0.18em] uppercase text-muted dark:text-gray-400">
            Portfolio
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1 p-1 rounded-xl bg-black/[0.03] dark:bg-white/[0.04]">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => closeMenu(link.href)}
                className={`relative block px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-300 ${
                  active === link.href
                    ? 'bg-white dark:bg-white/10 text-cyan-600 dark:text-cyan-400 shadow-sm'
                    : 'text-muted dark:text-gray-400 hover:text-ink dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="h-10 w-10 flex items-center justify-center rounded-xl border border-black/10 dark:border-white/10 text-ink dark:text-white hover:border-cyan-500 hover:text-cyan-500 hover:bg-cyan-500/5 transition-all duration-300"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <a
            href="#contact"
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#06131a] text-xs font-bold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            Let's Talk
            <ArrowUpRight size={15} />
          </a>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="lg:hidden h-10 w-10 flex items-center justify-center rounded-xl border border-black/10 dark:border-white/10 text-ink dark:text-white hover:border-cyan-500 transition-all"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden max-w-6xl mx-auto mt-2 overflow-hidden transition-all duration-300 ${
          open
            ? 'max-h-[450px] opacity-100 translate-y-0'
            : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="p-3 rounded-2xl bg-white/90 dark:bg-[#101820]/95 backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-xl">
          <ul className="flex flex-col gap-1">
            {links.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => closeMenu(link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    active === link.href
                      ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400'
                      : 'text-muted dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs opacity-40">
                    0{index + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={() => closeMenu('#contact')}
            className="sm:hidden mt-2 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-cyan-500 text-[#06131a] text-sm font-bold"
          >
            Let's Talk <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </header>
  )
}
