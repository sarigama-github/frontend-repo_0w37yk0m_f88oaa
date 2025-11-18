import React from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

const quotes = [
  {
    q: 'The most intense, practical learning sprint I have ever done. I shipped my first AI app in week two.',
    a: 'Product Engineer',
  },
  {
    q: 'Mentorship was world‑class. The small details and polish made my projects stand out to recruiters.',
    a: 'Software Developer',
  },
  {
    q: 'The curriculum is sharp, modern and biased toward shipping. It changed my career trajectory.',
    a: 'Startup Founder',
  },
]

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" variant="testimonials">
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Testimonials</h2>
        <p className="mt-2 text-white/70">Words from builders who leveled up.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quotes.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.06 }}
            className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl shadow-[0_30px_120px_-30px_rgba(0,0,0,0.6)]"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_100%_at_0%_0%,rgba(34,211,238,0.2),transparent_40%)]" />
            <blockquote className="relative z-10 text-white/90">“{t.q}”</blockquote>
            <div className="relative z-10 mt-4 text-sm text-white/60">— {t.a}</div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
