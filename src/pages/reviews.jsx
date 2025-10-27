import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingButton from '@/components/BookingButton'
import { motion } from 'framer-motion'
import { FaStar, FaGoogle, FaQuoteLeft, FaUserCircle } from 'react-icons/fa'
import { useState } from 'react'

const reviewsData = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    date: '2 weeks ago',
    verified: true,
    text: 'Absolutely amazing experience! The stylists are incredibly talented and the salon has such a luxurious vibe. My balayage turned out perfect and I get compliments everywhere I go. Worth every penny!',
    service: 'Balayage & Haircut',
    image: 'https://i.pravatar.cc/150?img=1',
    response: 'Thank you Sarah! We loved working with you and can\'t wait to see you again! ✨'
  },
  {
    name: 'Michael Chen',
    rating: 5,
    date: '1 month ago',
    verified: true,
    text: 'Best salon in Calgary, hands down! Professional, friendly, and they really listen to what you want. My wife and I both go here now and we always leave happy. The attention to detail is outstanding.',
    service: 'Men\'s Haircut',
    image: 'https://i.pravatar.cc/150?img=12',
    response: 'Michael, thank you for trusting us with both your styles! We appreciate you! 💈'
  },
  {
    name: 'Emily Rodriguez',
    rating: 5,
    date: '3 weeks ago',
    verified: true,
    text: 'I got my hair extensions done here and I couldn\'t be happier! They look so natural and the quality is outstanding. The stylist took time to match my color perfectly. Highly recommend!',
    service: 'Hair Extensions',
    image: 'https://i.pravatar.cc/150?img=5',
    response: 'Emily! Your extensions look stunning on you! Thank you for the kind words! 💕'
  },
  {
    name: 'David Thompson',
    rating: 5,
    date: '1 week ago',
    verified: true,
    text: 'The keratin treatment changed my life! My hair has never been this smooth and manageable. The staff is professional, knowledgeable, and the salon is beautiful. Five stars all the way!',
    service: 'Keratin Treatment',
    image: 'https://i.pravatar.cc/150?img=8',
    response: 'David, so happy the keratin treatment is working perfectly for you! 🌟'
  },
  {
    name: 'Jessica Park',
    rating: 5,
    date: '2 months ago',
    verified: true,
    text: 'They did my bridal hair and it was PERFECT! The trial session was thorough and the day-of styling exceeded my expectations. My hair stayed perfect all day and night. Thank you for making my day special!',
    service: 'Bridal Styling',
    image: 'https://i.pravatar.cc/150?img=9',
    response: 'Jessica, it was an honor to be part of your special day! Congratulations! 👰'
  },
  {
    name: 'Amanda Wilson',
    rating: 5,
    date: '3 days ago',
    verified: true,
    text: 'Love this place! The atmosphere is so relaxing and luxurious. My color always turns out exactly how I want it. The stylists are true artists. I won\'t go anywhere else!',
    service: 'Color & Highlights',
    image: 'https://i.pravatar.cc/150?img=10',
    response: 'Amanda, we love having you! Thank you for being such a loyal client! ❤️'
  },
  {
    name: 'Robert Martinez',
    rating: 5,
    date: '1 month ago',
    verified: true,
    text: 'Clean, modern salon with top-notch service. My haircut was exactly what I asked for. Great conversation and they even offered me a beverage. Will definitely be back!',
    service: 'Men\'s Haircut & Beard Trim',
    image: 'https://i.pravatar.cc/150?img=13',
    response: 'Robert, thanks for the awesome review! See you next time! 🙌'
  },
  {
    name: 'Lisa Chang',
    rating: 5,
    date: '2 weeks ago',
    verified: true,
    text: 'Best color correction I\'ve ever had! They fixed a major hair disaster from another salon and my hair looks better than ever. So grateful for their expertise!',
    service: 'Color Correction',
    image: 'https://i.pravatar.cc/150?img=20',
    response: 'Lisa, we\'re so glad we could help! Your hair transformation was amazing! ✨'
  },
  {
    name: 'Jennifer Brown',
    rating: 5,
    date: '4 days ago',
    verified: true,
    text: 'The deep conditioning treatment was incredible! My damaged hair feels like silk now. The scalp massage was so relaxing. This is my new self-care ritual!',
    service: 'Deep Conditioning Treatment',
    image: 'https://i.pravatar.cc/150?img=23',
    response: 'Jennifer, self-care is so important! We\'re happy to be part of your routine! 💆‍♀️'
  },
  {
    name: 'Tom Anderson',
    rating: 5,
    date: '3 weeks ago',
    verified: true,
    text: 'Took my teenage daughter here for her first highlights and they were so patient and did an amazing job. She left feeling like a million bucks!',
    service: 'Highlights',
    image: 'https://i.pravatar.cc/150?img=33',
    response: 'Tom, we loved meeting you both! Tell her we said hi! 🌸'
  },
  {
    name: 'Rachel Kim',
    rating: 5,
    date: '5 days ago',
    verified: true,
    text: 'My blowout lasted for 3 days! The stylist really knows how to work magic with a blow dryer. Plus the salon smells amazing and the vibe is so chic.',
    service: 'Blow Dry & Style',
    image: 'https://i.pravatar.cc/150?img=16',
    response: 'Rachel, thanks for noticing! We put a lot of thought into every detail! 💫'
  },
  {
    name: 'Mark Stevens',
    rating: 5,
    date: '1 week ago',
    verified: true,
    text: 'Great experience from start to finish. Online booking was easy, staff was welcoming, and my haircut was perfect. Reasonable prices for the quality you get.',
    service: 'Men\'s Haircut',
    image: 'https://i.pravatar.cc/150?img=14',
    response: 'Mark, we appreciate the feedback! Glad you enjoyed the experience! 👍'
  }
]

const ratingBreakdown = {
  5: 247,
  4: 8,
  3: 2,
  2: 0,
  1: 0
}

export default function Reviews() {
  const [filter, setFilter] = useState('all')
  
  const totalReviews = Object.values(ratingBreakdown).reduce((a, b) => a + b, 0)
  const avgRating = 5.0
  
  const filteredReviews = filter === 'all' 
    ? reviewsData 
    : reviewsData.filter(review => review.service === filter)

  const services = [...new Set(reviewsData.map(r => r.service))]

  return (
    <>
      <Head>
        <title>Client Reviews | New Image Hair Salon Calgary - 5 Star Rated</title>
        <meta name="description" content="Read verified reviews from our happy clients. 5.0 star rating on Google with 247+ reviews. See why New Image is Calgary's top-rated hair salon." />
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
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="mb-6"
          >
            <FaGoogle className="text-7xl text-primary mx-auto mb-4" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-heading font-bold shimmer-text mb-6"
          >
            Client Reviews
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4 text-3xl"
          >
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
            <span className="text-white font-bold">{avgRating}</span>
            <span className="text-gray-400">({totalReviews} reviews)</span>
          </motion.div>
        </div>
      </section>

      {/* Rating Breakdown */}
      <section className="py-16 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-effect rounded-3xl p-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Overall Rating */}
              <div className="text-center">
                <div className="text-7xl font-bold text-primary mb-4">{avgRating}</div>
                <div className="flex justify-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-3xl" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg">Based on {totalReviews} reviews</p>
                <a
                  href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 luxury-button px-8 py-3 rounded-full font-semibold text-white"
                >
                  <FaGoogle className="inline mr-2" />
                  WRITE A REVIEW
                </a>
              </div>

              {/* Rating Bars */}
              <div className="space-y-3">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center gap-4">
                    <span className="text-white font-semibold w-12">{rating} ★</span>
                    <div className="flex-1 h-3 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(ratingBreakdown[rating] / totalReviews) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: rating * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                    <span className="text-gray-400 w-12 text-right">{ratingBreakdown[rating]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-secondary sticky top-0 z-40 border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === 'all'
                  ? 'luxury-button text-white'
                  : 'glass-effect text-gray-300 border border-primary/30'
              }`}
            >
              All Reviews
            </button>
            {services.map((service) => (
              <button
                key={service}
                onClick={() => setFilter(service)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  filter === service
                    ? 'luxury-button text-white'
                    : 'glass-effect text-gray-300 border border-primary/30'
                }`}
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-gradient-to-b from-secondary via-black to-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-effect rounded-2xl p-6 premium-card"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full border-2 border-primary"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-white">{review.name}</h4>
                      {review.verified && (
                        <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded">✓ Verified</span>
                      )}
                    </div>
                    <div className="flex gap-1 mb-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                    <p className="text-xs text-gray-400">{review.date}</p>
                  </div>
                </div>

                {/* Review Text */}
                <FaQuoteLeft className="text-2xl text-primary/30 mb-2" />
                <p className="text-gray-300 leading-relaxed mb-4">
                  {review.text}
                </p>

                {/* Service */}
                <div className="inline-block bg-primary/20 px-3 py-1 rounded-full border border-primary/30 mb-4">
                  <span className="text-primary text-xs font-semibold">{review.service}</span>
                </div>

                {/* Owner Response */}
                {review.response && (
                  <div className="bg-black/50 rounded-lg p-4 border-l-2 border-primary">
                    <div className="flex items-center gap-2 mb-2">
                      <FaUserCircle className="text-primary" />
                      <span className="text-sm font-semibold text-white">New Image Hair Salon</span>
                    </div>
                    <p className="text-sm text-gray-300">{review.response}</p>
                  </div>
                )}
              </motion.div>
            ))}
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
              Ready to Experience It Yourself?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients and book your transformation today
            </p>
            <a
              href="https://wa.me/14037013610?text=Hi! I'd like to book an appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block luxury-button px-10 py-4 rounded-full font-semibold text-white text-lg"
            >
              BOOK YOUR APPOINTMENT
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BookingButton />
    </>
  )
}
