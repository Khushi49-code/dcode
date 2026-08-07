// "use client"

// import { ArrowUpRight, Minus, Plus } from 'lucide-react';
// import React, { useState } from 'react'

// const services = [
//   {
//     id: 1,
//     title: "Web Development",
//     description: "Modern, responsive, and growth-driven websites.",
//     moreInfo: "Our team creates cutting-edge business websites and eCommerce solutions optimized for speed, security, and performance. With global best practices and scalable design, your website becomes a powerful digital asset across all devices.",
//     leftimg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
//   },
//   {
//     id: 2,
//     title: "Mobile App Development",
//     description: "Design and build mobile apps that engage users and grow your business.",
//     moreInfo: "We create intuitive, high-performance mobile applications for Android and iOS. Our apps combine sleek design, powerful functionality, and seamless performance to deliver exceptional user experiences that drive brand loyalty and conversions.",
//     leftimg: "https://bairesdev.mo.cloudinary.net/blog/2023/10/Steps-of-Mobile-App-Development.jpg?tx=w_1920,q_auto",
//   },
//   {
//     id: 3,
//     title: "Digital Marketing",
//     description: "Strategic marketing solutions that drive measurable growth.",
//     moreInfo: "We create result-oriented digital marketing campaigns including social media, PPC, email marketing, and content strategy to reach your audience effectively and boost brand engagement worldwide.",
//     leftimg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
//   },
//   { 
//     id: 4,
//     title: "SEO ( Search Engine Optimization )",
//     description: "Boost your visibility and attract quality traffic globally.",
//     moreInfo: "We implement advanced SEO strategies tailored to your business, improving search rankings, driving relevant traffic, and establishing your brand as an authority in your market.",
//     leftimg: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
//   },{
//     id: 5,
//     title: "Web ERPs",
//      description: "Streamline your operations with powerful web-based ERP solutions",
//      moreInfo: "We develop custom ERP systems that centralize your business data, automate processes, and improve decision-making. Our scalable platforms ensure efficiency, accuracy, and growth for businesses of any size.",
//       leftimg: "https://www.fasterpsoftware.com/images/Web-based-ERP.jpg",
  
//   }
// ];


// const Servicestwo = () => {
//   const [open, setOpen] = useState<number | null>(1);

//   const toggle = (id: number) => {
//     setOpen(open === id ? null : id);
//   };

//   const activeService = services.find(service => service.id === open) || services[0];

//   return (
//     <div className='min-h-screen  text-white bg-gradient-to-br from-gray-900 via-black to-gray-900'>
//       <div className='max-w-7xl mx-auto px-6 py-15'>
        
//         {/* Minimal Header */}
//         <div className='mb-24 '>
//           <h2 className='text-6xl font-normal tracking-tight mb-4'>
//             Services
//           </h2>
//           <div className='w-16 h-px bg-blue-500'></div>
//         </div>

//         <div className='grid lg:grid-cols-2 gap-16 lg:gap-24'>
          
//           {/* Left Minimal Visual */}
//           <div className='lg:sticky lg:top-24 h-fit'>
//             <div className='relative group'>
//               <div 
//                 className='aspect-[4/3] rounded-none overflow-hidden transition-all duration-700 ease-out'
//                 style={{
//                   backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${activeService.leftimg})`,
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center'
//                 }}
//               >
//                 {/* Minimal Overlay */}
//                 <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent'></div>
                
//                 {/* Clean Content */}
//                 <div className='absolute bottom-0 left-0 right-0 p-8'>
//                   <div className='border border-white/10 bg-black/20 backdrop-blur-sm p-6'>
//                     <h3 className='text-3xl font-normal mb-6 tracking-wide'>
//                       {activeService.title}
//                     </h3>
                    
//                     <div className='flex items-center justify-between'>
//                       <span className='text-sm font-normal text-white/60 tracking-wider uppercase'>
//                         Explore Service
//                       </span>
//                       <div className='border border-white/20 p-3 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300'>
//                         <ArrowUpRight size={20} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Minimal Progress Indicator */}
//               <div className='flex gap-2 mt-6'>
//                 {services.map((service) => (
//                   <div 
//                     key={service.id}
//                     className={`h-px flex-1 transition-all duration-300 ${
//                       service.id === open ? 'bg-blue-500' : 'bg-white/20'
//                     }`}
//                   ></div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Minimal List */}
//           <div className="space-y-px">
//             {services.map((service, index) => (
//               <div
//                 key={service.id}
//                 className={`group cursor-pointer transition-all duration-300 border-b border-white/10 ${
//                   open === service.id ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'
//                 }`}
//                 onClick={() => toggle(service.id)}
//               >
//                 <div className="py-8">
//                   <div className="flex items-start justify-between">
                    
//                     {/* Number */}
//                     <div className={`text-sm font-normal transition-all duration-300 w-12 ${
//                       open === service.id ? 'text-blue-500' : 'text-white/40'
//                     }`}>
//                       0{service.id}
//                     </div>
                    
//                     {/* Content */}
//                     <div className="flex-1 mx-8">
//                       <div className='flex justify-between items-start mb-3'>
//                         <h3 className={`text-2xl font-normal tracking-wide transition-all duration-300 ${
//                           open === service.id ? 'text-white' : 'text-white/80'
//                         }`}>
//                           {service.title}
//                         </h3>
//                       </div>
//                       <p className={`font-normal leading-relaxed transition-all duration-300 ${
//                         open === service.id ? 'text-white/70' : 'text-white/50'
//                       }`}>
//                         {service.description}
//                       </p>
//                     </div>

//                     {/* Toggle Icon */}
//                     <div className={`transition-all duration-300 ${
//                       open === service.id ? 'text-blue-500' : 'text-white/30 group-hover:text-white/50'
//                     }`}>
//                       {open === service.id ? <Minus size={20} /> : <Plus size={20} />}
//                     </div>
//                   </div>

//                   {/* Expanded Content */}
//                   <div className={`transition-all duration-500 ease-out overflow-hidden ${
//                     open === service.id 
//                       ? 'max-h-96 opacity-100 mt-8' 
//                       : 'max-h-0 opacity-0'
//                   }`}>
//                     <div className="ml-20 pl-8 border-l border-white/10">
//                       <p className="text-white/60 font-normal leading-relaxed mb-6">
//                         {service.moreInfo}
//                       </p>
                      
//                       {/* Minimal CTA */}
//                       <div className="flex items-center gap-4 pt-6 border-t border-white/10">
//                         <span className="text-sm font-normal text-blue-500 tracking-wider uppercase">
//                           Get Started
//                         </span>
//                         <div className="w-8 h-px bg-blue-500"></div>
//                         <ArrowUpRight size={16} className="text-blue-500" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Servicestwo






"use client"

import { ArrowUpRight, Minus, Plus } from 'lucide-react';
import React, { useState } from 'react'
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Modern, responsive, and growth-driven websites.",
    moreInfo: "Our team creates cutting-edge business websites and eCommerce solutions optimized for speed, security, and performance. With global best practices and scalable design, your website becomes a powerful digital asset across all devices.",
    leftimg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    path: "/services/webDevelopment"
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Design and build mobile apps that engage users and grow your business.",
    moreInfo: "We create intuitive, high-performance mobile applications for Android and iOS. Our apps combine sleek design, powerful functionality, and seamless performance to deliver exceptional user experiences that drive brand loyalty and conversions.",
    leftimg: "https://bairesdev.mo.cloudinary.net/blog/2023/10/Steps-of-Mobile-App-Development.jpg?tx=w_1920,q_auto",
    path: "/services/appDevelopment"
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Strategic marketing solutions that drive measurable growth.",
    moreInfo: "We create result-oriented digital marketing campaigns including social media, PPC, email marketing, and content strategy to reach your audience effectively and boost brand engagement worldwide.",
    leftimg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    path: "/services/digitalMarketing"
  },
  { 
    id: 4,
    title: "SEO ( Search Engine Optimization )",
    description: "Boost your visibility and attract quality traffic globally.",
    moreInfo: "We implement advanced SEO strategies tailored to your business, improving search rankings, driving relevant traffic, and establishing your brand as an authority in your market.",
    leftimg: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    path: "/services/digitalMarketing"
  },{
    id: 5,
    title: "Web ERPs",
    description: "Streamline your operations with powerful web-based ERP solutions",
    moreInfo: "We develop custom ERP systems that centralize your business data, automate processes, and improve decision-making. Our scalable platforms ensure efficiency, accuracy, and growth for businesses of any size.",
    leftimg: "https://www.fasterpsoftware.com/images/Web-based-ERP.jpg",
    path: "/Product/erpModule"
  }
];


const Servicestwo = () => {
  const [open, setOpen] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpen(open === id ? null : id);
  };

  const activeService = services.find(service => service.id === open) || services[0];

  return (
    <div className='min-h-screen  text-white bg-gradient-to-br from-gray-900 via-black to-gray-900'>
      <div className='max-w-7xl  mx-auto px-6 py-'>
        
        {/* Minimal Header */}
        <div className='mb-24 '>
          <h2 className='text-6xl font-normal tracking-tight mb-4'>
            Services
          </h2>
          <div className='w-16 h-px bg-blue-500'></div>
        </div>

        <div className='grid lg:grid-cols-2 gap-16 lg:gap-24'>
          
          {/* Left Minimal Visual */}
          <div className='lg:sticky lg:top-24 h-fit'>
            <div className='relative group'>
              <div 
                className='aspect-[4/3] rounded-none overflow-hidden transition-all duration-700 ease-out'
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${activeService.leftimg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Minimal Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent'></div>
                
                {/* Clean Content */}
                <div className='absolute bottom-0 left-0 right-0 p-8'>
                  <div className='border border-white/10 bg-black/20 backdrop-blur-sm p-6'>
                    <h3 className='text-3xl font-normal mb-6 tracking-wide'>
                      {activeService.title}
                    </h3>
                    
                    <div className='flex items-center justify-between'>
                      <span className='text-sm font-normal text-white/60 tracking-wider uppercase'>
                        Explore Service
                      </span>
                      <Link 
                        href={activeService.path}
                        className='border border-white/20 p-3 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 group'
                      >
                        <ArrowUpRight size={20} className="group-hover:scale-110 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Minimal Progress Indicator */}
              <div className='flex gap-2 mt-6'>
                {services.map((service) => (
                  <div 
                    key={service.id}
                    className={`h-px flex-1 transition-all duration-300 ${
                      service.id === open ? 'bg-blue-500' : 'bg-white/20'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Minimal List */}
          <div className="space-y-px">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group cursor-pointer transition-all duration-300 border-b border-white/10 ${
                  open === service.id ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'
                }`}
                onClick={() => toggle(service.id)}
              >
                <div className="py-8">
                  <div className="flex items-start justify-between">
                    
                    {/* Number */}
                    <div className={`text-sm font-normal transition-all duration-300 w-12 ${
                      open === service.id ? 'text-blue-500' : 'text-white/40'
                    }`}>
                      0{service.id}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 mx-8">
                      <div className='flex justify-between items-start mb-3'>
                        <h3 className={`text-2xl font-normal tracking-wide transition-all duration-300 ${
                          open === service.id ? 'text-white' : 'text-white/80'
                        }`}>
                          {service.title}
                        </h3>
                      </div>
                      <p className={`font-normal leading-relaxed transition-all duration-300 ${
                        open === service.id ? 'text-white/70' : 'text-white/50'
                      }`}>
                        {service.description}
                      </p>
                    </div>

                    {/* Toggle Icon */}
                    <div className={`transition-all duration-300 ${
                      open === service.id ? 'text-blue-500' : 'text-white/30 group-hover:text-white/50'
                    }`}>
                      {open === service.id ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <div className={`transition-all duration-500 ease-out overflow-hidden ${
                    open === service.id 
                      ? 'max-h-96 opacity-100 mt-8' 
                      : 'max-h-0 opacity-0'
                  }`}>
                    <div className="ml-20 pl-8 border-l border-white/10">
                      <p className="text-white/60 font-normal leading-relaxed mb-6">
                        {service.moreInfo}
                      </p>
                      
                      {/* Minimal CTA */}
                      <Link 
                        href={service.path}
                        className="flex items-center gap-4 pt-6 border-t border-white/10 group/cta"
                      >
                        <span className="text-sm font-normal text-blue-500 tracking-wider uppercase group-hover/cta:text-blue-400 transition-colors duration-300">
                          Get Started
                        </span>
                        <div className="w-8 h-px bg-blue-500 group-hover/cta:bg-blue-400 group-hover/cta:w-12 transition-all duration-300"></div>
                        <ArrowUpRight size={16} className="text-blue-500 group-hover/cta:text-blue-400 group-hover/cta:scale-110 transition-all duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Servicestwo