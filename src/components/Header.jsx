import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-effect shadow-2xl py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Animated Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="flex items-center gap-3"
            >
              <div className="relative w-16 h-16 animate-float">
                <Image
                  src="/logo/logo.svg"
                  alt="New Image Hair Salon Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="hidden md:block">
                <h1 className="text-2xl font-heading font-bold shimmer-text">
                  NEW IMAGE
                </h1>
                <p className="text-xs text-primary tracking-widest">HAIR SALON</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.path}
                  className="text-sm font-medium text-white hover:text-primary transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Social & CTA */}
          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
              href="https://www.instagram.com/newimage_yyc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-primary hover:text-accent transition-colors"
            >
              <FaInstagram />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://wa.me/14037013610?text=Hi! I would like to book an appointment at New Image Hair Salon"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 luxury-button px-6 py-3 rounded-full text-white font-semibold text-sm"
            >
              <FaWhatsapp className="text-lg" />
              BOOK NOW
            </motion.a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden text-3xl text-primary"
            >
              {mobileMenu ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: mobileMenu ? 'auto' : 0,
            opacity: mobileMenu ? 1 : 0
          }}
          className="lg:hidden overflow-hidden"
        >
          <nav className="flex flex-col gap-4 pt-6 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileMenu(false)}
                className="text-white hover:text-primary transition-colors py-2 border-b border-primary/20"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://wa.me/14037013610"
              className="luxury-button px-6 py-3 rounded-full text-center text-white font-semibold mt-4"
            >
              <FaWhatsapp className="inline mr-2" />
              BOOK APPOINTMENT
            </a>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  )
}
