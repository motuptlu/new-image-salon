import { motion } from 'framer-motion'
import { FaCut, FaPaintBrush, FaSpa, FaGem, FaFire, FaMagic } from 'react-icons/fa'
import { useState } from 'react'

const services = [
  {
    icon: FaCut,
    title: 'Precision Haircuts',
    description: 'Modern styles crafted by master stylists with 8+ years expertise',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600',
    features: ['Consultation', 'Wash & Style', 'Finish Products'],
    price: 'From $65'
  },
  {
    icon: FaPaintBrush,
    title: 'Premium Color Services',
    description: 'Balayage, highlights, ombre & custom color transformations',
    image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=600',
    features: ['Color Consultation', 'Toner Treatment', 'Glossing'],
    price: 'From $120'
  },
  {
    icon: FaGem,
    title: 'Hair Extensions',
    description: 'Natural-looking length and volume with premium extensions',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600',
    features: ['Tape-In', 'Fusion', 'Microlink'],
    price: 'From $400'
  },
  {
    icon: FaFire,
    title: 'Keratin Treatment',
    description: 'Smooth, frizz-free hair with Brazilian keratin therapy',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600',
    features: ['Deep Conditioning', 'Smoothing', '3-Month Results'],
    price: 'From $250'
  },
  {
    icon: FaMagic,
    title: 'Bridal & Events',
    description: 'Stunning styles for your special day with trial session',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600',
    features: ['Trial Session', 'Day-Of Styling', 'Airbrush Makeup'],
    price: 'From $180'
  },
  {
    icon: FaSpa,
    title: 'Hair Spa Treatments',
    description: 'Luxurious deep conditioning and scalp treatments',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600',
    features: ['Scalp Massage', 'Deep Treatment', 'Steam Therapy'],
    price: 'From $85'
  }
]

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-black via-secondary to-black">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full"
            animate={{
              x: [Math.random() * 1000, Math.random() * 1000],
              y: [Math.random() * 1000, Math.random() * 1000],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear'
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-primary/20 border border-primary rounded-full text-primary font-semibold text-sm tracking-widest">
              OUR EXPERTISE
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            <span className="shimmer-text">Premium Services</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience luxury hair care with our comprehensive range of services, 
            delivered by Calgary's most talented stylists
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="premium-card group"
            >
              <div className="glass-effect rounded-3xl overflow-hidden h-full">
                {/* Image with Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  {/* Floating Icon */}
                  <motion.div
                    className="absolute top-6 right-6 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white text-3xl"
                    animate={{
                      rotate: hoveredIndex === index ? 360 : 0,
                      y: hoveredIndex === index ? -10 : 0
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon />
                  </motion.div>

                  {/* Price Tag */}
                  <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary">
                    <span className="text-primary font-bold">{service.price}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-2 text-sm text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.a
                    href={`https://wa.me/14037013610?text=Hi! I'm interested in ${service.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center luxury-button py-3 rounded-full font-semibold text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    BOOK THIS SERVICE
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="/services"
            className="inline-block glass-effect border-2 border-primary px-10 py-4 rounded-full font-semibold text-white hover:bg-primary/20 transition-all duration-300"
          >
            VIEW ALL SERVICES →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
