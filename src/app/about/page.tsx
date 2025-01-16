'use client'
import { motion } from 'framer-motion'
import Journey from '@/components/Journey'
import ResearchInterests from '@/components/ResearchInterests'
import AboutMe from '@/components/AboutMe'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold mb-12"
        >
          About Me
        </motion.h1>

        <div className="space-y-12">
          {/* About and Journey in first row */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AboutMe />
            <Journey showAbout={false} />
          </section>

          {/* Research interests below */}
          <section>
            <ResearchInterests />
          </section>
        </div>
      </motion.div>
    </div>
  )
} 