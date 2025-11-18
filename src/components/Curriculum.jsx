import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Brain, Code2, Cloud, Rocket } from 'lucide-react'

const weeks = [
  { icon: Brain, title: 'Week 1: AI Foundations', desc: 'LLMs, prompts, agents and evaluation.' },
  { icon: Code2, title: 'Week 2: Full‑Stack', desc: 'React, FastAPI, DB, auth and production basics.' },
  { icon: Cloud, title: 'Week 3: Systems', desc: 'APIs, caching, queues, observability.' },
  { icon: Rocket, title: 'Week 4: Ship', desc: 'Product polish, performance, launch playbook.' },
]

export default function Curriculum() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Curriculum Overview</h2>
            <p className="mt-2 text-white/70">A clear progression from fundamentals to launch.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-white/60"><Calendar className="h-5 w-5" /> 4 weeks</div>
        </div>

        <div className="no-scrollbar relative -mx-6 overflow-x-auto px-6">
          <div className="flex min-w-max gap-6">
            {weeks.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="relative h-56 w-[320px] shrink-0 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(120%_80%_at_0%_20%,rgba(34,211,238,0.25),transparent_40%),radial-gradient(120%_80%_at_100%_100%,rgba(244,114,182,0.2),transparent_40%)]" />
                <div className="relative z-10">
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white/90 ring-1 ring-white/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-white/70">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
