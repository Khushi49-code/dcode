interface StatItem {
  title: string;
  value: string;
  description: string;
  icon?: string;
}

const statsData: StatItem[] = [
  {
    title: "Global",
    value: "Serving Clients Worldwide",
    description: "Trusted by businesses across multiple countries"
  },
  {
    title: "50",
    value: "Projects Delivered",
    description: "From startups to enterprise solutions"
  },
  {
    title: "Expert",
    value: "Team",
    description: "Experienced professionals in web, app, and software development"
  },
  {
    title: "Modern",
    value: "Technology Stack",
    description: "MERN, Laravel, WordPress, Flutter, React Native, Next.js, and more"
  },
  {
    title: "Multiple",
    value: "Industries Served",
    description: "IT, Manufacturing, E-Commerce, Logistics, Healthcare, Education & More"
  }
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-blue-400">Global</span> Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Delivering exceptional solutions across industries with cutting-edge technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Top accent bar */}
              <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-6"></div>
              
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                    <span className="text-2xl">
                      {stat.icon || getIconForStat(index)}
                    </span>
                  </div>
                </div>
                
                <div>
                  <div className="text-4xl font-bold mb-2 text-white">
                    {stat.title}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-300">
                    {stat.value}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {stat.description}
              </p>
              
              {/* Decorative element */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
          
          {/* CTA Card */}
          <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to Start Your Project?</h3>
                <p className="text-gray-300">Join our global network of satisfied clients</p>
              </div>
              <button className="mt-4 lg:mt-0 bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl">
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}

// Helper function to get icons
function getIconForStat(index: number): string {
  const icons = ["🌍", "🚀", "👥", "💻", "🏢"];
  return icons[index] || "✨";
}