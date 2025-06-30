import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Heart, Building, Users } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
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

  const socialIcons = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" }
  ];

  const services = [
    "RO Water Purifiers",
    "Water Coolers",
    "CCTV Security Systems",
    "Home Appliances",
    { name: "Property Dealing", icon: Building },
    { name: "Dealer Connections", icon: Users }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info with Enhanced Logo */}
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <div className="mb-6">
              <Logo size="large" showText={true} animate={true} className="mb-4" />
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Leading distributor of RO Purifiers, Water Coolers, CCTV Cameras & Home Appliances. 
              Professional property dealing services and extensive dealer network connections. 
              Founded by Sonu Singh in Lucknow, Uttar Pradesh.
            </p>
            <motion.div 
              className="flex items-center space-x-2 mb-4"
              animate={{ 
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="text-red-400" size={16} />
              <span className="text-gray-300 text-sm">Serving with devotion and integrity</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2 mb-6"
              animate={{ 
                x: [0, 5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Users className="text-teal-400" size={16} />
              <span className="text-gray-300 text-sm">Connecting 1000+ dealers across India</span>
            </motion.div>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-2 rounded-lg hover:bg-orange-600 transition-colors"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    backgroundColor: "#ea580c"
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {typeof service === 'string' ? (
                    service
                  ) : (
                    <div className="flex items-center space-x-2">
                      <service.icon size={16} />
                      <span>{service.name}</span>
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              {[
                { icon: Phone, content: ["+91 9129020211"] },
                { icon: Mail, content: ["makanjyaenterprises@gmail.com"] },
                { icon: MapPin, content: ["MK Enterprises", "Commercial Complex", "Lucknow, Uttar Pradesh", "India - 226001"] }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <item.icon size={18} className="text-orange-400 mt-1" />
                  </motion.div>
                  <div>
                    {item.content.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-gray-300">{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-800 pt-8 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400 text-sm">
              © 2025 MK Enterprises (Ma Kanjya Enterprises). All rights reserved. | Founded by Yashwant Singh
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {/* {["Privacy Policy", "Terms of Service", "Dealer Terms", "Property Services"].map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {link}
                </motion.a>
              ))} */}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}