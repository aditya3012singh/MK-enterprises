import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  animate?: boolean;
  className?: string;
}

export default function Logo({ 
  size = 'medium', 
  showText = true, 
  animate = true,
  className = '' 
}: LogoProps) {
  const sizeConfig = {
    small: {
      container: 'w-12 h-12',
      text: 'text-sm',
      spacing: 'space-x-2',
      fontSize: 'text-lg',
      padding: 'p-2'
    },
    medium: {
      container: 'w-16 h-16',
      text: 'text-base',
      spacing: 'space-x-3',
      fontSize: 'text-xl',
      padding: 'p-3'
    },
    large: {
      container: 'w-24 h-24',
      text: 'text-lg',
      spacing: 'space-x-4',
      fontSize: 'text-3xl',
      padding: 'p-4'
    }
  };

  const config = sizeConfig[size];

  // Animation variants
  const containerVariants = {
    initial: { scale: 0, rotate: -180, opacity: 0 },
    animate: { 
      scale: 1, 
      rotate: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 1.2
      }
    }
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(234, 88, 12, 0.3), 0 0 40px rgba(234, 88, 12, 0.2), 0 0 60px rgba(234, 88, 12, 0.1)",
        "0 0 30px rgba(234, 88, 12, 0.5), 0 0 60px rgba(234, 88, 12, 0.3), 0 0 90px rgba(234, 88, 12, 0.2)",
        "0 0 20px rgba(234, 88, 12, 0.3), 0 0 40px rgba(234, 88, 12, 0.2), 0 0 60px rgba(234, 88, 12, 0.1)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-3, 3, -3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const rotatingVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const pulsingDotVariants = {
    animate: {
      scale: [1, 1.3, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const textGradientVariants = {
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const decorativeVariants = {
    animate: {
      rotate: [0, 360],
      scale: [1, 1.1, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className={`flex items-center ${config.spacing} ${className}`}
      variants={animate ? containerVariants : {}}
      initial={animate ? "initial" : "animate"}
      animate="animate"
    >
      {/* Multi-Layered Logo Container */}
      <div className="relative">
        {/* Outer Gradient Ring with Glow */}
        <motion.div
          className={`${config.container} rounded-full relative`}
          variants={animate ? glowVariants : {}}
          animate={animate ? "animate" : ""}
          style={{
            background: 'conic-gradient(from 0deg, #ea580c, #dc2626, #f59e0b, #ea580c)',
            padding: '3px'
          }}
        >
          {/* Inner Gradient Circle with Floating Animation */}
          <motion.div
            className="w-full h-full rounded-full relative overflow-hidden"
            variants={animate ? floatingVariants : {}}
            animate={animate ? "animate" : ""}
            style={{
              background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 50%, #f59e0b 100%)'
            }}
          >
            {/* Divine Symbol Background with Rotation */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center opacity-20"
              variants={animate ? rotatingVariants : {}}
              animate={animate ? "animate" : ""}
            >
              <div className="text-yellow-300 text-2xl">🙏</div>
            </motion.div>

            {/* Sacred Dot Element with Pulsing */}
            <motion.div
              className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full"
              variants={animate ? pulsingDotVariants : {}}
              animate={animate ? "animate" : ""}
              style={{
                boxShadow: '0 0 8px rgba(251, 191, 36, 0.8)'
              }}
            />

            {/* Enhanced MK Typography */}
            <div className={`${config.padding} w-full h-full flex items-center justify-center relative z-10`}>
              <motion.span 
                className={`${config.fontSize} font-bold text-white`}
                style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5), 0 0 10px rgba(255, 255, 255, 0.3)',
                  filter: 'drop-shadow(0 0 2px rgba(251, 191, 36, 0.5))'
                }}
                animate={animate ? {
                  scale: [1, 1.05, 1],
                  transition: { duration: 3, repeat: Infinity }
                } : {}}
              >
                MK
              </motion.span>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-1 -left-1 w-3 h-3 bg-yellow-400 rounded-full opacity-60"
              variants={animate ? decorativeVariants : {}}
              animate={animate ? "animate" : ""}
              style={{
                boxShadow: '0 0 6px rgba(251, 191, 36, 0.6)'
              }}
            />
            <motion.div
              className="absolute -bottom-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full opacity-80"
              variants={animate ? decorativeVariants : {}}
              animate={animate ? "animate" : ""}
              style={{
                animationDelay: '1s',
                boxShadow: '0 0 4px rgba(251, 191, 36, 0.4)'
              }}
            />
          </motion.div>
        </motion.div>

        {/* Additional Floating Elements */}
        {animate && (
          <>
            <motion.div
              className="absolute -top-2 -right-2 w-1 h-1 bg-yellow-400 rounded-full"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0.5
              }}
            />
            <motion.div
              className="absolute -bottom-2 -left-2 w-1 h-1 bg-orange-400 rounded-full"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                rotate: [360, 180, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1.5
              }}
            />
          </>
        )}
      </div>

      {/* Company Text with Gradient Animation */}
      {showText && (
        <motion.div
          initial={animate ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.h1 
            className={`${config.text} font-bold text-gray-900 leading-tight`}
            style={{
              background: 'linear-gradient(135deg, #ea580c, #dc2626, #f59e0b)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
            variants={animate ? textGradientVariants : {}}
            animate={animate ? "animate" : ""}
          >
            MK Enterprises
          </motion.h1>
          <motion.p 
            className={`${size === 'small' ? 'text-xs' : size === 'medium' ? 'text-sm' : 'text-base'} text-orange-600 font-medium leading-tight`}
            initial={animate ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Ma Kanjya Enterprises
          </motion.p>
          <motion.p 
            className={`${size === 'small' ? 'text-xs' : size === 'medium' ? 'text-xs' : 'text-sm'} text-gray-500 leading-tight flex items-center`}
            initial={animate ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.span
              animate={animate ? {
                scale: [1, 1.2, 1],
                transition: { duration: 2, repeat: Infinity }
              } : {}}
              className="mr-1"
            >
              🙏
            </motion.span>
            Blessed by Ma Kanjya
          </motion.p>
        </motion.div>
      )}
    </motion.div>
  );
}