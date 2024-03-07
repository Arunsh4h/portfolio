// TextAnimation.js

import React from 'react'

const TextAnimation = () => {
  return (
    <div className="relative flex h-screen items-center justify-center bg-gradient-to-br from-purple-900 to-pink-600">
      <svg viewBox="0 0 800 600" className="absolute inset-0">
        <symbol id="s-text">
          <text
            textAnchor="middle"
            x="50%"
            y="35%"
            className="text-5xl text-white sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Elastic
          </text>
          <text
            textAnchor="middle"
            x="50%"
            y="68%"
            className="text-5xl text-white sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Stroke
          </text>
        </symbol>

        <g className="g-ants">
          {[...Array(5)].map((_, index) => (
            <use
              xlinkHref="#s-text"
              key={index}
              className={`text-copy stroke-color-${index + 1}`}
              style={{
                strokeDasharray: `7% ${7 * (5 - index)}%`,
                animationDelay: `${index * 2}s`,
              }}
            ></use>
          ))}
        </g>
      </svg>
    </div>
  )
}

export default TextAnimation
