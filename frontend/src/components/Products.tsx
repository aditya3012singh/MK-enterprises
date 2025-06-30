import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Thermometer, Camera, Home, Building, Users, Wind, Refrigerator, Package, Truck } from 'lucide-react';

export default function Products() {
  const products = [
    {
      icon: <Droplets size={48} />,
      title: "RO Water Purifiers",
      description: "Advanced reverse osmosis water purification systems ensuring pure, safe drinking water for homes and offices.",
      features: ["Multi-stage filtration", "TDS control", "UV sterilization", "Mineral retention"],
      image: "https://m.media-amazon.com/images/I/71jMD6amKoL._SL1500_.jpg",
      color: "blue"
    },
    {
      icon: <Thermometer size={48} />,
      title: "Water Coolers",
      description: "Energy-efficient water cooling solutions for commercial and residential applications with reliable performance.",
      features: ["Hot & cold options", "Energy efficient", "Stainless steel tanks", "Easy maintenance"],
      image: "https://tse1.mm.bing.net/th/id/OIP.f-FpQajPqjYjlWz11-_XRAHaIO?rs=1&pid=ImgDetMain&o=7&rm=3",
      color: "green"
    },
    {
      icon: <Wind size={48} />,
      title: "Air Conditioners",
      description: "Premium AC units with advanced cooling technology, energy efficiency, and smart features for optimal comfort.",
      features: ["Inverter technology", "5-star rating", "Smart controls", "Quick cooling"],
      image: "https://static.wixstatic.com/media/4af009_50b99ed648a4405980138b37e56d3abb~mv2.jpg/v1/fill/w_1000,h_580,al_c,q_85,usm_0.66_1.00_0.01/4af009_50b99ed648a4405980138b37e56d3abb~mv2.jpg",
      color: "cyan"
    },
    {
      icon: <Refrigerator size={48} />,
      title: "Refrigerators",
      description: "Modern refrigerators with advanced cooling systems, spacious storage, and energy-efficient operation.",
      features: ["Frost-free technology", "Large capacity", "Energy efficient", "Smart features"],
      image: "https://tse3.mm.bing.net/th/id/OIP.0oiEWu0EKmQz4U9ctbnLNAHaHt?rs=1&pid=ImgDetMain&o=7&rm=3",
      color: "emerald"
    },
    {
      icon: <Camera size={48} />,
      title: "CCTV Security Systems",
      description: "Comprehensive surveillance solutions including cameras, DVRs, and monitoring systems for complete security.",
      features: ["HD recording", "Night vision", "Remote monitoring", "Cloud storage"],
      image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "red"
    },
    {
      icon: <Home size={48} />,
      title: "Home Appliances",
      description: "Wide range of essential home appliances from trusted brands to enhance comfort and convenience.",
      features: ["Energy star rated", "Latest technology", "Extended warranty", "Service support"],
      image: "https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "purple"
    },
    {
      icon: <Building size={48} />,
      title: "Property Dealing Services",
      description: "Professional property consultation, buying, selling, and rental services across Lucknow and surrounding areas.",
      features: ["Residential properties", "Commercial spaces", "Property valuation", "Legal assistance"],
      image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "indigo"
    },
    {
      icon: <Users size={48} />,
      title: "Dealer Network Connections",
      description: "Connect with our extensive network of dealers across various industries for business partnerships and opportunities.",
      features: ["Pan-India network", "Verified dealers", "Business matchmaking", "Partnership facilitation"],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-700",
        hover: "hover:bg-blue-200",
        border: "border-blue-200",
        gradient: "from-blue-500 to-blue-600"
      },
      green: {
        bg: "bg-green-100",
        text: "text-green-700",
        hover: "hover:bg-green-200",
        border: "border-green-200",
        gradient: "from-green-500 to-green-600"
      },
      cyan: {
        bg: "bg-cyan-100",
        text: "text-cyan-700",
        hover: "hover:bg-cyan-200",
        border: "border-cyan-200",
        gradient: "from-cyan-500 to-cyan-600"
      },
      emerald: {
        bg: "bg-emerald-100",
        text: "text-emerald-700",
        hover: "hover:bg-emerald-200",
        border: "border-emerald-200",
        gradient: "from-emerald-500 to-emerald-600"
      },
      red: {
        bg: "bg-red-100",
        text: "text-red-700",
        hover: "hover:bg-red-200",
        border: "border-red-200",
        gradient: "from-red-500 to-red-600"
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-700",
        hover: "hover:bg-purple-200",
        border: "border-purple-200",
        gradient: "from-purple-500 to-purple-600"
      },
      indigo: {
        bg: "bg-indigo-100",
        text: "text-indigo-700",
        hover: "hover:bg-indigo-200",
        border: "border-indigo-200",
        gradient: "from-indigo-500 to-indigo-600"
      },
      teal: {
        bg: "bg-teal-100",
        text: "text-teal-700",
        hover: "hover:bg-teal-200",
        border: "border-teal-200",
        gradient: "from-teal-500 to-teal-600"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-700">Products & Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Comprehensive range of quality products and services with bulk ordering capabilities
          </p>
          
          {/* Bulk Order Highlight */}
          <motion.div 
            className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 px-6 py-3 rounded-full border border-green-200"
            whileHover={{ scale: 1.05 }}
            animate={{ 
              boxShadow: [
                "0 0 0 0 rgba(34, 197, 94, 0.4)",
                "0 0 0 10px rgba(34, 197, 94, 0)",
                "0 0 0 0 rgba(34, 197, 94, 0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Package className="text-green-700 mr-2" size={20} />
            <span className="text-green-800 font-semibold">✨ Bulk Orders Available - Special Dealer Pricing</span>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product, index) => {
            const colors = getColorClasses(product.color);
            
            return (
              <motion.div
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${colors.border} overflow-hidden`}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className={`absolute top-4 right-4 ${colors.bg} ${colors.hover} p-2 rounded-full transition-colors`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={colors.text}>
                      {product.icon}
                    </div>
                  </motion.div>
                  <motion.div 
                    className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${colors.gradient} bg-opacity-90 text-white p-3`}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="text-lg font-bold">{product.title}</h3>
                  </motion.div>
                </div>
                
                {/* Product Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{product.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-center space-x-3"
                          initial={{ x: -10, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          <motion.div 
                            className={`w-2 h-2 rounded-full ${colors.bg}`}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }}
                          />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Bulk Order Badge for applicable products */}
                  {['RO Water Purifiers', 'Water Coolers', 'Air Conditioners', 'Refrigerators', 'CCTV Security Systems', 'Home Appliances'].includes(product.title) && (
                    <motion.div 
                      className="mt-4 pt-4 border-t border-gray-200"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <motion.div 
                        className="flex items-center justify-center space-x-2 bg-green-50 px-3 py-2 rounded-lg border border-green-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Truck className="text-green-600" size={16} />
                        <span className="text-green-700 font-medium text-sm">Bulk Orders Available</span>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bulk Ordering Section */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <motion.div 
              className="flex items-center justify-center space-x-3 mb-4"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Package className="text-white" size={48} />
              <h3 className="text-3xl font-bold">Bulk Ordering & Dealer Benefits</h3>
            </motion.div>
            <p className="text-green-100 text-lg max-w-4xl mx-auto">
              Special pricing and benefits for bulk orders. Perfect for dealers, contractors, and businesses 
              looking to stock quality products at competitive rates.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
  { icon: Package, value: "10+ Units", desc: "Minimum Bulk Order"  },
  { icon: Truck, value: "Free", desc: "Delivery on Bulk Orders" },
  {
    icon: () => (
      <span className="text-white text-2xl font-bold">%</span>
    ),
    value: "15-25%",
    desc: "Bulk Discount"
  },
  {
    icon: () => (
      <span className="text-white text-2xl font-bold">⚡</span>
    ),
    value: "7-15",
    desc: "Days Delivery"
  }
].map((item, index) => (
  <motion.div
    key={index}
    className="text-center"
    variants={itemVariants}
    whileHover={{ scale: 1.1 }}
  >
    <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
      {typeof item.icon === "function" && item.icon.name === "" // anonymous function
        ? item.icon() || "@"
        : React.createElement(item.icon, {
            className: "text-white",
            size: 32
          })}
    </div>
    <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
    <div className="text-green-200 text-sm">{item.desc}</div>
  </motion.div>
))}

          </motion.div>

          <motion.div 
            className="bg-white bg-opacity-10 rounded-xl p-6"
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
          >
            <h4 className="text-xl font-bold text-white mb-4 text-center">Bulk Order Categories</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Droplets, name: "RO Purifiers", color: "blue-300" },
                { icon: Thermometer, name: "Water Coolers", color: "green-300" },
                { icon: Wind, name: "Air Conditioners", color: "cyan-300" },
                { icon: Refrigerator, name: "Refrigerators", color: "emerald-300" },
                { icon: Camera, name: "CCTV Systems", color: "red-300" },
                { icon: Home, name: "Home Appliances", color: "purple-300" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className={`text-${item.color}`} size={20} />
                  <span className="text-white">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Place a Bulk Order?</h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Join our network of successful dealers and gain access to premium products, bulk pricing, 
              property opportunities, and comprehensive business support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 flex items-center space-x-2"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Package size={20} />
                <span>Request Bulk Quote</span>
              </motion.button>
              <motion.button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#ffffff",
                  color: "#ea580c"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Connect with Yashwant Singh
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}