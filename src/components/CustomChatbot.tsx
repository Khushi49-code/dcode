// // // 'use client';

// // // import { useState, useRef, useEffect } from 'react';
// // // import { MessageCircle, X, Send, Bot, User, Phone, Mail, Calendar, Sparkles } from 'lucide-react';

// // // interface Message {
// // //   id: number;
// // //   text: string;
// // //   sender: 'user' | 'bot';
// // //   timestamp: Date;
// // //   suggestions?: string[];
// // //   hasConnectButton?: boolean;
// // //   connectType?: 'call' | 'email' | 'meeting';
// // // }

// // // interface UserInfo {
// // //   name: string;
// // //   email: string;
// // //   // phone: string;
// // //   company: string;
// // // }

// // // const MinimalPremiumChatbot = () => {
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const [messages, setMessages] = useState<Message[]>([
// // //     {
// // //       id: 1,
// // //       text: "Hello! I'm your AI assistant at Dcodes. How can I help transform your business with AI today?",
// // //       sender: 'bot',
// // //       timestamp: new Date(),
// // //       suggestions: ["AI Services", "Pricing", "Schedule Demo", "Success Stories"]
// // //     },
// // //   ]);
// // //   const [inputMessage, setInputMessage] = useState('');
// // //   const [isTyping, setIsTyping] = useState(false);
// // //   const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
// // //   const [showContactForm, setShowContactForm] = useState(false);
// // //   const [contactFormData, setContactFormData] = useState({
// // //     name: '', email: '', phone: '', company: '', message: ''
// // //   });
// // //   const messagesEndRef = useRef<HTMLDivElement>(null);

// // //   // Refined Q&A Database
// // //   const qnaDatabase = {
// // //     'hello': {
// // //       response: "Welcome to Dcodes. We specialize in enterprise AI solutions that deliver measurable ROI. What's your primary business challenge?",
// // //       suggestions: ["Process Automation", "Data Analytics", "Custom AI", "ROI Analysis"],
// // //       connect: false
// // //     },
// // //     'hi': {
// // //       response: "Hello. We've helped 500+ companies implement AI solutions with an average 40% efficiency improvement. What brings you here?",
// // //       suggestions: ["View Services", "Case Studies", "Get Quote", "Book Call"],
// // //       connect: false
// // //     },
// // //     'ai solutions': {
// // //       response: "Our AI solutions include:\n\n• Intelligent Automation (60% cost reduction)\n• Machine Learning Platform (95% accuracy)\n• Conversational AI (87% satisfaction increase)\n• Data Intelligence (Real-time insights)\n\nWhich area interests you most?",
// // //       suggestions: ["Automation Demo", "ML Platform", "Chatbot Solutions", "Analytics"],
// // //       connect: true,
// // //       connectType: 'meeting'
// // //     },
// // //     'pricing': {
// // //       response: "Transparent pricing tailored to your needs:\n\n• Starter: $3K/month\n• Professional: $8K/month\n• Enterprise: Custom\n\n30-day free trial available. 90-day ROI guarantee.\n\nWould you like a personalized quote?",
// // //       suggestions: ["Free Trial", "Custom Quote", "ROI Calculator", "Compare Plans"],
// // //       connect: true,
// // //       connectType: 'meeting'
// // //     },
// // //     'demo': {
// // //       response: "Experience our AI solutions firsthand. Our demos are tailored to your industry and use case.\n\nWhat would you like to see?\n\n• Live platform walkthrough\n• Industry-specific use cases\n• Custom solution prototype",
// // //       suggestions: ["Schedule Demo", "Industry Solutions", "Technical Deep Dive", "ROI Projection"],
// // //       connect: true,
// // //       connectType: 'meeting'
// // //     },
// // //     'success stories': {
// // //       response: "Recent client results:\n\n• Retail: 40% sales increase\n• Healthcare: $5M cost savings\n• Finance: 99.8% fraud detection\n• Manufacturing: 60% efficiency gain\n\nWant details for your industry?",
// // //       suggestions: ["Industry Results", "Full Case Studies", "Client References", "ROI Analysis"],
// // //       connect: true,
// // //       connectType: 'call'
// // //     },
// // //     'contact': {
// // //       response: "Let's discuss your AI transformation:\n\n• 15-min consultation (Free)\n• Strategy session (Complimentary)\n• Technical review\n• Custom demonstration\n\nPreferred contact method?",
// // //       suggestions: ["Schedule Call", "Email Info", "Book Meeting", "Technical Review"],
// // //       connect: true,
// // //       connectType: 'meeting'
// // //     },
// // //     'default_responses': [
// // //       {
// // //         response: "I'd be happy to help you explore our AI solutions. What specific area would you like to discuss?",
// // //         suggestions: ["Services", "Pricing", "Demo", "Case Studies"]
// // //       },
// // //       {
// // //         response: "Let me connect you with our specialists for detailed information tailored to your needs.",
// // //         suggestions: ["Schedule Call", "Get Quote", "View Demo", "Technical Info"],
// // //         connect: true,
// // //         connectType: 'call'
// // //       }
// // //     ]
// // //   };

// // //   const scrollToBottom = () => {
// // //     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
// // //   };

// // //   useEffect(() => {
// // //     scrollToBottom();
// // //   }, [messages]);

// // //   const getBotResponse = (userMessage: string) => {
// // //     const message = userMessage.toLowerCase().trim();
    
// // //     for (const [key, data] of Object.entries(qnaDatabase)) {
// // //       if (key === 'default_responses') continue;
// // //       // Skip if data is an array (like default_responses)
// // //       if (Array.isArray(data)) continue;

// // //       if (message.includes(key) || key.split(' ').some(word => message.includes(word))) {
// // //         return {
// // //           text: data.response,
// // //           suggestions: data.suggestions,
// // //           hasConnectButton: data.connect,
// // //           connectType: data.connectType as 'call' | 'email' | 'meeting' | undefined
// // //         };
// // //       }
// // //     }
    
// // //     const defaultResponses = qnaDatabase.default_responses;
// // //     const randomResponse = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
// // //     return {
// // //       text: randomResponse.response,
// // //       suggestions: randomResponse.suggestions,
// // //       hasConnectButton: randomResponse.connect || false,
// // //       connectType: randomResponse.connectType
// // //     };
// // //   };

// // //   const handleSendMessage = async () => {
// // //     if (!inputMessage.trim()) return;

// // //     const userMessage: Message = {
// // //       id: messages.length + 1,
// // //       text: inputMessage,
// // //       sender: 'user',
// // //       timestamp: new Date(),
// // //     };

// // //     setMessages(prev => [...prev, userMessage]);
// // //     setInputMessage('');
// // //     setIsTyping(true);

// // //     setTimeout(() => {
// // //       const botResponseData = getBotResponse(inputMessage);
// // //       const botMessage: Message = {
// // //         id: messages.length + 2,
// // //         text: botResponseData.text,
// // //         sender: 'bot',
// // //         timestamp: new Date(),
// // //         suggestions: botResponseData.suggestions,
// // //         hasConnectButton: botResponseData.hasConnectButton,
// // //         connectType: botResponseData.connectType
// // //       };

// // //       setMessages(prev => [...prev, botMessage]);
// // //       setIsTyping(false);
// // //     }, 800 + Math.random() * 400);
// // //   };

// // //   const handleSuggestionClick = (suggestion: string) => {
// // //     setInputMessage(suggestion);
// // //     setTimeout(() => {
// // //       handleSendMessage();
// // //     }, 100);
// // //   };

// // //   const handleConnectClick = (connectType: 'call' | 'email' | 'meeting') => {
// // //     setShowContactForm(true);
// // //     const connectMessage: Message = {
// // //       id: messages.length + 1,
// // //       text: `Perfect. Please share your details and we'll ${
// // //         connectType === 'call' ? 'call within 30 minutes' :
// // //         connectType === 'email' ? 'send detailed information' :
// // //         'schedule your consultation'
// // //       }.`,
// // //       sender: 'bot',
// // //       timestamp: new Date(),
// // //     };
// // //     setMessages(prev => [...prev, connectMessage]);
// // //   };

// // //   const handleContactSubmit = () => {
// // //     setUserInfo({
// // //       name: contactFormData.name,
// // //       email: contactFormData.email,
// // //       phone: contactFormData.phone,
// // //       company: contactFormData.company
// // //     });
    
// // //     const successMessage: Message = {
// // //       id: messages.length + 1,
// // //       text: `Thank you, ${contactFormData.name}. Your information has been received. Our team will contact you within 30 minutes.`,
// // //       sender: 'bot',
// // //       timestamp: new Date(),
// // //       suggestions: ["View Services", "Case Studies", "Technical Info", "Pricing"]
// // //     };
    
// // //     setMessages(prev => [...prev, successMessage]);
// // //     setShowContactForm(false);
// // //     setContactFormData({ name: '', email: '', phone: '', company: '', message: '' });
// // //   };

// // //   const handleKeyPress = (e: React.KeyboardEvent) => {
// // //     if (e.key === 'Enter' && !e.shiftKey) {
// // //       e.preventDefault();
// // //       handleSendMessage();
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       {/* Minimal Chat Toggle */}
// // //       <div className="fixed bottom-19 right-6 z-50 ">
// // //         <button
// // //           onClick={() => setIsOpen(!isOpen)}
// // //           className="group relative bg-blue-600 text-black flex justify-center items-center hover:bg-white rounded-full w-12 h-12   shadow-lg transition-all duration-300 hover:scale-105"
// // //           aria-label="Toggle chat"
// // //         >
// // //           {isOpen ? <X size={20} /> : <MessageCircle size={15} />}
          
// // //           {!isOpen && (
// // //             <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
// // //           )}
// // //         </button>
// // //       </div>

// // //       {/* Minimal Contact Form */}
// // //       {showContactForm && (
// // //         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-60 flex items-center justify-center p-4">
// // //           <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">
// // //             <div className="flex items-center justify-between mb-6">
// // //               <div className="flex items-center space-x-3">
// // //                 <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
// // //                   <Sparkles className="text-white" size={16} />
// // //                 </div>
// // //                 <h3 className="text-xl font-semibold text-gray-900">Connect with us</h3>
// // //               </div>
// // //               <button
// // //                 onClick={() => setShowContactForm(false)}
// // //                 className="text-gray-400 hover:text-gray-600 transition-colors"
// // //               >
// // //                 <X size={20} />
// // //               </button>
// // //             </div>
            
// // //             <div className="space-y-4">
// // //               <div className="space-y-4">
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Full name"
// // //                   className="w-full border-0 border-b border-gray-200 pb-3 focus:outline-none focus:border-black transition-colors text-gray-900 placeholder-gray-500"
// // //                   value={contactFormData.name}
// // //                   onChange={(e) => setContactFormData({...contactFormData, name: e.target.value})}
// // //                 />
// // //                 <input
// // //                   type="email"
// // //                   placeholder="Email address"
// // //                   className="w-full border-0 border-b border-gray-200 pb-3 focus:outline-none focus:border-black transition-colors text-gray-900 placeholder-gray-500"
// // //                   value={contactFormData.email}
// // //                   onChange={(e) => setContactFormData({...contactFormData, email: e.target.value})}
// // //                 />
// // //                 <input
// // //                   type="tel"
// // //                   placeholder="Phone number"
// // //                   className="w-full border-0 border-b border-gray-200 pb-3 focus:outline-none focus:border-black transition-colors text-gray-900 placeholder-gray-500"
// // //                   value={contactFormData.phone}
// // //                   onChange={(e) => setContactFormData({...contactFormData, phone: e.target.value})}
// // //                 />
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Company"
// // //                   className="w-full border-0 border-b border-gray-200 pb-3 focus:outline-none focus:border-black transition-colors text-gray-900 placeholder-gray-500"
// // //                   value={contactFormData.company}
// // //                   onChange={(e) => setContactFormData({...contactFormData, company: e.target.value})}
// // //                 />
// // //               </div>
              
// // //               <button
// // //                 onClick={handleContactSubmit}
// // //                 className="w-full bg-black hover:bg-gray-800 text-white rounded-xl py-4 font-medium transition-colors mt-8"
// // //               >
// // //                 Connect now
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* Premium Chat Window */}
// // //       {isOpen && (
// // //         <div className="fixed bottom-24 right-8 w-96 h-[32rem] bg-white rounded-2xl shadow-2xl z-40 flex flex-col overflow-hidden border border-gray-100">
// // //           {/* Minimal Header */}
// // //           <div className="bg-white border-b border-gray-100 p-6 flex items-center justify-between">
// // //             <div className="flex items-center space-x-3">
// // //               <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
// // //                 <Bot size={16} className="text-white" />
// // //               </div>
// // //               <div>
// // //                 <h3 className="font-semibold text-gray-900">Dcodes AI</h3>
// // //                 <div className="flex items-center space-x-1 text-xs text-gray-500">
// // //                   <div className="w-2 h-2 bg-green-500 rounded-full"></div>
// // //                   <span>Online</span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             <button
// // //               onClick={() => setIsOpen(false)}
// // //               className="text-gray-400 hover:text-gray-600 transition-colors"
// // //             >
// // //               <X size={16} />
// // //             </button>
// // //           </div>

// // //           {/* User Status */}
// // //           {userInfo && (
// // //             <div className="bg-gray-50 px-6 py-3 border-b border-gray-100">
// // //               <div className="flex items-center text-sm text-gray-600">
// // //                 <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
// // //                 {userInfo.name} • {userInfo.company}
// // //               </div>
// // //             </div>
// // //           )}

// // //           {/* Messages */}
// // //           <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/30">
// // //             {messages.map((message) => (
// // //               <div key={message.id}>
// // //                 <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
// // //                   <div
// // //                     className={`max-w-xs px-4 py-3 rounded-2xl ${
// // //                       message.sender === 'user'
// // //                         ? 'bg-black text-white'
// // //                         : 'bg-white text-gray-900 shadow-sm border border-gray-100'
// // //                     }`}
// // //                   >
// // //                     <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
// // //                   </div>
// // //                 </div>

// // //                 {/* Connect Button */}
// // //                 {message.hasConnectButton && message.sender === 'bot' && (
// // //                   <div className="flex justify-start mt-3">
// // //                     <button
// // //                       onClick={() => handleConnectClick(message.connectType as any)}
// // //                       className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center space-x-2"
// // //                     >
// // //                       {message.connectType === 'call' && <Phone size={14} />}
// // //                       {message.connectType === 'email' && <Mail size={14} />}
// // //                       {message.connectType === 'meeting' && <Calendar size={14} />}
// // //                       <span>
// // //                         {message.connectType === 'call' && 'Call now'}
// // //                         {message.connectType === 'email' && 'Email info'}
// // //                         {message.connectType === 'meeting' && 'Book meeting'}
// // //                       </span>
// // //                     </button>
// // //                   </div>
// // //                 )}

// // //                 {/* Suggestions */}
// // //                 {message.suggestions && message.sender === 'bot' && (
// // //                   <div className="flex flex-wrap gap-2 mt-3">
// // //                     {message.suggestions.map((suggestion, index) => (
// // //                       <button
// // //                         key={index}
// // //                         onClick={() => handleSuggestionClick(suggestion)}
// // //                         className="bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-full text-xs font-medium border border-gray-200 transition-colors"
// // //                       >
// // //                         {suggestion}
// // //                       </button>
// // //                     ))}
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             ))}
            
// // //             {/* Typing Indicator */}
// // //             {isTyping && (
// // //               <div className="flex justify-start">
// // //                 <div className="bg-white text-gray-900 px-4 py-3 rounded-2xl shadow-sm border border-gray-100">
// // //                   <div className="flex items-center space-x-2">
// // //                     <div className="flex space-x-1">
// // //                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
// // //                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
// // //                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             )}
// // //             <div ref={messagesEndRef} />
// // //           </div>

// // //           {/* Minimal Input */}
// // //           <div className="p-6 border-t border-gray-100 bg-white">
// // //             <div className="flex items-center space-x-3">
// // //               <input
// // //                 value={inputMessage}
// // //                 onChange={(e) => setInputMessage(e.target.value)}
// // //                 onKeyPress={handleKeyPress}
// // //                 placeholder="Type your message..."
// // //                 className="flex-1 border-0 focus:outline-none text-sm text-gray-900 placeholder-gray-500"
// // //                 disabled={isTyping}
// // //               />
// // //               <button
// // //                 onClick={handleSendMessage}
// // //                 disabled={!inputMessage.trim() || isTyping}
// // //                 className="bg-black hover:bg-gray-800 disabled:bg-gray-300 text-white rounded-full p-2 transition-colors"
// // //               >
// // //                 <Send size={16} />
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </>
// // //   );
// // // };

// // // export default MinimalPremiumChatbot;



// //   'use client';

// //   import { useState, useRef, useEffect } from 'react';
// //   import { MessageCircle, X, Send, Bot, User, Phone, Mail, Calendar, Sparkles } from 'lucide-react';

// //   interface Message {
// //     id: number;
// //     text: string;
// //     sender: 'user' | 'bot';
// //     timestamp: Date;
// //     suggestions?: string[];
// //     hasConnectButton?: boolean;
// //     connectType?: 'call' | 'email' | 'meeting';
// //   }

// //   interface UserInfo {
// //     name: string;
// //     email: string;
// //     company: string;
// //   }

// //   const MinimalPremiumChatbot = () => {
// //     const [isOpen, setIsOpen] = useState(false);
// //     const [messages, setMessages] = useState<Message[]>([
// //       {
// //         id: 1,
// //         text: "Hello! I'm your AI assistant at Dcodes. How can I help transform your business with AI today?",
// //         sender: 'bot',
// //         timestamp: new Date(),
// //         suggestions: ["AI Services", "Pricing", "Schedule Demo", "Success Stories"]
// //       },
// //     ]);
// //     const [inputMessage, setInputMessage] = useState('');
// //     const [isTyping, setIsTyping] = useState(false);
// //     const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
// //     const [showContactForm, setShowContactForm] = useState(false);
// //     const [contactFormData, setContactFormData] = useState({
// //       name: '', email: '', phone: '', company: '', message: ''
// //     });
// //     const messagesEndRef = useRef<HTMLDivElement>(null);

// //     // Refined Q&A Database
// //     const qnaDatabase = {
// //       'hello': {
// //         response: "Welcome to Dcodes. We specialize in enterprise AI solutions that deliver measurable ROI. What's your primary business challenge?",
// //         suggestions: ["Process Automation", "Data Analytics", "Custom AI", "ROI Analysis"],
// //         connect: false
// //       },
// //       'hi': {
// //         response: "Hello. We've helped 500+ companies implement AI solutions with an average 40% efficiency improvement. What brings you here?",
// //         suggestions: ["View Services", "Case Studies", "Get Quote", "Book Call"],
// //         connect: false
// //       },
// //       'ai solutions': {
// //         response: "Our AI solutions include:\n\n• Intelligent Automation (60% cost reduction)\n• Machine Learning Platform (95% accuracy)\n• Conversational AI (87% satisfaction increase)\n• Data Intelligence (Real-time insights)\n\nWhich area interests you most?",
// //         suggestions: ["Automation Demo", "ML Platform", "Chatbot Solutions", "Analytics"],
// //         connect: true,
// //         connectType: 'meeting'
// //       },
// //       'pricing': {
// //         response: "Transparent pricing tailored to your needs:\n\n• Starter: $3K/month\n• Professional: $8K/month\n• Enterprise: Custom\n\n30-day free trial available. 90-day ROI guarantee.\n\nWould you like a personalized quote?",
// //         suggestions: ["Free Trial", "Custom Quote", "ROI Calculator", "Compare Plans"],
// //         connect: true,
// //         connectType: 'meeting'
// //       },
// //       'demo': {
// //         response: "Experience our AI solutions firsthand. Our demos are tailored to your industry and use case.\n\nWhat would you like to see?\n\n• Live platform walkthrough\n• Industry-specific use cases\n• Custom solution prototype",
// //         suggestions: ["Schedule Demo", "Industry Solutions", "Technical Deep Dive", "ROI Projection"],
// //         connect: true,
// //         connectType: 'meeting'
// //       },
// //       'success stories': {
// //         response: "Recent client results:\n\n• Retail: 40% sales increase\n• Healthcare: $5M cost savings\n• Finance: 99.8% fraud detection\n• Manufacturing: 60% efficiency gain\n\nWant details for your industry?",
// //         suggestions: ["Industry Results", "Full Case Studies", "Client References", "ROI Analysis"],
// //         connect: true,
// //         connectType: 'call'
// //       },
// //       'contact': {
// //         response: "Let's discuss your AI transformation:\n\n• 15-min consultation (Free)\n• Strategy session (Complimentary)\n• Technical review\n• Custom demonstration\n\nPreferred contact method?",
// //         suggestions: ["Schedule Call", "Email Info", "Book Meeting", "Technical Review"],
// //         connect: true,
// //         connectType: 'meeting'
// //       },
// //       'default_responses': [
// //         {
// //           response: "I'd be happy to help you explore our AI solutions. What specific area would you like to discuss?",
// //           suggestions: ["Services", "Pricing", "Demo", "Case Studies"]
// //         },
// //         {
// //           response: "Let me connect you with our specialists for detailed information tailored to your needs.",
// //           suggestions: ["Schedule Call", "Get Quote", "View Demo", "Technical Info"],
// //           connect: true,
// //           connectType: 'call'
// //         }
// //       ]
// //     };

// //     const scrollToBottom = () => {
// //       messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
// //     };

// //     useEffect(() => {
// //       scrollToBottom();
// //     }, [messages]);

// //     const getBotResponse = (userMessage: string) => {
// //       const message = userMessage.toLowerCase().trim();
      
// //       for (const [key, data] of Object.entries(qnaDatabase)) {
// //         if (key === 'default_responses') continue;
// //         if (Array.isArray(data)) continue;

// //         if (message.includes(key) || key.split(' ').some(word => message.includes(word))) {
// //           return {
// //             text: data.response,
// //             suggestions: data.suggestions,
// //             hasConnectButton: data.connect,
// //             connectType: data.connectType as 'call' | 'email' | 'meeting' | undefined
// //           };
// //         }
// //       }
      
// //       const defaultResponses = qnaDatabase.default_responses;
// //       const randomResponse = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
// //       return {
// //         text: randomResponse.response,
// //         suggestions: randomResponse.suggestions,
// //         hasConnectButton: randomResponse.connect || false,
// //         connectType: randomResponse.connectType
// //       };
// //     };

// //     const handleSendMessage = async () => {
// //       if (!inputMessage.trim()) return;

// //       const userMessage: Message = {
// //         id: messages.length + 1,
// //         text: inputMessage,
// //         sender: 'user',
// //         timestamp: new Date(),
// //       };

// //       setMessages(prev => [...prev, userMessage]);
// //       setInputMessage('');
// //       setIsTyping(true);

// //       setTimeout(() => {
// //         const botResponseData = getBotResponse(inputMessage);
// //         const botMessage: Message = {
// //           id: messages.length + 2,
// //           text: botResponseData.text,
// //           sender: 'bot',
// //           timestamp: new Date(),
// //           suggestions: botResponseData.suggestions,
// //           hasConnectButton: botResponseData.hasConnectButton,
// //           connectType: botResponseData.connectType
// //         };

// //         setMessages(prev => [...prev, botMessage]);
// //         setIsTyping(false);
// //       }, 800 + Math.random() * 400);
// //     };

// //     const handleSuggestionClick = (suggestion: string) => {
// //       setInputMessage(suggestion);
// //       setTimeout(() => {
// //         handleSendMessage();
// //       }, 100);
// //     };

// //     const handleConnectClick = (connectType: 'call' | 'email' | 'meeting') => {
// //       setShowContactForm(true);
// //       const connectMessage: Message = {
// //         id: messages.length + 1,
// //         text: `Perfect. Please share your details and we'll ${
// //           connectType === 'call' ? 'call within 30 minutes' :
// //           connectType === 'email' ? 'send detailed information' :
// //           'schedule your consultation'
// //         }.`,
// //         sender: 'bot',
// //         timestamp: new Date(),
// //       };
// //       setMessages(prev => [...prev, connectMessage]);
// //     };

// //     const handleContactSubmit = () => {
// //       setUserInfo({
// //         name: contactFormData.name,
// //         email: contactFormData.email,
// //         company: contactFormData.company
// //       });
      
// //       const successMessage: Message = {
// //         id: messages.length + 1,
// //         text: `Thank you, ${contactFormData.name}. Your information has been received. Our team will contact you within 30 minutes.`,
// //         sender: 'bot',
// //         timestamp: new Date(),
// //         suggestions: ["View Services", "Case Studies", "Technical Info", "Pricing"]
// //       };
      
// //       setMessages(prev => [...prev, successMessage]);
// //       setShowContactForm(false);
// //       setContactFormData({ name: '', email: '', phone: '', company: '', message: '' });
// //     };

// //     const handleKeyPress = (e: React.KeyboardEvent) => {
// //       if (e.key === 'Enter' && !e.shiftKey) {
// //         e.preventDefault();
// //         handleSendMessage();
// //       }
// //     };

// //     return (
// //       <>
// //         {/* Chat Toggle Button - Highest z-index */}
// //         <div className="fixed bottom-6 right-6 z-[100]">
// //           <button
// //             onClick={() => setIsOpen(!isOpen)}
// //             className="group relative bg-blue-600 text-black flex justify-center items-center hover:bg-white rounded-full w-12 h-12 shadow-lg transition-all duration-300 hover:scale-105"
// //             aria-label="Toggle chat"
// //           >
// //             {isOpen ? <X size={20} /> : <MessageCircle size={15} />}
            
// //             {!isOpen && (
// //               <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
// //             )}
// //           </button>
// //         </div>

// //         {/* Contact Form Overlay - Higher z-index than chat window */}
// //         {showContactForm && (
// //           <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] flex items-center justify-center p-4">
// //             <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">
// //               <div className="flex items-center justify-between mb-6">
// //                 <div className="flex items-center space-x-3">
// //                   <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
// //                     <Sparkles className="text-white" size={16} />
// //                   </div>
// //                   <h3 className="text-xl font-semibold text-gray-900">Connect with us</h3>
// //                 </div>
// //                 <button
// //                   onClick={() => setShowContactForm(false)}
// //                   className="text-gray-400 hover:text-gray-600 transition-colors"
// //                 >
// //                   <X size={20} />
// //                 </button>
// //               </div>
              
// //               <div className="space-y-4">
// //                 <div className="space-y-4">
// //                   <input
// //                     type="text"
// //                     placeholder="Full name"
// //                     className="w-full border-0 border-b border-gray-200 pb-3 focus:outline-none focus:border-black transition-colors text-gray-900 placeholder-gray-500"
// //                     value={contactFormData.name}
// //                     onChange={(e) => setContactFormData({...contactFormData, name: e.target.value})}
// //                   />
// //                   <input
// //                     type="email"
// //                     placeholder="Email address"
// //                     className="w-full border-0 border-b border-gray-200 pb-3 focus:outline-none focus:border-black transition-colors text-gray-900 placeholder-gray-500"
// //                     value={contactFormData.email}
// //                     onChange={(e) => setContactFormData({...contactFormData, email: e.target.value})}
// //                   />
// //                   <input
// //                     type="tel"
// //                     placeholder="Phone number"
// //                     className="w-full border-0 border-b border-gray-200 pb-3 focus:outline-none focus:border-black transition-colors text-gray-900 placeholder-gray-500"
// //                     value={contactFormData.phone}
// //                     onChange={(e) => setContactFormData({...contactFormData, phone: e.target.value})}
// //                   />
// //                   <input
// //                     type="text"
// //                     placeholder="Company"
// //                     className="w-full border-0 border-b border-gray-200 pb-3 focus:outline-none focus:border-black transition-colors text-gray-900 placeholder-gray-500"
// //                     value={contactFormData.company}
// //                     onChange={(e) => setContactFormData({...contactFormData, company: e.target.value})}
// //                   />
// //                 </div>
                
// //                 <button
// //                   onClick={handleContactSubmit}
// //                   className="w-full bg-black hover:bg-gray-800 text-white rounded-xl py-4 font-medium transition-colors mt-8"
// //                 >
// //                   Connect now
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {/* Chat Window - Lower z-index than contact form but higher than most content */}
// //         {isOpen && (
// //           <div className="fixed bottom-24 right-8 w-96 h-[32rem] bg-white rounded-2xl shadow-2xl z-[80] flex flex-col overflow-hidden border border-gray-100">
// //             {/* Header */}
// //             <div className="bg-white border-b border-gray-100 p-6 flex items-center justify-between">
// //               <div className="flex items-center space-x-3">
// //                 <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
// //                   <Bot size={16} className="text-white" />
// //                 </div>
// //                 <div>
// //                   <h3 className="font-semibold text-gray-900">Dcodes AI</h3>
// //                   <div className="flex items-center space-x-1 text-xs text-gray-500">
// //                     <div className="w-2 h-2 bg-green-500 rounded-full"></div>
// //                     <span>Online</span>
// //                   </div>
// //                 </div>
// //               </div>
// //               <button
// //                 onClick={() => setIsOpen(false)}
// //                 className="text-gray-400 hover:text-gray-600 transition-colors"
// //               >
// //                 <X size={16} />
// //               </button>
// //             </div>

// //             {/* User Status */}
// //             {userInfo && (
// //               <div className="bg-gray-50 px-6 py-3 border-b border-gray-100">
// //                 <div className="flex items-center text-sm text-gray-600">
// //                   <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
// //                   {userInfo.name} • {userInfo.company}
// //                 </div>
// //               </div>
// //             )}

// //             {/* Messages Container */}
// //             <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/30">
// //               {messages.map((message) => (
// //                 <div key={message.id}>
// //                   <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
// //                     <div
// //                       className={`max-w-xs px-4 py-3 rounded-2xl ${
// //                         message.sender === 'user'
// //                           ? 'bg-black text-white'
// //                           : 'bg-white text-gray-900 shadow-sm border border-gray-100'
// //                       }`}
// //                     >
// //                       <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
// //                     </div>
// //                   </div>

// //                   {/* Connect Button */}
// //                   {message.hasConnectButton && message.sender === 'bot' && (
// //                     <div className="flex justify-start mt-3">
// //                       <button
// //                         onClick={() => handleConnectClick(message.connectType as any)}
// //                         className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center space-x-2"
// //                       >
// //                         {message.connectType === 'call' && <Phone size={14} />}
// //                         {message.connectType === 'email' && <Mail size={14} />}
// //                         {message.connectType === 'meeting' && <Calendar size={14} />}
// //                         <span>
// //                           {message.connectType === 'call' && 'Call now'}
// //                           {message.connectType === 'email' && 'Email info'}
// //                           {message.connectType === 'meeting' && 'Book meeting'}
// //                         </span>
// //                       </button>
// //                     </div>
// //                   )}

// //                   {/* Suggestions */}
// //                   {message.suggestions && message.sender === 'bot' && (
// //                     <div className="flex flex-wrap gap-2 mt-3">
// //                       {message.suggestions.map((suggestion, index) => (
// //                         <button
// //                           key={index}
// //                           onClick={() => handleSuggestionClick(suggestion)}
// //                           className="bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-full text-xs font-medium border border-gray-200 transition-colors"
// //                         >
// //                           {suggestion}
// //                         </button>
// //                       ))}
// //                     </div>
// //                   )}
// //                 </div>
// //               ))}
              
// //               {/* Typing Indicator */}
// //               {isTyping && (
// //                 <div className="flex justify-start">
// //                   <div className="bg-white text-gray-900 px-4 py-3 rounded-2xl shadow-sm border border-gray-100">
// //                     <div className="flex items-center space-x-2">
// //                       <div className="flex space-x-1">
// //                         <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
// //                         <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
// //                         <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}
// //               <div ref={messagesEndRef} />
// //             </div>

// //             {/* Input Area */}
// //             <div className="p-6 border-t border-gray-100 bg-white">
// //               <div className="flex items-center space-x-3">
// //                 <input
// //                   value={inputMessage}
// //                   onChange={(e) => setInputMessage(e.target.value)}
// //                   onKeyPress={handleKeyPress}
// //                   placeholder="Type your message..."
// //                   className="flex-1 border-0 focus:outline-none text-sm text-gray-900 placeholder-gray-500"
// //                   disabled={isTyping}
// //                 />
// //                 <button
// //                   onClick={handleSendMessage}
// //                   disabled={!inputMessage.trim() || isTyping}
// //                   className="bg-black hover:bg-gray-800 disabled:bg-gray-300 text-white rounded-full p-2 transition-colors"
// //                 >
// //                   <Send size={16} />
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </>
// //     );
// //   };

// //   export default MinimalPremiumChatbot; 




// 'use client';

// import { useState, useRef, useEffect } from 'react';
// import { MessageCircle, X, Send, Bot, User, Phone, Mail, Calendar, Sparkles } from 'lucide-react';

// interface Message {
//   id: number;
//   text: string;
//   sender: 'user' | 'bot';
//   timestamp: Date;
//   suggestions?: string[];
//   hasConnectButton?: boolean;
//   connectType?: 'call' | 'email' | 'meeting';
// }

// interface UserInfo {
//   name: string;
//   email: string;
//   company: string;
// }

// interface ContactFormData {
//   name: string;
//   email: string;
//   phone: string;
//   company: string;
//   message: string;
// }

// interface QnAItem {
//   response: string;
//   suggestions?: string[];
//   connect?: boolean;
//   connectType?: 'call' | 'email' | 'meeting';
// }

// const MinimalPremiumChatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       id: 1,
//       text: "Hello! I'm your AI assistant at Dcodes. How can I help transform your business with AI today?",
//       sender: 'bot',
//       timestamp: new Date(),
//       suggestions: ["AI Services", "Pricing", "Schedule Demo", "Success Stories"]
//     },
//   ]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
//   const [showContactForm, setShowContactForm] = useState(false);
//   const [contactFormData, setContactFormData] = useState<ContactFormData>({
//     name: '', email: '', phone: '', company: '', message: ''
//   });
  
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   // Q&A Database
//   const qnaDatabase: Record<string, QnAItem> = {
//     'hello': {
//       response: "Welcome to Dcodes. We specialize in enterprise AI solutions that deliver measurable ROI. What's your primary business challenge?",
//       suggestions: ["Process Automation", "Data Analytics", "Custom AI", "ROI Analysis"],
//       connect: false
//     },
//     'hi': {
//       response: "Hello. We've helped 500+ companies implement AI solutions with an average 40% efficiency improvement. What brings you here?",
//       suggestions: ["View Services", "Case Studies", "Get Quote", "Book Call"],
//       connect: false
//     },
//     'ai solutions': {
//       response: "Our AI solutions include:\n\n• Intelligent Automation (60% cost reduction)\n• Machine Learning Platform (95% accuracy)\n• Conversational AI (87% satisfaction increase)\n• Data Intelligence (Real-time insights)\n\nWhich area interests you most?",
//       suggestions: ["Automation Demo", "ML Platform", "Chatbot Solutions", "Analytics"],
//       connect: true,
//       connectType: 'meeting'
//     },
//     'pricing': {
//       response: "Transparent pricing tailored to your needs:\n\n• Starter: $3K/month\n• Professional: $8K/month\n• Enterprise: Custom\n\n30-day free trial available. 90-day ROI guarantee.\n\nWould you like a personalized quote?",
//       suggestions: ["Free Trial", "Custom Quote", "ROI Calculator", "Compare Plans"],
//       connect: true,
//       connectType: 'meeting'
//     },
//     'demo': {
//       response: "Experience our AI solutions firsthand. Our demos are tailored to your industry and use case.\n\nWhat would you like to see?\n\n• Live platform walkthrough\n• Industry-specific use cases\n• Custom solution prototype",
//       suggestions: ["Schedule Demo", "Industry Solutions", "Technical Deep Dive", "ROI Projection"],
//       connect: true,
//       connectType: 'meeting'
//     },
//     'success stories': {
//       response: "Recent client results:\n\n• Retail: 40% sales increase\n• Healthcare: $5M cost savings\n• Finance: 99.8% fraud detection\n• Manufacturing: 60% efficiency gain\n\nWant details for your industry?",
//       suggestions: ["Industry Results", "Full Case Studies", "Client References", "ROI Analysis"],
//       connect: true,
//       connectType: 'call'
//     },
//     'contact': {
//       response: "Let's discuss your AI transformation:\n\n• 15-min consultation (Free)\n• Strategy session (Complimentary)\n• Technical review\n• Custom demonstration\n\nPreferred contact method?",
//       suggestions: ["Schedule Call", "Email Info", "Book Meeting", "Technical Review"],
//       connect: true,
//       connectType: 'meeting'

//     }
//   };

//   const defaultResponses: QnAItem[] = [
//     {
//       response: "I'd be happy to help you explore our AI solutions. What specific area would you like to discuss?",
//       suggestions: ["Services", "Pricing", "Demo", "Case Studies"]
//     },
//     {
//       response: "Let me connect you with our specialists for detailed information tailored to your needs.",
//       suggestions: ["Schedule Call", "Get Quote", "View Demo", "Technical Info"],
//       connect: true,
//       connectType: 'call'
//     }
//   ];

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const getBotResponse = (userMessage: string): QnAItem => {
//     const message = userMessage.toLowerCase().trim();
    
//     for (const [key, data] of Object.entries(qnaDatabase)) {
//       if (message.includes(key) || key.split(' ').some(word => message.includes(word))) {
//         return data;
//       }
//     }
    
//     return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
//   };

//   const handleSendMessage = async () => {
//     if (!inputMessage.trim()) return;

//     const userMessage: Message = {
//       id: messages.length + 1,
//       text: inputMessage,
//       sender: 'user',
//       timestamp: new Date(),
//     };

//     setMessages(prev => [...prev, userMessage]);
//     setInputMessage('');
//     setIsTyping(true);

//     setTimeout(() => {
//       const botResponseData = getBotResponse(inputMessage);
//       const botMessage: Message = {
//         id: messages.length + 2,
//         text: botResponseData.response,
//         sender: 'bot',
//         timestamp: new Date(),
//         suggestions: botResponseData.suggestions,
//         hasConnectButton: botResponseData.connect,
//         connectType: botResponseData.connectType
//       };

//       setMessages(prev => [...prev, botMessage]);
//       setIsTyping(false);
//     }, 800 + Math.random() * 400);
//   };

//   const handleSuggestionClick = (suggestion: string) => {
//     setInputMessage(suggestion);
//     setTimeout(() => {
//       handleSendMessage();
//     }, 100);
//   };

//   const handleConnectClick = (connectType: 'call' | 'email' | 'meeting') => {
//     setShowContactForm(true);
//     const connectMessage: Message = {
//       id: messages.length + 1,
//       text: `Perfect. Please share your details and we'll ${
//         connectType === 'call' ? 'call within 30 minutes' :
//         connectType === 'email' ? 'send detailed information' :
//         'schedule your consultation'
//       }.`,
//       sender: 'bot',
//       timestamp: new Date(),
//     };
//     setMessages(prev => [...prev, connectMessage]);
//   };

//   const handleContactSubmit = () => {
//     setUserInfo({
//       name: contactFormData.name,
//       email: contactFormData.email,
//       company: contactFormData.company
//     });
    
//     const successMessage: Message = {
//       id: messages.length + 1,
//       text: `Thank you, ${contactFormData.name}. Your information has been received. Our team will contact you within 30 minutes.`,
//       sender: 'bot',
//       timestamp: new Date(),
//       suggestions: ["View Services", "Case Studies", "Technical Info", "Pricing"]
//     };
    
//     setMessages(prev => [...prev, successMessage]);
//     setShowContactForm(false);
//     setContactFormData({ name: '', email: '', phone: '', company: '', message: '' });
//   };

//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   const MessageBubble = ({ message }: { message: Message }) => (
//     <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
//       <div
//         className={`max-w-xs px-4 py-3 rounded-2xl ${
//           message.sender === 'user'
//             ? 'bg-black text-white'
//             : 'bg-white text-gray-900 shadow-sm border border-gray-100'
//         }`}
//       >
//         <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
//       </div>
//     </div>
//   );

//   const ContactForm = () => (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[10000] flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center space-x-3">
//             <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
//               <Sparkles className="text-white" size={16} />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900">Connect with us</h3>
//           </div>
//           <button
//             onClick={() => setShowContactForm(false)}
//             className="text-gray-400 hover:text-gray-600 transition-colors"
//           >
//             <X size={20} />
//           </button>
//         </div>
        
//         <div className="space-y-4">
//           {['name', 'email', 'phone', 'company'].map((field) => (
//             <input
//               key={field}
//               type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
//               placeholder={field === 'phone' ? 'Phone number' : `${field.charAt(0).toUpperCase() + field.slice(1)}`}
//               className="w-full border-0 border-b border-gray-200 pb-3 focus:outline-none focus:border-black transition-colors text-gray-900 placeholder-gray-500"
//               value={contactFormData[field as keyof ContactFormData]}
//               onChange={(e) => setContactFormData({...contactFormData, [field]: e.target.value})}
//             />
//           ))}
          
//           <button
//             onClick={handleContactSubmit}
//             className="w-full bg-black hover:bg-gray-800 text-white rounded-xl py-4 font-medium transition-colors mt-8"
//           >
//             Connect now
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       {/* Chat Toggle Button */}
//       <div className="fixed bottom-6 right-6 z-[10000]">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="group relative bg-blue-600 text-white flex justify-center items-center hover:bg-blue-700 rounded-full w-12 h-12 shadow-lg transition-all duration-300 hover:scale-105"
//           aria-label="Toggle chat"
//         >
//           {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
          
//           {!isOpen && (
//             <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//           )}
//         </button>
//       </div>

//       {/* Contact Form */}
//       {showContactForm && <ContactForm />}

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="fixed bottom-24 right-6 w-96 h-[32rem] bg-white rounded-2xl shadow-2xl z-[9999] flex flex-col overflow-hidden border border-gray-200">
//           {/* Header */}
//           <div className="bg-white border-b border-gray-100 p-6 flex items-center justify-between">
//             <div className="flex items-center space-x-3">
//               <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
//                 <Bot size={16} className="text-white" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-gray-900">Dcodes AI</h3>
//                 <div className="flex items-center space-x-1 text-xs text-gray-500">
//                   <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                   <span>Online</span>
//                 </div>
//               </div>
//             </div>
//             <button
//               onClick={() => setIsOpen(false)}
//               className="text-gray-400 hover:text-gray-600 transition-colors"
//             >
//               <X size={16} />
//             </button>
//           </div>

//           {/* User Status */}
//           {userInfo && (
//             <div className="bg-gray-50 px-6 py-3 border-b border-gray-100">
//               <div className="flex items-center text-sm text-gray-600">
//                 <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
//                 {userInfo.name} • {userInfo.company}
//               </div>
//             </div>
//           )}

//           {/* Messages Container */}
//           <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/30">
//             {messages.map((message) => (
//               <div key={message.id}>
//                 <MessageBubble message={message} />

//                 {/* Connect Button */}
//                 {message.hasConnectButton && message.sender === 'bot' && (
//                   <div className="flex justify-start mt-3">
//                     <button
//                       onClick={() => handleConnectClick(message.connectType!)}
//                       className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center space-x-2"
//                     >
//                       {message.connectType === 'call' && <Phone size={14} />}
//                       {message.connectType === 'email' && <Mail size={14} />}
//                       {message.connectType === 'meeting' && <Calendar size={14} />}
//                       <span>
//                         {message.connectType === 'call' && 'Call now'}
//                         {message.connectType === 'email' && 'Email info'}
//                         {message.connectType === 'meeting' && 'Book meeting'}
//                       </span>
//                     </button>
//                   </div>
//                 )}

//                 {/* Suggestions */}
//                 {message.suggestions && message.sender === 'bot' && (
//                   <div className="flex flex-wrap gap-2 mt-3">
//                     {message.suggestions.map((suggestion, index) => (
//                       <button
//                         key={index}
//                         onClick={() => handleSuggestionClick(suggestion)}
//                         className="bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-full text-xs font-medium border border-gray-200 transition-colors"
//                       >
//                         {suggestion}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
            
//             {/* Typing Indicator */}
//             {isTyping && (
//               <div className="flex justify-start">
//                 <div className="bg-white text-gray-900 px-4 py-3 rounded-2xl shadow-sm border border-gray-100">
//                   <div className="flex items-center space-x-2">
//                     <div className="flex space-x-1">
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input Area */}
//           <div className="p-6 border-t border-gray-100 bg-white">
//             <div className="flex items-center space-x-3">
//               <input
//                 value={inputMessage}
//                 onChange={(e) => setInputMessage(e.target.value)}
//                 onKeyPress={handleKeyPress}
//                 placeholder="Type your message..."
//                 className="flex-1 border-0 focus:outline-none text-sm text-gray-900 placeholder-gray-500"
//                 disabled={isTyping}
//               />
//               <button
//                 onClick={handleSendMessage}
//                 disabled={!inputMessage.trim() || isTyping}
//                 className="bg-black hover:bg-gray-800 disabled:bg-gray-300 text-white rounded-full p-2 transition-colors"
//               >
//                 <Send size={16} />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default MinimalPremiumChatbot;








'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Phone, Mail, Calendar, Sparkles } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  suggestions?: string[];
  hasConnectButton?: boolean;
  connectType?: 'call' | 'email' | 'meeting';
}

interface UserInfo {
  name: string;
  email: string;
  company: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface QnAItem {
  response: string;
  suggestions?: string[];
  connect?: boolean;
  connectType?: 'call' | 'email' | 'meeting';
}

const MinimalPremiumChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI assistant at Dcodes Technologies. How can I help transform your business with AI today?",
      sender: 'bot',
      timestamp: new Date(),
      suggestions: ["AI Services", "Pricing", "Schedule Demo", "Success Stories"]
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactFormData, setContactFormData] = useState<ContactFormData>({
    name: '', email: '', phone: '', company: '', message: ''
  });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Contact Information
  const contactInfo = {
    phone: '+91 6353653977',
    email: 'info@dcodestech.com',
    calendly: 'https://calendly.com/sales-dcodestechnologies/30min'
  };

  // Q&A Database
  const qnaDatabase: Record<string, QnAItem> = {
    'hello': {
      response: "Welcome to Dcodes Technologies. We specialize in enterprise AI solutions that deliver measurable ROI. What's your primary business challenge?",
      suggestions: ["Process Automation", "Data Analytics", "Custom AI", "ROI Analysis"],
      connect: false
    },
    'hi': {
      response: "Hello. We've helped 500+ companies implement AI solutions with an average 40% efficiency improvement. What brings you here?",
      suggestions: ["View Services", "Case Studies", "Get Quote", "Book Call"],
      connect: false
    },
    'ai solutions': {
      response: "Our AI solutions include:\n\n• Intelligent Automation (60% cost reduction)\n• Machine Learning Platform (95% accuracy)\n• Conversational AI (87% satisfaction increase)\n• Data Intelligence (Real-time insights)\n\nWhich area interests you most?",
      suggestions: ["Automation Demo", "ML Platform", "Chatbot Solutions", "Analytics"],
      connect: true,
      connectType: 'meeting'
    },
    'pricing': {
      response: "Transparent pricing tailored to your needs:\n\n• Starter: $3K/month\n• Professional: $8K/month\n• Enterprise: Custom\n\n30-day free trial available. 90-day ROI guarantee.\n\nWould you like a personalized quote?",
      suggestions: ["Free Trial", "Custom Quote", "ROI Calculator", "Compare Plans"],
      connect: true,
      connectType: 'meeting'
    },
    'demo': {
      response: "Experience our AI solutions firsthand. Schedule a 30-minute demo through our Calendly:\n\n" + contactInfo.calendly + "\n\nWhat would you like to see?\n• Live platform walkthrough\n• Industry-specific use cases\n• Custom solution prototype",
      suggestions: ["Schedule Demo", "Industry Solutions", "Technical Deep Dive", "ROI Projection"],
      connect: true,
      connectType: 'meeting'
    },
    'success stories': {
      response: "Recent client results:\n\n• Retail: 40% sales increase\n• Healthcare: $5M cost savings\n• Finance: 99.8% fraud detection\n• Manufacturing: 60% efficiency gain\n\nWant details for your industry?",
      suggestions: ["Industry Results", "Full Case Studies", "Client References", "ROI Analysis"],
      connect: true,
      connectType: 'call'
    },
    'contact': {
      response: `Let's discuss your AI transformation:\n\n• Phone: ${contactInfo.phone}\n• Email: ${contactInfo.email}\n• Schedule: ${contactInfo.calendly}\n\nPreferred contact method?`,
      suggestions: ["Schedule Call", "Email Info", "Book Meeting", "Technical Review"],
      connect: true,
      connectType: 'meeting'
    },
    'call': {
      response: `Perfect! You can reach us directly at:\n\n📞 ${contactInfo.phone}\n\nOur team is available to discuss your AI needs and provide a free consultation.`,
      suggestions: ["Schedule Meeting", "Send Email", "View Services", "Case Studies"],
      connect: false
    },
    'email': {
      response: `Great! Contact us at:\n\n📧 ${contactInfo.email}\n\nWe typically respond within 2 hours during business days with detailed information.`,
      suggestions: ["Schedule Call", "Book Demo", "Technical Info", "Pricing"],
      connect: false
    },
    'meeting': {
      response: `Excellent! Schedule a 30-minute consultation:\n\n📅 ${contactInfo.calendly}\n\nChoose a time that works for you and we'll discuss your specific requirements.`,
      suggestions: ["View Calendar", "Contact Info", "Services", "Success Stories"],
      connect: false
    }
  };

  const defaultResponses: QnAItem[] = [
    {
      response: "I'd be happy to help you explore our AI solutions. What specific area would you like to discuss?",
      suggestions: ["Services", "Pricing", "Demo", "Case Studies"]
    },
    {
      response: `Let me connect you with our specialists for detailed information. You can reach us at ${contactInfo.phone} or ${contactInfo.email}`,
      suggestions: ["Schedule Call", "Get Quote", "View Demo", "Technical Info"],
      connect: true,
      connectType: 'call'
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): QnAItem => {
    const message = userMessage.toLowerCase().trim();
    
    for (const [key, data] of Object.entries(qnaDatabase)) {
      if (message.includes(key) || key.split(' ').some(word => message.includes(word))) {
        return data;
      }
    }
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponseData = getBotResponse(inputMessage);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponseData.response,
        sender: 'bot',
        timestamp: new Date(),
        suggestions: botResponseData.suggestions,
        hasConnectButton: botResponseData.connect,
        connectType: botResponseData.connectType
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800 + Math.random() * 400);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  const handleConnectClick = (connectType: 'call' | 'email' | 'meeting') => {
    setShowContactForm(true);
    const connectMessage: Message = {
      id: messages.length + 1,
      text: `Perfect. Please share your details and we'll ${
        connectType === 'call' ? `call you within 30 minutes (or call us directly at ${contactInfo.phone})` :
        connectType === 'email' ? `send detailed information to ${contactInfo.email}` :
        `schedule your consultation at ${contactInfo.calendly}`
      }.`,
      sender: 'bot',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, connectMessage]);
  };

  const handleContactSubmit = () => {
    setUserInfo({
      name: contactFormData.name,
      email: contactFormData.email,
      company: contactFormData.company
    });
    
    const successMessage: Message = {
      id: messages.length + 1,
      text: `Thank you, ${contactFormData.name}. Your information has been received. Our team will contact you within 30 minutes at ${contactFormData.phone || contactFormData.email}.`,
      sender: 'bot',
      timestamp: new Date(),
      suggestions: ["View Services", "Case Studies", "Technical Info", "Pricing"]
    };
    
    setMessages(prev => [...prev, successMessage]);
    setShowContactForm(false);
    setContactFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleDirectContact = (type: 'call' | 'email' | 'meeting') => {
    switch (type) {
      case 'call':
        window.open(`tel:${contactInfo.phone}`);
        break;
      case 'email':
        window.open(`mailto:${contactInfo.email}`);
        break;
      case 'meeting':
        window.open(contactInfo.calendly, '_blank');
        break;
    }
  };

  const MessageBubble = ({ message }: { message: Message }) => (
    <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs px-4 py-3 rounded-2xl ${
          message.sender === 'user'
            ? 'bg-black text-white'
            : 'bg-white text-gray-900 shadow-sm border border-gray-100'
        }`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
      </div>
    </div>
  );

  const ContactForm = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[10000] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 border-2 border-red-400 bg-black rounded-full flex items-center justify-center">
              <Sparkles className="text-white" size={16} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Connect with Dcodes</h3>
          </div>
          <button
            onClick={() => setShowContactForm(false)}
            className="text-gray-400  hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="space-y-4">
          {['name', 'email', 'phone', 'company'].map((field) => (
            <input
              key={field}
              type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
              placeholder={field === 'phone' ? 'Phone number' : `${field.charAt(0).toUpperCase() + field.slice(1)}`}
              className="w-full border-0 border-b border-gray-200 pb-3 focus:outline-none focus:border-black transition-colors text-gray-900 placeholder-gray-500"
              value={contactFormData[field as keyof ContactFormData]}
              onChange={(e) => setContactFormData({...contactFormData, [field]: e.target.value})}
            />
          ))}
          
          <div className="flex space-x-3 pt-4">
            <button
              onClick={handleContactSubmit}
              className="flex-1 bg-black hover:bg-gray-800 text-white rounded-xl py-4 font-medium transition-colors"
            >
              Submit & Connect
            </button>
            <button
              onClick={() => handleDirectContact('call')}
              className="px-4 border border-gray-300 hover:bg-gray-50 rounded-xl py-4 font-medium transition-colors"
            >
              <Phone size={20} />
            </button>
          </div>
          
          <div className="text-center text-sm text-gray-500 pt-4">
            Or contact us directly:<br />
            <span className="font-medium">{contactInfo.phone}</span> • <span className="font-medium">{contactInfo.email}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-[10000]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative  bottom-15 bg-blue-600 text-white flex justify-center items-center hover:bg-blue-700 rounded-full w-12 h-12 shadow-lg transition-all duration-300 hover:scale-105"
          aria-label="Toggle chat"
        >
          {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
          
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          )}
        </button>
      </div>

      {/* Contact Form */}
      {showContactForm && <ContactForm />}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[32rem] bg-white rounded-2xl shadow-2xl z-[9999] flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-white border-b border-gray-100 p-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Dcodes Technologies</h3>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Online • {contactInfo.phone}</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Quick Contact Buttons */}
          <div className="bg-gray-50 px-6 py-2 border-b border-gray-100 flex justify-between">
            <button
              onClick={() => handleDirectContact('call')}
              className="flex items-center space-x-1 text-xs text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Phone size={12} />
              <span>Call</span>
            </button>
            <button
              onClick={() => handleDirectContact('email')}
              className="flex items-center space-x-1 text-xs text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Mail size={12} />
              <span>Email</span>
            </button>
            <button
              onClick={() => handleDirectContact('meeting')}
              className="flex items-center space-x-1 text-xs text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Calendar size={12} />
              <span>Meeting</span>
            </button>
          </div>

          {/* User Status */}
          {userInfo && (
            <div className="bg-gray-50 px-6 py-3 border-b border-gray-100">
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                {userInfo.name} • {userInfo.company}
              </div>
            </div>
          )}

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/30">
            {messages.map((message) => (
              <div key={message.id}>
                <MessageBubble message={message} />

                {/* Connect Button */}
                {message.hasConnectButton && message.sender === 'bot' && (
                  <div className="flex justify-start mt-3">
                    <button
                      onClick={() => handleConnectClick(message.connectType!)}
                      className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center space-x-2"
                    >
                      {message.connectType === 'call' && <Phone size={14} />}
                      {message.connectType === 'email' && <Mail size={14} />}
                      {message.connectType === 'meeting' && <Calendar size={14} />}
                      <span>
                        {message.connectType === 'call' && 'Call now'}
                        {message.connectType === 'email' && 'Email info'}
                        {message.connectType === 'meeting' && 'Book meeting'}
                      </span>
                    </button>
                  </div>
                )}

                {/* Suggestions */}
                {message.suggestions && message.sender === 'bot' && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {message.suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-full text-xs font-medium border border-gray-200 transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-900 px-4 py-3 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-gray-100 bg-white">
            <div className="flex items-center space-x-3">
              <input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border-0 focus:outline-none text-sm text-gray-900 placeholder-gray-500"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-black hover:bg-gray-800 disabled:bg-gray-300 text-white rounded-full p-2 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MinimalPremiumChatbot;