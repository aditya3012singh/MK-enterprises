import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Users, Handshake, Heart, Star, Building, Network } from 'lucide-react';

export default function About() {
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

  const stats = [
    { value: "1000+", label: "Happy Dealers", color: "orange" },
    { value: "6+", label: "Service Categories", color: "green" },
    { value: "25+", label: "States Covered", color: "blue" },
    { value: "99%", label: "Customer Satisfaction", color: "red" }
  ];

  const values = [
    {
      icon: CheckCircle,
      title: "Quality First",
      description: "We partner only with reputable manufacturers and verified dealers",
      color: "blue"
    },
    {
      icon: Target,
      title: "Customer Focus",
      description: "Understanding and meeting our clients' specific business and property needs",
      color: "green"
    },
    {
      icon: Building,
      title: "Property Expertise",
      description: "Professional property consultation and dealing services",
      color: "indigo"
    },
    {
      icon: Star,
      title: "Divine Blessings",
      description: "Guided by Ma Kanjya's blessings in all our business endeavors",
      color: "orange"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-orange-600">MK Enterprises</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded with the divine blessings of Ma Kanjya Devi, serving dealers and property clients with dedication and integrity from the heart of Uttar Pradesh.
          </p>
        </motion.div>

        {/* Founder Story */}
        <motion.div 
          className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <motion.div 
                  className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src="/WhatsApp Image 2025-06-30 at 09.20.17_5bc0fe25.jpg" 
                    alt="Sonu Singh"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Yashwant Singh</h3>
                  <p className="text-orange-600 font-medium">Founder & CEO</p>
                </div>
              </div>
              <motion.p 
                className="text-gray-700 leading-relaxed mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                "With the divine blessings of Ma Kanjya Devi, I established MK Enterprises in the vibrant city of Lucknow, 
                Uttar Pradesh. Our journey began with a simple vision - to serve our dealer partners and property clients with the same devotion 
                and care that we offer to the goddess."
              </motion.p>
              <motion.p 
                className="text-gray-700 leading-relaxed mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                "Over the years, we've built an extensive network of dealers across India. Whether you need quality appliances, 
                property solutions, or want to connect with other dealers for business opportunities, we facilitate these connections 
                with trust and integrity."
              </motion.p>
              <motion.p 
                className="text-gray-700 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                "Every business relationship we build is founded on trust, integrity, and the belief that success comes 
                when we serve others with a pure heart. Ma Kanjya's blessings guide us in every decision we make."
              </motion.p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="bg-gradient-to-br from-orange-100 to-red-100 p-8 rounded-xl"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  boxShadow: [
                    "0 0 0 0 rgba(251, 146, 60, 0.4)",
                    "0 0 0 20px rgba(251, 146, 60, 0)",
                    "0 0 0 0 rgba(251, 146, 60, 0)"
                  ]
                }}
                transition={{ 
                  boxShadow: { duration: 2, repeat: Infinity },
                  scale: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Heart className="text-orange-600 mx-auto mb-4" size={48} />
                </motion.div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Divine Guidance</h4>
                <p className="text-gray-700">
                  Ma Kanjya Devi's blessings inspire our commitment to excellence and service
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <motion.p 
              className="text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              MK Enterprises (Ma Kanjya Enterprises) was established in Lucknow, Uttar Pradesh, with the divine 
              blessings of Ma Kanjya Devi. Under the leadership of Sonu Singh, we have built a reputation as a 
              reliable distributor of essential home and commercial appliances, along with professional property dealing services.
            </motion.p>
            <motion.p 
              className="text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Our comprehensive service range includes RO water purifiers for clean drinking water, 
              efficient water coolers for commercial spaces, advanced CCTV security systems, a wide 
              variety of home appliances, and professional property consultation services for residential and commercial properties.
            </motion.p>
            <motion.p 
              className="text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              From our base in Lucknow, we serve dealers across Uttar Pradesh and neighboring states, 
              understanding the unique needs of our dealer partners and providing them with competitive 
              pricing, reliable supply chains, comprehensive support, and valuable business connections.
            </motion.p>
            <motion.p 
              className="text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <strong>Want to connect with other dealers?</strong> We facilitate introductions and partnerships 
              across various industries through our extensive network. Contact us to explore business opportunities 
              and expand your dealer connections.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={`bg-${stat.color}-50 p-6 rounded-lg text-center border border-${stat.color}-200`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.h4 
                  className={`text-2xl font-bold text-${stat.color}-600 mb-2`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.value}
                </motion.h4>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dealer Network Highlight */}
        <motion.div 
          className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 mb-16 border border-teal-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Network className="text-teal-600 mx-auto mb-4" size={48} />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Extensive Dealer Network</h3>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              One of our unique strengths is our vast network of dealers across India. We don't just serve dealers - 
              we connect them with each other, creating opportunities for mutual growth and business expansion. 
              Whether you're looking for new suppliers, distribution partners, or business collaborations, 
              we can facilitate these valuable connections.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Users, title: "Dealer Connections", desc: "Connect with verified dealers across multiple industries", color: "teal" },
              { icon: Handshake, title: "Business Partnerships", desc: "Facilitate strategic partnerships and collaborations", color: "blue" },
              { icon: Target, title: "Market Expansion", desc: "Help expand your business reach through our network", color: "purple" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className={`bg-${item.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className={`text-${item.color}-700`} size={32} />
                </motion.div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Our Values */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div 
              key={index}
              className="text-center group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className={`bg-${value.color}-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-${value.color}-200 transition-colors`}
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
              >
                <value.icon className={`text-${value.color}-700`} size={36} />
              </motion.div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}