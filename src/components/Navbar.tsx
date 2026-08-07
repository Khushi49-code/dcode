"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUp, ChevronDown } from 'lucide-react';

const Navbar = ({ currentPath = "/" }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

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
          name: "Clarivo",
          path: "/Product/CNG",
          description: "CNG Kit Renewal & Management",
          icon: "⛽",
        },
        {
          name: "Upsolvix",
          path: "/Product/ticket",
          description: "IT Helpdesk & Ticket System",
          icon: "🎫",
        },
        {
          name: "Chopada App",
          path: "/Product/chopada",
          description: "Brahmin Digital Yajman Management",
          icon: "📲"
        },
        {
          name: "Hospital Management System",
          path: "/Product/hospitalManagement",
          description: "Complete healthcare management",
          icon: "🏥"
        },
            {
          name: "ERP Module",
          path: "/Product/erpModule",
          description: "Comprehensive ERP solutions",
          icon: "🏢"
        },
      ]
    },
    { name: "Blog", path: "/Blog" },
    { name: "Careers", path: "/careers" },
    { name: "About Us", path: "/AboutUs" },
  ];

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
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-18 lg:h-20 items-center justify-between">

            {/* Logo - MAXIMUM SIZE ON MOBILE */}
            <Link href="/" className="flex items-center shrink-0">
              {!logoError ? (
                <Image
                  src="/logo/logo5.png"
                  alt="Dcodes Logo"
                  width={550}
                  height={206}
                  className="h-40 sm:h-28 lg:h-36 w-auto cursor-pointer transition-transform duration-300 hover:scale-105 object-contain"
                  priority
                  onError={() => setLogoError(true)}
                />
              ) : (
                // Fallback text logo if image doesn't load
                <div className="flex items-center">
                  <span className="text-5xl sm:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    DCODES
                  </span>
                  <span className="text-sm text-gray-500 ml-1 hidden sm:inline">™</span>
                </div>
              )}
            </Link>

            {/* Desktop Navigation - COMPLETELY UNCHANGED */}
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
                          ${isActive ? 'text-blue-400 bg-blue-500/10' : 'text-white/80 hover:text-blue-400 hover:bg-white/5'}
                          hover:shadow-md
                        `}
                      >
                        <span className="relative">
                          {item.name}
                          {isActive && (
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>
                          )}
                        </span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : 'rotate-0'}`}
                        />
                      </button>

                      <div
                        className={`absolute top-full left-0 mt-2 w-80 transition-all duration-300 ease-out ${
                          isServicesOpen
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible translate-y-2'
                        }`}
                      >
                        <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                          <div className="p-2">
                            {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                              <Link
                                key={dropdownIndex}
                                href={dropdownItem.path}
                                onClick={handleDropdownItemClick}
                                className="flex items-start p-3 rounded-lg hover:bg-white/5 transition-all duration-200 group"
                              >
                                <span className="text-lg mr-3 mt-0.5">{dropdownItem.icon}</span>
                                <div className="flex-1">
                                  <span className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors duration-200 block">
                                    {dropdownItem.name}
                                  </span>
                                  <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-200 mt-1 block">
                                    {dropdownItem.description}
                                  </span>
                                </div>
                              </Link>
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
                          ${isActive ? 'text-blue-400 bg-blue-500/10' : 'text-white/80 hover:text-blue-400 hover:bg-white/5'}
                          hover:shadow-md
                        `}
                      >
                        <span className="relative">
                          {item.name}
                          {isActive && (
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>
                          )}
                        </span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${isProductOpen ? 'rotate-180' : 'rotate-0'}`}
                        />
                      </button>

                      <div
                        className={`absolute top-full left-0 mt-2 w-80 transition-all duration-300 ease-out ${
                          isProductOpen
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible translate-y-2'
                        }`}
                      >
                        <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                          <div className="p-2">
                            {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                              <Link
                                key={dropdownIndex}
                                href={dropdownItem.path}
                                onClick={handleDropdownItemClick}
                                className="flex items-start p-3 rounded-lg hover:bg-white/5 transition-all duration-200 group"
                              >
                                <span className="text-lg mr-3 mt-0.5">{dropdownItem.icon}</span>
                                <div className="flex-1">
                                  <span className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors duration-200 block">
                                    {dropdownItem.name}
                                  </span>
                                  <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-200 mt-1 block">
                                    {dropdownItem.description}
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={index}
                    href={item.path}
                    className={`
                      group relative transition-all duration-300 ease-out
                      inline-block py-3 px-5 text-sm font-medium rounded-lg
                      ${isActive ? 'text-blue-400 bg-blue-500/10' : 'text-white/80 hover:text-blue-400 hover:bg-white/5'}
                      hover:shadow-md
                    `}
                  >
                    <span className="relative">
                      {item.name}
                      {isActive && (
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>
                      )}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Side Actions - COMPLETELY UNCHANGED */}
            <div className="flex items-center gap-3">
              <Link
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
              </Link>

              <button
                onClick={() => toggleSidebar(true)}
                className="md:hidden p-2.5 text-white/80 hover:text-blue-400 hover:bg-white/10 rounded-lg
                           transition-all duration-300 ease-out"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ease-out ${
          isSidebarOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          onClick={() => toggleSidebar(false)}
          className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-all duration-500 ${
            isSidebarOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] 
                     bg-black/95 backdrop-blur-xl
                     border-l border-white/10 shadow-2xl
                     transform transition-all duration-500 ease-out ${
                       isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                     }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <Link href="/" onClick={() => toggleSidebar(false)} className="shrink-0">
                {!logoError ? (
                  <Image
                    src="/logo/logo5.png"
                    alt="Dcodes Logo"
                    width={220}
                    height={83}
                    className="h-16 w-auto object-contain"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    DCODES
                  </span>
                )}
              </Link>
              <button
                onClick={() => toggleSidebar(false)}
                className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-4">
              <div className="px-4 space-y-1">
                {navigationItems.map((item, index) => {
                  const isActive = currentPath === item.path || (item.hasDropdown && currentPath.startsWith(item.path));

                  if (item.hasDropdown) {
                    const isOpen = item.name === "Services" ? isServicesOpen : isProductOpen;
                    const setIsOpen = item.name === "Services" ? setIsServicesOpen : setIsProductOpen;

                    return (
                      <div key={index} className="border-b border-white/10 last:border-0">
                        <button
                          onClick={() => setIsOpen(!isOpen)}
                          className={`
                            w-full flex items-center justify-between py-4 text-base font-medium
                            transition-all duration-300
                            ${isActive ? 'text-blue-400' : 'text-white/80 hover:text-blue-400'}
                          `}
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isOpen ? 'rotate-180' : 'rotate-0'
                            }`}
                          />
                        </button>

                        <div className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? 'max-h-[500px] opacity-100 pb-3' : 'max-h-0 opacity-0'
                        }`}>
                          <div className="pl-4 space-y-1">
                            {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                              <Link
                                key={dropdownIndex}
                                href={dropdownItem.path}
                                onClick={handleDropdownItemClick}
                                className="flex items-start gap-3 py-3 px-3 text-sm text-white/70 hover:text-blue-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                              >
                                <span className="text-base shrink-0">{dropdownItem.icon}</span>
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium text-sm truncate">{dropdownItem.name}</div>
                                  <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                                    {dropdownItem.description}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={index}
                      href={item.path}
                      className={`
                        block py-4 text-base font-medium border-b border-white/10
                        transition-all duration-300
                        ${isActive ? 'text-blue-400' : 'text-white/80 hover:text-blue-400'}
                      `}
                      onClick={() => toggleSidebar(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </nav>

            <div className="p-5 border-t border-white/10 space-y-4">
              <Link
                href="/connect"
                onClick={() => toggleSidebar(false)}
                className="block w-full text-center py-3.5 
                           bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
                           text-white font-semibold
                           shadow-lg hover:shadow-xl
                           transition-all duration-300 ease-out 
                           text-sm rounded-xl"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-[999999] cursor-pointer p-3 bg-black/80 backdrop-blur-xl
             border border-white/20 text-white/80 hover:text-blue-400 hover:bg-black/90
             shadow-lg hover:shadow-xl transition-all duration-300 ease-out
             hover:scale-110 rounded-xl ${
               showScrollTop
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