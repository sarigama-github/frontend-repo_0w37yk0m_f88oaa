import React from 'react'
import { motion } from 'framer-motion'

export default function Founder() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 p-8 backdrop-blur-2xl"
          >
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[conic-gradient(from_0deg_at_50%_50%,rgba(34,211,238,0.2),transparent,rgba(16,185,129,0.2),transparent,rgba(244,114,182,0.2))] opacity-40 blur-xl" />
            <div className="relative z-10 grid gap-6 md:grid-cols-[120px_1fr]">
              <div className="h-28 w-28 rounded-2xl bg-gradient-to-br from-white/30 to-white/10 ring-1 ring-white/20 backdrop-blur-xl" />
              <div>
                <h3 className="text-2xl font-semibold text-white">Founder</h3>
                <p className="mt-2 text-white/75">A senior engineer and product builder who has led teams shipping AI‑powered products used by millions. Passionate about teaching pragmatic engineering and the craft of polished software.</p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/70">
                  <span className="rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur-xl">Ex‑FAANG</span>
                  <span className="rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur-xl">Founder</span>
                  <span className="rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur-xl">10+ yrs</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
