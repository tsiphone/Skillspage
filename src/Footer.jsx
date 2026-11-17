import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Mail,
  ArrowUpRight,
  ChevronUp,
  Terminal,
} from 'lucide-react';

function GithubIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

const SOCIAL_NODES = [
  {
    id: 'LINK_01',
    platform: 'GitHub',
    handle: 'github.com/tsiphone',
    href: 'https://github.com/tsiphone',
    icon: GithubIcon,
    accent: 'sky',
  },
  {
    id: 'LINK_02',
    platform: 'LinkedIn',
    handle: 'Academic & Tech Network',
    href: 'https://www.linkedin.com/in/ulises-garcia-036bb8254',
    icon: LinkedinIcon,
    accent: 'emerald',
  },
  {
    id: 'LINK_03',
    platform: 'Webtoon & GlobalComix',
    handle: 'The Storyteller · Visual Novels',
    href: 'https://www.webtoons.com/es/canvas/the-storyteller/list?title_no=1106136',
    icon: BookOpen,
    accent: 'sky',
  },
  {
    id: 'LINK_04',
    platform: 'Direct Dispatch',
    handle: 'Research & Creative Inquiries',
    href: 'mailto:ttgonline@gmail.com',
    icon: Mail,
    accent: 'emerald',
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-zinc-950 text-zinc-200 pt-16 pb-10 overflow-hidden"
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

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Encabezado compacto HUD */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
          <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.26em] text-emerald-400 uppercase">
            <Terminal className="w-3.5 h-3.5" />
            <span>EXTERNAL_CHANNELS // COMM_ARRAY</span>
          </div>
          <span className="font-mono text-[11px] text-zinc-500">
            SIGNAL_STATUS: ONLINE // ST. CATHARINES · UNAM
          </span>
        </div>

        {/* Tarjetas HUD de enlaces */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {SOCIAL_NODES.map((node, idx) => {
            const Icon = node.icon;
            const isEmerald = node.accent === 'emerald';
            const isExternal = node.href.startsWith('http');

            return (
              <motion.a
                key={node.id}
                href={node.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`relative bg-zinc-900/90 border border-zinc-800 ${
                  isEmerald
                    ? 'hover:border-emerald-400/80'
                    : 'hover:border-sky-400/80'
                } p-4 flex items-center justify-between gap-3 transition-all duration-300 group shadow-xl`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div
                    className={`w-11 h-11 shrink-0 flex items-center justify-center border ${
                      isEmerald
                        ? 'bg-emerald-500/10 border-emerald-400/50 text-emerald-400 group-hover:bg-emerald-400 group-hover:text-zinc-950'
                        : 'bg-sky-500/10 border-sky-400/50 text-sky-400 group-hover:bg-sky-400 group-hover:text-zinc-950'
                    } transition-colors`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="min-w-0">
                    <div
                      style={{ fontFamily: "'Orbitron', sans-serif" }}
                      className="text-sm font-bold text-zinc-100 tracking-wide truncate"
                    >
                      {node.platform}
                    </div>
                    <div className="font-mono text-[11px] text-zinc-400 truncate mt-0.5">
                      {node.handle}
                    </div>
                  </div>
                </div>

                <ArrowUpRight
                  className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    isEmerald ? 'text-emerald-400' : 'text-sky-400'
                  }`}
                />
              </motion.a>
            );
          })}
        </div>

        {/* Barra inferior de cierre + botón volver arriba */}
        <div className="pt-6 border-t border-zinc-800/90 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span>
              © 2026 AMADOR ULISES ROSAS GARCÍA · TECH-NOIR HUD PORTFOLIO
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-zinc-900 border border-zinc-700 hover:border-sky-400 text-zinc-300 hover:text-sky-300 transition-colors cursor-pointer"
          >
            <span>RETURN_TO_TOP</span>
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}