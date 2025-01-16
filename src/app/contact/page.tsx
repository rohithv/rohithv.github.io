'use client'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  const contacts = [
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rohithvishnumolakala/",
      description: "Connect with me professionally"
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/rohithv",
      description: "Check out my code and projects (Active ones are private)"
    },
    {
      icon: FaEnvelope,
      label: "Email",
      href: "mailto:rohithvishnumolakala@gmail.com",
      description: "Get in touch directly"
    }
  ]

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
          className="text-4xl font-bold mb-8 text-center"
        >
          Let's Connect
        </motion.h1>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center p-6 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <contact.icon className="w-8 h-8 mb-4 text-blue-400" />
                <h2 className="text-xl font-semibold mb-2">{contact.label}</h2>
                <p className="text-sm text-gray-400 text-center">{contact.description}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center text-gray-300"
          >
            <p className="mb-4">
              I'm always open to discussing new opportunities, collaborations, 
              or just having a conversation about technology and research.
            </p>
            <p>
              Based in New Delhi, India
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
} 