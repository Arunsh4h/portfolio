import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from '@/components/Image'

// Enhanced transitions with valid easing functions
const transitions = [
  {
    initial: {
      opacity: 0,
      scale: 2,
      rotate: 45,
      filter: 'blur(30px) brightness(2)',
      transformOrigin: 'center',
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      filter: 'blur(0px) brightness(1)',
      transformOrigin: 'center',
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      rotate: -45,
      filter: 'blur(30px) brightness(0)',
      transformOrigin: 'center',
    },
  },
  {
    initial: {
      opacity: 0,
      x: '200%',
      rotateY: 180,
      scale: 0.5,
      filter: 'hue-rotate(90deg)',
    },
    animate: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      filter: 'hue-rotate(0deg)',
    },
    exit: {
      opacity: 0,
      x: '-200%',
      rotateY: -180,
      scale: 0.5,
      filter: 'hue-rotate(-90deg)',
    },
  },
  {
    initial: {
      opacity: 0,
      scale: 0,
      rotate: 360,
      borderRadius: '50%',
      filter: 'contrast(2) saturate(2)',
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      borderRadius: '0%',
      filter: 'contrast(1) saturate(1)',
    },
    exit: {
      opacity: 0,
      scale: 0,
      rotate: -360,
      borderRadius: '50%',
      filter: 'contrast(0) saturate(0)',
    },
  },
  {
    initial: {
      clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
      filter: 'brightness(2) contrast(2)',
    },
    animate: {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      filter: 'brightness(1) contrast(1)',
    },
    exit: {
      clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
      filter: 'brightness(0) contrast(0)',
    },
  },
]

const hoverEffects = [
  {
    scale: 1.1,
    rotate: 5,
    filter: 'brightness(1.3) contrast(1.2) saturate(1.3)',
  },
  {
    scale: 1.15,
    y: -20,
    filter: 'hue-rotate(45deg) brightness(1.2)',
  },
  {
    scale: 0.9,
    rotate: -5,
    filter: 'sepia(0.5) brightness(1.2)',
  },
  {
    scale: 1.1,
    skewX: 10,
    filter: 'contrast(1.3) brightness(1.2)',
  },
]

const overlayVariants = {
  initial: {
    opacity: 0,
    scale: 1.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
  },
}

const HeroSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentTransition, setCurrentTransition] = useState(0)
  const [currentHover, setCurrentHover] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(1)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % (images.length - 1))
    setDirection(1)
    setCurrentTransition(Math.floor(Math.random() * transitions.length))
    setCurrentHover(Math.floor(Math.random() * hoverEffects.length))
  }, [images])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + (images.length - 1)) % (images.length - 1))
    setDirection(-1)
    setCurrentTransition(Math.floor(Math.random() * transitions.length))
    setCurrentHover(Math.floor(Math.random() * hoverEffects.length))
  }, [images])

  useEffect(() => {
    if (!images || images.length <= 1 || !isAutoPlaying) return

    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [images, isAutoPlaying, nextSlide])

  if (!images || images.length === 0) return null

  return (
    <div
      className="with-back-plate perspective-1000 relative hidden h-full w-full overflow-hidden md:block"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          initial={transitions[currentTransition].initial}
          animate={transitions[currentTransition].animate}
          exit={transitions[currentTransition].exit}
          transition={{
            duration: 1.2,
            ease: 'easeInOut',
            opacity: { duration: 0.8 },
          }}
          whileHover={hoverEffects[currentHover]}
          className="relative h-full w-full transform-gpu"
        >
          <div className="relative h-full w-full">
            <Image
              src={images[currentIndex].src}
              width={images[currentIndex].width || 500}
              height={images[currentIndex].height || 600}
              alt={images[currentIndex].alt}
              animation="mask-left"
              priority
              className="h-full w-full rounded-lg object-cover shadow-2xl"
            />

            {/* Multiple layered overlays for dramatic effect */}
            <motion.div
              variants={overlayVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-transparent to-blue-600/30"
              style={{ mixBlendMode: 'overlay' }}
            />

            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-transparent to-yellow-500/20"
              style={{ mixBlendMode: 'color' }}
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />

            {/* Enhanced lighting effects */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ['100%', '-100%'],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 2.5,
                ease: 'linear',
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />

            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"
              animate={{
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Enhanced navigation arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <motion.button
          whileHover={{ scale: 1.2, rotate: -10 }}
          whileTap={{ scale: 0.8, rotate: 0 }}
          onClick={prevSlide}
          className="rounded-full bg-white/30 p-3 backdrop-blur-lg transition-all duration-300 hover:bg-white/40"
        >
          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.8, rotate: 0 }}
          onClick={nextSlide}
          className="rounded-full bg-white/30 p-3 backdrop-blur-lg transition-all duration-300 hover:bg-white/40"
        >
          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      {/* Enhanced progress indicators */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 transform space-x-3">
        {images.slice(0, -1).map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx)
              setCurrentTransition(Math.floor(Math.random() * transitions.length))
              setDirection(idx > currentIndex ? 1 : -1)
            }}
            whileHover={{ scale: 1.3, y: -2 }}
            whileTap={{ scale: 0.7, y: 2 }}
            className="relative h-3 overflow-hidden rounded-full transition-all duration-300"
          >
            <motion.div
              className={`h-full transition-all duration-500 ${
                idx === currentIndex ? 'w-12 bg-white' : 'w-3 bg-white/40'
              }`}
              layout
            />
            {idx === currentIndex && (
              <motion.div
                className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default HeroSlider
