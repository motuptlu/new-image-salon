import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'

const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920',
    title: 'Luxury Hair Transformations',
    subtitle: 'Experience Premium Hair Styling in Calgary'
  },
  {
    url: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=1920',
    title: 'Expert Color Specialists',
    subtitle: 'Balayage, Highlights & Custom Color'
  },
  {
    url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1920',
    title: 'Precision Haircuts',
    subtitle: 'Modern Styles by Master Stylists'
  },
  {
    url: 'https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?w=1920',
    title: 'Bridal & Special Events',
    subtitle: 'Make Your Day Unforgettable'
  },
  {
    url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1920',
    title: 'Premium Hair Extensions',
    subtitle: 'Natural Length & Volume'
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImages[currentSlide].url})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-6xl md:text-8xl font-heading font-bold mb-6 leading-tight"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <span className="shimmer-text block">
                  {heroImages[currentSlide].title}
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-3xl text-luxury mb-8 font-light"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                {heroImages[currentSlide].subtitle}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1 }}
              >
                <a
                  href="https://wa.me/14037013610?text=Hi! I would like to book an appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-button px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center gap-3"
                >
                  <FaWhatsapp className="text-2xl" />
                  BOOK APPOINTMENT
                </a>

                <a
                  href="https://maps.app.goo.gl/a8VVR4whMfHFJiMK8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-effect border-2 border-primary px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center gap-3 hover:bg-primary/20 transition-all duration-300"
                >
                  <FaMapMarkerAlt className="text-2xl" />
                  GET DIRECTIONS
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'bg-primary w-12'
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
