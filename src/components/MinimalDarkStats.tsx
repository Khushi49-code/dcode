export default function MinimalDarkStats() {
  const stats = [
    { icon: "🌍", title: "Global", desc: "Serving Clients Worldwide" },
    { icon: "📊", title: "50", desc: "Projects Delivered" },
    { icon: "👥", title: "Expert", desc: "Team" },
    { icon: "⚡", title: "Modern", desc: "Technology Stack" },
    { icon: "🏢", title: "Multiple", desc: "Industries Served" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Our Global Reach</h1>
          <p className="text-gray-400">Delivering excellence across the globe</p>
        </div>

        {/* Stats Cards */}
        <div className="space-y-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition duration-300">
              <div className="flex items-center">
                <div className="text-3xl mr-4">{stat.icon}</div>
                <div>
                  <div className="text-2xl font-bold text-white">{stat.title}</div>
                  <div className="text-gray-300">{stat.desc}</div>
                </div>
              </div>
              
              {/* Additional info based on card */}
              {stat.title === "Global" && (
                <p className="mt-4 text-gray-400 text-sm">Trusted by businesses across multiple countries</p>
              )}
              {stat.title === "50" && (
                <p className="mt-4 text-gray-400 text-sm">From startups to enterprise solutions</p>
              )}
              {stat.title === "Expert" && (
                <p className="mt-4 text-gray-400 text-sm">Experienced professionals in web, app, and software development</p>
              )}
              {stat.title === "Modern" && (
                <div className="mt-4">
                  <p className="text-gray-400 text-sm mb-2">MERN, Laravel, WordPress, Flutter, React Native, Next.js, and more</p>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "React", "Node.js", "Flutter"].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {stat.title === "Multiple" && (
                <div className="mt-4">
                  <p className="text-gray-400 text-sm mb-2">IT, Manufacturing, E-Commerce, Logistics, Healthcare, Education & More</p>
                  <div className="flex flex-wrap gap-2">
                    {["IT", "Healthcare", "E-Commerce", "Education"].map((industry) => (
                      <span key={industry} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 bg-blue-900/30 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-3">Start Your Project Today</h3>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Get Free Consultation
          </button>
        </div>

      </div>
    </div>
  );
}