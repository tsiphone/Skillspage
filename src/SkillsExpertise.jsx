import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Palette,
  Music,
  Cpu,
  Clapperboard,
  Award,
  ShieldCheck,
  Activity,
} from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    id: '01',
    title: 'Art & Visual Design',
    code: 'SYS_ART // VISUAL_CORE',
    icon: Palette,
    accent: 'emerald',
    skills: [
      { name: 'Clip Studio Paint & Digital Illustration', level: 98 },
      { name: 'Character Design & Semi-Realistic Rendering', level: 96 },
      { name: 'Photoshop CS6 & Krita', level: 94 },
      { name: 'Custom AI LoRA Training (Kohya_ss & ComfyUI)', level: 92 },
      { name: 'Sequential Comic Art & Visual Storytelling', level: 98 },
    ],
  },
  {
    id: '02',
    title: 'Music & Sound Design',
    code: 'SYS_AUDIO // SYNTH_WAVE',
    icon: Music,
    accent: 'sky',
    skills: [
      { name: 'LMMS Studio & Electronic Production', level: 88 },
      { name: 'Dark Ambient, Retrowave & Synth Composition', level: 90 },
      { name: 'Synthesizers & VST Plugin Architecture', level: 80 },
      { name: 'Interactive OST & Atmospheric Soundscapes', level: 90 },
      { name: 'Generative AI Music Workflows', level: 86 },
    ],
  },
  {
    id: '03',
    title: 'Software & Network Engineering',
    code: 'SYS_ENG // COMPUTE_NET',
    icon: Cpu,
    accent: 'sky',
    skills: [
      { name: 'Python & Data Analytics Pipelines', level: 75 },
      { name: 'JavaScript, React Vite, HTML5 & Tailwind CSS', level: 95 },
      { name: 'SQL Databases & Data Modeling', level: 75 },
      { name: 'Cisco Networking (VLANs, Routing, Switching, DHCP)', level: 88 },
      { name: 'Visual Basic, App Inventor, Kotlin, C++', level: 85 },
    ],
  },
  {
    id: '04',
    title: 'Animation & Interactive Media',
    code: 'SYS_ANIM // MOTION_3D',
    icon: Clapperboard,
    accent: 'emerald',
    skills: [
      { name: 'Live2D Cubism Rigging & VTuber Creation', level: 94 },
      { name: 'Blender 3D Modeling & Environment Rendering', level: 85 },
      { name: 'ZBrush & Toon Boom Harmony', level: 86 },
      { name: 'Unity3D, Unreal Engine 5 & Game Maker', level: 85 },
      { name: 'Visual Novel & Interactive Web Ecosystems', level: 99 },
    ],
  },
];

const CERTIFICATIONS = [
  {
    id: 'CERT_01',
    issuer: 'CISCO NETWORKING ACADEMY',
    title: 'CCNA 1',
    subtitle: 'Introduction to Networks',
    badgeImg: 'images/badges/ccna-1.png',
    accent: 'sky',
  },
  {
    id: 'CERT_02',
    issuer: 'CISCO NETWORKING ACADEMY',
    title: 'CCNA 2',
    subtitle: 'Switching, Routing & Wireless Essentials',
    badgeImg: 'images/badges/ccna-2.png',
    accent: 'sky',
  },
  {
    id: 'CERT_03',
    issuer: 'CISCO NETWORKING ACADEMY',
    title: 'CCNA 3',
    subtitle: 'Enterprise Networking, Security & Automation',
    badgeImg: 'images/badges/ccna-3.png',
    accent: 'emerald',
  },
  {
    id: 'CERT_04',
    issuer: 'MICROSOFT CERTIFIED',
    title: 'AZURE',
    subtitle: 'Cloud & AI Infrastructure Certification',
    badgeImg: 'images/badges/azure.png',
    accent: 'emerald',
  },
];

function SkillMeter({ name, level, accent, delay }) {
  const isEmerald = accent === 'emerald';

  return (
    <div className="group/bar">
      <div className="flex items-center justify-between text-xs mb-1.5">
        <span className="text-zinc-200 font-medium tracking-wide group-hover/bar:text-white transition-colors">
          {name}
        </span>
        <span
          className={`font-mono text-[11px] font-bold ${
            isEmerald ? 'text-emerald-400' : 'text-sky-400'
          }`}
        >
          {level}%
        </span>
      </div>

      {/* Riel HUD segmentado */}
      <div className="relative h-2.5 w-full bg-zinc-950 border border-zinc-800 p-[2px] overflow-hidden">
        {/* Barra animada de carga */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
          className={`relative h-full ${
            isEmerald
              ? 'bg-gradient-to-r from-sky-500 via-emerald-400 to-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.55)]'
              : 'bg-gradient-to-r from-emerald-500 via-sky-400 to-sky-300 shadow-[0_0_10px_rgba(56,189,248,0.55)]'
          }`}
        >
          {/* Pulso de escaneo que recorre la barra */}
          <motion.span
            animate={{ x: ['-100%', '250%'] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: 'linear',
              delay: delay + 0.5,
            }}
            className="absolute inset-y-0 w-10 bg-gradient-to-r from-transparent via-white/50 to-transparent"
          />
        </motion.div>

        {/* Marcas de telemetría encima del riel */}
        <div
          className="absolute inset-0 pointer-events-none opacity-35"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, transparent 0px, transparent 14px, rgba(9,9,11,0.85) 14px, rgba(9,9,11,0.85) 16px)',
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsExpertise() {
  const [badgeErrors, setBadgeErrors] = useState({});

  return (
    <section
      id="skills"
      className="relative w-full bg-zinc-950 text-zinc-200 py-20 border-b border-zinc-800 overflow-hidden"
    >
      {/* Rejilla de fondo Tech-Noir */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(52, 211, 153, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.06) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ================= ENCABEZADO CENTRADO HUD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-emerald-400/40 font-mono text-[11px] tracking-[0.28em] text-emerald-400 uppercase mb-3">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>WHAT I BRING // TELEMETRY_STATS</span>
          </div>

          <h2
            style={{ fontFamily: "'Orbitron', sans-serif" }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wider uppercase text-zinc-100"
          >
            Skills &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-emerald-300 to-emerald-400">
              Expertise
            </span>
          </h2>
        </motion.div>

        {/* ================= MATRIZ 2x2: ARTE, MÚSICA, INGENIERÍA, ANIMACIÓN ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {SKILL_CATEGORIES.map((category, catIdx) => {
            const Icon = category.icon;
            const isEmerald = category.accent === 'emerald';

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className={`relative bg-zinc-900/85 border border-zinc-800 ${
                  isEmerald
                    ? 'hover:border-emerald-400/70'
                    : 'hover:border-sky-400/70'
                } p-6 sm:p-8 shadow-2xl transition-colors duration-300`}
              >
                {/* Esquinas HUD */}
                <span
                  className={`absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 ${
                    isEmerald ? 'border-emerald-400' : 'border-sky-400'
                  }`}
                />
                <span
                  className={`absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 ${
                    isEmerald ? 'border-emerald-400' : 'border-sky-400'
                  }`}
                />

                {/* Cabecera de la tarjeta */}
                <div className="flex items-center justify-between gap-4 pb-5 mb-6 border-b border-zinc-800">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 flex items-center justify-center border ${
                        isEmerald
                          ? 'bg-emerald-500/10 border-emerald-400/50 text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.2)]'
                          : 'bg-sky-500/10 border-sky-400/50 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] tracking-widest text-zinc-500">
                        {category.code}
                      </div>
                      <h3
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                        className="text-lg sm:text-xl font-bold text-zinc-100 tracking-wide uppercase"
                      >
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <span className="font-mono text-xs text-zinc-500">
                    [{category.id}]
                  </span>
                </div>

                {/* Lista de barras de stats animadas */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <SkillMeter
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      accent={category.accent}
                      delay={catIdx * 0.12 + sIdx * 0.08}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= MÓDULO DE CERTIFICACIONES & BADGES (CISCO CCNA 1-3 + AZURE) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-10 relative bg-zinc-900/90 border border-sky-500/40 p-6 sm:p-8 shadow-[0_0_30px_rgba(56,189,248,0.08)]"
        >
          {/* Línea superior luminosa */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-sky-400 via-emerald-400 to-sky-400" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-6 border-b border-zinc-800">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <h3
                style={{ fontFamily: "'Orbitron', sans-serif" }}
                className="text-base sm:text-lg font-bold tracking-wider uppercase text-zinc-100"
              >
                Verified Technical Certifications
              </h3>
            </div>
            <span className="font-mono text-[11px] tracking-widest text-sky-400">
              CREDENTIALS_VERIFIED // CISCO & MICROSOFT
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CERTIFICATIONS.map((cert) => {
              const isEmerald = cert.accent === 'emerald';

              return (
                <div
                  key={cert.id}
                  className={`relative bg-zinc-950/90 border border-zinc-800 ${
                    isEmerald
                      ? 'hover:border-emerald-400/80'
                      : 'hover:border-sky-400/80'
                  } p-4 flex items-center gap-4 transition-all duration-300 group`}
                >
                  {/* Contenedor del Badge (imagen oficial o escudo HUD de respaldo) */}
                  <div className="relative w-16 h-16 shrink-0 flex items-center justify-center bg-zinc-900 border border-zinc-800 p-1.5 overflow-hidden">
                    {!badgeErrors[cert.id] ? (
                      <img
                        src={cert.badgeImg}
                        alt={`${cert.title} Badge`}
                        onError={() =>
                          setBadgeErrors((prev) => ({
                            ...prev,
                            [cert.id]: true,
                          }))
                        }
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                      />
                    ) : (
                      <div className="relative w-full h-full flex flex-col items-center justify-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 14,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          className={`absolute inset-1 rounded-full border border-dashed ${
                            isEmerald
                              ? 'border-emerald-400/60'
                              : 'border-sky-400/60'
                          }`}
                        />
                        <Award
                          className={`w-6 h-6 ${
                            isEmerald ? 'text-emerald-400' : 'text-sky-400'
                          }`}
                        />
                      </div>
                    )}
                  </div>

                  {/* Información de la certificación */}
                  <div className="min-w-0">
                    <div className="font-mono text-[9px] tracking-widest text-zinc-500 truncate">
                      {cert.issuer}
                    </div>
                    <div
                      style={{ fontFamily: "'Orbitron', sans-serif" }}
                      className={`text-base font-black tracking-wider mt-0.5 ${
                        isEmerald ? 'text-emerald-400' : 'text-sky-400'
                      }`}
                    >
                      {cert.title}
                    </div>
                    <div className="text-xs text-zinc-300 leading-snug mt-0.5 line-clamp-2">
                      {cert.subtitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}