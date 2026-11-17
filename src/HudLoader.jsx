import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Cpu } from 'lucide-react'

const BOOT_LOGS = [
    'INITIALIZING TECH-NOIR HUD INTERFACE...',
    'MOUNTING NEURAL AND VISUAL ARCHIVES...',
    'CALIBRATING HOLOGRAPHIC RETICLES... [OK]...',
    'ESTABLISHING TELEMETRY STREAM... // READY...',
];

export default function HudLoader( {onComplete} ) {
    const [progress, setProgress] = useState(0)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        let current = 0
        let pageLoaded = document.readyState === 'complete'

        const handleWindowLoad = () => {
            pageLoaded = true
        }
            if (!pageLoaded) {
                window.addEventListener('load', handleWindowLoad)
            }

                const interval = setInterval(() => {
                    const step = pageLoaded ? 14 : current < 85 ? 7 : 1.5
                    current = Math.min(100, current + step)
                    setProgress(Math.round(current))
                
                    if (current >= 100) {
                        clearInterval(interval)
                        setTimeout(() => {
                        setVisible(false)
                        if(onComplete) onComplete() 
                        }, 350)
                    }
                }, 90);
                
                return() => {
                    clearInterval(interval)
                    window.removeEventListener('load', handleWindowLoad)
                }


    }, [onComplete]);
    
    const activeLogIndex = Math.min(
        BOOT_LOGS.length - 1,
        Math.floor((progress / 100) * BOOT_LOGS.length)

    )


    return(

        <AnimatePresence>
            {visible &&(
                <motion.div
                    key="hud-loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity : 0, filter: 'blur(6px)' }}
                    transition={{ duration: 0.55, ease: 'easeInOut' }}
                    className='fixed inset-0 z-[100] bg-zinc-950 text-zinc-200 flex flex-col items-center justify-center px-6 select-none overflow-hidden'
                >
                    {/* Rejillla de fondo 1930s industrial */}

                    <div
                        className='absolute inset-0 pointer-events-none opacity-25'
                        style={{
                            backgroundImage:
                                'linear-gradient(to right, rgba(56, 189, 248, 0.08) 1px  transparent 1px), linear-gradient(to bottom, rgba(52, 211, 153, 0.08) 1px, transparent 1px)',
                            backgroundSize: '40px 40px'   
                        }}
                    />
                    {/* Reticula circular giratoria central */}

                        <div className='relative w-32 h-32 flex items-center justify-content mb-8'>
                                <motion.div
                                    animate= {{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                                    className='absolute inset-0 rounded-full border-2 border-dashed border-sky-400/75'
                                />
                                    <motion div
                                        animate= {{ rotate: -360 }}
                                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                                        className='absolute inset-3 rounded-full border-2 border-t-emerald-400 border-r-transparent border-b-sky-400 border-l-transparent'
                                    />
                                        <div className='w-14 h-14 rounded-full bg-zinc-900 border border-emerald-400/60 flex items-center justify-content shadow-[0_0_20px_rgba(52,511,153,0.35)]'>
                                            <Cpu className="w-6 h-6 text-emerald-400 animate-pulse" />
                                        </div>
                        </div>
                    {/* Porcentaje en tipografia Orbitron */}
                    <div
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                        className='text-3xl sm:text-4xl font-black tracking-widset text-transparency bg-clip-text bg-gradient-to-r from-sky-300 to-emerald-400 mb-3'
                    >
                        {progress}%
                    </div>         

                    {/* Barra Segmentada HUD */}

                    <div className='w-full max-w-md h-3 bg-zinc-900 border border-zinc-700 p-[2px] relative overflow-hidden'>
                        <motion.div
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: 'easeOut', duration: 0.15 }}
                            className='h-full bg-gradient-to-r from-sky-500 via-emerald-400 to-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.7)}'
                        />    
                    </div>

                    {/* Consola de estado Inferior */}
                    <div className='mt-4 flex items-center gap-2 font-mono text-[11px] tracking-widest text-emerald-400/90 text-center'>
                        <Terminal className='w-3.5 h-3.5 text-sky-400 shrink-0' />
                        <span>{BOOT_LOGS[activeLogIndex]}</span>
                    </div>

                </motion.div>
            )}

        </AnimatePresence>


    )
    
}




