// AnimatedBackground.js
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import gsap from 'gsap';
import ICUN1 from '../public/icons/space/svg-1.svg';
import ICUN2 from '../public/icons/space/svg-2.svg';
import ICUN3 from '../public/icons/space/svg-3.svg';
import ICUN4 from '../public/icons/space/svg-4.svg';
import ICUN5 from '../public/icons/space/svg-5.svg';
import ICUN6 from '../public/icons/space/svg-6.svg';
import ICUN7 from '../public/icons/space/svg-7.svg';
import ICUN8 from '../public/icons/space/svg-8.svg';
import ICUN9 from '../public/icons/space/svg-9.svg';
import ICUN10 from '../public/icons/space/svg-10.svg';
import ICUN11 from '../public/icons/space/svg-11.svg';
import ICUN12 from '../public/icons/space/svg-12.svg';
import ICUN13 from '../public/icons/space/svg-13.svg';
import ICUN14 from '../public/icons/space/svg-14.svg';
import ICUN15 from '../public/icons/space/svg-15.svg';
import ICUN16 from '../public/icons/space/svg-16.svg';
import ICUN17 from '../public/icons/space/svg-17.svg';
import ICUN18 from '../public/icons/space/svg-18.svg';
import ICUN19 from '../public/icons/space/svg-19.svg';
import ICUN20 from '../public/icons/space/svg-20.svg';
import ICUN21 from '../public/icons/space/svg-21.svg';
import ICUN22 from '../public/icons/space/svg-22.svg';

const AnimatedBackground = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const particles = [];
    const particleCount = 50; // Adjust count for performance with SVGs

    // Array of SVG components
    const celestialSVGs = [
      ICUN1,
      ICUN2,
      ICUN3,
      ICUN4,
      ICUN5,
      ICUN6,
      ICUN7,
      ICUN8,
      ICUN9,
      ICUN10,
      ICUN11,
      ICUN12,
      ICUN13,
      ICUN14,
      ICUN15,
      ICUN16,
      ICUN17,
      ICUN18,
      ICUN19,
      ICUN20,
      ICUN21,
      ICUN22,
    ];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const Particle = celestialSVGs[Math.floor(Math.random() * celestialSVGs.length)]; // Random SVG component
      const particle = document.createElement('div');
      particle.className = 'absolute w-6 h-6'; // Adjust size with Tailwind classes
      bgRef.current.appendChild(particle);

      // Render the SVG component inside the div
      ReactDOM.render(<Particle />, particle);
      particles.push(particle);

      // Initial position
      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: 0.5 + Math.random() * 0.6, // Random opacity
        scale: 0.4 + Math.random() * 1.4, // Random scale
      });

      // Animation
      gsap.to(particle, {
        duration: 9 + Math.random() * 20,
        x: '+=' + (Math.random() * 600 - 150), // Increased movement range
        y: '+=' + (Math.random() * 500 - 150),
        opacity: Math.random(),
        scale: Math.random() * 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'expo.inOut',
      });
    }

    return () => {
      particles.forEach((particle) => {
        gsap.killTweensOf(particle);
        ReactDOM.unmountComponentAtNode(particle); // Clean up React component
        particle.remove();
      });
    };
  }, []);

  return <div ref={bgRef} className="pointer-events-none fixed inset-0 overflow-hidden" />;
};

export default AnimatedBackground;