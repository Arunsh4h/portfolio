import React from 'react'
import Reveal from '@/components/Reveal'
import Icon from '@/components/Icon'

const Companies = ({ title, list }) => (
  <div
    className="arunshah-grid-6cols arunshah-tp-grid-3cols arunshah-m-grid-2cols stg-top-gap-s"
    data-stagger-appear="fade-up"
    data-stagger-unload="fade-up"
    data-stagger-delay="2300"
    data-delay="100"
  >
    {title && <h4 className="mb-4 w-full lg:mb-0 lg:w-auto">{title}</h4>}
    {list &&
      list.map(({ icon }, i) => (
        <Reveal
          key={i}
          animation="fade-up"
          delay={i * 80}
          duration={400}
          easing="ease-out-back"
          style={{
            transformOrigin: 'center bottom',
          }}
        >
          <div className="transition-transform duration-300 hover:scale-105">
            {icon && (
              <Icon
                {...icon}
                className="h-12 w-36 fill-current text-omega-500 hover:text-omega-700"
              />
            )}
          </div>
        </Reveal>
      ))}
  </div>
)

export default Companies
