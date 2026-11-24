import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { profile, education } from '../data/profile.js'

export default function About() {
  return (
    <section id="about" className="py-24 px-5 sm:px-8">
      <div className="max-w-content mx-auto grid md:grid-cols-[0.8fr_1fr] gap-12">
        <div>
          <p className="section-label mb-3">About</p>
          <h2 className="section-title">Who I am</h2>

          <div className="mt-6 rounded-2xl border border-black/10 dark:border-white/10 bg-surface dark:bg-surface-dark p-5">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 shrink-0 rounded-xl bg-accent-dark/10 flex items-center justify-center text-accent dark:text-accent-dark">
                <GraduationCap size={20} />
              </div>
              <div>
                <p className="font-semibold text-ink dark:text-ink-dark">
                  {education.institution}
                </p>
                <p className="text-sm text-muted dark:text-muted-dark mt-1">
                  {education.degree} · Major in {education.major}
                </p>
                <p className="text-sm text-muted dark:text-muted-dark">
                  Department of {education.department}, {education.country}
                </p>
              </div>
            </div>
          </div>

          <img
            src={profile.photo}
            alt={profile.name}
            className="hidden md:block mt-6 w-full aspect-[16/10] object-cover rounded-2xl border border-black/10 dark:border-white/10"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-5 text-base leading-relaxed text-muted dark:text-muted-dark"
        >
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
