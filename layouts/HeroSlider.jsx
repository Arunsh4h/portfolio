import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from '@/components/Image'
import classNames from 'clsx'

// Enhanced transitions with smoother animations
const transitions = [
  {
    initial: {
      opacity: 0,
      scale: 1.08,
      filter: 'blur(8px)',
    },
    animate: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
    },
    exit: {
      opacity: 0,
      scale: 0.96,
      filter: 'blur(8px)',
    },
  },
  {
    initial: {
      opacity: 0,
      x: '80%',
      filter: 'blur(8px)',
    },
    animate: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
    },
    exit: {
      opacity: 0,
      x: '-80%',
      filter: 'blur(8px)',
    },
  },
  {
    initial: {
      opacity: 0,
      scale: 0.92,
      y: 30,
      filter: 'blur(8px)',
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
    },
    exit: {
      opacity: 0,
      scale: 0.92,
      y: -30,
      filter: 'blur(8px)',
    },
  },
  {
    initial: {
      opacity: 0,
      clipPath: 'circle(0% at 50% 50%)',
    },
    animate: {
      opacity: 1,
      clipPath: 'circle(100% at 50% 50%)',
    },
    exit: {
      opacity: 0,
      clipPath: 'circle(0% at 50% 50%)',
    },
  },
  {
    initial: {
      opacity: 0,
      rotateY: 15,
      x: 100,
      filter: 'blur(8px)',
    },
    animate: {
      opacity: 1,
      rotateY: 0,
      x: 0,
      filter: 'blur(0px)',
    },
    exit: {
      opacity: 0,
      rotateY: -15,
      x: -100,
      filter: 'blur(8px)',
    },
  },
]

// Enhanced caption variants
const captionVariants = {
  initial: {
    opacity: 0,
    y: 40,
    filter: 'blur(8px)',
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    filter: 'blur(8px)',
    scale: 0.95,
    transition: {
      duration: 0.4,
    },
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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(1)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % (images.length - 1))
    setDirection(1)
    setCurrentTransition(Math.floor(Math.random() * transitions.length))
  }, [images])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + (images.length - 1)) % (images.length - 1))
    setDirection(-1)
    setCurrentTransition(Math.floor(Math.random() * transitions.length))
  }, [images])

  useEffect(() => {
    if (!images?.length || !isAutoPlaying) return
    const timer = setInterval(nextSlide, 8000)
    return () => clearInterval(timer)
  }, [images, isAutoPlaying, nextSlide])

  if (!images?.length) return null

  const currentTransitionSet = transitions[currentTransition]

  return (
    <div
      className={classNames(
        'with-back-plate relative h-full w-full overflow-hidden',
        'hidden md:block',
        'rounded-2xl shadow-2xl shadow-black/30'
      )}
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <AnimatePresence initial={false} mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          initial={currentTransitionSet.initial}
          animate={currentTransitionSet.animate}
          exit={currentTransitionSet.exit}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative h-full w-full transform-gpu"
        >
          <Image
            src={images[currentIndex].src}
            width={1920}
            height={1080}
            alt={images[currentIndex].alt}
            animation="mask-left"
            priority
            className="h-full w-full rounded-2xl object-cover"
          />

          {/* Caption */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`caption-${currentIndex}`}
              variants={captionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={classNames(
                'absolute z-20',
                'bottom-20 left-8 right-8',
                'lg:bottom-24 lg:left-12 lg:right-auto lg:max-w-lg',
                'xl:bottom-28 xl:left-16 xl:max-w-xl'
              )}
            >
              <motion.div
                className={classNames(
                  'rounded-xl px-5 py-3 backdrop-blur-md',
                  'bg-gradient-to-r from-black/70 via-black/60 to-black/40',
                  'border border-white/10',
                  'lg:px-6 lg:py-4',
                  'xl:px-8 xl:py-5'
                )}
              >
                <h2
                  className={classNames(
                    'text-lg font-semibold leading-relaxed text-white',
                    'lg:text-xl',
                    'xl:text-2xl'
                  )}
                >
                  {images[currentIndex].caption}
                </h2>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Gradient overlays */}
          <motion.div
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 via-transparent to-black/20"
          />
          <motion.div
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-black/30 via-transparent to-transparent"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4 lg:px-6">
        <motion.button
          whileHover={{ scale: 1.15, backgroundColor: 'rgba(255,255,255,0.4)' }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className={classNames(
            'flex h-10 w-10 items-center justify-center rounded-full',
            'bg-white/20 backdrop-blur-md',
            'border border-white/20',
            'transition-all duration-300',
            'lg:h-12 lg:w-12'
          )}
          aria-label="Previous slide"
        >
          <svg
            className="h-5 w-5 rotate-180 text-white lg:h-6 lg:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.15, backgroundColor: 'rgba(255,255,255,0.4)' }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className={classNames(
            'flex h-10 w-10 items-center justify-center rounded-full',
            'bg-white/20 backdrop-blur-md',
            'border border-white/20',
            'transition-all duration-300',
            'lg:h-12 lg:w-12'
          )}
          aria-label="Next slide"
        >
          <svg
            className="h-5 w-5 text-white lg:h-6 lg:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 lg:bottom-6 lg:gap-3">
        {images.slice(0, -1).map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx)
              setDirection(idx > currentIndex ? 1 : -1)
              setCurrentTransition(Math.floor(Math.random() * transitions.length))
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="group relative h-2 overflow-hidden rounded-full lg:h-3"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <motion.div
              className={classNames(
                'h-full transition-all duration-500',
                idx === currentIndex
                  ? 'w-8 bg-white lg:w-10'
                  : 'w-2 bg-white/40 group-hover:bg-white/60 lg:w-3'
              )}
              layout
            />
            {idx === currentIndex && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-alpha via-beta to-accent"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute right-4 top-4 z-10 lg:right-6 lg:top-6">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={classNames(
            'rounded-lg px-3 py-1.5 backdrop-blur-md',
            'bg-black/40 border border-white/10',
            'text-sm font-medium text-white/80'
          )}
        >
          {currentIndex + 1} / {images.length - 1}
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSlider
