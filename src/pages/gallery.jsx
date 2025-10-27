import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingButton from '@/components/BookingButton'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaTimes, FaChevronLeft, FaChevronRight, FaInstagram, FaHeart } from 'react-icons/fa'

const galleryData = {
  'All': [
    { url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800', title: 'Platinum Blonde Transformation', category: 'Color', likes: 234 },
    { url: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=800', title: 'Sun-Kissed Balayage', category: 'Balayage', likes: 189 },
    { url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800', title: 'Modern Bob Cut', category: 'Haircut', likes: 156 },
    { url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800', title: 'Luxury Hair Extensions', category: 'Extensions', likes: 298 },
    { url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800', title: 'Bridal Updo Perfection', category: 'Bridal', likes: 342 },
    { url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800', title: 'Copper Red Color', category: 'Color', likes: 276 },
    { url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800', title: 'Keratin Smoothing Results', category: 'Treatment', likes: 167 },
    { url: 'https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?w=800', title: 'Glamorous Waves', category: 'Styling', likes: 203 },
    { url: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800', title: 'Modern Men\'s Fade', category: 'Men', likes: 145 },
    { url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800', title: 'Layered Cut & Style', category: 'Haircut', likes: 187 },
    { url: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=800', title: 'Color Correction Magic', category: 'Color', likes: 312 },
    { url: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=800', title: 'Toner & Gloss Treatment', category: 'Treatment', likes: 134 },
    { url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800', title: 'Dimensional Highlights', category: 'Balayage', likes: 267 },
    { url: 'https://images.unsplash.com/photo-1595475884562-073c1c982d59?w=800', title: 'Beach Waves Styling', category: 'Styling', likes: 198 },
    { url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800', title: 'Classic Men\'s Pompadour', category: 'Men', likes: 156 },
    { url: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=800', title: 'Romantic Bridal Style', category: 'Bridal', likes: 389 },
    { url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800', title: 'Sleek Lob Cut', category: 'Haircut', likes: 176 },
    { url: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?w=800', title: 'Tape-In Extensions', category: 'Extensions', likes: 245 }
  ]
}

const categories = ['All', 'Color', 'Balayage', 'Haircut', 'Extensions', 'Bridal', 'Treatment', 'Styling', 'Men']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [liked, setLiked] = useState([])

  const filteredImages = selectedCategory === 'All' 
    ? galleryData['All']
    : galleryData['All'].filter(img => img.category === selectedCategory)

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
  }

  const toggleLike = (index) => {
    setLiked(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <>
      <Head>
        <title>Gallery | New Image Hair Salon Calgary - Hair Transformation Photos</title>
        <meta name="description" content="Browse our portfolio of stunning hair transformations. See real results from Calgary's premier hair salon - balayage, color, cuts, extensions & more." />
      </Head>

      <Header />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920)' }}
        />
        <div className="absolute inset-0 bg-black/80" />
        
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-heading font-bold shimmer-text mb-6"
          >
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-luxury max-w-3xl mx-auto"
          >
            Real Clients. Real Transformations. Real Artistry.
          </motion.p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: '500+', label: 'Transformations' },
              { number: '50+', label: 'Weekly Updates' },
              { number: '5000+', label: 'Happy Clients' },
              { number: '8+', label: 'Years Experience' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-black sticky top-0 z-40 border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'luxury-button text-white'
                    : 'glass-effect text-gray-300 hover:text-white border border-primary/30'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gradient-to-b from-black via-secondary to-black">
        <div className="container mx-auto px-4">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="relative group cursor-pointer premium-card"
                onClick={() => openLightbox(index)}
              >
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-0 left-0 right-0 p-6 text-white"
                  >
                    <div className="text-sm text-primary font-semibold mb-2">{image.category}</div>
                    <h3 className="text-xl font-heading font-bold mb-2">{image.title}</h3>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleLike(index)
                        }}
                        className="flex items-center gap-2"
                      >
                        <FaHeart className={liked.includes(index) ? 'text-red-500' : 'text-white'} />
                        <span>{image.likes + (liked.includes(index) ? 1 : 0)}</span>
                      </button>
                    </div>
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full text-xs font-bold text-white">
                    {image.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-pink-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FaInstagram className="text-6xl text-pink-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Follow Us on Instagram
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Stay updated with our latest transformations, tips, and exclusive offers
            </p>
            <a
              href="https://www.instagram.com/newimage_yyc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block luxury-button px-10 py-4 rounded-full font-semibold text-white text-lg"
            >
              <FaInstagram className="inline mr-2" />
              @NEWIMAGE_YYC
            </a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 text-white text-4xl hover:text-primary transition-colors z-10"
            >
              <FaTimes />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 text-white text-5xl hover:text-primary transition-colors z-10"
            >
              <FaChevronLeft />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 text-white text-5xl hover:text-primary transition-colors z-10"
            >
              <FaChevronRight />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="max-w-6xl max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[currentImageIndex].url}
                alt={filteredImages[currentImageIndex].title}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl"
              />
              <div className="text-center mt-6 text-white">
                <div className="text-primary font-semibold mb-2">
                  {filteredImages[currentImageIndex].category}
                </div>
                <h3 className="text-3xl font-heading font-bold mb-4">
                  {filteredImages[currentImageIndex].title}
                </h3>
                <div className="text-gray-400">
                  {currentImageIndex + 1} / {filteredImages.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <BookingButton />
    </>
  )
}
