import React from 'react'
import { Github, Linkedin, Code2, ArrowUp } from 'lucide-react'
import { profile } from '../data/profile.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-10 px-5 sm:px-8">
      <div className="max-w-content mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <a href="#home" className="flex items-center justify-center sm:justify-start gap-1.5 font-extrabold tracking-tight text-lg">
            <span className="text-accent dark:text-accent-dark">&lt;</span>
            <span className="text-ink dark:text-ink-dark">{profile.brand}</span>
            <span className="text-accent dark:text-accent-dark">/&gt;</span>
          </a>
          <p className="text-sm text-muted dark:text-muted-dark mt-2">
            Building software. Solving problems. Exploring intelligence.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted dark:text-muted-dark hover:text-accent-dark transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted dark:text-muted-dark hover:text-accent-dark transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.social.codeforces}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Codeforces"
            className="text-muted dark:text-muted-dark hover:text-accent-dark transition-colors"
          >
            <Code2 size={18} />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-xs text-muted dark:text-muted-dark">
            © {year} {profile.name}. All rights reserved.
          </p>
          <a
            href="#home"
            aria-label="Back to top"
            className="h-9 w-9 flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-ink dark:text-ink-dark hover:border-accent-dark hover:text-accent-dark transition-colors"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
