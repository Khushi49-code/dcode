// "use client"
// import React, { useEffect, useState } from 'react';
// import { ChevronDown, Target, Eye, Users, Linkedin, ExternalLink, Twitter, Instagram, Facebook } from 'lucide-react';

// const AboutUsPage = () => {
//   const [expandedSection, setExpandedSection] = useState(null);

//   // Animated Stat Component
//   function AnimatedStat({ value }) { 
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//       let start = 0; 
//       const end = parseInt(value);
//       if (start === end) return;

//       const duration = 1500;
//       const increment = end / (duration / 16);

//       const counter = setInterval(() => {
//         start += increment;
//         if (start >= end) {
//           start = end;     
//           clearInterval(counter);
//         }
//         setCount(Math.floor(start));
//       }, 16);

//       return () => clearInterval(counter);
//     }, [value]);

//     return <div className="text-3xl font-extralight mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">{count}+</div>;
//   }

//   const toggleSection = (index) => {
//     setExpandedSection(expandedSection === index ? null : index);
//   };

//   // Data from both components
//   const interactiveSections = [
//     {
//       id: 1,
//       title: "About Company",
//       icon: <Users className="w-5 h-5" />,
//       content: "From custom websites and mobile apps to enterprise software and digital marketing, we combine creativity, technology, and strategy to deliver measurable impact."
//       // about compny have bullet points 
// // From custom websites and mobile apps to enterprise software and digital marketing, we combine creativity, technology, and strategy to deliver measurable impact.
// // Our mission is to help startups, SMEs, and global enterprises unlock growth through innovation, performance-driven development, and seamless digital experiences.
// // At Dcodes Technologies, we blend creativity, code, and innovation to build powerful digital experiences for a connected world.
// // With a strong global presence and a client-first mindset, we turn ideas into scalable realities.
// // Since our inception, we’ve helped businesses across industries transform ideas into scalable, high-performing solutions — from custom websites and mobile apps to ERP systems, SEO, and digital marketing strategies that drive real growth.


//     },
//     {
//       id: 2,
//       title: "Our Mission",
//       icon: <Target className="w-5 h-5" />,
//       content: "To deliver high-performance digital products that simplify business processes and enhance user experiences. To ensure continuous innovation through R&D, emerging technologies, and adaptive design. To foster long-term partnerships built on trust, transparency, and measurable results. To maintain a culture of collaboration, learning, and excellence across our teams and clients."
// // add bullet points
// // To deliver high-performance digital products that simplify business processes and enhance user experiences.
// // To ensure continuous innovation through R&D, emerging technologies, and adaptive design.
// // To foster long-term partnerships built on trust, transparency, and measurable results.
// // To maintain a culture of collaboration, learning, and excellence across our teams and clients.



//     },
//     {
//       id: 3,
//       title: "Our Vision",
//       icon: <Eye className="w-5 h-5" />,
//       content: "To become a global leader in digital transformation, empowering businesses worldwide with smart, scalable, and secure technology solutions that drive long-term success."
//     },
//      {
//       id: 4,
//       title: "Global Expertise",
//       icon: <Eye className="w-5 h-5" />,
//       content: "To become a global leader in digital transformation, empowering businesses worldwide with smart, scalable, and secure technology solutions that drive long-term success."
// //         add bullet points
// //         Dcodes Technologies partners with clients across multiple industries and continents, providing adaptable, cross-border digital solutions.
// // Our scalable infrastructure and diverse talent enable us to handle projects of any size — from small business websites to enterprise-grade systems — with the same focus, precision, and passion.

//     },
//     {
//       id: 5,
//       title: "Our Focus",
//       icon: <Eye className="w-5 h-5" />,
//       content: "At Dcodes Technologies, our focus is on delivering innovative, high-quality digital solutions that drive business growth and enhance user experiences. We prioritize understanding our clients' unique needs to create tailored strategies that leverage the latest technologies and industry best practices."
// // add bullet points
// // We don’t just build software — we create digital ecosystems that connect businesses to customers, data to strategy, and vision to execution.
// // Whether you need a responsive website, a custom business application, or a 360° marketing strategy, Dcodes Technologies ensures results that scale with your growth.

//     }
//   ];

//   const stats = [
//     { value: "  Serving Clients Worldwide", label: " Trusted by businesses across multiple countries" },
//     { value: "💡 50+ Projects Delivered", label: " From startups to enterprise solutions" },
//     { value: "👩 Expert Team ", label: " Experienced professionals in web, app, and software development" }
//     // add ⚙️ Technology Stack — MERN, Laravel, WordPress, Flutter, React Native, Next.js, and more
//   //  add 🚀 Industries Served — IT, Manufacturing, E-Commerce, Logistics, Healthcare, Education & More

//   ];

//   const services = [
//     {
//       title: "Website Development",
//       description: "Our expertise spans across Website Development, Software & Web ERP Solutions, Mobile App Development, Digital Marketing, and SEO — designed to transform your ideas into high-performing, real-world results.",
//       technologies: ["React & Next.js", "Laravel & PHP", "WordPress", "MERN Stack"]
//     },
//     {
//       title: "Software & Web ERP Solutions",
//       description: "We design and develop custom Web ERP solutions tailored to your specific business requirements, ensuring seamless workflow automation, enhanced productivity, and scalable growth.",
//       industries: ["IT", "Manufacturing", "E-Commerce", "Logistics", "Healthcare", "Education"]
//     },
//     {
//       title: "Mobile App Development",
//       description: "High-performance mobile applications for both Android and iOS platforms using modern technologies.",
//       technologies: ["Android", "iOS", "Flutter", "React Native"]
//     },
//     {
//       title: "Digital Marketing & SEO",
//       description: "Complete digital marketing services to help businesses build a strong online presence and drive real results.",
//       platforms: ["SEO Strategy", "Social Media", "Content Marketing", "Performance Analytics"]
//     }
//   ];

//   const values = [
//     { letter: "I", title: "Innovation", description: "We continuously explore new technologies and creative approaches to deliver cutting-edge solutions." },
//     { letter: "Q", title: "Quality & Security", description: "We ensure every product meets the highest standards of performance, scalability, and data protection." },
//     { letter: "T", title: "Teamwork", description: "Our skilled professionals collaborate seamlessly to turn complex challenges into powerful digital outcomes." }
//   //  add upper more 
// //   Integrity: We believe in honest communication and ethical practices at every stage.
// // Customer-Centricity: Every project begins with your goals — success is built around your vision.
// // Quality & Security: We ensure every product meets the highest standards of performance, scalability, and data protection.
// // Teamwork: Our skilled professionals collaborate seamlessly to turn complex challenges into powerful digital outcomes.

//   ];

//   const teamMembers = [
//     {
//       name: "Dev Padhya",
//       role: "Founder & CEO",
//       description: "Founded in early 2019, we are driven by a passion for innovation and digital transformation. With a deep understanding of the fast-evolving digital landscape, we empower organizations to thrive in the modern era.",
//       social: { linkedin: "https://www.linkedin.com/in/dev-padhya/" },
//       imgurl: "http://dcodestech.com/wp-content/uploads/2025/07/Dev-pc.jpg"
//     },
//     {
//       name: "Vishal Vyas",
//       role: "Full Stack Developer",
//       description: "Experienced full-stack developer skilled in modern web technologies, scalable applications, and end-to-end solutions.",
//       social: { 
//         linkedin: "https://www.linkedin.com/in/vishalvyas-dev/", 
//         twitter: "", 
//         instagram: "https://www.instagram.com/the_vyasvishal" 
//       },
//       imgurl: "https://media.licdn.com/dms/image/v2/D4D03AQFSR8s1k2iKTg/profile-displayphoto-scale_400_400/B4DZht8IRlH4Ak-/0/1754191138193?e=1762387200&v=beta&t=Z17LHhsTviCR6jtdyur0Ql13fhPrvql5tM5X6FaeaRo"
//     },
//     {
//       name: "khushali Parikh",
//       role: "PHP Developer",
//       description: "Backend developer specializing in PHP, database management, and server-side programming.",
//       social: { linkedin: "", twitter: "" },
//       imgurl: "/k.jpg"
//     },
//     {
//       name: "Kunj Thakar",
//       role: "Digital Marketer",
//       description: "Creative digital marketer with skills in branding, social media campaigns, and content strategy.",
//       social: { linkedin: "https://www.linkedin.com/in/kunj-thakar-290756305/" },
//       imgurl: "https://media.licdn.com/dms/image/v2/D4E03AQEIp5UyXneRUw/profile-displayphoto-scale_400_400/B4EZg1vDWFGcAs-/0/1753248184664?e=1762387200&v=beta&t=t-shO9u2-LPZulhz75UtFBlg3VSZP0mNdq1qBK3OPlw"
//     },
//     {
//       name: "Milan Aaradeshna",
//       role: "WordPress Developer",
//       description: "Expert in WordPress development, including custom themes, plugin development, and website optimization.",
//       social: { linkedin: "https://www.linkedin.com/in/milan-aaradeshna-43157458/" },
//       imgurl: "https://media.licdn.com/dms/image/v2/D4D03AQF4-P2CJoAusQ/profile-displayphoto-shrink_400_400/B4DZTUwhxlH0Ag-/0/1738736279085?e=1762387200&v=beta&t=X2t1vgceIWlgf9-IfJbdQ6UUQUG9dSgi9cvRIH_suLA"
//     }
//   ];

//   const SocialIcon = ({ type, href, className = "" }) => {
//     const icons = {
//       twitter: Twitter,
//       instagram: Instagram,
//       facebook: Facebook,
//       linkedin: Linkedin
//     };
//     const IconComponent = icons[type];

//     if (!href || !IconComponent) return null;

//     return (
//       <a 
//         href={href} 
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label={type}
//         className={`p-2 rounded-lg transition-all duration-300 hover:bg-blue-500/10 ${className}`}
//       >
//         <IconComponent className="w-4 h-4 text-blue-400 transition-colors duration-300 hover:text-blue-300" />
//       </a>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-black text-white overflow-hidden">
//       {/* Background Grid Pattern */}
//       <div className="fixed inset-0 opacity-5 pointer-events-none">
//         <div 
//           className="absolute inset-0" 
//           style={{
//             backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
//             backgroundSize: '40px 40px'
//           }}
//         />
//       </div>

//       {/* Main Container */}
//       <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20">

//         {/* Hero Section */}
//         <div className="mb-32 mt-20 text-center">
//           <div className="inline-block border border-white/10 rounded-full px-6 py-2 mb-8">
//             <span className="text-sm font-normal tracking-wider uppercase">Professional IT Solutions</span>
//           </div>

//           <h1 className="text-6xl md:text-8xl font-normal mb-8 tracking-tight">
//             Decodes
//             <span className="block font-extralight italic">Technology</span>
//           </h1>

//           <p className="text-xl font-normal text-white/70 max-w-2xl mx-auto leading-relaxed">
//             At Dcodes Technologies, we build powerful digital solutions that help businesses scale in today's fast-moving world.
//           </p>
//         </div>

//         {/* Stats Section */}
//         <div className="mb-32 grid grid-cols-1 md:grid-cols-3 gap-8">
//           {stats.map((stat, index) => (
//             <div key={index} className="group cursor-default text-center">
//               <div className="relative p-8 border border-white/10 rounded-lg bg-gray-900/20 backdrop-blur-sm hover:border-white/30 transition-all duration-500">
//                 <AnimatedStat value={stat.value} />
//                 <div className="text-sm text-gray-400 tracking-wider uppercase font-normal">
//                   {stat.label}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Interactive About Sections */}
//         <div className="mb-32">
//           <div className="mb-16">
//             <h2 className="text-4xl font-normal mb-4 tracking-wide">About Our Company</h2>
//             <div className="w-16 h-px bg-white/20 mb-8"></div>
//           </div>

//           <div className="space-y-2">
//             {interactiveSections.map((section, index) => (
//               <div key={section.id} className="group">
//                 <div className="relative border border-white/10 rounded-xl bg-gray-900/10 backdrop-blur-sm hover:border-white/30 transition-all duration-300 overflow-hidden">
//                   <button
//                     className="w-full p-8 flex items-center justify-between text-left focus:outline-none"
//                     onClick={() => toggleSection(index)}
//                   >
//                     <div className="flex items-center gap-6">
//                       <div className="p-3 rounded-lg bg-gray-800/50 text-gray-400 group-hover:text-blue-400 group-hover:bg-blue-400/10 transition-all duration-300">
//                         {section.icon}
//                       </div>
//                       <h3 className="text-2xl font-normal group-hover:text-white transition-colors duration-300">
//                         {section.title}
//                       </h3>
//                     </div>

//                     <div className={`transition-all duration-300 text-gray-400 group-hover:text-blue-400 ${
//                       expandedSection === index ? 'rotate-180' : ''
//                     }`}>
//                       <ChevronDown className="w-5 h-5" />
//                     </div>
//                   </button>

//                   <div className={`transition-all duration-500 ease-out overflow-hidden ${
//                     expandedSection === index ? 'max-h-60 pb-8' : 'max-h-0'
//                   }`}>
//                     <div className="px-8">
//                       <div className="w-full h-px bg-gradient-to-r from-gray-700 to-transparent mb-6" />
//                       <p className="text-gray-300 leading-relaxed font-normal text-lg pl-16">
//                         {section.content}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* What We Do Section */}
//         <section className="mb-32">
//           <div className="mb-16">
//             <h2 className="text-4xl font-normal mb-4 tracking-wide">What We Do?</h2>
//             <div className="w-16 h-px bg-white/20 mb-8"></div>
//             <p className="text-lg font-normal text-white/80 leading-relaxed max-w-4xl">
// At Dcodes Technologies, we craft powerful digital solutions that help businesses grow, scale, and succeed in the modern world.
//             </p>
//             <p>
//               Our expertise spans across Website Development, Software & Web ERP Solutions, Mobile App Development, Digital Marketing, and SEO — designed to transform your ideas into high-performing, real-world results.
//             </p>
//             <p>We combine innovation, strategy, and technology to deliver solutions that don’t just look great — they drive measurable business impact and support your growth globally.
// </p>
//           </div>


//           <div className="grid md:grid-cols-2 gap-8">
//             {services.map((service, index) => (
//               <div key={index} className="group cursor-pointer">
//                 <div className="border border-white/10 rounded-lg p-8 h-full transition-all duration-300 hover:border-white/30 hover:bg-white/5">
//                   <div className="flex items-center justify-center w-12 h-12 border border-white/20 rounded-full mb-6 group-hover:border-white/40 transition-colors">
//                     <div className="w-2 h-2 bg-white rounded-full"></div>
//                   </div>
//                   <h3 className="text-2xl font-normal tracking-wide mb-4">{service.title}</h3>
//                   <p className="text-white/70 font-normal leading-relaxed mb-4">{service.description}</p>

//                   {service.technologies && (
//                     <div className="flex flex-wrap gap-2">
//                       {service.technologies.map((tech, techIndex) => (
//                         <span key={techIndex} className="px-3 py-1 border border-white/10 rounded-full text-sm font-normal">
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   )}

//                   {service.industries && (
//                     <div className="flex flex-wrap gap-2">
//                       {service.industries.map((industry, industryIndex) => (
//                         <span key={industryIndex} className="px-3 py-1 border border-white/10 rounded-full text-sm font-normal">
//                           {industry}
//                         </span>
//                       ))}
//                     </div>
//                   )}

//                   {service.platforms && (
//                     <div className="flex flex-wrap gap-2">
//                       {service.platforms.map((platform, platformIndex) => (
//                         <span key={platformIndex} className="px-3 py-1 border border-white/10 rounded-full text-sm font-normal">
//                           {platform}
//                         </span>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Web ERPs Section */}
//         <section className="mb-32">
//           <div className="mb-16">
//             <h2 className="text-4xl font-normal mb-4 tracking-wide">Web ERPs</h2>
//             <div className="w-16 h-px bg-white/20 mb-8"></div>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="space-y-8">
//               <p className="text-white/80 font-normal leading-relaxed">
// We develop custom Web ERP solutions designed around your unique business processes and operational needs.
//               </p>
//               <p>Along with tailor-made ERP systems, we also offer our own ready-to-use ERP product for fast deployment.</p>
//               <p>Built using the latest technologies, our ERP solutions are secure, scalable, and performance-optimized, empowering organizations to manage data, teams, and operations efficiently from anywhere in the world.</p>

//               <div className="space-y-6">
//                 <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
//                   <h3 className="text-xl font-normal mb-3 tracking-wide">Custom ERP Solutions</h3>
//                   <p className="text-white/70 font-normal">We design and develop custom Web ERP solutions tailored to your specific business requirements, ensuring seamless workflow automation, enhanced productivity, and scalable growth.</p>
//                 </div>

//                 <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
//                   <h3 className="text-xl font-normal mb-3 tracking-wide">Ready-to-Use ERP</h3>
//                   <p className="text-white/70 font-normal">
// In addition to custom solutions, we provide our own ready-to-use ERP product, enabling businesses to quickly deploy a secure, scalable, and performance-optimized system that streamlines operations from day one.
//                   </p>
//                 </div>
//                  <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
//                   <h3 className="text-xl font-normal mb-3 tracking-wide">Technology & Performance</h3>
//                   <p className="text-white/70 font-normal">
// Our ERP systems leverage the latest technologies to deliver high security, scalability, and optimized performance, supporting businesses locally and globally.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center justify-center">
//               <div className="border border-white/10 rounded-lg p-8 w-full">
//                 <img 
//                   src="./CRM.png" 
//                   alt="ERP System" 
//                   className="rounded-lg w-full h-auto"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Core Values */}
//         <div className="mb-32">
//           <div className="mb-16">
//             <h2 className="text-4xl font-normal mb-4 tracking-wide">Our Core Values</h2>
//             <div className="w-16 h-px bg-white/20 mb-6" />
//             <p className="text-gray-400 font-normal leading-relaxed max-w-2xl text-lg">
//               The fundamental principles that guide everything we do and shape our company culture.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {values.map((value, index) => (
//               <div key={index} className="group cursor-default">
//                 <div className="relative p-8 h-full border border-white/10 rounded-xl bg-gray-900/20 backdrop-blur-sm hover:border-white/30 transition-all duration-500">
//                   <div className="mb-8">
//                     <div className="w-16 h-16 border border-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:border-blue-400 group-hover:bg-blue-400/10 transition-all duration-300">
//                       <span className="text-2xl font-normal text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
//                         {value.letter}
//                       </span>
//                     </div>
//                   </div>

//                   <h3 className="text-2xl font-normal mb-4 group-hover:text-white transition-colors duration-300">
//                     {value.title}
//                   </h3>

//                   <p className="text-gray-400 font-normal leading-relaxed">
//                     {value.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CEO Section */}
//         <div className="mb-32">
//           <div className="mb-16">
//             <h2 className="text-4xl font-normal mb-4 tracking-wide">Leadership Vision</h2>
//             <div className="w-16 h-px bg-white/20" />
//           </div>

//           <div className="relative p-12 border border-white/10 rounded-2xl bg-gray-900/20 backdrop-blur-sm">
//             <div className="flex flex-col lg:flex-row gap-12 items-start">
//               <div className="flex-shrink-0">
//                 <div className="w-40 h-40 rounded-2xl overflow-hidden bg-gray-800 border border-white/10">
//                   <img
//                     src="http://dcodestech.com/wp-content/uploads/2025/07/Dev-pc.jpg"
//                     alt="Dev Padhya"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>

//               <div className="flex-1">
//                 <div className="mb-8">
//                   <h3 className="text-3xl font-normal mb-2 text-white">Dev Padhya</h3>
//                   <p className="text-blue-400 font-medium text-lg tracking-wide">
//                     Founder & CEO
//                   </p>
//                 </div>

//                 <div className="mb-8">
//                   <p className="text-lg leading-relaxed text-gray-300 font-normal">
// Founded in early 2019, we are driven by a passion for innovation and digital transformation. With a deep understanding of the fast-evolving digital landscape, we empower organizations to thrive in the modern era.
//                   </p>
//                 </div>

//                 <button
//                   onClick={() => window.open("https://www.linkedin.com/in/dev-padhya/", "_blank")}
//                   className="group inline-flex items-center gap-3 px-6 py-3 border border-white/10 rounded-lg bg-gray-800/30 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
//                 >
//                   <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
//                   <span className="font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
//                     Connect on LinkedIn
//                   </span>
//                   <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Team Section */}
//         <div className="mb-20">
//           <div className="mb-16">
//             <h2 className="text-4xl font-normal mb-4 tracking-wide">Meet Our Team</h2>
//             <div className="w-16 h-px bg-white/20 mb-6" />
//             <b>Talented Professionals, United by Innovation </b>
//             <p className="text-gray-400 font-normal leading-relaxed max-w-2xl text-lg">
// At Dcodes Technologies, our team is a diverse group of skilled designers, developers, and strategists who collaborate to create exceptional digital experiences.
//             </p>
//             <p>We combine creativity, technical expertise, and strategic thinking to deliver solutions that drive measurable results and help businesses thrive globally.
// </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {teamMembers.map((member, index) => (
//               <div key={index} className="group cursor-default">
//                 <div className="relative p-8 border border-white/10 rounded-xl bg-gray-900/20 backdrop-blur-sm hover:border-white/30 transition-all duration-500">
//                   <div className="flex items-center gap-4 mb-6">
//                     <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center border border-white/10 overflow-hidden">
//                       <img src={member.imgurl} alt={member.name} className="w-16 h-16 rounded-full object-cover" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-normal text-white">{member.name}</h3>
//                       <p className="text-blue-400 font-normal">{member.role}</p>
//                     </div>
//                   </div>

//                   <p className="text-gray-400 font-normal leading-relaxed mb-6">
//                     {member.description}
//                   </p>

//                   <div className="flex gap-2">
//                     {Object.entries(member.social).map(([platform, url]) => (
//                       <SocialIcon key={platform} type={platform} href={url} />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Contact Section */}
//         <section className="py-16">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-normal mb-6 tracking-wide">Thank You!</h2>
//             <p className="text-lg font-normal text-white/70">
//               Hopefully, we can work together and this project will be successful.
//             </p>
//           </div>

//           <div className="border border-white/10 rounded-lg p-12 max-w-2xl mx-auto">
//             <h3 className="text-3xl font-normal mb-12 text-center tracking-wide">Let's Get In Touch</h3>

//             <div className="space-y-12">
//               <div className="text-center">
//                 <h4 className="text-xl font-normal mb-6 tracking-wide">Contact Us</h4>
//                 <div className="space-y-2">
//                   <p className="text-white/80 font-normal">info@decodestechnology.com</p>
//                   <p className="text-white/80 font-normal">+91 6353 653 977</p>
//                 </div>
//               </div>

//               <div className="w-16 h-px bg-white/10 mx-auto"></div>

//               <div className="text-center">
//                 <h4 className="text-xl font-normal mb-6 tracking-wide">Visit Our Website</h4>
//                 <p className="text-white/80 font-normal">www.decodestechnology.com</p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default AboutUsPage;









"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import DarkVeil from "@/components/ReactBit/DarkVeil";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { ChevronDown, Target, Eye, Users, ExternalLink, MissionIcon, ValuesIcon, Globe } from 'lucide-react';

const AboutUsPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  // Animated Stat Component
  function AnimatedStat({ value }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      const duration = 1500;
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCount(Math.floor(start));
      }, 16);

      return () => clearInterval(counter);
    }, [value]);

    return <div className="text-3xl font-extralight mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">{count}+</div>;
  }

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  // Data from both components
  const interactiveSections = [
    {
      id: 1,
      title: "About Company",
      image: "./about.jpg",
      icon: <Users className="w-5 h-5" />,
      content: [
        "From custom websites and mobile apps to enterprise software and digital marketing, we combine creativity, technology, and strategy to deliver measurable impact.",
        // "Our mission is to help startups, SMEs, and global enterprises unlock growth through innovation, performance-driven development, and seamless digital experiences.",
        "Dcodes Technologies builds innovative, scalable digital experiences with a creative, client-first approach.",
        "Since our inception, we've helped businesses across industries transform ideas into scalable, high-performing solutions from custom websites and mobile apps to ERP systems, SEO, and digital marketing strategies that drive real growth."
      ]
    },
    {
      id: 2,
      title: "Our Mission",
      image: "./misson.jpg",
      icon: <Target className="w-5 h-5" />,
      content: [
        "To deliver high-performance digital products that simplify business processes and enhance user experiences.",
        "To ensure continuous innovation through R&D, emerging technologies, and adaptive design.",
        "To foster long-term partnerships built on trust, transparency, and measurable results.",
        "To maintain a culture of collaboration, learning, and excellence across our teams and clients."
      ]
    },
    {
      id: 3,
      title: "Our Vision",
      image: "./vision.jpg",
      icon: <Eye className="w-5 h-5" />,
      content: [
        "To become a global leader in digital transformation, empowering businesses worldwide with smart, scalable, and secure technology solutions that drive long-term success.",
        "With a strong global presence and a client-first mindset, we turn ideas into scalable realities."
      ]
    },
    {
      id: 4,
      title: "Global Expertise",
      image: "./goals.jpg",
      icon: <Globe className="w-5 h-5" />,
      content: [
        "Dcodes Technologies partners with clients across multiple industries and continents, providing adaptable, cross-border digital solutions.",
        "Our scalable infrastructure and diverse talent enable us to handle projects of any size from small business websites to enterprise-grade systems with the same focus, precision, and passion."
      ]
    },
    {
      id: 5,
      title: "Our Focus",
      image: "./focus.jpg",
      icon: <Target className="w-5 h-5" />,
      content: [
        "We don't just build software we create digital ecosystems that connect businesses to customers, data to strategy, and vision to execution.",
        "Whether you need a responsive website, a custom business application, or a 360° marketing strategy, Dcodes Technologies ensures results that scale with your growth."
      ]
    }
  ];


  const stats = [
    { emoji: "🌍", value: "Global", label: "Serving Clients Worldwide", description: "Trusted by businesses across multiple countries" },
    { emoji: "💡", value: "50", label: "Projects Delivered", description: "From startups to enterprise solutions" },
    { emoji: "👥", value: "Expert", label: "Team", description: "Experienced professionals in web, app, and software development" },
    { emoji: "⚙️", value: "Modern", label: "Technology Stack", description: "MERN, Laravel, WordPress, Flutter, React Native, Next.js, and more" },
    { emoji: "🚀", value: "Multiple", label: "Industries Served", description: "IT, Manufacturing, E-Commerce, Logistics, Healthcare, Education & More" }
  ];

  const services = [
    {
      title: "Website Development",
      description: "Our expertise spans across Website Development, Software & Web ERP Solutions, Mobile App Development, Digital Marketing, and SEO designed to transform your ideas into high-performing, real-world results.",
      technologies: ["React & Next.js", "Laravel & PHP", "WordPress", "MERN Stack"]
    },
    {
      title: "Software & Web ERP Solutions",
      description: "We design and develop custom Web ERP solutions tailored to your specific business requirements, ensuring seamless workflow automation, enhanced productivity, and scalable growth.",
      industries: ["IT", "Manufacturing", "E-Commerce", "Logistics", "Healthcare", "Education"]
    },
    {
      title: "Mobile App Development",
      description: "High-performance mobile applications for both Android and iOS platforms using modern technologies.",
      technologies: ["Android", "iOS", "Flutter", "React Native"]
    },
    {
      title: "Digital Marketing & SEO",
      description: "Complete digital marketing services to help businesses build a strong online presence and drive real results.",
      platforms: ["SEO Strategy", "Social Media", "Content Marketing", "Performance Analytics"]
    }
  ];

  const values = [
    { letter: "I", title: "Innovation", description: "We continuously explore new technologies and creative approaches to deliver cutting-edge solutions." },
    { letter: "I", title: "Integrity", description: "We believe in honest communication and ethical practices at every stage." },
    { letter: "C", title: "Customer-Centricity", description: "Every project begins with your goals — success is built around your vision." },
    { letter: "Q", title: "Quality & Security", description: "We ensure every product meets the highest standards of performance, scalability, and data protection." },
    { letter: "T", title: "Teamwork", description: "Our skilled professionals collaborate seamlessly to turn complex challenges into powerful digital outcomes." },
    { letter: "R", title: "Responsibility", description: "We take ownership of our actions and strive to deliver reliable solutions that make a positive impact." }
  ];

  const teamMembers = [
    {
      name: "Dev Padhya",
      role: "Founder & CEO",
      description: "Founded in early 2019, we are driven by a passion for innovation and digital transformation. With a deep understanding of the fast-evolving digital landscape, we empower organizations to thrive in the modern era.",
      social: { linkedin: "https://www.linkedin.com/in/dev-padhya/" },
      imgurl: "/dev.png"
    },
    // {
    //   name: "Vishal Vyas",
    //   role: "Full Stack Developer",
    //   description: "Experienced full-stack developer skilled in modern web technologies, scalable applications, and end-to-end solutions.",
    //   social: { 
    //     linkedin: "https://www.linkedin.com/in/vishalvyas-dev/", 
    //     twitter: "", 
    //     instagram: "https://www.instagram.com/the_vyasvishal" 
    //   },
    //   imgurl: "https://media.licdn.com/dms/image/v2/D4D03AQFSR8s1k2iKTg/profile-displayphoto-scale_400_400/B4DZht8IRlH4Ak-/0/1754191138193?e=1762387200&v=beta&t=Z17LHhsTviCR6jtdyur0Ql13fhPrvql5tM5X6FaeaRo"
    // },
    {
      name: "Khushali Parikh",
      role: "Full Stack Developer",
      description: "Full stack developer specializing in Marn, database management, and server-side programming.",
      social: { linkedin: "", twitter: "" },
      imgurl: "/k.jpg"
    },
    {
      name: "Kunj Thakar",
      role: "Digital Marketer",
      description: "Creative digital marketer with skills in branding, social media campaigns, and content strategy.",
      social: { linkedin: "https://www.linkedin.com/in/kunj-thakar-290756305/" },
      imgurl: "/ku.jpg"
    },
    {
      name: "Milan Aaradeshna",
      role: "WordPress Developer",
      description: "Expert in WordPress development, including custom themes, plugin development, and website optimization.",
      social: { linkedin: "https://www.linkedin.com/in/milan-aaradeshna-43157458/" },
      imgurl: "/m.png"
    },
    {
      name: "Jaydev Patel",
      role: "Backend Developer",
      description: "Expert in Backend development, including custom themes, plugin development, and website optimization.",
      social: { linkedin: "https://www.linkedin.com/in/milan-aaradeshna-43157458/" },
      imgurl: "/.png"
    }
  ];


  const images = [
    //  "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    //  "https://assets.aceternity.com/animated-modal.png",
    // "https://assets.aceternity.com/animated-testimonials.webp",
    //  "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    //  "https://assets.aceternity.com/github-globe.png",
    // "https://assets.aceternity.com/glare-card.png",
    // "https://assets.aceternity.com/layout-grid.png",
    // "https://assets.aceternity.com/flip-text.png",
    //  "https://assets.aceternity.com/hero-highlight.png",
    // "https://assets.aceternity.com/carousel.webp",
    // "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    //  "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    //  "https://assets.aceternity.com/signup-form.png",
    //  "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    // "https://assets.aceternity.com/spotlight-new.webp",
    //  "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    //  "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    //  "https://assets.aceternity.com/tabs.png",
    //  "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    //  "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    //  "https://assets.aceternity.com/glowing-effect.webp",
    //  "https://assets.aceternity.com/hover-border-gradient.png",
    //  "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    //  "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    //  "https://assets.aceternity.com/macbook-scroll.png",
    //  "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    //  "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    //  "https://assets.aceternity.com/multi-step-loader.png",
    //  "https://assets.aceternity.com/vortex.png",
    //  "https://assets.aceternity.com/wobble-card.png",
    //  "https://assets.aceternity.com/world-map.webp",
    "./logo1.jpg",
    "./logo2.png",
    "./logo3.png",
    "./logo4.png",
    "./logo5.jpg",
    // "./logo6.png",
    "./logo7.jpg",
    "./logo8.png",
    "./logo9.png",
    "./logo10.png",
    "./logo11.jpg",
    "./logo12.jpg",
    "./logo13.png",
    "./logo14.png",
    "./logo15.jpg",
    "./logo16.png",
    "./logo12.jpg",
    // "./logo6.png",
    "./logo7.jpg",
    "./logo8.png",
    "./logo12.jpg",
    "./logo17.png",
    "./logo18.png",
    "./logo13.png",
    "./logo19.png",
    "./logo20.png",
    "./logo9.png",
    "./logo10.png",
    "./logo11.jpg",
    "./logo12.jpg",
    "./logo13.png",


  ];



  const SocialIcon = ({ type, href, className = "" }) => {
    const icons = {
      twitter: Twitter,
      instagram: Instagram,
      facebook: Facebook,
      linkedin: Linkedin
    };
    const IconComponent = icons[type];

    if (!href || !IconComponent) return null;

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={type}
        className={`p-2 rounded-lg transition-all duration-300 hover:bg-blue-500/10 ${className}`}
      >
        <IconComponent className="w-4 h-4 text-blue-400 transition-colors duration-300 hover:text-blue-300" />
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      {/* Animated DarkVeil Background */}
      <div style={{ width: '100%', height: '600px', position: 'absolute', top: 0, left: 0, zIndex: 0, pointerEvents: 'none', }} >
        <DarkVeil />
      </div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20">

        {/* Hero Section */}
        {/* Hero Section */}
        <div className="relative mb-32 mt-20 text-center">


          {/* Hero Content (on top of background) */}
          <div className="relative z-10">
            <div className="inline-block border border-white/10 rounded-full px-6 py-2 mb-8 bg-black/30 backdrop-blur-sm">
              <span className="text-sm font-normal tracking-wider uppercase">Professional IT Solutions</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-normal mb-8 tracking-tight">
              Dcodes
              <span className="block font-extralight italic">Technologies</span>
            </h1>

            <p className="text-xl font-normal text-white/70 max-w-2xl mx-auto leading-relaxed">
              At Dcodes Technologies, we build powerful digital solutions that help businesses scale in today's fast-moving world.
            </p>
          </div>

          <div className="flex flex-col mt-8 gap-4 items-center sm:flex-row sm:justify-center sm:gap-4">
            <button
              className='p-3 w-45 md:w-58 lg:w-70 bg-gradient-to-r from-purple-800 to-blue-700 text-white font-bold rounded-full
             border-2 border-transparent hover:border-white transition-all duration-300'
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Dcodes Technologies Corporate Profile.pdf';
                link.download = 'portfolio.pdf';
                link.click();
              }}
            >
              Download Portfolio
            </button>

            <button
              className='p-3 w-45 md:w-58 lg:w-70 bg-transparent text-white font-bold rounded-full border-2 border-gray-400 hover:border-white transition-all duration-300'
              onClick={() => window.open('/Dcodes Technologies Corporate Profile.pdf', '_blank')}
            >
              View Portfolio
            </button>
          </div>

        </div>


        {/* Stats Section */}
        {/* <div className="mb-26 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group cursor-default">
              <div className="relative p-8 border border-white/10 rounded-lg bg-gray-900/20 backdrop-blur-sm hover:border-white/30 transition-all duration-500 h-full">
                <div className="text-2xl mb-4">{stat.emoji}</div>
                <div className="text-xl font-normal mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm  text-white/90 font-medium mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400 font-normal leading-relaxed">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div> */}
        {/* Stats Section  duplicate*/}
        <div className="w-full flex justify-center">
          <div className="mb-26 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 max-w-7xl lg:max-w-[90rem] mx-auto px-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group cursor-default flex justify-center"
              >
                <div className="relative w-full lg:w-[230px] xl:w-[250px] p-8 border border-white/10 rounded-lg bg-gray-900/20 backdrop-blur-sm hover:border-white/30 transition-all duration-500 h-full">
                  <div className="text-2xl mb-4">{stat.emoji}</div>
                  <div className="text-xl font-normal mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/90 font-medium mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-400 font-normal leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>










        {/* Interactive About Sections */}
        <div className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">About Our Company</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
          </div>

          <div className="space-y-8">
            {interactiveSections.map((section, index) => (
              <div key={section.id} className="group">
                <div className="relative border border-white/10 rounded-xl bg-gray-900/10 backdrop-blur-sm hover:border-white/30 transition-all duration-300 overflow-hidden">
                  <div className="p-8 flex flex-col md:flex-row gap-8 items-start lg:items-center">
                    {/* Image on left for even, right for odd */}
                    {index % 2 === 0 ? (
                      <>
                        {/* Image - Left */}
                        <div className="flex-shrink-0 w-full md:w-64 lg:w-80 order-2 md:order-1">
                          <img
                            src={section.image}
                            alt={section.title}
                            className="w-full h-48 md:h-56 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>

                        {/* Text Content - Right */}
                        <div className="flex-1 order-1 md:order-2">
                          <div className="flex items-center gap-6 mb-6">
                            <div className="p-3 rounded-lg bg-gray-800/50 text-gray-400 group-hover:text-blue-400 group-hover:bg-blue-400/10 transition-all duration-300">
                              {section.icon}
                            </div>
                            <h3 className="text-2xl font-normal group-hover:text-white transition-colors duration-300">
                              {section.title}
                            </h3>
                          </div>

                          <div className="w-full h-px bg-gradient-to-r from-gray-700 to-transparent mb-6" />
                          <ul className="space-y-3">
                            {section.content.map((point, idx) => (
                              <li key={idx} className="text-gray-300 leading-relaxed font-normal text-lg flex items-start">
                                <span className="text-blue-400 mr-3 mt-1.5">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Text Content - Left */}
                        <div className="flex-1 order-1">
                          <div className="flex items-center gap-6 mb-6">
                            <div className="p-3 rounded-lg bg-gray-800/50 text-gray-400 group-hover:text-blue-400 group-hover:bg-blue-400/10 transition-all duration-300">
                              {section.icon}
                            </div>
                            <h3 className="text-2xl font-normal group-hover:text-white transition-colors duration-300">
                              {section.title}
                            </h3>
                          </div>

                          <div className="w-full h-px bg-gradient-to-r from-gray-700 to-transparent mb-6" />
                          <ul className="space-y-3">
                            {section.content.map((point, idx) => (
                              <li key={idx} className="text-gray-300 leading-relaxed font-normal text-lg flex items-start">
                                <span className="text-blue-400 mr-3 mt-1.5">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Image - Right */}
                        <div className="flex-shrink-0 w-full md:w-64 lg:w-80 order-2">
                          <img
                            src={section.image}
                            alt={section.title}
                            className="w-full h-48 md:h-56 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>




        {/* What We Do Section */}
        <section className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">What We Do?</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
            <div className="space-y-4 text-lg font-normal text-white/80 leading-relaxed max-w-4xl">
              <p>
                At Dcodes Technologies, we craft powerful digital solutions that help businesses grow, scale, and succeed in the modern world.
              </p>
              <p>
                Our expertise spans across Website Development, Software & Web ERP Solutions, Mobile App Development, Digital Marketing, and SEO designed to transform your ideas into high-performing, real-world results.
              </p>
              <p>
                We combine innovation, strategy, and technology to deliver solutions that don't just look great — they drive measurable business impact and support your growth globally.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="border border-white/10 rounded-lg p-8 h-full transition-all duration-300 hover:border-white/30 hover:bg-white/5">
                  <div className="flex items-center justify-center w-12 h-12 border border-white/20 rounded-full mb-6 group-hover:border-white/40 transition-colors">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-normal tracking-wide mb-4">{service.title}</h3>
                  <p className="text-white/70 font-normal leading-relaxed mb-4">{service.description}</p>

                  {service.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 border border-white/10 rounded-full text-sm font-normal">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {service.industries && (
                    <div className="flex flex-wrap gap-2">
                      {service.industries.map((industry, industryIndex) => (
                        <span key={industryIndex} className="px-3 py-1 border border-white/10 rounded-full text-sm font-normal">
                          {industry}
                        </span>
                      ))}
                    </div>
                  )}

                  {service.platforms && (
                    <div className="flex flex-wrap gap-2">
                      {service.platforms.map((platform, platformIndex) => (
                        <span key={platformIndex} className="px-3 py-1 border border-white/10 rounded-full text-sm font-normal">
                          {platform}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Web ERPs Section */}
        {/* <section className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Web ERPs</h2>
            <div className="w-16 h-px bg-white/20 mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-white/80 font-normal leading-relaxed text-lg">
                We develop custom Web ERP solutions designed around your unique business processes and operational needs.
              </p>
              <p className="text-white/80 font-normal leading-relaxed text-lg">
                Along with tailor-made ERP systems, we also offer our own ready-to-use ERP product for fast deployment.
              </p>
              <p className="text-white/80 font-normal leading-relaxed text-lg">
                Built using the latest technologies, our ERP solutions are secure, scalable, and performance-optimized, empowering organizations to manage data, teams, and operations efficiently from anywhere in the world.
              </p>

              <div className="space-y-6 pt-4">
                <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
                  <h3 className="text-xl font-normal mb-3 tracking-wide">Custom ERP Solutions</h3>
                  <p className="text-white/70 font-normal">We design and develop custom Web ERP solutions tailored to your specific business requirements, ensuring seamless workflow automation, enhanced productivity, and scalable growth.</p>
                </div>

                <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
                  <h3 className="text-xl font-normal mb-3 tracking-wide">Ready-to-Use ERP</h3>
                  <p className="text-white/70 font-normal">
                    In addition to custom solutions, we provide our own ready-to-use ERP product, enabling businesses to quickly deploy a secure, scalable, and performance-optimized system that streamlines operations from day one.
                  </p>
                </div>

                <div className="border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
                  <h3 className="text-xl font-normal mb-3 tracking-wide">Technology & Performance</h3>
                  <p className="text-white/70 font-normal">
                    Our ERP systems leverage the latest technologies to deliver high security, scalability, and optimized performance, supporting businesses locally and globally.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="border border-white/10 rounded-lg p-8 w-full">
                <img
                  src="./CRM.png"
                  alt="ERP System"
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section> */}

        {/* Core Values */}
        {/* <div className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Our Core Values</h2>
            <div className="w-16 h-px bg-white/20 mb-6" />
            <p className="text-gray-400 font-normal leading-relaxed max-w-2xl text-lg">
              The fundamental principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group cursor-default">
                <div className="relative p-8 h-full border border-white/10 rounded-xl bg-gray-900/20 backdrop-blur-sm hover:border-white/30 transition-all duration-500">
                  <div className="mb-8">
                    <div className="w-16 h-16 border border-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:border-blue-400 group-hover:bg-blue-400/10 transition-all duration-300">
                      <span className="text-2xl font-normal text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
                        {value.letter}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-normal mb-4 group-hover:text-white transition-colors duration-300">
                    {value.title}
                  </h3>

                  <p className="text-gray-400 font-normal leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CEO Section */}
        <div className="mb-32">
          <div className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Leadership Vision</h2>
            <div className="w-16 h-px bg-white/20" />
          </div>

          <div className="relative p-12 border border-white/10 rounded-2xl bg-gray-900/20 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="flex-shrink-0">
                <div className="w-40 h-40 rounded-2xl overflow-hidden bg-gray-800 border border-white/10">
                  <img
                    src="http://dcodestech.com/wp-content/uploads/2025/07/Dev-pc.jpg"
                    alt="Dev Padhya"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="mb-8">
                  <h3 className="text-3xl font-normal mb-2 text-white">Dev Padhya</h3>
                  <p className="text-blue-400 font-medium text-lg tracking-wide">
                    Founder & CEO
                  </p>
                </div>

                <div className="mb-8">
                  <p>Founded in early 2019, we are driven by a passion for innovation and digital transformation. With a deep understanding of the fast-evolving digital landscape, we empower organizations to thrive in the modern era.
                  </p>
                  <br />
                  <p className="text-lg leading-relaxed text-gray-300 font-normal">
                    Our mission is to help businesses harness the power of technology to achieve their strategic goals, streamline operations, and stay ahead in an ever-changing world. At Dcodes Technologies, we don’t just build solutions we create impactful, scalable, and future-ready digital experiences.
                  </p>
                </div>

                <button
                  onClick={() => window.open("https://www.linkedin.com/in/dev-padhya/", "_blank")}
                  className="group inline-flex items-center gap-3 px-6 py-3 border border-white/10 rounded-lg bg-gray-800/30 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
                >
                  {/* <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" /> */}
                  <span className="font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    Connect on LinkedIn
                  </span>
                  <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        {/* <div className="mb-20">
          <div className="mb-16">
            <h2 className="text-4xl font-normal mb-4 tracking-wide">Meet Our Team</h2>
            <div className="w-16 h-px bg-white/20 mb-6" />
            <p className="text-xl font-semibold text-white mb-4">Talented Professionals, United by Innovation</p>
            <p className="text-gray-400 font-normal leading-relaxed max-w-2xl text-lg mb-2">
              At Dcodes Technologies, our team is a diverse group of skilled designers, developers, and strategists who collaborate to create exceptional digital experiences.
            </p>
            <p className="text-gray-400 font-normal leading-relaxed max-w-2xl text-lg">
              We combine creativity, technical expertise, and strategic thinking to deliver solutions that drive measurable results and help businesses thrive globally.
            </p>
          </div> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group cursor-default">
                <div className="relative p-8 border border-white/10 rounded-xl bg-gray-900/20 backdrop-blur-sm hover:border-white/30 transition-all duration-500 flex flex-col h-full min-h-[320px]"> */}
        {/* Header with avatar and name */}
        {/* <div className="flex items-center gap-4 mb-6 flex-shrink-0">
                    <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center border border-white/10 overflow-hidden flex-shrink-0">
                      <img
                        src={member.imgurl}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-normal text-white truncate">{member.name}</h3>
                      <p className="text-blue-400 font-normal truncate">{member.role}</p>
                    </div>
                  </div> */}

        {/* Description with fixed height and scroll if needed */}
        {/* <div className="flex-1 min-h-0 mb-6">
                    <p className="text-gray-400 font-normal leading-relaxed h-full overflow-y-auto">
                      {member.description}
                    </p>
                  </div>  */}

        {/* Social links */}
        {/* <div className="flex gap-2 flex-shrink-0">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <SocialIcon key={platform} type={platform} href={url} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Industry we serve in */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1400px] mx-auto">

            {/* Heading */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Delivering the Right Solution
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We excel in delivering the best-suited solution...
              </p>
            </div>

            {/* FIXED GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-[32%_68%] gap-10 items-start">

              {/* LEFT - INDUSTRIES */}
              <div className="min-w-[280px]">   {/* ← prevents disappearing */}
                <h3 className="text-xl font-semibold text-white mb-6">
                  Industries We Serve
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "Fintech & Insurance", icon: "💳" },
                    { name: "Education", icon: "🎓" },
                    { name: "Energy and Utilities", icon: "⚡" },
                    { name: "Healthcare", icon: "🏥" },
                    { name: "Media & Entertainment", icon: "🎬" },
                    { name: "Oil & Gas, Mining", icon: "⛽" },
                    { name: "Retail & Ecommerce", icon: "🛒" },
                    { name: "Logistics & Distribution", icon: "🚚" },
                    { name: "Travel & Hospitality", icon: "✈️" },
                    { name: "Public Sector", icon: "🏛️" },
                    { name: "Real Estate", icon: "🏢" },
                    { name: "Manufacturing", icon: "🚗" },
                   { name: "Financial Services", icon: "💰" },
{ name: "Food & Beverage", icon: "🍔" },

                  ].map((industry, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                    >
                      <span className="text-xl mr-3">{industry.icon}</span>
                      <span className="text-gray-200">{industry.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT - MARQUEE */}
              <div className="overflow-hidden rounded-2xl bg-gray-900/20 p-3 ring-1 ring-neutral-700/20">
                <ThreeDMarquee images={images} />
              </div>

            </div>
          </div>
        </section>

{/* OUR STORY SECTION */}
<section className="w-full py-16">
  <h2 className="text-4xl font-bold text-center mb-14">OUR STORY</h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
    <div className="group relative rounded-xl overflow-hidden shadow-xl border border-gray-400 transition-all duration-500 hover:shadow-blue-400/40 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-300 p-[2px]">
      <div className="rounded-xl overflow-hidden">
        <Image
          src="/story (3).jpeg"
          alt="Our Journey Begins"
          width={250}
          height={350}
          className="object-cover h-64 w-full filter grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
        />
      </div>
      <h3 className="absolute top-4 left-4 text-white font-semibold text-lg drop-shadow-md">
        Our Journey Begins
      </h3>
    </div> 
    {/* Card 1 */}
    <div className="group relative rounded-xl overflow-hidden shadow-xl border border-gray-400 transition-all duration-500 hover:shadow-blue-400/40 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-300 p-[2px]">
      <div className="rounded-xl overflow-hidden">
        <Image
          src="/story (1).jpeg"
          alt="The Team & Our Hub"
          width={250}
          height={350}
          className="object-cover h-64 w-full filter grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
        />
      </div>
      <h3 className="absolute top-4 left-4 text-white font-semibold text-lg drop-shadow-md">
        The Team & Our Hub
      </h3>
    </div>

    {/* Card 2 */}
    <div className="group relative rounded-xl overflow-hidden shadow-xl border border-gray-400 transition-all duration-500 hover:shadow-blue-400/40 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-300 p-[2px]">
      <div className="rounded-xl overflow-hidden">
        <Image
          src="/story (2).jpeg"
          alt="Ideation & Collaboration"
          width={250}
          height={350}
          className="object-cover h-64 w-full filter grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
        />
      </div>
      <h3 className="absolute top-4 left-4 text-white font-semibold text-lg drop-shadow-md">
        Ideation & Collaboration
      </h3>
    </div>

    {/* Card 3 */}


  </div>
</section>



        {/* <main className="min-h-screen bg-black text-white">
   
        {/* Contact Section */}
        <section className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal mb-6 tracking-wide">Thank You!</h2>
            <p className="text-lg font-normal text-white/70">
              Hopefully, we can work together and this project will be successful.
            </p>
          </div>

          <div className="border border-white/10 rounded-lg p-12 max-w-2xl mx-auto">
            <h3 className="text-3xl font-normal mb-12 text-center tracking-wide">Let's Get In Touch</h3>

            <div className="space-y-12">
              <div className="text-center">
                <h4 className="text-xl font-normal mb-6 tracking-wide">Contact Us</h4>
                <div className="space-y-2">
                  <p className="text-white/80 font-normal">info@dcodestech.com</p>
                  <p className="text-white/80 font-normal">+91 6353 653 977</p>
                </div>
              </div>

              {/* <div className="w-16 h-px bg-white/10 mx-auto"></div> */}
              {/*               
              <div className="text-center">
                <h4 className="text-xl font-normal mb-6 tracking-wide">Visit Our Website</h4>
                <p className="text-white/80 font-normal">www.dcodestech.com</p>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;