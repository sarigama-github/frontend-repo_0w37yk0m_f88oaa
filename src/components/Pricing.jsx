import React from 'react'
import { motion } from 'framer-motion'

const tiers = [
  { name: 'Core', price: '$1,990', features: ['4-week cohort', 'Live sessions', 'Project reviews', 'Community access'] },
  { name: 'Pro', price: '$3,490', features: ['Everything in Core', '1:1 mentorship', 'Career guidance', 'Extra project'] },
  { name: 'Elite', price: '$6,900', features: ['Everything in Pro', 'Personalized roadmap', 'Priority support', 'Founder sessions'] },
]

export default function Pricing() {
  return (
    <section id="apply" className="relative py-24 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Pricing & Enrollment</h2>
          <p className="mt-2 text-white/70">Choose a tier and secure your spot.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="relative rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-2xl"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(120%_80%_at_0%_20%,rgba(34,211,238,0.2),transparent_40%),radial-gradient(120%_80%_at_100%_100%,rgba(244,114,182,0.2),transparent_40%)]" />

              <div className="relative z-10">
                <div className="text-sm text-white/60">{t.name}</div>
                <div className="mt-1 text-3xl font-bold text-white">{t.price}</div>
                <ul className="mt-4 space-y-2 text-white/80">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a href="#apply" className="inline-flex items-center justify-center rounded-xl bg-cyan-500/90 px-4 py-2.5 text-sm font-semibold text-white hover:bg-cyan-400 transition-all shadow-[0_10px_30px_rgba(34,211,238,0.35)]">Apply Now</a>
                  <a href="#apply" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white/90 hover:text-white transition-all backdrop-blur-xl">Secure Your Spot</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
