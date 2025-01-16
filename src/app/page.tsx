'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import TypeWriter from '@/components/TypeWriter'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 md:py-32"
      >
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-40 h-40 md:w-48 md:h-48 flex-shrink-0"
            >
              <div className="rounded-full overflow-hidden border-4 border-blue-500 shadow-lg relative w-full h-full">
                <Image
                  src="/rohith-1.jpeg"
                  alt="Rohith Vishnumolakala"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 160px, 192px"
                  priority
                />
              </div>
              <div className="absolute -inset-4 border-2 border-blue-400/20 rounded-full animate-spin-slow" />
            </motion.div>

            {/* Intro Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center md:text-left"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                <TypeWriter 
                  text="Hello, I'm Rohith Vishnumolakala"
                  delay={0.05}
                  highlightStart={10}
                />
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Exploring the intersection of research and engineering
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link 
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 
                           hover:bg-blue-600 rounded-full font-medium transition-colors"
                >
                  Learn More <FaArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700/50 
                           hover:bg-gray-600/50 rounded-full font-medium transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <Link href="/projects" className="group">
              <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/50 transition-colors">
                <h2 className="text-xl font-semibold mb-2">Projects & Research</h2>
                <p className="text-gray-400 text-sm mb-4">
                  Explore my latest work in research and software development
                </p>
                <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
                  View Portfolio →
                </span>
              </div>
            </Link>

            <Link href="/thoughts" className="group">
              <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/50 transition-colors">
                <h2 className="text-xl font-semibold mb-2">Latest Thoughts</h2>
                <p className="text-gray-400 text-sm mb-4">
                  Read my insights on technology, research, and more
                </p>
                <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
                  Read More →
                </span>
              </div>
            </Link>

            <Link href="/about" className="group">
              <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/50 transition-colors">
                <h2 className="text-xl font-semibold mb-2">About Me</h2>
                <p className="text-gray-400 text-sm mb-4">
                  Learn about my journey, interests, and expertise
                </p>
                <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
                  Know More →
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
} 