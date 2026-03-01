import React from 'react'
import classNames from 'clsx'
import ContentRenderer from '@/components/ContentRenderer'
import Image from '@/components/Image'
import Sep from '@/components/Sep'
import Reveal from '@/components/Reveal'
import Companies from '@/components/Companies'
import StackedRotatingImages from '@/components/StackedRotatingImages'
import RocketForm from '@/components/RocketForm'
import HeroSlider from './HeroSlider'

import { motion, useScroll, useTransform } from 'framer-motion'
import StatusTracker from '@/components/StatusTracker'

// Floating particles component for visual enhancement
const FloatingParticles = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-2 w-2 rounded-full bg-alpha/20"
        style={{
          left: `${15 + i * 15}%`,
          top: `${20 + (i % 3) * 25}%`,
        }}
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4 + i * 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: i * 0.3,
        }}
      />
    ))}
  </div>
)

// Glowing orb effect
const GlowingOrb = ({ className, delay = 0 }) => (
  <motion.div
    className={classNames(
      'absolute rounded-full blur-3xl',
      className
    )}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
      delay,
    }}
  />
)

const HeroPhoto = ({ main }) => (
  <>
    {/* Desktop Hero Slider */}
    <div className="hidden md:block">
      <HeroSlider images={main.images} />
    </div>
    {/* Mobile Hero Image - Enhanced */}
    <motion.div
      className="relative mx-auto max-w-sm overflow-hidden rounded-2xl md:hidden"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="with-back-plate">
        <Image
          src={main.images[main.images.length - 1].src}
          width={main.images[main.images.length - 1].width || 400}
          height={main.images[main.images.length - 1].height || 500}
          alt={main.images[main.images.length - 1].alt}
          animation="fade-in zoom-out"
          priority
          className="rounded-2xl object-cover"
        />
      </div>
      {/* Mobile image gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-omega-900/60 via-transparent to-transparent" />
    </motion.div>
  </>
)

const HeroAbout = ({ main }) => (
  <Reveal
    animation="fade-in slide-in-right"
    className={classNames(
      'relative max-w-full overflow-hidden',
      'md:mr-32 lg:mr-52',
      'prose prose-invert',
      'prose-headings:my-3 prose-headings:break-words first-of-type:prose-headings:mt-0',
      'prose-p:text-sm prose-p:leading-relaxed prose-p:text-omega-300 prose-p:break-words',
      'sm:prose-headings:my-4 sm:prose-p:text-base',
      'md:prose-headings:my-6 md:prose-p:text-lg',
      'prose-p:block'
    )}
  >
    <ContentRenderer source={main} />
    <StatusTracker />
  </Reveal>
)

const Achievements = ({ achievements }) => (
  <Reveal
    animation="fade-in slide-in-left"
    className={classNames(
      'prose prose-invert relative z-10 mt-6 md:mt-0',
      'grid grid-cols-3 gap-2 sm:gap-4',
      'md:flex md:flex-wrap',
      'md:bg-gradient-omega-900 md:shadow-2xl md:rounded-xl'
    )}
  >
    <Sep line className="col-span-3 hidden md:block" />
    {achievements?.map((item, i) => (
      <motion.div
        key={i}
        className={classNames(
          'flex flex-col items-center justify-center',
          'rounded-xl bg-omega-900/50 p-3 backdrop-blur-sm',
          'sm:p-4',
          'md:flex-1 md:flex-row md:justify-start md:bg-transparent md:p-6 md:backdrop-blur-none'
        )}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.3 + i * 0.15,
          type: 'spring',
          stiffness: 120,
          damping: 12,
        }}
        whileHover={{
          scale: 1.05,
          backgroundColor: 'rgba(255,255,255,0.05)',
          transition: { duration: 0.2 }
        }}
      >
        <motion.h2
          className={classNames(
            'm-0 text-2xl font-bold sm:text-3xl md:pr-4 md:text-4xl lg:text-5xl',
            i === 0 && 'text-accent',
            i === 1 && 'text-beta',
            i >= 2 && 'text-alpha'
          )}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 + i * 0.1, type: 'spring' }}
        >
          {item.number}
        </motion.h2>
        <div className="mt-1 text-center text-xs text-omega-300 sm:text-sm md:mt-0 md:text-left md:text-base">
          {item.text}
        </div>
      </motion.div>
    ))}
  </Reveal>
)

// Enhanced CTA section
const CTASection = ({ cta }) => (
  <motion.div
    className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:items-start md:mt-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8, duration: 0.6 }}
  >
    <div className="prose prose-invert w-full sm:w-auto">
      <ContentRenderer source={cta} />
    </div>
    <div className="hidden sm:block">
      <RocketForm />
    </div>
  </motion.div>
)

// Mobile CTA - Simplified
const MobileCTASection = ({ cta }) => (
  <motion.div
    className="mt-6 sm:hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8, duration: 0.6 }}
  >
    <div className="prose prose-invert text-center">
      <ContentRenderer source={cta} />
    </div>
  </motion.div>
)

// Enhanced Companies Section
const CompaniesSection = ({ companies }) => (
  <motion.div
    className="mt-12 overflow-hidden px-2 pb-4 sm:mt-16 sm:px-4 md:mt-20"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.8 }}
  >
    <Companies {...companies} />
  </motion.div>
)

const Layout = ({ main = {}, cta = {}, achievements = [], companies, solidEnter }) => (
  <div className="relative mx-auto my-auto min-h-screen overflow-x-hidden">
    {/* Background effects wrapper - contains orbs within bounds */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <GlowingOrb className="-left-16 -top-16 h-48 w-48 bg-alpha/10 md:-left-32 md:-top-32 md:h-96 md:w-96" />
      <GlowingOrb className="-right-16 top-1/3 h-32 w-32 bg-beta/10 md:-right-32 md:h-72 md:w-72" delay={2} />
      <GlowingOrb className="-bottom-16 left-1/4 h-40 w-40 bg-accent/10 md:-bottom-32 md:h-80 md:w-80" delay={4} />
    </div>
    <FloatingParticles />

    {/* Main content - ensure no horizontal overflow */}
    <div className="relative z-10 p-4 sm:p-6 md:p-10 lg:p-16 xl:p-20">
      {/* Hero Section */}
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-0 md:text-left lg:items-center">

        {/* Image Section - Mobile first, then desktop order */}
        <motion.div
          className="order-1 w-full max-w-md shrink-0 overflow-hidden md:order-2 md:-ml-20 md:max-w-none md:basis-1/2 lg:-ml-32 xl:-ml-40"
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Stacked rotating images - Desktop only */}
          <div className="hidden md:block">
            <StackedRotatingImages />
          </div>
          <HeroPhoto main={main} />
        </motion.div>

        {/* Text Content Section */}
        <div className="order-2 z-10 w-full text-center md:order-1 md:basis-1/2 md:text-left lg:basis-auto">
          <HeroAbout main={main} />
          <Achievements achievements={achievements} />

          {/* Desktop CTA */}
          <div className="hidden sm:block">
            <CTASection cta={cta} />
          </div>

          {/* Mobile CTA */}
          <MobileCTASection cta={cta} />
        </div>
      </div>

      {/* Companies Section - Now visible on all devices */}
      <CompaniesSection companies={companies} />
    </div>
  </div>
)

export default Layout
