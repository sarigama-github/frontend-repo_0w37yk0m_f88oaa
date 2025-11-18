import React from 'react'
import { Github, Mail, MapPin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="text-white text-lg font-semibold">Tech Bootcamp</div>
            <p className="mt-2 text-white/70">Futuristic training for ambitious builders.</p>
          </div>
          <div className="text-white/80">
            <div className="font-semibold text-white mb-2">Contact</div>
            <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@bootcamp.dev</div>
            <div className="flex items-center gap-2 mt-1"><MapPin className="h-4 w-4" /> San Francisco • Remote</div>
          </div>
          <div className="flex items-center gap-4 text-white/80">
            <a href="#" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="hover:text-white"><Github className="h-5 w-5" /></a>
          </div>
        </div>
        <div className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} Tech Bootcamp. All rights reserved.</div>
      </div>
    </footer>
  )
}
