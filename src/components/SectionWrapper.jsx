import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import BackgroundShapes from './BackgroundShapes'

/**
 * SectionWrapper
 * - Provides per-section theme (color/geometry) and a subtle scroll-linked carry-over effect.
 * - Adds a floating header shadow and preceding-element drift to create storytelling continuity.
 */
export default function SectionWrapper({ id, variant = 'hero', children }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const carryUp = useTransform(scrollYProgress, [0, 1], [0, -80])
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.6])

  return (
    <section ref={ref} id={id} className="relative py-24 sm:py-28">
      {/* Geometric background for this section */}
      <BackgroundShapes variant={variant} />

      {/* Carry-over glow that subtly moves as you leave the section */}
      <motion.div
        aria-hidden
        style={{ y: carryUp, opacity: fade }}
        className="pointer-events-none absolute -top-24 left-1/2 h-40 w-[60%] -translate-x-1/2 rounded-full bg-white/5 blur-3xl"
      />

      {/* Content container */}
      <div className="container relative mx-auto px-6">
        {children}
      </div>
    </section>
  )
}
