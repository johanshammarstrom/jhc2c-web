import React from 'react';
import { Gauge, TrendingDown, Target, BarChart3, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function FinOpsPage() {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans">
            <nav className="p-6 max-w-7xl mx-auto">
                <Link href="/" className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Tillbaka till start</span>
                </Link>
            </nav>

            <header className="py-20 px-6 max-w-7xl mx-auto">
                <div className="max-w-3xl">
                    <h1 className="text-5xl font-black text-white mb-6 tracking-tight">
                        FinOps & <span className="text-blue-500">Kostnadsoptimering</span>
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed">
                        Många företag betalar 30% mer för sitt moln än vad de faktiskt behöver.
                        Vi hjälper er att ta kontroll över era AWS-kostnader utan att offra prestanda eller innovation.
                    </p>
                </div>
            </header>

            <section className="py-12 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-white uppercase tracking-tighter">Vår metodik</h2>

                    <div className="flex gap-4">
                        <div className="bg-blue-600/20 p-3 rounded-lg h-fit text-blue-400"><Gauge size={24} /></div>
                        <div>
                            <h3 className="text-lg font-bold text-white">Inform - Synlighet först</h3>
                            <p className="text-slate-400 mt-2 text-sm leading-relaxed">Vi sätter upp detaljerad tagging och dashboards för att förstå exakt var pengarna tar vägen – per team, projekt eller miljö.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-green-600/20 p-3 rounded-lg h-fit text-green-400"><TrendingDown size={24} /></div>
                        <div>
                            <h3 className="text-lg font-bold text-white">Optimize - Rätt storlek</h3>
                            <p className="text-slate-400 mt-2 text-sm leading-relaxed">Rightsizing av instanser, borttagning av oanvända resurser och implementering av Savings Plans & Reserved Instances.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-purple-600/20 p-3 rounded-lg h-fit text-purple-400"><Target size={24} /></div>
                        <div>
                            <h3 className="text-lg font-bold text-white">Operate - Kontinuerlig förbättring</h3>
                            <p className="text-slate-400 mt-2 text-sm leading-relaxed">Vi skapar en kultur där arkitekter och utvecklare tar ansvar för sina egna kostnader genom automatiserade policys.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl flex flex-col justify-center text-center">
                    <BarChart3 size={64} className="text-blue-500 mx-auto mb-6 opacity-50" />
                    <h3 className="text-4xl font-black text-white mb-2">30%</h3>
                    <p className="text-slate-400 font-medium uppercase tracking-widest text-sm">Genomsnittlig besparing</p>
                    <p className="mt-8 text-slate-500 italic text-sm">
                        "Att optimera molnet handlar inte bara om att sänka kostnader, det handlar om att maximera värdet av varje investerad krona."
                    </p>
                </div>
            </section>

            <footer className="py-24 text-center">
                <a href="mailto:info@jhc2c.tech" className="bg-white text-black px-10 py-4 rounded-xl font-bold hover:bg-blue-500 hover:text-white transition-all shadow-xl">
                    Boka en FinOps-analys
                </a>
            </footer>
        </div>
    );
}