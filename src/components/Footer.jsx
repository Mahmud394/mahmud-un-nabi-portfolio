
import React from 'react'
import {
  Github,
  Linkedin,
  Code2,
  ArrowUp,
  ArrowUpRight,
  Heart,
  Mail,
  MapPin
} from 'lucide-react'
import { profile } from '../data/profile.js'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const socials = [
    {
      icon: Github,
      href: profile.social.github,
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: profile.social.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: Code2,
      href: profile.social.codeforces,
      label: 'Codeforces',
    },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-black/5 dark:border-white/10 bg-white dark:bg-[#080d12]">

      {/* Background Decoration */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-content mx-auto px-5 sm:px-8 pt-16 pb-6">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pb-14">

          {/* Branding */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-1 font-black text-3xl tracking-tighter group"
            >
              <span className="text-cyan-500">&lt;</span>
              <span className="text-ink dark:text-white">
                {profile.brand || 'MAHMUD'}
              </span>
              <span className="text-cyan-500">/&gt;</span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-muted dark:text-gray-400">
              Building meaningful digital experiences through code,
              creativity, and intelligent solutions.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-muted dark:text-gray-400">
                Open to opportunities
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-ink dark:text-white tracking-widest uppercase">
              Navigation
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-muted dark:text-gray-400 hover:text-cyan-500 transition-colors"
                >
                  <span className="w-1 h-1 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-bold text-ink dark:text-white tracking-widest uppercase">
              Let's Connect
            </h3>

            <p className="mt-6 text-sm text-muted dark:text-gray-400 leading-6">
              Have a project idea or an opportunity?
              Feel free to reach out.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:gap-3 transition-all"
            >
              <Mail size={16} />
              {profile.email}
              <ArrowUpRight size={15} />
            </a>

            <div className="flex items-center gap-3 mt-7">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-10 w-10 flex items-center justify-center rounded-xl border border-black/10 dark:border-white/10 text-muted dark:text-gray-400 hover:text-cyan-500 hover:border-cyan-500 hover:bg-cyan-500/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-black/5 dark:border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-5">

          <p className="text-xs text-muted dark:text-gray-500 text-center">
            © {year} {profile.name}. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-muted dark:text-gray-500">
            Crafted with <Heart size={12} className="text-rose-500 fill-rose-500" /> by
            <span className="font-semibold text-ink dark:text-white">
              {profile.name}
            </span>
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="group h-10 w-10 flex items-center justify-center rounded-xl bg-cyan-500 text-[#06131a] hover:bg-cyan-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
          >
            <ArrowUp
              size={18}
              className="group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>

      </div>
    </footer>
  )
}
