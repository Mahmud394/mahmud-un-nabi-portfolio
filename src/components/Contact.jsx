import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send } from 'lucide-react'
import { profile } from '../data/profile.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend is configured yet. Fall back to opening the user's mail client
    // with the message pre-filled, instead of pretending to "send" it.
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject || 'Portfolio contact'
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 px-5 sm:px-8">
      <div className="max-w-content mx-auto grid md:grid-cols-[0.9fr_1.1fr] gap-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-3">Contact</p>
          <h2 className="section-title mb-4">Let&apos;s build something together.</h2>
          <p className="text-muted dark:text-muted-dark leading-relaxed mb-8 max-w-md">
            I&apos;m always interested in discussing software development, innovative ideas,
            research, and collaboration opportunities.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-sm font-medium text-ink dark:text-ink-dark hover:text-accent-dark transition-colors"
            >
              <Mail size={18} /> {profile.email}
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-medium text-ink dark:text-ink-dark hover:text-accent-dark transition-colors"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-medium text-ink dark:text-ink-dark hover:text-accent-dark transition-colors"
            >
              <Github size={18} /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="card p-6 sm:p-8 flex flex-col gap-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="rounded-xl bg-transparent border border-black/15 dark:border-white/15 px-4 py-3 text-sm text-ink dark:text-ink-dark placeholder:text-muted dark:placeholder:text-muted-dark focus:outline-none focus:border-accent-dark"
            />
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="rounded-xl bg-transparent border border-black/15 dark:border-white/15 px-4 py-3 text-sm text-ink dark:text-ink-dark placeholder:text-muted dark:placeholder:text-muted-dark focus:outline-none focus:border-accent-dark"
            />
          </div>
          <input
            required
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="rounded-xl bg-transparent border border-black/15 dark:border-white/15 px-4 py-3 text-sm text-ink dark:text-ink-dark placeholder:text-muted dark:placeholder:text-muted-dark focus:outline-none focus:border-accent-dark"
          />
          <textarea
            required
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows={5}
            className="rounded-xl bg-transparent border border-black/15 dark:border-white/15 px-4 py-3 text-sm text-ink dark:text-ink-dark placeholder:text-muted dark:placeholder:text-muted-dark focus:outline-none focus:border-accent-dark resize-none"
          />

          <button type="submit" className="btn-primary self-start">
            Send Message <Send size={15} />
          </button>

          <p className="text-xs text-muted dark:text-muted-dark">
            {sent
              ? "Your email app should now be open with this message pre-filled — hit send there to reach me."
              : 'This form opens your email client with the message pre-filled; no backend is connected yet.'}
          </p>
        </motion.form>
      </div>
    </section>
  )
}
