import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Building, Users, Package, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    serviceType: 'products',
    dealerType: 'new',
    bulkOrder: false,
    quantity: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('https://mk-enterprises.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            subject: '',
            message: '',
            serviceType: 'products',
            dealerType: 'new',
            bulkOrder: false,
            quantity: ''
          });
        }, 5000);
      } else {
        setSubmitError(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
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

  const services = [
    {
      icon: CheckCircle,
      title: "Product Distribution",
      description: "RO Purifiers, Water Coolers, AC, Fridge, CCTV & Home Appliances",
      color: "blue"
    },
    {
      icon: Package,
      title: "Bulk Orders",
      description: "Special pricing for bulk orders with free delivery",
      color: "green"
    },
    {
      icon: Building,
      title: "Property Dealing",
      description: "Residential & Commercial Property Services",
      color: "indigo"
    },
    {
      icon: Users,
      title: "Dealer Connections",
      description: "Connect with 1000+ verified dealers across India",
      color: "teal"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In <span className="text-orange-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to place a bulk order, start a partnership, explore property opportunities, or connect with other dealers? 
            Contact Yashwant Singh and discover how we can help grow your business together.
          </p>
        </motion.div>

        {/* Service Options */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br from-${service.color}-50 to-${service.color}-100 p-6 rounded-xl border border-${service.color}-200 text-center`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className={`bg-${service.color}-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <service.icon className="text-white" size={32} />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            {/* Owner Info */}
            <motion.div 
              className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl mb-8 border border-orange-200"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <motion.div 
                  className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <img 
                    src="/WhatsApp Image 2025-06-30 at 09.20.17_5bc0fe25.jpg" 
                    alt="Yashwant Singh"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Yashwant Singh</h4>
                  <p className="text-orange-600 font-medium">Founder & CEO</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                "I personally ensure every dealer partnership, bulk order, and property deal is built on trust and mutual success."
              </p>
              <p className="text-gray-700 text-sm font-medium">
                💼 Need dealer connections? I can introduce you to verified dealers across India!
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {[
                { icon: Phone, title: "Phone Numbers", content: ["+91  9129020211"], color: "blue" },
                { icon: Mail, title: "Email Address", content: ["makanjyaenterprises@gmail.com"], color: "green" },
                { icon: MapPin, title: "Office Address", content: ["MK Enterprises", "Commercial Complex", "Lucknow, Uttar Pradesh", "India - 226001"], color: "orange" },
                { icon: Clock, title: "Business Hours", content: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"], color: "red" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div 
                    className={`bg-${item.color}-100 p-3 rounded-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <item.icon className={`text-${item.color}-700`} size={24} />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    {item.content.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-gray-600">{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div 
                      className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 360, 0]
                      }}
                      transition={{ duration: 1 }}
                    >
                      <CheckCircle className="text-green-700" size={40} />
                    </motion.div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h4>
                    <p className="text-gray-600 mb-4">Thank you for your interest. You will receive a confirmation email shortly.</p>
                    <p className="text-gray-600">Sonu Singh will get back to you within 24 hours with bulk pricing and details.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {submitError && (
                      <motion.div 
                        className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="text-red-600" size={20} />
                        <p className="text-red-700">{submitError}</p>
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                          placeholder="Enter your full name"
                        />
                      </motion.div>

                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                          placeholder="Enter your email"
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                          placeholder="Enter your phone number"
                        />
                      </motion.div>

                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                          placeholder="Enter your company name"
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                          Service Interest
                        </label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        >
                          <option value="products">Product Distribution</option>
                          <option value="bulk">Bulk Orders</option>
                          <option value="property">Property Dealing</option>
                          <option value="dealers">Dealer Connections</option>
                          <option value="all">All Services</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="dealerType" className="block text-sm font-medium text-gray-700 mb-2">
                          Business Type
                        </label>
                        <select
                          id="dealerType"
                          name="dealerType"
                          value={formData.dealerType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        >
                          <option value="new">New Dealer</option>
                          <option value="existing">Existing Dealer</option>
                          <option value="distributor">Sub-Distributor</option>
                          <option value="retailer">Retailer</option>
                          <option value="property">Property Client</option>
                          <option value="network">Seeking Dealer Connections</option>
                          <option value="bulk">Bulk Buyer</option>
                        </select>
                      </div>
                    </div>

                    {/* Bulk Order Section */}
                    <motion.div 
                      className="bg-green-50 p-4 rounded-lg border border-green-200"
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <input
                          type="checkbox"
                          id="bulkOrder"
                          name="bulkOrder"
                          checked={formData.bulkOrder}
                          onChange={handleChange}
                          className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                        />
                        <label htmlFor="bulkOrder" className="text-sm font-medium text-gray-700">
                          I'm interested in bulk orders (10+ units)
                        </label>
                      </div>
                      
                      <AnimatePresence>
                        {formData.bulkOrder && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                              Approximate Quantity
                            </label>
                            <input
                              type="text"
                              id="quantity"
                              name="quantity"
                              value={formData.quantity}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                              placeholder="e.g., 50 RO Purifiers, 25 ACs, etc."
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="Enter subject"
                      />
                    </motion.div>

                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your requirements, bulk order needs, property interests, dealer connection requirements, or any questions you have..."
                      ></textarea>
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-700 hover:to-red-700 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ 
                        scale: isSubmitting ? 1 : 1.02,
                        boxShadow: isSubmitting ? "none" : "0 10px 25px rgba(234, 88, 12, 0.3)"
                      }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          <span>{formData.bulkOrder ? 'Request Bulk Quote' : 'Send Message'}</span>
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}