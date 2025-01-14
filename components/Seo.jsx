import React from 'react'
import { NextSeo } from 'next-seo'
import { siteMetaData } from '../theme.config'

const Seo = (props) => {
  const { seo = {}, title, description, images, pageUrl } = props

  const metaData = {
    ...siteMetaData,
    title: title || siteMetaData.defaultTitle,
    description: description || siteMetaData.description,
    ...seo,
  }

  // Use the provided image or fallback to the default OpenGraph image
  const ogImageUrl = images?.[0]?.src
    ? `${siteMetaData.siteUrl}${images[0].src}`
    : siteMetaData.defaultImage

  const openGraph = {
    url: pageUrl || siteMetaData.siteUrl,
    title: metaData.title,
    description: metaData.description,
    images: [{ url: ogImageUrl }],
    site_name: metaData.siteName,
    locale: metaData.locale,
  }

  return <NextSeo {...metaData} openGraph={openGraph} />
}

export default Seo
