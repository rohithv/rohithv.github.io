'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

type Paper = {
  title: string
  authors: string
  conference?: string
  year: number
  link: string
  notes?: string
  tags: string[]
}

type Category = {
  name: string
  description: string
  papers: Paper[]
}

export default function PaperShelf() {
  const categories: Category[] = [
    {
      name: "Distributed Systems",
      description: "Papers about distributed systems, consensus algorithms, and scalable architectures",
      papers: [
        {
          title: "In Search of an Understandable Consensus Algorithm",
          authors: "Diego Ongaro and John Ousterhout",
          conference: "USENIX ATC",
          year: 2014,
          link: "https://raft.github.io/raft.pdf",
          notes: "The Raft consensus algorithm - a more understandable alternative to Paxos",
          tags: ["consensus", "distributed-systems", "raft"]
        },
        {
            title: "Dummy Paper",
            authors: "Dummy Author",
            year: 2025,
            link: "https://dummy.com",
            tags: []
        }
        // Add more papers...
      ]
    },
    {
      name: "Serverless Computing",
      description: "Papers about Serverless computing aka Function-As-S-Service(FAAS)",
      papers: [
        {
          title: "On-demand Container Loading in AWS Lambda",
          authors: "Marc Brooker, Mike Danilov, Chris Greenwood, and Phil Piwonka",
          conference: "USENIX ATC",
          year: 2023,
          link: "https://www.usenix.org/conference/atc23/presentation/brooker",
          tags: ["serverless", "aws-lambda"]
        },
        // Add more papers...
      ]
    },
    // Add more categories...
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Paper Shelf</h1>
            <p className="text-gray-300 mb-4">
              A curated collection of research papers I find fascinating and insightful.
              Each paper has shaped my understanding of various technical domains.
            </p>
            <p className="text-sm text-gray-400">
              Inspired by{' '}
              <Link 
                href="https://arpitbhayani.me/papershelf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Arpit Bhayani's paper collection
              </Link>
            </p>
          </motion.div>

          <div className="space-y-12">
            {categories.map((category, categoryIndex) => (
              <motion.section
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
                <p className="text-gray-400 mb-6">{category.description}</p>
                
                <div className="space-y-6">
                  {category.papers.map((paper, paperIndex) => (
                    <motion.article
                      key={paper.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (categoryIndex * 0.1) + (paperIndex * 0.05) }}
                      className="bg-gray-800/50 rounded-lg p-6"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            <Link
                              href={paper.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-400 transition-colors inline-flex items-center gap-2"
                            >
                              {paper.title}
                              <FaExternalLinkAlt className="w-3 h-3" />
                            </Link>
                          </h3>
                          <p className="text-gray-400 text-sm mb-2">
                            {paper.authors} • {paper.conference && `${paper.conference} `}{paper.year}
                          </p>
                          {paper.notes && (
                            <p className="text-gray-300 text-sm mb-4">{paper.notes}</p>
                          )}
                          <div className="flex flex-wrap gap-2">
                            {paper.tags.map(tag => (
                              <span
                                key={tag}
                                className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
} 