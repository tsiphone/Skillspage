import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Radio,
  Sparkles,
  Scan,
  ArrowUpRight,
  Layers,
} from 'lucide-react';

const BASE = import.meta.env.BASE_URL || '/';

const PROJECTS = [
  {
    id: '01',
    code: 'PRJ_ALPHA // WEB_ECOSYSTEM',
    category: 'INTERACTIVE PLATFORM',
    title: 'The Storyteller',
    subtitle: 'Visual Novel Ecosystem & Digital Comic Hub',
    description:
      'An interactive web platform built with React Vite and Framer Motion uniting serialized comics, visual novels (Ethereum, Mirror, Shadows, Pulse, Circuit), seasonal character banners, and Webtoon / GlobalComix integration.',
    tags: ['React Vite', 'Framer Motion', 'Webtoon & GlobalComix'],
    image: `${BASE}images/projects/storyteller-holo.jpg`,
    fallbackLabel: 'THE_STORYTELLER_HOLOGRAM',
    icon: BookOpen,
    accent: 'emerald',
    link: '#storyteller',
  },
  {
    id: '02',
    code: 'PRJ_BETA // AUDIO_SYNTHESIS',
    category: 'ORIGINAL SOUNDTRACKS',
    title: 'Novel Soundscapes',
    subtitle: 'Dark Ambient, Retrowave & Adaptive OSTs',
    description:
      'Atmospheric electronic compositions produced in LMMS Studio using custom VST synthesizers and AI-assisted orchestration. Designed as immersive sonic atmospheres tailored for dark sci-fi and visual novel chapters.',
    tags: ['LMMS Studio', 'Dark Ambient', 'Synth & VST'],
    image: `${BASE}images/projects/soundscapes-holo.jpg`,
    fallbackLabel: 'SOUNDSCAPES_WAVEFORM_HOLO',
    icon: Radio,
    accent: 'sky',
    link: '#skills',
  },
  {
    id: '03',
    code: 'PRJ_GAMMA // LIVE2D_AVATAR',
    category: 'VIRTUAL CHARACTER',
    title: 'Adventure VTuber',
    subtitle: 'Live2D Rigging, Lore & Interactive Storytelling',
    description:
      'A fully rigged Live2D adventure persona blending semi-realistic anime illustration, expressive facial tracking, and episodic worldbuilding narratives designed for live interactive broadcasts and multimedia storytelling.',
    tags: ['Live2D Cubism', 'Character Design', 'VTuber Pipeline'],
    image: `${BASE}images/projects/vtuber-holo.jpg`,
    fallbackLabel: 'ADVENTURE_VTUBER_HOLO',
    icon: Sparkles,
    accent: 'emerald',
    link: '#gallery',
  },
];

export default function ProjectsHighlights() {
  const [activeId, setActiveId] = useState('01');
  const [imgErrors, setImgErrors] = useState({});

  return (
    <section
      id="projects"
      className="relative w-full bg-zinc-950 text-zinc-200 py-20 border-b border-zinc-800 overflow-hidden"
    >
      {/* Rejilla arquitectónica Tech-Noir */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(56, 189, 248, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(52, 211, 153, 0.06) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-10">
        {/* ================= ENCABEZADO SUPERIOR HUD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative w-full bg-zinc-950/70 backdrop-blur-md border border-emerald-400/40 px-6 sm:px-8 py-6 shadow-[0_0_35px_rgba(52,211,153,0.1)] flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          {/* Esquinas HUD */}
          <span className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-sky-400" />
          <span className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-emerald-400" />
          <span className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-emerald-400" />
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-sky-400" />

          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.28em] text-sky-400 uppercase mb-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>SELECTED_WORK // HOLOGRAPHIC_DEPLOYMENTS</span>
            </div>

            <h2
              style={{ fontFamily: "'Orbitron', sans-serif" }}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-sky-300 to-cyan-200 drop-shadow-[0_0_16px_rgba(52,211,153,0.5)]"
            >
              Projects &amp; Highlights
            </h2>
          </div>

          <div className="font-mono text-xs text-zinc-400 md:text-right space-y-1">
            <div className="text-emerald-400 flex items-center md:justify-end gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>ACTIVE_PROJECTIONS: 03</span>
            </div>
            <p className="text-[11px] text-zinc-500">
              HOVER OR SELECT A HOLOGRAM PILLAR TO INSPECT TELEMETRY
            </p>
          </div>
        </motion.div>

        {/* ================= 3 COLUMNAS HOLOGRÁFICAS CON DEGRADADO INFERIOR ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PROJECTS.map((project, idx) => {
            const Icon = project.icon;
            const isEmerald = project.accent === 'emerald';
            const isActive = activeId === project.id;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                onMouseEnter={() => setActiveId(project.id)}
                onClick={() => setActiveId(project.id)}
                className={`relative min-h-[540px] sm:min-h-[580px] flex flex-col justify-between bg-zinc-900/80 border transition-all duration-500 overflow-hidden cursor-pointer group ${
                  isActive
                    ? isEmerald
                      ? 'border-emerald-400/90 shadow-[0_0_35px_rgba(52,211,153,0.22)]'
                      : 'border-sky-400/90 shadow-[0_0_35px_rgba(56,189,248,0.22)]'
                    : 'border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {/* ================= CAPA DE IMAGEN TIPO HOLOGRAMA TRANSLÚCIDO ================= */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-zinc-950">
                  {!imgErrors[project.id] ? (
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      initial={{ opacity: 0, scale: 1.06, filter: 'brightness(1.5) contrast(1.2)' }}
                      whileInView={{ opacity: 0.72, scale: 1, filter: 'brightness(1) contrast(1.05)' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: idx * 0.15 }}
                      onError={() =>
                        setImgErrors((prev) => ({
                          ...prev,
                          [project.id]: true,
                        }))
                      }
                      className="w-full h-full object-cover object-top mix-blend-screen opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                    />
                  ) : (
                    /* Proyección holográfica vectorial si aún no subes la imagen */
                    <div className="w-full h-3/4 flex flex-col items-center justify-center p-6 text-center font-mono">
                      <div
                        className={`w-20 h-20 rounded-full border border-dashed flex items-center justify-center mb-3 animate-spin ${
                          isEmerald
                            ? 'border-emerald-400/50 text-emerald-400'
                            : 'border-sky-400/50 text-sky-400'
                        }`}
                        style={{ animationDuration: '14s' }}
                      >
                        <Scan className="w-8 h-8" />
                      </div>
                      <span
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                        className="text-xs font-bold tracking-widest text-zinc-300"
                      >
                        [{project.fallbackLabel}]
                      </span>
                      <span className="text-[10px] text-zinc-500 mt-1 break-all">
                        public/images/projects/...
                      </span>
                    </div>
                  )}

                  {/* Líneas de escaneo CRT / Holograma */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-30"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(0deg, rgba(56, 189, 248, 0.14) 0px, rgba(56, 189, 248, 0.14) 1px, transparent 1px, transparent 4px)',
                    }}
                  />

                  {/* Haz de escaneo vertical HUD animado */}
                  <motion.div
                    animate={{ y: ['-20%', '120%'] }}
                    transition={{
                      duration: 3.6,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: idx * 0.7,
                    }}
                    className={`absolute inset-x-0 h-16 pointer-events-none bg-gradient-to-b from-transparent ${
                      isEmerald ? 'via-emerald-400/20' : 'via-sky-400/20'
                    } to-transparent`}
                  />

                  {/* DEGRADADO INFERIOR PROFUNDO HACIA NEGRO PARA LEGIBILIDAD DEL TEXTO */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent pointer-events-none" />
                </div>

                {/* ================= BARRA SUPERIOR HUD DE LA COLUMNA ================= */}
                <div className="relative z-10 p-5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-9 h-9 flex items-center justify-center backdrop-blur-md border ${
                        isEmerald
                          ? 'bg-emerald-500/15 border-emerald-400/60 text-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.3)]'
                          : 'bg-sky-500/15 border-sky-400/60 text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="px-2.5 py-1 bg-zinc-950/80 backdrop-blur-sm border border-zinc-800 font-mono text-[10px] tracking-widest text-zinc-300">
                      {project.code}
                    </span>
                  </div>

                  <span
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                    className={`text-xs font-black tracking-widest px-2 py-1 bg-zinc-950/80 border ${
                      isEmerald
                        ? 'border-emerald-500/40 text-emerald-400'
                        : 'border-sky-500/40 text-sky-400'
                    }`}
                  >
                    {project.id}
                  </span>
                </div>

                {/* ================= CONTENIDO INFERIOR SOBRE EL DEGRADADO NEGRO ================= */}
                <div className="relative z-10 p-6 pt-12 flex flex-col justify-end">
                  {/* Línea de acento HUD */}
                  <div
                    className={`w-14 h-[2px] mb-3 transition-all duration-300 group-hover:w-24 ${
                      isEmerald
                        ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]'
                        : 'bg-sky-400 shadow-[0_0_8px_#38bdf8]'
                    }`}
                  />

                  <div
                    className={`font-mono text-[10px] tracking-[0.22em] uppercase mb-1 ${
                      isEmerald ? 'text-emerald-400' : 'text-sky-400'
                    }`}
                  >
                    {project.category}
                  </div>

                  <div className="flex items-start justify-between gap-2">
                    <h3
                      style={{ fontFamily: "'Orbitron', sans-serif" }}
                      className="text-xl sm:text-2xl font-black text-zinc-100 tracking-wide uppercase group-hover:text-white transition-colors"
                    >
                      {project.title}
                    </h3>

                    <a
                      href={project.link}
                      aria-label={`Explore ${project.title}`}
                      className={`p-1.5 border transition-colors shrink-0 ${
                        isEmerald
                          ? 'border-emerald-500/40 text-emerald-400 hover:bg-emerald-400 hover:text-zinc-950'
                          : 'border-sky-500/40 text-sky-400 hover:bg-sky-400 hover:text-zinc-950'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="font-mono text-xs text-zinc-400 mt-1 mb-3">
                    {project.subtitle}
                  </div>

                  <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Etiquetas inferiores */}
                  <div className="pt-4 border-t border-zinc-800/90 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-0.5 text-[10px] font-mono tracking-wider border backdrop-blur-sm ${
                          isEmerald
                            ? 'bg-emerald-500/10 border-emerald-500/35 text-emerald-300'
                            : 'bg-sky-500/10 border-sky-500/35 text-sky-300'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}