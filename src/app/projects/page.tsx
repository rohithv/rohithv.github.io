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
    project?: string
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
        title: "OS-less Virtual Machines for Confidential Serverless Applications",
        description: "Introducing OS-less virtual machines to eliminate cold-start latency by removing redundant OS components, while maintaining strong security boundaries.",
        types: ["research"],
        order: 1,
        technologies: [
            { name: "Rust", useIcon: true },
            { name: "TDX", useIcon: false },
            { name: "Linux/KVM", useIcon: false },
            { name: "rust-VMM", useIcon: false },
          ],
        links: {},
        highlights: [
            "Improved resource efficiency",
            "Reduced cold-start latency",
            "Strong security boundaries",
        ],
        date: "2025-05"
    },
    {
        title: "Energy-Efficient Serverless Computing at the Edge",
        description: "Explored energy-efficient serverless computing at the edge, optimizing resource use, and enhancing sustainability and performance of edge systems",
        types: ["research"],
        order: 2,
        technologies: [
            { name: "Rust", useIcon: true },
            { name: "Docker", useIcon: true },
            { name: "Kubernetes", useIcon: true },
            { name: "Python", useIcon: true },
          ],
        links: {},
        highlights: [
            "Characterized energy consumption of edge computing systems",
            "A novel energy-efficient serverless computing framework"
        ],
        date: "2024-10"
    },
    {
        title: "RedBlue Key-Value Store",
        description: "Implemented a Redis-like key-value store with RedBlue consistency, featuring dynamic consistency levels and cluster-based replication.",
        types: ["research", "project"],
        order: 3,
        technologies: [
            { name: "Go", useIcon: true },
            { name: "Redis", useIcon: true },
            { name: "Python", useIcon: true },
            { name: "Docker", useIcon: true },
        ],
        links: {
            paper: "https://paper-link.com",
            github: "https://github.com/satyamjay-iitd/red-blue-consistency"
        },
        highlights: [
            "Up to 8x performance improvement over Redis",
            "Dynamic consistency levels at runtime",
            "Active-active replication",
        ],
        date: "2023-11"
    },
    {
        title: "EVMonitor: Ensuring ethical EV charging",
        description: "A low-cost device with camera-based monitoring and edge analytics to detect misuse of subsidized private EV charging stations without altering existing power meters.",
        types: ["project"],
        order: 3,
        technologies: [
            { name: "Python", useIcon: true },
            { name: "OpenCV", useIcon: true },
            { name: "Jupyter", useIcon: true }
        ],
        links: {},
        highlights: [
            "Computer vision based meter reading detection",
            "Edge analytics to detect misuse",
            "Low-cost embedded device",
            "Edge-cloud continuum based solution",
        ],
        date: "2024-11"
    },
    {
        title: "Cache Timing Attacks",
        description: "Analyzed cache timing attacks on DNS and favicon caching in modern web browsers assessing privacy risks",
        types: ["research", "project"],
        order: 4,
        technologies: [
            { name: "Python", useIcon: true },
            { name: "Selenium", useIcon: true },
            { name: "Chrome", useIcon: true },
            { name: "Sklearn", useIcon: true },
        ],
        links: {
            github: "https://github.com/manishmalik/SIL765-Project"
        },
        highlights: [
            "Developed a classification based machine learning model.",
            "Able to predict the history of the browser with 71% accuracy.",
        ],
        date: "2023-04"
    },
    {
        title: "NITCbase",
        description: "Ideated and developed a single-user Relational Database Management System for educational purposes",
        types: ["project"],
        order: 5,
        technologies: [
            { name: "C++", useIcon: true },
            { name: "C", useIcon: true },
            { name: "Bash", useIcon: true },
        ],
        links: {
            github: "https://github.com/NITCbase",
            project: "https://nitcbase.github.io/"
        },
        highlights: [
            "Used in NIT Calicut’s systems lab by 50 students per semester",
            "Processes SQL-like queries via CLI using relational algebra and index structures",
        ],
        date: "2019-04"
    },
    {
        title: "PTP Troubleshooter",
        description: "Developed a tool to troubleshoot PTP (Precision Time Protocol) issues in network devices",
        types: ["project"],
        order: 6,
        technologies: [
            { name: "Python", useIcon: true },
            { name: "Docker", useIcon: true },
            { name: "Elasticsearch", useIcon: true },
            { name: "Logstash", useIcon: true },
            { name: "Kibana", useIcon: true },
        ],
        links: {},
        highlights: [
            "Collects PTP corrections data from switches, storing in a time series database",
            "Visualises PTP peers across the fabric",
            "Highlights switches exceeding threshold",
        ],
        date: "2018-06"
    },
    {
        title: "MazingDay",
        description: "Led the technical design and development of the core activity recommendation algorithm",
        types: ["project"],
        order: 3,
        technologies: [
            { name: "Python", useIcon: true },
            { name: "Go", useIcon: true },
            { name: "Docker", useIcon: true },
            { name: "Kubernetes", useIcon: true },
            { name: "MongoDB", useIcon: true },
            { name: "GCP", useIcon: true },
            { name: "OpenAI", useIcon: true },
            { name: "GraphQL", useIcon: true },
        ],
        links: {
            project: "https://www.mazingday.com/"
        },
        highlights: [
            "Achieved a 3x speedup by migrating to Go",
            "Transitioned to GCP and serverless MongoDB to improve response time by 15x",
            "Reduced the overall cost by 80%",
            "AI-driven platform for automated image matching",
        ],
        date: "2023-05"
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
                {project.links.project && (
                  <a
                    href={project.links.project}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-400 
                             hover:text-blue-300 transition-colors"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" /> View Project
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