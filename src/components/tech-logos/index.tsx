import Image from 'next/image'

// Define the base path for tech logos
const LOGO_BASE_PATH = '/tech-logos'

// Tech logo configuration (removed bg colors)
const techLogos: { [key: string]: { path: string; isExternal?: boolean } } = {
  Python: {
    path: '/python.svg'
  },
  React: {
    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    isExternal: true
  },
  'Node.js': {
    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    isExternal: true
  },
  AWS: {
    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    isExternal: true
  },
  TensorFlow: {
    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    isExternal: true
  },
  JavaScript: {
    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    isExternal: true
  },
  TypeScript: {
    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    isExternal: true
  },
  Docker: {
    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    isExternal: true
  },
  Kubernetes: {
    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    isExternal: true
  },
  PostgreSQL: {
    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    isExternal: true
  },
  MongoDB: {
    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    isExternal: true
  },
  GCP: {
    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    isExternal: true
  },
  Go: {
    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
    isExternal: true
  },
  Rust: {
    path: '/rust.svg',
    isExternal: false
  },
  C: {
    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    isExternal: true
  },
  "C++": {
    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    isExternal: true
  },
  OpenCV: {
    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
    isExternal: true
  },
  Redis: {
    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    isExternal: true
  },
  Jupyter: {
    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
    isExternal: true
  },
  Chrome: {
    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg',
    isExternal: true
  },
  Selenium: {
    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg',
    isExternal: true
  },
  Sklearn: {
    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
    isExternal: true
  },
  Bash: {
    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
    isExternal: true
  },
  Elasticsearch: {
    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg',
    isExternal: true
  },
  Logstash: {
    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/logstash/logstash-original.svg',
    isExternal: true
  },
  Kibana: {
    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kibana/kibana-original.svg',
    isExternal: true
  },
  OpenAI: {
    path: '/openai.webp',
    isExternal: false
  },
  GraphQL: {
    path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    isExternal: true
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

  const fullPath = logoInfo.isExternal ? logoInfo.path : `${LOGO_BASE_PATH}${logoInfo.path}`
  
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