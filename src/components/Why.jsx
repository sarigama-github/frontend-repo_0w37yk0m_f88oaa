import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, CheckCircle2, Compass, Bolt } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

const points = [
  { icon: ShieldCheck, title: 'Expert Mentorship', desc: 'Direct guidance from senior engineers and AI practitioners.' },
  { icon: CheckCircle2, title: 'Real Projects', desc: 'Build portfolio‑ready apps with production patterns.' },
  { icon: Compass, title: 'Industry Connections', desc: 'Get introductions, feedback and hiring pipelines.' },
  { icon: Bolt, title: 'Fast Learning Cycles', desc: 'Short sprints, immediate feedback, rapid iteration.' },
]

export default function Why() {
  return (
    <SectionWrapper id="why" variant="why">
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Why This Bootcamp</h2>
        <p className="mt-2 text-white/70">A premium experience designed for outcomes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {points.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.05 }}
            className="relative rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl shadow-[0_30px_120px_-30px_rgba(0,0,0,0.6)]"
          >
            {/* Liquid glass ribbon */}
            <div className="pointer-events-none absolute -inset-px rounded-3xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,211,238,0.25),transparent,rgba(244,114,182,0.25),transparent,rgba(16,185,129,0.25))] opacity-40 blur-xl" />
            <div className="relative z-10 flex items-start gap-4">
              <div className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white/90 ring-1 ring-white/20">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-1 text-white/70">{desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
