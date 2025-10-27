import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Quick Links': [
      { name: 'About Us', path: '/about' },
      { name: 'Our Services', path: '/services' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'Pricing', path: '/pricing' }
    ],
    'Services': [
      { name: 'Haircuts & Styling', path: '/services#haircuts' },
      { name: 'Hair Color', path: '/services#color' },
      { name: 'Hair Extensions', path: '/services#extensions' },
      { name: 'Bridal Services', path: '/services#bridal' }
    ],
    'Resources': [
      { name: 'Blog', path: '/blog' },
      { name: 'Reviews', path: '/reviews' },
      { name: 'Contact Us', path: '/contact' },
      { name: 'Book Appointment', path: 'https://wa.me/14037013610' }
    ]
  }

  return (
    <footer className="relative bg-gradient-to-b from-black via-secondary to-black border-t border-primary/20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            animate={{
              y: [0, -1000],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: '100%'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-16 h-16">
                  <Image src="/logo/logo.svg" alt="New Image Hair Salon" width={64} height={64} />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold shimmer-text">NEW IMAGE</h3>
                  <p className="text-xs text-primary tracking-widest">HAIR SALON</p>
                </div>
              </motion.div>
            </Link>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Calgary's premier destination for luxury hair styling, coloring, and treatments. 
              Experience the art of hair transformation with our expert stylists.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: FaInstagram, url: 'https://www.instagram.com/newimage_yyc', color: 'hover:text-pink-500' },
                { icon: FaFacebook, url: '#', color: 'hover:text-blue-500' },
                { icon: FaTwitter, url: '#', color: 'hover:text-sky-400' },
                { icon: FaWhatsapp, url: 'https://wa.me/14037013610', color: 'hover:text-green-500' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className={`w-12 h-12 glass-effect rounded-full flex items-center justify-center text-xl text-white ${social.color} transition-colors`}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-lg font-heading font-bold text-white mb-6 relative inline-block">
                {title}
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary" />
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info Bar */}
        <div className="glass-effect rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <h5 className="font-semibold text-white mb-1">Location</h5>
                <p className="text-sm text-gray-400">63 Cornerstone Cir NE<br />Calgary, AB T3N 1H1</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                <FaPhone className="text-xl" />
              </div>
              <div>
                <h5 className="font-semibold text-white mb-1">Phone</h5>
                <a href="tel:+14037013610" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  +1 (403) 701-3610
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <h5 className="font-semibold text-white mb-1">Email</h5>
                <a href="mailto:info@newimageyyc.ca" className="text-sm text-gray-400 hover:text-primary transition-colors">
                  info@newimageyyc.ca
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                <FaClock className="text-xl" />
              </div>
              <div>
                <h5 className="font-semibold text-white mb-1">Hours</h5>
                <p className="text-sm text-gray-400">Mon-Sat: 9AM-7PM<br />Sunday: 10AM-5PM</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} New Image Hair Salon. All rights reserved. | Crafted with ❤️ in Calgary
            </p>
            
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <a
                href="https://hanunova.oneapp.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
              >
                Powered by <span className="font-bold text-primary">HanuNova</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
