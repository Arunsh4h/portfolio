import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function TypewriterText({ text, delay = 0, speed = 50 }) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return (
    <motion.span
      style={{
        fontFamily: 'monospace',
        color: '#00ff00',
        textShadow: '0 0 5px #00ff00',
      }}
    >
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        style={{ color: '#00ff00' }}
      >
        |
      </motion.span>
    </motion.span>
  )
}

function InfoPanel({ preciseLocation, locationAddress, userDetails, extendedInfo }) {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  }

  const sectionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2 },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        background: '#0a0a0a',
        border: '1px solid rgba(0, 255, 0, 0.1)',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 255, 0, 0.1)',
        color: '#ffffff',
        fontFamily: 'monospace',
      }}
      className="max-h-[80vh] space-y-4 overflow-y-auto p-6"
    >
      <motion.div className="grid gap-6" variants={containerVariants}>
        {preciseLocation && (
          <motion.div className="space-y-3" variants={sectionVariants}>
            <motion.div
              className="flex items-center gap-2 text-lg font-semibold"
              whileHover={{ scale: 1.02 }}
            >
              <motion.span
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ color: '#00ff00' }}
              >
                📍
              </motion.span>
              <TypewriterText text="Your Satellite Zone" speed={100} />
            </motion.div>
            <motion.div className="grid grid-cols-2 gap-3 pl-6 text-sm">
              {locationAddress &&
                Object.entries({
                  Street: locationAddress.road || locationAddress.street || 'SAVED',
                  Area: locationAddress.suburb || locationAddress.neighbourhood || 'SAVED',
                  City: locationAddress.city || locationAddress.town || 'SAVED',
                  State: locationAddress.state || 'SAVED',
                  Country: locationAddress.country || 'SAVED',
                  Postal: locationAddress.postcode || 'SAVED',
                }).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    style={{
                      background: '#111111',
                      border: '1px solid rgba(0, 255, 0, 0.1)',
                      borderRadius: '8px',
                      padding: '12px',
                      transition: 'all 0.2s ease',
                    }}
                    className="hover:bg-gray-800/50"
                  >
                    <TypewriterText text={`${key}: ${value}`} speed={50} delay={index * 100} />
                  </motion.div>
                ))}
              <motion.div
                variants={itemVariants}
                whileHover={{ x: 5 }}
                style={{
                  background: '#111111',
                  border: '1px solid rgba(0, 255, 0, 0.1)',
                  borderRadius: '8px',
                  padding: '12px',
                  transition: 'all 0.2s ease',
                }}
                className="hover:bg-gray-800/50"
              >
                <TypewriterText
                  text={`Latitude: ${preciseLocation.latitude.toFixed(6)}°`}
                  speed={50}
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                whileHover={{ x: 5 }}
                style={{
                  background: '#111111',
                  border: '1px solid rgba(0, 255, 0, 0.1)',
                  borderRadius: '8px',
                  padding: '12px',
                  transition: 'all 0.2s ease',
                }}
                className="hover:bg-gray-800/50"
              >
                <TypewriterText
                  text={`Longitude: ${preciseLocation.longitude.toFixed(6)}°`}
                  speed={50}
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                whileHover={{ x: 5 }}
                style={{
                  background: '#111111',
                  border: '1px solid rgba(0, 255, 0, 0.1)',
                  borderRadius: '8px',
                  padding: '12px',
                  transition: 'all 0.2s ease',
                }}
                className="hover:bg-gray-800/50"
              >
                <TypewriterText
                  text={`Accuracy: ±${preciseLocation.accuracy.toFixed(1)}m`}
                  speed={50}
                />
              </motion.div>
              {preciseLocation.altitude && (
                <motion.div
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  style={{
                    background: '#111111',
                    border: '1px solid rgba(0, 255, 0, 0.1)',
                    borderRadius: '8px',
                    padding: '12px',
                    transition: 'all 0.2s ease',
                  }}
                  className="hover:bg-gray-800/50"
                >
                  <TypewriterText
                    text={`Altitude: ${preciseLocation.altitude.toFixed(1)}m`}
                    speed={50}
                  />
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}

        <motion.div className="space-y-3" variants={sectionVariants}>
          <motion.div
            className="flex items-center gap-2 text-lg font-semibold"
            whileHover={{ scale: 1.02 }}
          >
            <motion.span
              animate={{
                rotate: 360,
                transition: { duration: 3, repeat: Infinity, ease: 'linear' },
              }}
              style={{ color: '#00ff00' }}
            >
              🌐
            </motion.span>
            <TypewriterText text="Incoming" speed={100} />
          </motion.div>
          <motion.div className="grid grid-cols-2 gap-3 pl-6 text-sm">
            {Object.entries({
              IPv4: userDetails.network.ipv4,
              IPv6: userDetails.network.ipv6,
              ISP: userDetails.network.isp,
              ASN: userDetails.network.asn,
              Connection: userDetails.network.connection,
              Speed: `${userDetails.network.downlink}Mbps`,
              Latency: `${userDetails.network.rtt}ms`,
              Location: `${userDetails.network.city}, ${userDetails.network.region}`,
            }).map(([key, value], index) => (
              <motion.div
                key={key}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                style={{
                  background: '#111111',
                  border: '1px solid rgba(0, 255, 0, 0.1)',
                  borderRadius: '8px',
                  padding: '12px',
                  transition: 'all 0.2s ease',
                }}
                className="hover:bg-gray-800/50"
              >
                <TypewriterText text={`${key}: ${value}`} speed={50} delay={index * 100} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {extendedInfo && (
          <motion.div className="space-y-3" variants={sectionVariants}>
            <motion.div
              className="flex items-center gap-2 text-lg font-semibold"
              whileHover={{ scale: 1.02 }}
            >
              <motion.span
                animate={{
                  y: [-2, 2, -2],
                  transition: { duration: 1.5, repeat: Infinity },
                }}
                style={{ color: '#00ff00' }}
              >
                💻
              </motion.span>
              <TypewriterText text="Open Targets" speed={100} />
            </motion.div>
            <motion.div className="grid grid-cols-2 gap-3 pl-6 text-sm">
              {Object.entries({
                Platform: extendedInfo.platform,
                'CPU Cores': extendedInfo.cores,
                Memory: `${extendedInfo.memory}GB`,
                GPU: extendedInfo.gpu.renderer,
                Screen: `${extendedInfo.screenResolution.width}x${extendedInfo.screenResolution.height}`,
                'Color Depth': `${extendedInfo.screenResolution.depth}bit`,
                DPI: extendedInfo.screenResolution.pixelRatio,
                'Touch Points': extendedInfo.maxTouchPoints,
                Cameras: extendedInfo.devices.videoinput,
                Microphones: extendedInfo.devices.audioinput,
                Speakers: extendedInfo.devices.audiooutput,
              }).map(([key, value], index) => (
                <motion.div
                  key={key}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  style={{
                    background: '#111111',
                    border: '1px solid rgba(0, 255, 0, 0.1)',
                    borderRadius: '8px',
                    padding: '12px',
                    transition: 'all 0.2s ease',
                  }}
                  className="hover:bg-gray-800/50"
                >
                  <TypewriterText text={`${key}: ${value}`} speed={50} delay={index * 100} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default InfoPanel
