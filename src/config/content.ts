/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  CONTENIDO DEL SITIO — src/config/content.ts                ║
 * ║                                                              ║
 * ║  Todos los textos editables de la web están aquí.           ║
 * ║  Usa {{city}} donde quieras que aparezca la ciudad principal ║
 * ║  (se reemplaza automáticamente en tiempo de build).         ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

export const content = {

  // ── Hero ──────────────────────────────────────────────────────
  hero: {
    eyebrow:     'Empresa especializada en Limpiezas por Incendio en Barcelona',
    h1main:      'Limpiezas por Incendio',
    h1accent:    'en Barcelona y provincia',
    description: 'Sootix es tu solución experta para la recuperación de espacios dañados por fuego en {{city}}. Ofrecemos servicios integrales de limpieza, desodorización y restauración tras incendios, garantizando un ambiente seguro y habitable en todo el Ámbito metropolitano.',
    badge1:      'Presupuesto rápido en 30 minutos',
    badge2:      'Más de 15 años de experiencia en {{city}}',
    badge3:      'Certificado por la Cámara Oficial de Comerciantes',
    badge4:      'Cobertura en toda la provincia de Barcelona',
    cardStat:    '+200',
    cardLabel:   'incendios atendidos en {{city}}',
  },

  // ── Beneficios (6 tarjetas) ────────────────────────────────────
  benefits: [
    {
      icon: 'shield',
      title:       'Seguridad y Protección Integral',
      description: 'Garantizamos la eliminación completa de residuos tóxicos y hollín, protegiendo tu salud y la de tus seres queridos. Cumplimos con todas las normativas de seguridad e higiene en {{city}} y alrededores.',
    },
    {
      icon: 'clock',
      title:       'Rapidez y Eficiencia',
      description: 'Nuestro equipo se moviliza rápidamente para minimizar el tiempo de inactividad, recuperando la normalidad lo antes posible.  Disponemos de equipos especializados para una limpieza rápida y efectiva en toda la zona del Barcelonés.',
    },
    {
      icon: 'check',
      title:       'Calidad Profesional Certificada',
      description: 'Utilizamos productos desinfectantes y descontaminantes homologados por el Ministerio de Sanidad, asegurando resultados impecables.  Contamos con certificación ISO 9001 para garantizar un servicio de limpieza post-incendio de la más alta calidad en {{city}}.',
    },
    {
      icon: 'box',
      title:       'Servicio Completo y Personalizado',
      description: 'Ofrecemos una gama completa de servicios, desde la retirada de escombros hasta la restauración de mobiliario.  Nuestro equipo se desplaza a tu propiedad en {{city}}, Sant Cugat o cualquier otro municipio del Vallès Occidental.',
    },
    {
      icon: 'heart',
      title:       'Atención Humana y Empatía',
      description: 'Entendemos el impacto emocional de un incendio y ofrecemos una atención cercana, profesional y discreta.  Estamos comprometidos con la recuperación integral de tus espacios en {{city}} y te brindamos apoyo durante todo el proceso.',
    },
    {
      icon: 'users',
      title:       'Equipo Altamente Cualificado',
      description: 'Contamos con un equipo multidisciplinar de técnicos especializados en limpieza post-incendio, desinfección y restauración.  Nuestros profesionales tienen amplia experiencia en la recuperación de viviendas e industrias afectadas por fuego en {{city}}.',
    }
  ],

  // ── Servicios (tarjetas del inicio) ───────────────────────────
  serviceSummaries: [
    {
      slug:        'limpieza-post-incendio',
      nombre:      'Limpieza post incendio',
      description: 'Recuperamos tu hogar tras el fuego, devolviéndole la seguridad y tranquilidad que necesitas.  Expertos en Barcelona, eliminamos humedades, olores y restos de quemado con tecnología avanzada.',
      features:    ['Equipos de protección individual', 'Desinfección profesional', 'Eliminación de olores persistentes'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'limpieza-post-inundacion',
      nombre:      'Limpieza post inundación',
      description: 'Secamos y descontaminamos tu propiedad tras una inundación, previniendo problemas de salud y estructurales.  En Extingix Barcelona, te ofrecemos soluciones rápidas y eficientes para recuperar tu espacio.',
      features:    ['Control de humedad avanzado', 'Desinfección anti-moho', 'Restauración de superficies dañadas'],
      featured:    false,
      ctaPage:     false,
    },
    {
      slug:        'limpieza-post-mortem',
      nombre:      'Limpieza post mortem / fallecimiento',
      description: 'Ofrecemos un servicio discreto, profesional y respetuoso en momentos delicados.  En Extingix Barcelona, nos encargamos de la limpieza y desinfección con sensibilidad y empatía.',
      features:    ['Servicio discreto y confidencial', 'Desinfección profunda', 'Limpieza integral y detallada'],
      featured:    false,
      ctaPage:     false,
    },
    {
      slug:        'limpieza-diogenes',
      nombre:      'Limpieza síndrome de Diógenes',
      description: 'Restauramos la dignidad y habitabilidad de espacios afectados por el Síndrome de Diógenes.  En Extingix Barcelona, ofrecemos soluciones integrales con respeto y profesionalidad.',
      features:    ['Desinfección completa', 'Retirada de residuos', 'Gestión integral de deshechos'],
      featured:    false,
      ctaPage:     false,
    },
    {
      slug:        'descontaminacion',
      nombre:      'Descontaminación y desinfección',
      description: 'Eliminamos bacterias, virus y olores desagradables con productos homologados y seguros.  Extingix Barcelona te garantiza la máxima higiene y seguridad en tu hogar o negocio.',
      features:    ['Productos homologados', 'Profesionales cualificados', 'Servicios personalizados'],
      featured:    false,
      ctaPage:     false,
    },
    {
      slug:        'restauracion-inmueble',
      nombre:      'Restauración de inmueble tras siniestro',
      description: 'Reparamos daños estructurales y estéticos causados por incendios, inundaciones o cualquier otro evento.  En Extingix Barcelona, devolvemos la funcionalidad y belleza a tu propiedad.',
      features:    ['Reparación de paredes y techos', 'Reemplazo de ventanas y puertas', 'Pintura y acabados profesionales'],
      featured:    false,
      ctaPage:     false,
    }
  ],

  // ── Textos de secciones ───────────────────────────────────────
  sections: {
    beneficiosSub:  'Más de 10 años de experiencia. Equipo propio, sin subcontratas y con gestión de residuos certificada.',
    serviciosSub:   'Todo lo que necesitas para dejar el inmueble listo.',
    testimoniosSub: 'Más de 500 familias y empresas han confiado en nosotros.',
    zonaComarca:    'de la comarca',
    zonaBarrios:    'También en los barrios de {{city}}:',
    preciosSub:     'Presupuesto final gratuito y sin compromiso. Estos precios son orientativos — el coste real depende del volumen y accesibilidad.',
    preciosNota:    'Precios orientativos para {{city}}. El presupuesto definitivo se calcula según el volumen real, accesibilidad y distancia al punto limpio. Siempre gratuito y sin compromiso.',
    faqSub:         'Resolvemos las dudas más habituales antes de contratar el servicio.',
  },

  // ── Testimonios (4) ───────────────────────────────────────────
  testimonials: [
    {
      initials: 'MC',
      name:     'María C.',
      location: 'Sarrià-Sant Gervasi, Barcelona',
      service:  'Limpieza y desodorización tras incendio',
      quote:    'Después del pequeño incendio en mi cocina, Sootix fue una salvación. El equipo fue rápido, profesional y el olor a humo desapareció por completo. ¡Muy recomendable en Sarrià!',
    },
    {
      initials: 'JR',
      name:     'Jordi R.',
      location: 'Gracia, Barcelona',
      service:  'Retirada de residuos y limpieza de paredes',
      quote:    'La retirada de escombros fue rápida y eficiente. El equipo se aseguró de limpiar a fondo las paredes y eliminar toda la suciedad. ¡Excelente servicio en Gràcia!',
    },
    {
      initials: 'AL',
      name:     'Ana L.',
      location: 'Horta-Guinardó, Barcelona',
      service:  'Desodorización y limpieza de mobiliario',
      quote:    'El olor a humo era insoportable, pero después del tratamiento de desodorización de Sootix, todo volvió a la normalidad. ¡Muy satisfecho con el precio y la rapidez en Horta!',
    },
    {
      initials: 'PG',
      name:     'Pedro G.',
      location: 'Les Corts, Barcelona',
      service:  'Limpieza integral tras incendio',
      quote:    'He utilizado los servicios de Sootix varias veces para diferentes incendios menores y siempre han sido profesionales y eficientes. ¡Los recomendaré a mis vecinos en Les Corts!',
    }
  ],

  // ── Precios (3 tramos) ────────────────────────────────────────
  pricing: [
    {
      tipo:      'Retirada básica de escombros y limpieza superficial',
      precio:    'desde 250 €',
      highlight: false,
      features:  ['Limpieza inicial de residuos calcinados', 'Eliminación de cenizas', 'Desinfección del área afectada'],
    },
    {
      tipo:      'Servicio estándar de limpieza, desodorización y retirada de escombros',
      precio:    'desde 600 €',
      highlight: true,
      badge:     'Más solicitado',
      features:  ['Retirada completa de residuos', 'Limpieza a fondo de paredes, techos y suelos', 'Desodorización profesional', 'Eliminación de olores a humo', 'Embolsado y clasificación de restos'],
    },
    {
      tipo:      'Servicio integral de limpieza, restauración y desinfección profunda',
      precio:    'Presupuesto personalizado',
      highlight: false,
      features:  ['Retirada completa de escombros y mobiliario dañado', 'Limpieza y descontaminación profesional', 'Desodorización avanzada con tecnología especializada', 'Restauración parcial de elementos dañados', 'Certificación de seguridad post-incendio'],
    }
  ],

  // ── Preguntas frecuentes (6) ──────────────────────────────────
  faqs: [
    {
      pregunta:  '¿Cuánto cuesta una limpieza por incendio en Barcelona?',
      respuesta: 'El precio varía según la magnitud del incendio, el tipo de superficie afectada y los servicios requeridos. Un servicio básico puede comenzar desde 250 €, mientras que un servicio integral puede superar los 1000 €. Solicita un presupuesto gratuito para obtener una valoración precisa.',
    },
    {
      pregunta:  '¿Cuánto tarda en completarse una limpieza por incendio?',
      respuesta: 'La duración del trabajo depende de la extensión y el alcance de los daños. Una limpieza superficial puede tardar entre 4 y 8 horas, mientras que un servicio integral puede requerir varios días.',
    },
    {
      pregunta:  '¿Qué incluye el servicio de limpieza post-incendio en Barcelona?',
      respuesta: 'Nuestro servicio abarca desde la retirada de escombros y residuos calcinados hasta la desodorización profesional y la limpieza a fondo de paredes, techos y suelos. También ofrecemos servicios de restauración parcial de elementos dañados.',
    },
    {
      pregunta:  '¿Trabajáis en toda la comarca de Barcelona?',
      respuesta: 'Sí, cubrimos todo el Ámbito metropolitano de Barcelona, incluyendo municipios como Sant Cugat del Vallès, Esplugues de Llobregat, Castelldefels y Sitges. Consulta nuestra área de cobertura completa.',
    },
    {
      pregunta:  '¿Qué debo hacer antes de que lleguen los técnicos?',
      respuesta: 'Es recomendable ventilar la zona afectada y retirar objetos personales valiosos. Facilita el acceso a todas las áreas afectadas por el incendio para agilizar el proceso.',
    },
    {
      pregunta:  '¿Ofrecen garantía en sus servicios de limpieza por incendio?',
      respuesta: 'Sí, ofrecemos una garantía de satisfacción en todos nuestros servicios. Nos aseguramos de eliminar completamente los olores a humo y garantizar la seguridad e higiene del ambiente.',
    }
  ],

  // ── Proceso de trabajo (4 pasos) ──────────────────────────────
  proceso: [
    {
      titulo:      '1. Contacto y Presupuesto Gratuito',
      descripcion: 'Llámanos o envíanos un formulario con los detalles del incidente. Te proporcionaremos un presupuesto sin compromiso en menos de 30 minutos, adaptado a tus necesidades en {{city}}.',
    },
    {
      titulo:      '2. Evaluación y Planificación',
      descripcion: 'Un técnico especializado visitará la propiedad para evaluar los daños y elaborar un plan de limpieza detallado.  Identificamos las áreas afectadas y determinamos el alcance del trabajo necesario.',
    },
    {
      titulo:      '3. Ejecución Profesional',
      descripcion: 'Nuestro equipo utilizará equipos y productos profesionales para limpiar, desodorizar y restaurar tu espacio afectado por el incendio.  Trabajamos con precisión y rapidez para minimizar las molestias.',
    },
    {
      titulo:      '4. Entrega y Documentación',
      descripcion: 'Te entregaremos un certificado de limpieza y desinfección, así como una guía de recomendaciones para mantener la calidad del aire y prevenir futuros incidentes.  Nos aseguramos de que te sientas seguro y satisfecho en {{city}}.',
    }
  ],

} as const;

export type Content = typeof content;
