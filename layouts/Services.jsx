// Services01.js
import React, { useEffect, useState } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import Lottie from 'lottie-react';
import ContentRenderer from '@/components/ContentRenderer';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icon';
import AnimatedBackground from '@/components/AnimatedBackground'; // Import the new component

// Utility to get random Lottie animation
const getRandomLottieAnimation = async () => {
  try {
    const response = await fetch('/api/animations');
    const files = await response.json();
    const randomFile = files[Math.floor(Math.random() * files.length)];
    const animationData = await fetch(`/animations/${randomFile}`).then((res) => res.json());
    return animationData;
  } catch (error) {
    console.error('Error fetching random animation:', error);
    const fallbackAnimation = await fetch('/animations/service-1.json').then((res) => res.json());
    return fallbackAnimation;
  }
};

const Services01 = ({ main = {}, services = [] }) => {
  const { scrollYProgress } = useViewportScroll();
  const [lottieAnimations, setLottieAnimations] = useState([]);

  // Load random Lottie animations for each service
  useEffect(() => {
    const loadAnimations = async () => {
      const animations = await Promise.all(services.map(() => getRandomLottieAnimation()));
      setLottieAnimations(animations);
    };
    loadAnimations();
  }, [services]);

  // React Spring animations for cards
  const springProps = useSpring({
    from: { opacity: 0, transform: 'scale(0.9)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { mass: 1, tension: 180, friction: 12 },
  });

  // Scroll-based transformations for cards
  const yTransform = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  // Card animations
  const getCardAnimation = (index) => {
    switch (index % 7) {
      case 2:
        return {
          initial: { opacity: 0, y: 20, scale: 0.9 },
          animate: { opacity: 1, y: 0, scale: 1 },
          hover: { scale: 1.1, boxShadow: '0px 10px 30px rgba(16, 185, 129, 0.3)' },
          transition: { type: 'spring', stiffness: 150 },
        };
      case 3:
        return {
          initial: { opacity: 0, x: -30 },
          animate: { opacity: 1, x: 0 },
          hover: { scale: 1.08, boxShadow: '0px 15px 40px rgba(249, 115, 22, 0.3)' },
          transition: { type: 'spring', damping: 10 },
        };
      case 4:
        return {
          initial: { opacity: 0, y: -40 },
          animate: { opacity: 1, y: 0 },
          hover: { scale: 1.02, rotate: 2, boxShadow: '0px 12px 35px rgba(34, 211, 238, 0.3)' },
          transition: { type: 'spring', stiffness: 120 },
        };
      case 5:
        return {
          initial: { opacity: 0, rotateX: -90 },
          animate: { opacity: 1, rotateX: 0 },
          hover: { scale: 1.1, rotate: -2, boxShadow: '0px 10px 30px rgba(59, 130, 246, 0.5)' },
          transition: { type: 'spring', damping: 12 },
        };
      case 6:
        return {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          hover: { scale: 1.15, boxShadow: '0px 20px 50px rgba(220, 38, 38, 0.4)' },
          transition: { type: 'spring', stiffness: 90 },
        };
      default:
        return {
          initial: { opacity: 0, scale: 0.8, rotate: -5 },
          animate: { opacity: 1, scale: 1, rotate: 0 },
          hover: {
            scale: 1.1,
            rotate: 3,
            boxShadow:
              '0px 15px 40px rgba(255, 0, 83, 0.5), 0px 30px 60px rgba(0, 255, 128, 0.3), 0px 45px 80px rgba(0, 122, 255, 0.2)',
          },
          transition: { type: 'spring', stiffness: 120, damping: 15 },
        };
    }
  };

  return (
    <>
      <AnimatedBackground /> {/* Use the new component here */}
      <animated.div style={springProps} className="relative mx-auto my-auto p-3 md:p-6 lg:p-12">
        <div className="flex flex-col items-center">
          <div className="grid gap-4 md:grid-cols-3 md:gap-12">
            <div className="col-span-1 row-span-2 mb-6 md:m-0">
              <Reveal animation="fade-in slide-in-right" className="prose prose-invert" delay={200}>
                <ContentRenderer source={main} />
              </Reveal>
            </div>
            {services?.map((item, i) => {
              const cardAnimation = getCardAnimation(i);

              return (
                <motion.div
                  key={i}
                  initial={cardAnimation.initial}
                  whileInView={cardAnimation.animate}
                  whileHover={cardAnimation.hover}
                  transition={cardAnimation.transition}
                  viewport={{ once: true }}
                  className="prose relative overflow-hidden rounded-lg bg-white shadow-lg"
                  style={{ y: i % 2 === 0 ? yTransform : yTransform, zIndex: 10 }}
                >
                  {/* Lottie Animation Background */}
                  {lottieAnimations[i] && (
                    <div className="absolute inset-0 opacity-10" style={{ zIndex: -1 }}>
                      <Lottie
                        animationData={lottieAnimations[i]}
                        loop={true}
                        autoplay={true}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                  )}

                  {/* Card Content */}
                  <motion.div
                    className="relative flex flex-col items-center bg-gradient-to-br from-alpha-100 via-alpha to-beta p-8"
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    whileHover={{
                      scale: 1.1,
                      rotate: -3,
                    }}
                    transition={{ type: 'spring', stiffness: 120, damping: 15 }}
                  >
                    {item.icon && (
                      <motion.div
                        whileHover={{
                          scale: 1.2,
                          y: 10,
                          x: 20,
                          z: 0,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 500,
                          damping: 10,
                        }}
                      >
                        <Icon {...item.icon} className="relative z-10 mb-6 h-12 w-12 fill-accent" />
                      </motion.div>
                    )}

                    <motion.h4
                      className="relative z-10 m-0 font-sans text-3xl font-bold text-white"
                      whileHover={{
                        scale: 1.04,
                        color: '#000',
                        transition: {
                          type: 'spring',
                          stiffness: 300,
                          damping: 10,
                        },
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 7,
                        ease: 'easeOut',
                      }}
                    >
                      {item.title}
                    </motion.h4>
                  </motion.div>

                  <motion.div
                    className="p-8 pt-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.2 + 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <ContentRenderer source={item} />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </animated.div>
    </>
  );
};

export default Services01;