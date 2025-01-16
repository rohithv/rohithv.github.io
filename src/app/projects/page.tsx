'use client'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaSort } from 'react-icons/fa'
import { TechLogo } from '@/components/tech-logos'
import { useState, useMemo } from 'react'

type ProjectType = 'research' | 'project'

type Project = {
  title: string
  description: string
  types: ProjectType[]
  technologies: { name: string; useIcon?: boolean }[]
  links: {
    paper?: string
    demo?: string
    github?: string
  }
  highlights: string[]
  order: number
  date: string
}

export default function Projects() {
  const [selectedType, setSelectedType] = useState<'all' | ProjectType>('all')
  const [selectedTech, setSelectedTech] = useState<string>('all')
  const [sortOrder, setSortOrder] = useState<'default' | 'newest'>('default')

  const projects: Project[] = [
    {
      title: "ML-Powered Code Analysis",
      description: "A hybrid solution combining machine learning with practical software engineering to analyze code quality and predict potential bugs.",
      types: ["research", "project"],
      order: 1,
      technologies: [
        { name: "Python", useIcon: true },
        { name: "TensorFlow", useIcon: true },
        { name: "Docker", useIcon: true },
        { name: "FastAPI", useIcon: true },
        { name: "PostgreSQL", useIcon: true }
      ],
      links: {
        paper: "https://paper-link.com",
        demo: "https://demo-link.com",
        github: "https://github.com/..."
      },
      highlights: [
        "Published in International Conference on Software Engineering",
        "Processes 1M+ lines of code daily",
        "Achieved 85% accuracy in bug prediction",
        "Deployed in production at 3 companies"
      ],
      date: "2024-03"
    },
    {
      title: "Distributed Systems Research",
      description: "Novel approach to consensus algorithms in distributed systems, focusing on reducing latency while maintaining consistency.",
      types: ["research"],
      order: 2,
      technologies: [
        { name: "Rust", useIcon: true },
        { name: "Go", useIcon: true },
        { name: "Kubernetes", useIcon: true },
        { name: "Custom Consensus Protocol" }
      ],
      links: {
        paper: "https://paper-link.com",
        github: "https://github.com/..."
      },
      highlights: [
        "Published in SOSP 2023",
        "50% reduction in consensus latency",
        "Implemented proof-of-concept in Rust",
        "Extended Raft protocol"
      ],
      date: "2024-02"
    },
    {
      title: "Cloud-Native Analytics Platform",
      description: "Enterprise-grade analytics platform built with modern cloud technologies, handling real-time data processing at scale.",
      types: ["project"],
      order: 3,
      technologies: [
        { name: "React", useIcon: true },
        { name: "Node.js", useIcon: true },
        { name: "TypeScript", useIcon: true },
        { name: "AWS", useIcon: true },
        { name: "MongoDB", useIcon: true }
      ],
      links: {
        demo: "https://demo-link.com",
        github: "https://github.com/..."
      },
      highlights: [
        "Processes 1TB+ data daily",
        "Serves 100K+ active users",
        "99.99% uptime SLA",
        "Reduced infrastructure costs by 40%"
      ],
      date: "2024-01"
    },
    {
      title: "Quantum Algorithm Optimization",
      description: "Research focused on optimizing quantum algorithms for NISQ-era quantum computers, with practical implementations.",
      types: ["research", "project"],
      order: 4,
      technologies: [
        { name: "Python", useIcon: true },
        { name: "Qiskit", useIcon: true },
        { name: "Julia", useIcon: true },
        { name: "Quantum Circuits" }
      ],
      links: {
        paper: "https://paper-link.com",
        github: "https://github.com/..."
      },
      highlights: [
        "Published in Quantum Information Processing",
        "2x improvement in circuit depth",
        "Implemented on IBM Quantum computers",
        "Novel error mitigation technique"
      ],
      date: "2023-12"
    },
    {
      title: "DevOps Automation Suite",
      description: "Comprehensive DevOps toolchain that automates deployment pipelines and infrastructure management.",
      types: ["project"],
      order: 5,
      technologies: [
        { name: "Python", useIcon: true },
        { name: "Docker", useIcon: true },
        { name: "Kubernetes", useIcon: true },
        { name: "Terraform", useIcon: true },
        { name: "AWS", useIcon: true }
      ],
      links: {
        github: "https://github.com/...",
        demo: "https://demo-link.com"
      },
      highlights: [
        "Reduced deployment time by 80%",
        "Automated 95% of infrastructure tasks",
        "Used by 20+ development teams",
        "Integrated with major CI/CD platforms"
      ],
      date: "2023-11"
    }
  ]

  // Get unique technologies across all projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>()
    projects.forEach(project => {
      project.technologies.forEach(tech => {
        techSet.add(tech.name)
      })
    })
    return ['all', ...Array.from(techSet)].sort()
  }, [projects])

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    return projects
      .filter(project => {
        const typeMatch = selectedType === 'all' || project.types.includes(selectedType)
        const techMatch = selectedTech === 'all' || 
          project.technologies.some(tech => tech.name === selectedTech)
        return typeMatch && techMatch
      })
      .sort((a, b) => {
        if (sortOrder === 'default') {
          return a.order - b.order
        }
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      })
  }, [projects, selectedType, selectedTech, sortOrder])

  const projectTypes = ['all', 'research', 'project'] as const

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
          Projects & Research
        </motion.h1>

        {/* Filter Controls */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="space-x-2">
              <span className="text-sm font-semibold">Type:</span>
              {projectTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors
                    ${selectedType === type 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-700/50 hover:bg-gray-600/50'}`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">Tech:</span>
              <select
                value={selectedTech}
                onChange={(e) => setSelectedTech(e.target.value)}
                className="bg-gray-700/50 text-sm rounded px-2 py-1 outline-none 
                         focus:ring-2 focus:ring-blue-500"
              >
                {allTechnologies.map(tech => (
                  <option key={tech} value={tech}>
                    {tech.charAt(0).toUpperCase() + tech.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">Sort:</span>
              <button
                onClick={() => setSortOrder(prev => 
                  prev === 'default' ? 'newest' : 'default'
                )}
                className="flex items-center gap-1 px-3 py-1 text-sm rounded-full 
                         bg-gray-700/50 hover:bg-gray-600/50 transition-colors"
              >
                <FaSort className="w-3 h-3" />
                {sortOrder === 'default' ? 'Priority' : 'Newest'}
              </button>
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-gray-400">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-lg p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex gap-2">
                      {project.types.map(type => (
                        <span 
                          key={type}
                          className="inline-block px-3 py-1 bg-blue-500/80 rounded-full text-sm"
                        >
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">
                      {new Date(project.date).toLocaleDateString('en-US', { 
                        year: 'numeric',
                        month: 'long'
                      })}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6">{project.description}</p>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3">Technologies Used:</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="group relative"
                    >
                      {tech.useIcon ? (
                        <TechLogo 
                          name={tech.name}
                          size={24}
                          className="cursor-pointer"
                        />
                      ) : (
                        <span className="px-3 py-1 bg-gray-700/50 rounded-full text-sm">
                          {tech.name}
                        </span>
                      )}
                      <span className="opacity-0 group-hover:opacity-100 absolute 
                                     -top-8 left-1/2 -translate-x-1/2 px-2 py-1 
                                     bg-gray-900 text-white text-xs rounded 
                                     whitespace-nowrap transition-opacity">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3">Highlights:</h3>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-auto">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-400 
                             hover:text-blue-300 transition-colors"
                  >
                    <FaGithub className="w-4 h-4" /> View Code
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-400 
                             hover:text-blue-300 transition-colors"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" /> Live Demo
                  </a>
                )}
                {project.links.paper && (
                  <a
                    href={project.links.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-400 
                             hover:text-blue-300 transition-colors"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" /> Read Paper
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 text-gray-400"
          >
            No projects match the selected filters
          </motion.div>
        )}
      </motion.div>
    </div>
  )
} 