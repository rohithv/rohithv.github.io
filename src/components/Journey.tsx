'use client'
import { motion } from 'framer-motion'

export default function Journey({ showAbout = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-gray-800/50 rounded-lg p-6 h-full"
    >
      <h2 className="text-2xl font-bold mb-4">My Journey</h2>
      <div className="space-y-6">
        <TimelineItem 
          year="2023 - Present"
          title="Research Masters in Computer Science"
          organization="[Your University Name]"
          description="Exploring cutting-edge technologies and conducting research in [your area]"
          highlights={[
            "Research focus: [Your research area]",
            "Teaching Assistant for [Course name]",
            "Published paper in [Conference/Journal]"
          ]}
        />
        
        <TimelineItem 
          year="2020 - 2023"
          title="Senior Software Engineer"
          organization="[Company Name]"
          description="Led development of scalable solutions and mentored junior developers"
          highlights={[
            "Promoted from Software Engineer in 2022",
            "Led team of 5 developers",
            "Implemented [key project/feature]"
          ]}
        />

        <TimelineItem 
          year="2020"
          title="Software Engineer"
          organization="[Company Name]"
          description="Started as a full-stack developer working on [specific domain]"
          highlights={[
            "Developed [feature/project]",
            "Reduced system latency by [X]%",
            "Collaborated with [teams/departments]"
          ]}
        />
      </div>

      {showAbout && (
        <div className="mt-8 pt-6 border-t border-gray-700">
          <h3 className="text-xl font-semibold mb-3">About Me</h3>
          <p className="text-gray-300 leading-relaxed">
            I'm passionate about leveraging technology to solve complex problems. 
            With a background in software engineering and current focus on research, 
            I bring a unique perspective that combines practical industry experience 
            with academic rigor. I'm particularly interested in [specific interests/technologies], 
            and I'm always excited to explore new challenges at the intersection of 
            research and engineering.
          </p>
        </div>
      )}
    </motion.div>
  )
}

function TimelineItem({ 
  year, 
  title, 
  organization,
  description, 
  highlights 
}: {
  year: string
  title: string
  organization: string
  description: string
  highlights?: string[]
}) {
  return (
    <div className="relative pl-6 lg:pl-8 border-l border-gray-600">
      <span className="absolute left-0 -translate-x-1/2 w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-blue-500" />
      <h3 className="text-sm text-gray-400">{year}</h3>
      <h4 className="font-semibold text-sm lg:text-base">{title}</h4>
      <p className="text-blue-400 text-xs lg:text-sm mb-1">{organization}</p>
      <p className="text-xs lg:text-sm text-gray-300 mb-2">{description}</p>
      {highlights && (
        <ul className="text-xs lg:text-sm text-gray-400 list-disc list-inside space-y-1">
          {highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      )}
    </div>
  )
} 