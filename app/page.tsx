import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Cloud, Code, Shield, Cpu, Gauge, Server, ArrowRight, ExternalLink } from 'lucide-react';

export default function JHC2CLanding() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30 font-sans overflow-x-hidden">

      {/* HEADER / NAV */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto border-b border-slate-800/50">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <Cloud className="text-white w-5 h-5 md:w-6 md:h-6" />
          </div>
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
      <header className="relative py-16 md:py-24 px-6 overflow-hidden border-b border-slate-800/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[300px] bg-blue-600/10 blur-[80px] md:blur-[120px] rounded-full z-0" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8">
            <Shield size={14} /> AWS Certified Solutions Architect
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-6 md:mb-8 tracking-tight leading-[1.1] md:leading-[0.9]">
            CODE <span className="text-blue-500">TO</span> CLOUD
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Expertkonsultation inom <span className="text-white font-medium">AWS Architecture</span>,
            <span className="text-white font-medium"> IaC (Terraform)</span> och
            <span className="text-white font-medium"> Hybrid Cloud</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@jhc2c.tech" className="bg-blue-600 hover:bg-blue-500 text-white px-8 md:px-10 py-4 rounded-xl font-bold transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-2 text-sm md:text-base">
              Start Project <ArrowRight size={18} />
            </a>
            <div className="px-8 md:px-10 py-4 rounded-xl font-bold border border-slate-700 text-slate-300 text-sm md:text-base cursor-default">
              jhc2c.tech
            </div>
          </div>
        </div>
      </header>

      {/* CORE SERVICES */}
      <section id="solutions" className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-tighter">Core Competencies</h2>
          <div className="h-1 w-12 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Link href="/finops" className="block group">
            <ServiceCard
              icon={<Gauge className="w-8 h-8 md:w-10 md:h-10 text-green-400" />}
              title="FinOps & Kostnadskontroll"
              desc="Sänk din AWS-faktura genom avancerad analys och optimering. Klicka för att läsa mer."
            />
          </Link>
          <ServiceCard
            icon={<Code className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />}
            title="Infrastructure as Code"
            desc="Robust automation med Terraform. CI/CD-pipelines som bygger din infrastruktur felfritt."
          />
          <ServiceCard
            icon={<Shield className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />}
            title="Cloud Security"
            desc="Säkerhetsarkitektur enligt AWS Well-Architected Framework och Cloud Governance."
          />
        </div>
      </section>

      {/* HYBRID SECTION */}
      <section id="hybrid" className="relative py-16 md:py-24 overflow-hidden border-y border-slate-800/50">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hpe-rack.jpg"
            alt="HPE Synergy Rack"
            fill
            className="object-cover opacity-10 md:opacity-25"
          />
          <div className="absolute inset-0 bg-[#020617]/90 md:bg-gradient-to-r md:from-[#020617] md:via-[#020617]/80 md:to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
            <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Hybrid Cloud & <br />
                <span className="text-blue-500 tracking-tighter uppercase italic">VMware vSphere</span>
              </h2>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Vi bryggar gapet mellan on-premise och cloud. Expertis inom <span className="text-white underline decoration-blue-500">HPE Synergy</span> och storage-lösningar.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm font-mono text-slate-300">
                <div className="flex items-center justify-center lg:justify-start gap-2 bg-slate-900/50 p-3 rounded-lg border border-slate-800/50 backdrop-blur-sm"><Server className="text-blue-500" size={16} /> HPE Synergy / Blades</div>
                <div className="flex items-center justify-center lg:justify-start gap-2 bg-slate-900/50 p-3 rounded-lg border border-slate-800/50 backdrop-blur-sm"><Cpu className="text-blue-500" size={16} /> Fiber Channel Storage</div>
                <div className="flex items-center justify-center lg:justify-start gap-2 bg-slate-900/50 p-3 rounded-lg border border-slate-800/50 backdrop-blur-sm"><Shield className="text-blue-500" size={16} /> VMware vSphere</div>
                <div className="flex items-center justify-center lg:justify-start gap-2 bg-slate-900/50 p-3 rounded-lg border border-slate-800/50 backdrop-blur-sm"><ExternalLink className="text-blue-500" size={16} /> Cloud Migration</div>
              </div>
            </div>

            {/* DEN UPPDATERADE ARCHITECTED BOXEN */}
            <div className="flex-1 w-full max-w-md lg:max-w-none group">
              <div className="relative bg-gradient-to-br from-blue-600/10 to-blue-900/5 backdrop-blur-md p-10 md:p-16 rounded-[2.5rem] border border-blue-500/20 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-blue-500/40 group-hover:scale-[1.02]">
                {/* Dekorativt ljus inuti boxen */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />

                <div className="relative z-10">
                  <div className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tighter drop-shadow-sm">
                    Architected
                  </div>
                  <div className="text-blue-500 font-bold text-lg md:text-2xl uppercase tracking-[0.3em] md:tracking-[0.5em] mb-8">
                    to scale
                  </div>
                  <div className="h-px w-16 bg-blue-500/30 mx-auto mb-8" />
                  <p className="text-slate-300 text-sm md:text-base italic leading-relaxed font-light">
                    "Enterprise-lösningar som kombinerar hårdvarans råkraft med molnets flexibilitet."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 md:py-20 px-6 text-center border-t border-slate-800/50">
        <div className="text-white font-black text-lg md:text-xl mb-4 tracking-tighter uppercase font-sans">
          JH<span className="text-blue-500">c2c</span> AB
        </div>
        <p className="text-slate-500 text-[10px] md:text-xs tracking-[0.2em] uppercase mb-8">Stockholm · Sweden · Worldwide</p>
        <div className="text-[10px] text-slate-600">
          © {new Date().getFullYear()} JHC2C AB | jhc2c.tech
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-8 md:p-10 rounded-2xl bg-[#0a1122] border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group relative overflow-hidden h-full shadow-lg hover:shadow-blue-900/10">
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 blur-3xl group-hover:bg-blue-600/10 transition-colors" />
      <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">{title}</h3>
      <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{desc}</p>
    </div>
  );
}