import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crosshair, Image as ImageIcon } from 'lucide-react';

/**
 * Capa HUD Holográfica reutilizable que se superpone encima de cada escena/viñeta
 * con líneas animadas en verde eléctrico, retículas y círculos concéntricos.
 */
function HolographicHudOverlay({ variant = 'main', code = 'SCN_00' }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10">
      {/* Esquinas HUD en verde eléctrico */}
      <span className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-emerald-400 shadow-[0_0_8px_#34d399]" />
      <span className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-emerald-400 shadow-[0_0_8px_#34d399]" />
      <span className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-emerald-400 shadow-[0_0_8px_#34d399]" />
      <span className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-emerald-400 shadow-[0_0_8px_#34d399]" />

      {/* Línea láser horizontal de escaneo continuo */}
      <motion.div
        animate={{ top: ['0%', '100%', '0%'] }}
        transition={{
          duration: variant === 'main' ? 7 : 5,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent shadow-[0_0_12px_#34d399]"
      />

      {/* Líneas laterales de telemetría pulsantes */}
      <motion.div
        animate={{ opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-1.5"
      >
        <span className="w-3 h-[1px] bg-emerald-400" />
        <span className="w-1.5 h-[1px] bg-emerald-400/70" />
        <span className="w-4 h-[1px] bg-emerald-400 shadow-[0_0_6px_#34d399]" />
        <span className="w-2 h-[1px] bg-emerald-400/70" />
      </motion.div>

      {/* Círculos concéntricos animados tipo mira holográfica */}
      {variant === 'main' ? (
        <div className="absolute right-8 bottom-8 w-28 h-28 flex items-center justify-center opacity-85">
          {/* Anillo exterior punteado girando en sentido horario */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border border-dashed border-emerald-400/70"
          />
          {/* Anillo intermedio girando en sentido antihorario */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-3 rounded-full border-2 border-t-emerald-400 border-r-transparent border-b-emerald-400/60 border-l-transparent shadow-[0_0_10px_rgba(52,211,153,0.4)]"
          />
          {/* Núcleo pulsante */}
          <motion.div
            animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-6 rounded-full border border-emerald-400 flex items-center justify-center"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
          </motion.div>
        </div>
      ) : (
        /* Círculo HUD compacto para las viñetas de cómic 1, 2 y 3 */
        <div className="absolute right-3.5 bottom-3.5 w-12 h-12 flex items-center justify-center opacity-80">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border border-dashed border-emerald-400/75"
          />
          <motion.div
            animate={{ scale: [0.8, 1.1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-4 h-4 rounded-full border border-emerald-400 flex items-center justify-center"
          >
            <span className="w-1 h-1 rounded-full bg-emerald-400" />
          </motion.div>
        </div>
      )}

      {/* Código mínimo de nodo holográfico en esquina inferior izquierda */}
      <div className="absolute bottom-2.5 left-8 font-mono text-[10px] tracking-[0.25em] text-emerald-400/80">
        {code}
      </div>
    </div>
  );
}

/**
 * Contenedor individual de escena con respaldo automático mientras colocas tus imágenes
 */
function HologramPanel({
  src,
  alt,
  placeholderLabel,
  placeholderFile,
  variant = 'panel',
  code,
  className = '',
  imgClassName = '',
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`relative bg-zinc-950 border border-zinc-800 hover:border-emerald-400/80 transition-colors duration-300 overflow-hidden group shadow-2xl ${className}`}
    >
      {/* Tinte holográfico sutil sobre la imagen */}
      <div className="absolute inset-0 bg-emerald-500/[0.03] group-hover:bg-emerald-500/[0.07] transition-colors pointer-events-none z-[5]" />

      {!imgError ? (
        <img
          src={src}
          alt={alt}
          onError={() => setImgError(true)}
          className={`w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ${imgClassName}`}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center font-mono bg-zinc-900/90">
          <ImageIcon className="w-8 h-8 text-emerald-400/60 mb-2" />
          <span className="text-xs text-emerald-300 tracking-widest uppercase">
            [{placeholderLabel}]
          </span>
          <span className="text-[11px] text-zinc-500 mt-1">
            public/images/{placeholderFile}
          </span>
        </div>
      )}

      {/* HUD Holográfico al frente */}
      <HolographicHudOverlay variant={variant} code={code} />
    </div>
  );
}

export default function Storyteller() {
  return (
    <section className="relative w-full bg-zinc-950 text-zinc-200 py-16 border-b border-zinc-800 overflow-hidden">
      {/* Rejilla de fondo Tech-Noir */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(52, 211, 153, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(52, 211, 153, 0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ================= BLOQUE SUPERIOR: TÍTULO SUPERPUESTO + IMAGEN PRINCIPAL ================= */}
        <div className="relative pt-6">
          {/* Caja flotante "Project Storyteller" montada en la esquina superior izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative sm:absolute sm:top-0 sm:left-0 z-20 inline-flex items-center gap-3 bg-zinc-950/95 backdrop-blur-md border-2 border-emerald-400 px-5 py-3 shadow-[0_0_25px_rgba(52,211,153,0.3)] mb-3 sm:mb-0"
          >
            <Crosshair className="w-5 h-5 text-emerald-400 animate-spin" style={{ animationDuration: '8s' }} />
            <h2
              style={{ fontFamily: "'Orbitron', sans-serif" }}
              className="text-xl sm:text-2xl md:text-3xl font-black tracking-wider uppercase text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.75)]"
            >
              Project Storyteller
            </h2>
          </motion.div>

          {/* Imagen Principal: Rain en blanco y negro bajo la lluvia */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <HologramPanel
              src="/images/rain-main.jpg"
              alt="Rain walking in the rain with umbrella"
              placeholderLabel="IMAGEN PRINCIPAL // RAIN B&W"
              placeholderFile="rain-main.jpg"
              variant="main"
              code="HOLO_FEED // RAIN_01"
              className="w-full h-[340px] sm:h-[440px] lg:h-[500px]"
              imgClassName="grayscale contrast-125"
            />
          </motion.div>
        </div>

        {/* ================= BLOQUE INFERIOR: 3 VIÑETAS TIPO CÓMIC ASIMÉTRICAS ================= */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Izquierda: Imagen 1 (Panel vertical alto) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <HologramPanel
              src="/images/rain-comic-1.jpg"
              alt="Storyteller Comic Panel 1"
              placeholderLabel="IMAGEN 1 // PANEL VERTICAL"
              placeholderFile="rain-comic-1.jpg"
              code="COMIC_SEQ // 01"
              className="w-full h-[380px] sm:h-[460px] lg:h-full min-h-[420px]"
            />
          </motion.div>

          {/* Derecha: Imagen 2 arriba + Imagen 3 abajo (Paneles horizontales apilados) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="flex-1"
            >
              <HologramPanel
                src="/images/rain-comic-2.jpg"
                alt="Storyteller Comic Panel 2"
                placeholderLabel="IMAGEN 2 // PANEL HORIZONTAL"
                placeholderFile="rain-comic-2.jpg"
                code="COMIC_SEQ // 02"
                className="w-full h-[220px] sm:h-[240px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex-1"
            >
              <HologramPanel
                src="/images/rain-comic-3.jpg"
                alt="Storyteller Comic Panel 3"
                placeholderLabel="IMAGEN 3 // PANEL HORIZONTAL"
                placeholderFile="rain-comic-3.jpg"
                code="COMIC_SEQ // 03"
                className="w-full h-[220px] sm:h-[240px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}