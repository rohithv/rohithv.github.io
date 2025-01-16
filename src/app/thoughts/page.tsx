'use client'
import { motion } from 'framer-motion'
import { FaClock, FaTag } from 'react-icons/fa'

export default function Thoughts() {
  const thoughts = [
    {
      title: "Starting My Research Journey",
      preview: "As I begin my masters program, I'm excited to share my experiences and insights...",
      date: "2024-03-20",
      tags: ["Research", "Academia"],
      status: 'draft'
    },
    // Add more thoughts here
  ]

  const categories = ["All", "Research", "Technology", "Career", "Academia"]

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
          className="text-4xl font-bold mb-8"
        >
          Thoughts & Insights
        </motion.h1>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 
                          transition-colors text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Thoughts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {thoughts.map((thought, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/50 
                        transition-colors cursor-pointer"
            >
              {thought.status === 'draft' && (
                <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 
                              rounded-full mb-2 inline-block">
                  Coming soon
                </span>
              )}
              <h2 className="text-xl font-semibold mb-2">{thought.title}</h2>
              <p className="text-gray-300 text-sm mb-4">{thought.preview}</p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <FaClock className="w-3 h-3" />
                  {thought.date}
                </span>
                <div className="flex items-center gap-1">
                  <FaTag className="w-3 h-3" />
                  {thought.tags.join(", ")}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  )
} 