import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  BrainCircuit,
  Building2,
  Check,
  Code2,
  Download,
  Globe,
  Mail,
  MapPin,
  Menu,
  Phone,
  Plug,
  X,
} from "lucide-react";
import { Github, Linkedin } from "./icons";
import {
  automationClients,
  bubblePlugins,
  education,
  experience,
  integrations,
  methodology,
  nocodeApps,
  profile,
  projects,
  services,
  stack,
  trustedBy,
  type Project,
} from "./data";
import { useActiveSection, useCountUp, usePreloader, useReveal } from "./motion";

const NAV = [
  ["sobre-mi", "Sobre mí"],
  ["servicios", "Servicios"],
  ["proyectos", "Proyectos"],
  ["integraciones", "Integraciones"],
  ["experiencia", "Experiencia"],
  ["contacto", "Contacto"],
] as const;

export default function App() {
  const { progress, done } = usePreloader();
  useReveal();
  return (
    <>
      <Preloader progress={progress} done={done} />
      <div className={`min-h-screen ${done ? "ready" : ""}`}>
        <Header />
        <main>
          <Hero />
          <TrustedBy />
          <About />
          <Services />
          <Projects />
          <Integrations />
          <Methodology />
          <Experience />
          <Stack />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}

/* ---------------- Preloader ---------------- */
function Preloader({ progress, done }: { progress: number; done: boolean }) {
  return (
    <div className="loader" data-done={done} aria-hidden={done} role="status" aria-label="Cargando portafolio">
      <div className="loader-name flex flex-col items-center gap-5">
        <img src="/img/avatar.webp" alt="" className="h-16 w-16 rounded-full ring-2 ring-accent/60" />
        <p className="text-lg font-semibold tracking-tight">
          Francis <span className="text-accent-2">Gonzalez</span>
        </p>
        <div className="loader-bar">
          <span style={{ transform: `scaleX(${progress})` }} />
        </div>
        <p className="count font-mono text-xs text-mist">{Math.round(progress * 100)}%</p>
      </div>
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  const ids = useMemo(() => NAV.map(([id]) => id), []);
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-30 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled ? "border-b border-line/70 bg-ink/85 shadow-[0_8px_30px_-20px_rgba(0,0,0,0.8)] backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="leading-tight">
          <span className="block text-lg font-bold tracking-tight">
            Francis <span className="text-accent-2">Gonzalez</span>
          </span>
          <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-mist">Full Stack Developer</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm md:flex" aria-label="Principal">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={`nav-link ${active === id ? "text-paper" : "text-mist hover:text-paper"}`} aria-current={active === id}>
              {label}
            </a>
          ))}
          <a href="#contacto" className="btn btn-primary !py-2 text-sm">
            Contrátame
          </a>
        </nav>
        <button className="rounded-md border border-line p-2 md:hidden" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label="Abrir menú">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-line bg-ink-2 px-5 py-4 md:hidden" aria-label="Principal móvil">
          <ul className="space-y-3">
            {NAV.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setOpen(false)} className="block py-1 text-mist">
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contacto" onClick={() => setOpen(false)} className="btn btn-primary w-full justify-center">
                Contrátame
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="hero-bg relative overflow-hidden">
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.15fr_1fr] md:py-24">
        <div>
          <p data-hero style={{ "--i": 0 } as React.CSSProperties} className="mb-3 text-accent-2">
            Hola, soy
          </p>
          <h1 data-hero style={{ "--i": 1 } as React.CSSProperties} className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Francis Gonzalez
            <span className="mt-2 block text-3xl font-bold text-paper/90 md:text-5xl">Desarrollador Full Stack</span>
          </h1>
          <p data-hero style={{ "--i": 2 } as React.CSSProperties} className="mt-6 max-w-lg text-lg text-mist">
            Construyo ERPs, plataformas SaaS e integraciones con IA que las empresas usan a diario. Más de 5 años entregando software en producción para
            República Dominicana, Estados Unidos y Perú.
          </p>
          <ul data-hero style={{ "--i": 3 } as React.CSSProperties} className="mt-5 flex flex-wrap gap-2" aria-label="Stack principal">
            {profile.stackLine.map((t) => (
              <li key={t} className="chip rounded-md border border-line bg-ink-2/70 px-2.5 py-1 text-xs font-medium text-paper/85">
                {t}
              </li>
            ))}
          </ul>
          <div data-hero style={{ "--i": 4 } as React.CSSProperties} className="mt-8 flex flex-wrap gap-3">
            <a href="#proyectos" className="btn btn-primary">
              Ver mi trabajo <ArrowRight size={18} className="arrow" />
            </a>
            <a href="#contacto" className="btn btn-ghost">
              <Mail size={18} /> Contáctame
            </a>
          </div>
          <div data-hero style={{ "--i": 5 } as React.CSSProperties} className="mt-10 flex items-center gap-3 text-sm text-mist">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Disponible para posiciones full stack, remoto o en RD
          </div>
        </div>
        <div data-hero="portrait" className="relative">
          <img
            src="/img/portrait.webp"
            alt={`${profile.fullName}, desarrollador full stack`}
            className="mx-auto block aspect-[4/5] w-full max-w-md rounded-2xl object-cover object-top shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/10 md:max-w-none"
            fetchPriority="high"
          />
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 gap-6 rounded-xl border border-line bg-ink/90 px-5 py-3 shadow-2xl backdrop-blur md:left-auto md:right-6 md:translate-x-0">
            <Counter to={5} suffix="+" label="años" />
            <Counter to={18} suffix="+" label="productos" />
            <Counter to={20} suffix="+" label="integraciones" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Counter({ to, suffix, label }: { to: number; suffix?: string; label: string }) {
  const { ref, value } = useCountUp(to);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center">
      <p className="count text-xl font-bold leading-none">
        {value}
        {suffix}
      </p>
      <p className="mt-1 text-[11px] uppercase tracking-wider text-mist">{label}</p>
    </div>
  );
}

/* ---------------- Trusted by ---------------- */
function TrustedBy() {
  const items = [...trustedBy, ...trustedBy];
  return (
    <section className="border-y border-line bg-ink-2/60 py-6" aria-label="Empresas con las que he trabajado">
      <div className="mx-auto max-w-6xl px-5">
        <p className="mb-4 text-center text-xs uppercase tracking-[0.2em] text-mist">Empresas que confían en mi trabajo</p>
        <div className="marquee-wrap overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="marquee">
            {items.map((n, i) => (
              <span key={i} className="whitespace-nowrap text-lg font-semibold tracking-tight text-paper/60">
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  const facts = ["5+ años de experiencia", "18+ productos entregados", "3 ERPs en producción", "Disponible de inmediato"];
  return (
    <section id="sobre-mi" className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-[1.2fr_1fr]">
      <div data-reveal>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Software que resuelve problemas reales del negocio</h2>
        <p className="mt-5 text-mist">
          Soy desarrollador full stack con base en Santo Domingo. Diseño y entrego productos de punta a punta: modelo de datos, backend, API e interfaz
          que la gente realmente usa. He construido ERPs para distribuidoras, colegios y oficinas corporativas, plataformas SaaS con inteligencia artificial
          y más de una docena de aplicaciones para clientes internacionales.
        </p>
        <p className="mt-4 text-mist">
          Trabajo con especificación primero (SDD), diseño guiado por el dominio (DDD) y programación orientada a objetos. Los agentes LLM son una parte
          indispensable de mi flujo: yo defino arquitectura y criterios de aceptación, ellos aceleran la ejecución. El resultado: entregas más rápidas
          sin sacrificar mantenibilidad.
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {facts.map((f, i) => (
            <li key={f} data-reveal style={{ "--i": i } as React.CSSProperties} className="flex items-center gap-2 text-sm">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-accent/15 text-accent-2">
                <Check size={12} strokeWidth={3} />
              </span>
              {f}
            </li>
          ))}
        </ul>
        <a href={profile.cv} download className="btn btn-primary mt-8">
          Descargar CV <Download size={18} className="arrow" />
        </a>
      </div>
      <aside data-reveal style={{ "--i": 2 } as React.CSSProperties} className="card self-start rounded-2xl border border-line bg-ink-2 p-6">
        <dl className="space-y-5">
          <Fact icon={<MapPin size={18} />} label="Ubicación" value={profile.location} />
          <Fact icon={<Mail size={18} />} label="Correo" value={profile.email} href={`mailto:${profile.email}`} />
          <Fact icon={<Phone size={18} />} label="Teléfono" value={`+1 ${profile.phone}`} href={`tel:+1${profile.phone.replace(/-/g, "")}`} />
          <Fact icon={<Globe size={18} />} label="Idiomas" value="Español nativo · Inglés intermedio" />
          <Fact icon={<Building2 size={18} />} label="Modalidad" value="Remoto · Híbrido · Presencial en RD" />
        </dl>
      </aside>
    </section>
  );
}

function Fact({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  return (
    <div className="flex gap-4">
      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent-2">{icon}</span>
      <div>
        <dt className="text-xs uppercase tracking-wider text-mist">{label}</dt>
        <dd className="mt-0.5 text-sm">{href ? <a href={href} className="hover:text-accent-2">{value}</a> : value}</dd>
      </div>
    </div>
  );
}

/* ---------------- Services ---------------- */
const serviceIcons = [Code2, Building2, Plug, BrainCircuit];
function Services() {
  return (
    <section id="servicios" className="border-y border-line bg-ink-2/40">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div data-reveal className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Qué puedo hacer por tu empresa</h2>
          <p className="mt-4 text-mist">Cuatro áreas donde ya he entregado resultados medibles en producción.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <article key={s.name} data-reveal style={{ "--i": i } as React.CSSProperties} className="service rounded-2xl border border-line bg-ink p-6">
                <Icon className="icon text-accent" size={28} strokeWidth={1.75} />
                <h3 className="mt-5 font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{s.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */
function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-5 py-24">
      <div data-reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Proyectos destacados</h2>
          <p className="mt-3 max-w-xl text-mist">Sistemas en producción con usuarios reales. Cada tarjeta indica mi rol exacto.</p>
        </div>
        <a href={profile.github} target="_blank" rel="noreferrer" className="nav-link inline-flex items-center gap-1 text-sm text-accent-2">
          Ver GitHub <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project: p, index }: { project: Project; index: number }) {
  return (
    <article data-reveal style={{ "--i": index % 2 } as React.CSSProperties} className="card group flex flex-col overflow-hidden rounded-2xl border border-line bg-ink-2">
      <a href={p.url ?? "#proyectos"} target={p.url ? "_blank" : undefined} rel="noreferrer" className="relative block overflow-hidden bg-ink-3" aria-label={p.name}>
        <img src={p.image} alt={`Captura de ${p.name}`} loading="lazy" className="card-img shot aspect-[16/10] w-full object-cover object-top" />
        <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-medium ${p.ownership === "own" ? "bg-accent text-white" : "bg-amber-300 text-ink"}`}>
          {p.ownership === "own" ? "Desarrollado por mí" : "Desarrollo y mantenimiento en equipo"}
        </span>
      </a>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="mt-1 text-sm text-mist">{p.tagline}</p>
          </div>
          {p.url && (
            <a href={p.url} target="_blank" rel="noreferrer" className="btn btn-ghost !p-2" aria-label={`Abrir ${p.name}`}>
              <ArrowUpRight size={18} className="arrow" />
            </a>
          )}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-paper/85">{p.description}</p>
        <ul className="mt-4 space-y-1.5 text-sm text-mist">
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <Check size={14} className="mt-1 shrink-0 text-accent-2" />
              {h}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-mist">
          <span className="font-semibold text-paper/80">Rol:</span> {p.role}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {p.stack.map((s) => (
            <span key={s} className="chip rounded border border-line px-2 py-0.5 text-[11px] text-accent-2">
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ---------------- Integrations & no-code ---------------- */
function Integrations() {
  return (
    <section id="integraciones" className="border-y border-line bg-ink-2/40">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div data-reveal className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Integraciones, automatización y no‑code</h2>
          <p className="mt-4 text-mist">
            Más de 12 aplicaciones web y móviles entregadas en Bubble.io, 5 plugins publicados en su marketplace y más de 20 plataformas integradas por API.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
          {nocodeApps.map((a, i) => (
            <figure key={a.slug} data-reveal style={{ "--i": i % 6 } as React.CSSProperties} className="app-thumb overflow-hidden rounded-xl border border-line bg-ink">
              <img src={`/img/apps/${a.slug}.webp`} alt={`App ${a.name}`} loading="lazy" className="aspect-[194/312] w-full object-cover" />
              <figcaption className="p-2.5">
                <p className="truncate text-xs font-semibold">{a.name}</p>
                <p className="truncate text-[11px] text-mist">{a.kind}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div data-reveal>
            <div className="card mb-6 flex items-center gap-4 rounded-2xl border border-line bg-ink p-5">
              <img src="/img/dgii.webp" alt="Logo de la DGII" width={56} height={56} className="h-14 w-14 shrink-0 rounded-xl bg-white p-1.5" />
              <div>
                <p className="font-semibold">DGII · Facturación electrónica (e-CF)</p>
                <p className="mt-1 text-sm text-mist">
                  Integración con la Dirección General de Impuestos Internos de República Dominicana: emisión, firma y envío de comprobantes fiscales
                  electrónicos desde el ERP.
                </p>
              </div>
            </div>
            <h3 className="flex items-center gap-2 font-semibold">
              <Plug size={18} className="text-accent-2" /> Plataformas integradas por API
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {integrations.map((n) => (
                <li key={n} className="chip rounded-md border border-line bg-ink px-3 py-1 text-sm text-mist">
                  {n}
                </li>
              ))}
            </ul>
            <h3 className="mt-8 flex items-center gap-2 font-semibold">
              <Blocks size={18} className="text-accent-2" /> Automatizaciones para
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {automationClients.map((n) => (
                <li key={n} className="chip rounded-md border border-line bg-ink px-3 py-1 text-sm text-paper/80">
                  {n}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal style={{ "--i": 1 } as React.CSSProperties}>
            <h3 className="font-semibold">Plugins publicados en el marketplace de Bubble</h3>
            <ul className="mt-4 divide-y divide-line rounded-2xl border border-line bg-ink">
              {bubblePlugins.map((p) => (
                <li key={p.name} className="flex items-start gap-3 px-5 py-3.5">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <div>
                    <p className="text-sm font-medium">{p.name}</p>
                    <p className="text-xs text-mist">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Methodology ---------------- */
function Methodology() {
  return (
    <section id="metodologia" className="mx-auto max-w-6xl px-5 py-24">
      <div data-reveal className="mb-12 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Cómo trabajo: SDD, DDD y POO con agentes de IA</h2>
        <p className="mt-4 text-mist">
          La IA es indispensable en cómo desarrollo: los agentes LLM aceleran la ejecución, y la metodología es lo que hace ese código mantenible:
          especificación primero, dominio en el centro y pruebas que verifican. Las decisiones son mías.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {methodology.map((m, i) => (
          <article key={m.key} data-reveal style={{ "--i": i } as React.CSSProperties} className="service rounded-2xl border border-line bg-ink-2 p-6">
            <p className="text-3xl font-extrabold tracking-tight text-accent">{m.key}</p>
            <h3 className="mt-2 font-semibold">{m.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-mist">{m.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Experience ---------------- */
function Experience() {
  return (
    <section id="experiencia" className="border-y border-line bg-ink-2/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-[1fr_1.4fr]">
        <div data-reveal>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Experiencia</h2>
          <img src="/img/working.webp" alt="Francis trabajando en su escritorio" loading="lazy" className="mt-8 hidden rounded-2xl ring-1 ring-white/10 md:block" />
          <h3 className="mt-8 font-semibold">Formación y certificaciones</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {education.map((e) => (
              <li key={e.name} className="flex justify-between gap-4 border-b border-line/60 pb-2">
                <span>{e.name}</span>
                <span className="shrink-0 text-mist">{e.issuer}</span>
              </li>
            ))}
          </ul>
        </div>
        <ol className="relative space-y-10 border-l border-line pl-8">
          {experience.map((e, i) => (
            <li key={e.company} data-reveal style={{ "--i": i } as React.CSSProperties} className="relative">
              <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-ink" />
              <p className="text-xs font-medium text-accent-2">{e.period}</p>
              <h3 className="mt-1 text-xl font-bold">{e.company}</h3>
              <p className="text-sm text-mist">
                {e.role} · {e.location}
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-paper/85">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <Check size={14} className="mt-1 shrink-0 text-accent-2" />
                    {b}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Stack ---------------- */
function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-5 py-24">
      <div data-reveal className="mb-10 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Stack</h2>
        <p className="mt-3 text-mist">Lo que uso a diario para llevar un producto de la idea a producción.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {Object.entries(stack).map(([group, items], i) => (
          <div key={group} data-reveal style={{ "--i": i } as React.CSSProperties} className="rounded-2xl border border-line bg-ink-2 p-6">
            <h3 className="mb-4 font-semibold">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((it) => (
                <span key={it} className="chip rounded-md border border-line bg-ink px-3 py-1 text-sm text-mist">
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CTA + Footer ---------------- */
function CTA() {
  return (
    <section id="contacto" className="hero-bg relative overflow-hidden border-t border-line">
      <div data-reveal className="relative mx-auto max-w-3xl px-5 py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Hablemos de tu próximo proyecto</h2>
        <p className="mx-auto mt-5 max-w-xl text-mist">
          Busco una posición full stack donde la arquitectura y la mantenibilidad importen. Puedo explicar cada decisión técnica de estos proyectos en una
          entrevista.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${profile.email}?subject=Oportunidad%20Full%20Stack`} className="btn btn-primary">
            Escríbeme <ArrowRight size={18} className="arrow" />
          </a>
          <a href={profile.cv} download className="btn btn-ghost">
            <Download size={18} /> Descargar CV
          </a>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-mist">
          <li className="inline-flex items-center gap-2">
            <Mail size={16} /> {profile.email}
          </li>
          <li className="inline-flex items-center gap-2">
            <Phone size={16} /> +1 {profile.phone}
          </li>
          <li className="inline-flex items-center gap-2">
            <MapPin size={16} /> {profile.location}
          </li>
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-6 text-sm text-mist">
        <div className="leading-tight">
          <p className="font-semibold text-paper">
            Francis <span className="text-accent-2">Gonzalez</span>
          </p>
          <p className="text-xs">Desarrollador Full Stack</p>
        </div>
        <p className="text-xs">© {new Date().getFullYear()} {profile.fullName}. Todos los derechos reservados.</p>
        <div className="flex gap-2">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost !p-2.5" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost !p-2.5" aria-label="GitHub">
            <Github size={16} />
          </a>
          <a href={`mailto:${profile.email}`} className="btn btn-ghost !p-2.5" aria-label="Correo">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
