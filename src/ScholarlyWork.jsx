import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Network,
  Smartphone,
  Box,
  Layers,
  Sparkles,
} from 'lucide-react';

const SCHOLARLY_COLUMNS = [
  {
    id: '01',
    code: 'APPOINTMENT // UNAM_FAD',
    title: 'Assistant Professor, UNAM',
    subtitle: '15+ Years Tenure · 100+ Graduated Theses',
    description:
      'Over 15 years of university-level teaching and academic thesis supervision at UNAM (Faculty of Arts and Design & DGTIC), mentoring and graduating more than 100 students across visual communication, interactive media, and digital technology.',
    tags: ['UNAM', '100+ Theses', 'Academic Mentorship'],
    image: 'images/scholar/landscape.jpg',
    imageLabel: 'ORIGINAL_LANDSCAPE_ART',
    icon: GraduationCap,
    accent: 'emerald',
  },
  {
    id: '02',
    code: 'CREDENTIALS // DOCTORAL_ENG',
    title: 'Ph.D. in Arts / B.Sc. Software Eng.',
    subtitle: 'Image Science & Generative AI Research',
    description:
      'Interdisciplinary doctoral and engineering background bridging fine arts and network/software architecture. Focused on computational image synthesis, custom LoRA pipelines, and ethical AI integration in visual production.',
    tags: ['Ph.D. Arts', 'Software Eng.', 'AI & Image'],
    image: 'images/scholar/cisco-net.jpg',
    imageLabel: 'CISCO_TOPOLOGY_LAB',
    icon: Network,
    accent: 'sky',
  },
  {
    id: '03',
    code: 'LAB_CORE // VISUAL_NOVELS',
    title: 'Research',
    subtitle: 'Visual Novels & Multimedia Pipelines',
    description:
      'Designing modular production pipelines that unite interactive visual novel engines, Live2D character rigging, generative asset consistency, and web-native storytelling ecosystems.',
    tags: ['Visual Novels', 'Pipelines', 'Interactive Fiction'],
    image: 'images/scholar/app-inventor.jpg',
    imageLabel: 'APP_INVENTOR_PROTOTYPE',
    icon: Smartphone,
    accent: 'emerald',
  },
  {
    id: '04',
    code: 'CURRICULUM // MULTIMEDIA',
    title: 'Teaching',
    subtitle: 'Web, Games, React, Narrative & Sound',
    description:
      'Delivering specialized instruction in modern front-end web engineering (React, Tailwind), game development, interactive narrative design, visual storytelling, and electronic sound synthesis.',
    tags: ['React & Web', 'Game Dev', 'Storytelling & Sound'],
    image: 'images/scholar/blender-3d.jpg',
    imageLabel: 'BLENDER_3D_ENVIRONMENT',
    icon: Box,
    accent: 'sky',
  },
];

export default function ScholarlyWork() {
  const [imgErrors, setImgErrors] = useState({});

  return (
    <section
      id="scholarly-work"
      className="relative w-full bg-zinc-950 text-zinc-200 py-20 border-b border-zinc-800 overflow-hidden"
    >
      {/* Rejilla de fondo Tech-Noir */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(56, 189, 248, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(52, 211, 153, 0.06) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-10">
        {/* ================= TÍTULO EXTENDIDO TRANSPARENTE CON LETRAS ELÉCTRICAS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative w-full bg-zinc-950/60 backdrop-blur-md border border-sky-400/50 px-6 sm:px-8 py-6 shadow-[0_0_35px_rgba(56,189,248,0.14)] flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          {/* Esquinas HUD */}
          <span className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-emerald-400" />
          <span className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-sky-400" />
          <span className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-sky-400" />
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-emerald-400" />

          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.28em] text-emerald-400 uppercase mb-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>ACADEMIC_ARCHIVE // 2006 — 2026</span>
            </div>

            <h2
              style={{ fontFamily: "'Orbitron', sans-serif" }}
              className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-400 drop-shadow-[0_0_16px_rgba(56,189,248,0.65)]"
            >
              Scholarly Work
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-zinc-400 font-mono leading-relaxed md:text-right">
            // INTERDISCIPLINARY TRAJECTORY BRIDGING UNIVERSITY PROFESSORSHIP,
            SOFTWARE ENGINEERING, AND COMPUTATIONAL ART RESEARCH.
          </p>
        </motion.div>

        {/* ================= 4 COLUMNAS ALINEADAS UNIFORMEMENTE ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {SCHOLARLY_COLUMNS.map((col, idx) => {
            const Icon = col.icon;
            const isEmerald = col.accent === 'emerald';

            return (
              <motion.article
                key={col.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative h-full flex flex-col bg-zinc-900/90 border border-zinc-800 ${
                  isEmerald
                    ? 'hover:border-emerald-400/80'
                    : 'hover:border-sky-400/80'
                } shadow-2xl transition-all duration-300 group overflow-hidden`}
              >
                {/* ================= IMAGEN VERTICAL SUPERIOR DE LA COLUMNA ================= */}
                <div className="relative w-full h-64 sm:h-72 shrink-0 bg-zinc-950 overflow-hidden border-b border-zinc-800">
                  {!imgErrors[col.id] ? (
                    <img
                      src={col.image}
                      alt={col.title}
                      onError={() =>
                        setImgErrors((prev) => ({ ...prev, [col.id]: true }))
                      }
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center font-mono bg-gradient-to-b from-zinc-900 to-zinc-950">
                      <Sparkles
                        className={`w-8 h-8 mb-2 ${
                          isEmerald ? 'text-emerald-400' : 'text-sky-400'
                        }`}
                      />
                      <span
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                        className="text-xs font-bold tracking-widest text-zinc-300"
                      >
                        [{col.imageLabel}]
                      </span>
                      <span className="text-[10px] text-zinc-500 mt-1 break-all">
                        public{col.image}
                      </span>
                    </div>
                  )}

                  {/* Viñeta oscura inferior para fundir la imagen con la caja de texto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />

                  {/* Etiqueta HUD superior derecha dentro de la imagen */}
                  <div
                    className={`absolute top-3 right-3 px-2.5 py-1 bg-zinc-950/85 backdrop-blur-sm border font-mono text-[10px] tracking-widest ${
                      isEmerald
                        ? 'border-emerald-500/40 text-emerald-400'
                        : 'border-sky-500/40 text-sky-400'
                    }`}
                  >
                    NODE_{col.id}
                  </div>
                </div>

                {/* ================= CAJA BASE INFERIOR CON DESCRIPCIÓN ================= */}
                <div className="relative p-6 flex-1 flex flex-col justify-between bg-zinc-950/95">
                  {/* Línea luminosa divisoria */}
                  <div
                    className={`absolute top-0 inset-x-0 h-[2px] ${
                      isEmerald
                        ? 'bg-gradient-to-r from-emerald-400 via-sky-400 to-transparent'
                        : 'bg-gradient-to-r from-sky-400 via-emerald-400 to-transparent'
                    }`}
                  />

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-[10px] tracking-widest text-zinc-500">
                        {col.code}
                      </span>
                      <div
                        className={`w-8 h-8 shrink-0 flex items-center justify-center border ${
                          isEmerald
                            ? 'bg-emerald-500/10 border-emerald-400/40 text-emerald-400'
                            : 'bg-sky-500/10 border-sky-400/40 text-sky-400'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3
                      style={{ fontFamily: "'Orbitron', sans-serif" }}
                      className="text-base sm:text-lg font-bold text-zinc-100 tracking-wide uppercase leading-snug"
                    >
                      {col.title}
                    </h3>

                    <div
                      className={`font-mono text-[11px] mt-1 mb-3 ${
                        isEmerald ? 'text-emerald-400' : 'text-sky-400'
                      }`}
                    >
                      {col.subtitle}
                    </div>

                    <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed">
                      {col.description}
                    </p>
                  </div>

                  {/* Píldoras inferiores */}
                  <div className="mt-5 pt-4 border-t border-zinc-800/80 flex flex-wrap gap-1.5">
                    {col.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-0.5 text-[10px] font-mono tracking-wider border ${
                          isEmerald
                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                            : 'bg-sky-500/10 border-sky-500/30 text-sky-300'
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