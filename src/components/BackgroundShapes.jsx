import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * BackgroundShapes
 * A lightweight, themeable pseudo-3D geometric field that reacts to scroll.
 * - No external assets
 * - Uses blur, gradients, perspective hints and parallax to simulate depth
 * - Different geometry per section to create a storytelling vibe
 */
export default function BackgroundShapes({ variant = 'hero' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  // Shared transforms
  const yFar = useTransform(scrollYProgress, [0, 1], [0, -80])
  const yNear = useTransform(scrollYProgress, [0, 1], [0, -160])
  const rot = useTransform(scrollYProgress, [0, 1], [0, 40])
  const scalePulse = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.06, 1])

  const variants = {
    hero: {
      a: 'from-cyan-400/40 via-fuchsia-400/30 to-emerald-400/40',
      b: 'from-fuchsia-500/35 to-emerald-400/25',
      c: 'from-cyan-500/30 to-blue-400/20',
      shapes: ['sphere', 'blob', 'ring'],
    },
    learn: {
      a: 'from-indigo-400/40 via-cyan-400/25 to-sky-400/35',
      b: 'from-purple-500/35 to-indigo-400/25',
      c: 'from-sky-500/30 to-cyan-400/20',
      shapes: ['cube', 'sphere', 'pyramid'],
    },
    why: {
      a: 'from-emerald-400/40 via-lime-400/25 to-teal-400/35',
      b: 'from-emerald-500/35 to-teal-400/25',
      c: 'from-lime-400/30 to-emerald-400/20',
      shapes: ['ring', 'cube', 'sphere'],
    },
    curriculum: {
      a: 'from-amber-400/40 via-orange-400/25 to-rose-400/35',
      b: 'from-rose-500/30 to-orange-400/25',
      c: 'from-amber-400/30 to-yellow-400/20',
      shapes: ['pyramid', 'sphere', 'cube'],
    },
    founder: {
      a: 'from-fuchsia-400/40 via-rose-400/25 to-purple-400/35',
      b: 'from-rose-500/30 to-fuchsia-400/25',
      c: 'from-purple-400/30 to-fuchsia-400/20',
      shapes: ['sphere', 'ring', 'cube'],
    },
    testimonials: {
      a: 'from-sky-400/40 via-cyan-400/25 to-blue-400/35',
      b: 'from-cyan-500/30 to-blue-400/25',
      c: 'from-indigo-400/30 to-sky-400/20',
      shapes: ['ring', 'sphere', 'pyramid'],
    },
    pricing: {
      a: 'from-emerald-400/40 via-cyan-400/25 to-teal-400/35',
      b: 'from-cyan-500/30 to-emerald-400/25',
      c: 'from-teal-400/30 to-emerald-400/20',
      shapes: ['cube', 'sphere', 'ring'],
    },
  }[variant]

  const Shape = ({ type, className }) => {
    if (type === 'sphere' || type === 'blob') {
      return (
        <motion.div
          style={{ y: yNear, rotate: rot, scale: scalePulse }}
          className={`pointer-events-none blur-2xl ${className}`}
        >
          <div className={`h-full w-full rounded-full bg-gradient-to-br ${variants.a} opacity-70`} />
        </motion.div>
      )
    }
    if (type === 'cube') {
      return (
        <motion.div style={{ y: yFar, rotate: rot }} className={`pointer-events-none ${className}`}>
          <div className={`h-full w-full rounded-[1.25rem] bg-gradient-to-br ${variants.b} backdrop-blur-xl shadow-[0_30px_120px_-20px_rgba(0,0,0,0.5)]`} />
        </motion.div>
      )
    }
    if (type === 'pyramid') {
      return (
        <motion.div style={{ y: yNear, rotate: rot }} className={`pointer-events-none ${className}`}>
          <div className="relative h-full w-full">
            <div className={`absolute inset-0 [clip-path:polygon(50%_0%,0%_100%,100%_100%)] bg-gradient-to-b ${variants.c} backdrop-blur-xl`} />
            <div className="absolute bottom-[-10%] left-1/2 h-10 w-24 -translate-x-1/2 rounded-full bg-black/40 blur-2xl" />
          </div>
        </motion.div>
      )
    }
    // ring
    return (
      <motion.div style={{ y: yFar, rotate: rot }} className={`pointer-events-none ${className}`}>
        <div className="relative h-full w-full">
          <div className={`absolute inset-0 rounded-full border-8 border-white/10`}/>
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${variants.c} opacity-40 blur-xl`} />
        </div>
      </motion.div>
    )
  }

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Layered shapes positioned for depth and overlap across section boundaries */}
      <Shape type={variants.shapes[0]} className="absolute -top-24 -left-24 h-72 w-72" />
      <Shape type={variants.shapes[1]} className="absolute top-1/3 -right-24 h-64 w-64" />
      <Shape type={variants.shapes[2]} className="absolute bottom-[-80px] left-1/4 h-80 w-80" />
    </div>
  )
}
