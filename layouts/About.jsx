import React, { useState } from 'react'
import classNames from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import ContentRenderer from '@/components/ContentRenderer'
import Typewriter from '@/components/Typewriter'
import Reveal from '@/components/Reveal'
import Image from '@/components/Image'
import MarqueeSection from '@/components/MarqueeSection'

const History = ({ title, list }) => {
  const [selectedItem, setSelectedItem] = useState(null)

  // Close the pop-up when clicking outside
  const closePopup = () => setSelectedItem(null)

  return (
    <>
      <h3 className="bg-blck nikbody2 rounded pl-2 pb-1 pt-3 text-3xl font-bold text-blue-600">
        <span className="inline-block">
          {title.split('').map((char, index) => (
            <span
              key={index}
              className="inline-block animate-pulse text-white"
              style={{ animationDelay: `${index * 0.4}s` }}
            >
              {char}
            </span>
          ))}
        </span>
      </h3>
      <Reveal
        animation="fade-in scale-x"
        className="h-1.5 bg-gradient-to-r from-black via-beta to-alpha"
      />
      <div className="mt-6 flex flex-col md:mt-4">
        {list?.map((item, i) => (
          <React.Fragment key={`item-${i}`}>
            {/* Header with Framer Motion, Gradient Animation, and Glitch Effect */}
            <motion.div
              className="relative flex flex-col overflow-hidden rounded-t-lg p-4"
              initial={{
                opacity: 0,
                y: -20,
                background: 'linear-gradient(90deg, #1a1a1a, #000000)',
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                background: [
                  'linear-gradient(90deg, #1a1a1a, #000000)',
                  'linear-gradient(90deg, #1a1a1a, #111111)',
                  'linear-gradient(90deg, #1a1a1a, #000000)',
                ],
              }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                background: {
                  repeat: Infinity,
                  repeatType: 'mirror',
                  duration: 3,
                  ease: 'linear',
                },
              }}
              whileHover={{ scale: 1.02, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
              viewport={{ once: true }} // Ensures animations trigger only once
            >
              {/* Glitch Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0"
                whileInView={{ opacity: 0.1 }}
                whileHover={{
                  opacity: 0.3,
                  x: [0, -5, 5, -5, 5, 0],
                  y: [0, 5, -5, 5, -5, 0],
                  transition: { duration: 0.5, repeat: Infinity, repeatType: 'mirror' },
                }}
                viewport={{ once: true }} // Ensures animations trigger only once
              />
              <div className="relative z-10">
                {/* Company Title (Bold and Clean) */}
                <motion.h1
                  className="mb-1 text-xl font-bold text-white"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                  whileHover={{ scale: 1.05, color: '#3b82f6' }} // Blue color on hover
                  viewport={{ once: true }} // Ensures animations trigger only once
                >
                  {item.name}
                </motion.h1>

                {/* Details Row */}
                <div className="flex items-center justify-between">
                  {/* Place (Subtle Badge with Hover Effect) */}
                  <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }} // Ensures animations trigger only once
                  >
                    <h6 className="rounded-full bg-gray-700 py-1 px-3 text-xs font-semibold tracking-wide text-gray-300">
                      {item.place}
                    </h6>
                  </motion.div>

                  {/* Date (Minimalist) */}
                  <motion.h6
                    className="font-sans text-sm font-medium tracking-wide text-gray-400"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.4, duration: 0.5 }}
                    whileHover={{ scale: 1.05, color: '#3b82f6' }} // Blue color on hover
                    viewport={{ once: true }} // Ensures animations trigger only once
                  >
                    {item.date}
                  </motion.h6>

                  {/* Magnifying Glass Button (Sleek and Modern) */}
                  <motion.button
                    onClick={() => setSelectedItem(item)}
                    className="rounded-full p-2 transition-all duration-200 hover:bg-gray-800"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 + 0.5, duration: 0.5 }}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    viewport={{ once: true }} // Ensures animations trigger only once
                  >
                    <span role="img" aria-label="magnify" className="text-xl text-gray-300">
                      🔍
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Body with Framer Motion and Hover Effect */}
            <motion.div
              className="flex flex-col rounded-b-lg bg-gray-50 p-4 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.02, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)' }}
              viewport={{ once: true }} // Ensures animations trigger only once
            >
              {item.description && (
                <ul className="leading-1.6 list-disc pl-5 font-sans text-base font-normal text-gray-700">
                  {item.description.split('\n').map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + i * 0.1 + 0.7, duration: 0.5 }}
                      whileHover={{ scale: 1.02, color: '#3b82f6' }} // Blue color on hover
                      viewport={{ once: true }} // Ensures animations trigger only once
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>
            <hr className="my-6 border-gray-200" />
          </React.Fragment>
        ))}
      </div>

      {/* Pop-Up for Detailed View with Framer Motion */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup} // Close when clicking outside
          >
            <motion.div
              className="relative w-full max-w-2xl rounded-lg bg-white p-8 shadow-lg"
              initial={{ y: '-100vh', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100vh', opacity: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute right-4 top-4 rounded-full p-2 hover:bg-gray-200"
              >
                <span role="img" aria-label="close" className="text-2xl">
                  ❌
                </span>
              </button>

              {/* Pop-Up Content */}
              <h3 className="text-3xl font-bold text-blue-600">{selectedItem.name}</h3>
              <p className="mt-2 text-lg font-semibold text-gray-600">{selectedItem.place}</p>
              <p className="text-sm text-gray-500">{selectedItem.date}</p>
              <ul className="mt-4 list-disc pl-5 text-lg text-gray-700">
                {selectedItem.description
                  .split('\n')
                  .map((point, index) => point.trim() && <li key={index}>{point}</li>)}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const Skill = ({ title, icon, level, onHover }) => (
  <div className="flex items-center pb-0" onMouseEnter={onHover}>
    {icon && (
      <span role="img" aria-label="skill-icon" className="mr-3 text-2xl">
        🛠️
      </span>
    )}
    <small className="font-bold">{title}</small>
    <div className="ml-auto space-x-px">
      {Array(5)
        .fill(null)
        .map((_, k) => (
          <span
            key={`${title}${k}-f`}
            className={classNames(
              'inline-block h-3.5 w-3.5',
              k + 1 <= level ? 'bg-gradient-to-tr from-accent-700 to-accent' : 'bg-omega-700'
            )}
          />
        ))}
    </div>
  </div>
)

const SkillSet = ({ title, list, onSkillHover }) => (
  <div className="bg-gradient-omega-900 p-6 md:px-12 md:py-8">
    <p className="col-span-3 mt-0 mb-6 self-center border-l-2 border-alpha pl-3 text-white">
      {title}
    </p>
    <div className="grid grid-cols-fluid gap-y-3 gap-x-8 [--tw-fluid-col-min:12rem]">
      {list?.map((props, j) => (
        <Reveal key={j} animation="fade-in" delay={j * 200}>
          <Skill {...props} onHover={() => onSkillHover(props)} />
        </Reveal>
      ))}
    </div>
  </div>
)

const Layout = ({ personal_info = {}, cta = {}, skills_header, skills, history }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  return (
    <div className="mx-auto">
      <div className="prose prose-invert md:flex">
        <div className="relative flex h-screen basis-1/3 flex-col justify-between pb-24 md:h-auto md:items-center md:py-12">
          <div className="not-prose absolute top-0 left-0 h-full w-full bg-omega-900 ">
            {hoveredSkill?.pro?.src ? (
              <Image
                src={hoveredSkill.pro.src}
                alt={hoveredSkill.icon.alt}
                animation="fade-in zoom-out"
                className="object-cover"
                priority
                fill
              />
            ) : (
              personal_info.images?.[0] && (
                <Image
                  src={personal_info.images[0].src}
                  alt={personal_info.images[0].alt}
                  animation="fade-in zoom-out"
                  className="object-cover"
                  priority
                  fill
                />
              )
            )}
            <div className="absolute top-0 left-0 z-20 h-full w-full bg-gradient-to-b from-transparent via-transparent to-black/90" />
          </div>
          <div className="z-10 bg-black p-6 text-center">
            <h3 className="inline">{personal_info.name}</h3>
          </div>
          <div className="z-10 p-6 text-center md:p-8">
            <ContentRenderer source={cta} />
          </div>
        </div>
        <div className="basis-2/3">
          {skills_header && (
            <div className="p-6 md:p-12 ">
              <h3 className="mb-2  ">{skills_header.title}</h3>
              {skills_header.list && (
                <h3 className="inline text-xl sm:text-xl md:text-3xl ">
                  <Typewriter lines={skills_header.list} lineClassName="text-gradient-500" />
                </h3>
              )}
            </div>
          )}

          {skills && (
            <div className="grid grid-cols-1 items-start divide-y divide-omega-700 shadow-xl">
              {skills.map((props, i) => (
                <SkillSet key={i} {...props} onSkillHover={setHoveredSkill} />
              ))}
            </div>
          )}

          <Reveal animation="fade-in slide-in-top" className="prose p-6 dark:prose-invert md:p-12">
            <ContentRenderer source={personal_info} />
          </Reveal>
        </div>
      </div>

      {history && (
        <div className="prose flex-wrap justify-between bg-white p-2 md:flex">
          {history.map((props, i) => (
            <div
              key={i}
              className="neon-scroller flex-1 md:p-2 "
              style={{ overflow: 'auto', maxHeight: '450px' }}
            >
              <History {...props} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Layout
