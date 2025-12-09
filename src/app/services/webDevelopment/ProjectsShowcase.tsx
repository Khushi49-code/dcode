"use client"
import React from 'react';
import Link from 'next/link';
import { ExternalLink, Info } from 'lucide-react';

const ProjectsShowcase = () => {
const projects = [
  {
    id: 1,
    name: "Dhruvi Beauty Care",
    description:
      "A modern beauty and wellness website featuring online appointment booking, service showcases, and a visually elegant UI for enhanced user engagement.",
    image: "/case-studies/one.png",
    visitUrl: "https://dhruvibeautycare.in/",
    category: "Beauty & Wellness",
    duration: "15 Days",
    technologies: ["Next.js", "Tailwind CSS", "Framer "],
  },
  {
    id: 2,
    name: "Pandit Tushar Pandya",
    description:
      "A spiritual and religious service platform that connects devotees with expert astrologers and priests through a digital-first experience.",
    image: "/case-studies/two.png",
    visitUrl: "http://pandit.dcodestech.com/",
    category: "Religious Services",
    duration: "20 Days",
    technologies: ["React", "Bootstrap", "Node.js"],
  },
  {
    id: 3,
    name: "Aarya Earth",
    description:
      "An industrial-grade B2B platform for Activated Bleaching Earth and Fuller's Earth products, built for seamless product browsing and inquiry handling.",
    image: "/case-studies/three.png",
    visitUrl: "https://aaryaearth.com/",
    category: "Industrial Manufacturing",
    duration: "26 Days",
    technologies: ["Vue.js", "Vuetify", "Express.js"],
  },
  {
    id: 4,
    name: "Dr. Mayank Gurjar",
    description:
      "A professional healthcare platform designed for gastroenterology services with patient-friendly design, responsive UI, and integrated booking features.",
    image: "/case-studies/four.png",
    visitUrl: "https://gastroclinic.co.in/",
    category: "Healthcare",
    duration: "32 Days",
    technologies: ["Angular", "SCSS", "Firebase"],
  },
];


  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block border border-white/10 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-normal tracking-wider uppercase">Our Projects</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-normal mb-6 tracking-tight">
            Featured Work
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Explore our recent projects showcasing innovative solutions across various industries, 
            from healthcare to industrial manufacturing.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group cursor-pointer border border-white/10 rounded-2xl bg-gray-900/20 backdrop-blur-sm overflow-hidden hover:border-white/30 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                    {project.category === 'Healthcare' && '🏥'}
                    {project.category === 'Industrial Manufacturing' && '🏭'}
                    {project.category === 'Religious Services' && '📿'}
                    {project.category === 'Beauty & Wellness' && '💄'}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-normal">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-normal group-hover:text-white transition-colors duration-300">
                    {project.name}
                  </h3>
                  {/* <span className="border border-white/20 text-white/70 px-2 py-1 rounded-full text-xs font-normal bg-black/20">
                    {project.duration}
                  </span> */}
                </div>
                
                <p className="text-white/70 text-sm font-normal mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-blue-600/10 border border-blue-600/20 text-blue-400 px-2 py-1 rounded-full text-xs font-normal"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
          <div className="flex flex-col gap-3 w-full">
  <Link 
    href={`/case-studies/${project.id}`}
    className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 font-medium text-sm group/btn min-h-[48px] w-full"
  >
    <Info className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
    More Info
  </Link>
  
  <a 
    href={project.visitUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 border border-white/20 text-white px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 font-medium text-sm group/btn min-h-[48px] w-full"
  >
    <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
    Visit Page
  </a>
</div>

              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <p className="text-white/70 mb-6">
            Interested in working together on your next project?
          </p>
          <Link href={'/connect'} className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-medium text-lg">
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;