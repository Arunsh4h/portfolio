import React from 'react'
import { motion } from 'framer-motion'
import Icon from '@/components/Icon'
import classNames from 'clsx'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
}

const Companies = ({ title, list }) => (
  <div className="relative">
    {/* Section title */}
    {title && (
      <motion.h4
        className={classNames(
          'mb-4 text-center text-sm font-medium uppercase tracking-wider text-omega-400',
          'sm:mb-6 sm:text-base',
          'md:mb-8'
        )}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h4>
    )}

    {/* Companies grid */}
    <motion.div
      className={classNames(
        'grid grid-cols-3 gap-4',
        'sm:grid-cols-4 sm:gap-6',
        'md:grid-cols-5 md:gap-8',
        'lg:grid-cols-6'
      )}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {list &&
        list.map(({ icon }, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className={classNames(
              'group flex items-center justify-center',
              'rounded-xl bg-omega-900/30 p-3 backdrop-blur-sm',
              'transition-all duration-300',
              'hover:bg-omega-800/50 hover:shadow-lg hover:shadow-alpha/10',
              'sm:p-4',
              'md:p-5'
            )}
            whileHover={{
              scale: 1.05,
              y: -5,
            }}
            whileTap={{ scale: 0.98 }}
          >
            {icon && (
              <Icon
                {...icon}
                className={classNames(
                  'h-8 w-20 fill-current',
                  'text-omega-500 transition-colors duration-300',
                  'group-hover:text-omega-300',
                  'sm:h-10 sm:w-24',
                  'md:h-12 md:w-28'
                )}
              />
            )}
          </motion.div>
        ))}
    </motion.div>

    {/* Decorative gradient line */}
    <motion.div
      className="mx-auto mt-6 h-px w-1/2 bg-gradient-to-r from-transparent via-omega-700 to-transparent sm:mt-8"
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.8 }}
    />
  </div>
)

export default Companies
