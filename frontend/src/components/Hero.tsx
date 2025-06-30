import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Users, Award, MapPin, Building, Wind, Refrigerator } from 'lucide-react';
import Logo from './Logo';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 pt-16 pb-20 overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div 
        className="absolute inset-0 bg-grid-pattern opacity-5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Blessing */}
            <motion.div 
              className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 px-4 py-2 rounded-full mb-6"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-orange-700 font-medium">🙏 Blessed by Ma Kanjya Devi</span>
            </motion.div>

            {/* Enhanced Logo Display */}
            <motion.div 
              className="flex justify-center lg:justify-start mb-6"
              variants={itemVariants}
            >
              <Logo size="large" showText={false} animate={true} />
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              <motion.span 
                className="text-orange-600"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  background: 'linear-gradient(90deg, #ea580c, #dc2626, #ea580c)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                MK Enterprises
              </motion.span>
              <br />
              <motion.span 
                className="text-2xl md:text-3xl font-normal text-gray-600"
                variants={itemVariants}
              >
                Ma Kanjya Enterprises
              </motion.span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed"
              variants={itemVariants}
            >
              Leading Distributor of <motion.span className="font-semibold text-blue-700" whileHover={{ scale: 1.1 }}>RO Purifiers</motion.span>, 
              <motion.span className="font-semibold text-green-700" whileHover={{ scale: 1.1 }}> Water Coolers</motion.span>, 
              <motion.span className="font-semibold text-cyan-700" whileHover={{ scale: 1.1 }}> Air Conditioners</motion.span>,
              <motion.span className="font-semibold text-emerald-700" whileHover={{ scale: 1.1 }}> Refrigerators</motion.span>,
              <motion.span className="font-semibold text-red-700" whileHover={{ scale: 1.1 }}> CCTV Cameras</motion.span> & 
              <motion.span className="font-semibold text-purple-700" whileHover={{ scale: 1.1 }}> Home Appliances</motion.span>
            </motion.p>

            <motion.p 
              className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              <motion.span className="font-semibold text-indigo-700" whileHover={{ scale: 1.1 }}>Property Dealing Services</motion.span> & 
              <motion.span className="font-semibold text-teal-700" whileHover={{ scale: 1.1 }}> Dealer Network Connections</motion.span>
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-600 mb-6"
              variants={itemVariants}
            >
              Serving dealers across regions with quality products, bulk ordering, property solutions, and extensive business connections
            </motion.p>

            {/* Bulk Order Highlight */}
            <motion.div 
              className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full mb-6 border border-green-200"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(34, 197, 94, 0.2)" }}
              animate={floatingAnimation}
            >
              <span className="text-green-800 font-medium">📦 Bulk Orders Available - Special Dealer Pricing</span>
            </motion.div>

            {/* Location */}
            <motion.div 
              className="flex items-center justify-center lg:justify-start space-x-2 mb-8"
              variants={itemVariants}
            >
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <MapPin className="text-orange-600" size={20} />
              </motion.div>
              <span className="text-gray-700 font-medium">Based in Lucknow, Uttar Pradesh</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
              variants={itemVariants}
            >
              <motion.button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-700 hover:to-red-700 flex items-center space-x-2 shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(234, 88, 12, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span>Get Bulk Quote</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>
              <motion.button
                onClick={scrollToProducts}
                className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 hover:text-white"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#ea580c",
                  color: "#ffffff"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                View Products
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - Owner Photo */}
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <div className="relative inline-block">
              <motion.div 
                className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-gradient-to-r from-orange-400 to-red-400 p-1"
                whileHover={{ scale: 1.05 }}
                animate={floatingAnimation}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <motion.img 
                    src="/WhatsApp Image 2025-06-30 at 09.20.17_5bc0fe25.jpg" 
                    alt="Sonu Singh - Founder & CEO of MK Enterprises"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-full shadow-lg"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
              >
                <Award size={24} />
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-blue-500 text-white p-3 rounded-full shadow-lg"
                animate={{ 
                  rotate: [360, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2.5, repeat: Infinity }
                }}
              >
                <Building size={24} />
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-6"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-gray-900">Yashwant Singh</h3>
              <p className="text-lg text-orange-600 font-medium">Founder & CEO</p>
              <p className="text-gray-600 mt-2">Serving dealers with dedication and integrity</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mt-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { icon: Shield, title: "Quality Products", desc: "Premium quality appliances from trusted brands", color: "blue" },
            { icon: Users, title: "Dealer Network", desc: "Extensive network serving dealers nationwide", color: "green" },
            { icon: Wind, title: "AC & Cooling", desc: "Premium air conditioners and cooling solutions", color: "cyan" },
            { icon: Refrigerator, title: "Refrigeration", desc: "Modern refrigerators with advanced features", color: "emerald" },
            { icon: Building, title: "Property Dealing", desc: "Professional property consultation and dealing services", color: "indigo" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className={`bg-${item.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <item.icon className={`text-${item.color}-700`} size={32} />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}