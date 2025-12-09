// // // // "use client";
// // // // import React, { useState, useEffect, useRef } from 'react';
// // // // import { Menu, X, ArrowUp, ChevronDown } from 'lucide-react';

// // // // const Navbar = ({ currentPath = "/" }) => {
// // // //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // //   const [showScrollTop, setShowScrollTop] = useState(false);
// // // //   const [isServicesOpen, setIsServicesOpen] = useState(false);
// // // //   const servicesRef = useRef<HTMLElement | null>(null);

// // // //   const navigationItems = [
// // // //     { 
// // // //       name: "Services", 
// // // //       path: "/services",
// // // //       hasDropdown: true,
// // // //       dropdownItems: [
// // // //         { name: "App Development", path: "/services/app-development", description: "Native & cross-platform mobile apps" },
// // // //         { name: "Web Development", path: "/services/web-development", description: "Modern websites & web applications" },
// // // //         { name: "ERP System", path: "/services/erp-system", description: "Enterprise resource planning solutions" },
// // // //         { name: "Digital Marketing", path: "/services/digital-marketing", description: "Strategic online marketing campaigns" },
// // // //         { name: "SEO Enhancement", path: "/services/seo-enhancement", description: "Search engine optimization services" }
// // // //       ]
// // // //     },
// // // //     { name: "Portfolio", path: "/portfolio" },
// // // //     { name: "Blog", path: "/blog", external: true },
// // // //     { name: "Careers", path: "/careers" },
// // // //     { name: "About Us", path: "/AboutMe" },
// // // //   ];

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       const scrollY = window.scrollY;
// // // //       setIsScrolled(scrollY > 10);
// // // //       setShowScrollTop(scrollY > 400);
// // // //     };

// // // //     window.addEventListener('scroll', handleScroll, { passive: true });
// // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     document.body.style.overflow = isSidebarOpen ? 'hidden' : '';
// // // //     return () => {
// // // //       document.body.style.overflow = '';
// // // //     };
// // // //   }, [isSidebarOpen]);

// // // //   useEffect(() => {
// // // //     const handleClickOutside = (event: MouseEvent) => {
// // // //       if (
// // // //         servicesRef.current &&
// // // //         !(servicesRef.current as HTMLElement).contains(event.target as Node)
// // // //       ) {
// // // //         setIsServicesOpen(false);
// // // //       }
// // // //     };

// // // //     document.addEventListener('mousedown', handleClickOutside);
// // // //     return () => document.removeEventListener('mousedown', handleClickOutside);
// // // //   }, []);

// // // //   const toggleSidebar = (open: boolean) => {
// // // //     setIsSidebarOpen(open);
// // // //   };

// // // //   const scrollToTop = () => {
// // // //     window.scrollTo({
// // // //       top: 0,
// // // //       behavior: 'smooth'
// // // //     });
// // // //   };

// // // //   const handleServicesClick = () => {
// // // //     setIsServicesOpen(!isServicesOpen);
// // // //   };

// // // //   const handleDropdownItemClick = () => {
// // // //     setIsServicesOpen(false);
// // // //   };

// // // //   return (
// // // //     <>
// // // //       {/* Main Navbar */}
// // // //       <header 
// // // //         className={`fixed top-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
// // // //           isScrolled 
// // // //             ? 'bg-white/98 backdrop-blur-2xl border-b border-black/8 shadow-2xl shadow-black/10' 
// // // //             : 'bg-transparent'
// // // //         }`}
// // // //       >
// // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
// // // //           <div className="flex h-16 sm:h-18 lg:h-20 xl:h-22 items-center justify-between">
// // // //             {/* Logo */}
// // // //             {/* <a 
// // // //               href="/" 
// // // //               className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-extralight text-black hover:opacity-90 
// // // //                          transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] tracking-wider group relative
// // // //                          opacity-100 animate-slideInFade"
// // // //             >
// // // //               <span className="relative">
// // // //                 Dcodes
// // // //                 <span className="absolute -inset-3 bg-black/4 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></span>
// // // //               </span>
// // // //             </a> */}


// // // //                  <img src="logo/decode.png" alt="Dcodes Logo" className="h-8 sm:h-10 lg:h-12 xl:h-14" />


// // // //             {/* Desktop Navigation */}
// // // //             <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-12">
// // // //               {navigationItems.map((item, index) => {
// // // //                 const isActive = currentPath === item.path || (item.hasDropdown && currentPath.startsWith(item.path));

// // // //                 if (item.hasDropdown) {
// // // //                   return (
// // // //                     <div key={index} className="relative" ref={servicesRef}>
// // // //                       <button
// // // //                         onClick={handleServicesClick}
// // // //                         className={`
// // // //                           group relative transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
// // // //                           inline-flex items-center gap-1 py-3 px-5 text-sm hover:scale-[1.02] nav-link
// // // //                           ${isActive ? 'text-black' : 'text-black/60 hover:text-black/90'}
// // // //                           opacity-100 animate-slideInFade
// // // //                         `}
// // // //                         style={{ animationDelay: `${index * 120}ms` }}
// // // //                       >
// // // //                         <span className="relative overflow-hidden block">
// // // //                           <span className="inline-block transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-y-[-1px]">
// // // //                             {item.name}
// // // //                           </span>

// // // //                           {isActive && (
// // // //                             <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black rounded-full">
// // // //                               <span className="absolute inset-0 bg-black rounded-full animate-ping opacity-75"></span>
// // // //                             </span>
// // // //                           )}

// // // //                           {!isActive && (
// // // //                             <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-black/70 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
// // // //                           )}

// // // //                           <span className="absolute inset-0 bg-black/5 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 -mx-2 -my-1"></span>
// // // //                         </span>
// // // //                         <ChevronDown 
// // // //                           className={`w-3 h-3 transition-all duration-300 ${
// // // //                             isServicesOpen ? 'rotate-180' : 'rotate-0'
// // // //                           }`}
// // // //                         />
// // // //                       </button>

// // // //                       {/* Dropdown Menu */}
// // // //                       <div 
// // // //                         className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
// // // //                           isServicesOpen 
// // // //                             ? 'opacity-100 visible translate-y-0' 
// // // //                             : 'opacity-0 invisible translate-y-[-10px]'
// // // //                         }`}
// // // //                       >
// // // //                         <div className="bg-white/98 backdrop-blur-2xl border border-black/8 rounded-2xl shadow-2xl shadow-black/10 overflow-hidden">
// // // //                           {/* Dropdown arrow */}
// // // //                           <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/98 border-l border-t border-black/8 rotate-45 backdrop-blur-2xl"></div>

// // // //                           <div className="p-2">
// // // //                             {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
// // // //                               <a
// // // //                                 key={dropdownIndex}
// // // //                                 href={dropdownItem.path}
// // // //                                 onClick={handleDropdownItemClick}
// // // //                                 className="block p-4 rounded-xl hover:bg-black/5 transition-all duration-300 group"
// // // //                               >
// // // //                                 <div className="flex flex-col">
// // // //                                   <span className="text-sm font-medium text-black group-hover:text-black transition-colors duration-300">
// // // //                                     {dropdownItem.name}
// // // //                                   </span>
// // // //                                   <span className="text-xs text-black/60 group-hover:text-black/80 transition-colors duration-300 mt-1">
// // // //                                     {dropdownItem.description}
// // // //                                   </span>
// // // //                                 </div>
// // // //                               </a>
// // // //                             ))}
// // // //                           </div>
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>
// // // //                   );
// // // //                 }

// // // //                 const baseClasses = `
// // // //                   group relative transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
// // // //                   inline-block py-3 px-5 text-sm hover:scale-[1.02] nav-link
// // // //                   ${isActive ? 'text-black' : 'text-black/60 hover:text-black/90'}
// // // //                   opacity-100 animate-slideInFade
// // // //                 `;

// // // //                 const linkContent = (
// // // //                   <span className="relative overflow-hidden block">
// // // //                     <span className="inline-block transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-y-[-1px]">
// // // //                       {item.name}
// // // //                     </span>

// // // //                     {isActive && (
// // // //                       <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black rounded-full">
// // // //                         <span className="absolute inset-0 bg-black rounded-full animate-ping opacity-75"></span>
// // // //                       </span>
// // // //                     )}

// // // //                     {!isActive && (
// // // //                       <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-black/70 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
// // // //                     )}

// // // //                     <span className="absolute inset-0 bg-black/5 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 -mx-2 -my-1"></span>
// // // //                   </span>
// // // //                 );

// // // //                 return item.external ? (
// // // //                   <a
// // // //                     key={index}
// // // //                     href={item.path}
// // // //                     target="_blank"
// // // //                     rel="noopener noreferrer"
// // // //                     className={baseClasses}
// // // //                     style={{ animationDelay: `${index * 120}ms` }}
// // // //                   >
// // // //                     {linkContent}
// // // //                   </a>
// // // //                 ) : (
// // // //                   <a 
// // // //                     key={index}
// // // //                     href={item.path} 
// // // //                     className={baseClasses}
// // // //                     style={{ animationDelay: `${index * 120}ms` }}
// // // //                   >
// // // //                     {linkContent}
// // // //                   </a>
// // // //                 );
// // // //               })}
// // // //             </nav>

// // // //             {/* Contact & Mobile Menu */}
// // // //             <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
// // // //               {/* Contact Button - Desktop */}
// // // //               <a
// // // //                 href="/connect"
// // // //                 className="hidden md:inline-flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-2.5 xl:px-8 xl:py-3
// // // //                            border border-black/15 hover:border-black/30 text-black text-xs lg:text-sm
// // // //                            hover:bg-black/8 hover:shadow-xl hover:shadow-black/5 backdrop-blur-sm
// // // //                            transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] font-normal tracking-wider
// // // //                            hover:scale-[1.02] group relative overflow-hidden rounded-full
// // // //                            opacity-100 animate-slideInFade"
// // // //                 style={{ animationDelay: '600ms' }}
// // // //               >
// // // //                 <span className="relative z-10">Contact</span>
// // // //                 <span className="absolute inset-0 bg-black/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></span>
// // // //               </a>

// // // //               {/* Mobile Menu Button */}
// // // //               <button
// // // //                 onClick={() => toggleSidebar(true)}
// // // //                 className="md:hidden p-2 sm:p-2.5 text-black/60 hover:text-black/90 
// // // //                            transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-110 group
// // // //                            opacity-100 animate-slideInFade"
// // // //                 style={{ animationDelay: '700ms' }}
// // // //                 aria-label="Open menu"
// // // //               >
// // // //                 <div className="relative">
// // // //                   <Menu className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-500 group-hover:rotate-90" strokeWidth={1.5} />
// // // //                   <span className="absolute -inset-3 bg-black/8 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></span>
// // // //                 </div>
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </header>

// // // //       {/* Mobile Sidebar Overlay */}
// // // //       <div 
// // // //         className={`fixed inset-0 z-50 md:hidden transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
// // // //           isSidebarOpen 
// // // //             ? 'opacity-100 pointer-events-auto' 
// // // //             : 'opacity-0 pointer-events-none'
// // // //         }`}
// // // //       >
// // // //         {/* Backdrop */}
// // // //         <div 
// // // //           onClick={() => toggleSidebar(false)}
// // // //           className={`absolute inset-0 bg-white/80 backdrop-blur-xl transition-all duration-700 ${
// // // //             isSidebarOpen ? 'opacity-100' : 'opacity-0'
// // // //           }`}
// // // //         />

// // // //         {/* Sidebar */}
// // // //         <div 
// // // //           className={`absolute top-0 right-0 h-full w-80 sm:w-96 max-w-[90vw] 
// // // //                      bg-gradient-to-b from-white via-gray-50 to-white
// // // //                      border-l border-black/8 shadow-2xl shadow-black/60 backdrop-blur-2xl
// // // //                      transform transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
// // // //                        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
// // // //                      }`}
// // // //         >
// // // //           <div className="flex flex-col h-full relative overflow-hidden">
// // // //             {/* Decorative elements */}
// // // //             <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-black/3 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
// // // //             <div className="absolute bottom-20 left-0 w-32 h-32 bg-gradient-radial from-black/2 to-transparent rounded-full -translate-x-16"></div>

// // // //             {/* Header */}
// // // //             <div className="flex items-center justify-between p-6 sm:p-8 border-b border-black/8 relative z-10">
// // // //               <span className="text-lg sm:text-xl font-extralight text-black tracking-wider">Menu</span>
// // // //               <button
// // // //                 onClick={() => toggleSidebar(false)}
// // // //                 className="p-2 sm:p-2.5 text-black/60 hover:text-black/90 transition-all duration-500 hover:scale-110 group hover:rotate-90"
// // // //                 aria-label="Close menu"
// // // //               >
// // // //                 <div className="relative">
// // // //                   <X className="w-6 h-6 transition-transform duration-500" strokeWidth={1.5} />
// // // //                   <span className="absolute -inset-3 bg-black/8 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></span>
// // // //                 </div>
// // // //               </button>
// // // //             </div>

// // // //             {/* Navigation Links */}
// // // //             <nav className="flex-1 px-6 sm:px-8 py-8 sm:py-12 relative z-10 overflow-y-auto">
// // // //               <div className="space-y-2">
// // // //                 {navigationItems.map((item, index) => {
// // // //                   const isActive = currentPath === item.path || (item.hasDropdown && currentPath.startsWith(item.path));

// // // //                   if (item.hasDropdown) {
// // // //                     return (
// // // //                       <div key={index} className="border-b border-black/5">
// // // //                         <button
// // // //                           onClick={() => setIsServicesOpen(!isServicesOpen)}
// // // //                           className={`
// // // //                             group relative transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
// // // //                             flex items-center justify-between w-full text-left py-6 px-0 text-lg
// // // //                             ${isActive ? 'text-black' : 'text-black/60 hover:text-black/90'}
// // // //                             opacity-100 animate-slideInFade
// // // //                           `}
// // // //                           style={{ animationDelay: `${index * 80}ms` }}
// // // //                         >
// // // //                           <span className="relative overflow-hidden block">
// // // //                             <span className="inline-block transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
// // // //                               {item.name}
// // // //                             </span>

// // // //                             {isActive && (
// // // //                               <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-black rounded-r-full -ml-8 shadow-lg shadow-black/30">
// // // //                                 <span className="absolute inset-0 bg-black rounded-r-full animate-pulse opacity-60"></span>
// // // //                               </span>
// // // //                             )}

// // // //                             <span className="absolute inset-0 bg-black/3 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 -mx-2"></span>
// // // //                           </span>
// // // //                           <ChevronDown 
// // // //                             className={`w-4 h-4 transition-all duration-300 ${
// // // //                               isServicesOpen ? 'rotate-180' : 'rotate-0'
// // // //                             }`}
// // // //                           />
// // // //                         </button>

// // // //                         {/* Mobile Dropdown */}
// // // //                         <div className={`overflow-hidden transition-all duration-300 ${
// // // //                           isServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
// // // //                         }`}>
// // // //                           <div className="pl-4 pb-4 space-y-1">
// // // //                             {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
// // // //                               <a
// // // //                                 key={dropdownIndex}
// // // //                                 href={dropdownItem.path}
// // // //                                 onClick={() => toggleSidebar(false)}
// // // //                                 className="block py-3 px-4 text-sm text-black/70 hover:text-black hover:bg-black/5 rounded-lg transition-all duration-300"
// // // //                               >
// // // //                                 <div>
// // // //                                   <div className="font-medium">{dropdownItem.name}</div>
// // // //                                   <div className="text-xs text-black/50 mt-1">{dropdownItem.description}</div>
// // // //                                 </div>
// // // //                               </a>
// // // //                             ))}
// // // //                           </div>
// // // //                         </div>
// // // //                       </div>
// // // //                     );
// // // //                   }

// // // //                   const baseClasses = `
// // // //                     group relative transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
// // // //                     block w-full text-left py-6 px-0 text-lg border-b border-black/5 last:border-b-0 hover:pl-3
// // // //                     ${isActive ? 'text-black' : 'text-black/60 hover:text-black/90'}
// // // //                     opacity-100 animate-slideInFade
// // // //                   `;

// // // //                   const linkContent = (
// // // //                     <span className="relative overflow-hidden block">
// // // //                       <span className="inline-block transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-x-2">
// // // //                         {item.name}
// // // //                       </span>

// // // //                       {isActive && (
// // // //                         <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-black rounded-r-full -ml-8 shadow-lg shadow-black/30">
// // // //                           <span className="absolute inset-0 bg-black rounded-r-full animate-pulse opacity-60"></span>
// // // //                         </span>
// // // //                       )}

// // // //                       <span className="absolute inset-0 bg-black/3 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 -mx-2"></span>
// // // //                     </span>
// // // //                   );

// // // //                   return item.external ? (
// // // //                     <a
// // // //                       key={index}
// // // //                       href={item.path}
// // // //                       target="_blank"
// // // //                       rel="noopener noreferrer"
// // // //                       className={baseClasses}
// // // //                       style={{ animationDelay: `${index * 80}ms` }}
// // // //                     >
// // // //                       {linkContent}
// // // //                     </a>
// // // //                   ) : (
// // // //                     <a 
// // // //                       key={index}
// // // //                       href={item.path} 
// // // //                       className={baseClasses}
// // // //                       onClick={() => toggleSidebar(false)}
// // // //                       style={{ animationDelay: `${index * 80}ms` }}
// // // //                     >
// // // //                       {linkContent}
// // // //                     </a>
// // // //                   );
// // // //                 })}
// // // //               </div>
// // // //             </nav>

// // // //             {/* Contact Button - Mobile */}
// // // //             <div className="p-6 sm:p-8 border-t border-black/8 relative z-10">
// // // //               <a
// // // //                 href="/connect"
// // // //                 onClick={() => toggleSidebar(false)}
// // // //                 className="block w-full text-center px-6 py-3 sm:py-4 
// // // //                            border border-black/15 hover:border-black/30 text-black 
// // // //                            hover:bg-black/8 hover:shadow-xl hover:shadow-black/5 backdrop-blur-sm
// // // //                            transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] text-sm font-normal tracking-wider
// // // //                            hover:scale-[1.02] group relative overflow-hidden rounded-full"
// // // //               >
// // // //                 <span className="relative z-10">Get In Touch</span>
// // // //                 <span className="absolute inset-0 bg-black/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></span>
// // // //               </a>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Scroll to Top Button */}
// // // //       <button
// // // //         onClick={scrollToTop}
// // // //         className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 p-3 sm:p-4 bg-white/90 backdrop-blur-xl
// // // //                    border border-black/15 text-black hover:bg-black/8 hover:border-black/30
// // // //                    hover:shadow-xl hover:shadow-black/10 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
// // // //                    hover:scale-110 group rounded-full ${
// // // //                      showScrollTop 
// // // //                        ? 'opacity-100 translate-y-0 pointer-events-auto' 
// // // //                        : 'opacity-0 translate-y-6 pointer-events-none'
// // // //                    }`}
// // // //         aria-label="Scroll to top"
// // // //       >
// // // //         <div className="relative">
// // // //           <ArrowUp 
// // // //             className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 ${
// // // //               showScrollTop ? 'animate-bounce' : ''
// // // //             }`} 
// // // //             strokeWidth={2}
// // // //           />
// // // //           <span className="absolute -inset-2 bg-black/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></span>
// // // //         </div>
// // // //       </button>
// // // //     </>
// // // //   );
// // // // };

// // // // export default Navbar;



// // // "use client";
// // // import Image from "next/image";
// // // import React, { useState, useEffect, useRef } from 'react';

// // // import { Menu, X, ArrowUp, ChevronDown } from 'lucide-react';

// // // const Navbar = ({ currentPath = "/" }) => {
// // //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// // //   const [isScrolled, setIsScrolled] = useState(false);
// // //   const [showScrollTop, setShowScrollTop] = useState(false);
// // //   const [isServicesOpen, setIsServicesOpen] = useState(false);
// // //   const servicesRef = useRef<HTMLDivElement | null>(null);

// // //   const navigationItems = [
// // //     { 
// // //       name: "Services", 
// // //       path: "/services",
// // //       hasDropdown: true,
// // //       dropdownItems: [
// // //         { name: "App Development", path: "/services/appDevelopment", description: "Native & cross-platform mobile apps" },
// // //         { name: "Web Development", path: "/services/webDevelopment", description: "Modern websites & web applications" },
// // //         { name: "ERP System", path: "/services/erpSystem", description: "Enterprise resource planning solutions" },
// // //         { name: "Digital Marketing", path: "/services/digitalMarketing", description: "Strategic online marketing campaigns" },
// // //         // { name: "SEO Enhancement", path: "/services/seoEnhancement", description: "Search engine optimization services" }
// // //       ]
// // //     },
// // //     // { name: "Portfolio", path: "/Portfolio" },
// // //     { name: "Product", path: "/Product" },
// // //     { name: "Blog", path: "/Blog", external: true },
// // //     { name: "Careers", path: "/careers" },
// // //     { name: "About Us", path: "/AboutUs" },
// // //   ];

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       const scrollY = window.scrollY;
// // //       setIsScrolled(scrollY > 10);
// // //       setShowScrollTop(scrollY > 400);
// // //     };

// // //     window.addEventListener('scroll', handleScroll, { passive: true });
// // //     return () => window.removeEventListener('scroll', handleScroll);
// // //   }, []);

// // //   useEffect(() => {
// // //     document.body.style.overflow = isSidebarOpen ? 'hidden' : '';
// // //     return () => {
// // //       document.body.style.overflow = '';
// // //     };
// // //   }, [isSidebarOpen]);

// // //   useEffect(() => {
// // //     const handleClickOutside = (event: MouseEvent) => {
// // //       if (
// // //         servicesRef.current &&
// // //         !(servicesRef.current as HTMLElement).contains(event.target as Node)
// // //       ) {
// // //         setIsServicesOpen(false);
// // //       }
// // //     };

// // //     document.addEventListener('mousedown', handleClickOutside);
// // //     return () => document.removeEventListener('mousedown', handleClickOutside);
// // //   }, []);

// // //   const toggleSidebar = (open: boolean) => {
// // //     setIsSidebarOpen(open);
// // //   };

// // //   const scrollToTop = () => {
// // //     window.scrollTo({
// // //       top: 0,
// // //       behavior: 'smooth'
// // //     });
// // //   };

// // //   const handleServicesClick = () => {
// // //     setIsServicesOpen(!isServicesOpen);
// // //   };

// // //   const handleDropdownItemClick = () => {
// // //     setIsServicesOpen(false);
// // //   };

// // //   return (
// // //     <>
// // //       {/* Main Navbar */}
// // //       <header 
// // //         className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
// // //           isScrolled 
// // //             ? 'bg-black/95 backdrop-blur-xl border-b border-white/8 shadow-2xl shadow-black/40' 
// // //             : 'bg-transparent'
// // //         }`}
// // //       >
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="flex h-16 sm:h-18 lg:h-20 items-center justify-between">
// // //             {/* Logo */}
// // // <Image
// // //   onClick={() => (window.location.href = "/")}
// // //   src="/logo/decode.png"
// // //   alt="Dcodes Logo"
// // //   width={150}   // required in Next.js <Image />
// // //   height={56}  // set appropriate values
// // //   className="h-8 sm:h-10 lg:h-12 xl:h-14"
// // // />

// // //             {/* Desktop Navigation */}
// // //             <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
// // //               {navigationItems.map((item, index) => {
// // //                 const isActive = currentPath === item.path || (item.hasDropdown && currentPath.startsWith(item.path));

// // //                 if (item.hasDropdown) {
// // //                   return (
// // //                     <div key={index} className="relative" ref={servicesRef}>
// // //                       <button
// // //                         onClick={handleServicesClick}
// // //                         className={`
// // //                           group relative transition-all duration-300 ease-out
// // //                           inline-flex items-center gap-1.5 py-3 px-4 text-sm font-medium rounded-lg
// // //                           ${isActive ? 'text-white bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'}
// // //                           opacity-100 animate-fadeIn
// // //                         `}
// // //                         style={{ animationDelay: `${index * 100}ms` }}
// // //                       >
// // //                         <span className="relative">
// // //                           {item.name}
// // //                           {isActive && (
// // //                             <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></div>
// // //                           )}
// // //                         </span>
// // //                         <ChevronDown 
// // //                           className={`w-3.5 h-3.5 transition-transform duration-200 ${
// // //                             isServicesOpen ? 'rotate-180' : 'rotate-0'
// // //                           }`}
// // //                         />
// // //                       </button>

// // //                       {/* Dropdown Menu */}
// // //                       <div 
// // //                         className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 transition-all duration-300 ease-out ${
// // //                           isServicesOpen 
// // //                             ? 'opacity-100 visible translate-y-0' 
// // //                             : 'opacity-0 invisible translate-y-2'
// // //                         }`}
// // //                       >
// // //                         <div className="bg-black backdrop-blur-xl  rounded-xl shadow-2xl shadow-black/50 overflow-hidden">
// // //                           {/* Dropdown arrow */}
// // //                           <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 border-l border-t border-white/10 rotate-45"></div>

// // //                           <div className="p-2">
// // //                             {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
// // //                               <a
// // //                                 key={dropdownIndex}
// // //                                 href={dropdownItem.path}
// // //                                 onClick={handleDropdownItemClick}
// // //                                 className="block p-3 rounded-lg hover:bg-white/5 transition-all duration-200 group"
// // //                               >
// // //                                 <div className="flex flex-col">
// // //                                   <span className="text-sm font-medium text-white group-hover:text-white transition-colors duration-200">
// // //                                     {dropdownItem.name}
// // //                                   </span>
// // //                                   <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-200 mt-1">
// // //                                     {dropdownItem.description}
// // //                                   </span>
// // //                                 </div>
// // //                               </a>
// // //                             ))}
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   );
// // //                 }

// // //                 const baseClasses = `
// // //                   group relative transition-all duration-300 ease-out
// // //                   inline-block py-3 px-4 text-sm font-medium rounded-lg
// // //                   ${isActive ? 'text-white bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'}
// // //                   opacity-100 animate-fadeIn
// // //                 `;

// // //                 const linkContent = (
// // //                   <span className="relative">
// // //                     {item.name}
// // //                     {isActive && (
// // //                       <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></div>
// // //                     )}
// // //                   </span>
// // //                 );

// // //                 return item.external ? (
// // //                   <a
// // //                     key={index}
// // //                     href={item.path}
// // //                     target="_blank"
// // //                     rel="noopener noreferrer"
// // //                     className={baseClasses}
// // //                     style={{ animationDelay: `${index * 100}ms` }}
// // //                   >
// // //                     {linkContent}
// // //                   </a>
// // //                 ) : (
// // //                   <a 
// // //                     key={index}
// // //                     href={item.path} 
// // //                     className={baseClasses}
// // //                     style={{ animationDelay: `${index * 100}ms` }}
// // //                   >
// // //                     {linkContent}
// // //                   </a>
// // //                 );
// // //               })}
// // //             </nav>

// // //             {/* Contact & Mobile Menu */}
// // //             <div className="flex items-center gap-4">
// // //               {/* Contact Button - Desktop */}
// // //               <a
// // //                 href="/connect"
// // //                 className="hidden md:inline-flex items-center gap-2 px-6 py-2.5
// // //                            bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium
// // //                            hover:shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm
// // //                            transition-all duration-300 ease-out
// // //                            hover:scale-105 group relative overflow-hidden rounded-lg
// // //                            opacity-100 animate-fadeIn"
// // //                 style={{ animationDelay: '600ms' }}
// // //               >
// // //                 <span className="relative z-10">Contact</span>
// // //               </a>

// // //               {/* Mobile Menu Button */}
// // //               <button
// // //                 onClick={() => toggleSidebar(true)}
// // //                 className="md:hidden p-2.5 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg
// // //                            transition-all duration-300 ease-out hover:scale-110
// // //                            opacity-100 animate-fadeIn"
// // //                 style={{ animationDelay: '700ms' }}
// // //                 aria-label="Open menu"
// // //               >
// // //                 <Menu className="w-5 h-5" strokeWidth={1.5} />
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </header>

// // //       {/* Mobile Sidebar Overlay */}
// // //       <div 
// // //         className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ease-out ${
// // //           isSidebarOpen 
// // //             ? 'opacity-100 pointer-events-auto' 
// // //             : 'opacity-0 pointer-events-none'
// // //         }`}
// // //       >
// // //         {/* Backdrop */}
// // //         <div 
// // //           onClick={() => toggleSidebar(false)}
// // //           className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-500 ${
// // //             isSidebarOpen ? 'opacity-100' : 'opacity-0'
// // //           }`}
// // //         />

// // //         {/* Sidebar */}
// // //         <div 
// // //           className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] 
// // //                      bg-gray-900/95 backdrop-blur-xl
// // //                      border-l border-white/10 shadow-2xl shadow-black/50
// // //                      transform transition-all duration-500 ease-out ${
// // //                        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
// // //                      }`}
// // //         >
// // //           <div className="flex flex-col h-full">
// // //             {/* Header */}
// // //             <div className="flex items-center justify-between bg-black p-6 border-b border-white/30">
// // //               <span className="text-lg font-normal text-white tracking-wide">Menu</span>
// // //               <button
// // //                 onClick={() => toggleSidebar(false)}
// // //                 className="p-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
// // //                 aria-label="Close menu"
// // //               >
// // //                 <X className="w-5 h-5" strokeWidth={1.5} />
// // //               </button>
// // //             </div>

// // //             {/* Navigation Links */}
// // //             <nav className="flex-1 p-6 bg-black overflow-y-auto">
// // //               <div className="space-y-1">
// // //                 {navigationItems.map((item, index) => {
// // //                   const isActive = currentPath === item.path || (item.hasDropdown && currentPath.startsWith(item.path));

// // //                   if (item.hasDropdown) {
// // //                     return (
// // //                       <div key={index} className="border-b border-white/5">
// // //                         <button
// // //                           onClick={() => setIsServicesOpen(!isServicesOpen)}
// // //                           className={`
// // //                             group transition-all duration-300
// // //                             flex items-center justify-between w-full text-left py-4 text-base font-medium
// // //                             ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}
// // //                             opacity-100 animate-fadeIn
// // //                           `}
// // //                           style={{ animationDelay: `${index * 80}ms` }}
// // //                         >
// // //                           <span className="relative">
// // //                             {item.name}
// // //                             {isActive && (
// // //                               <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-black rounded-r -ml-6"></div>
// // //                             )}
// // //                           </span>
// // //                           <ChevronDown 
// // //                             className={`w-4 h-4 transition-transform duration-200 ${
// // //                               isServicesOpen ? 'rotate-180' : 'rotate-0'
// // //                             }`}
// // //                           />
// // //                         </button>

// // //                         {/* Mobile Dropdown */}
// // //                         <div className={`overflow-hidden transition-all duration-300 ${
// // //                           isServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
// // //                         }`}>
// // //                           <div className="pl-4 pb-4 space-y-1">
// // //                             {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
// // //                               <a
// // //                                 key={dropdownIndex}
// // //                                 href={dropdownItem.path}
// // //                                 onClick={() => toggleSidebar(false)}
// // //                                 className="block py-3 px-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
// // //                               >
// // //                                 <div>
// // //                                   <div className="font-medium">{dropdownItem.name}</div>
// // //                                   <div className="text-xs text-gray-500 mt-1">{dropdownItem.description}</div>
// // //                                 </div>
// // //                               </a>
// // //                             ))}
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     );
// // //                   }

// // //                   const baseClasses = `
// // //                     group transition-all duration-300
// // //                     block w-full text-left py-4 text-base font-medium border-b border-white/5
// // //                     ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}
// // //                     opacity-100 animate-fadeIn
// // //                   `;

// // //                   const linkContent = (
// // //                     <span className="relative">
// // //                       {item.name}
// // //                       {isActive && (
// // //                         <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-500 rounded-r -ml-6"></div>
// // //                       )}
// // //                     </span>
// // //                   );

// // //                   return item.external ? (
// // //                     <a
// // //                       key={index}
// // //                       href={item.path}
// // //                       target="_blank"
// // //                       rel="noopener noreferrer"
// // //                       className={baseClasses}
// // //                       style={{ animationDelay: `${index * 80}ms` }}
// // //                     >
// // //                       {linkContent}
// // //                     </a>
// // //                   ) : (
// // //                     <a 
// // //                       key={index}
// // //                       href={item.path} 
// // //                       className={baseClasses}
// // //                       onClick={() => toggleSidebar(false)}
// // //                       style={{ animationDelay: `${index * 80}ms` }}
// // //                     >
// // //                       {linkContent}
// // //                     </a>
// // //                   );
// // //                 })}
// // //               </div>
// // //             </nav>

// // //             {/* Contact Button - Mobile */}
// // //             <div className="p-6 border-t border-white/10 bg-black">
// // //               <a
// // //                 href="/connect"
// // //                 onClick={() => toggleSidebar(false)}
// // //                 className="block w-full text-center py-3 
// // //                            bg-black border-l-gray-200 border hover:bg-blue-700 text-white font-medium
// // //                            hover:shadow-lg hover:shadow-blue-500/25
// // //                            transition-all duration-300 ease-out text-sm rounded-lg"
// // //               >
// // //                 Get In Touch
// // //               </a>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Scroll to Top Button */}
// // //       <button
// // //         onClick={scrollToTop}
// // //         className={`fixed bottom-6 right-6 z-40 p-3 bg-gray-900/90 backdrop-blur-xl
// // //                    border border-white/10 text-gray-300 hover:text-white hover:bg-gray-800/90
// // //                    hover:shadow-lg hover:shadow-black/20 transition-all duration-300 ease-out
// // //                    hover:scale-110 rounded-lg ${
// // //                      showScrollTop 
// // //                        ? 'opacity-100 translate-y-0 pointer-events-auto' 
// // //                        : 'opacity-0 translate-y-4 pointer-events-none'
// // //                    }`}
// // //         aria-label="Scroll to top"
// // //       >
// // //         <ArrowUp className="w-5 h-5" strokeWidth={2} />
// // //       </button>


// // //     </>
// // //   );
// // // };

// // // export default Navbar;






// // "use client";
// // import Image from "next/image";
// // import React, { useState, useEffect, useRef } from 'react';

// // import { Menu, X, ArrowUp, ChevronDown } from 'lucide-react';
// // import { Description } from "@radix-ui/react-dialog";

// // const Navbar = ({ currentPath = "/" }) => {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [showScrollTop, setShowScrollTop] = useState(false);
// //   const [isServicesOpen, setIsServicesOpen] = useState(false);
// //   const [isProductOpen, setIsProductOpen] = useState(false);
// //   const servicesRef = useRef<HTMLDivElement | null>(null);
// //   const productRef = useRef<HTMLDivElement | null>(null);

// //   const navigationItems = [
// //     { 
// //       name: "Services", 
// //       path: "/services",
// //       hasDropdown: true,
// //       dropdownItems: [
// //         { name: "App Development", path: "/services/appDevelopment", description: "Native & cross-platform mobile apps" },
// //         { name: "Web Development", path: "/services/webDevelopment", description: "Modern websites & web applications" },
// //         { name: "ERP System", path: "/services/erpSystem", description: "Enterprise resource planning solutions" },
// //         { name: "Digital Marketing", path: "/services/digitalMarketing", description: "Strategic online marketing campaigns" },
// //         // { name: "SEO Enhancement", path: "/services/seoEnhancement", description: "Search engine optimization services" }
// //       ]
// //     },
// //     // { name: "Portfolio", path: "/Portfolio" },
// //     { 
// //       name: "Product", 
// //       path: "/Product",
// //       hasDropdown: true,
// //       dropdownItems: [
// //         { name: "ERP Module", path: "/Product/erpModule", description: "Comprehensive enterprise resource planning" },
// //         { name: "Hospital Management System", path: "/Product/hospitalManagement", description: "Complete healthcare facility management" },
// //         { name: "Chopada",path:"/Product/chopada", description:"this is app for bhudev"}
// //         // { name: "HR Management System", path: "/Product/hrManagement", description: "Human resources and employee management" }
// //       ]
// //     },
// //     { name: "Blog", path: "/Blog" },
// //     { name: "Careers", path: "/careers" },
// //     { name: "About Us", path: "/AboutUs" },
// //   ];

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const scrollY = window.scrollY;
// //       setIsScrolled(scrollY > 10);
// //       setShowScrollTop(scrollY > 400);
// //     };

// //     window.addEventListener('scroll', handleScroll, { passive: true });
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   useEffect(() => {
// //     document.body.style.overflow = isSidebarOpen ? 'hidden' : '';
// //     return () => {
// //       document.body.style.overflow = '';
// //     };
// //   }, [isSidebarOpen]);

// //   useEffect(() => {
// //     const handleClickOutside = (event: MouseEvent) => {
// //       if (
// //         servicesRef.current &&
// //         !(servicesRef.current as HTMLElement).contains(event.target as Node)
// //       ) {
// //         setIsServicesOpen(false);
// //       }
// //       if (
// //         productRef.current &&
// //         !(productRef.current as HTMLElement).contains(event.target as Node)
// //       ) {
// //         setIsProductOpen(false);
// //       }
// //     };

// //     document.addEventListener('mousedown', handleClickOutside);
// //     return () => document.removeEventListener('mousedown', handleClickOutside);
// //   }, []);

// //   const toggleSidebar = (open: boolean) => {
// //     setIsSidebarOpen(open);
// //   };

// //   const scrollToTop = () => {
// //     window.scrollTo({
// //       top: 0,
// //       behavior: 'smooth'
// //     });
// //   };

// //   const handleServicesClick = () => {
// //     setIsServicesOpen(!isServicesOpen);
// //     setIsProductOpen(false); // Close other dropdown
// //   };

// //   const handleProductClick = () => {
// //     setIsProductOpen(!isProductOpen);
// //     setIsServicesOpen(false); // Close other dropdown
// //   };

// //   const handleServicesHover = (open: boolean) => {
// //     if (window.innerWidth >= 768) { // Only on desktop
// //       setIsServicesOpen(open);
// //       if (open) setIsProductOpen(false); // Close other dropdown when opening this one
// //     }
// //   };

// //   const handleProductHover = (open: boolean) => {
// //     if (window.innerWidth >= 768) { // Only on desktop
// //       setIsProductOpen(open);
// //       if (open) setIsServicesOpen(false); // Close other dropdown when opening this one
// //     }
// //   };

// //   const handleDropdownItemClick = () => {
// //     setIsServicesOpen(false);
// //     setIsProductOpen(false);
// //   };

// //   return (
// //     <>
// //       {/* Main Navbar */}
// //       <header 
// //         className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
// //           isScrolled 
// //             ? 'bg-black/95 backdrop-blur-xl border-b border-white/8 shadow-2xl shadow-black/40' 
// //             : 'bg-transparent'
// //         }`}
// //       >
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="flex h-16 sm:h-18 lg:h-20 items-center justify-between">
// //             {/* Logo */}
// //            <Image
// //   onClick={() => (window.location.href = "/")}
// //   src="/logo/logo.png"
// //   alt="Dcodes Logo"
// //   width={150}
// //   height={56}
// //   className="h-8 sm:h-10 lg:h-12 xl:h-14 cursor-pointer filter "
// // />


// //             {/* Desktop Navigation */}
// //             <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
// //               {navigationItems.map((item, index) => {
// //                 const isActive = currentPath === item.path || (item.hasDropdown && currentPath.startsWith(item.path));

// //                 if (item.name === "Services") {
// //                   return (
// //                     <div 
// //                       key={index} 
// //                       className="relative" 
// //                       ref={servicesRef}
// //                       onMouseEnter={() => handleServicesHover(true)}
// //                       onMouseLeave={() => handleServicesHover(false)}
// //                     >
// //                       <button
// //                         onClick={handleServicesClick}
// //                         className={`
// //                           group relative transition-all duration-300 ease-out
// //                           inline-flex items-center gap-1.5 py-3 px-4 text-sm font-medium rounded-lg
// //                           ${isActive ? 'text-white bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'}
// //                           opacity-100 animate-fadeIn
// //                         `}
// //                         style={{ animationDelay: `${index * 100}ms` }}
// //                       >
// //                         <span className="relative">
// //                           {item.name}
// //                           {isActive && (
// //                             <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></div>
// //                           )}
// //                         </span>
// //                         <ChevronDown 
// //                           className={`w-3.5 h-3.5 transition-transform duration-200 ${
// //                             isServicesOpen ? 'rotate-180' : 'rotate-0'
// //                           }`}
// //                         />
// //                       </button>

// //                       {/* Dropdown Menu */}
// //                       <div 
// //                         className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 transition-all duration-300 ease-out ${
// //                           isServicesOpen 
// //                             ? 'opacity-100 visible translate-y-0' 
// //                             : 'opacity-0 invisible translate-y-2'
// //                         }`}
// //                       >
// //                         <div className="bg-black backdrop-blur-xl rounded-xl shadow-2xl shadow-black/50 overflow-hidden">
// //                           {/* Dropdown arrow */}
// //                           <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 border-l border-t border-white/10 rotate-45"></div>

// //                           <div className="p-2">
// //                             {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
// //                               <a
// //                                 key={dropdownIndex}
// //                                 href={dropdownItem.path}
// //                                 onClick={handleDropdownItemClick}
// //                                 className="block p-3 rounded-lg hover:bg-white/5 transition-all duration-200 group"
// //                               >
// //                                 <div className="flex flex-col">
// //                                   <span className="text-sm font-medium text-white group-hover:text-white transition-colors duration-200">
// //                                     {dropdownItem.name}
// //                                   </span>
// //                                   <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-200 mt-1">
// //                                     {dropdownItem.description}
// //                                   </span>
// //                                 </div>
// //                               </a>
// //                             ))}
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   );
// //                 }

// //                 if (item.name === "Product") {
// //                   return (
// //                     <div 
// //                       key={index} 
// //                       className="relative" 
// //                       ref={productRef}
// //                       onMouseEnter={() => handleProductHover(true)}
// //                       onMouseLeave={() => handleProductHover(false)}
// //                     >
// //                       <button
// //                         onClick={handleProductClick}
// //                         className={`
// //                           group relative transition-all duration-300 ease-out
// //                           inline-flex items-center gap-1.5 py-3 px-4 text-sm font-medium rounded-lg
// //                           ${isActive ? 'text-white bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'}
// //                           opacity-100 animate-fadeIn
// //                         `}
// //                         style={{ animationDelay: `${index * 100}ms` }}
// //                       >
// //                         <span className="relative">
// //                           {item.name}
// //                           {isActive && (
// //                             <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></div>
// //                           )}
// //                         </span>
// //                         <ChevronDown 
// //                           className={`w-3.5 h-3.5 transition-transform duration-200 ${
// //                             isProductOpen ? 'rotate-180' : 'rotate-0'
// //                           }`}
// //                         />
// //                       </button>

// //                       {/* Dropdown Menu */}
// //                       <div 
// //                         className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 transition-all duration-300 ease-out ${
// //                           isProductOpen 
// //                             ? 'opacity-100 visible translate-y-0' 
// //                             : 'opacity-0 invisible translate-y-2'
// //                         }`}
// //                       >
// //                         <div className="bg-black backdrop-blur-xl rounded-xl shadow-2xl shadow-black/50 overflow-hidden">
// //                           {/* Dropdown arrow */}
// //                           <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 border-l border-t border-white/10 rotate-45"></div>

// //                           <div className="p-2">
// //                             {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
// //                               <a
// //                                 key={dropdownIndex}
// //                                 href={dropdownItem.path}
// //                                 onClick={handleDropdownItemClick}
// //                                 className="block p-3 rounded-lg hover:bg-white/5 transition-all duration-200 group"
// //                               >
// //                                 <div className="flex flex-col">
// //                                   <span className="text-sm font-medium text-white group-hover:text-white transition-colors duration-200">
// //                                     {dropdownItem.name}
// //                                   </span>
// //                                   <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-200 mt-1">
// //                                     {dropdownItem.description}
// //                                   </span>
// //                                 </div>
// //                               </a>
// //                             ))}
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   );
// //                 }

// //                 const baseClasses = `
// //                   group relative transition-all duration-300 ease-out
// //                   inline-block py-3 px-4 text-sm font-medium rounded-lg
// //                   ${isActive ? 'text-white bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'}
// //                   opacity-100 animate-fadeIn
// //                 `;

// //                 const linkContent = (
// //                   <span className="relative">
// //                     {item.name}
// //                     {isActive && (
// //                       <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></div>
// //                     )}
// //                   </span>
// //                 );

// //                 return item.external ? (
// //                   <a
// //                     key={index}
// //                     href={item.path}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className={baseClasses}
// //                     style={{ animationDelay: `${index * 100}ms` }}
// //                   >
// //                     {linkContent}
// //                   </a>
// //                 ) : (
// //                   <a 
// //                     key={index}
// //                     href={item.path} 
// //                     className={baseClasses}
// //                     style={{ animationDelay: `${index * 100}ms` }}
// //                   >
// //                     {linkContent}
// //                   </a>
// //                 );
// //               })}
// //             </nav>

// //             {/* Contact & Mobile Menu */}
// //             <div className="flex items-center gap-4">
// //               {/* Contact Button - Desktop */}
// //               <a
// //                 href="/connect"
// //                 className="hidden md:inline-flex items-center gap-2 px-6 py-2.5
// //                            bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium
// //                            hover:shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm
// //                            transition-all duration-300 ease-out
// //                            hover:scale-105 group relative overflow-hidden rounded-lg
// //                            opacity-100 animate-fadeIn"
// //                 style={{ animationDelay: '600ms' }}
// //               >
// //                 <span className="relative z-10">Contact</span>
// //               </a>

// //               {/* Mobile Menu Button */}
// //               <button
// //                 onClick={() => toggleSidebar(true)}
// //                 className="md:hidden p-2.5 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg
// //                            transition-all duration-300 ease-out hover:scale-110
// //                            opacity-100 animate-fadeIn"
// //                 style={{ animationDelay: '700ms' }}
// //                 aria-label="Open menu"
// //               >
// //                 <Menu className="w-5 h-5" strokeWidth={1.5} />
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Mobile Sidebar Overlay */}
// //       <div 
// //         className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ease-out ${
// //           isSidebarOpen 
// //             ? 'opacity-100 pointer-events-auto' 
// //             : 'opacity-0 pointer-events-none'
// //         }`}
// //       >
// //         {/* Backdrop */}
// //         <div 
// //           onClick={() => toggleSidebar(false)}
// //           className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-500 ${
// //             isSidebarOpen ? 'opacity-100' : 'opacity-0'
// //           }`}
// //         />

// //         {/* Sidebar */}
// //         <div 
// //           className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] 
// //                      bg-gray-900/95 backdrop-blur-xl
// //                      border-l border-white/10 shadow-2xl shadow-black/50
// //                      transform transition-all duration-500 ease-out ${
// //                        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
// //                      }`}
// //         >
// //           <div className="flex flex-col h-full">
// //             {/* Header */}
// //             <div className="flex items-center justify-between bg-black p-6 border-b border-white/30">
// //               <span className="text-lg font-normal text-white tracking-wide">Menu</span>
// //               <button
// //                 onClick={() => toggleSidebar(false)}
// //                 className="p-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
// //                 aria-label="Close menu"
// //               >
// //                 <X className="w-5 h-5" strokeWidth={1.5} />
// //               </button>
// //             </div>

// //             {/* Navigation Links */}
// //             <nav className="flex-1 p-6 bg-black overflow-y-auto">
// //               <div className="space-y-1">
// //                 {navigationItems.map((item, index) => {
// //                   const isActive = currentPath === item.path || (item.hasDropdown && currentPath.startsWith(item.path));

// //                   if (item.hasDropdown) {
// //                     const isOpen = item.name === "Services" ? isServicesOpen : isProductOpen;
// //                     const setIsOpen = item.name === "Services" ? setIsServicesOpen : setIsProductOpen;

// //                     return (
// //                       <div key={index} className="border-b border-white/5">
// //                         <button
// //                           onClick={() => setIsOpen(!isOpen)}
// //                           className={`
// //                             group transition-all duration-300
// //                             flex items-center justify-between w-full text-left py-4 text-base font-medium
// //                             ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}
// //                             opacity-100 animate-fadeIn
// //                           `}
// //                           style={{ animationDelay: `${index * 80}ms` }}
// //                         >
// //                           <span className="relative">
// //                             {item.name}
// //                             {isActive && (
// //                               <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-black rounded-r -ml-6"></div>
// //                             )}
// //                           </span>
// //                           <ChevronDown 
// //                             className={`w-4 h-4 transition-transform duration-200 ${
// //                               isOpen ? 'rotate-180' : 'rotate-0'
// //                             }`}
// //                           />
// //                         </button>

// //                         {/* Mobile Dropdown */}
// //                         <div className={`overflow-hidden transition-all duration-300 ${
// //                           isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
// //                         }`}>
// //                           <div className="pl-4 pb-4 space-y-1">
// //                             {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
// //                               <a
// //                                 key={dropdownIndex}
// //                                 href={dropdownItem.path}
// //                                 onClick={() => toggleSidebar(false)}
// //                                 className="block py-3 px-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
// //                               >
// //                                 <div>
// //                                   <div className="font-medium">{dropdownItem.name}</div>
// //                                   <div className="text-xs text-gray-500 mt-1">{dropdownItem.description}</div>
// //                                 </div>
// //                               </a>
// //                             ))}
// //                           </div>
// //                         </div>
// //                       </div>
// //                     );
// //                   }

// //                   const baseClasses = `
// //                     group transition-all duration-300
// //                     block w-full text-left py-4 text-base font-medium border-b border-white/5
// //                     ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}
// //                     opacity-100 animate-fadeIn
// //                   `;

// //                   const linkContent = (
// //                     <span className="relative">
// //                       {item.name}
// //                       {isActive && (
// //                         <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-500 rounded-r -ml-6"></div>
// //                       )}
// //                     </span>
// //                   );

// //                   return item.external ? (
// //                     <a
// //                       key={index}
// //                       href={item.path}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       className={baseClasses}
// //                       style={{ animationDelay: `${index * 80}ms` }}
// //                     >
// //                       {linkContent}
// //                     </a>
// //                   ) : (
// //                     <a 
// //                       key={index}
// //                       href={item.path} 
// //                       className={baseClasses}
// //                       onClick={() => toggleSidebar(false)}
// //                       style={{ animationDelay: `${index * 80}ms` }}
// //                     >
// //                       {linkContent}
// //                     </a>
// //                   );
// //                 })}
// //               </div>
// //             </nav>

// //             {/* Contact Button - Mobile */}
// //             <div className="p-6 border-t border-white/10 bg-black">
// //               <a
// //                 href="/connect"
// //                 onClick={() => toggleSidebar(false)}
// //                 className="block w-full text-center py-3 
// //                            bg-black border-l-gray-200 border hover:bg-blue-700 text-white font-medium
// //                            hover:shadow-lg hover:shadow-blue-500/25
// //                            transition-all duration-300 ease-out text-sm rounded-lg"
// //               >
// //                 Get In Touch
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Scroll to Top Button */}
// //       <button
// //         onClick={scrollToTop}
// //         className={`fixed bottom-6 right-6 z-40 p-3 bg-gray-900/90 backdrop-blur-xl
// //                    border border-white/10 text-gray-300 hover:text-white hover:bg-gray-800/90
// //                    hover:shadow-lg hover:shadow-black/20 transition-all duration-300 ease-out
// //                    hover:scale-110 rounded-lg ${
// //                      showScrollTop 
// //                        ? 'opacity-100 translate-y-0 pointer-events-auto' 
// //                        : 'opacity-0 translate-y-4 pointer-events-none'
// //                    }`}
// //         aria-label="Scroll to top"
// //       >
// //         <ArrowUp className="w-5 h-5" strokeWidth={2} />
// //       </button>
// //     </>
// //   );
// // };

// // export default Navbar;













"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUp, ChevronDown, Search, Globe } from 'lucide-react';

const Navbar = ({ currentPath = "/" }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  const servicesRef = useRef<HTMLDivElement | null>(null);
  const productRef = useRef<HTMLDivElement | null>(null);

  const navigationItems = [
    {
      name: "Services",
      path: "/services",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "App Development",
          path: "/services/appDevelopment",
          description: "Native & cross-platform mobile apps",
          icon: "📱"
        },
        {
          name: "Web Development",
          path: "/services/webDevelopment",
          description: "Modern websites & web applications",
          icon: "💻"
        },
        {
          name: "ERP System",
          path: "/services/erpSystem",
          description: "Enterprise resource planning solutions",
          icon: "📊"
        },
        {
          name: "Digital Marketing",
          path: "/services/digitalMarketing",
          description: "Strategic online marketing campaigns",
          icon: "🚀"
        },
      ]
    },
    {
      name: "Product",
      path: "/Product",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "ERP Module",
          path: "/Product/erpModule",
          description: "Comprehensive enterprise resource planning",
          icon: "🏢"
        },
         { 
           name: "Hospital Management System", 
           path: "/Product/hospitalManagement", 
           description: "Complete healthcare facility management",
           icon: "🏥"
        },
        {
          name: "Chopada App",
          path: "/Product/chopada",
          description: "Specialized application for business management",
          icon: "📲"
        }
      ]
    },
    { name: "Blog", path: "/Blog" },
    { name: "Careers", path: "/careers" },
    { name: "About Us", path: "/AboutUs" },

  ];

  const languages = ['EN', 'FR', 'DE', 'ES'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);
      setShowScrollTop(scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (productRef.current && !productRef.current.contains(event.target as Node)) {
        setIsProductOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSidebar = (open: boolean) => {
    setIsSidebarOpen(open);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleServicesHover = (open: boolean) => {
    if (window.innerWidth >= 768) {
      setIsServicesOpen(open);
      if (open) setIsProductOpen(false);
    }
  };

  const handleProductHover = (open: boolean) => {
    if (window.innerWidth >= 768) {
      setIsProductOpen(open);
      if (open) setIsServicesOpen(false);
    }
  };

  const handleServicesClick = () => {
    if (window.innerWidth < 768) {
      setIsServicesOpen(!isServicesOpen);
      setIsProductOpen(false);
    }
  };

  const handleProductClick = () => {
    if (window.innerWidth < 768) {
      setIsProductOpen(!isProductOpen);
      setIsServicesOpen(false);
    }
  };

  const handleDropdownItemClick = () => {
    setIsServicesOpen(false);
    setIsProductOpen(false);
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${isScrolled
            ? '  backdrop-blur-xl border-b border-gray-200 shadow-lg'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-18 lg:h-20 items-center justify-between">

            {/* Logo */}
            <div className="flex items-center">
              <Image
                onClick={() => (window.location.href = "/")}
                src="/logo/logo.png"
                alt="Dcodes Logo"
                width={150}
                height={56}
                className="h-8 sm:h-10 lg:h-12 xl:h-14 cursor-pointer transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item, index) => {
                const isActive = currentPath === item.path || (item.hasDropdown && currentPath.startsWith(item.path));

                if (item.name === "Services") {
                  return (
                    <div
                      key={index}
                      className="relative"
                      ref={servicesRef}
                      onMouseEnter={() => handleServicesHover(true)}
                      onMouseLeave={() => handleServicesHover(false)}
                    >
                      <button
                        onClick={handleServicesClick}
                        className={`
                          group relative transition-all duration-300 ease-out
                          inline-flex items-center gap-1.5 py-3 px-4 text-sm font-medium rounded-lg
                          ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-300 hover:text-blue-600 hover:bg-gray-50'}
                          hover:shadow-md
                        `}
                      >
                        <span className="relative">
                          {item.name}
                          {isActive && (
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                          )}
                        </span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : 'rotate-0'
                            }`}
                        />
                      </button>

                      {/* Services Dropdown Menu */}
                      <div
                        className={`absolute top-full left-0 mt-2 w-80  transition-all duration-300 ease-out ${isServicesOpen
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible translate-y-2'
                          }`}
                      >
                        <div className="bg-white  text-g backdrop-blur-xl border border-gray-200 rounded-xl shadow-2xl shadow-black/10 overflow-hidden">
                          <div className="p-2">
                            {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                              <a
                                key={dropdownIndex}
                                href={dropdownItem.path}
                                onClick={handleDropdownItemClick}
                                className="flex items-start  p-3 rounded-lg hover:bg-blue-50 transition-all duration-200 group"
                              >
                                <span className="text-lg mr-3 mt-0.5">{dropdownItem.icon}</span>
                                <div className="flex-1">
                                  <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200 block">
                                    {dropdownItem.name}
                                  </span>
                                  <span className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-200 mt-1 block">
                                    {dropdownItem.description}
                                  </span>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                if (item.name === "Product") {
                  return (
                    <div
                      key={index}
                      className="relative"
                      ref={productRef}
                      onMouseEnter={() => handleProductHover(true)}
                      onMouseLeave={() => handleProductHover(false)}
                    >
                      <button
                        onClick={handleProductClick}
                        className={`
                          group relative transition-all duration-300 ease-out
                          inline-flex items-center gap-1.5 py-3 px-4 text-sm font-medium rounded-lg
                          ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-300 hover:text-blue-600 hover:bg-gray-50'}
                          hover:shadow-md
                        `}
                      >
                        <span className="relative">
                          {item.name}
                          {isActive && (
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600  rounded-full"></div>
                          )}
                        </span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${isProductOpen ? 'rotate-180' : 'rotate-0'
                            }`}
                        />
                      </button>

                      {/* Product Dropdown Menu */}
                      <div
                        className={`absolute top-full left-0 mt-2 w-80 transition-all duration-300 ease-out ${isProductOpen
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible translate-y-2'
                          }`}
                      >
                        <div className="bg-white backdrop-blur-xl border border-gray-200 rounded-xl shadow-2xl shadow-black/10 overflow-hidden">
                          <div className="p-2">
                            {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                              <a
                                key={dropdownIndex}
                                href={dropdownItem.path}
                                onClick={handleDropdownItemClick}
                                className="flex items-start p-3 rounded-lg hover:bg-blue-50 transition-all duration-200 group"
                              >
                                <span className="text-lg mr-3 mt-0.5">{dropdownItem.icon}</span>
                                <div className="flex-1">
                                  <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200 block">
                                    {dropdownItem.name}
                                  </span>
                                  <span className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-200 mt-1 block">
                                    {dropdownItem.description}
                                  </span>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                // Regular navigation items
                return (
                  <a
                    key={index}
                    href={item.path}
                    className={`
                      group relative transition-all duration-300 ease-out
                      inline-block py-3 px-5 text-sm font-medium rounded-lg
                      ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-300 hover:text-blue-600 hover:bg-gray-50'}
                      hover:shadow-md
                    `}
                  >
                    <span className="relative">
                      {item.name}
                      {isActive && (
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                      )}
                    </span>
                  </a>
                );
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">


              {/* Contact CTA - Enhanced */}
              <a
                href="/connect"
                className="hidden md:inline-flex items-center gap-2 px-6 py-2.5
                           bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
                           text-white text-sm font-semibold
                           shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40
                           transition-all duration-300 ease-out
                           hover:scale-105 transform
                           rounded-lg"
              >
                <span>Let's Talk</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => toggleSidebar(true)}
                className="md:hidden p-2.5 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg
                           transition-all duration-300 ease-out hover:scale-110"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
              <div className="max-w-7xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services, products, blog posts..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    autoFocus
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ease-out ${isSidebarOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => toggleSidebar(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-500 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'
            }`}
        />

        {/* Sidebar */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] 
                     bg-black backdrop-blur-xl
                     border-l border-gray-200 shadow-2xl
                     transform transition-all duration-500 ease-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-Black">
              <Image
                src="/logo/logo.png"
                alt="Dcodes Logo"
                width={120}
                height={48}
                className="h-8"
              />
              <button
                onClick={() => toggleSidebar(false)}
                className="p-2 text-gray-500 hover:text-white hover:bg-gray-100 rounded-lg transition-all duration-300"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 p-6 bg-Black overflow-y-auto">
              <div className="space-y-1">
                {navigationItems.map((item, index) => {
                  const isActive = currentPath === item.path || (item.hasDropdown && currentPath.startsWith(item.path));

                  if (item.hasDropdown) {
                    const isOpen = item.name === "Services" ? isServicesOpen : isProductOpen;
                    const setIsOpen = item.name === "Services" ? setIsServicesOpen : setIsProductOpen;

                    return (
                      <div key={index} className="border-b border-gray-100">
                        <button
                          onClick={() => setIsOpen(!isOpen)}
                          className={`
                            group transition-all duration-300
                            flex items-center justify-between w-full text-left py-4 text-base font-medium
                            ${isActive ? 'text-blue-600' : 'text-white hover:text-blue-600'}
                          `}
                        >
                          <span className="relative">
                            {item.name}
                            {isActive && (
                              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-600 rounded-r -ml-6"></div>
                            )}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'
                              }`}
                          />
                        </button>

                        {/* Mobile Dropdown */}
                        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}>
                          <div className="pl-4 pb-4 space-y-1">
                            {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                              <a
                                key={dropdownIndex}
                                href={dropdownItem.path}
                                onClick={handleDropdownItemClick}
                                className="flex items-start py-3 px-3 text-sm text-white hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                              >
                                <span className="text-base mr-3 mt-0.5">{dropdownItem.icon}</span>
                                <div>
                                  <div className="font-medium">{dropdownItem.name}</div>
                                  <div className="text-xs text-gray-500 mt-1">{dropdownItem.description}</div>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <a
                      key={index}
                      href={item.path}
                      className={`
                        group transition-all duration-300
                        block w-full text-left py-4 text-base font-medium border-b border-gray-100
                        ${isActive ? 'text-blue-600' : 'text-white hover:text-blue-600'}
                      `}
                      onClick={() => toggleSidebar(false)}
                    >
                      <span className="relative">
                        {item.name}
                        {isActive && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-600 rounded-r -ml-6"></div>
                        )}
                      </span>
                    </a>
                  );
                })}
              </div>
            </nav>

            {/* Mobile Actions */}
            <div className="p-6 border-t border-gray-200 bg-Black space-y-4">


              {/* Contact Button */}
              <a
                href="/connect"
                onClick={() => toggleSidebar(false)}
                className="block w-full text-center py-3 
                           bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
                           text-white font-semibold
                           shadow-lg hover:shadow-xl
                           transition-all duration-300 ease-out text-sm rounded-lg"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-[999999] cursor-pointer p-3 bg-white/90 backdrop-blur-xl
             border border-gray-300 text-gray-600 hover:text-blue-600 hover:bg-white
             shadow-lg hover:shadow-xl transition-all duration-300 ease-out
             hover:scale-110 rounded-lg ${showScrollTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" strokeWidth={2} />
      </button>

    </>
  );
};

export default Navbar;







// "use client";
// import Image from "next/image";
// import React, { useState, useEffect, useRef } from "react";
// import { Menu, X, ArrowUp, ChevronDown, Search } from "lucide-react";

// const Navbar = ({ currentPath = "/" }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [isProductOpen, setIsProductOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [currentLanguage, setCurrentLanguage] = useState("EN");

//   const servicesRef = useRef<HTMLDivElement | null>(null);
//   const productRef = useRef<HTMLDivElement | null>(null);

//   const navigationItems = [
//     {
//       name: "About Us",
//       path: "/AboutUs",
//       hasDropdown: true,
//       dropdownItems: [
//         {
//           name: "App Development",
//           path: "/services/appDevelopment",
//           description: "Native & cross-platform mobile apps",
//           icon: "📱",
//         },
//         {
//           name: "Web Development",
//           path: "/services/webDevelopment",
//           description: "Modern websites & web applications",
//           icon: "💻",
//         },
//         {
//           name: "ERP System",
//           path: "/services/erpSystem",
//           description: "Enterprise resource planning solutions",
//           icon: "📊",
//         },
//         {
//           name: "Digital Marketing",
//           path: "/services/digitalMarketing",
//           description: "Strategic online marketing campaigns",
//           icon: "🚀",
//         },
//       ],
//     },
//     {
//       name: "Product",
//       path: "/Product",
//       hasDropdown: true,
//       dropdownItems: [
//         {
//           name: "ERP Module",
//           path: "/Product/erpModule",
//           description: "Comprehensive enterprise resource planning",
//           icon: "🏢",
//         },
//         {
//           name: "Hospital Management System",
//           path: "/Product/hospitalManagement",
//           description: "Complete healthcare facility management",
//           icon: "🏥",
//         },
//         {
//           name: "Chopada App",
//           path: "/Product/chopada",
//           description: "Specialized application for business management",
//           icon: "📲",
//         },
//       ],
//     },
//     { name: "Blog", path: "/Blog" },
//     { name: "Careers", path: "/careers" },
//     { name: "About Us", path: "/AboutUs" },
//   ];

//   const languages = ["EN", "FR", "DE", "ES"];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//       setShowScrollTop(window.scrollY > 400);
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = isSidebarOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isSidebarOpen]);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) setIsServicesOpen(false);
//       if (productRef.current && !productRef.current.contains(event.target as Node)) setIsProductOpen(false);
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   const toggleSidebar = (open: boolean) => setIsSidebarOpen(open);

//   return (
//     <>
//       {/* Navbar */}
//       <header
//         className={`fixed top-0 w-full z-[99999] transition-all duration-500 ${
//           isScrolled ? "backdrop-blur-xl border-b border-gray-200 shadow-lg" : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex h-16 sm:h-18 lg:h-20 items-center justify-between">
//             {/* Logo */}
//            <Image
//   onClick={() => (window.location.href = "/")}
//   src="/logo/logo.png"
//   alt="Dcodes Logo"
//   width={150}
//   height={70}
//   className="cursor-pointer transition-transform duration-300 hover:scale-105 
//              w-[120px] sm:w-[130px] md:w-[140px] lg:w-[150px] 
//              h-auto object-contain"
// />


//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex items-center space-x-1">
//               {navigationItems.map((item, index) => {
//                 const isActive = currentPath === item.path || (item.hasDropdown && currentPath.startsWith(item.path));

//                 if (item.hasDropdown) {
//                   const isOpen = item.name === "Services" ? isServicesOpen : isProductOpen;
//                   const setIsOpen = item.name === "Services" ? setIsServicesOpen : setIsProductOpen;
//                   const ref = item.name === "Services" ? servicesRef : productRef;

//                   return (
//                     <div key={index} className="relative" ref={ref}>
//                       <button
//                         onMouseEnter={() => window.innerWidth >= 768 && setIsOpen(true)}
//                         onMouseLeave={() => window.innerWidth >= 768 && setIsOpen(false)}
//                         onClick={() => window.innerWidth < 768 && setIsOpen(!isOpen)}
//                         className={`inline-flex items-center gap-1.5 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-300 ${
//                           isActive ? "text-blue-600 bg-blue-50" : "text-gray-300 hover:text-blue-600 hover:bg-gray-50"
//                         }`}
//                       >
//                         <span className="relative">
//                           {item.name}
//                           {isActive && (
//                             <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
//                           )}
//                         </span>
//                         <ChevronDown
//                           className={`w-3.5 h-3.5 transition-transform duration-200 ${
//                             isOpen ? "rotate-180" : "rotate-0"
//                           }`}
//                         />
//                       </button>

//                       {/* Dropdown */}
//                       <div
//                         className={`absolute top-full left-0 mt-2 w-80 z-[99999] transition-all duration-300 ${
//                           isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
//                         }`}
//                       >
//                         <div className="bg-white backdrop-blur-xl border border-gray-200 rounded-xl shadow-2xl overflow-hidden">
//                           <div className="p-2">
//                             {item.dropdownItems.map((dropdownItem, i) => (
//                               <a
//                                 key={i}
//                                 href={dropdownItem.path}
//                                 onClick={() => setIsOpen(false)}
//                                 className="flex items-start p-3 rounded-lg hover:bg-blue-50 transition-all duration-200 group"
//                               >
//                                 <span className="text-lg mr-3 mt-0.5">{dropdownItem.icon}</span>
//                                 <div className="flex-1">
//                                   <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600 block">
//                                     {dropdownItem.name}
//                                   </span>
//                                   <span className="text-xs text-gray-500 group-hover:text-gray-700 mt-1 block">
//                                     {dropdownItem.description}
//                                   </span>
//                                 </div>
//                               </a>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 }

//                 return (
//                   <a
//                     key={index}
//                     href={item.path}
//                     className={`inline-block py-3 px-4 text-sm font-medium rounded-lg transition-all duration-300 ${
//                       isActive ? "text-blue-600 bg-blue-50" : "text-gray-300 hover:text-blue-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     {item.name}
//                   </a>
//                 );
//               })}
//             </nav>

//             {/* CTA + Mobile Menu */}
//             <div className="flex items-center gap-3">
//               <a
//                 href="/connect"
//                 className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-lg shadow-lg hover:scale-105 transition-all"
//               >
//                 Let’s Talk
//               </a>

//               <button
//                 onClick={() => toggleSidebar(true)}
//                 className="md:hidden p-2.5 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-300"
//               >
//                 <Menu className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Sidebar */}
//       <div
//         className={`fixed inset-0 z-[99999] md:hidden transition-all duration-500 ${
//           isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
//         }`}
//       >
//         <div
//           onClick={() => toggleSidebar(false)}
//           className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-all ${
//             isSidebarOpen ? "opacity-100" : "opacity-0"
//           }`}
//         />
//         <div
//           className={`absolute top-0 right-0 h-full w-80 bg-white border-l border-gray-200 shadow-2xl transform transition-all duration-500 ${
//             isSidebarOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           <div className="flex flex-col h-full">
//             <div className="flex items-center justify-between p-6 border-b border-gray-200">
//               <Image src="/logo/logo.png" alt="Dcodes Logo" width={80} height={48} className="h-8" />
//               <button
//                 onClick={() => toggleSidebar(false)}
//                 className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             <nav className="flex-1 p-6 overflow-y-auto">
//               {navigationItems.map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.path}
//                   onClick={() => toggleSidebar(false)}
//                   className={`block py-4 text-base font-medium border-b border-gray-100 ${
//                     currentPath === item.path
//                       ? "text-blue-600"
//                       : "text-gray-700 hover:text-blue-600 transition-all"
//                   }`}
//                 >
//                   {item.name}
//                 </a>
//               ))}
//             </nav>

//             <div className="p-6 border-t border-gray-200 space-y-4">
//               <div className="flex justify-center gap-2">
//                 {languages.map((lang) => (
//                   <button
//                     key={lang}
//                     onClick={() => setCurrentLanguage(lang)}
//                     className={`px-3 py-1 text-sm font-medium rounded-full ${
//                       currentLanguage === lang ? "text-blue-600 bg-blue-50" : "text-gray-500 hover:text-gray-700"
//                     }`}
//                   >
//                     {lang}
//                   </button>
//                 ))}
//               </div>
//               <a
//                 href="/connect"
//                 onClick={() => toggleSidebar(false)}
//                 className="block text-center py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-all"
//               >
//                 Get Free Consultation
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll-to-top Button */}
//       <button
//         onClick={scrollToTop}
//         className={`fixed bottom-6 right-6 z-[99999] p-3 bg-white/90 border border-gray-300 text-gray-600 rounded-lg shadow-lg transition-all ${
//           showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//         }`}
//       >
//         <ArrowUp className="w-5 h-5" />
//       </button>
//     </>
//   );
// };

// export default Navbar;
