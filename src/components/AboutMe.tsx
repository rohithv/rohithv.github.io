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
          with academic rigor. I'm always excited to explore new challenges at the
           intersection of research and engineering.
        </p>
        <p className="text-gray-300 leading-relaxed">
        As a seasoned senior software engineer with ~6 years of experience, 
        I am deeply passionate about crafting elegant solutions within the intricate 
        design of software systems and the broader realm of computer science. 
        While some may refer to it simply as system design, for me, it embodies 
        the very essence of what I love - the multifaceted exploration of computer 
        science principles.
        </p>
        <p className="text-gray-300 leading-relaxed">
          My interests span the broad field of systems, driven by a fascination with the
           foundational elements of computing. This passion continually motivates me to explore
            new horizons and push the boundaries of what is possible.
          </p>

        {/* Additional sections */}
        {/* <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Research Interests</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Machine Learning and AI</li>
            <li>Distributed Systems</li>
            <li>Cloud Computing</li>
          </ul>
        </div> */}

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Current Focus</h3>
          <p className="text-gray-300 leading-relaxed">
          Currently, I am embarked on an enriching journey pursuing a Research Master's degree
         in Computer Science, delving deep into cloud computing with a specific focus 
         on serverless computing. This academic pursuit not only fuels my intellectual 
         curiosity but also enhances my practical insights into crafting efficient and 
         scalable solutions for modern-day challenges.
          </p>
        </div>

        <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">Next Steps</h3>
            <p className="text-gray-300 leading-relaxed">
              I am looking for open opportunities where I can apply my blend of industry experience
              and research knowledge to tackle challenging problems in system design and cloud computing.
              I'm interested in roles that allow me to innovate and contribute to cutting-edge solutions
              in distributed systems and modern computing architectures.
            </p>
        </div>

      </div>
    </motion.div>
  )
} 