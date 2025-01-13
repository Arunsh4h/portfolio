import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import InfoPanel from './InfoPanel'
import Sep from '@/components/Sep'

function StatusTracker() {
  const [showPanel, setShowPanel] = useState(false)
  const [userDetails, setUserDetails] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [preciseLocation, setPreciseLocation] = useState(null)
  const [locationAddress, setLocationAddress] = useState(null)
  const [extendedInfo, setExtendedInfo] = useState(null)
  const [loadingStates, setLoadingStates] = useState({
    system: true,
    location: true,
    extended: true,
  })

  const getExtendedInfo = async () => {
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl')
      const debugInfo = gl?.getExtension('WEBGL_debug_renderer_info')
      const gpu = debugInfo
        ? {
            vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
            renderer: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
          }
        : 'Taken'

      const audioContext = new (window.AudioContext || window.webkitAudioContext)()
      const devices = await navigator.mediaDevices.enumerateDevices()
      const mediaDevices = {
        audioinput: devices.filter((d) => d.kind === 'audioinput').length,
        audiooutput: devices.filter((d) => d.kind === 'audiooutput').length,
        videoinput: devices.filter((d) => d.kind === 'videoinput').length,
      }

      const systemInfo = {
        gpu,
        devices: mediaDevices,
        cores: navigator.hardwareConcurrency,
        memory: navigator.deviceMemory,
        platform: navigator.platform,
        maxTouchPoints: navigator.maxTouchPoints,
        screenResolution: {
          width: window.screen.width,
          height: window.screen.height,
          depth: window.screen.colorDepth,
          pixelRatio: window.devicePixelRatio,
        },
      }

      setExtendedInfo(systemInfo)
      setLoadingStates((prev) => ({ ...prev, extended: false }))
    } catch (error) {
      console.error('Error getting extended info:', error)
      setLoadingStates((prev) => ({ ...prev, extended: false }))
    }
  }

  const getPreciseLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude, accuracy, altitude, heading, speed } = position.coords
          setPreciseLocation({ latitude, longitude, accuracy, altitude, heading, speed })

          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
            )
            const data = await response.json()
            setLocationAddress(data.address)
          } catch (error) {
            console.error('Error getting address:', error)
          }

          setLoadingStates((prev) => ({ ...prev, location: false }))

          navigator.geolocation.watchPosition(
            (newPosition) => {
              setPreciseLocation({
                latitude: newPosition.coords.latitude,
                longitude: newPosition.coords.longitude,
                accuracy: newPosition.coords.accuracy,
                altitude: newPosition.coords.altitude,
                heading: newPosition.coords.heading,
                speed: newPosition.coords.speed,
              })
            },
            null,
            { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
          )
        },
        (error) => {
          console.error('Error getting location:', error)
          setLoadingStates((prev) => ({ ...prev, location: false }))
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      )
    }
  }

  const collectData = async () => {
    try {
      const [ipifyResponse, ipApiResponse] = await Promise.all([
        fetch('https://api.ipify.org?format=json'),
        fetch('https://ipapi.co/json'),
      ])

      const ipifyData = await ipifyResponse.json()
      const ipApiData = await ipApiResponse.json()
      const batteryData = 'getBattery' in navigator ? await navigator.getBattery() : null

      const systemInfo = {
        network: {
          ipv4: ipApiData.ip,
          ipv6: ipApiData.version === 'IPv6' ? ipApiData.ip : 'Taken',
          isp: ipApiData.org,
          asn: ipApiData.asn,
          city: ipApiData.city,
          region: ipApiData.region,
          connection: navigator.connection?.effectiveType || 'unknown',
          downlink: navigator.connection?.downlink || 'unknown',
          rtt: navigator.connection?.rtt || 'unknown',
        },
        device: {
          type: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop',
          browser: getBrowserInfo(),
        },
        browser: {
          language: navigator.language,
          languages: navigator.languages,
          platform: navigator.platform,
          vendor: navigator.vendor,
          cookieEnabled: navigator.cookieEnabled,
          doNotTrack: navigator.doNotTrack,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
        battery: batteryData
          ? {
              level: Math.floor(batteryData.level * 100),
              charging: batteryData.charging,
            }
          : null,
      }

      setUserDetails(systemInfo)
      setLoadingStates((prev) => ({ ...prev, system: false }))
      setIsLoading(false)
    } catch (error) {
      console.error('Error:', error)
      setLoadingStates((prev) => ({ ...prev, system: false }))
      setIsLoading(false)
    }
  }

  const getBrowserInfo = () => {
    const ua = navigator.userAgent
    let browserName = 'Unknown'
    let browserVersion = 'Unknown'

    if (ua.match(/chrome|chromium|crios/i)) browserName = 'Chrome'
    else if (ua.match(/firefox|fxios/i)) browserName = 'Firefox'
    else if (ua.match(/safari/i)) browserName = 'Safari'
    else if (ua.match(/opr\//i)) browserName = 'Opera'
    else if (ua.match(/edg/i)) browserName = 'Edge'

    const match = ua.match(/(version|chrome|firefox|safari|opr|edge|msie)\/?\s*(\d+)/i)
    if (match) browserVersion = match[2]

    return `${browserName} ${browserVersion}`
  }

  useEffect(() => {
    collectData()
    getPreciseLocation()
    getExtendedInfo()
  }, [])

  if (isLoading) {
    return (
      <motion.div
        className=" rounded-lg bg-gray-900 p-4 shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-4">
          <motion.div
            className="h-4 w-4 rounded-full bg-blue-500"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <span className="text-gray-400">Collecting system information...</span>
        </div>
      </motion.div>
    )
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.5, 1, 0.5],
      transition: { duration: 2, repeat: Infinity },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <div
      className="relative hidden md:block"
      onMouseEnter={() => setShowPanel(true)}
      onMouseLeave={() => setShowPanel(false)}
    >
      <motion.div
        className="group relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {' '}
        <Sep line className="invisible hidden md:block	" />
        <div className="  bg-gradient-omega-900 hover:bg-gradient-omega-800 flex cursor-pointer items-center gap-2 rounded-full p-2 px-4 shadow-lg">
          <motion.div
            className="relative flex items-center"
            variants={pulseVariants}
            animate="animate"
          >
            <span className="absolute -top-4 -left-2 text-green-800">●</span>
            <div className="h-2 w-2 rounded-full bg-green-500" />
          </motion.div>

          <motion.span
            className="text-sm font-medium text-white "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0 }}
          >
            <motion.span
              className="animate-pulse text-sm font-medium text-white "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0 }}
            >
              {' '}
              Active • <span></span>
            </motion.span>
            {userDetails?.device?.type || 'Unknown'} •{' '}
            {locationAddress?.city || userDetails?.network?.city || 'Loading...'}
          </motion.span>

          <span className="mr-4"></span>
          <span class="relative flex h-2 w-5">
            <span class="absolute inline-flex h-full  w-full  animate-ping rounded-full bg-white opacity-75"></span>
            <span class="relative inline-flex h-2 w-5 animate-pulse rounded-full bg-orange-500"></span>
            <span class="relative inline-flex h-2 w-5 animate-pulse rounded-full bg-green-500"></span>
          </span>

          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.span
              className="text-[9px] font-medium text-gray-800 opacity-80"
              animate={{ opacity: [0] }}
              transition={{ duration: 15 }}
              whileHover={{
                opacity: 1,
                color: '#FFD900', // Golden color
                textShadow: '0 0 1px #FFD700, 0 0 1px #FFD700', // Glowing effect
                transition: {
                  duration: 5,

                  easings: ['easeIn', 'easeOut'],
                },
              }}
            >
              ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ उद्धरेदात्मनात्मानं
              नात्मानमवसादयेत्। आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः
            </motion.span>
            <motion.span
              className="text-[7px] font-medium text-gray-800 opacity-80"
              animate={{ opacity: [0] }}
              transition={{ duration: 15 }}
              whileHover={{
                opacity: 1,
                color: '#FFD900', // Golden color
                textShadow: '0 0 1px #FFD700, 0 0 1px #FFD700', // Glowing effect
                transition: {
                  duration: 3,

                  easings: ['easeIn', 'easeOut'],
                },
              }}
            >
              ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ What you seek is
              seeking you
            </motion.span>
          </motion.div>
        </div>
        <AnimatePresence>
          {showPanel && (
            <motion.div
              className="absolute top-full right-0 z-50 mt-2 w-[32rem]"
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <InfoPanel
                preciseLocation={preciseLocation}
                locationAddress={locationAddress}
                userDetails={userDetails}
                extendedInfo={extendedInfo}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default StatusTracker
