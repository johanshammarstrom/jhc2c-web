import React from 'react';
import Link from 'next/link';
import { Cloud, Code, Shield, Cpu, Gauge, Server, ArrowRight, ExternalLink } from 'lucide-react';

export default function JHC2CLanding() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30 font-sans">

      {/* HEADER / NAV */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto border-b border-slate-800/50">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <Cloud className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white uppercase">
            JH<span className="text-blue-500">C2C</span>
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide uppercase text-slate-400">
          <a href="#solutions" className="hover:text-blue-400 transition-colors">Solutions</a>
          <a href="#hybrid" className="hover:text-blue-400 transition-colors">Hybrid Cloud</a>
          <a href="mailto:info@jhc2c.tech" className="text-blue-500 hover:text-blue-400">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative py-24 px-6 overflow-hidden border-b border-slate-800/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full z-0" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Shield size={14} /> AWS Certified Solutions Architect
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight leading-[0.9]">
            CODE <span className="text-blue-500">TO</span> CLOUD
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Expertkonsultation inom <span className="text-white font-medium text-nowrap tracking-tight">AWS Architecture</span>,
            <span className="text-white font-medium text-nowrap tracking-tight"> IaC (Terraform)</span> och
            <span className="text-white font-medium text-nowrap tracking-tight"> Hybrid Cloud</span> med fokus på VMware vSphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@jhc2c.tech" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-2">
              Start Project <ArrowRight size={18} />
            </a>
            <div className="px-10 py-4 rounded-xl font-bold border border-slate-700 text-slate-300">
              jhc2c.tech
            </div>
          </div>
        </div>
      </header>

      {/* CORE SERVICES */}
      <section id="solutions" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-tighter">Core Competencies</h2>
          <div className="h-1 w-12 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* FinOps kortet med länk till undersidan */}
          <Link href="/finops" className="block group">
            <ServiceCard
              icon={<Gauge className="w-10 h-10 text-green-400" />}
              title="FinOps & Kostnadskontroll"
              desc="Sänk din AWS-faktura genom avancerad analys och optimering av resursutnyttjande. Klicka för att läsa mer."
            />
          </Link>

          <ServiceCard
            icon={<Code className="w-10 h-10 text-blue-400" />}
            title="Infrastructure as Code"
            desc="Robust och versionshanterad automation med Terraform. CI/CD-pipelines som bygger din infrastruktur felfritt."
          />

          <ServiceCard
            icon={<Shield className="w-10 h-10 text-purple-400" />}
            title="Cloud Security"
            desc="Implementering av Cloud Governance och säkerhetsarkitektur enligt AWS Well-Architected Framework."
          />
        </div>
      </section>

      {/* HYBRID SECTION */}
      <section id="hybrid" className="py-24 bg-slate-900/40 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl font-bold text-white leading-tight">Hybrid Cloud & <br /><span className="text-blue-500 tracking-tighter uppercase italic">VMware vSphere Expertise</span></h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Vi bryggar gapet mellan on-premise och cloud. Med djup expertis inom <span className="text-white underline decoration-blue-500">HPE Synergy</span>,
                servertjänster och FC-storage, optimerar vi din hybridmiljö för maximal prestanda.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4 text-sm font-mono text-slate-300">
                <div className="flex items-center gap-2"><Server className="text-blue-500" size={16} /> HPE Synergy / Blades</div>
                <div className="flex items-center gap-2"><Cpu className="text-blue-500" size={16} /> Fiber Channel Storage</div>
                <div className="flex items-center gap-2"><Shield className="text-blue-500" size={16} /> VMware vSphere</div>
                <div className="flex items-center gap-2"><ExternalLink className="text-blue-500" size={16} /> Cloud Migration</div>
              </div>
            </div>
            <div className="flex-1 w-full bg-gradient-to-br from-blue-600/10 to-transparent p-12 rounded-3xl border border-blue-500/20 text-center">
              <div className="text-7xl font-black text-white mb-2">Architected</div>
              <div className="text-blue-500 font-bold text-xl uppercase tracking-[0.4em] mb-6">to scale</div>
              <p className="text-slate-500 text-sm italic">"Levererar Enterprise-lösningar som kombinerar hårdvarans råkraft med molnets flexibilitet."</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-6 text-center border-t border-slate-800/50">
        <div className="text-white font-black text-xl mb-4 tracking-tighter">JH<span className="text-blue-500 uppercase">c2c</span> AB</div>
        <p className="text-slate-500 text-sm tracking-widest uppercase mb-8">Stockholm · Sweden · Worldwide</p>
        <div className="text-xs text-slate-600">
          © {new Date().getFullYear()} JHC2C AB | Org nr: 55xx-xxxx | jhc2c.tech
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-10 rounded-2xl bg-[#0a1122] border border-slate-800 hover:border-blue-500/50 transition-all group relative overflow-hidden h-full">
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 blur-3xl group-hover:bg-blue-600/10 transition-colors" />
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}