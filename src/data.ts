export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  ownership: "own" | "team";
  url?: string;
  image: string;
  stack: string[];
  highlights: string[];
};

export const profile = {
  name: "Francis Gonzalez",
  fullName: "Francis Alexander Gonzalez Almonte",
  headline: "Automatizador de Procesos Empresariales con IA",
  stackLine: ["n8n", "Make", "Zapier", "WhatsApp Meta", "Agentes IA", "Claude", "OpenAI"],
  pitch:
    "Automatizo ventas, inventario, facturación y atención al cliente por WhatsApp con IA, n8n y Make, y conecto los sistemas de la empresa. Cuando el proceso lo pide, construyo ERPs y plataformas SaaS a la medida, con el desarrollo asistido por IA como parte indispensable de mi trabajo.",
  whatsapp: "18294810779",
  location: "Santo Domingo, República Dominicana",
  email: "kitomc.rd@gmail.com",
  phone: "829-481-0779",
  linkedin: "https://www.linkedin.com/in/francisgonzalez1992/",
  github: "https://github.com/kitomc",
  cv: "/cv-francis-gonzalez.pdf",
  cvEn: "/Francis-Gonzalez-AI-Business-Process-Automation.pdf",
};

export const projects: Project[] = [
  {
    slug: "fhg",
    name: "FHG Distribuidora — Tienda en línea y ERP",
    tagline: "Electrodomésticos con financiamiento a cuotas: tienda pública y sistema de gestión",
    description:
      "Tienda en línea con catálogo, financiamiento y entrega a todo el país, más el ERP que la opera: ventas al contado y financiadas, cartera de cuotas, cobros, cuadres de caja, inventario con clasificación ABC, vendedores, comisiones y reportería. Incluye un agente de IA que asiste las tareas administrativas y comerciales de la distribuidora. Más de 440 commits en TypeScript y PL/pgSQL.",
    role: "Diseño y desarrollo completo",
    ownership: "own",
    url: "https://fhgdistribuidora.net",
    image: "/img/fhg-store.webp",
    stack: ["React", "Vite", "TypeScript", "Supabase", "PostgreSQL", "PL/pgSQL", "TanStack Query", "shadcn/ui", "Playwright"],
    highlights: [
      "Tienda pública con cotización de cuotas por producto y CTA a WhatsApp",
      "Módulo de financiamiento con morosidad, días de gracia y recargos",
      "Validación de transferencias y cuadre de caja diario",
      "Inventario con escaneo QR y rutas geolocalizadas con Leaflet",
      "Reportes con Recharts y exportación a Excel",
      "Agente de IA para las tareas administrativas y comerciales",
    ],
  },
  {
    slug: "eddileydi-spa",
    name: "Eddileydi Spa — Sitio web",
    tagline: "Sitio de un spa de masajes reductores, postoperatorios y relajación",
    description:
      "Sitio web para un spa de bienestar y estética corporal: servicios, galería de resultados con fotos reales, horarios y contacto. Cada servicio lleva a WhatsApp con el mensaje ya redactado para consultar o reservar la cita, y el personal entra por un acceso propio.",
    role: "Diseño y desarrollo completo",
    ownership: "own",
    url: "https://eddileydi-spa.royerdjsm.workers.dev/",
    image: "/img/eddileydi-spa.webp",
    stack: ["Cloudflare Workers", "WhatsApp"],
    highlights: [
      "Servicios y galería con fotos reales de sesiones",
      "CTA a WhatsApp por servicio con mensaje prellenado",
      "Acceso del personal y diseño responsive",
    ],
  },
  {
    slug: "structure",
    name: "Sandov Structure",
    tagline: "Plataforma de cálculo estructural con motor FEM 3D y asesor IA",
    description:
      "SaaS técnico para ingenieros estructurales: motor de elementos finitos 3D (frame, shell y sólido), verificación por ACI 318 / AISC 360, análisis sísmico dinámico, cimentaciones profundas, interoperabilidad BIM/IFC y reportes PDF trazables revisión por revisión.",
    role: "Diseño y desarrollo completo",
    ownership: "own",
    url: "https://structure.sandov.ai",
    image: "/img/structure.webp",
    stack: ["React", "TypeScript", "Convex", "Cloudflare Workers", "LLM", "PDF"],
    highlights: [
      "Motor de cálculo trazable con fórmulas explícitas y procedencia normativa",
      "Asesor IA que audita el modelo FEM y sugiere secciones",
      "Biblioteca de materiales, secciones y plantillas",
    ],
  },
  {
    slug: "estimapro",
    name: "EstimaPro / Estimator AI",
    tagline: "Presupuestos de construcción conectados con ferreterías",
    description:
      "Conecta el presupuesto del ingeniero con el catálogo de precios de ferreterías. Escanea planos con IA, cuantifica materiales y genera la cotización lista para enviar.",
    role: "Diseño y desarrollo completo",
    ownership: "own",
    url: "https://estimapro-rd.pages.dev",
    image: "/img/estimapro.webp",
    stack: ["React", "TypeScript", "Convex", "Cloudflare Pages", "Visión por IA"],
    highlights: [
      "Escáner de planos con IA para cuantificar partidas",
      "PriceBook de ferreterías con precios actualizables",
      "Cotización rápida y proyectos con estados de estimación",
    ],
  },
  {
    slug: "cooksnap",
    name: "CookSnap",
    tagline: "App de cocina con inteligencia artificial",
    description:
      "Aplicación web que genera recetas y sugerencias de cocina a partir de los ingredientes disponibles, con autenticación, soporte multi-idioma y una interfaz pensada para móvil.",
    role: "Diseño y desarrollo completo",
    ownership: "own",
    url: "https://cooksnap-4kh.pages.dev",
    image: "/img/cooksnap.webp",
    stack: ["React", "TypeScript", "Convex", "Cloudflare Pages", "LLM"],
    highlights: ["Generación de recetas con LLM", "i18n ES/EN", "Diseño mobile-first"],
  },
  {
    slug: "spatium",
    name: "Spatium — Sitio corporativo y ERP",
    tagline: "Oficinas corporativas y coworking en Santo Domingo",
    description:
      "Sitio comercial para la red de oficinas Spatium (Citi Tower y Torre Simple) y ERP de operación interna: espacios, reservas de salas, membresías y facturación.",
    role: "Integrador sénior y desarrollo (Boosty Digital / Spatium)",
    ownership: "own",
    image: "/img/spatium.webp",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Automatización"],
    highlights: ["Configurador de espacios por equipo", "Automatización de procesos de operación", "Galería y agenda de visitas"],
  },
  {
    slug: "planix",
    name: "Planix",
    tagline: "Portal transaccional de compras empresariales en República Dominicana",
    description:
      "Plataforma nacional que conecta compradores y proveedores: publicación de procesos de compra, licitaciones y gestión de cotizaciones entre empresas.",
    role: "Desarrollo y mantenimiento como parte del equipo",
    ownership: "team",
    url: "https://planixapp.com.do",
    image: "/img/planix.webp",
    stack: ["Angular", "Node.js", "REST APIs", "Low-code"],
    highlights: ["Diseño de bases de datos y nuevos módulos low-code", "Mantenimiento evolutivo y corrección de errores", "Pruebas y QA en producción"],
  },
];

export const experience = [
  {
    company: "Boosty Digital / Spatium (segunda etapa)",
    role: "Integrador Sénior · Bubble Developer · Automatizador de Procesos Empresariales con IA (tiempo completo, híbrido)",
    period: "Ene 2025 — Mar 2026",
    location: "Santo Domingo, RD",
    bullets: [
      "Diseño e implementación de soluciones de software para la operación de oficinas corporativas y coworking",
      "Integración de facturación electrónica de la DGII (e-CF) y automatización de procesos empresariales con IA",
      "Mantenimiento, pruebas y depuración de aplicaciones en producción",
    ],
  },
  {
    company: "Delphi One",
    role: "Desarrollador de software (tiempo completo, remoto)",
    period: "Mar 2024 — Ene 2025",
    location: "Estados Unidos",
    bullets: [
      "Implementación de nuevos módulos y QA",
      "Implementación de un agente de inteligencia artificial",
      "Diseño de bases de datos, automatización de procesos y mantenimiento",
    ],
  },
  {
    company: "Planix",
    role: "Desarrollador de software (temporal, remoto)",
    period: "Ene 2024 — Jul 2024",
    location: "República Dominicana",
    bullets: [
      "Desarrollo y mantenimiento del portal de compras empresariales como parte del equipo",
      "Diseño de bases de datos y desarrollo low-code de nuevos módulos",
    ],
  },
  {
    company: "Boosty Digital / Spatium (primera etapa)",
    role: "Integrador Sénior · Bubble Developer · Automatizador de Procesos Empresariales con IA (tiempo completo, híbrido)",
    period: "Nov 2022 — Mar 2024",
    location: "Santo Domingo, RD",
    bullets: ["Diseño e implementación de soluciones de software, mantenimiento y mejora de aplicaciones"],
  },
  {
    company: "Mkt Nativo",
    role: "Desarrollador de software (contrato, remoto)",
    period: "Sep 2023 — Ene 2024",
    location: "México",
    bullets: ["Diseño de bases de datos y desarrollo low-code para productos digitales de la agencia"],
  },
  {
    company: "Kreante",
    role: "Desarrollador Bubble.io (tiempo completo)",
    period: "Mar 2021 — Nov 2022",
    location: "Perú",
    bullets: [
      "Desarrollo de más de 12 aplicaciones web y móviles en Bubble.io para clientes de EE. UU., Francia, Perú y RD",
      "Autor de 5 plugins publicados en el marketplace de Bubble (WhatsApp Meta, MyZap, Google Drive, LinkedIn, NowPayments)",
      "Integración de APIs y servicios externos en aplicaciones Bubble.io (Stripe, Slack, Zoho, Calendly, EasyBroker, Factusol) y automatizaciones con Make, n8n y Zapier",
    ],
  },
];

export const stack: Record<string, string[]> = {
  "IA y automatización": ["n8n", "Make", "Zapier", "Agentes IA", "Claude", "OpenAI", "Gemini", "DeepSeek", "RAG", "MCP"],
  "Integraciones y datos": ["WhatsApp Meta WABA", "DGII e-CF", "Zoho CRM", "Kommo CRM", "REST APIs", "Webhooks", "Supabase", "Convex", "PostgreSQL", "Google Sheets", "Excel avanzado"],
  "Sistemas a la medida": ["React", "Next.js", "Angular", "TypeScript", "Node.js", "Python", "Bubble.io", "Flutter"],
  "Cloud y DevOps": ["Cloudflare Workers", "Cloudflare Pages", "Google Cloud Run", "Docker", "Playwright", "Vitest"],
};

export const methodology = [
  {
    key: "SDD",
    name: "Spec-Driven Development",
    text: "Cada cambio arranca con una especificación: requisitos, escenarios y criterios de aceptación versionados en el repositorio. El código se verifica contra la spec, no contra la memoria.",
  },
  {
    key: "DDD",
    name: "Domain-Driven Design",
    text: "El modelo de dominio manda: entidades, agregados e invariantes con un lenguaje ubicuo compartido con el cliente. La infraestructura queda fuera de las reglas de negocio (arquitectura hexagonal).",
  },
  {
    key: "POO",
    name: "Programación Orientada a Objetos",
    text: "Responsabilidades claras, principios SOLID y contratos explícitos entre módulos, para que el sistema sobreviva al siguiente cambio sin reescrituras.",
  },
  {
    key: "IA",
    name: "Desarrollo asistido por IA",
    text: "La IA es una parte indispensable de mi proceso: agentes LLM (Claude Code, MCP, agentes especializados) ejecutan bajo mi especificación y mis pruebas. Yo soy dueño de la arquitectura, del dominio y de cada decisión; el agente multiplica la velocidad de entrega.",
  },
];

export const education = [
  { name: "Ciencia De Datos - Nivel Avanzado (860 horas)", issuer: "INDOTEL / BID / Cymetria (2026)" },
  { name: "Big Data Certification Expert", issuer: "Certiplus (2026)" },
  { name: "Claude Code: Software Engineering with Generative AI Agents", issuer: "Vanderbilt University (2026)" },
  { name: "Fundamentos de Machine Learning", issuer: "Platzi" },
  { name: "Google Cloud Platform", issuer: "Platzi" },
  { name: "Programador No Code Bubble.io", issuer: "Platzi" },
  { name: "Inglés de Inmersión", issuer: "UNPHU" },
  { name: "Técnico Programador", issuer: "INFOTEP (2017)" },
  { name: "Universidad del Caribe (UNICARIBE)", issuer: "matriculado, estudios en pausa" },
];

export const services = [
  {
    name: "Automatización de procesos",
    text: "Conciliación bancaria, cotizaciones, agendamiento, procesos de ventas, cobros, inventario y reportes que hoy se hacen a mano, convertidos en flujos automáticos con n8n, Make y Zapier.",
  },
  {
    name: "WhatsApp y agentes de IA",
    text: "Atención al cliente por WhatsApp con agentes de IA que responden, califican y registran cada conversación. WhatsApp Meta, Claude, OpenAI y Gemini.",
  },
  {
    name: "Integración de sistemas",
    text: "Tus herramientas conectadas para que los datos fluyan solos: facturación electrónica de la DGII (e-CF), Stripe, Slack, Zoho CRM, Kommo CRM, Calendly, Google Sheets y más de 20 plataformas.",
  },
  {
    name: "ERPs y sistemas de gestión",
    text: "Cuando el proceso necesita su propio sistema: ventas, cartera, inventario, cobros y reportería. Dos ERPs en producción para distribuidoras y oficinas corporativas.",
  },
];

export const trustedBy = ["FHG Distribuidora", "Spatium", "Delphi One", "Planix", "Kreante", "Boosty Digital"];

export const integrations = [
  "DGII · Facturación electrónica (e-CF)", "Stripe", "WhatsApp Meta WABA", "MyZap", "Slack", "Zoho CRM", "Kommo CRM", "Calendly", "Vimeo", "VideoAsk", "Sportmonks",
  "EasyBroker", "Factusol", "e.FACT", "Mintsoft", "Proxycurl (LinkedIn)", "NowPayments", "Google Drive", "Google Sheets",
  "OpenAI", "n8n", "Make (Integromat)", "Zapier",
];

export const bubblePlugins = [
  { name: "Google Drive by Kreante", text: "Manejador de archivos: descargar, editar y actualizar documentos." },
  { name: "LinkedIn Profile by Kreante", text: "Perfiles de LinkedIn vía Proxycurl. Usado en 19 apps." },
  { name: "MyZap 2.0 WS by Kreante", text: "API de WhatsApp gratuita sobre el proyecto open source MyZap." },
  { name: "NowPayments", text: "Cobros en más de 100 criptomonedas con payout instantáneo." },
  { name: "WhatsApp Meta WABAs", text: "Servicio oficial de Meta para notificaciones por WhatsApp." },
];

export const nocodeApps = [
  { slug: "mypest", name: "My Pest Francia", kind: "Control de plagas · Francia" },
  { slug: "easytaller", name: "Easy Taller", kind: "Talleres mecánicos · web y móvil" },
  { slug: "uncancelled", name: "UnCancelled", kind: "Reservas de sesiones fitness" },
  { slug: "courtroom5", name: "Courtroom5", kind: "Legaltech · EE. UU." },
  { slug: "koiny", name: "Koiny", kind: "Ofertas y cupones" },
  { slug: "worky", name: "Worky", kind: "Reserva de coworking · móvil" },
  { slug: "soccerfan", name: "SoccerFan", kind: "Mapa de partidos · móvil" },
  { slug: "legalhub", name: "LegalHub", kind: "Documentos legales en minutos" },
  { slug: "jumpdata", name: "Jump Data Driven", kind: "Analítica con IA" },
  { slug: "planix-app", name: "Planix", kind: "Compras empresariales · RD" },
  { slug: "delphione", name: "Delphi One", kind: "Market oracles · EE. UU." },
  { slug: "wonderresort", name: "Wonder Resorts", kind: "Reservas y socios · móvil" },
];

export const automationClients = ["Pocholín", "Confort Solar", "Spatium", "SAM Latinoamérica"];
