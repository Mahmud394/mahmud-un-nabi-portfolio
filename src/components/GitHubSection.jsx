import React from 'react'
import { motion } from 'framer-motion'
import { Github, FolderGit2, ArrowUpRight } from 'lucide-react'
import { repositories } from '../data/research.js'
import { profile } from '../data/profile.js'

export default function GitHubSection() {
  return (
    <section className="py-24 px-5 sm:px-8">
      <div className="max-w-content mx-auto">
        <p className="section-label mb-3">GitHub</p>
        <h2 className="section-title mb-3">Where the code lives</h2>

        <motion.a
          href={profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className="card mt-8 mb-8 flex items-center justify-between gap-4 p-6 hover:border-accent-dark/50 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-accent-dark/10 flex items-center justify-center text-accent dark:text-accent-dark">
              <Github size={22} />
            </div>
            <div>
              <p className="font-semibold text-ink dark:text-ink-dark">@Mahmud394</p>
              <p className="text-sm text-muted dark:text-muted-dark">View full GitHub profile</p>
            </div>
          </div>
          <ArrowUpRight size={18} className="text-muted dark:text-muted-dark" />
        </motion.a>

        <p className="text-sm font-medium text-ink dark:text-ink-dark mb-4">Repositories</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {repositories.map((repo, idx) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="card p-5 flex items-center gap-3 hover:border-accent-dark/50 transition-colors"
            >
              <FolderGit2
                size={18}
                className="text-accent dark:text-accent-dark shrink-0"
              />
              <span className="text-sm font-medium text-ink dark:text-ink-dark truncate">
                {repo.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
