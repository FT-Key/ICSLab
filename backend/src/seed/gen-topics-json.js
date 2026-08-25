import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import s1 from './gen-s1.js'
import s2 from './gen-s2.js'
import s3 from './gen-s3.js'
import s4 from './gen-s4.js'
import s5 from './gen-s5.js'
import s6 from './gen-s6.js'
import s7 from './gen-s7.js'
import s8 from './gen-s8.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const topics = [
  {
    slug: 'sommerville-intro',
    title: 'Introduccion a la Ingenieria de Software',
    subtitle: 'Sommerville Cap. 1',
    description: 'Conceptos fundamentales de la ingenieria de software, tipos de software y factores de diseno.',
    icon: 'BookOpen',
    color: '#3B82F6',
    tags: ['sommerville', 'fundamentos', 'introduccion'],
    sources: ['Ian Sommerville - Ingenieria de Software 9a Ed.'],
    sections: [{ title: 'Introduccion a la Ingenieria de Software', blocks: s1 }]
  },
  {
    slug: 'sommerville-procesos',
    title: 'Procesos de Software',
    subtitle: 'Sommerville Cap. 2',
    description: 'Modelos de proceso: cascada, incremental, agil y sus variantes.',
    icon: 'GitBranch',
    color: '#10B981',
    tags: ['sommerville', 'procesos', 'cascada', 'agil'],
    sources: ['Ian Sommerville - Ingenieria de Software 9a Ed.'],
    sections: [{ title: 'Procesos de Software', blocks: s2 }]
  },
  {
    slug: 'sommerville-requerimientos',
    title: 'Requerimientos de Software',
    subtitle: 'Sommerville Cap. 3',
    description: 'Ingenieria de requerimientos: elicitation, analisis, especificacion y validacion.',
    icon: 'FileText',
    color: '#F59E0B',
    tags: ['sommerville', 'requerimientos', 'srs'],
    sources: ['Ian Sommerville - Ingenieria de Software 9a Ed.'],
    sections: [{ title: 'Requerimientos de Software', blocks: s3 }]
  },
  {
    slug: 'pressman-productos',
    title: 'Productos de Software',
    subtitle: 'Pressman Cap. 1',
    description: 'Definicion y tipos de software, caracteristicas y evolucion.',
    icon: 'Package',
    color: '#8B5CF6',
    tags: ['pressman', 'productos', 'tipos'],
    sources: ['Roger S. Pressman - Ingenieria de Software 7a Ed.'],
    sections: [{ title: 'Productos de Software', blocks: s4 }]
  },
  {
    slug: 'pressman-contexto',
    title: 'El Contexto de la Ingenieria de Software',
    subtitle: 'Pressman Cap. 2',
    description: 'Ingenieria de sistemas, ciclo de vida del producto y calidad ISO 25010.',
    icon: 'Layers',
    color: '#EC4899',
    tags: ['pressman', 'contexto', 'calidad', 'iso25010'],
    sources: ['Roger S. Pressman - Ingenieria de Software 7a Ed.'],
    sections: [{ title: 'El Contexto de la Ingenieria de Software', blocks: s5 }]
  },
  {
    slug: 'pressman-modelos',
    title: 'Modelos y Procesos de Software',
    subtitle: 'Pressman Cap. 3',
    description: 'Marco de referencia para modelos de proceso y metodologias agiles.',
    icon: 'Workflow',
    color: '#06B6D4',
    tags: ['pressman', 'modelos', 'procesos', 'agil'],
    sources: ['Roger S. Pressman - Ingenieria de Software 7a Ed.'],
    sections: [{ title: 'Modelos y Procesos de Software', blocks: s6 }]
  },
  {
    slug: 'swebok',
    title: 'Guia SWEBOK v3',
    subtitle: 'IEEE Computer Society',
    description: 'El estandar ISO/IEC TR 19759 que define las 15 areas de conocimiento.',
    icon: 'BookMarked',
    color: '#F97316',
    tags: ['swebok', 'ieee', 'estandar', 'conocimiento'],
    sources: ['IEEE Computer Society - SWEBOK v3'],
    sections: [{ title: 'Guia SWEBOK v3', blocks: s7 }]
  },
  {
    slug: 'conexion-libros',
    title: 'Conectando los Tres Libros',
    subtitle: 'Sommerville+Pressman+SWEBOK',
    description: 'Como las tres fuentes se complementan para formar una vision completa.',
    icon: 'Link',
    color: '#14B8A6',
    tags: ['integracion', 'comparacion', 'swebok'],
    sources: ['Sommerville', 'Pressman', 'SWEBOK'],
    sections: [{ title: 'Conectando los Tres Libros', blocks: s8 }]
  }
]

const outPath = path.resolve(__dirname, './data/topics.json')
writeFileSync(outPath, JSON.stringify(topics, null, 2))
console.log(`Generated ${outPath} with ${topics.length} topics`)
