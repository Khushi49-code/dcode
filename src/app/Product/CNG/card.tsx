// components/CRMTiltCard.tsx
"use client";

import { useRef, useState } from "react";
import { Users, MessageSquare, Calendar, TrendingUp } from "lucide-react";

export default function Card() {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();

        // Get mouse position relative to card center
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        // Calculate rotation (reduced sensitivity for stability)
        const rotateY = (mouseX / (rect.width / 2)) * 5; // Reduced from 25 to 5
        const rotateX = -(mouseY / (rect.height / 2)) * 5; // Reduced from 25 to 3

        // Apply smooth transform with constraints
        card.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.02, 1.02, 1.02)
    `;

        // Move gradient highlight
        const glow = card.querySelector('.card-glow') as HTMLElement;
        if (glow) {
            const percentX = ((mouseX + rect.width / 2) / rect.width) * 100;
            const percentY = ((mouseY + rect.height / 2) / rect.height) * 100;
            glow.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(59, 130, 246, 0.15), transparent 90%)`;
        }
    };

    const handleMouseLeave = () => {
        if (cardRef.current) {
            cardRef.current.style.transform = `
        perspective(1200px)
        rotateX(0deg)
        rotateY(0deg)
        scale3d(1, 1, 1)
      `;
            setIsHovering(false);
        }
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const crmFeatures = [
        { icon: <Users className="w-5 h-5" />, text: "360° Customer View" },
        { icon: <MessageSquare className="w-5 h-5" />, text: "Multi-channel Communication" },
        { icon: <Calendar className="w-5 h-5" />, text: "Smart Appointment Scheduling" },
        { icon: <TrendingUp className="w-5 h-5" />, text: "Sales Performance Analytics" }
    ];

    return (
        <div className="flex justify-center items-center min-h-[600px] py-20 px-4 bg-gradient-to-t from-black to-gray-900">
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative w-full max-w-4xl bg-gradient-to-br from-gray-900 via-black to-gray-900 
          border border-gray-800 rounded-3xl p-8 md:p-12 transition-all duration-300 ease-out
          shadow-2xl hover:shadow-blue-500/10"
            >
                {/* Gradient Glow Overlay */}
                <div className="card-glow absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-500" />

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Left Column */}
                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full mb-6">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                <span className="text-blue-400 font-medium">Customer Relationship Management</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Complete <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                    CRM Platform
                                </span>
                            </h2>

                            <p className="text-gray-400 text-lg">
                                Transform how you manage customer relationships with our intelligent CRM designed specifically for CNG businesses.
                            </p>
                        </div>

                        {/* Feature List */}
                        <div className="space-y-4">
                            {crmFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-xl border border-gray-800 
                    hover:border-blue-500/30 transition-all duration-300"
                                >
                                    <div className="p-2 bg-blue-500/10 rounded-lg">
                                        <div className="text-blue-400">{feature.icon}</div>
                                    </div>
                                    <span className="text-white font-medium">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-800">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">40%</div>
                                <div className="text-sm text-gray-400">Time Saved</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">95%</div>
                                <div className="text-sm text-gray-400">Satisfaction</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">24/7</div>
                                <div className="text-sm text-gray-400">Support</div>
                            </div>
                        </div>

                        <div className="">
                            <div className="bg-gray-800/70 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02]">
                                <img
                                    src="img3.png"
                                    alt="Reports"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Dashboard Preview */}
                    <div className="relative">
                        {/* Mock Dashboard */}
                        <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 h-full">
                            <div className="flex justify-between items-center mb-3">
                                <div>
                                    <h3 className="text-xl font-bold text-white">Customer Dashboard</h3>
                                    <p className="text-gray-400 text-sm">Real-time overview</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                </div>
                            </div>

                            {/* Chart Placeholder */}
                            <div className="space-y-2 py-1">
                                <div className="h-4 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full w-3/4"></div>
                                <div className="h-4 bg-gradient-to-r from-yellow-500 to-cyan-500 rounded-full w-5/6"></div>
                                <div className="h-4 bg-gradient-to-r from-red-500 to-cyan-500 rounded-full w-1/2"></div>
                            </div>

                            {/* screen shot section */}
                            {/* 3 Screenshots Stacked Vertically */}
                            <div className=" space-y-9 pt-2">
                                {/* Screenshot 1 - Dashboard */}
                                <div className="group">
                                    <div className="bg-gray-800/70 rounded-lg overflow-y-auto h-64 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                                        <img
                                            src="img1.png"
                                            alt="Full Dashboard"
                                            className="w-full"
                                        />
                                    </div>
                                </div>

                                {/* Screenshot 2 - Customer Management */}
                                <div className="group">
                                    <div className="bg-gray-800/70 rounded-lg overflow-y-auto h-64 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                                        <img
                                            src="img2.png"
                                            alt="Full Dashboard"
                                            className="w-full" />
                                    </div>

                                    {/* Scroll hint */}
                                    
                                    {/* Screenshot 3 - Reports */}
                                    <div className="group">
                                        <div className="bg-gray-800/70 rounded-lg overflow-y-auto h-64 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                                            <img
                                                src="img3.png"
                                                alt="Full Dashboard"
                                                className="w-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Element */}
                        <div className={`absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-cyan-500 
              text-white px-6 py-3 rounded-xl shadow-lg transition-transform duration-500
              ${isHovering ? 'translate-x-2 translate-y-2' : ''}`}>
                            <div className="text-sm font-bold">Live Preview</div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400">
                        <span className="text-white font-medium">No setup fee.</span> Get started in minutes.
                    </p>
                    {/* <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white 
            px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity 
            shadow-lg hover:shadow-blue-500/25">
            Request Demo →
          </button> */}
                </div>
            </div>
        </div>
    );
}