'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function TypeWriter({ 
  text, 
  className = "",
  delay = 0.05,
  startDelay = 0,
  highlightStart = -1  // Index where highlighting should start
}: { 
  text: string
  className?: string
  delay?: number
  startDelay?: number
  highlightStart?: number
}) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [shouldStart, setShouldStart] = useState(false)

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      setShouldStart(true)
    }, startDelay * 1000)

    return () => clearTimeout(initialDelay)
  }, [startDelay])

  useEffect(() => {
    if (!shouldStart) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, delay * 1000)
      
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, delay, shouldStart])

  if (highlightStart > -1) {
    const beforeHighlight = displayedText.slice(0, highlightStart)
    const highlighted = displayedText.slice(highlightStart)
    
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={className}
      >
        {beforeHighlight}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
          {highlighted}
        </span>
      </motion.span>
    )
  }

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
    >
      {displayedText}
    </motion.span>
  )
} 