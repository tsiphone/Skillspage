import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Scan, Sparkles } from 'lucide-react';

const CHARACTERS = [
  {
    id: '01',
    name: 'ARCHENNIA VARHANNIS',
    role: 'PROTAGONIST // MIRROR',
    thumb: 'images/chars/char-01-thumb.jpg',
    full: 'images/chars/char-01-full.png',
  },
  {
    id: '02',
    name: 'ERESHKIGAL GALAXIA',
    role: 'PROTAGONIST // ETHEREUM',
    thumb: 'images/chars/char-02-thumb.jpg',
    full: 'images/chars/char-02-full.png',
  },
  {
    id: '03',
    name: 'FOXY LONGTAIL',
    role: 'PROTAGONIST // HUNTER SEASON',
    thumb: 'images/chars/char-03-thumb.jpg',
    full: 'images/chars/char-03-full.png',
  },
  {
    id: '04',
    name: 'ETHEL WHITE',
    role: 'PROTAGONIST // SHADOWS',
    thumb: 'images/chars/char-04-thumb.jpg',
    full: 'images/chars/char-04-full.png',
  },
  {
    id: '05',
    name: 'SOL 07-586-1',
    role: 'PROTAGONIST // PULSE',
    thumb: 'images/chars/char-05-thumb.jpg',
    full: 'images/chars/char-05-full.png',
  },
  {
    id: '06',
    name: 'ALICE NIGHT',
    role: 'PROTAGONIST // CIRCUIT',
    thumb: 'images/chars/char-06-thumb.jpg',
    full: 'images/chars/char-06-full.png',
  },
  {
    id: '07',
    name: 'JANO TREI',
    role: 'PROTAGONIST // MIRROR',
    thumb: 'images/chars/char-07-thumb.jpg',
    full: 'images/chars/char-07-full.png',
  },
];

export default function CharacterGallery() {
  const [selectedChar, setSelectedChar] = useState(CHARACTERS[0]);
  const [fullImgError, setFullImgError] = useState({});
  const [thumbErrors, setThumbErrors] = useState({});

  const handleSelect = (char) => {
    setSelectedChar(char);
  };

  return (
    <section className="relative w-full min-h-[115vh] bg-zinc-950 text-zinc-200 py-14 border-b border-zinc-800 overflow-hidden flex items-center">
      {/* Rejilla holográfica sutil de fondo */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(56, 189, 248, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.06) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Contenedor principal de 12 columnas con altura ampliada */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch min-h-[820px]">
          
          {/* ================= ZONA IZQUIERDA + CENTRAL CON CAJA FLOTANTE (10 COLUMNAS) ================= */}
          <div className="lg:col-span-10 relative grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch min-h-[820px]">
            
            {/* Columna Izquierda: HUD Holográfico Animado (ocupa hasta encima de la caja flotante) */}
            <div className="md:col-span-4 relative min-h-[300px] md:h-[560px] bg-zinc-900/60 border border-sky-500/40 p-5 flex flex-col justify-between overflow-hidden shadow-[inset_0_0_30px_rgba(56,189,248,0.06)] z-10">
              {/* Esquinas HUD */}
              <span className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-sky-400" />
              <span className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-sky-400" />
              <span className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-sky-400" />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-sky-400" />

              {/* Línea de escaneo vertical */}
              <motion.div
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/80 to-transparent shadow-[0_0_10px_#38bdf8]"
              />

              <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-sky-400">
                <span>HOLO_MATRIX // {selectedChar.id}</span>
                <Scan className="w-4 h-4 animate-pulse" />
              </div>

              {/* Núcleo circular holográfico central */}
              <div className="relative my-auto mx-auto w-40 h-40 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border border-dashed border-sky-400/70"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-4 rounded-full border-2 border-t-emerald-400 border-r-transparent border-b-sky-400 border-l-transparent"
                />
                <motion.div
                  animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-14 h-14 rounded-full border border-sky-400/80 bg-sky-500/10 flex items-center justify-center"
                >
                  <span className="font-mono text-sm font-bold text-emerald-400">
                    {selectedChar.id}
                  </span>
                </motion.div>
              </div>

              {/* Datos activos del personaje en el HUD */}
              <div className="font-mono border-t border-zinc-800 pt-3">
                <div className="text-[10px] text-zinc-500 tracking-widest">
                  ACTIVE_ENTITY
                </div>
                <div
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                  className="text-lg font-bold text-sky-300 tracking-wider mt-0.5"
                >
                  {selectedChar.name}
                </div>
                <div className="text-[11px] text-emerald-400/90 mt-0.5">
                  {selectedChar.role}
                </div>
              </div>
            </div>

            {/* Columna Central: Escenario Negro a TODO LO ALTO de la sección */}
            <div className="md:col-span-8 relative min-h-[580px] md:h-[820px] bg-black border border-zinc-700 overflow-hidden flex items-center justify-center shadow-2xl">
              {/* Fondo negro profundo (puerta oscura) */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-zinc-950 to-zinc-900/90" />

              {/* Borde luminoso vertical de la "puerta negra" a la izquierda */}
              <div className="absolute inset-y-8 left-6 w-[2px] bg-gradient-to-b from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#34d399] z-20" />

              {/* Rejilla holográfica sutil detrás del personaje */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at center, rgba(52, 211, 153, 0.25) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Personaje completo ocupando todo el alto */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedChar.id}
                  initial={{
                    opacity: 0,
                    x: -100,
                    clipPath: 'inset(0% 100% 0% 0%)',
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    clipPath: 'inset(0% 0% 0% 0%)',
                  }}
                  exit={{
                    opacity: 0,
                    x: 40,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative z-10 w-full h-full flex items-end justify-center pt-6 px-6"
                >
                  {!fullImgError[selectedChar.id] ? (
                    <img
                      src={selectedChar.full}
                      alt={selectedChar.name}
                      onError={() =>
                        setFullImgError((prev) => ({
                          ...prev,
                          [selectedChar.id]: true,
                        }))
                      }
                      className="h-[94%] max-h-[770px] w-auto object-contain drop-shadow-[0_0_28px_rgba(52,211,153,0.3)]"
                    />
                  ) : (
                    <div className="my-auto flex flex-col items-center justify-center p-10 text-center font-mono border border-dashed border-emerald-500/40 bg-zinc-950/80">
                      <Sparkles className="w-9 h-9 text-emerald-400 mb-2" />
                      <span
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                        className="text-sm font-bold text-emerald-300 tracking-widest"
                      >
                        [{selectedChar.name} // FULL_BODY]
                      </span>
                      <span className="text-[11px] text-zinc-500 mt-1">
                        public{selectedChar.full}
                      </span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* HUD frontal superior */}
              <div className="absolute top-3 right-3 font-mono text-[10px] tracking-widest text-emerald-400/80 bg-zinc-950/80 border border-emerald-500/30 px-2.5 py-1 z-20">
                PROJECTION_STREAM // {selectedChar.id}
              </div>
            </div>

            {/* ================= CAJA INFERIOR FLOTANTE SUPERPUESTA ================= */}
            <div className="relative md:absolute md:bottom-5 md:inset-x-0 z-30 bg-zinc-950/75 backdrop-blur-md border border-sky-400/60 p-5 sm:p-6 shadow-[0_0_30px_rgba(0,0,0,0.85)]">
              {/* Línea superior holográfica */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-emerald-400 via-sky-400 to-transparent" />

              <div className="flex items-center justify-between mb-2.5 font-mono text-xs text-emerald-400 tracking-widest">
                <span>// ABOUT_THE_WORK · CONCEPTUAL_RATIONALE</span>
                <span className="text-sky-400">ARCHIVE_DOC_04</span>
              </div>

              <p
                style={{ fontFamily: "'Orbitron', sans-serif" }}
                className="text-xs sm:text-[13px] text-zinc-100 leading-relaxed tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
              >
                THIS INTERACTIVE CHARACTER ARCHIVE INTEGRATES PROCEDURAL VISUAL
                STORYTELLING, CUSTOM AI LORA MODELING, AND RESPONSIVE INTERFACE
                ARCHITECTURE. EACH ENTITY REPRESENTS A SYNTHESIS OF NARRATIVE
                DESIGN AND COMPUTATIONAL RESEARCH, ENGINEERED TO DEMONSTRATE
                CHARACTER CONSISTENCY, DIGITAL ILLUSTRATION PIPELINES, AND
                IMMERSIVE WEB SYSTEMS WITHIN A UNIFIED TECH-NOIR PORTFOLIO.
              </p>
            </div>
          </div>

          {/* ================= COLUMNA DERECHA: 7 CUADROS VERTICALES DE PERSONAJES ================= */}
          <div className="lg:col-span-2 flex flex-col justify-between bg-zinc-900/70 border border-zinc-800 p-3 min-h-[820px]">
            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 tracking-widest pb-2 mb-2 border-b border-zinc-800">
              <span>ROSTER</span>
              <Users className="w-3.5 h-3.5 text-sky-400" />
            </div>

            {/* 7 cuadros verticales estirados proporcionalmente al alto ampliado */}
            <div className="grid grid-cols-7 lg:grid-cols-1 gap-2.5 flex-1">
              {CHARACTERS.map((char) => {
                const isActive = selectedChar.id === char.id;
                return (
                  <button
                    key={char.id}
                    onClick={() => handleSelect(char)}
                    title={char.name}
                    className={`relative w-full h-24 lg:h-full overflow-hidden border transition-all duration-300 cursor-pointer group ${
                      isActive
                        ? 'border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.45)] scale-[1.02]'
                        : 'border-zinc-700/80 opacity-65 hover:opacity-100 hover:border-sky-400'
                    }`}
                  >
                    {!thumbErrors[char.id] ? (
                      <img
                        src={char.thumb}
                        alt={char.name}
                        onError={() =>
                          setThumbErrors((prev) => ({ ...prev, [char.id]: true }))
                        }
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full bg-zinc-950 flex flex-col items-center justify-center font-mono">
                        <span
                          className={`text-[11px] font-bold ${
                            isActive ? 'text-emerald-400' : 'text-zinc-400'
                          }`}
                        >
                          {char.id}
                        </span>
                      </div>
                    )}

                    {/* Barra lateral indicadora cuando está seleccionado */}
                    {isActive && (
                      <span className="absolute inset-y-0 left-0 w-1 bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}