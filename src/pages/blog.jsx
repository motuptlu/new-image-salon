import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingButton from '@/components/BookingButton'
import { motion } from 'framer-motion'
import { FaCalendar, FaUser, FaTag, FaClock, FaArrowRight } from 'react-icons/fa'
import { useState } from 'react'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: '10 Hair Care Tips for Beautiful, Healthy Hair in Calgary Winter',
    excerpt: 'Winter in Calgary can be harsh on your hair. Learn essential tips to keep your locks healthy, hydrated, and gorgeous all season long.',
    content: 'Full blog content here...',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800',
    author: 'Sarah Martinez',
    authorImage: 'https://i.pravatar.cc/150?img=1',
    date: 'January 15, 2024',
    readTime: '5 min read',
    category: 'Hair Care',
    tags: ['Winter Care', 'Hair Health', 'Tips'],
    featured: true
  },
  {
    id: 2,
    title: 'Balayage vs Highlights: Which Is Right for You?',
    excerpt: 'Confused about the difference between balayage and traditional highlights? We break down both techniques to help you choose.',
    content: 'Full blog content here...',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
    author: 'Emily Chen',
    authorImage: 'https://i.pravatar.cc/150?img=5',
    date: 'January 10, 2024',
    readTime: '7 min read',
    category: 'Color Trends',
    tags: ['Balayage', 'Highlights', 'Color'],
    featured: true
  },
  {
    id: 3,
    title: 'The Ultimate Guide to Hair Extensions: Everything You Need to Know',
    excerpt: 'Thinking about getting hair extensions? Learn about different types, maintenance, costs, and what to expect.',
    content: 'Full blog content here...',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800',
    author: 'Jessica Thompson',
    authorImage: 'https://i.pravatar.cc/150?img=9',
    date: 'January 5, 2024',
    readTime: '10 min read',
    category: 'Extensions',
    tags: ['Extensions', 'Guide', 'Hair Length'],
    featured: true
  },
  {
    id: 4,
    title: '2024 Hair Color Trends: What\'s Hot This Year',
    excerpt: 'From copper tones to dimensional brunettes, discover the hottest hair color trends taking over 2024.',
    content: 'Full blog content here...',
    image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=800',
    author: 'Sarah Martinez',
    authorImage: 'https://i.pravatar.cc/150?img=1',
    date: 'December 28, 2023',
    readTime: '6 min read',
    category: 'Trends',
    tags: ['2024 Trends', 'Color Trends', 'Fashion'],
    featured: false
  },
  {
    id: 5,
    title: 'How to Maintain Your Keratin Treatment for Longer Results',
    excerpt: 'Maximize your keratin treatment investment with these professional tips for long-lasting smooth, frizz-free hair.',
    content: 'Full blog content here...',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800',
    author: 'Emily Chen',
    authorImage: 'https://i.pravatar.cc/150?img=5',
    date: 'December 20, 2023',
    readTime: '5 min read',
    category: 'Treatments',
    tags: ['Keratin', 'Treatment', 'Maintenance'],
    featured: false
  },
  {
    id: 6,
    title: 'Bridal Hair Guide: Choosing the Perfect Wedding Day Style',
    excerpt: 'Your ultimate guide to selecting, planning, and executing flawless bridal hair for your special day.',
    content: 'Full blog content here...',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800',
    author: 'Jessica Thompson',
    authorImage: 'https://i.pravatar.cc/150?img=9',
    date: 'December 15, 2023',
    readTime: '8 min read',
    category: 'Bridal',
    tags: ['Bridal', 'Wedding', 'Special Events'],
    featured: false
  },
  {
    id: 7,
    title: 'The Best Haircuts for Your Face Shape in 2024',
    excerpt: 'Discover which haircuts will flatter your unique face shape and enhance your natural beauty.',
    content: 'Full blog content here...',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800',
    author: 'Sarah Martinez',
    authorImage: 'https://i.pravatar.cc/150?img=1',
    date: 'December 10, 2023',
    readTime: '6 min read',
    category: 'Haircuts',
    tags: ['Haircuts', 'Face Shape', 'Style Guide'],
    featured: false
  },
  {
    id: 8,
    title: 'Color Correction 101: Fixing Hair Color Mistakes',
    excerpt: 'Had a hair color disaster? Learn what color correction is, what to expect, and how to prevent future mishaps.',
    content: 'Full blog content here...',
    image: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=800',
    author: 'Emily Chen',
    authorImage: 'https://i.pravatar.cc/150?img=5',
    date: 'December 5, 2023',
    readTime: '7 min read',
    category: 'Color',
    tags: ['Color Correction', 'Fix', 'Expert Advice'],
    featured: false
  },
  {
    id: 9,
    title: 'Summer to Fall Hair Transition: Easy Color Updates',
    excerpt: 'Transition your hair color from summer brightness to fall richness with these expert recommendations.',
    content: 'Full blog content here...',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800',
    author: 'Jessica Thompson',
    authorImage: 'https://i.pravatar.cc/150?img=9',
    date: 'November 28, 2023',
    readTime: '5 min read',
    category: 'Seasonal',
    tags: ['Seasonal', 'Color', 'Trends'],
    featured: false
  }
]

const categories = ['All', 'Hair Care', 'Color Trends', 'Extensions', 'Trends', 'Treatments', 'Bridal', 'Haircuts', 'Seasonal']

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(post => post.featured)

  return (
    <>
      <Head>
        <title>Hair Care Blog | New Image Hair Salon Calgary - Tips, Trends & Guides</title>
        <meta name="description" content="Expert hair care tips, latest color trends, styling guides and professional advice from Calgary's top hair stylists. Stay updated with our blog." />
        <meta name="keywords" content="hair care blog, hair tips Calgary, hair color trends 2024, hair care advice, styling tips, balayage guide, hair extension tips" />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-heading font-bold shimmer-text mb-6"
          >
            Hair Care Blog
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-luxury mb-8"
          >
            Expert Tips, Trends & Guides from Calgary's Premier Stylists
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-primary/30 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
            />
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-black sticky top-0 z-40 border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'luxury-button text-white'
                    : 'glass-effect text-gray-300 hover:text-white border border-primary/30'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'All' && (
        <section className="py-16 bg-gradient-to-b from-black to-secondary">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold text-white mb-12 text-center"
            >
              Featured Articles
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="premium-card group"
                >
                  <div className="glass-effect rounded-3xl overflow-hidden h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-primary px-4 py-2 rounded-full">
                        <span className="text-white font-bold text-sm">{post.category}</span>
                      </div>

                      {/* Featured Badge */}
                      <div className="absolute top-4 right-4 bg-accent px-4 py-2 rounded-full">
                        <span className="text-white font-bold text-xs">★ FEATURED</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Meta */}
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <FaCalendar className="text-primary" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <FaClock className="text-primary" />
                          {post.readTime}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-300 mb-6 leading-relaxed flex-1">
                        {post.excerpt}
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-primary/20">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <div className="text-white font-semibold text-sm">{post.author}</div>
                          <div className="text-gray-400 text-xs">Expert Stylist</div>
                        </div>
                      </div>

                      {/* Read More */}
                      <Link href={`/blog/${post.id}`}>
                        <motion.button
                          whileHover={{ x: 5 }}
                          className="text-primary font-semibold flex items-center gap-2 group"
                        >
                          Read Full Article
                          <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-16 bg-gradient-to-b from-secondary via-black to-secondary">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-12 text-center"
          >
            {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
          </motion.h2>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-2xl text-gray-400">No articles found. Try a different search or category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="premium-card group"
                >
                  <div className="glass-effect rounded-2xl overflow-hidden h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      
                      {/* Category */}
                      <div className="absolute top-4 left-4 bg-primary/90 px-3 py-1 rounded-full">
                        <span className="text-white font-semibold text-xs">{post.category}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Meta */}
                      <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <FaCalendar className="text-primary" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaClock className="text-primary" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-heading font-bold text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Author & CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-primary/20">
                        <div className="flex items-center gap-2">
                          <img
                            src={post.authorImage}
                            alt={post.author}
                            className="w-8 h-8 rounded-full"
                          />
                          <span className="text-sm text-gray-400">{post.author}</span>
                        </div>
                        <Link href={`/blog/${post.id}`}>
                          <motion.button
                            whileHover={{ x: 5 }}
                            className="text-primary text-sm font-semibold flex items-center gap-1"
                          >
                            Read <FaArrowRight />
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Stay Updated with Hair Care Tips
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for exclusive tips, trends, and special offers
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-primary/30 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
              />
              <button className="luxury-button px-8 py-4 rounded-full font-semibold text-white whitespace-nowrap">
                SUBSCRIBE NOW
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BookingButton />
    </>
  )
}
