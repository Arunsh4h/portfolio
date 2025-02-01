import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from '@/components/Image'

// Enhanced transitions with smoother animations
const transitions = [
  {
    initial: {
      opacity: 0,
      scale: 1.1,
      rotate: 2,
      filter: 'blur(10px)',
      transformOrigin: 'center',
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      filter: 'blur(0px)',
      transformOrigin: 'center',
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      rotate: -2,
      filter: 'blur(10px)',
      transformOrigin: 'center',
    },
  },
  {
    initial: {
      opacity: 0,
      x: '100%',
      rotateY: 5,
      filter: 'blur(10px)',
    },
    animate: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      filter: 'blur(0px)',
    },
    exit: {
      opacity: 0,
      x: '-100%',
      rotateY: -5,
      filter: 'blur(10px)',
    },
  },
  {
    initial: {
      opacity: 0,
      scale: 0.9,
      rotate: 1,
      filter: 'blur(10px)',
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      filter: 'blur(0px)',
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      rotate: -1,
      filter: 'blur(10px)',
    },
  },
  {
    initial: {
      opacity: 0,
      clipPath: 'inset(5% 5% 5% 5%)',
      filter: 'blur(10px)',
    },
    animate: {
      opacity: 1,
      clipPath: 'inset(0% 0% 0% 0%)',
      filter: 'blur(0px)',
    },
    exit: {
      opacity: 0,
      clipPath: 'inset(5% 5% 5% 5%)',
      filter: 'blur(10px)',
    },
  },
]

const hoverEffects = [
  {
    scale: 1.05,
    rotate: 1,
    filter: 'brightness(1.1) contrast(1.05)',
  },
  {
    scale: 1.05,
    y: -10,
    filter: 'brightness(1.1)',
  },
  {
    scale: 0.95,
    rotate: -1,
    filter: 'brightness(1.1)',
  },
  {
    scale: 1.05,
    skewX: 2,
    filter: 'brightness(1.1)',
  },
]

// Enhanced caption variants with more dramatic neon effect
const captionVariants = {
  initial: { opacity: 0, y: 30, filter: 'blur(10px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    textShadow: [
      // '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0ff, 0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff',
      // '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #f09, 0 0 80px #f09, 0 0 90px #f09, 0 0 100px #f09, 0 0 150px #f09',
      // '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0ff, 0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff',
    ],
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
      textShadow: {
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    filter: 'blur(10px)',
    // textShadow: '0 0 0px #fff, 0 0 0px #fff, 0 0 0px #fff',
  },
}

// Overlay variants for smooth transitions
const overlayVariants = {
  initial: {
    opacity: 0,
    scale: 1.1,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
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
    if (!images?.length || !isAutoPlaying) return
    const timer = setInterval(nextSlide, 11000)
    return () => clearInterval(timer)
  }, [images, isAutoPlaying, nextSlide])

  if (!images?.length) return null

  return (
    <div
      className="with-back-plate perspective-1000 relative hidden h-full w-full overflow-hidden md:block"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <AnimatePresence initial={false} mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={transitions}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="relative h-full w-full transform-gpu"
        >
          <Image
            src={images[currentIndex].src}
            width={1920}
            height={1080}
            alt={images[currentIndex].alt}
            animation="mask-left"
            priority
            className="h-full w-full rounded-lg object-cover shadow-2xl"
          />

          {/* Caption */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`caption-${currentIndex}`}
              variants={captionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute bottom-32 left-32 top-64 z-20 -translate-x-1/2 transform"
            >
              <motion.div className="rounded-xl bg-black/50 px-8 py-4 backdrop-blur-sm">
                <h2 className="text-3xl font-bold text-white">{images[currentIndex].caption}</h2>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Overlays */}
          <motion.div
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={prevSlide}
          className="rounded-full bg-white/30 p-0 backdrop-blur-lg transition-all hover:bg-white/40"
        ></motion.button>

        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={nextSlide}
          className="rounded-full bg-white/30 p-4 backdrop-blur-lg transition-all hover:bg-white/40"
        >
          <svg
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 91 91"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.6,43.5C31.1,49,25.7,54.8,20.7,60.8c-5.1,6.2-12,13.7-12.7,21.9c-0.1,1.3,1.5,2.5,2.7,2   c7.7-3.1,13.1-11.4,18.6-17.4c6.7-7.3,13.6-14.4,20.9-21c2.8-2.5,1.9-7.3-1.2-9.1C36.3,30,27,18.8,19.7,6.2   C15-1.9,2.2,5.6,7.2,13.5C14.8,25.7,24.6,35.8,36.6,43.5z"
              fill="#ffffff"
            />
            <path
              d="M72.9,43.5C67.3,49,62,54.8,57,60.8C52,67.1,45,74.5,44.3,82.7c-0.1,1.3,1.5,2.5,2.7,2   c7.7-3.1,13.1-11.4,18.6-17.4c6.7-7.3,13.6-14.4,20.9-21c2.8-2.5,1.9-7.3-1.2-9.1C72.6,30,63.3,18.8,56,6.2   c-4.7-8.1-17.5-0.6-12.5,7.3C51.1,25.7,60.9,35.8,72.9,43.5z"
              fill="#ffffff"
            />
          </svg>
        </motion.button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 space-x-3">
        {images.slice(0, -1).map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx)
              setDirection(idx > currentIndex ? 1 : -1)
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="relative h-3 overflow-hidden rounded-full"
          >
            <motion.div
              className={`h-full transition-all duration-500 ${
                idx === currentIndex ? 'w-12 bg-white' : 'w-3 bg-white/40'
              }`}
              layout
            />
            {idx === currentIndex && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 11, repeat: Infinity, ease: 'linear' }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default HeroSlider
