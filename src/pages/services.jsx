import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingButton from '@/components/BookingButton'
import { motion } from 'framer-motion'
import { FaCut, FaPaintBrush, FaSpa, FaGem, FaFire, FaMagic, FaScissors, FaSpraycan, FaCheck, FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'

const allServices = [
  {
    category: 'Haircuts & Styling',
    icon: FaCut,
    services: [
      {
        name: "Women's Haircut",
        description: 'Precision cutting tailored to your face shape and lifestyle. Includes consultation, wash, cut, and blow-dry.',
        price: '$65 - $85',
        duration: '60 min',
        image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600',
        features: ['Consultation', 'Wash & Condition', 'Precision Cut', 'Blow Dry & Style']
      },
      {
        name: "Men's Haircut",
        description: 'Modern cuts and classic styles with hot towel treatment and finishing.',
        price: '$45 - $65',
        duration: '45 min',
        image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600',
        features: ['Hot Towel Treatment', 'Precision Cut', 'Style & Finish', 'Complimentary Beverage']
      },
      {
        name: 'Bang Trim',
        description: 'Quick bang refresh between full haircuts.',
        price: '$15',
        duration: '15 min',
        image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600',
        features: ['Quick Service', 'Shape & Style', 'Walk-ins Welcome']
      },
      {
        name: 'Blow Dry & Style',
        description: 'Professional blowout for any occasion. Sleek, voluminous, or bouncy curls.',
        price: '$55 - $75',
        duration: '45 min',
        image: 'https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?w=600',
        features: ['Wash & Deep Condition', 'Heat Protection', 'Professional Styling', 'Finishing Products']
      }
    ]
  },
  {
    category: 'Hair Color Services',
    icon: FaPaintBrush,
    services: [
      {
        name: 'Full Color',
        description: 'Complete color transformation from root to tip. Custom color formulation.',
        price: '$120 - $180',
        duration: '2-3 hours',
        image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=600',
        features: ['Color Consultation', 'Custom Formula', 'Root to Tip Application', 'Toner & Gloss', 'Blow Dry Included']
      },
      {
        name: 'Balayage / Ombre',
        description: 'Hand-painted highlights for natural, sun-kissed dimension.',
        price: '$180 - $280',
        duration: '3-4 hours',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600',
        features: ['Premium Technique', 'Custom Placement', 'Toner Treatment', 'Bond Protection', 'Style & Finish']
      },
      {
        name: 'Highlights / Lowlights',
        description: 'Traditional foil highlighting for precise color placement.',
        price: '$150 - $250',
        duration: '2.5-3.5 hours',
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600',
        features: ['Full or Partial', 'Precision Foiling', 'Toning Service', 'Deep Conditioning', 'Styling']
      },
      {
        name: 'Color Correction',
        description: 'Expert correction for previous color mishaps. Consultation required.',
        price: '$250 - $500+',
        duration: '4-6 hours',
        image: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=600',
        features: ['Detailed Consultation', 'Multi-Step Process', 'Bond Treatment', 'Custom Timeline', 'Follow-up Included']
      },
      {
        name: 'Root Touch-up',
        description: 'Refresh your roots between full color services.',
        price: '$85 - $110',
        duration: '1-1.5 hours',
        image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600',
        features: ['Root Application', 'Perfect Match', 'Quick Service', 'Blow Dry']
      },
      {
        name: 'Toner / Gloss',
        description: 'Add shine and adjust tone for perfect color.',
        price: '$65 - $95',
        duration: '45 min',
        image: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=600',
        features: ['Custom Toning', 'Shine Enhancement', 'Color Refresh', 'Quick Process']
      }
    ]
  },
  {
    category: 'Hair Extensions',
    icon: FaGem,
    services: [
      {
        name: 'Tape-In Extensions',
        description: 'Seamless, reusable extensions that lay flat for natural look.',
        price: '$400 - $800',
        duration: '2-3 hours',
        image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600',
        features: ['Premium Human Hair', '100g - 200g', 'Color Matching', 'Installation Included', '6-8 Week Reapplication']
      },
      {
        name: 'Fusion Extensions',
        description: 'Long-lasting keratin bond extensions for maximum hold.',
        price: '$600 - $1200',
        duration: '3-4 hours',
        image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600',
        features: ['Keratin Bonds', '100-200 Strands', 'Natural Movement', '3-4 Month Wear', 'Custom Length']
      },
      {
        name: 'Microlink Extensions',
        description: 'No heat or glue - gentle bead attachment method.',
        price: '$500 - $1000',
        duration: '3-4 hours',
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600',
        features: ['Heat-Free Method', 'Customizable', 'Hair Health Safe', '2-3 Month Wear', 'Easy Maintenance']
      },
      {
        name: 'Extension Maintenance',
        description: 'Move-up service for tape-in or microlink extensions.',
        price: '$150 - $300',
        duration: '1.5-2 hours',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600',
        features: ['Removal', 'Reinstallation', 'Tightening', 'Styling']
      }
    ]
  },
  {
    category: 'Treatments & Spa',
    icon: FaSpa,
    services: [
      {
        name: 'Keratin Treatment',
        description: 'Brazilian keratin smoothing for frizz-free, shiny hair lasting 3-4 months.',
        price: '$250 - $400',
        duration: '2.5-3 hours',
        image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600',
        features: ['Deep Smoothing', 'Frizz Elimination', '3-4 Month Results', 'Formaldehyde-Free', 'Aftercare Kit']
      },
      {
        name: 'Deep Conditioning Treatment',
        description: 'Intensive hydration and repair for damaged hair.',
        price: '$45 - $75',
        duration: '30 min',
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600',
        features: ['Custom Formula', 'Steam Treatment', 'Scalp Massage', 'Instant Results']
      },
      {
        name: 'Olaplex Treatment',
        description: 'Bond-building treatment to restore hair integrity.',
        price: '$55 - $85',
        duration: '45 min',
        image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=600',
        features: ['Bond Repair', 'Strength Building', 'Add to Any Service', 'Professional Grade']
      },
      {
        name: 'Scalp Treatment',
        description: 'Detoxifying scalp therapy with massage and nourishment.',
        price: '$65 - $95',
        duration: '45 min',
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600',
        features: ['Scalp Analysis', 'Deep Cleanse', 'Massage', 'Treatment Mask']
      }
    ]
  },
  {
    category: 'Bridal & Special Events',
    icon: FaMagic,
    services: [
      {
        name: 'Bridal Hair Package',
        description: 'Complete bridal hair service with trial and day-of styling.',
        price: '$250 - $400',
        duration: 'Trial + Event Day',
        image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600',
        features: ['Consultation', 'Trial Session', 'Event Day Styling', 'Touch-up Kit', 'Travel Available']
      },
      {
        name: 'Bridal Party Hair',
        description: 'Professional styling for bridesmaids and family.',
        price: '$85 - $120 per person',
        duration: '45-60 min each',
        image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600',
        features: ['Updos or Down Styles', 'Professional Products', 'Long-lasting Hold', 'Group Rates']
      },
      {
        name: 'Special Occasion Styling',
        description: 'Elegant styles for proms, galas, and special events.',
        price: '$75 - $120',
        duration: '60 min',
        image: 'https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?w=600',
        features: ['Custom Style', 'Professional Finish', 'Photo-Ready', 'Accessories Placement']
      }
    ]
  }
]

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Services' },
    ...allServices.map(cat => ({ id: cat.category, name: cat.category }))
  ]

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(cat => cat.category === selectedCategory)

  return (
    <>
      <Head>
        <title>Our Services | New Image Hair Salon Calgary - Hair Color, Cuts, Extensions</title>
        <meta name="description" content="Explore premium hair services in Calgary: haircuts, balayage, color, extensions, keratin treatments, and bridal styling. Expert stylists with 8+ years experience." />
        <meta name="keywords" content="hair salon Calgary, haircut Calgary, balayage Calgary, hair color, hair extensions Calgary, keratin treatment, bridal hair Calgary, hair salon NE Calgary" />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <FaScissors className="text-7xl text-primary mx-auto mb-4 animate-float" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-heading font-bold shimmer-text mb-6"
          >
            Our Services
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-luxury max-w-3xl mx-auto"
          >
            Premium Hair Transformations Tailored to You
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-black sticky top-0 z-40 border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'luxury-button text-white'
                    : 'glass-effect text-gray-300 hover:text-white border border-primary/30'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-black via-secondary to-black">
        <div className="container mx-auto px-4">
          {filteredServices.map((category, catIndex) => (
            <div key={catIndex} className="mb-20">
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <category.icon className="text-6xl text-primary mx-auto mb-4" />
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                  {category.category}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
              </motion.div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: serviceIndex * 0.1 }}
                    className="premium-card group"
                  >
                    <div className="glass-effect rounded-3xl overflow-hidden h-full flex flex-col">
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        
                        {/* Price Badge */}
                        <div className="absolute top-4 right-4 bg-primary px-4 py-2 rounded-full">
                          <span className="text-white font-bold">{service.price}</span>
                        </div>

                        {/* Duration Badge */}
                        <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
                          <span className="text-primary text-sm font-semibold">{service.duration}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-2xl font-heading font-bold text-white mb-3">
                          {service.name}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 leading-relaxed flex-1">
                          {service.description}
                        </p>

                        {/* Features */}
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                              <FaCheck className="text-primary mt-1 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Book Button */}
                        <motion.a
                          href={`https://wa.me/14037013610?text=Hi! I'd like to book ${service.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="block w-full text-center luxury-button py-3 rounded-full font-semibold text-white"
                        >
                          <FaWhatsapp className="inline mr-2" />
                          BOOK NOW
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Not Sure Which Service Is Right for You?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Book a free consultation with our expert stylists to create your perfect hair plan
            </p>
            <a
              href="https://wa.me/14037013610?text=Hi! I'd like to book a free consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block luxury-button px-10 py-4 rounded-full font-semibold text-white text-lg"
            >
              <FaWhatsapp className="inline mr-2" />
              BOOK FREE CONSULTATION
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BookingButton />
    </>
  )
}
