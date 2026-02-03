"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Gauge, TrendingDown, Target, BarChart3, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export default function FinOpsPage() {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30">

            <nav className="p-8 max-w-7xl mx-auto">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                    <Link href="/" className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors group w-fit">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-semibold uppercase tracking-wider text-sm">Tillbaka till start</span>
                    </Link>
                </motion.div>
            </nav>

            <header className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
                <div className="max-w-4xl">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-500 font-bold tracking-[0.3em] uppercase mb-4 text-sm">
                        Cloud Financial Management
                    </motion.div>
                    <motion.h1
                        variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.1]"
                    >
                        FinOps & <span className="text-blue-500">Business Value</span>
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl font-light"
                    >
                        Molnet är en rörlig kostnad, inte en fast tillgång. Vi hjälper er att implementera en datadriven kultur där varje investerad krona i <span className="text-white font-medium">AWS</span> maximerar affärsnyttan.
                    </motion.p>
                </div>
            </header>

            <section className="py-12 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-7 space-y-12">
                    <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-2xl font-bold text-white uppercase tracking-tighter flex items-center gap-3">
                        <div className="h-px w-8 bg-blue-500" /> Lifecycle & Strategy
                    </motion.h2>

                    <div className="space-y-6">
                        <StepCard index={1} icon={<Gauge size={24} />} color="text-blue-400" title="Inform - Synlighet & Allokering" desc="Vi etablerar granulär kostnadsallokering genom avancerad tagging. Sluta gissa – få full koll på kostnader per tjänst, miljö och affärsenhet." />
                        <StepCard index={2} icon={<TrendingDown size={24} />} color="text-green-400" title="Optimize - Rightsizing & Commitments" desc="Genom djupanalys av nyttjandemönster optimerar vi era resurser. Vi navigerar komplexiteten i Savings Plans och Reserved Instances åt er." />
                        <StepCard index={3} icon={<Target size={24} />} color="text-purple-400" title="Operate - Unit Economics" desc="Vi integrerar FinOps i er existerande Governance-modell. Fokus flyttas från 'total spend' till 'enhetskostnad' för ökad lönsamhet." />
                    </div>
                </div>

                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="lg:col-span-5 space-y-8">
                    <div className="bg-gradient-to-br from-slate-900 to-[#0a1122] border border-slate-800 p-12 rounded-[2.5rem] relative overflow-hidden group">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full group-hover:bg-blue-500/20 transition-colors" />
                        <BarChart3 size={48} className="text-blue-500 mb-8 opacity-50" />
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-7xl font-black text-white mb-2 tracking-tighter">30%</motion.div>
                        <p className="text-blue-400 font-bold uppercase tracking-[0.2em] text-xs mb-8">Typisk kostnadsreduktion</p>
                        <p className="text-slate-400 italic text-lg leading-relaxed border-l-2 border-blue-500/30 pl-6">"FinOps handlar inte om att spara pengar. Det handlar om att tjäna pengar genom att fatta smartare beslut i molnet."</p>
                    </div>
                </motion.div>
            </section>

            <footer className="py-24 text-center">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                    <a href="mailto:info@jhc2c.tech" className="bg-white text-black px-12 py-5 rounded-2xl font-black hover:bg-blue-500 hover:text-white transition-all shadow-2xl flex items-center gap-3">
                        Initiera FinOps-analys <CheckCircle2 size={20} />
                    </a>
                </motion.div>
            </footer>
        </div>
    );
}

function StepCard({ index, icon, color, title, desc }: { index: number, icon: any, color: string, title: string, desc: string }) {
    return (
        <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: index * 0.1 }}
            className="flex gap-6 p-8 rounded-2xl bg-slate-900/30 border border-slate-800/50 hover:bg-slate-900/50 transition-colors group"
        >
            <div className={`bg-slate-800/50 p-4 rounded-xl h-fit ${color} group-hover:scale-110 transition-transform`}>{icon}</div>
            <div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">{desc}</p>
            </div>
        </motion.div>
    );
}