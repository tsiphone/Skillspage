import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  ScanEye,
  AudioWaveform,
  Gamepad2,
  Cpu,
  Radio,
} from 'lucide-react';

const STATS_CARDS = [
  {
    id: '01',
    value: '15+',
    label: 'Years in Academia',
    sub: 'UNAM // Higher Ed',
    icon: GraduationCap,
  },
  {
    id: '02',
    value: 'IMG',
    label: 'Image Research',
    sub: 'Visual & LoRA Models',
    icon: ScanEye,
  },
  {
    id: '03',
    value: 'AI·SND',
    label: 'AI & Music Research',
    sub: 'Dark Ambient & Synth',
    icon: AudioWaveform,
  },
  {
    id: '04',
    value: 'GAME',
    label: 'Video Games & VTuber',
    sub: 'Live2D & Interactive',
    icon: Gamepad2,
  },
];

export default function Hero() {
  const [photoError, setPhotoError] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] bg-zinc-900 text-zinc-200 overflow-hidden border-b border-zinc-700/80 flex items-center py-12">
      {/* Textura sutil de rejilla arquitectónica 1930s + resplandor azul eléctrico HUD */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(56, 189, 248, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.08) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Líneas guía verticales estilo Art Déco / HUD */}
      <div className="hidden lg:block absolute inset-y-0 left-8 w-px bg-gradient-to-b from-transparent via-sky-500/30 to-transparent pointer-events-none" />
      <div className="hidden lg:block absolute inset-y-0 right-8 w-px bg-gradient-to-b from-transparent via-sky-500/30 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full space-y-8">
        {/* ================= BLOQUE SUPERIOR: FOTO + NOMBRE & DESCRIPCIÓN ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Izquierda: Fotografía Real con marco HUD 1930s */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 relative group bg-zinc-950/90 border border-zinc-700 p-3 flex flex-col justify-between shadow-2xl"
          >
            {/* Esquinas iluminadas en azul eléctrico */}
            <span className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-sky-400" />
            <span className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-sky-400" />
            <span className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-sky-400" />
            <span className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-sky-400" />

            <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-sky-400/80 pb-2 border-b border-zinc-800">
              <span>ID_SUBJECT // 01</span>
              <span>REAL_WORLD_NODE</span>
            </div>

            <div className="relative my-3 aspect-[4/4] w-full bg-zinc-800/80 overflow-hidden border border-zinc-700/70">
              {!photoError ? (
                <img
                  src="images/profile.jpg"
                  alt="Amador Ulises Rosas García"
                  onError={() => setPhotoError(true)}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center font-mono">
                  <Cpu className="w-10 h-10 text-sky-400/70 mb-3" />
                  <span className="text-xs text-zinc-300 tracking-widest uppercase">
                    [PHOTO_SLOT]
                  </span>
                  <span className="text-[11px] text-zinc-500 mt-1">
                    public/images/profile.jpg
                  </span>
                </div>
              )}
              {/* Escáner horizontal sutil */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-zinc-950/90 to-transparent pointer-events-none" />
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-1">
              <span>ST. CATHARINES // ON</span>
              <span className="text-sky-400">VERIFIED_SCHOLAR</span>
            </div>
          </motion.div>

          {/* Derecha: Nombre en Orbitron + Caja de Grados y Descripción en Inglés */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 flex flex-col justify-between gap-6"
          >
            {/* Caja del Nombre en Orbitron */}
            <div className="relative bg-zinc-950/80 border border-zinc-700/90 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-sky-400 mb-3">
                <span className="w-8 h-[1px] bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
                <span>ENGINEER · ARTIST · RESEARCHER</span>
              </div>

              <h1
                style={{ fontFamily: "'Orbitron', sans-serif" }}
                className="text-3xl sm:text-5xl xl:text-[3.25rem] font-black tracking-wider text-zinc-100 uppercase leading-tight drop-shadow-[0_0_18px_rgba(56,189,248,0.18)]"
              >
                Ulises
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-sky-200 to-sky-400">
                  García
                </span>
              </h1>

              {/* Doble línea Art Déco inferior */}
              <div className="mt-5 space-y-1">
                <div className="h-[1px] w-full bg-gradient-to-r from-sky-400 via-zinc-600 to-transparent" />
                <div className="h-[1px] w-2/3 bg-zinc-700/70" />
              </div>
            </div>

            {/* Caja de Grados y Descripción en Inglés */}
            <div className="relative flex-1 bg-zinc-950/75 border-l-2 border-sky-400 border-y border-r border-zinc-800 p-6 sm:p-7 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2 mb-3 font-mono text-xs">
                <span className="px-2.5 py-0.5 bg-sky-500/10 border border-sky-400/50 text-sky-300 tracking-wider">
                  Ph.D. in Arts & Design
                </span>
                <span className="px-2.5 py-0.5 bg-zinc-800 border border-zinc-600 text-zinc-300 tracking-wider">
                  B.Sc. in Computer Engineering
                </span>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                PhD in Arts, Bachelor in Computer Engineering. My work focuses on
                bridging fine arts and software engineering to build better{' '}
                <span className="text-sky-300 font-normal">AI models</span>,{' '}
                <span className="text-sky-300 font-normal">
                  responsive, ludic, and multimedia systems
                </span>
                , alongside applied research in{' '}
                <span className="text-zinc-100 font-normal">
                  systems architecture and data analytics
                </span>
                .
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================= BLOQUE INFERIOR: 4 CAJAS + AVATAR VIRTUAL ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* 4 Cajas de Trayectoria / Investigación (8 columnas en desktop) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {STATS_CARDS.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }}
                  className="relative bg-zinc-950/85 border border-zinc-800 hover:border-sky-400/80 p-5 flex flex-col justify-between transition-all duration-300 group shadow-lg"
                >
                  {/* Línea superior azul eléctrico al hacer hover */}
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-sky-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 shadow-[0_0_10px_#38bdf8]" />

                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] text-zinc-500">
                      //{card.id}
                    </span>
                    <Icon className="w-4 h-4 text-sky-400/80 group-hover:text-sky-300 transition-colors" />
                  </div>

                  <div>
                    <div
                      style={{ fontFamily: "'Orbitron', sans-serif" }}
                      className="text-2xl font-bold text-zinc-100 group-hover:text-sky-300 transition-colors tracking-wide"
                    >
                      {card.value}
                    </div>
                    <div className="mt-1.5 text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                      {card.label}
                    </div>
                    <div className="mt-1 text-[11px] font-mono text-zinc-500">
                      {card.sub}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Derecha: Avatar Virtual / VTuber Model (4 columnas en desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
            className="lg:col-span-4 relative bg-zinc-950/90 border border-sky-500/40 hover:border-sky-400 p-4 flex items-center gap-4 shadow-[0_0_25px_rgba(56,189,248,0.08)] group transition-all"
          >
            {/* Esquinas HUD */}
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-sky-400" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-sky-400" />

            {/* Recuadro de imagen/modelo VTuber */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 bg-zinc-900 border border-zinc-700 overflow-hidden">
              {!avatarError ? (
                <img
                  src="images/vtuber-avatar.png"
                  alt="Virtual VTuber Avatar"
                  onError={() => setAvatarError(true)}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-2 text-center font-mono">
                  <Radio className="w-6 h-6 text-sky-400 animate-pulse mb-1" />
                  <span className="text-[10px] text-zinc-300">[VTUBER_AI]</span>
                  <span className="text-[9px] text-zinc-500 leading-tight mt-0.5">
                    vtuber-avatar.png
                  </span>
                </div>
              )}
            </div>

            {/* Ficha HUD del Avatar */}
            <div className="flex-1 min-w-0 font-mono">
              <div className="flex items-center gap-1.5 text-[10px] text-sky-400 tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
                <span>VIRTUAL_PROXY // AI</span>
              </div>
              <h2
                style={{ fontFamily: "'Orbitron', sans-serif" }}
                className="text-base sm:text-lg font-bold text-zinc-100 tracking-wider mt-1 truncate"
              >
                VTUBER AVATAR
              </h2>
              <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                AI-driven digital persona & Live2D interactive presence in creative tech.
              </p>
              <div className="mt-2.5 inline-block px-2 py-0.5 text-[10px] bg-sky-500/10 border border-sky-400/40 text-sky-300">
                STATUS: ONLINE
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}