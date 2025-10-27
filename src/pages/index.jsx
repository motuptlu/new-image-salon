import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Reviews from '@/components/Reviews'
import Footer from '@/components/Footer'
import BookingButton from '@/components/BookingButton'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Head>
        <title>New Image Hair Salon | Premium Hair Styling Calgary</title>
        <meta name="description" content="Calgary's premier hair salon offering luxury hair styling, coloring, extensions, and treatments. Expert stylists in NE Calgary." />
      </Head>

      <Header />
      <Hero />
      
      {/* About Preview Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-secondary to-black" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-heading font-bold mb-6 shimmer-text">
                Where Beauty Meets Artistry
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                With over 8 years of excellence in Calgary, New Image Hair Salon delivers premium hair transformations that exceed expectations. Our award-winning stylists combine cutting-edge techniques with personalized care.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { number: '8+', label: 'Years Experience' },
                  { number: '5000+', label: 'Happy Clients' },
                  { number: '15+', label: 'Services' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              <a href="/about" className="luxury-button inline-block px-8 py-4 rounded-full font-semibold">
                DISCOVER OUR STORY
              </a>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden premium-card">
                <img
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800"
                  alt="Luxury Salon Interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Services />
      <Gallery />
      <Reviews />
      <Footer />
      <BookingButton />
    </>
  )
}
