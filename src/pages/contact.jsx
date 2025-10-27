import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingButton from '@/components/BookingButton'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | New Image Hair Salon Calgary - Book Your Appointment</title>
        <meta name="description" content="Visit New Image Hair Salon at 63 Cornerstone Cir NE, Calgary. Call (403) 701-3610 or book via WhatsApp. Open Mon-Sat 9AM-7PM." />
      </Head>

      <Header />

      <section className="pt-32 pb-24 bg-gradient-to-b from-black via-secondary to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-heading font-bold shimmer-text mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready for your transformation? Contact us today to book your appointment
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="glass-effect rounded-3xl p-8">
                <h2 className="text-3xl font-heading font-bold text-white mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: FaMapMarkerAlt,
                      title: 'Visit Us',
                      content: '63 Cornerstone Cir NE\nCalgary, AB T3N 1H1, Canada',
                      link: 'https://maps.app.goo.gl/a8VVR4whMfHFJiMK8'
                    },
                    {
                      icon: FaPhone,
                      title: 'Call Us',
                      content: '+1 (403) 701-3610',
                      link: 'tel:+14037013610'
                    },
                    {
                      icon: FaWhatsapp,
                      title: 'WhatsApp',
                      content: 'Book via WhatsApp',
                      link: 'https://wa.me/14037013610'
                    },
                    {
                      icon: FaEnvelope,
                      title: 'Email',
                      content: 'info@newimageyyc.ca',
                      link: 'mailto:info@newimageyyc.ca'
                    },
                    {
                      icon: FaClock,
                      title: 'Hours',
                      content: 'Mon-Sat: 9:00 AM - 7:00 PM\nSunday: 10:00 AM - 5:00 PM',
                      link: null
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary/10 transition-colors"
                    >
                      <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                        <item.icon className="text-2xl" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-2">{item.title}</h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            target={item.link.startsWith('http') ? '_blank' : undefined}
                            rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-gray-300 hover:text-primary transition-colors whitespace-pre-line"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-300 whitespace-pre-line">{item.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <a
                  href="https://wa.me/14037013610?text=Hi! I would like to book an appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full luxury-button py-4 rounded-xl font-semibold text-white text-center mt-8"
                >
                  <FaWhatsapp className="inline mr-2" />
                  BOOK VIA WHATSAPP
                </a>
              </div>
            </motion.div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-effect rounded-3xl overflow-hidden h-[600px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.123456789!2d-114.0110!3d51.1283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA3JzQxLjkiTiAxMTTCsDAwJzM5LjYiVw!5e0!3m2!1sen!2sca!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="New Image Hair Salon Location"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <BookingButton />
    </>
  )
}
