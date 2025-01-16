'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/thoughts", label: "Thoughts" },
    { href: "/projects", label: "Projects & Research" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <div className="h-16" />
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              YN
            </Link>
            
            <div className="hidden md:flex space-x-8">
              {navLinks.map(link => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
          >
            <div className="px-4 py-2">
              {navLinks.map(link => (
                <NavLink 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </>
  )
}

function NavLink({ 
  href, 
  children, 
  onClick 
}: { 
  href: string
  children: React.ReactNode
  onClick?: () => void 
}) {
  return (
    <Link 
      href={href}
      className="block py-2 hover:text-blue-400 transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  )
} 