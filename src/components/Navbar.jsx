import React, { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-bg/80 dark:bg-bg-dark/80 backdrop-blur-md border-b border-black/5 dark:border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-content mx-auto flex items-center justify-between px-5 sm:px-8 h-16">
        <a href="#home" className="flex items-center gap-1.5 font-extrabold tracking-tight text-lg">
          <span className="text-accent dark:text-accent-dark">&lt;</span>
          <span className="text-ink dark:text-ink-dark">{profile.brand}</span>
          <span className="text-accent dark:text-accent-dark">/&gt;</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-muted dark:text-muted-dark">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-ink dark:hover:text-ink-dark transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="h-9 w-9 flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-ink dark:text-ink-dark hover:border-accent-dark hover:text-accent-dark transition-colors"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden h-9 w-9 flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-ink dark:text-ink-dark"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/5 bg-bg dark:bg-bg-dark">
          <ul className="flex flex-col px-5 py-4 gap-4 text-sm font-medium text-muted dark:text-muted-dark">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block hover:text-ink dark:hover:text-ink-dark"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
