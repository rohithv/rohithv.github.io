import Image from 'next/image'

// Define the base path for tech logos
const LOGO_BASE_PATH = '/tech-logos'

// Tech logo configuration (removed bg colors)
const techLogos: { [key: string]: { path: string } } = {
  Python: {
    path: '/python.svg'
  },
  React: {
    path: '/react.svg'
  },
  'Node.js': {
    path: '/nodejs.svg'
  },
  AWS: {
    path: '/aws.svg'
  },
  TensorFlow: {
    path: '/tensorflow.svg'
  },
  JavaScript: {
    path: '/javascript.svg'
  },
  TypeScript: {
    path: '/typescript.svg'
  },
  Docker: {
    path: '/docker.svg'
  },
  Kubernetes: {
    path: '/kubernetes.svg'
  },
  PostgreSQL: {
    path: '/postgresql.svg'
  },
  MongoDB: {
    path: '/mongodb.svg'
  }
}

interface TechLogoProps {
  name: string
  size?: number
  className?: string
}

export function TechLogo({ name, size = 20, className = '' }: TechLogoProps) {
  const logoInfo = techLogos[name]
  
  if (!logoInfo) {
    // Smaller fallback for technologies without logos
    return (
      <span className={`inline-block px-2 h-6 leading-6 text-xs rounded bg-gray-700/50 ${className}`}>
        {name}
      </span>
    )
  }

  const fullPath = `${LOGO_BASE_PATH}${logoInfo.path}`
  
  return (
    <div
      className={`relative flex items-center justify-center p-1 
                 transition-transform hover:scale-110 hover:brightness-125 ${className}`}
    >
      <Image
        src={fullPath}
        alt={`${name} logo`}
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  )
} 