import ReactDOM from 'react-dom'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { useSpring, animated } from 'react-spring'
import gsap from 'gsap'
import Lottie from 'lottie-react'
import ContentRenderer from '@/components/ContentRenderer'
import Reveal from '@/components/Reveal'
import Icon from '@/components/Icon'

import ICUN1 from '../public/icons/space/svg-1.svg'
import ICUN2 from '../public/icons/space/svg-2.svg'
import ICUN3 from '../public/icons/space/svg-3.svg'
import ICUN4 from '../public/icons/space/svg-4.svg'
import ICUN5 from '../public/icons/space/svg-5.svg'
import ICUN6 from '../public/icons/space/svg-6.svg'
import ICUN7 from '../public/icons/space/svg-7.svg'
import ICUN8 from '../public/icons/space/svg-8.svg'
import ICUN9 from '../public/icons/space/svg-9.svg'
import ICUN10 from '../public/icons/space/svg-10.svg'
import ICUN11 from '../public/icons/space/svg-11.svg'
import ICUN12 from '../public/icons/space/svg-12.svg'
import ICUN13 from '../public/icons/space/svg-13.svg'
import ICUN14 from '../public/icons/space/svg-14.svg'
import ICUN15 from '../public/icons/space/svg-15.svg'
import ICUN16 from '../public/icons/space/svg-16.svg'
import ICUN17 from '../public/icons/space/svg-17.svg'
import ICUN18 from '../public/icons/space/svg-18.svg'
import ICUN19 from '../public/icons/space/svg-19.svg'
import ICUN20 from '../public/icons/space/svg-20.svg'
import ICUN21 from '../public/icons/space/svg-21.svg'
import ICUN22 from '../public/icons/space/svg-22.svg'

// Utility to get random Lottie animation
const getRandomLottieAnimation = async () => {
  try {
    // Fetch the list of animation files from the public directory
    const response = await fetch('/api/animations')
    const files = await response.json()
    console.log('Fetched files:', files) // Debugging
    const randomFile = files[Math.floor(Math.random() * files.length)]
    const animationData = await fetch(`/animations/${randomFile}`).then((res) => res.json())
    return animationData
  } catch (error) {
    console.error('Error fetching random animation:', error)
    // Fallback to service-1.json if there's an error
    const fallbackAnimation = await fetch('/animations/service-1.json').then((res) => res.json())
    return fallbackAnimation
  }
}

// Background Animation Component

const AnimatedBackground = () => {
  const bgRef = useRef(null)

  useEffect(() => {
    const particles = []
    const particleCount = 50 // Adjust count for performance with SVGs

    // Array of SVG components
    const celestialSVGs = [
      ICUN1,
      ICUN2,
      ICUN3,
      ICUN4,
      ICUN5,
      ICUN6,
      ICUN7,
      ICUN8,
      ICUN9,
      ICUN10,
      ICUN11,
      ICUN12,
      ICUN13,
      ICUN14,
      ICUN15,
      ICUN16,
      ICUN17,
      ICUN18,
      ICUN19,
      ICUN20,
      ICUN21,
      ICUN22,
    ]

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const Particle = celestialSVGs[Math.floor(Math.random() * celestialSVGs.length)] // Random SVG component
      const particle = document.createElement('div')
      particle.className = 'absolute w-6 h-6' // Adjust size with Tailwind classes
      bgRef.current.appendChild(particle)

      // Render the SVG component inside the div
      ReactDOM.render(<Particle />, particle)
      particles.push(particle)

      // Initial position
      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: 0.5 + Math.random() * 0.6, // Random opacity
        scale: 0.4 + Math.random() * 1.4, // Random scale
      })

      // Animation
      gsap.to(particle, {
        duration: 9 + Math.random() * 20,
        x: '+=' + (Math.random() * 600 - 150), // Increased movement range
        y: '+=' + (Math.random() * 500 - 150),
        opacity: Math.random(),
        scale: Math.random() * 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'expo.inOut',
      })
    }

    return () => {
      particles.forEach((particle) => {
        gsap.killTweensOf(particle)
        ReactDOM.unmountComponentAtNode(particle) // Clean up React component
        particle.remove()
      })
    }
  }, [])

  return <div ref={bgRef} className="pointer-events-none fixed inset-0 overflow-hidden" />
}
const Services01 = ({ main = {}, services = [] }) => {
  const { scrollYProgress } = useViewportScroll()
  const [lottieAnimations, setLottieAnimations] = useState([])

  // Load random Lottie animations for each service
  useEffect(() => {
    const loadAnimations = async () => {
      const animations = await Promise.all(services.map(() => getRandomLottieAnimation()))
      setLottieAnimations(animations)
    }
    loadAnimations()
  }, [services]) // Ensure this runs when `services` changes

  // React Spring animations for cards
  const springProps = useSpring({
    from: { opacity: 0, transform: 'scale(0.9)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { mass: 1, tension: 180, friction: 12 },
  })

  // Card animations
  const getCardAnimation = (index) => {
    switch (index % 7) {
      case 2:
        return {
          initial: { opacity: 0, y: 20, scale: 0.9 },
          animate: { opacity: 1, y: 0, scale: 1 },
          hover: { scale: 1.1, boxShadow: '0px 10px 30px rgba(16, 185, 129, 0.3)' },
          transition: { type: 'spring', stiffness: 150 },
        }
      case 3:
        return {
          initial: { opacity: 0, x: -30 },
          animate: { opacity: 1, x: 0 },
          hover: { scale: 1.08, boxShadow: '0px 15px 40px rgba(249, 115, 22, 0.3)' },
          transition: { type: 'spring', damping: 10 },
        }
      case 4:
        return {
          initial: { opacity: 0, y: -40 },
          animate: { opacity: 1, y: 0 },
          hover: { scale: 1.02, rotate: 2, boxShadow: '0px 12px 35px rgba(34, 211, 238, 0.3)' },
          transition: { type: 'spring', stiffness: 120 },
        }
      case 5:
        return {
          initial: { opacity: 0, rotateX: -90 },
          animate: { opacity: 1, rotateX: 0 },
          hover: { scale: 1.1, rotate: -2, boxShadow: '0px 10px 30px rgba(59, 130, 246, 0.5)' },
          transition: { type: 'spring', damping: 12 },
        }
      case 6:
        return {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          hover: { scale: 1.15, boxShadow: '0px 20px 50px rgba(220, 38, 38, 0.4)' },
          transition: { type: 'spring', stiffness: 90 },
        }
      // Add more cases as needed
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
        }
    }
  }

  return (
    <>
      <AnimatedBackground />
      <animated.div style={springProps} className="relative mx-auto my-auto p-3 md:p-6 lg:p-12">
        <div className="flex flex-col items-center">
          <div className="grid gap-4 md:grid-cols-3 md:gap-12">
            <div className="col-span-1 row-span-2 mb-6 md:m-0">
              <Reveal animation="fade-in slide-in-right" className="prose prose-invert" delay={200}>
                <ContentRenderer source={main} />
              </Reveal>
            </div>
            {services?.map((item, i) => {
              const cardAnimation = getCardAnimation(i)
              const y = useTransform(scrollYProgress, [0, 1], [0, i % 2 === 0 ? -50 : 50])

              return (
                <motion.div
                  key={i}
                  initial={cardAnimation.initial}
                  whileInView={cardAnimation.animate}
                  whileHover={cardAnimation.hover}
                  transition={cardAnimation.transition}
                  viewport={{ once: true }}
                  className="prose relative overflow-hidden rounded-lg bg-white shadow-lg"
                  style={{ y, zIndex: 10 }} // Ensure cards are above the background
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
                          stiffness: 500, // Higher stiffness for a more pronounced bounce
                          damping: 10, // Lower damping for a bouncy feel
                        }}
                      >
                        <Icon {...item.icon} className="relative z-10 mb-6 h-12 w-12 fill-accent" />
                      </motion.div>
                    )}

                    <motion.h4
                      className="relative z-10 m-0 font-sans text-3xl font-bold text-white"
                      whileHover={{
                        scale: 1.04, // Subtle scale for professionalism
                        color: '#000', // Gold color for elegance
                        transition: {
                          type: 'spring', // Smooth spring animation
                          stiffness: 300, // Controls the spring stiffness
                          damping: 10, // Controls the bounce effect
                        },
                      }}
                      whileTap={{ scale: 0.95 }} // Subtle tap feedback
                      initial={{ opacity: 0, y: 10 }} // Fade-in animation
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 7, // Duration of the fade-in animation
                        ease: 'easeOut', // Smooth easing
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
              )
            })}
          </div>
        </div>
      </animated.div>
    </>
  )
}

export default Services01
