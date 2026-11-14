import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, Play, Pause, Disc3 } from 'lucide-react';

const TRACKS = [
  {
    id: '01',
    title: 'FROZEN_STAR // DARK_AMBIENT',
    duration: '02:43',
    src: '/audio/frozenstar.mp3',
  },
  {
    id: '02',
    title: 'ETERNAL_NIGHT_OF_THE_NORTH',
    duration: '06:47',
    src: '/audio/blackwitch.mp3',
  },
  {
    id: '03',
    title: 'BUCHERSAMMLUNG // DARK_AMBIENT',
    duration: '04:00',
    src: '/audio/biblioteca.mp3',
  },
  {
    id: '04',
    title: 'SINS_OF_MANKIND // NOIR_SYNTH',
    duration: '02:42',
    src: '/audio/sins.mp3',
  },
];

function ScrollingTrackTitle({ text }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const calculateOverflow = () => {
      if (containerRef.current && textRef.current) {
        const overflow = textRef.current.scrollWidth - containerRef.current.clientWidth;
        setOffset(overflow > 0 ? -(overflow + 8) : 0);
      }
    };
    calculateOverflow();
    window.addEventListener('resize', calculateOverflow);
    return () => window.removeEventListener('resize', calculateOverflow);
  }, [text]);

  return (
    <div ref={containerRef} className="overflow-hidden whitespace-nowrap w-full">
      <span
        ref={textRef}
        style={{ '--scroll-offset': `${offset}px` }}
        className={`inline-block text-xs font-semibold tracking-wide transition-transform duration-300 ${
          offset < 0 ? 'animate-track-scroll' : ''
        }`}
      >
        {text}
      </span>
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrack]);

  const handleSelectTrack = (track) => {
    if (currentTrack.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-900/95 backdrop-blur-md border-b border-zinc-700/80 text-zinc-200 font-mono shadow-lg">
      <audio ref={audioRef} src={currentTrack.src} loop />

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* Izquierda: Caja telemétrica Tech-Noir en verde eléctrico */}
        <div
          className={`h-10 px-3.5 flex items-center gap-3 border transition-all duration-300 select-none max-w-xs sm:max-w-md overflow-hidden ${
            isPlaying
              ? 'bg-emerald-950/35 border-emerald-400/80 shadow-[0_0_15px_rgba(52,211,153,0.22)] text-emerald-300'
              : 'bg-zinc-950/70 border-zinc-800 text-zinc-500'
          }`}
        >
          {/* Barras ecualizadoras animadas en verde eléctrico */}
          <div className="flex items-end gap-[2px] h-3.5 shrink-0">
            {[0.4, 0.9, 0.6, 1].map((height, idx) => (
              <motion.span
                key={idx}
                animate={
                  isPlaying
                    ? { scaleY: [0.3, height, 0.4, 1, 0.3] }
                    : { scaleY: 0.25 }
                }
                transition={
                  isPlaying
                    ? {
                        duration: 0.9 + idx * 0.15,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }
                    : { duration: 0.2 }
                }
                style={{ originY: 1 }}
                className={`w-[3px] h-full ${
                  isPlaying
                    ? 'bg-emerald-400 shadow-[0_0_6px_#34d399]'
                    : 'bg-zinc-600'
                }`}
              />
            ))}
          </div>

          {/* Nombre de la pista en turno con transición animada */}
          <div className="overflow-hidden whitespace-nowrap flex items-center gap-2 text-xs tracking-wider">
            <span
              className={`font-bold shrink-0 ${
                isPlaying ? 'text-emerald-400' : 'text-zinc-600'
              }`}
            >
              {isPlaying ? 'NOW_PLAYING //' : 'STANDBY //'}
            </span>

            <AnimatePresence mode="wait">
              <motion.span
                key={`${currentTrack.id}-${isPlaying}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className={`truncate font-semibold ${
                  isPlaying
                    ? 'text-emerald-300 drop-shadow-[0_0_6px_rgba(52,211,153,0.6)]'
                    : 'text-zinc-400'
                }`}
              >
                {isPlaying
                  ? `${currentTrack.id} · ${currentTrack.title}`
                  : 'SELECT_AUDIO_STREAM'}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Centro: Vacío intencionalmente */}
        <div className="flex-1" />

        {/* Derecha: Botón de Audio + Menú Hamburguesa desplegable */}
        <div className="relative flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            title={isPlaying ? 'Pausar audio' : 'Reproducir pista actual'}
            className={`h-10 px-3 flex items-center gap-2 border transition-colors cursor-pointer ${
              isPlaying
                ? 'bg-zinc-800 border-emerald-500/70 text-emerald-300'
                : 'bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'
            }`}
          >
            {isPlaying ? (
              <Volume2 className="w-4 h-4 text-emerald-400" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
            <span className="text-xs tracking-wider hidden md:inline">
              {isPlaying ? 'ON' : 'MUTE'}
            </span>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Desplegar pistas musicales"
            className={`h-10 px-3 flex items-center gap-2 border transition-colors cursor-pointer ${
              menuOpen
                ? 'bg-zinc-800 border-zinc-400 text-white'
                : 'bg-zinc-950/60 border-zinc-800 text-zinc-300 hover:border-zinc-600'
            }`}
          >
            <span className="text-xs tracking-widest uppercase">AUDIO</span>
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="absolute right-0 top-12 w-80 bg-zinc-900 border border-zinc-700 shadow-2xl overflow-hidden"
              >
                <div className="px-4 py-2.5 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between text-[11px] tracking-widest text-zinc-400">
                  <span>SOUNDTRACK_SELECT</span>
                  <span>[{String(TRACKS.length).padStart(2, '0')} TRACKS]</span>
                </div>

                <ul className="divide-y divide-zinc-800/80">
                  {TRACKS.map((track) => {
                    const active = currentTrack.id === track.id;
                    return (
                      <li key={track.id}>
                        <button
                          onClick={() => handleSelectTrack(track)}
                          className={`group w-full px-4 py-3 flex items-center justify-between text-left transition-colors cursor-pointer ${
                            active
                              ? 'bg-zinc-800/90 text-white'
                              : 'text-zinc-400 hover:bg-zinc-800/40 hover:text-zinc-200'
                          }`}
                        >
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            {active && isPlaying ? (
                              <Disc3 className="w-4 h-4 text-emerald-400 animate-spin shrink-0" />
                            ) : active ? (
                              <Pause className="w-4 h-4 text-zinc-300 shrink-0" />
                            ) : (
                              <Play className="w-4 h-4 text-zinc-500 shrink-0" />
                            )}
                            <ScrollingTrackTitle
                              text={`${track.id} // ${track.title}`}
                            />
                          </div>
                          <span className="text-[11px] text-zinc-500 ml-3 shrink-0">
                            {track.duration}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}