import React from 'react'
import { motion } from 'framer-motion'
import { FlaskConical } from 'lucide-react'
import { thesis, researchInterests } from '../data/research.js'

export default function Research() {
  return (
    <section id="research" className="py-24 px-5 sm:px-8">
      <div className="max-w-content mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="card p-7"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-accent-dark/10 flex items-center justify-center text-accent dark:text-accent-dark">
              <FlaskConical size={18} />
            </div>
            <span className="tag">{thesis.status}</span>
          </div>

          <h3 className="text-xl font-semibold text-ink dark:text-ink-dark leading-snug mb-4">
            {thesis.title}
          </h3>

          <p className="text-sm font-medium text-muted dark:text-muted-dark mb-2">
            Research focus
          </p>
          <ul className="grid sm:grid-cols-2 gap-2">
            {thesis.focus.map((f) => (
              <li
                key={f}
                className="text-sm text-muted dark:text-muted-dark flex items-start gap-2"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-dark shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="section-label mb-3">Research</p>
          <h2 className="section-title mb-5">Ongoing thesis &amp; interests</h2>
          <p className="text-muted dark:text-muted-dark leading-relaxed mb-6">
            My undergraduate thesis looks at what drives Software Engineering students to adopt
            DevOps practices, using survey data and an explainable machine learning approach so
            the predictions stay interpretable rather than being a black box.
          </p>

          <p className="text-sm font-medium text-ink dark:text-ink-dark mb-3">
            Research interests
          </p>
          <div className="flex flex-wrap gap-2">
            {researchInterests.map((r) => (
              <span key={r} className="tag">
                {r}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
