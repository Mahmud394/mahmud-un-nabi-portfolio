import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Layers } from 'lucide-react'
import { projects } from '../data/projects.js'

function ProjectCard({ project, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: idx * 0.05 }}
      className="card p-6 flex flex-col"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="h-10 w-10 rounded-xl bg-accent-dark/10 flex items-center justify-center text-accent dark:text-accent-dark">
          <Layers size={18} />
        </div>
        <span className="tag">{project.tag}</span>
      </div>

      <h3 className="font-semibold text-lg text-ink dark:text-ink-dark mb-2">
        {project.title}
      </h3>
      <p className="text-sm text-muted dark:text-muted-dark leading-relaxed mb-4">
        {project.description}
      </p>

      {project.features.length > 0 && (
        <ul className="text-sm text-muted dark:text-muted-dark space-y-1.5 mb-4 list-disc list-inside">
          {project.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2 mb-5 mt-auto">
        {project.tech.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-black/10 dark:border-white/10">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink dark:text-ink-dark hover:text-accent-dark transition-colors"
          >
            <Github size={16} /> Code
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted/50 dark:text-muted-dark/50 cursor-not-allowed">
            <Github size={16} /> Repository not public
          </span>
        )}

        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink dark:text-ink-dark hover:text-accent-dark transition-colors"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        ) : null}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-5 sm:px-8">
      <div className="max-w-content mx-auto">
        <p className="section-label mb-3">Projects</p>
        <h2 className="section-title mb-3">Featured work</h2>
        <p className="text-muted dark:text-muted-dark max-w-2xl mb-12">
          A selection of academic and personal projects. Where a repository isn&apos;t public
          yet, the button is disabled rather than linking anywhere fake.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <ProjectCard key={p.id} project={p} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
