// // import React from 'react';
// // import { Mail, Phone, MapPin, MessageCircle, Linkedin } from 'lucide-react';

// // const Footer = () => {
// //   return (
// // <footer className="bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white bottom-0">



// //       <div className="max-w-7xl  mx-auto px-8 py-2">
// //         {/* Main Content */}
// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          
// //           {/* Brand Section */}
// //           <div className="lg:col-span-1">
// //             <div className="mb-8">
// //               <h2 className="text-4xl font-normal tracking-tight mb-3">
// //                 <span className="font-thin">D</span>
// //                 <span className="font-medium">Codes</span>
// //               </h2>
// //               <div className="w-20 h-0.5 bg-gradient-to-r from-black to-white mb-4"></div>
// //               <p className="text-gray-400 text-sm font-normal tracking-widest uppercase">
// //                 Driving tech innovation
// //               </p>
// //             </div>
            
// //             {/* Address */}
// //             <div className="flex items-start space-x-4 group">
// //               <MapPin className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0 group-hover:text-blue-400 transition-colors duration-300" />
// //               <p className="text-gray-400 text-sm leading-relaxed font-normal">
// //                 E 914, Ganesh Glory 11,<br />
// //                 Jagatpur Road, SG Highway,<br />
// //                 Ahmedabad, Gujarat - 382470
// //               </p>
// //             </div>
// //           </div>

// //           {/* Services & Company */}
// //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            
// //             {/* Company Links */}
// //             <div>
// //               <h3 className="text-white text-lg font-normal mb-8 tracking-wide">
// //                 Company
// //               </h3>
// //               <nav className="space-y-4">
// //                 {[
// //                   { name: 'About', href: '/about' },
// //                   // { name: 'Career', href: '/career' },
// //                   { name: 'Porfolio', href: '/porfolio' },
// //                   { name: 'Blog', href: '/blogs' }
// //                 ].map((item) => (
// //                   <a
// //                     key={item.name}
// //                     href={item.href}
// //                     className="block text-gray-400 hover:text-white text-sm font-normal transition-colors duration-300 hover:translate-x-1 transform"
// //                   >
// //                     {item.name}
// //                   </a>
// //                 ))}
// //               </nav>
// //             </div>

// //             {/* Services */}
// //             <div>
// //               <h3 className="text-white text-lg font-normal mb-8 tracking-wide">
// //                 Services
// //               </h3>
// //               <nav className="space-y-4">
// //                 {[
// //                   { name: 'App Development', href: '/services/enterprise-portal' },
// //                   { name: 'web Development', href: '/services/dedicated-team' },
// //                   { name: 'Digital marketing', href: '/services/digital-transformation' },
// //                   { name: 'SaaS Development', href: '/services/saas' }
// //                 ].map((item) => (
// //                   <a
// //                     key={item.name}
// //                     href={item.href}
// //                     className="block text-gray-400 hover:text-white text-sm font-normal transition-colors duration-300 hover:translate-x-1 transform"
// //                   >
// //                     {item.name}
// //                   </a>
// //                 ))}
// //               </nav>
// //             </div>
// //           </div>

// //           {/* Contact Section */}
// //           <div>
// //             <h3 className="text-white text-lg font-normal mb-8 tracking-wide">
// //               Get in Touch
// //             </h3>
            
// //             <div className="space-y-6">
// //               {/* Email Contacts */}
// //               <div className="space-y-4">
// //                 <div className="flex items-center space-x-4 group">
// //                   <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
// //                     <Mail className="w-4 h-4 text-gray-400 group-hover:text-white" />
// //                   </div>
// //                   <div>
// //                     <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Sales</p>
// //                     <a href="mailto:sale@dcodestech.com" className="text-gray-300 hover:text-white text-sm font-normal transition-colors">
// //                       sale@dcodestech.com
// //                     </a>
// //                   </div>
// //                 </div>
                
// //                 <div className="flex items-center space-x-4 group">
// //                   <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
// //                     <Mail className="w-4 h-4 text-gray-400 group-hover:text-white" />
// //                   </div>
// //                   <div>
// //                     <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Info</p>
// //                     <a href="mailto:info@dcodestech.com" className="text-gray-300 hover:text-white text-sm font-normal transition-colors">
// //                       info@dcodestech.com
// //                     </a>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Phone Contact */}
// //               <div className="flex items-center space-x-4 group">
// //                 <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
// //                   <Phone className="w-4 h-4 text-gray-400 group-hover:text-white" />
// //                 </div>
// //                 <div>
// //                   <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Call / WhatsApp</p>
// //                   <a href="tel:+916353653977" className="text-gray-300 hover:text-white text-sm font-normal transition-colors">
// //                     +91 6353 653 977
// //                   </a>
// //                 </div>
// //               </div>

// //               {/* WhatsApp Button */}
// //               <a 
// //                 href="https://wa.me/916353653977" 
// //                 className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
// //               >
// //                 <MessageCircle className="w-4 h-4" />
// //                 <span className="text-sm font-medium">Chat on WhatsApp</span>
// //               </a>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Divider */}
// //         <div className="h-px bg-gradient-to-r from-transparent  via-gray-700 to-transparent mb-12"></div>

// //         {/* Bottom Section */}
// //         <div className="flex flex-col lg:flex-row  justify-between items-center space-y-6 lg:space-y-0">
// //           <p>Dcodes Technologies — Driving Tech Innovation, Building Global Impact.
// // </p>
// // <p>Pioneering next-generation software solutions for enterprises worldwide.
// // </p>
// //           {/* Copyright */}
// //           <p className="text-gray-500 text-sm font-normal">
// //             © 2018–2025 dcode, Inc. All rights reserved.
// //           </p>
          
// //           {/* Social Media */}
// //           <div className="flex items-center space-x-4">
// //             <span className="text-gray-500 text-xs  font-normal tracking-wider uppercase mr-4">Follow Us</span>
            
// //             {/* LinkedIn */}
// //             <a 
// //               href="https://www.linkedin.com/company/dcodes-technologies/"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="w-12 h-12 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
// //               aria-label="LinkedIn"
// //             >
// //              <Linkedin className='text-gray-300 '/>
// //             </a>
            
// //             {/* Facebook */}
// //             <a 
// //               href="https://www.facebook.com/share/1F89hvr99T/"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="w-12 h-12 rounded-full bg-gray-800 hover:bg-blue-500 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
// //               aria-label="Facebook"
// //             >
// //               <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
// //                 <path d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7l-1.598.001c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"/>
// //               </svg>
// //             </a>
            
// //             {/* Instagram */}
// //             <a 
// //               href="https://www.instagram.com/dcodes_technologies?igsh=MWk4NWprZzZoNWh6"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
// //               aria-label="Instagram"
// //             >
// //               <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
// //                 <path d="M10 2.162c2.67 0 2.986.01 4.04.058 2.71.123 3.778 1.21 3.902 3.902.048 1.054.058 1.37.058 4.04 0 2.67-.01 2.986-.058 4.04-.124 2.69-1.19 3.777-3.902 3.902-1.054.048-1.37.058-4.04.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.778-1.213-3.902-3.902-.048-1.054-.058-1.37-.058-4.04 0-2.67.01-2.986.058-4.04.124-2.69 1.185-3.778 3.902-3.902 1.054-.048 1.37-.058 4.04-.058zm0-2.162c-2.717 0-3.056.012-4.123.06-3.631.166-5.65 2.185-5.816 5.817-.048 1.066-.06 1.405-.06 4.123s.012 3.057.06 4.123c.166 3.632 2.185 5.65 5.817 5.817 1.066.048 1.405.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.405.061-4.123s-.012-3.057-.06-4.123C17.97 2.247 15.952.228 12.32.06 11.254.012 10.915 0 10.162 0L10 0z"/>
// //                 <path d="M10 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"/>
// //               </svg>
// //             </a>
// //           </div>
// //         </div>
        
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;







// import React from 'react';
// import { Mail, Phone, MapPin, MessageCircle, Linkedin, Facebook, Instagram } from 'lucide-react';

// const Footer = () => {
//   return (
//     <div className="relative z-[9999]">
//       {/* Micro-CTA Section */}
//       <section className="text-white py-16 bg-gradient-to-b ">
//         <div className="max-w-4xl mx-auto px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-normal mb-4 tracking-tight">
//             Ready to Transform Your Business?
//           </h2>
//           <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-normal">
//             Let's build your next digital innovation together.
//           </p>
//           <a
//             href="/connect"
//             className="inline-flex z-0 relative items-center px-8 py-4 bg-white text-blue-600 font-medium rounded-full hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-xl"
//           >
//             Schedule a Consultation
//           </a>
//         </div>
//       </section>

//       {/* Main Footer */}
//       <footer className="bg-gradient-to-b  text-white relative z-[99999]">
//         <div className="max-w-7xl mx-auto px-8 py-16">
//           {/* Content Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 mb-16">
            
//             {/* Brand Section */}
//             <div className="sm:pl-10 lg:col-span-2">
//               <div className="mb-8">
//                 <h2 className="text-4xl font-normal tracking-tight mb-3">
//                   <span className="font-thin">D</span>
//                   <span className="font-medium">codes</span>
//                 </h2>
//                 <div className="w-20 h-0.5 bg-gradient-to-r from-gray-600 to-white mb-4"></div>
//                 <p className="text-gray-400 text-sm font-normal tracking-widest uppercase">
//                   Driving tech innovation
//                 </p>
//               </div>

//               {/* Address */}
//       <div className="flex items-center space-x-4 group mb-6">
//   <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-red-400 transition-colors duration-300">
//     <MapPin className="w-4 h-4 text-gray-400 group-hover:text-white transition-all duration-300 fill-transparent " />
//   </div>
//   <div>
//     <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Where Are We</p>
//     <p className="text-gray-400 text-sm leading-relaxed font-normal group-hover:text-white transition-colors">
//       E 914, Ganesh Glory 11,<br />
//       Jagatpur Road, SG Highway,<br />
//       Ahmedabad, Gujarat - 382470
//     </p>
//   </div>
// </div>



//               {/* Contact Info */}
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-4 group">
//                   <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
//                     <Mail className="w-4 h-4 text-gray-400 group-hover:text-white" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
//                     <a
//                       href="mailto:info@dcodestech.com"
//                       className="text-gray-300 hover:text-white text-sm font-normal transition-colors"
//                     >
//                       info@dcodestech.com
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4 group">
//                   <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
//                     <Phone className="w-4 h-4 text-gray-400 group-hover:text-white" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Call Us</p>
//                     <a
//                       href="tel:+916353653977"
//                       className="text-gray-300 hover:text-white text-sm font-normal transition-colors"
//                     >
//                       +91 6353 653 977
//                     </a>
//                   </div>
//                 </div>

//                 {/* WhatsApp CTA */}
//                 <a
//                   href="https://wa.me/916353653977"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
//                 >
//                   <MessageCircle className="w-4 h-4" />
//                   <span className="text-sm font-medium">Chat on WhatsApp</span>
//                 </a>
//               </div>
//             </div>

//             {/* Links Section */}
//             <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-4 gap-8">
//               {/* Company */}
//               <div>
//                 <h3 className="text-white text-lg font-normal mb-8 tracking-wide">Company</h3>
//                 <nav className="space-y-4">
//                   {[
//                     { name: 'About Us', href: '/AboutUs' },
//                     { name: 'Careers', href: '/careers' },
//                   ].map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="block text-gray-400 hover:text-white text-sm font-normal transition-all duration-300 hover:translate-x-1"
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </nav>
//               </div>

//               {/* Solutions */}
//               <div>
//                 <h3 className="text-white text-lg font-normal mb-8 tracking-wide">Solutions</h3>
//                 <nav className="space-y-4">
//                   {[
//                     { name: 'App Development', href: '/services/appDevelopment' },
//                     { name: 'Web Development', href: '/services/webDevelopment' },
//                     { name: 'ERP System', href: '/services/erpSystem' },
//                     { name: 'Digital Marketing', href: '/services/digitalMarketing' },
//                   ].map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="block text-gray-400 hover:text-white text-sm font-normal transition-all duration-300 hover:translate-x-1"
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </nav>
//               </div>

//               {/* Resources */}
//               <div>
//                 <h3 className="text-white text-lg font-normal mb-8 tracking-wide">Resources</h3>
//                 <nav className="space-y-4">
//                   {[
//                     { name: 'Blog', href: '/blog' },
//                     // { name: 'Case Studies', href: '/resources/case-studies' },
//                     // { name: 'Documentation', href: '/resources/documentation' },
//                   ].map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="block text-gray-400 hover:text-white text-sm font-normal transition-all duration-300 hover:translate-x-1"
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </nav>
//               </div>

//               {/* Support */}
//               <div>
//                 <h3 className="text-white text-lg font-normal mb-8 tracking-wide">Support</h3>
//                 <nav className="space-y-4">
//                   {[
//                     { name: 'Help Center', href: '/connect' },
//                     { name: 'Privacy Policy', href: '/PrivacyPolicy' },
//                     { name: 'Terms of Use', href: '/TermsAndConditions' },
//                   ].map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="block text-gray-400 hover:text-white text-sm font-normal transition-all duration-300 hover:translate-x-1"
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </nav>
//               </div>
//             </div>
//           </div>

//           {/* Divider */}
//           <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12"></div>

//           {/* Bottom Section */}
//           <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
//             {/* Left Side */}
//             <div className="text-center lg:text-left">
//               <div className="flex flex-col items-center lg:items-start space-y-2 mb-4">
//                 <p className="text-white text-sm">
//                   Dcodes Technologies — Driving Tech Innovation, Building Global Impact.
//                 </p>
//                 <p className="text-gray-400 text-sm">
//                   Pioneering next-generation software solutions for enterprises worldwide.
//                 </p>
//               </div>
//               <p className="text-gray-500 text-sm mb-2">
//                 © 2025 Dcodes Technologies. All rights reserved. | 
//                 <a href="/PrivacyPolicy" className="hover:text-white mx-1">Privacy Policy</a> | 
//                 <a href="/TermsAndConditions" className="hover:text-white mx-1">Terms of Use</a> | 
//                 <a href="/sitemap" className="hover:text-white mx-1">Sitemap</a>
//               </p>
//               <p className="text-gray-500 text-xs flex items-center justify-center lg:justify-start space-x-1">
//                 <span>🌏</span>
//                 <span>Headquartered in Ahmedabad, India — Serving Clients Globally</span>
//               </p>
//             </div>

//             {/* Social Icons */}
//             <div className="flex items-center space-x-4">
//               <span className="text-gray-500 text-xs tracking-wider uppercase mr-4">Follow Us</span>
//               {[
//                 {
//                   href: "https://www.linkedin.com/company/dcodes-technologies/",
//                   color: "hover:bg-blue-600",
//                   icon: <Linkedin className="w-4 h-4" />,
//                 },
//                 {
//                   href: "https://www.facebook.com/share/1F89hvr99T/",
//                   color: "hover:bg-blue-500",
//                   icon: <Facebook className="w-4 h-4" />,
//                 },
//                 {
//                   href: "https://www.instagram.com/dcodes_technologies",
//                   color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500",
//                   icon: <Instagram className="w-4 h-4" />,
//                 },
//               ].map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg group ${item.color}`}
//                   aria-label={item.href.split('/')[2]}
//                 >
//                   <div className="text-gray-400 group-hover:text-white transition-colors">
//                     {item.icon}
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;









import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Linkedin, Facebook, Instagram } from 'lucide-react';


const Footer = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: 'Where Are We',
      content: 'E 914, Ganesh Glory 11,<br />Jagatpur Road, SG Highway,<br />Ahmedabad, Gujarat - 382470',
      href: 'https://www.google.com/maps/place/Dcodes+Technologies+-+IT+%26+Digital+marketing+company+in+Ahmedabad/@23.1129007,72.5404468,771m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395e838fec06f32f:0xf5637809fb96630a!8m2!3d23.1129007!4d72.5404468!16s%2Fg%2F11lmj9bvgh?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D',
      hoverColor: 'group-hover:bg-red-400'
    },
    {
      icon: Mail,
      label: 'Email',
      content: 'info@dcodestech.com',
      href: 'mailto:info@dcodestech.com',
      hoverColor: 'group-hover:bg-blue-600'
    },
    {
       icon: Phone,
      label: 'Call Us',
      content: '+91 6353 653 977',
      href: 'tel:+916353653977',
      hoverColor: 'group-hover:bg-green-600'
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/AboutUs' },
    { name: 'Careers', href: '/careers' },
  ];

  const solutionLinks = [
    { name: 'App Development', href: '/services/appDevelopment' },
    { name: 'Web Development', href: '/services/webDevelopment' },
    { name: 'ERP System', href: '/services/erpSystem' },
    { name: 'Digital Marketing', href: '/services/digitalMarketing' },
  ];

  const resourceLinks = [
    { name: 'Blog', href: '/blog' },
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/connect' },
    { name: 'Privacy Policy', href: '/PrivacyPolicy' },
    { name: 'Terms of Use', href: '/TermsAndConditions' },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/company/dcodes-technologies/",
      color: "hover:bg-blue-600",
      icon: <Linkedin className="w-4 h-4" />,
      label: "LinkedIn"
    },
    {
      href: "https://www.facebook.com/share/1F89hvr99T/",
      color: "hover:bg-blue-500",
      icon: <Facebook className="w-4 h-4" />,
      label: "Facebook"
    },
    {
      href: "https://www.instagram.com/dcodes_technologies",
      color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500",
      icon: <Instagram className="w-4 h-4" />,
      label: "Instagram"
    },
  ];

  const ContactItem = ({ icon: Icon, label, content, href, hoverColor }: typeof contactInfo[0]) => (
    <div className="flex items-center space-x-4 group mb-6">
     <div className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-colors duration-300 ${hoverColor}`}>
  {Icon && (
    <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-all duration-300" />
  )}
</div>

      <div>
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{label}</p>
        {href ? (
          <a
            href={href}
            className="text-gray-300 hover:text-white text-sm font-normal transition-colors"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : (
          <p 
            className="text-gray-400 text-sm leading-relaxed font-normal group-hover:text-white transition-colors"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
    </div>
  );

  const LinkSection = ({ title, links }: { title: string; links: typeof companyLinks }) => (
    <div>
      <h3 className="text-white text-lg font-normal mb-6 tracking-wide">{title}</h3>
      <nav className="space-y-3">
        {links.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="block text-gray-400 hover:text-white text-sm font-normal transition-all duration-300 hover:translate-x-1"
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );

  return (
    <div className="relative">
      {/* Micro-CTA Section */}
      <section className="text-white py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-normal mb-4 tracking-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-normal">
            Let's build your next digital innovation together.
          </p>
          <a
            href="/connect"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-medium rounded-full hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-xl"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 mb-16">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-4xl font-normal tracking-tight mb-3">
                  <span className="font-thin">D</span>
                  <span className="font-medium">codes</span>
                </h2>
                <div className="w-20 h-0.5 bg-gradient-to-r from-gray-600 to-white mb-4"></div>
                <p className="text-gray-400 text-sm font-normal tracking-widest uppercase">
                  Driving tech innovation
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-2">
                {contactInfo.map((item, index) => (
                  <ContactItem key={index} {...item} />
                ))}

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/916353653977"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg mt-4"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Links Section */}
            <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              <LinkSection title="Company" links={companyLinks} />
              <LinkSection title="Solutions" links={solutionLinks} />
              <LinkSection title="Resources" links={resourceLinks} />
              <LinkSection title="Support" links={supportLinks} />
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12"></div>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Left Side */}
            <div className="text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start space-y-2 mb-4">
                <p className="text-white text-sm">
                  Dcodes Technologies — Driving Tech Innovation, Building Global Impact.
                </p>
                <p className="text-gray-400 text-sm">
                  Pioneering next-generation software solutions for enterprises worldwide.
                </p>
              </div>
              <p className="text-gray-500 text-sm mb-2">
                © 2025 Dcodes Technologies. All rights reserved. | 
                <a href="/PrivacyPolicy" className="hover:text-white mx-1">Privacy Policy</a> | 
                <a href="/TermsAndConditions" className="hover:text-white mx-1">Terms of Use</a> | 
                <a href="/sitemap" className="hover:text-white mx-1">Sitemap</a>
              </p>
              <p className="text-gray-500 text-xs flex items-center justify-center lg:justify-start space-x-1">
                <span>🌏</span>
                <span>Headquartered in Ahmedabad, India — Serving Clients Globally</span>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-2 me-5">
              <span className="text-gray-500 text-xs tracking-wider uppercase me-4">Follow Us</span>
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg group ${item.color} `}
                  aria-label={item.label}
                >
                  <div className="text-gray-400 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;