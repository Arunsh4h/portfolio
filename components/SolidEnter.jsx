import React, { useState } from 'react'

const SolidEnter = ({ data }) => {
  const [hoveredPro, setHoveredPro] = useState(null)

  return (
    <section className="backlight-bottom">
      <div className="stg-row arunshah-section-title">
        <div className="stg-col-8 stg-offset-2"></div>
      </div>
      <div
        className="arunshah-list-with-preview"
        data-preview-position="left"
        data-unload="fade-up"
        data-delay="200"
      >
        <div className="arunshah-lwp-roster">
          {data.services.map((service, i) => (
            <div
              key={i}
              className="arunshah-lwp-item arunshah-block"
              data-appear="fade-left"
              onMouseEnter={() => setHoveredPro(service.pro)}
              onMouseLeave={() => setHoveredPro(null)}
            >
              {hoveredPro && hoveredPro.src === service.pro.src ? (
                <video
                  src={service.pro.src}
                  autoPlay
                  loop
                  muted
                  className="h-full w-full object-cover"
                  width="800"
                  height="1200"
                />
              ) : (
                <img src={service.image.src} alt={service.image.alt} width="800" height="1200" />
              )}
              <div className="arunshah-lwp-item-content">
                <h5>
                  {service.title}
                  <span className="arunshah-accent">.</span>
                </h5>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
          <div className="align-right">
            <a href={data.learnMoreLink} className="arunshah-arrow-link">
              Discover all services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolidEnter
