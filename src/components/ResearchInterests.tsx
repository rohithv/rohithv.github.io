'use client'
import { motion } from 'framer-motion'

export default function ResearchInterests() {
  const interests = [
    {
      title: "Cloud Computing",
      description: "Serverless Computing, Confidential Computing"
    },
    {
      title: "Distributed Systems",
      description: "Scalable and reliable systems, Microservices"
    },
    {
      title: "Operating Systems",
      description: "Virtualization, Containerization, Unikernels"
    },
    // Add more interests
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mt-16"
    >
      <h2 className="text-2xl font-bold mb-6">Research Interests</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {interests.map((interest, index) => (
          <motion.div
            key={interest.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className="bg-gray-800/50 rounded-lg p-6"
          >
            <h3 className="font-semibold mb-2">{interest.title}</h3>
            <p className="text-sm text-gray-300">{interest.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
} 