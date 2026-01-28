export default function StatsShowcase() {
  const stats = [
    {
      id: 1,
      icon: "🌍",
      title: "Global",
      subtitle: "Serving Clients Worldwide",
      description: "Trusted by businesses across multiple countries",
      bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-400/30",
      textColor: "text-blue-600"
    },
    {
      id: 2,
      icon: "📊",
      title: "50",
      subtitle: "Projects Delivered",
      description: "From startups to enterprise solutions",
      bgColor: "bg-gradient-to-br from-emerald-500/20 to-green-500/20",
      borderColor: "border-emerald-400/30",
      textColor: "text-emerald-600"
    },
    {
      id: 3,
      icon: "👨‍💻",
      title: "Expert",
      subtitle: "Team",
      description: "Experienced professionals in web, app, and software development",
      bgColor: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-400/30",
      textColor: "text-purple-600"
    },
    {
      id: 4,
      icon: "⚡",
      title: "Modern",
      subtitle: "Technology Stack",
      description: "MERN, Laravel, WordPress, Flutter, React Native, Next.js, and more",
      bgColor: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-400/30",
      textColor: "text-orange-600"
    },
    {
      id: 5,
      icon: "🏢",
      title: "Multiple",
      subtitle: "Industries Served",
      description: "IT, Manufacturing, E-Commerce, Logistics, Healthcare, Education & More",
      bgColor: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
      borderColor: "border-indigo-400/30",
      textColor: "text-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-4 md:p-8">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Global</span> Footprint
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering exceptional digital solutions across borders and industries with cutting-edge technology
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`${stat.bgColor} backdrop-blur-sm rounded-2xl p-8 border ${stat.borderColor} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
            >
              {/* Icon and Title */}
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-xl ${stat.bgColor} border ${stat.borderColor} flex items-center justify-center mr-4`}>
                  <span className="text-3xl">{stat.icon}</span>
                </div>
                <div>
                  <div className={`text-4xl font-bold ${stat.textColor}`}>
                    {stat.title}
                  </div>
                  <div className="text-lg font-semibold text-gray-800">
                    {stat.subtitle}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6">
                {stat.description}
              </p>

              {/* Tech Tags for Technology Stack */}
              {stat.title === "Modern" && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {['MERN', 'Laravel', 'WordPress', 'Flutter', 'React Native', 'Next.js'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/50 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Industry Tags for Industries Served */}
              {stat.title === "Multiple" && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {['IT', 'Manufacturing', 'E-Commerce', 'Logistics', 'Healthcare', 'Education'].map((industry) => (
                    <span
                      key={industry}
                      className="px-3 py-1 bg-white/50 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-300"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              )}

              {/* Decorative Line */}
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-6"></div>
            </div>
          ))}

          {/* CTA Card - Takes full width */}
          <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="text-center lg:text-left mb-6 lg:mb-0">
                <h2 className="text-3xl font-bold mb-3">Ready to Transform Your Business?</h2>
                <p className="text-blue-100 text-lg">
                  Join our global community of successful clients
                </p>
              </div>
              <div className="flex gap-4">
                <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg">
                  Start Project
                </button>
                <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Businesses Choose Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Fast Delivery</h4>
              <p className="text-gray-600">Quick turnaround without compromising quality</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Premium Quality</h4>
              <p className="text-gray-600">Enterprise-grade solutions for all project sizes</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Ongoing Support</h4>
              <p className="text-gray-600">24/7 maintenance and support services</p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-5xl mb-4 block">"</span>
            <p className="text-xl italic mb-6">
              Their global expertise and modern technology stack transformed our digital presence.
              The team delivered exceptional results beyond our expectations.
            </p>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-4"></div>
              <div className="text-left">
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-gray-300">CTO, Global Tech Corp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}