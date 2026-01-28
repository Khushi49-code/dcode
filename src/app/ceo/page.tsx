import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { 
  Cpu, Rocket, BarChart3, Globe, Zap, Code, TrendingUp, 
  Linkedin, ArrowRight, ExternalLink, ShieldCheck, 
  Users, Factory, Stethoscope, Lightbulb, Mail, Target, Eye
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dev Padhya | Founder & CEO - Dcodes Technologies',
  description: 'Official profile of Devarshi Padhya, Tech Visionary, AI & Growth Strategist, and Leader of Dcodes Technologies.',
};

const DATA = {
  name: "Dev Padhya",
  role: "Founder & CEO",
  company: "Dcodes Technologies",
  image: "/ceo.jpg", // Ensure your photo is in /public/ceo.jpg
  tagline: "Tech Visionary | Digital Transformation Leader | AI & Growth Strategist",
  quote: "Visibility is the foundation of scalability, and technology is the engine of growth.",
  hindiQuote: "बिकने के लिए दिखना जरूरी है!",
  philosophy: [
    { title: "Simplify", text: "Technology should simplify, not complicate" },
    { title: "Scale", text: "Growth must be data-driven and scalable" },
    { title: "Visible", text: "Brands must be visible to become sellable" }
  ],
  expertise: [
    { title: "Digital Transformation", icon: <TrendingUp />, desc: "Strategic planning for enterprise evolution." },
    { title: "AI & LLM Visibility", icon: <Cpu />, desc: "Leveraging AI for search dominance." },
    { title: "Architecture Planning", icon: <Code />, desc: "Robust Web & App infrastructure." },
    { title: "Growth Hacking", icon: <Target />, desc: "Data-led performance marketing." },
    { title: "Business Automation", icon: <Zap />, desc: "Modern IT to streamline operations." },
    { title: "Brand Authority", icon: <Eye />, desc: "Positioning brands as market leaders." }
  ],
  industries: [
    { name: "Medical", icon: <Stethoscope /> },
    { name: "Industrial", icon: <Factory /> },
    { name: "Service Sector", icon: <Users /> },
    { name: "Startups", icon: <Lightbulb /> }
  ],
  vision: [
    "AI-first marketing solutions",
    "Global-ready IT products",
    "Indian tech empowerment",
    "Multinational IT branding"
  ]
};

export default function CEOProfilePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-24 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/10 blur-[140px] rounded-full" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
                {DATA.company}
              </div>
              <h1 className="text-6xl lg:text-8xl font-black mb-8 tracking-tighter bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
                {DATA.name}
              </h1>
              <p className="text-xl lg:text-2xl text-slate-400 mb-10 max-w-2xl leading-relaxed font-light mx-auto lg:mx-0">
                {DATA.tagline}
              </p>
              <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
                <a href="#contact" className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all flex items-center gap-2 group shadow-xl shadow-blue-900/20">
                  Scale Digitally <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* --- CINEMATIC PHOTO BOX --- */}
            <div className="flex-1 relative group w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900">
                <Image 
                  src={DATA.image} 
                  alt={DATA.name}
                  fill
                  className="object-cover object-top grayscale transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-105"
                  priority
                />
                {/* Mood Overlays */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. ABOUT & MISSION STRIP --- */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Devarshi</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Devarshi Padhya is a forward-thinking Technology Leader and Digital Transformation Expert. 
              By understanding real business problems, he designs practical tech solutions that deliver 
              measurable results — not just promises.
            </p>
            <p className="text-slate-500 italic">
              His ability to merge technology, marketing, and business psychology sets him apart 
              as a next-generation tech entrepreneur.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {DATA.industries.map((ind, i) => (
              <div key={i} className="p-6 rounded-2xl bg-black border border-white/5 flex flex-col gap-3 group hover:border-blue-500/50 transition-colors">
                <div className="text-blue-500">{ind.icon}</div>
                <span className="text-sm font-semibold text-slate-300">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. THE PHILOSOPHY --- */}
      <section className="py-32 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight italic mb-12 text-slate-100">
            “{DATA.quote}”
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {DATA.philosophy.map((item, i) => (
              <div key={i} className="space-y-3">
                <span className="text-blue-500 font-mono text-xs uppercase tracking-widest">0{i+1} / {item.title}</span>
                <p className="text-xl font-medium text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-2xl md:text-3xl font-black text-blue-500 uppercase tracking-[0.4em] pt-20">
            {DATA.hindiQuote}
          </p>
        </div>
      </section>

      {/* --- 4. EXPERTISE BENTO --- */}
      <section className="py-32 bg-[#080808]">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Expertise & Core Competencies</h2>
            <p className="text-slate-500 text-lg">Systems, not shortcuts. Built for the modern digital economy.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 overflow-hidden rounded-3xl border border-white/10">
            {DATA.expertise.map((item, i) => (
              <div key={i} className="group p-12 bg-black hover:bg-blue-600/[0.03] transition-all relative">
                <div className="text-blue-500 mb-8 group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 36 })}
                </div>
                <h4 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. VISION & GLOBAL POWERHOUSE --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-8 tracking-tight">Vision for the Future</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Envisioning Dcodes Technologies as a global technology powerhouse, delivering 
              scalable digital ecosystems for businesses worldwide.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DATA.vision.map((v, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span className="text-sm font-medium">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full bg-gradient-to-br from-blue-600 to-blue-900 p-12 rounded-[3rem] text-center">
            <p className="text-blue-100 font-bold uppercase tracking-widest text-sm mb-4">The Promise</p>
            <h3 className="text-3xl font-black leading-tight mb-6">"He is not just a service provider — he is a growth partner."</h3>
            <div className="h-1 w-20 bg-white/30 mx-auto" />
          </div>
        </div>
      </section>

   {/* --- 6. CONTACT & LEADERSHIP CTA (BLACK SHADE VERSION) --- */}
      <section id="contact" className="py-32 container mx-auto px-6">
        <div className="relative overflow-hidden rounded-[3.5rem] border border-white/10 bg-gradient-to-b from-zinc-900/50 to-black p-12 md:p-24 shadow-2xl">
          
          {/* Subtle Background Accent */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter bg-gradient-to-r from-white via-white to-slate-500 bg-clip-text text-transparent">
              Ready to lead the way?
            </h2>
            
            <p className="text-xl text-slate-400 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
              If you are looking to scale digitally, build online authority, or implement AI-driven 
              growth strategies, let&apos;s start a conversation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* Primary Action */}
              <a 
                href="ceo@dcodestech.com" 
                className="w-full sm:w-auto px-12 py-6 bg-blue-600 text-white rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-900/20"
              >
                <Mail size={22} /> Email Dev Padhya
              </a>
              
              {/* Secondary Action */}
              <a 
                href="https://www.linkedin.com/in/dev-padhya/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-12 py-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Linkedin size={22} /> LinkedIn
              </a>
            </div>
            
            <div className="mt-20 pt-10 border-t border-white/5">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
                <div className="flex items-center gap-2 text-slate-500">
                  <ShieldCheck size={18} className="text-blue-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Strategic Mindset</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <ShieldCheck size={18} className="text-blue-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Execution Focused</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <ShieldCheck size={18} className="text-blue-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Innovation Driven</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}