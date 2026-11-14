import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Scale,
  BookOpen,
  ScanEye,
  Clapperboard,
  Footprints,
  Terminal,
} from 'lucide-react';

const RESEARCH_PILLARS = [
  {
    id: '01',
    title: 'AI Art Ethics',
    icon: Scale,
    accent: 'emerald',
    description:
      'Investigating authorship, dataset transparency, and ethical boundaries in generative workflows to protect artistic identity.',
  },
  {
    id: '02',
    title: 'Narrative',
    icon: BookOpen,
    accent: 'sky',
    description:
      'Structuring non-linear interactive fiction where computational logic enhances emotional resonance and reader agency.',
  },
  {
    id: '03',
    title: 'Image',
    icon: ScanEye,
    accent: 'emerald',
    description:
      'Developing custom LoRA architectures, semi-realistic shading pipelines, and visual consistency models.',
  },
  {
    id: '04',
    title: 'Visual Storytelling',
    icon: Clapperboard,
    accent: 'sky',
    description:
      'Merging sequential comic art, Live2D motion, and atmospheric soundscapes into cohesive multimedia experiences.',
  },
];

export default function CurrentResearch() {
  const [chibiError, setChibiError] = useState(false);

  return (
    <section className="relative w-full bg-zinc-950 text-zinc-200 py-16 border-b border-zinc-800 overflow-hidden">
      {/* Rejilla arquitectónica 1930s Tech-Noir */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(56, 189, 248, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.06) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-8">
        {/* ================= CAJA SUPERIOR: CURRENT RESEARCH ================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-zinc-900/90 border border-zinc-700/90 p-6 sm:p-8 shadow-2xl"
        >
          {/* Esquinas HUD azul eléctrico */}
          <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-sky-400" />
          <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-sky-400" />
          <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-sky-400" />
          <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-sky-400" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-emerald-400 mb-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>ACTIVE_RESEARCH_PROGRAM // 2026</span>
              </div>

              <h2
                style={{ fontFamily: "'Orbitron', sans-serif" }}
                className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wider uppercase text-zinc-100"
              >
                Current{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-emerald-400">
                  Research
                </span>
              </h2>

              <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                Exploring the intersection of ethical generative AI, consistent
                visual representation, and interactive narrative systems to
                establish reproducible creative-engineering pipelines.
              </p>
            </div>

            {/* Indicadores numéricos compactos 01-04 estilo Tech-Noir */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2.5 shrink-0 font-mono">
              {RESEARCH_PILLARS.map((item) => (
                <div
                  key={item.id}
                  className="px-3 py-2 bg-zinc-950/90 border border-zinc-800 text-xs flex items-center gap-2"
                >
                  <span className="text-sky-400 font-bold">{item.id}</span>
                  <span className="text-zinc-400 truncate max-w-[110px]">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ================= 4 CARDS DE INVESTIGACIÓN ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {RESEARCH_PILLARS.map((card, idx) => {
            const Icon = card.icon;
            const isEmerald = card.accent === 'emerald';

            return (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`relative bg-zinc-900/85 border border-zinc-800 ${
                  isEmerald
                    ? 'hover:border-emerald-400/80'
                    : 'hover:border-sky-400/80'
                } p-6 flex flex-col justify-between transition-all duration-300 group shadow-xl`}
              >
                {/* Línea superior animada al hacer hover */}
                <div
                  className={`absolute top-0 inset-x-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${
                    isEmerald
                      ? 'bg-emerald-400 shadow-[0_0_10px_#34d399]'
                      : 'bg-sky-400 shadow-[0_0_10px_#38bdf8]'
                  }`}
                />

                {/* Cabecera de la card: Ícono + Número + Título */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-10 h-10 flex items-center justify-center border ${
                        isEmerald
                          ? 'bg-emerald-500/10 border-emerald-400/40 text-emerald-400'
                          : 'bg-sky-500/10 border-sky-400/40 text-sky-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-zinc-500 tracking-widest">
                      NODE // {card.id}
                    </span>
                  </div>

                  <h3
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                    className="text-lg font-bold text-zinc-100 tracking-wide uppercase group-hover:text-white transition-colors"
                  >
                    {card.title}
                  </h3>
                </div>

                {/* Sub-caja inferior de 4 líneas para la descripción */}
                <div className="mt-5 pt-4 border-t border-zinc-800/90 bg-zinc-950/65 p-3.5 border border-zinc-800/70">
                  <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed line-clamp-4">
                    {card.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ================= FRANJA INFERIOR DE ANCHO COMPLETO: PASARELA CHIBI WEBP ================= */}
        <div className="relative w-full h-36 sm:h-44 bg-zinc-950 border border-zinc-800 overflow-hidden shadow-inner flex items-end">
          {/* Fondo arquitectónico sutil estilo pasarela nocturna 1930s */}
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, rgba(56,189,248,0.08) 0px, rgba(56,189,248,0.08) 1px, transparent 1px, transparent 80px)',
            }}
          />

          {/* Línea de horizonte / suelo luminoso donde pisa el chibi */}
          <div className="absolute bottom-5 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/70 to-transparent shadow-[0_0_10px_#38bdf8]" />
          <div className="absolute bottom-3 inset-x-12 h-[1px] bg-zinc-800" />

          {/* Etiqueta HUD superior izquierda */}
          <div className="absolute top-3 left-4 font-mono text-[10px] tracking-widest text-zinc-500 flex items-center gap-2 z-20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>ENTITY_WALK_CYCLE // WEBP_STREAM</span>
          </div>

          {/* Desplazamiento horizontal continuo de izquierda a derecha */}
          {/* Desplazamiento horizontal continuo de izquierda a derecha */}
          <motion.div
            animate={{ x: ['-15%', '105vw'] }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="relative z-10 mb-5 flex items-end"
          >
            {!chibiError ? (
              <video
                src="/images/chibi-walk.webm"
                autoPlay
                loop
                muted
                playsInline
                onError={() => setChibiError(true)}
                className="h-24 sm:h-28 w-auto object-contain drop-shadow-[0_0_12px_rgba(52,211,153,0.35)]"
              />
            ) : (
              /* Placeholder animado mientras colocas chibi-walk.webm */
              <div className="px-4 py-2 bg-zinc-900/90 border border-emerald-400/50 font-mono text-[11px] text-emerald-300 flex items-center gap-2 shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                <Footprints className="w-4 h-4 text-emerald-400 animate-bounce" />
                <span>[CHIBI_WALK.WEBM // public/images/chibi-walk.webm]</span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}