"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Cloud,
  Code,
  Shield,
  Cpu,
  Gauge,
  Server,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: delay, ease: "easeOut" }
  })
};

export default function JHC2CLanding() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30 font-sans overflow-x-hidden">

      {/* HEADER / NAV */}
      <nav className="sticky top-0 z-50 flex justify-between items-center p-6 max-w-7xl mx-auto border-b border-slate-800/50 backdrop-blur-md bg-[#020617]/80">
        <div className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.1 }} className="bg-blue-600 p-1.5 rounded-lg">
            <Cloud className="text-white w-5 h-5 md:w-6 md:h-6" />
          </motion.div>
          <span className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase">
            JH<span className="text-blue-500">C2C</span>
          </span>
        </div>
        <div className="flex gap-4 md:gap-8 text-[10px] md:text-sm font-semibold tracking-wide uppercase text-slate-400">
          <a href="#solutions" className="hover:text-blue-400 transition-colors hidden sm:block">Solutions</a>
          <a href="mailto:info@jhc2c.tech" className="text-blue-500 hover:text-blue-400">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative py-20 md:py-32 px-6 overflow-hidden border-b border-slate-800/50">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[300px] bg-blue-600/10 blur-[80px] md:blur-[120px] rounded-full z-0" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-8">
            <Shield size={14} /> AWS Certified Solutions Architect
          </motion.div>
          <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" custom={0.2} className="text-5xl sm:text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
            CODE <span className="text-blue-500 italic">TO</span> CLOUD
          </motion.h1>
          <motion.p variants={fadeInUp} initial="hidden" animate="visible" custom={0.4} className="text-lg md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Specialiserad rådgivning inom <span className="text-white font-medium">AWS Cloud Architecture</span>,
            <span className="text-white font-medium"> Infrastructure as Code</span> och
            <span className="text-white font-medium"> Enterprise Hybrid Solutions</span>.
          </motion.p>
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.6} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="mailto:info@jhc2c.tech" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-2 text-sm md:text-base">
              Start Project <ArrowRight size={18} />
            </motion.a>
            <div className="px-10 py-4 rounded-xl font-bold border border-slate-700 text-slate-300 text-sm md:text-base cursor-default bg-slate-900/50">jhc2c.tech</div>
          </motion.div>
        </div>
      </header>

      {/* CORE SERVICES */}
      <section id="solutions" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-tighter">Core Competencies</h2>
          <motion.div initial={{ width: 0 }} whileInView={{ width: 48 }} className="h-1 bg-blue-600 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/finops" className="block group">
            <ServiceCard delay={0.1} icon={<Gauge className="w-10 h-10 text-green-400" />} title="FinOps & Optimization" desc="Sänk din AWS-faktura genom avancerad analys och Rightsizing. Optimera värdet av varje krona." />
          </Link>
          <ServiceCard delay={0.2} icon={<Code className="w-10 h-10 text-blue-400" />} title="Infrastructure as Code" desc="Robust automation med Terraform. Skalbara pipelines som bygger din infrastruktur felfritt." />
          <ServiceCard delay={0.3} icon={<Shield className="w-10 h-10 text-purple-400" />} title="Cloud Governance" desc="Säkerhetsarkitektur enligt Well-Architected Framework och automatiserad efterlevnad." />
        </div>
      </section>

      {/* HYBRID SECTION */}
      <section id="hybrid" className="relative py-24 md:py-32 overflow-hidden border-y border-slate-800/50 bg-[#020617]">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 space-y-10 text-center lg:text-left">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter uppercase">
                  Hybrid & <span className="text-blue-500">Multi-Cloud</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                  Vi förenar kraften i on-premise med flexibiliteten i molnet. Djup expertis inom hela <span className="text-white font-medium border-b-2 border-blue-600/30 text-nowrap">HPE-ekosystemet</span> och moderna storage-lösningar för enterprise-miljöer.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono tracking-tight">
                {[
                  { name: 'HPE Server & Storage Stack', icon: <Server size={18} /> },
                  { name: 'Hashicorp Terraform', icon: <Code size={18} /> },
                  { name: 'VMware vSphere', icon: <Cpu size={18} /> },
                  { name: 'Cloud Migration', icon: <ExternalLink size={18} /> }
                ].map((item, i) => (
                  <motion.div key={item.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-4 bg-slate-900/40 p-5 rounded-2xl border border-slate-800/50 backdrop-blur-sm group hover:border-blue-500/30 transition-all">
                    <div className="text-blue-500 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <span className="text-slate-200">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex-1 w-full max-w-md lg:max-w-none">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-900 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-[#0a1122] border border-white/5 p-12 md:p-20 rounded-[3rem] text-center shadow-2xl">
                  <div className="relative z-10">
                    <div className="text-blue-500 font-bold text-lg md:text-xl uppercase tracking-[0.5em] mb-6">Architected</div>
                    <div className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none">TO <br /> <span className="text-blue-500">SCALE</span></div>
                    <div className="h-px w-20 bg-blue-500/50 mx-auto mb-8" />
                    <p className="text-slate-400 text-sm md:text-base italic leading-relaxed font-light max-w-xs mx-auto">"Enterprise-lösningar som kombinerar hårdvarans råkraft med molnets flexibilitet."</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-6 text-center border-t border-slate-800/50">
        <div className="text-white font-black text-2xl mb-4 tracking-tighter uppercase">JH<span className="text-blue-500">c2c</span> AB</div>
        <p className="text-slate-500 text-xs tracking-[0.3em] uppercase mb-8">Stockholm · Sweden · Worldwide</p>
        <div className="text-[10px] text-slate-600">© {new Date().getFullYear()} JHC2C AB | jhc2c.tech</div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: delay }} whileHover={{ y: -8 }} className="p-10 rounded-3xl bg-[#0a1122] border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group relative overflow-hidden h-full shadow-xl">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl group-hover:bg-blue-600/10 transition-colors" />
      <div className="mb-8 p-4 bg-slate-900/50 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}