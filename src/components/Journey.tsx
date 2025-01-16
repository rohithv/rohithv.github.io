'use client'
import { motion } from 'framer-motion'

type RichTextItem = {
  text: string
  url?: string
}

type RichText = (string | RichTextItem)[]

function RichTextDisplay({ content }: { content: RichText }) {
  return (
    <>
      {content.map((item, index) => {
        if (typeof item === 'string') {
          return item
        }
        return (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            {item.text}
          </a>
        )
      })}
    </>
  )
}

function TimelineItem({ 
  year, 
  title, 
  organization,
  organizationUrl,
  description, 
  highlights 
}: {
  year: string
  title: string
  organization: string
  organizationUrl: string
  description: RichText
  highlights?: RichText[]
}) {
  return (
    <div className="relative pl-6 lg:pl-8 border-l border-gray-600">
      <span className="absolute left-0 -translate-x-1/2 w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-blue-500" />
      <h3 className="text-sm text-gray-400">{year}</h3>
      <h4 className="font-semibold text-sm lg:text-base">{title}</h4>
      <a 
        href={organizationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 text-xs lg:text-sm mb-1 hover:text-blue-300 transition-colors inline-block"
      >
        {organization}
      </a>
      <p className="text-xs lg:text-sm text-gray-300 mb-2">
        <RichTextDisplay content={description} />
      </p>
      {highlights && (
        <ul className="text-xs lg:text-sm text-gray-400 list-disc list-inside space-y-1">
          {highlights.map((highlight, index) => (
            <li key={index}>
              <RichTextDisplay content={highlight} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Journey() {
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
          title="Master of Science (Research) in Computer Science"
          organization="Indian Institute of Technology Delhi"
          organizationUrl="https://home.iitd.ac.in/"
          description={[
            "Exploring cutting-edge technologies and conducting research in Serverless Computing."
          ]}
          highlights={[
            ["Working at the intersection of Serverles computing, Virtualization, Operating Systems and Confidential Computing ",
                "under the guidance of ",
                {text: "Prof. Abhilash Jindal.", url: "https://abhilash-jindal.com/"}
            ],
            ["Teaching Assistant for ",
                { text: "Cloud Computing", url: "https://abhilash-jindal.com/teaching/2024-1-col-733/" },
                ", Operating Systems (",
                {text: "link1 ", url: "https://abhilash-jindal.com/teaching/2023-2-col-331/"},
                {text: "link2", url: "https://www.cse.iitd.ac.in/~srsarangi/courses/2023/col_331_2023/index.html"},
                "), ",
                {text: "Software Systems Lab", url: "https://www.cse.iitd.ac.in/~srsarangi/courses/2023/cop_701_2023/index.html"},
                " and ",
                {text: "Advanced Distributed Systems (NPTEL)", url: "https://nptel.ac.in/courses/106102237"}
            ]
          ]}
        />
        
        <TimelineItem 
          year="2022 - 2023"
          title="Software Engineer - III"
          organization="Cisco"
          organizationUrl="https://www.cisco.com/"
          description={[
            "Had a brief yet impactful stint, where I guided juniors and made meaningful contributions, before transitioning to the next chapter of my career."
          ]}
          highlights={[
            ["Identified and exported critical functionality metrics to Prometheus to monitor a microservice performance and scalability while developing multiple Grafana dashboards for real-time, actionable insights"]
          ]}
        />

        <TimelineItem 
          year="2021 - 2022"
          title="Software Engineer - II"
          organization="Cisco"
          organizationUrl="https://www.cisco.com/"
          description={[
            "Earned a promotion to the Nexus Insights team, where I demonstrated extreme ownership by taking charge of multiple critical modules and contributing significantly to its SaaS transformation."
          ]}
          highlights={[
            ["Designed and developed a scalable distributed microservice in Go for Nexus Cloud, and a scheduling framework for dynamic Kubernetes job allocation, horizontal scaling, and tenant isolation"],
            ["Revitalized a legacy module by adding features, automating tests to reduce bugs by 90%, and contributing to the successful unification of two offerings into a major release"]
          ]}
        />

        <TimelineItem 
          year="2019 - 2021"
          title="Software Engineer - I"
          organization="Cisco"
          organizationUrl="https://www.cisco.com/"
          description={[
            "Joined the Cisco ACI team fresh out of college and quickly took on challenging responsibilities."
          ]}
          highlights={[
            ["Enhanced the statistics module in ACI by adding support for 400G switches."],
            ["Augmented L4-L7 service features in ACI Remote Leaf to minimize downtime and improve reliability."]
          ]}
        />

        <TimelineItem 
          year="2015 - 2019"
          title="Bachelor of Technology in Computer Science"
          organization="National Institute of Technology Calicut"
          organizationUrl="https://www.nitc.ac.in/"
          description={[
            "Developed a deep fascination for Computer Science and Systems."
          ]}
          highlights={[
            ["Acted as the voice for ~150 students as the class representative"],
            [
              "Oversaw the ",
              { text: "eXpOS project", url: "https://exposnitc.github.io" },
              ", integral to the OS labs at NIT Calicut and IIT Palakkad, as Maintainer in 2018"
            ]
          ]}
        />
      </div>
    </motion.div>
  )
} 