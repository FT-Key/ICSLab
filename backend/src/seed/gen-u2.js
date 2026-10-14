// Unidad 2: ensamble de material + lectura + ejercicios.
import { buildU2Material } from './gen-u2-material.js'
import { buildU2Lectura } from './gen-u2-lectura.js'
import { buildU2Ejercicio } from './gen-u2-ejercicio.js'

export function buildUnidad2(B) {
  return {
    slug: 'unidad-2-enfoques-y-planificacion',
    title: 'Unidad 2 — Enfoques de desarrollo y planificación',
    subtitle: 'Scrum · Historias de usuario · Estimación · Planes',
    description: 'Unidad completa: material de clase (UT2-P1), lectura (Scrum Guide, Scrum Primer, Kniberg, Cohn y Larman) y ejercicios resueltos (EJT2 Scrum Planning y EJT4 planes de desarrollo y mantenimiento).',
    icon: '2',
    color: '#80A1C1',
    tags: ['unidad-2', 'scrum', 'historias-de-usuario', 'estimacion', 'planificacion'],
    sources: [
      'Material de clase ICS2026_UT2_P1',
      'Ken Schwaber y Jeff Sutherland (2020) Scrum Guide',
      'Peter Deemer et al. (2009) The Scrum Primer v1.1',
      'Henrik Kniberg (2007) Scrum y XP desde las trincheras — Caps. 2, 3 y 4',
      'Mike Cohn (2006) Agile Estimating and Planning — Caps. 1 y 3',
      'Mike Cohn (2004) User Stories Applied — Cap. 2',
      'Craig Larman (2003) UML y Patrones, Ed. 2 — Cap. 2',
      'Ejercicios EJT2 y EJT4 (2026)',
    ],
    sections: [...buildU2Material(B), ...buildU2Lectura(B), ...buildU2Ejercicio(B)],
  }
}
