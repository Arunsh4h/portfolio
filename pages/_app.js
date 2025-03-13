import React, { useEffect } from 'react'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '@/components/MDX'
import '@/styles/globals.css' // Existing global CSS
import Head from 'next/head'
import Script from 'next/script'

// Import your CSS files
import '@/public/css/config.css'
import '@/public/css/libs.css'
import '@/public/css/responsive.css'
import '@/public/css/stg.css'
import '@/public/css/style.css'
import '@/public/css/tmp.css'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Ensure JavaScript runs on the client side
      // This can help to resolve hydration issues
      const script = document.createElement('script')
      script.src = 'https://code.jquery.com/jquery-3.6.0.min.js'
      script.async = true
      script.onload = () => {
        // Load other scripts after jQuery is loaded
        const otherScripts = [
          '/js/classes.js',
          '/js/contact_form.js',
          '/js/main.js',
          '/js/st-core.js',
        ]
        otherScripts.forEach((src) => {
          const script = document.createElement('script')
          script.src = src
          script.async = true
          document.body.appendChild(script)
        })
      }
      document.body.appendChild(script)
    }
  }, [])

  return (
    <MDXProvider components={MDXComponents}>
      <Head>
        <title>arunnshah</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Google Analytics tracking code */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-CYDEN57DT2"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CYDEN57DT2');
        `}
      </Script>

      {getLayout(<Component {...pageProps} />)}
    </MDXProvider>
  )
}

export default MyApp
