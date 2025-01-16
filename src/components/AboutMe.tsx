'use client'
import { motion } from 'framer-motion'

export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-gray-800/50 rounded-lg p-6"
    >
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          I'm passionate about leveraging technology to solve complex problems. 
          With a background in software engineering and current focus on research, 
          I bring a unique perspective that combines practical industry experience 
          with academic rigor.
        </p>
        <p className="text-gray-300 leading-relaxed">
          I'm particularly interested in [specific interests/technologies], 
          and I'm always excited to explore new challenges at the intersection of 
          research and engineering.
        </p>
        
        {/* Additional sections */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Research Interests</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Machine Learning and AI</li>
            <li>Distributed Systems</li>
            <li>Cloud Computing</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Current Focus</h3>
          <p className="text-gray-300">
            Currently pursuing my Research Masters in Computer Science, 
            focusing on [your specific research area].
          </p>
        </div>
      </div>
    </motion.div>
  )
} 