import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingButton from '@/components/BookingButton'
import { motion } from 'framer-motion'
import { FaCheck, FaWhatsapp, FaStar, FaCrown, FaGem } from 'react-icons/fa'
import { useState } from 'react'

const pricingData = {
  'Haircuts & Styling': [
    { service: "Women's Haircut", price: '$65 - $85', description: 'Consultation, wash, precision cut, blow dry & style' },
    { service: "Men's Haircut", price: '$45 - $65', description: 'Hot towel treatment, cut, style & finish' },
    { service: "Children's Haircut (Under 12)", price: '$35 - $45', description: 'Patient, professional care for kids' },
    { service: 'Bang Trim', price: '$15', description: 'Quick refresh between cuts' },
    { service: 'Blow Dry & Style', price: '$55 - $75', description: 'Wash, professional blow dry & styling' },
    { service: 'Formal Updo', price: '$85 - $120', description: 'Elegant styling for special occasions' },
    { service: 'Hair Extensions Styling', price: '$45 - $65', description: 'Professional styling for extensions' }
  ],
  'Hair Color': [
    { service: 'Full Color (Single Process)', price: '$120 - $180', description: 'Root to tip color with toner & blow dry' },
    { service: 'Root Touch-up', price: '$85 - $110', description: 'Refresh roots, toner included' },
    { service: 'Partial Highlights', price: '$130 - $180', description: 'Face-framing or specific placement' },
    { service: 'Full Highlights', price: '$180 - $250', description: 'Complete highlighting with toner' },
    { service: 'Balayage / Ombre', price: '$180 - $280', description: 'Hand-painted dimensional color' },
    { service: 'Color Correction', price: '$250 - $500+', description: 'Expert fixing of color mistakes (consultation required)' },
    { service: 'Toner / Gloss', price: '$65 - $95', description: 'Shine enhancement and tone adjustment' },
    { service: 'Fashion Colors', price: '$150 - $300', description: 'Creative colors (pink, blue, purple, etc.)' }
  ],
  'Hair Extensions': [
    { service: 'Tape-In Extensions (Install)', price: '$400 - $800', description: '100g-200g premium human hair included' },
    { service: 'Tape-In Move-Up', price: '$150 - $300', description: 'Removal & reinstallation service' },
    { service: 'Fusion Extensions', price: '$600 - $1200', description: '100-200 strands keratin bond' },
    { service: 'Microlink Extensions', price: '$500 - $1000', description: 'Heat-free bead attachment method' },
    { service: 'Extension Removal', price: '$75 - $150', description: 'Professional safe removal' },
    { service: 'Extension Color Match', price: '$50+', description: 'Custom color to match extensions' }
  ],
  'Treatments': [
    { service: 'Keratin Treatment', price: '$250 - $400', description: 'Brazilian smoothing, 3-4 month results' },
    { service: 'Deep Conditioning Treatment', price: '$45 - $75', description: 'Intensive repair & hydration' },
    { service: 'Olaplex Treatment', price: '$55 - $85', description: 'Bond rebuilding therapy' },
    { service: 'Scalp Treatment', price: '$65 - $95', description: 'Detoxifying scalp therapy with massage' },
    { service: 'K18 Treatment', price: '$65 - $95', description: 'Molecular repair treatment' },
    { service: 'Protein Treatment', price: '$45 - $65', description: 'Strength restoration for damaged hair' }
  ],
  'Bridal & Events': [
    { service: 'Bridal Hair Trial', price: '$100 - $150', description: 'Practice session before wedding' },
    { service: 'Bridal Hair (Wedding Day)', price: '$150 - $250', description: 'Day-of styling with touch-up kit' },
    { service: 'Bridal Package', price: '$250 - $400', description: 'Trial + wedding day styling' },
    { service: 'Bridesmaid Hair', price: '$85 - $120', description: 'Professional styling per person' },
    { service: 'Flower Girl Hair', price: '$45 - $65', description: 'Sweet styles for little ones' },
    { service: 'Special Event Styling', price: '$75 - $120', description: 'Prom, gala, or formal event hair' }
  ]
}

const packages = [
  {
    name: 'Classic',
    icon: FaStar,
    price: '$150',
    originalPrice: '$200',
    popular: false,
    description: 'Perfect for first-time clients',
    features: [
      "Women's Haircut",
      'Deep Conditioning Treatment',
      'Blow Dry & Style',
      'Take-home Product Sample',
      '10% off Next Visit'
    ],
    gradient: 'from-gray-500 to-gray-700'
  },
  {
    name: 'Luxury',
    icon: FaCrown,
    price: '$300',
    originalPrice: '$400',
    popular: true,
    description: 'Our most popular package',
    features: [
      "Women's Haircut",
      'Partial Highlights or Balayage',
      'Olaplex Treatment',
      'Scalp Massage',
      'Blow Dry & Style',
      'Complimentary Beverage',
      '15% off Next Visit'
    ],
    gradient: 'from-primary to-accent'
  },
  {
    name: 'Ultimate',
    icon: FaGem,
    price: '$550',
    originalPrice: '$700',
    popular: false,
    description: 'The complete transformation',
    features: [
      "Women's Haircut",
      'Full Color or Balayage',
      'Keratin Treatment',
      'Deep Conditioning',
      'Scalp Treatment & Massage',
      'Premium Styling',
      'Take-home Care Kit',
      '20% off Next Visit',
      'Priority Booking'
    ],
    gradient: 'from-purple-600 to-pink-600'
  }
]

export default function Pricing() {
  const [selectedCategory, setSelectedCategory] = useState('Haircuts & Styling')

  const categories = Object.keys(pricingData)

  return (
    <>
      <Head>
        <title>Pricing | New Image Hair Salon Calgary - Transparent, Competitive Rates</title>
        <meta name="description" content="View our complete pricing for haircuts, color, extensions, treatments and bridal services. Competitive rates in Calgary NE. Book your appointment today!" />
        <meta name="keywords" content="hair salon prices Calgary, haircut prices, hair color cost, balayage price Calgary, hair extensions cost, keratin treatment price, bridal hair pricing" />
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
            Our Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-luxury max-w-3xl mx-auto"
          >
            Transparent Pricing for Premium Services
          </motion.p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Premium Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Save big with our curated service packages designed for complete transformations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`premium-card relative ${pkg.popular ? 'md:-mt-8 md:mb-0' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-accent px-6 py-2 rounded-full">
                    <span className="text-white font-bold text-sm">⭐ MOST POPULAR</span>
                  </div>
                )}

                <div className={`glass-effect rounded-3xl overflow-hidden h-full border-2 ${
                  pkg.popular ? 'border-primary' : 'border-primary/30'
                }`}>
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${pkg.gradient} p-8 text-center`}>
                    <pkg.icon className="text-5xl text-white mx-auto mb-4" />
                    <h3 className="text-3xl font-heading font-bold text-white mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-white/80 mb-4">{pkg.description}</p>
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-5xl font-bold text-white">{pkg.price}</span>
                      <div className="text-left">
                        <div className="text-sm text-white/60 line-through">{pkg.originalPrice}</div>
                        <div className="text-xs text-white/80">Save ${parseInt(pkg.originalPrice.slice(1)) - parseInt(pkg.price.slice(1))}</div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-8">
                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <FaCheck className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <a
                      href={`https://wa.me/14037013610?text=Hi! I'm interested in the ${pkg.name} Package`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full text-center py-4 rounded-full font-semibold text-white ${
                        pkg.popular ? 'luxury-button' : 'glass-effect border-2 border-primary hover:bg-primary/20'
                      } transition-all`}
                    >
                      <FaWhatsapp className="inline mr-2" />
                      BOOK {pkg.name.toUpperCase()}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-24 bg-gradient-to-b from-secondary via-black to-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Individual Services
            </h2>
            <p className="text-xl text-gray-300">
              À la carte pricing for all our premium services
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'luxury-button text-white'
                    : 'glass-effect text-gray-300 border border-primary/30 hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Services List */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto"
          >
            <div className="glass-effect rounded-3xl p-8">
              <div className="space-y-1">
                {pricingData[selectedCategory].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-primary/20 last:border-0 py-6 hover:bg-primary/5 transition-colors rounded-xl px-4"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-bold text-white mb-2">
                          {item.service}
                        </h3>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-2xl font-bold text-primary whitespace-nowrap">
                          {item.price}
                        </div>
                        <a
                          href={`https://wa.me/14037013610?text=Hi! I'd like to book ${item.service}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="luxury-button px-6 py-2 rounded-full font-semibold text-white text-sm whitespace-nowrap"
                        >
                          BOOK
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-effect rounded-3xl p-8">
            <h3 className="text-3xl font-heading font-bold text-white mb-6 text-center">
              Important Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h4 className="font-bold text-primary mb-3">Pricing Notes:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Prices may vary based on hair length, thickness, and complexity</li>
                  <li>• All color services include toner and blow dry</li>
                  <li>• Consultation is always free</li>
                  <li>• Package prices valid for 6 months from purchase</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-3">Booking & Cancellation:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• 24-hour cancellation notice required</li>
                  <li>• Deposit may be required for first-time clients</li>
                  <li>• Late arrivals may result in shortened service</li>
                  <li>• We accept cash, credit, and debit cards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to Book Your Transformation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation or to schedule your appointment
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/14037013610?text=Hi! I'd like to book an appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-button px-10 py-4 rounded-full font-semibold text-white text-lg"
              >
                <FaWhatsapp className="inline mr-2" />
                BOOK VIA WHATSAPP
              </a>
              <a
                href="/contact"
                className="glass-effect border-2 border-primary px-10 py-4 rounded-full font-semibold text-white text-lg hover:bg-primary/20 transition-all"
              >
                CONTACT US
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BookingButton />
    </>
  )
}
