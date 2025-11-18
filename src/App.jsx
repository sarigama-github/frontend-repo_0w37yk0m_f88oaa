import React from 'react'
import Hero from './components/Hero'
import Learn from './components/Learn'
import Why from './components/Why'
import Curriculum from './components/Curriculum'
import Founder from './components/Founder'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-white">
      {/* Ambient backdrop layers */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.08),transparent_60%)]" />

      {/* Page */}
      <main className="relative">
        <Hero />
        <Learn />
        <Why />
        <Curriculum />
        <Founder />
        <Testimonials />
        <Pricing />
      </main>

      <Footer />
    </div>
  )
}

export default App
