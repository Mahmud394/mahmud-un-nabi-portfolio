import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, ArrowUpRight } from 'lucide-react'
import { codingPlatforms } from '../data/research.js'

export default function CompetitiveProgramming() {
  return (
    <section className="py-24 px-5 sm:px-8">
      <div className="max-w-content mx-auto">
        <p className="section-label mb-3">Competitive Programming</p>
        <h2 className="section-title mb-3">Problem solving, in practice</h2>
        <p className="text-muted dark:text-muted-dark max-w-2xl mb-12">
          I practice algorithmic problem-solving regularly. Live stats aren&apos;t pulled in here
          to avoid showing stale or inaccurate numbers — these links go straight to my active
          profiles.
        </p>

        <div className="grid sm:grid-cols-3 gap-5">
          {codingPlatforms.map((p, idx) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="card p-6 group hover:border-accent-dark/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-xl bg-accent-dark/10 flex items-center justify-center text-accent dark:text-accent-dark">
                  <Trophy size={18} />
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-muted dark:text-muted-dark group-hover:text-accent-dark transition-colors"
                />
              </div>
              <p className="mt-4 font-semibold text-ink dark:text-ink-dark">{p.name}</p>
              <p className="text-sm text-muted dark:text-muted-dark">@{p.handle}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
