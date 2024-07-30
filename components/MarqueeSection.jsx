// components/MarqueeSection.jsx
import React from 'react'

const MarqueeSection = () => (
  <section className=" is-stretched" data-padding="none">
    <div className="arunshah-marquee" data-speed="5000">
      <div className="arunshah-marquee-inner">
        <ul className="arunshah-marquee-list">
          <li>
            <h2>Branding</h2>
          </li>
          <li>
            <h2>Marketing</h2>
          </li>
          <li>
            <h2>Graphic Design</h2>
          </li>
          <li>
            <h2>Web Design</h2>
          </li>
          <li>
            <h2>UX/UI</h2>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default MarqueeSection
