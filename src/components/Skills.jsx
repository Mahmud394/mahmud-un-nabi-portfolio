import React from 'react'
import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-5 sm:px-8">
      <div className="max-w-content mx-auto">
        <p className="section-label mb-3">Skills</p>
        <h2 className="section-title mb-3">What I work with</h2>
        <p className="text-muted dark:text-muted-dark max-w-2xl mb-12">
          A practical toolkit built through coursework, personal projects, and continuous
          self-study — grouped by where I use it.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="card p-6"
            >
              <h3 className="font-semibold text-ink dark:text-ink-dark mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
