import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Download, ArrowRight, Code2 } from 'lucide-react'
import { profile } from '../data/profile.js'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-5 sm:px-8 overflow-hidden"
    >
      {/* subtle decorative glow */}
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent-dark/10 blur-3xl" />

      <div className="max-w-content mx-auto grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="section-label mb-4"
          >
            {profile.label.toUpperCase()}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
            style={{ fontFamily: "'Sora', 'Inter', sans-serif" }}
          >
            Hi, I&apos;m{' '}
            <span className="text-accent dark:text-accent-dark">Mahmud Un Nabi</span>.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-5 text-lg text-muted dark:text-muted-dark max-w-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-4 text-base leading-relaxed text-muted dark:text-muted-dark max-w-xl"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary">
              Explore My Work <ArrowRight size={16} />
            </a>
            <a href={profile.resumeFile} download className="btn-secondary">
              Download CV <Download size={16} />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted dark:text-muted-dark hover:text-accent-dark transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted dark:text-muted-dark hover:text-accent-dark transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={profile.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="text-muted dark:text-muted-dark hover:text-accent-dark transition-colors text-sm font-semibold"
            >
              LeetCode
            </a>
            <a
              href={profile.social.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Codeforces"
              className="text-muted dark:text-muted-dark hover:text-accent-dark transition-colors"
            >
              <Code2 size={20} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent-dark/20 to-transparent blur-xl" />
          <div className="relative rounded-[1.75rem] border border-black/10 dark:border-white/10 bg-surface dark:bg-surface-dark p-3">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-full aspect-[4/5] object-cover rounded-[1.4rem]"
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.src =
                  'data:image/svg+xml;utf8,' +
                  encodeURIComponent(
                    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500"><rect width="100%" height="100%" fill="#111820"/><text x="50%" y="50%" fill="#A0AAB5" font-family="Inter" font-size="18" text-anchor="middle">Add mahmud.png</text></svg>`
                  )
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
