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
              className="relative flex flex-col overflow-hidden  bg-white p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                borderLeft: '2px solid #1e293b', // Blue border on the left
                borderRight: '2px solid #1e293b', // Blue border on the right
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                },
              }}
              whileHover={{
                y: -2, // Slight upward lift on hover
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)', // Soft shadow on hover
                borderLeft: '3px solid #171717', // Blue border on the left
                borderRight: '3px solid #171717', // Blue border on the right
                // borderBottom: '3px solid #323232', // Blue border on the bottom
                transition: { duration: 0.3 }, // Smooth transition
              }}
              viewport={{ once: true }} // Only animate once
            >
              {item.description && (
                <div className="relative space-y-5">
                  {item.description
                    .split('\n')
                    .filter((point) => point.trim())
                    .map((point, index) => (
                      <motion.div
                        key={index}
                        className="group relative overflow-hidden rounded-lg border-l-4 border-blue-500 bg-gradient-to-r from-blue-50/50 to-transparent px-6 py-4"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                          transition: {
                            type: 'spring',
                            stiffness: 100,
                            damping: 15,
                            delay: index * 0.1,
                          },
                        }}
                        whileHover={{
                          x: 5,
                          borderLeftWidth: '6px',
                          background: 'linear-gradient(to right, rgb(239, 246, 255), transparent)',
                          transition: { duration: 0.2 },
                        }}
                        viewport={{ once: true }}
                      >
                        <motion.span
                          className="block font-medium leading-relaxed text-gray-700"
                          whileHover={{ color: '#2563eb' }}
                        >
                          <span
                            className="mr-3"
                            style={{ width: '24px', height: '24px', display: 'inline-block' }}
                          >
                            {/* Inline SVG */}
                            <svg
                              version="1.0"
                              xmlns="http://www.w3.org/2000/svg"
                              width="25.000000pt"
                              height="25.000000pt"
                              viewBox="0 0 497.000000 510.000000"
                              preserveAspectRatio="xMidYMid meet"
                            >
                              <g
                                transform="translate(0.000000,510.000000) scale(0.100000,-0.100000)"
                                fill="#000000"
                                stroke="none"
                              >
                                <path
                                  d="M2423 5083 c-8 -3 -12 -22 -11 -51 l1 -47 4 40 c7 72 18 56 19 -28 1
-49 -1 -70 -5 -52 -4 17 -10 -73 -13 -200 -4 -126 -10 -240 -13 -252 -7 -20
-4 -23 22 -23 21 0 33 7 42 24 8 13 11 28 8 33 -3 5 0 36 7 69 8 34 16 148 19
271 3 178 2 213 -10 217 -17 7 -53 6 -70 -1z"
                                />
                                <path d="M2502 4590 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" />
                                <path d="M2492 4500 c0 -19 2 -27 5 -17 2 9 2 25 0 35 -3 9 -5 1 -5 -18z" />
                                <path d="M2511 4494 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
                                <path
                                  d="M2375 4420 c-8 -16 -15 -36 -15 -45 0 -9 7 -29 15 -45 15 -29 18 -30
84 -30 45 0 72 5 80 13 20 25 24 73 7 106 -16 30 -18 31 -86 31 -67 0 -70 -1
-85 -30z m13 -40 c1 -23 -3 -38 -9 -35 -10 7 -12 36 -3 59 9 24 12 20 12 -24z
m162 -5 c0 -31 -13 -46 -30 -34 -11 8 -12 12 -2 16 6 2 12 19 12 36 0 24 3 28
10 17 5 -8 10 -24 10 -35z m-120 5 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6
8 10 11 10 2 0 4 -4 4 -10z m65 -40 c-3 -5 -1 -10 5 -10 6 0 8 -4 5 -10 -9
-15 -30 9 -31 36 -2 20 0 21 13 9 8 -8 11 -19 8 -25z m-31 -6 c8 -21 8 -24 -3
-24 -5 0 -11 9 -14 20 -6 24 8 27 17 4z"
                                />
                                <path
                                  d="M2279 4327 c-19 -34 -89 -154 -154 -267 -65 -113 -175 -304 -245
-425 -70 -121 -177 -308 -239 -415 -62 -107 -122 -210 -132 -229 l-20 -34 52
44 c87 75 131 107 204 150 39 23 80 49 93 58 12 9 133 207 267 441 l245 425 0
103 c0 61 -5 112 -12 125 -6 12 -14 36 -17 54 l-6 32 -36 -62z m41 -49 c0 -11
-447 -798 -572 -1008 -59 -100 -101 -150 -113 -138 -2 2 11 28 29 58 18 30
169 292 336 582 166 291 306 525 311 522 5 -3 9 -10 9 -16z"
                                />
                                <path
                                  d="M2600 4365 c-1 -17 -7 -41 -15 -55 -10 -17 -14 -58 -15 -129 l0 -104
216 -376 c119 -207 232 -402 251 -433 28 -48 45 -63 106 -96 72 -40 191 -126
256 -186 l34 -31 -20 35 c-43 72 -630 1091 -706 1225 -44 77 -86 149 -94 160
-12 18 -13 18 -13 -10z"
                                />
                                <path
                                  d="M2403 4236 c21 -153 16 -472 -9 -573 -6 -21 -3 -23 37 -23 l44 0 3
47 c2 26 8 50 14 54 7 5 12 84 13 230 2 123 6 243 10 267 l8 42 -63 0 -63 0 6
-44z m41 -38 c3 -40 2 -116 -3 -168 l-8 -95 -2 76 c0 42 -4 117 -7 167 -5 63
-4 92 4 92 6 0 13 -32 16 -72z"
                                />
                                <path d="M2512 3735 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z" />
                                <path d="M2522 3665 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z" />
                                <path d="M2502 3660 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" />
                                <path
                                  d="M2357 3581 c-9 -16 -17 -43 -17 -61 0 -18 8 -45 17 -61 17 -28 19
-29 105 -29 87 0 88 0 103 30 20 38 19 85 -2 121 -17 28 -19 29 -103 29 -84 0
-86 -1 -103 -29z m173 -11 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10
10 10 6 0 10 -4 10 -10z m-164 -56 c1 -34 -2 -51 -7 -42 -13 20 -9 98 5 98 1
0 2 -25 2 -56z m204 1 c0 -16 -5 -37 -10 -45 -6 -10 -10 -11 -10 -2 0 6 -3 11
-7 10 -5 -2 -8 1 -8 7 0 5 6 8 14 7 11 -3 12 6 7 40 -4 30 -3 39 4 28 5 -8 10
-28 10 -45z m-150 5 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0
4 -4 4 -10z m120 0 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6
0 10 -4 10 -10z m-50 -10 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10
10 6 0 10 -4 10 -10z m-29 -43 c-13 -13 -26 -3 -16 12 3 6 11 8 17 5 6 -4 6
-10 -1 -17z m43 12 c-3 -6 0 -15 7 -20 7 -4 10 -12 5 -16 -5 -4 -11 -2 -13 5
-3 6 -9 10 -14 6 -11 -6 -11 -2 -3 20 3 9 10 16 16 16 5 0 6 -5 2 -11z m-77
-35 c-9 -9 -28 6 -21 18 4 6 10 6 17 -1 6 -6 8 -13 4 -17z"
                                />
                                <path
                                  d="M2394 3198 c0 -112 -3 -254 -8 -315 l-8 -113 41 0 c36 0 41 3 42 23
1 21 1 21 8 -3 6 -18 10 -4 15 55 10 116 13 127 15 60 1 -33 6 -78 10 -100 5
-26 7 4 5 85 l-3 125 11 -122 c6 -68 14 -123 20 -123 5 0 7 4 4 8 -12 19 -26
414 -18 515 l7 107 -71 0 -71 0 1 -202z m35 60 c0 -73 -4 -151 -8 -173 -7 -30
-9 -8 -10 86 0 69 -4 147 -7 173 -6 38 -4 46 10 46 14 0 16 -16 15 -132z"
                                />
                                <path
                                  d="M2235 3285 c-185 -33 -362 -105 -524 -212 -109 -72 -278 -241 -354
-354 -411 -617 -246 -1452 368 -1856 133 -88 334 -171 475 -197 l35 -6 0 74 0
73 -50 13 c-63 16 -223 79 -231 91 -3 5 19 0 48 -12 67 -27 206 -69 230 -69
10 0 18 4 18 9 0 5 11 23 25 39 30 36 43 110 51 307 7 164 -8 360 -30 384 -25
27 -46 88 -46 130 0 47 12 83 45 131 35 52 49 203 43 447 l-6 198 -32 60 c-27
52 -31 67 -26 109 3 28 17 66 31 88 22 33 28 57 35 151 6 62 10 141 10 176 l0
63 -57 -7 c-78 -10 -186 -39 -271 -74 -40 -16 -72 -27 -72 -25 0 2 21 14 48
28 70 35 197 76 280 89 l72 12 0 77 c0 90 7 86 -115 63z m-105 -288 c-26 -58
-35 -151 -21 -201 13 -48 6 -61 -10 -20 -15 39 -23 115 -15 157 6 30 56 121
63 113 2 -2 -6 -23 -17 -49z m-83 -48 c-19 -37 -22 -60 -22 -151 0 -58 -3
-104 -6 -102 -14 8 -31 125 -25 167 6 41 61 145 71 135 3 -3 -5 -24 -18 -49z
m-92 -61 c-19 -40 -39 -97 -45 -127 -15 -78 -12 -220 5 -276 19 -64 13 -68
-12 -8 -52 123 -56 259 -10 348 25 50 83 135 92 135 2 0 -11 -33 -30 -72z
m-106 -45 c-59 -118 -81 -216 -82 -358 0 -110 8 -165 38 -250 6 -19 6 -20 -9
-1 -23 28 -64 161 -76 244 -13 95 1 184 42 265 31 63 108 176 119 177 4 0 -11
-35 -32 -77z m-175 -117 c-30 -63 -66 -157 -80 -212 -49 -189 -42 -444 16
-596 27 -72 16 -74 -16 -2 -68 152 -95 269 -96 410 -1 145 29 236 125 379 44
65 97 135 102 135 2 0 -21 -51 -51 -114z m-223 -158 c-77 -172 -110 -310 -118
-488 -9 -203 22 -393 88 -538 34 -76 32 -92 -4 -30 -74 128 -137 297 -157 420
-7 42 -10 121 -8 179 5 116 25 186 87 309 43 85 131 224 137 217 3 -2 -9 -33
-25 -69z"
                                />
                                <path
                                  d="M2570 3226 l0 -76 34 0 c19 0 69 -7 113 -15 456 -87 812 -427 933
-890 27 -103 38 -329 21 -445 -37 -249 -144 -468 -316 -649 -171 -179 -365
-289 -622 -351 l-41 -10 -4 -65 c-1 -36 -1 -65 2 -65 29 1 193 48 264 77 450
180 764 585 827 1068 15 119 6 344 -20 455 -56 245 -168 452 -341 634 -210
220 -494 362 -797 401 l-53 7 0 -76z"
                                />
                                <path
                                  d="M2570 3053 c0 -116 20 -286 35 -303 22 -25 45 -86 45 -122 0 -18 -14
-61 -30 -95 -27 -56 -31 -77 -39 -201 -13 -205 10 -464 44 -502 52 -58 59
-159 15 -236 -38 -69 -50 -145 -50 -334 0 -197 20 -341 54 -381 13 -15 26 -34
28 -41 6 -16 137 19 250 68 229 98 455 311 568 534 86 171 123 324 123 520 1
282 -82 521 -258 738 -178 221 -457 379 -737 417 l-48 6 0 -68z"
                                />
                                <path
                                  d="M2353 2728 c-17 -23 -26 -41 -17 -35 5 3 9 -25 9 -64 0 -38 -1 -69
-3 -69 -1 0 -7 10 -12 23 -6 15 -9 17 -9 6 -1 -9 8 -28 20 -43 21 -26 23 -27
121 -24 96 3 102 4 121 30 26 35 26 106 0 151 l-19 32 -101 3 c-72 2 -103 -1
-110 -10z m187 -38 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6
0 10 -4 10 -10z m50 -66 c0 -22 -7 -49 -15 -60 -13 -17 -13 -16 -4 16 5 19 7
53 4 75 -5 29 -3 36 4 25 6 -8 11 -33 11 -56z m-39 3 c-13 -13 -26 -3 -16 12
3 6 11 8 17 5 6 -4 6 -10 -1 -17z m-141 3 c0 -5 -4 -10 -10 -10 -5 0 -10 5
-10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m82 -15 c0 -5 -5 -11 -11 -13 -6 -2
-11 4 -11 13 0 9 5 15 11 13 6 -2 11 -8 11 -13z m15 -45 c-13 -21 -27 -26 -27
-10 0 6 5 10 10 10 6 0 9 3 9 8 -3 16 1 23 11 17 6 -4 5 -13 -3 -25z m53 15
c0 -8 -4 -15 -9 -15 -13 0 -22 16 -14 24 11 11 23 6 23 -9z m-100 -10 c0 -8
-4 -15 -10 -15 -5 0 -10 7 -10 15 0 8 5 15 10 15 6 0 10 -7 10 -15z m-42 -26
c-2 -6 -8 -10 -13 -10 -5 0 -11 4 -13 10 -2 6 4 11 13 11 9 0 15 -5 13 -11z
m52 -9 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10
-10z m60 0 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4
10 -10z"
                                />
                                <path
                                  d="M2374 2453 c19 -131 13 -477 -10 -569 -6 -23 -5 -24 59 -24 l64 0 8
93 c6 70 10 85 15 62 l8 -30 1 35 c9 215 21 411 27 438 l7 32 -93 0 -92 0 6
-37z m44 -104 c1 -63 -2 -139 -7 -169 -8 -51 -9 -46 -10 56 0 61 -4 139 -8
174 -5 51 -4 62 8 58 11 -4 15 -31 17 -119z"
                                />
                                <path
                                  d="M1039 2177 c-42 -73 -135 -233 -206 -357 -71 -124 -174 -301 -228
-395 -54 -93 -130 -224 -168 -290 -110 -188 -112 -192 -112 -266 0 -55 4 -72
28 -108 34 -51 102 -96 168 -110 60 -13 1585 -14 1554 -1 -11 4 -63 24 -116
44 -53 20 -135 59 -183 86 l-86 50 -551 0 c-340 0 -557 4 -569 10 -25 13 -41
65 -30 94 4 13 37 72 73 132 35 60 153 264 263 454 l199 345 7 140 c4 77 14
176 22 219 9 44 15 81 13 82 -1 2 -37 -56 -78 -129z m26 -69 c-4 -13 -9 -30
-11 -39 -4 -15 -51 -100 -291 -524 -372 -658 -373 -659 -373 -697 0 -19 13
-43 42 -75 l43 -47 -35 21 c-81 50 -91 121 -33 236 66 130 648 1146 656 1147
5 0 5 -10 2 -22z"
                                />
                                <path
                                  d="M3804 2290 c15 -57 36 -241 36 -325 0 -75 4 -96 23 -130 13 -22 134
-231 269 -465 135 -234 248 -435 252 -447 8 -26 -16 -78 -39 -87 -9 -3 -265
-6 -568 -6 -540 0 -553 -1 -582 -21 -54 -37 -188 -102 -280 -135 l-90 -33 790
2 790 2 52 24 c62 27 115 83 133 136 17 51 7 137 -21 183 -23 39 -409 707
-567 982 -127 221 -193 334 -200 340 -3 3 -2 -6 2 -20z"
                                />
                                <path d="M2533 2045 c0 -22 2 -30 4 -17 2 12 2 30 0 40 -3 9 -5 -1 -4 -23z" />
                                <path d="M2541 1944 c1 -21 5 -50 9 -64 5 -16 6 -2 3 35 -7 69 -13 86 -12 29z" />
                                <path d="M2523 1915 c0 -33 2 -45 4 -27 2 18 2 45 0 60 -2 15 -4 0 -4 -33z" />
                                <path d="M2503 1895 c0 -22 2 -30 4 -17 2 12 2 30 0 40 -3 9 -5 -1 -4 -23z" />
                                <path
                                  d="M2331 1804 c-12 -15 -26 -44 -33 -65 -13 -46 -1 -100 33 -143 20 -25
24 -26 128 -26 100 0 109 2 130 24 48 51 51 151 4 206 -25 30 -25 30 -133 30
-105 0 -109 -1 -129 -26z m-1 -59 c-5 -24 -5 -56 0 -80 13 -55 12 -64 -5 -35
-17 29 -19 98 -5 136 15 38 21 26 10 -21z m222 30 c0 -5 -5 -11 -11 -13 -6 -2
-11 4 -11 13 0 9 5 15 11 13 6 -2 11 -8 11 -13z m58 -35 c12 -43 -1 -113 -22
-126 -7 -5 -9 -2 -5 9 14 37 18 85 9 124 -12 53 4 47 18 -7z m-40 -36 c0 -9
-5 -14 -12 -12 -18 6 -21 28 -4 28 9 0 16 -7 16 -16z m-160 -4 c0 -5 -7 -10
-15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z m90 -16 c0 -9 -5
-14 -12 -12 -18 6 -21 28 -4 28 9 0 16 -7 16 -16z m21 -37 c-13 -13 -26 -3
-16 12 3 6 11 8 17 5 6 -4 6 -10 -1 -17z m59 8 c0 -8 -7 -15 -15 -15 -8 0 -15
7 -15 15 0 8 7 15 15 15 8 0 15 -7 15 -15z m-110 -14 c0 -14 -18 -23 -30 -16
-6 4 -8 11 -5 16 8 12 35 12 35 0z m-54 -22 c10 -17 -13 -36 -27 -22 -12 12
-4 33 11 33 5 0 12 -5 16 -11z m94 0 c0 -5 4 -8 9 -4 10 5 27 -13 19 -21 -6
-6 -58 19 -58 29 0 4 7 7 15 7 8 0 15 -5 15 -11z m-40 -24 c0 -8 -4 -15 -10
-15 -5 0 -10 7 -10 15 0 8 5 15 10 15 6 0 10 -7 10 -15z"
                                />
                                <path
                                  d="M2363 1483 c10 -78 2 -467 -11 -530 l-9 -43 73 0 c81 0 78 -3 87 75
3 23 5 20 7 -15 4 -54 12 33 29 300 6 96 15 199 20 228 l8 52 -107 0 -107 0
10 -67z m45 -81 c1 -67 -2 -143 -7 -169 -7 -41 -9 -29 -10 78 0 69 -4 148 -8
174 -5 38 -3 47 8 43 11 -4 15 -33 17 -126z"
                                />
                                <path d="M2533 995 c0 -38 2 -53 4 -32 2 20 2 52 0 70 -2 17 -4 1 -4 -38z" />
                                <path d="M2553 1015 c0 -22 2 -30 4 -17 2 12 2 30 0 40 -3 9 -5 -1 -4 -23z" />
                                <path
                                  d="M2560 940 c0 -16 4 -30 8 -30 5 0 7 14 4 30 -2 17 -6 30 -8 30 -2 0
-4 -13 -4 -30z"
                                />
                                <path
                                  d="M2322 867 c-49 -52 -64 -135 -37 -200 27 -65 32 -67 180 -67 l133 0
23 36 c42 69 35 161 -18 224 l-25 30 -117 0 c-109 0 -119 -2 -139 -23z m-7
-126 c0 -92 -1 -98 -14 -73 -18 34 -18 100 -1 141 7 17 13 31 14 31 0 0 1 -45
1 -99z m247 84 c0 -5 -5 -11 -11 -13 -6 -2 -11 4 -11 13 0 9 5 15 11 13 6 -2
11 -8 11 -13z m68 -88 c0 -26 -7 -62 -16 -78 -20 -39 -28 -32 -13 10 7 19 9
61 6 99 -5 60 -4 64 9 42 7 -14 13 -47 14 -73z m-47 8 c1 -5 -6 -11 -15 -13
-11 -2 -18 3 -18 13 0 17 30 18 33 0z m-183 -5 c0 -5 -7 -10 -15 -10 -8 0 -15
5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z m105 -9 c7 -12 -12 -24 -25 -16
-11 7 -4 25 10 25 5 0 11 -4 15 -9z m90 -42 c0 -7 -8 -15 -17 -17 -18 -3 -25
18 -11 32 10 10 28 1 28 -15z m-65 -4 c0 -8 -4 -15 -9 -15 -13 0 -22 16 -14
24 11 11 23 6 23 -9z m-70 -29 c-13 -13 -35 7 -25 24 5 8 11 8 21 -1 10 -8 12
-15 4 -23z m-54 -7 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16
-11z m104 -4 c0 -8 -4 -15 -9 -15 -13 0 -22 16 -14 24 11 11 23 6 23 -9z m-40
-20 c0 -8 -4 -15 -9 -15 -13 0 -22 16 -14 24 11 11 23 6 23 -9z m80 -1 c0 -17
-22 -14 -28 4 -2 7 3 12 12 12 9 0 16 -7 16 -16z"
                                />
                                <path
                                  d="M2337 488 c-16 -195 -6 -268 34 -268 7 0 8 -29 3 -80 -9 -103 -3
-110 86 -110 88 0 95 8 87 105 -5 70 -4 75 19 90 24 15 24 18 23 153 -2 188
-16 235 -20 67 l-3 -130 -6 115 -6 115 -3 -100 -4 -100 -12 115 -12 115 -4
-100 -5 -100 -2 98 c-2 105 -22 139 -22 36 0 -37 -4 -58 -10 -54 -5 3 -10 31
-10 61 0 41 -4 54 -15 54 -10 0 -15 -10 -15 -29 0 -17 -4 -33 -10 -36 -6 -4
-10 8 -10 29 0 35 -1 36 -39 36 l-38 0 -6 -82z m203 -370 c0 -41 -20 -59 -62
-57 -20 1 -19 2 10 15 30 13 32 18 32 62 0 34 3 43 10 32 5 -8 10 -32 10 -52z"
                                />
                              </g>
                            </svg>
                          </span>
                          {point}
                        </motion.span>

                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-transparent opacity-0"
                          whileHover={{
                            opacity: 1,
                            transition: { duration: 0.3 },
                          }}
                        />
                      </motion.div>
                    ))}
                </div>
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
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
              <motion.div
                className="from-red-950 relative w-full max-w-2xl overflow-hidden rounded-xl bg-gradient-to-br to-gray-900 p-1"
                initial={{ scale: 0.8, opacity: 0, y: 20 }} // Start slightly smaller, transparent, and shifted down
                animate={{ scale: 1, opacity: 1, y: 0 }} // Scale up to full size, fully visible, and centered
                exit={{ scale: 0.8, opacity: 0, y: 20 }} // Exit by scaling down and fading out
                transition={{
                  type: 'tween', // Smooth and linear transition
                  ease: 'easeOut', // Quick and sharp easing
                  duration: 0.3, // Very fast transition
                }}
              >
                {/* Shining Line */}
                <div
                  className="absolute -top-1 -left-1 h-[2px] w-[200px] rotate-45 transform bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
                  style={{
                    animation: 'shine 3s linear infinite',
                  }}
                />
                {/* Sharingan Pattern Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 animate-spin-slow rounded-full border-4 border-purple-800" />
                  <div className="animate-spin-reverse absolute inset-4 rounded-full border-2 border-purple-900" />
                  <div className="absolute inset-8 animate-pulse rounded-full border border-purple-700" />
                  <div className="absolute inset-0 animate-spin-slow rounded-full border-4 border-purple-600" />
                  <div className="animate-spin-reverse absolute inset-4 rounded-full border-2 border-purple-500" />
                  <div className="absolute inset-8 animate-pulse rounded-full border border-purple-400" />
                </div>

                {/* Content Container */}
                <div className="relative rounded-lg bg-gray-700/10 p-8">
                  {/* Close Button */}
                  <button
                    onClick={closePopup}
                    className="bg-red-950 absolute right-4 top-4 rounded-full p-2 text-red-500 transition-all focus:outline-none focus:ring-2 focus:ring-red-600 hover:bg-red-900 hover:text-red-400"
                  >
                    <span role="img" aria-label="close" className="text-2xl">
                      ❌
                    </span>{' '}
                  </button>

                  {/* Title with Animated Sharingan Design */}
                  <div className="mb-6 flex items-center space-x-4">
                    <div className="h-50 w-50 overflow-hidden rounded-full">
                      <img
                        src="/bn.gif"
                        alt="Sharingan"
                        className="h-50 w-50 rounded-full object-cover"
                        style={{ height: '70px', width: '70px' }}
                      />
                    </div>
                    <h3 className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-3xl font-bold text-transparent">
                      {selectedItem.name}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="space-y-5 text-gray-100">
                    <p className="font-serif text-2xl text-yellow-400">{selectedItem.place}</p>
                    <p className="text-sm text-gray-400">{selectedItem.date}</p>

                    <ul className="space-y-2">
                      {selectedItem.description.split('\n').map(
                        (point, index) =>
                          point.trim() && (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="mt-1.5 h-2 w-2 rounded-full bg-red-500" />
                              <span className="flex-1">{point}</span>
                            </li>
                          )
                      )}
                    </ul>
                  </div>

                  {/* Bottom Design Element */}
                  <div className="mt-6 flex justify-center">
                    <div className="h-1 w-24 rounded bg-gradient-to-r from-transparent via-red-500 to-transparent" />
                  </div>
                </div>
              </motion.div>
            </div>
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
