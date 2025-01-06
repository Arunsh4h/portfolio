import React from 'react'
import Reveal from '@/components/Reveal'
import Icon from '@/components/Icon'

const CompaniesBase = ({ title, list }) => (
  <div
    className="arunshah-grid-7cols arunshah-tp-grid-3cols arunshah-m-grid-2cols stg-top-gap-s"
    data-stagger-appear="fade-left"
    data-stagger-unload="fade-right"
    data-stagger-delay="2300"
    data-delay="100"
  >
    {title && <h4 className="mb-4 w-full lg:mb-0 lg:w-auto">{title}</h4>}
    {list &&
      list.map(({ icon }, i) => (
        <Reveal key={i} animation="fade-down-left" delay={i * 20}>
          {icon && <Icon {...icon} className="h-12 w-28 fill-current text-omega-500" />}
        </Reveal>
      ))}
  </div>
)

export default CompaniesBase
