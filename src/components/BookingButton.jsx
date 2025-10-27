import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'

export default function BookingButton() {
  const [isOpen, setIsOpen] = useState(false)

  const quickMessages = [
    'I want to book a haircut appointment',
    'I'm interested in hair color services',
    'I need information about hair extensions',
    'I want to book a bridal styling consultation',
    'I have a question about your services'
  ]

  const whatsappNumber = '14037013610'

  return (
    <>
      {/* Quick Message Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          className="fixed bottom-28 right-6 z-50 glass-effect rounded-2xl p-4 w-80 shadow-2xl border border-primary/30"
        >
          <h4 className="font-bold text-white mb-3 text-lg">Quick Booking</h4>
          <div className="space-y-2">
            {quickMessages.map((message, index) => (
              <motion.a
                key={index}
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, x: 5 }}
                className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-3 text-sm text-white transition-all"
              >
                {message}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}

      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl overflow-hidden group"
        >
          {/* Pulse Animation */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-green-500 rounded-full"
          />
          
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            className="relative z-10"
          >
            {isOpen ? '✕' : <FaWhatsapp />}
          </motion.div>

          {/* Notification Badge */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold"
          >
            1
          </motion.div>
        </motion.button>

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-20 top-1/2 -translate-y-1/2 bg-black/90 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap pointer-events-none"
        >
          Book via WhatsApp
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-black/90" />
        </motion.div>
      </motion.button>
    </>
  )
}
