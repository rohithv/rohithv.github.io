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
          title: "MapReduce: simplified data processing on large clusters",
          authors: "Jeffrey Dean and Sanjay Ghemawat",
          conference: "OSDI",
          year: 2004,
          link: "https://www.usenix.org/legacy/events/osdi04/tech/full_papers/dean/dean.pdf",
          tags: []
        },
        {
          title: "The Google File System",
          authors: "Sanjay Ghemawat, Howard Gobioff, and Shun-Tak Leung",
          conference: "SOSP",
          year: 2003,
          link: "https://static.googleusercontent.com/media/research.google.com/en//archive/gfs-sosp2003.pdf",
          notes: "Foundational paper describing GFS - Google's distributed file system",
          tags: ["distributed-systems", "storage", "google"]
        },
        {
          title: "Dynamo: Amazon's Highly Available Key-value Store",
          authors: "Giuseppe DeCandia, et al.",
          conference: "SOSP",
          year: 2007,
          link: "https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf",
          notes: "Introduces the concept of eventual consistency and influenced many NoSQL databases",
          tags: ["distributed-systems", "databases", "amazon"]
        },
        {
          title: "ZooKeeper: Wait-free coordination for Internet-scale systems",
          authors: "Patrick Hunt, Mahadev Konar, Flavio P. Junqueira, and Benjamin Reed",
          conference: "USENIX ATC",
          year: 2010,
          link: "https://www.usenix.org/legacy/event/atc10/tech/full_papers/Hunt.pdf",
          notes: "Describes the coordination service used by many distributed systems",
          tags: ["distributed-systems", "coordination"]
        },
        {
          title: "Spanner: Google's Globally-Distributed Database",
          authors: "James C. Corbett, et al.",
          conference: "OSDI",
          year: 2012,
          link: "https://static.googleusercontent.com/media/research.google.com/en//archive/spanner-osdi2012.pdf",
          notes: "First globally-distributed database with external consistency guarantees",
          tags: ["distributed-systems", "databases", "google"]
        },
        {
          title: "CRAQ: Chain Replication with Apportioned Queries",
          authors: "Jeff Terrace and Michael J. Freedman",
          conference: "USENIX ATC",
          year: 2009,
          link: "https://www.usenix.org/legacy/event/usenix09/tech/full_papers/terrace/terrace.pdf",
          notes: "Extends chain replication with apportioned queries for improved read throughput while maintaining strong consistency",
          tags: ["distributed-systems", "replication", "consistency"]
        },
        {
          title: "Finding a needle in Haystack: Facebook's photo storage",
          authors: "Doug Beaver, Sanjeev Kumar, Harry C. Li, Jason Sobel, Peter Vajgel",
          conference: "OSDI",
          year: 2010,
          link: "https://www.usenix.org/legacy/event/osdi10/tech/full_papers/Beaver.pdf",
          notes: "Describes Facebook's efficient photo storage system that handles billions of uploads",
          tags: ["distributed-systems", "storage", "facebook"]
        },
        {
          title: "Resilient Distributed Datasets: A Fault-Tolerant Abstraction for In-Memory Cluster Computing",
          authors: "Matei Zaharia, Mosharaf Chowdhury, Tathagata Das, Ankur Dave, Justin Ma, Murphy McCauley, Michael J. Franklin, Scott Shenker, Ion Stoica",
          conference: "NSDI",
          year: 2012,
          link: "https://www.usenix.org/system/files/conference/nsdi12/nsdi12-final138.pdf",
          notes: "Introduces RDDs (Resilient Distributed Datasets) - the core abstraction in Apache Spark that enables efficient fault-tolerant distributed computation",
          tags: ["distributed-systems", "big-data", "apache-spark", "fault-tolerance"]
        },
        {
          title: "Discretized Streams: Fault-Tolerant Streaming Computation at Scale",
          authors: "Matei Zaharia, Tathagata Das, Haoyuan Li, Timothy Hunter, Scott Shenker, Ion Stoica",
          conference: "SOSP",
          year: 2013,
          link: "https://people.csail.mit.edu/matei/papers/2013/sosp_spark_streaming.pdf",
          notes: "Introduces Spark Streaming's micro-batch architecture for scalable stream processing",
          tags: ["distributed-systems", "stream-processing", "apache-spark", "fault-tolerance"]
        },
        {
          title: "TensorFlow: A System for Large-Scale Machine Learning",
          authors: "Martín Abadi, Paul Barham, Jianmin Chen, Zhifeng Chen, Andy Davis, Jeffrey Dean, et al.",
          conference: "OSDI",
          year: 2016,
          link: "https://www.usenix.org/system/files/conference/osdi16/osdi16-abadi.pdf",
          notes: "Describes the architecture and implementation of TensorFlow, Google's distributed system for training and serving machine learning models",
          tags: ["distributed-systems", "machine-learning", "google", "tensorflow"]
        },
        {
          title: "Ray: A Distributed Framework for Emerging AI Applications",
          authors: "Philipp Moritz, Robert Nishihara, Stephanie Wang, Alexey Tumanov, Richard Liaw, Eric Liang, et al.",
          conference: "OSDI",
          year: 2018,
          link: "https://www.usenix.org/system/files/osdi18-moritz.pdf",
          notes: "Introduces Ray, a distributed system designed for emerging AI applications requiring flexible distributed computation",
          tags: ["distributed-systems", "machine-learning", "ray", "reinforcement-learning"]
        },
        {
          title: "A comprehensive study of Convergent and Commutative Replicated Data Types",
          authors: "Marc Shapiro, Nuno Preguiça, Carlos Baquero, Marek Zawirski",
          conference: "INRIA TR",
          year: 2011,
          link: "https://hal.inria.fr/inria-00555588/document",
          notes: "Introduces CRDTs (Conflict-free Replicated Data Types) that guarantee eventual consistency in distributed systems without coordination",
          tags: ["distributed-systems", "crdt", "consistency", "replication"]
        }
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
        {
          title: "Firecracker: Lightweight Virtualization for Serverless Applications",
          authors: "Alexandru Agache, Marc Brooker, Andreea Florescu, et al.",
          conference: "NSDI",
          year: 2020,
          link: "https://www.usenix.org/system/files/nsdi20-paper-agache.pdf",
          notes: "Describes AWS's innovative microVM technology that powers Lambda and Fargate, focusing on fast startup times and security isolation",
          tags: ["serverless", "virtualization", "aws", "microvm"]
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