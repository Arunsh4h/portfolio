import React from 'react'
import classNames from 'clsx'
import ContentRenderer from '@/components/ContentRenderer'
import Image from '@/components/Image'
import Sep from '@/components/Sep'
import Reveal from '@/components/Reveal'
import Companies from '@/components/Companies'
import StackedRotatingImages from '@/components/StackedRotatingImages'
import RocketForm from '@/components/RocketForm'
import SolidEnter from '@/components/SolidEnter'
import CompaniesBase from '@/components/CompaniesBase'
import HeroSlider from './HeroSlider'

const HeroPhoto = ({ main }) => (
  <>
    <div className="hidden md:block">
      <HeroSlider images={main.images} />
    </div>
    <div className="with-back-plate md:hidden">
      <Image
        src={main.images[main.images.length - 1].src}
        width={main.images[main.images.length - 1].width || 500}
        height={main.images[main.images.length - 1].height || 600}
        alt={main.images[main.images.length - 1].alt}
        animation="mask-left"
        priority
      />
    </div>
  </>
)

const HeroAbout = ({ main }) => (
  <Reveal
    animation="fade-in slide-in-right"
    className={classNames(
      'md:mr-52',
      'prose prose-invert prose-headings:my-4 first-of-type:prose-headings:mt-0 prose-p:hidden',
      'md:prose-headings:my-6 md:prose-p:block'
    )}
  >
    <ContentRenderer source={main} />
  </Reveal>
)

const Achievements = ({ achievements }) => (
  <Reveal
    animation="fade-in slide-in-left"
    className={classNames(
      'prose prose-invert relative z-10 flex flex-wrap md:mt-12',
      'md:bg-gradient-omega-900 md:shadow-2xl'
    )}
  >
    <Sep line className="hidden md:block" />
    {achievements?.map((item, i) => (
      <div
        key={i}
        className="flex flex-1 flex-col items-center justify-center px-1 py-4 md:flex-row md:justify-start md:p-6"
      >
        <h2
          className={classNames(
            'm-0 md:pr-4',
            i === 0 && 'text-accent',
            i === 1 && 'text-beta',
            i >= 2 && 'text-alpha'
          )}
        >
          {item.number}
        </h2>
        <div className="text-white">{item.text}</div>
      </div>
    ))}
  </Reveal>
)

const Layout = ({ main = {}, cta = {}, achievements = [], companies, solidEnter }) => (
  <div className="mx-auto my-auto p-4 md:p-10 lg:p-20 ">
    <div className="items-center text-center md:flex md:text-left">
      <div className="inline-block shrink-0 md:order-2 md:-ml-40">
        <div className="md:block">
          <StackedRotatingImages />
        </div>
        {/* <SolidEnter data={solidEnter} /> */}
        <div className="hidden-sm:block  md:block">
          <HeroPhoto main={main} />
        </div>
      </div>
      <div className="z-10 mt-6 basis-full md:m-0">
        <HeroAbout main={main} />
        <Achievements achievements={achievements} />
        <div className="prose prose-invert mt-6 flex md:mt-12">
          <ContentRenderer source={cta} />
          <RocketForm />
        </div>
      </div>
    </div>
    <div className="mt-6 mt-12 hidden px-4 pb-0 md:block">
      <Companies {...companies} />
    </div>
  </div>
)

export default Layout
