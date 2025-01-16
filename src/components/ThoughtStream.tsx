'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaPen } from 'react-icons/fa'

type Thought = {
  title: string
  preview: string
  date: string
  status?: 'draft' | 'published'
}

export default function ThoughtStream() {
  const thoughts: Thought[] = [
    {
      title: "Starting My Research Journey",
      preview: "As I begin my masters program...",
      date: "2024-03-20",
      status: 'draft'
    },
    // ... other thoughts
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-gray-800/50 rounded-lg p-6"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Latest Thoughts</h2>
        <Link 
          href="/thoughts" 
          className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          View all
        </Link>
      </div>

      {thoughts.length > 0 ? (
        <div className="space-y-4">
          {thoughts.map((thought, index) => (
            <ThoughtCard 
              key={index}
              {...thought}
            />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 pt-4 border-t border-gray-700"
      >
        <h3 className="text-lg font-semibold mb-3">Coming Soon</h3>
        <div className="space-y-3">
          <UpcomingThought 
            title="Research Insights"
            description="Sharing my experiences and learnings from my current research work"
          />
          <UpcomingThought 
            title="From Industry to Academia"
            description="Reflecting on the transition from software engineering to research"
          />
          <UpcomingThought 
            title="Technology Deep Dives"
            description="Technical discussions on emerging technologies and their impact"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

function ThoughtCard({ title, preview, date, status }: {
  title: string
  preview: string
  date: string
  status?: 'published' | 'draft'
}) {
  return (
    <div className="border-b border-gray-700 pb-4">
      <div className="flex items-center gap-2">
        <h3 className="font-semibold hover:text-blue-400 cursor-pointer">
          {title}
        </h3>
        {status === 'draft' && (
          <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">
            Coming soon
          </span>
        )}
      </div>
      <p className="text-sm text-gray-300 mt-1">{preview}</p>
      <span className="text-xs text-gray-400">{date}</span>
    </div>
  )
}

function EmptyState() {
  return (
    <div className="text-center py-8">
      <FaPen className="w-8 h-8 mx-auto mb-4 text-gray-500" />
      <h3 className="text-lg font-semibold mb-2">No Thoughts Yet</h3>
      <p className="text-sm text-gray-400">
        I'm currently working on my first articles. Stay tuned!
      </p>
    </div>
  )
}

function UpcomingThought({ title, description }: { title: string, description: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="flex items-center gap-2">
        <h4 className="text-sm font-medium text-gray-300 group-hover:text-blue-400 transition-colors">
          {title}
        </h4>
        <span className="text-xs px-2 py-0.5 bg-gray-700/50 text-gray-400 rounded-full">
          Planned
        </span>
      </div>
      <p className="text-xs text-gray-500 mt-1">
        {description}
      </p>
    </div>
  )
} 