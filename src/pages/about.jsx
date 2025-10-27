import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingButton from '@/components/BookingButton'
import { motion } from 'framer-motion'
import { FaAward, FaHeart, FaStar, FaUsers } from 'react-icons/fa'

export default function About() {
  const stats = [
    { icon: FaAward, number: '8+', label: 'Years of Excellence' },
    { icon: FaUsers, number: '5000+', label: 'Happy Clients' },
    { icon: FaStar, number: '5.0', label: 'Average Rating' },
    { icon: FaHeart, number: '100%', label: 'Satisfaction' }
  ]

  const team = [
    {
      name: 'Sarah Martinez',
      role: 'Master Stylist & Colorist',
      image: 'https://i.pravatar.cc/400?img=1',
      specialty: 'Balayage & Color Correction',
      experience: '10 years'
    },
    {
      name: 'Emily Chen',
      role: 'Senior Hair Extension Specialist',
      image: 'https://i.pravatar.cc/400?img=5',
      specialty: 'Extensions & Hair Restoration',
      experience: '8 years'
    },
    {
      name: 'Jessica Thompson',
      role: 'Bridal & Event Specialist',
      image: 'https://i.pravatar.cc/400?img=9',
      specialty: 'Updos & Special Occasions',
      experience: '7 years'
    }
  ]

  return (
    <>
      <Head>
        <title>About Us | New Image Hair Salon Calgary - Meet Our Expert Team</title>
        <meta name="description" content="Discover the story behind Calgary's premier hair salon. Meet our award-winning stylists with 8+ years of experience in luxury hair transformations." />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920)' }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-heading font-bold shimmer-text mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-luxury max-w-3xl mx-auto px-4"
          >
            Where Passion Meets Perfection in Every Style
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-b from-black via-secondary to-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-heading font-bold text-white mb-6">
                Crafting Beauty Since 2016
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  New Image Hair Salon was born from a simple vision: to create a luxurious sanctuary 
                  where artistry and expertise combine to deliver stunning hair transformations.
                </p>
                <p>
                  Located in the heart of Calgary's vibrant NE community, we've spent over 8 years 
                  perfecting our craft and building lasting relationships with our valued clients.
                </p>
                <p>
                  Our team of award-winning stylists stays at the forefront of industry trends, 
                  continuously training in advanced techniques to bring you the latest in hair care 
                  and styling innovation.
                </p>
                <p>
                  Every client who walks through our doors receives personalized attention, expert 
                  consultation, and a commitment to excellence that has made us Calgary's most trusted 
                  destination for premium hair services.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400"
                alt="Salon Interior"
                className="rounded-2xl premium-card h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400"
                alt="Hair Styling"
                className="rounded-2xl premium-card h-64 object-cover mt-12"
              />
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400"
                alt="Color Treatment"
                className="rounded-2xl premium-card h-64 object-cover -mt-12"
              />
              <img
                src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=400"
                alt="Salon Experience"
                className="rounded-2xl premium-card h-64 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <stat.icon className="text-4xl text-primary" />
                </div>
                <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-secondary via-black to-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              <span className="shimmer-text">Meet Our Artists</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our talented team of master stylists brings decades of combined experience 
              and a passion for creating stunning transformations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="premium-card"
              >
                <div className="glass-effect rounded-3xl overflow-hidden">
                  <div className="relative h-80">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <div className="text-primary font-semibold mb-3">{member.role}</div>
                    <div className="space-y-2 text-sm text-gray-400">
                      <p>Specialty: {member.specialty}</p>
                      <p>Experience: {member.experience}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BookingButton />
    </>
  )
}
