import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
    category: 'Color',
    title: 'Platinum Blonde Transformation'
  },
  {
    url: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=800',
    category: 'Balayage',
    title: 'Sun-Kissed Balayage'
  },
  {
    url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800',
    category: 'Haircut',
    title: 'Modern Bob Cut'
  },
  {
    url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800',
    category: 'Extensions',
    title: 'Luxury Hair Extensions'
  },
  {
    url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800',
    category: 'Bridal',
    title: 'Bridal Updo Styling'
  },
  {
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800',
    category: 'Color',
    title: 'Copper Red Color'
  },
  {
    url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800',
    category: 'Treatment',
    title: 'Keratin Smoothing'
  },
  {
    url: 'https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?w=800',
    category: 'Styling',
    title: 'Glamorous Waves'
  },
  {
    url: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800',
    category: 'Men',
    title: 'Modern Men\'s Cut'
  }
]

const categories = ['All', 'Color', 'Balayage', 'Haircut', 'Extensions', 'Bridal', 'Treatment', 'Styling', 'Men']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [lightboxImage, setLightboxImage] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxImage(filteredImages[index])
  }

  const nextImage = () => {
    const newIndex = (lightboxIndex + 1) % filteredImages.length
    setLightboxIndex(newIndex)
    setLightboxImage(filteredImages[newIndex])
  }

  const prevImage = () => {
    const newIndex = (lightboxIndex - 1 + filteredImages.length) % filteredImages.length
    setLightboxIndex(newIndex)
    setLightboxImage(filteredImages[newIndex])
  }

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            <span className="shimmer-text">Our Masterpieces</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of stunning transformations and artistic creations
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'luxury-button text-white'
                  : 'glass-effect text-gray-300 hover:text-white border border-primary/30'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.url}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
              onClick={() => openLightbox(index)}
              className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group premium-card"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Overlay Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-0 right-0 p-6 text-white"
              >
                <div className="text-sm text-primary font-semibold mb-2">
                  {image.category}
                </div>
                <h3 className="text-xl font-heading font-bold">
                  {image.title}
                </h3>
              </motion.div>

              {/* Hover Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute top-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/gallery"
            className="inline-block luxury-button px-10 py-4 rounded-full font-semibold text-white"
          >
            VIEW FULL GALLERY
          </a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-white text-4xl hover:text-primary transition-colors"
          >
            <FaTimes />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-6 text-white text-4xl hover:text-primary transition-colors"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-6 text-white text-4xl hover:text-primary transition-colors"
          >
            <FaChevronRight />
          </button>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-5xl max-h-[90vh]"
          >
            <img
              src={lightboxImage.url}
              alt={lightboxImage.title}
              className="max-w-full max-h-[90vh] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-center mt-6 text-white">
              <div className="text-primary font-semibold mb-2">{lightboxImage.category}</div>
              <h3 className="text-2xl font-heading font-bold">{lightboxImage.title}</h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
