import React, { useState, useEffect } from 'react'
import ContentRenderer from '@/components/ContentRenderer'
import Reveal from '@/components/Reveal'
import Icon from '@/components/Icon'

const Services01 = ({ main = {}, services = [] }) => {
  const [shuffledServices, setShuffledServices] = useState(services)
  const [animationSpeed, setAnimationSpeed] = useState(1)

  useEffect(() => {
    let intervalId
    if (animationSpeed !== 0) {
      const interval = 6000 / animationSpeed
      intervalId = setInterval(() => {
        const shuffled = [...shuffledServices]
        shuffled.sort(() => Math.random() - 0.5)
        setShuffledServices(shuffled)
      }, interval)
    }

    return () => clearInterval(intervalId)
  }, [shuffledServices, animationSpeed])

  const getRandomEffectClass = () => {
    const effects = ['glitch', 'fade', 'zoom-out', 'bounce-out', 'bounce-in', 'zoom-in', 'fade-in']
    const randomEffect = effects[Math.floor(Math.random() * effects.length)]
    return `transition-${randomEffect}`
  }

  const handleButtonClick = (speed) => {
    setAnimationSpeed(speed)
  }

  const handleResetButtonClick = () => {
    setAnimationSpeed(0)
    const resetServices = services.map((item) => ({ ...item }))
    setShuffledServices(resetServices)
  }

  return (
    <div className="relative mx-auto my-auto p-3 md:p-6 lg:p-12">
      <div id="services-container" className="grid gap-4 md:grid-cols-3 md:gap-12">
        <div className="col-span-1 row-span-2 mb-6 md:m-0">
          <Reveal animation="fade-in slide-in-right" className="prose prose-invert" delay={200}>
            <ContentRenderer source={main} />
          </Reveal>
        </div>
        {shuffledServices.map((item, i) => (
          <Reveal
            animation={`fade-in ${getRandomEffectClass()}`}
            className={`service-box prose bg-white ${getRandomEffectClass()}`}
            delay={(i % 2) * 100}
            key={i}
          >
            <div className="align-center flex flex-col bg-gradient-to-br from-alpha-100 via-alpha to-beta p-8">
              {item.icon && (
                <Icon {...item.icon} className="relative z-10 mb-6 h-12 w-12 fill-accent" />
              )}
              <h4 className="relative z-10 m-0">{item.title}</h4>
            </div>
            <div className="p-8 pt-3 text-black hover:text-blue-600">
              <ContentRenderer source={item} />
            </div>
          </Reveal>
        ))}
      </div>

      {/* Control Bar */}
      <div className="absolute top-0 right-0 cursor-pointer p-4">
        <div className="flex items-center">
          <button
            onClick={() => handleButtonClick(0)}
            className="rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700"
          >
            Pause
          </button>
          {animationSpeed === 0 && (
            <div className="ml-2 flex items-center space-x-2">
              <button
                onClick={() => handleButtonClick(1)}
                className="rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700"
              >
                1x
              </button>
              <button
                onClick={() => handleButtonClick(2)}
                className="rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700"
              >
                2x
              </button>
              <button
                onClick={() => handleButtonClick(3)}
                className="rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700"
              >
                3x
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Services01
