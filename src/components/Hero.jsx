import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import BackgroundShapes from './BackgroundShapes'

const Button = ({ children, variant = 'primary', href = '#apply' }) => {
  const base = 'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-0'
  const variants = {
    primary:
      'bg-cyan-500/90 hover:bg-cyan-400 text-white shadow-[0_10px_30px_rgba(34,211,238,0.35)] hover:shadow-[0_16px_40px_rgba(34,211,238,0.45)]',
    glass:
      'bg-white/10 hover:bg-white/20 text-white backdrop-blur-xl border border-white/20',
    outline:
      'border border-white/30 hover:border-white/60 text-white/90 hover:text-white bg-transparent backdrop-blur-xl',
  }
  return (
    <a href={href} className={`${base} ${variants[variant]}`}>{children}</a>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const liftAway = useTransform(scrollYProgress, [0, 1], [0, -120])
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.4])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98])

  return (
    <section ref={ref} className="relative h-[100dvh] w-full overflow-hidden">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Additional geometric accents for section theming */}
      <BackgroundShapes variant="hero" />

      {/* Soft gradient vignettes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-0 right-0 mx-auto h-96 w-[70%] rounded-full bg-gradient-to-r from-cyan-500/15 via-fuchsia-500/10 to-emerald-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto h-[50%] w-[90%] rounded-[4rem] bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <motion.div style={{ y: liftAway, opacity: fade, scale }} className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur-xl"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_4px_rgba(52,211,153,0.45)]" />
              Enrollments Open — Limited Seats
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white drop-shadow-[0_6px_30px_rgba(0,0,0,0.4)]">
              Master AI and Software Engineering
            </h1>

            <p className="mt-5 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl">
              An elite bootcamp built for developers, founders and future tech leaders.
              Learn to design, build and deploy world‑class products—fast.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="primary" href="#apply">Apply Now</Button>
              <Button variant="glass" href="#apply">Secure Your Spot</Button>
              <Button variant="outline" href="#contact">Contact Us</Button>
            </div>

            {/* Micro badges */}
            <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-white/70 sm:flex sm:flex-row sm:items-center sm:gap-6">
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl">Live mentorship</div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl">Real projects</div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl">Career support</div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl">Global network</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
