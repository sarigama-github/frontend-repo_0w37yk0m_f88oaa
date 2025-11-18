import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Box, Rocket, Layers } from 'lucide-react'

const topics = [
  { icon: Cpu, title: 'AI Engineering', desc: 'LLMs, agents, retrieval, evaluation and production deployment.' },
  { icon: Layers, title: 'Full‑Stack Systems', desc: 'Modern React frontends, FastAPI backends, cloud and databases.' },
  { icon: Rocket, title: 'Product Building', desc: 'Ship ideas from zero to one with design, UX and rapid iteration.' },
  { icon: Box, title: 'Rapid Prototyping', desc: 'Hack fast with high‑impact experiments and micro‑interactions.' },
]

export default function Learn() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="container relative mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What You’ll Learn</h2>
          <p className="mt-2 text-white/70">A focused set of high‑leverage skills to build real products.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="pointer-events-none absolute -top-16 right-[-10%] h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white/90 ring-1 ring-white/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
