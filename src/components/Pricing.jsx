import React from 'react'
import { motion } from 'framer-motion'

export default function Pricing() {
  return (
    <section id="apply" className="relative py-24 sm:py-28">
      {/* Thematic geometric background for this section */}
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(16,185,129,0.08),transparent_60%)]" />
      </div>
      <div className="container relative mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Pricing & Enrollment</h2>
          <p className="mt-2 text-white/70">One simple plan. Everything you need.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-2xl"
        >
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(120%_80%_at_0%_20%,rgba(16,185,129,0.25),transparent_40%),radial-gradient(120%_80%_at_100%_100%,rgba(34,211,238,0.2),transparent_40%)]" />
          <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="text-sm uppercase tracking-wider text-white/60">Bootcamp</div>
              <div className="mt-1 text-4xl font-bold text-white">3999 SEK</div>
              <ul className="mt-4 space-y-2 text-white/80">
                {['4-week cohort','Live sessions','1:1 mentorship','Career guidance','Project reviews','Community access'].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-3 md:justify-end">
              <a href="#apply" className="inline-flex items-center justify-center rounded-xl bg-emerald-500/90 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition-all hover:bg-emerald-400 hover:shadow-[0_16px_40px_rgba(16,185,129,0.45)]">Apply Now</a>
              <a href="#apply" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-xl transition-all hover:text-white">Secure Your Spot</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
