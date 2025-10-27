import '@/styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <DefaultSeo
        title="New Image Hair Salon | Premium Hair Styling in Calgary"
        description="Experience luxury hair styling at New Image Hair Salon in Calgary. Expert stylists, premium services, and personalized hair transformations. Book your appointment today!"
        canonical="https://newimageyyc.ca/"
        openGraph={{
          type: 'website',
          locale: 'en_CA',
          url: 'https://newimageyyc.ca/',
          siteName: 'New Image Hair Salon',
          images: [
            {
              url: '/images/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'New Image Hair Salon Calgary'
            }
          ]
        }}
        twitter={{
          cardType: 'summary_large_image'
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'hair salon Calgary, premium hair styling, hair color Calgary, balayage Calgary, hair extensions Calgary, keratin treatment, bridal hair Calgary, mens haircut Calgary, hair salon near me, best hair salon Calgary NE'
          },
          {
            name: 'geo.region',
            content: 'CA-AB'
          },
          {
            name: 'geo.placename',
            content: 'Calgary'
          },
          {
            name: 'geo.position',
            content: '51.1283;-114.0110'
          }
        ]}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  )
}
