import { motion } from 'framer-motion'
import { FaStar, FaGoogle, FaQuoteLeft } from 'react-icons/fa'
import { useState, useEffect } from 'react'

// Sample reviews - Replace with real Google Reviews API data
const reviews = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    date: '2 weeks ago',
    text: 'Absolutely amazing experience! The stylists are incredibly talented and the salon has such a luxurious vibe. My balayage turned out perfect!',
    service: 'Balayage & Haircut',
    image: 'https://i.pravatar.cc/150?img=1'
  },
  {
    name: 'Michael Chen',
    rating: 5,
    date: '1 month ago',
    text: 'Best salon in Calgary! Professional, friendly, and they really listen to what you want. My wife and I both go here now.',
    service: 'Men\'s Haircut',
    image: 'https://i.pravatar.cc/150?img=12'
  },
  {
    name: 'Emily Rodriguez',
    rating: 5,
    date: '3 weeks ago',
    text: 'I got my hair extensions done here and I couldn\'t be happier! They look so natural and the quality is outstanding. Highly recommend!',
    service: 'Hair Extensions',
    image: 'https://i.pravatar.cc/150?img=5'
  },
  {
    name: 'David Thompson',
    rating: 5,
    date: '1 week ago',
    text: 'The keratin treatment changed my life! My hair has never been this smooth. The staff is professional and the salon is beautiful.',
    service: 'Keratin Treatment',
    image: 'https://i.pravatar.cc/150?img=8'
  },
  {
    name: 'Jessica Park',
    rating: 5,
    date: '2 months ago',
    text: 'They did my bridal hair and it was PERFECT! Trial session was thorough and the day-of styling exceeded my expectations. Thank you!',
    service: 'Bridal Styling',
    image: 'https://i.pravatar.cc/150?img=9'
  },
  {
    name: 'Amanda Wilson',
    rating: 5,
    date: '3 days ago',
    text: 'Love this place! The atmosphere is so relaxing and luxurious. My color always turns out exactly how I want it. Worth every penny!',
    service: 'Color & Highlights',
    image: 'https://i.pravatar.cc/150?img=10'
  }
]

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const avgRating = 5.0
  const totalReviews = 247

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-secondary via-black to-secondary">
      {/* Animated Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <FaGoogle className="text-5xl text-primary" />
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-5xl font-bold text-white">{avgRating}</span>
                <div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-xl" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-400">{totalReviews} Google Reviews</p>
                </div>
              </div>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            <span className="shimmer-text">Client Love Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our valued clients
          </p>
        </motion.div>

        {/* Featured Review Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: currentReview === index ? 1 : 0,
                  scale: currentReview === index ? 1 : 0.8,
                  display: currentReview === index ? 'block' : 'none'
                }}
                transition={{ duration: 0.5 }}
                className="glass-effect rounded-3xl p-8 md:p-12"
              >
                <FaQuoteLeft className="text-6xl text-primary/30 mb-6" />
                
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full border-2 border-primary"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-white">{review.name}</h4>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400 text-sm" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">{review.date}</span>
                    </div>
                  </div>
                </div>

                <p className="text-2xl text-gray-200 leading-relaxed mb-4 font-light italic">
                  "{review.text}"
                </p>

                <div className="inline-block bg-primary/20 px-4 py-2 rounded-full border border-primary">
                  <span className="text-primary font-semibold text-sm">{review.service}</span>
                </div>
              </motion.div>
            ))}

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentReview === index ? 'bg-primary w-8' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.slice(0, 6).map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl p-6 premium-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-xs" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                {review.text}
              </p>
              <div className="text-xs text-primary">{review.service}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-button px-8 py-4 rounded-full font-semibold text-white flex items-center gap-3"
          >
            <FaGoogle />
            LEAVE A REVIEW
          </a>
          <a
            href="/reviews"
            className="glass-effect border-2 border-primary px-8 py-4 rounded-full font-semibold text-white hover:bg-primary/20 transition-all"
          >
            READ ALL REVIEWS
          </a>
        </motion.div>
      </div>
    </section>
  )
}
