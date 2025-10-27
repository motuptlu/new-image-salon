import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaEdit, FaTrash, FaPlus, FaSave, FaImage, FaBlog, FaUsers, FaCog, FaEye } from 'react-icons/fa'
import Head from 'next/head'

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [activeTab, setActiveTab] = useState('hero')
  const [content, setContent] = useState(null)

  // Load content from localStorage
  useEffect(() => {
    const savedContent = localStorage.getItem('siteContent')
    if (savedContent) {
      setContent(JSON.parse(savedContent))
    } else {
      // Default content structure
      setContent({
        hero: {
          slides: [
            { title: 'Luxury Hair Transformations', subtitle: 'Experience Premium Hair Styling', image: '' },
            { title: 'Expert Color Specialists', subtitle: 'Balayage, Highlights & Custom Color', image: '' }
          ]
        },
        services: [],
        gallery: [],
        reviews: [],
        blog: [],
        settings: {
          salonName: 'New Image Hair Salon',
          phone: '+14037013610',
          email: 'info@newimageyyc.ca',
          address: '63 Cornerstone Cir NE, Calgary, AB T3N 1H1',
          instagram: 'https://www.instagram.com/newimage_yyc',
          hours: {
            monday: '9:00 AM - 7:00 PM',
            tuesday: '9:00 AM - 7:00 PM',
            wednesday: '9:00 AM - 7:00 PM',
            thursday: '9:00 AM - 7:00 PM',
            friday: '9:00 AM - 7:00 PM',
            saturday: '9:00 AM - 7:00 PM',
            sunday: '10:00 AM - 5:00 PM'
          }
        }
      })
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    // Change this password to your secure password
    if (password === 'newimage2024') {
      setIsAuthenticated(true)
      localStorage.setItem('adminAuth', 'true')
    } else {
      alert('Incorrect password!')
    }
  }

  const saveContent = () => {
    localStorage.setItem('siteContent', JSON.stringify(content))
    alert('Content saved successfully!')
  }

  const addHeroSlide = () => {
    setContent({
      ...content,
      hero: {
        slides: [...content.hero.slides, { title: '', subtitle: '', image: '' }]
      }
    })
  }

  const updateHeroSlide = (index, field, value) => {
    const newSlides = [...content.hero.slides]
    newSlides[index][field] = value
    setContent({ ...content, hero: { slides: newSlides } })
  }

  const deleteHeroSlide = (index) => {
    const newSlides = content.hero.slides.filter((_, i) => i !== index)
    setContent({ ...content, hero: { slides: newSlides } })
  }

  // Service Management
  const addService = () => {
    setContent({
      ...content,
      services: [
        ...content.services,
        { title: '', description: '', price: '', image: '', features: [] }
      ]
    })
  }

  const updateService = (index, field, value) => {
    const newServices = [...content.services]
    newServices[index][field] = value
    setContent({ ...content, services: newServices })
  }

  const deleteService = (index) => {
    const newServices = content.services.filter((_, i) => i !== index)
    setContent({ ...content, services: newServices })
  }

  // Gallery Management
  const addGalleryImage = () => {
    setContent({
      ...content,
      gallery: [...content.gallery, { url: '', title: '', category: '' }]
    })
  }

  const updateGalleryImage = (index, field, value) => {
    const newGallery = [...content.gallery]
    newGallery[index][field] = value
    setContent({ ...content, gallery: newGallery })
  }

  const deleteGalleryImage = (index) => {
    const newGallery = content.gallery.filter((_, i) => i !== index)
    setContent({ ...content, gallery: newGallery })
  }

  // Blog Management
  const addBlogPost = () => {
    setContent({
      ...content,
      blog: [
        ...content.blog,
        {
          title: '',
          excerpt: '',
          content: '',
          image: '',
          author: '',
          date: new Date().toISOString(),
          category: ''
        }
      ]
    })
  }

  const updateBlogPost = (index, field, value) => {
    const newBlog = [...content.blog]
    newBlog[index][field] = value
    setContent({ ...content, blog: newBlog })
  }

  const deleteBlogPost = (index) => {
    const newBlog = content.blog.filter((_, i) => i !== index)
    setContent({ ...content, blog: newBlog })
  }

  if (!content) return <div>Loading...</div>

  // Login Screen
  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Admin Login - New Image Hair Salon</title>
        </Head>
        <div className="min-h-screen bg-gradient-to-br from-secondary via-black to-secondary flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-effect rounded-3xl p-10 max-w-md w-full border border-primary/30"
          >
            <div className="text-center mb-8">
              <h1 className="text-4xl font-heading font-bold shimmer-text mb-2">Admin Panel</h1>
              <p className="text-gray-400">New Image Hair Salon</p>
            </div>
            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <label className="block text-white mb-2 font-semibold">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black/50 border border-primary/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary"
                  placeholder="Enter admin password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full luxury-button py-4 rounded-xl font-semibold text-white text-lg"
              >
                LOGIN
              </button>
            </form>
          </motion.div>
        </div>
      </>
    )
  }

  // Admin Dashboard
  const tabs = [
    { id: 'hero', name: 'Hero Slider', icon: FaImage },
    { id: 'services', name: 'Services', icon: FaCog },
    { id: 'gallery', name: 'Gallery', icon: FaImage },
    { id: 'blog', name: 'Blog Posts', icon: FaBlog },
    { id: 'settings', name: 'Settings', icon: FaCog }
  ]

  return (
    <>
      <Head>
        <title>Admin Dashboard - New Image Hair Salon</title>
      </Head>
      <div className="min-h-screen bg-black">
        {/* Header */}
        <div className="glass-effect border-b border-primary/20 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-heading font-bold text-white">Admin Dashboard</h1>
                <p className="text-sm text-gray-400">New Image Hair Salon</p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={saveContent}
                  className="luxury-button px-6 py-3 rounded-xl font-semibold text-white flex items-center gap-2"
                >
                  <FaSave /> SAVE ALL CHANGES
                </button>
                <a
                  href="/"
                  target="_blank"
                  className="glass-effect border border-primary/30 px-6 py-3 rounded-xl font-semibold text-white flex items-center gap-2 hover:bg-primary/20"
                >
                  <FaEye /> PREVIEW SITE
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass-effect rounded-2xl p-4 sticky top-24">
                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        activeTab === tab.id
                          ? 'bg-primary text-white'
                          : 'text-gray-400 hover:bg-primary/20 hover:text-white'
                      }`}
                    >
                      <tab.icon />
                      <span className="font-semibold">{tab.name}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="glass-effect rounded-2xl p-8"
                >
                  {/* HERO SLIDER TAB */}
                  {activeTab === 'hero' && (
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-heading font-bold text-white">Hero Slider Management</h2>
                        <button
                          onClick={addHeroSlide}
                          className="luxury-button px-6 py-3 rounded-xl font-semibold text-white flex items-center gap-2"
                        >
                          <FaPlus /> ADD SLIDE
                        </button>
                      </div>
                      <div className="space-y-6">
                        {content.hero.slides.map((slide, index) => (
                          <div key={index} className="bg-black/50 border border-primary/30 rounded-xl p-6">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-xl font-bold text-white">Slide {index + 1}</h3>
                              <button
                                onClick={() => deleteHeroSlide(index)}
                                className="text-red-500 hover:text-red-400"
                              >
                                <FaTrash />
                              </button>
                            </div>
                            <div className="space-y-4">
                              <div>
                                <label className="block text-white mb-2">Title</label>
                                <input
                                  type="text"
                                  value={slide.title}
                                  onChange={(e) => updateHeroSlide(index, 'title', e.target.value)}
                                  className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white"
                                  placeholder="Enter slide title"
                                />
                              </div>
                              <div>
                                <label className="block text-white mb-2">Subtitle</label>
                                <input
                                  type="text"
                                  value={slide.subtitle}
                                  onChange={(e) => updateHeroSlide(index, 'subtitle', e.target.value)}
                                  className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white"
                                  placeholder="Enter slide subtitle"
                                />
                              </div>
                              <div>
                                <label className="block text-white mb-2">Image URL</label>
                                <input
                                  type="text"
                                  value={slide.image}
                                  onChange={(e) => updateHeroSlide(index, 'image', e.target.value)}
                                  className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white"
                                  placeholder="https://images.unsplash.com/..."
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* SERVICES TAB */}
                  {activeTab === 'services' && (
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-heading font-bold text-white">Services Management</h2>
                        <button
                          onClick={addService}
                          className="luxury-button px-6 py-3 rounded-xl font-semibold text-white flex items-center gap-2"
                        >
                          <FaPlus /> ADD SERVICE
                        </button>
                      </div>
                      <div className="space-y-6">
                        {content.services.map((service, index) => (
                          <div key={index} className="bg-black/50 border border-primary/30 rounded-xl p-6">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-xl font-bold text-white">Service {index + 1}</h3>
                              <button
                                onClick={() => deleteService(index)}
                                className="text-red-500 hover:text-red-400"
                              >
                                <FaTrash />
                              </button>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-white mb-2">Service Title</label>
                                <input
                                  type="text"
                                  value={service.title}
                                  onChange={(e) => updateService(index, 'title', e.target.value)}
                                  className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white"
                                />
                              </div>
                              <div>
                                <label className="block text-white mb-2">Price</label>
                                <input
                                  type="text"
                                  value={service.price}
                                  onChange={(e) => updateService(index, 'price', e.target.value)}
                                  className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white"
                                  placeholder="From $65"
                                />
                              </div>
                              <div className="md:col-span-2">
                                <label className="block text-white mb-2">Description</label>
                                <textarea
                                  value={service.description}
                                  onChange={(e) => updateService(index, 'description', e.target.value)}
                                  className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white"
                                  rows="3"
                                />
                              </div>
                              <div className="md:col-span-2">
                                <label className="block text-white mb-2">Image URL</label>
                                <input
                                  type="text"
                                  value={service.image}
                                  onChange={(e) => updateService(index, 'image', e.target.value)}
                                  className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* GALLERY TAB */}
                  {activeTab === 'gallery' && (
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-heading font-bold text-white">Gallery Management</h2>
                        <button
                          onClick={addGalleryImage}
                          className="luxury-button px-6 py-3 rounded-xl font-semibold text-white flex items-center gap-2"
                        >
                          <FaPlus /> ADD IMAGE
                        </button>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        {content.gallery.map((image, index) => (
                          <div key={index} className="bg-black/50 border border-primary/30 rounded-xl p-6">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-lg font-bold text-white">Image {index + 1}</h3>
                              <button
                                onClick={() => deleteGalleryImage(index)}
                                className="text-red-500 hover:text-red-400"
                              >
                                <FaTrash />
                              </button>
                            </div>
                            <div className="space-y-4">
                              <input
                                type="text"
                                value={image.title}
                                onChange={(e) => updateGalleryImage(index, 'title', e.target.value)}
                                className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white"
                                placeholder="Image Title"
                              />
                              <input
                                type="text"
                                value={image.category}
                                onChange={(e) => updateGalleryImage(index, 'category', e.target.value)}
                                className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white"
                                placeholder="Category (Color, Haircut, etc.)"
                              />
                              <input
                                type="text"
                                value={image.url}
                                onChange={(e) => updateGalleryImage(index, 'url', e.target.value)}
                                className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white"
                                placeholder="Image URL"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* BLOG TAB */}
                  {activeTab === 'blog' && (
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-heading font-bold text-white">Blog Management</h2>
                        <button
                          onClick={addBlogPost}
                          className="luxury-button px-6 py-3 rounded-xl font-semibold text-white flex items-center gap-2"
                        >
                          <FaPlus /> ADD POST
                        </button>
                      </div>
                      <div className="space-y-6">
                        {content.blog.map((post, index) => (
                          <div key={index} className="bg-black/50 border border-primary/30 rounded-xl p-6">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-xl font-bold text-white">Post {index + 1}</h3>
                              <button
                                onClick={() => deleteBlogPost(index)}
                                className="text-red-500 hover:text-red-400"
                              >
                                <FaTrash />
                              </button>
                            </div>
                            <div className="space-y-4">
                              <input
                                type="text"
                                value={post.title}
                                onChange={(e) => updateBlogPost(index, 'title', e.target.value)}
                                className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white"
                                placeholder="Blog Title"
                              />
                              <textarea
                                value={post.excerpt}
                                onChange={(e) => updateBlogPost(index, 'excerpt', e.target.value)}
                                className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white"
                                rows="2"
                                placeholder="Excerpt"
                              />
                              <textarea
                                value={post.content}
                                onChange={(e) => updateBlogPost(index, 'content', e.target.value)}
                                className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white"
                                rows="6"
                                placeholder="Full Content"
                              />
                              <div className="grid md:grid-cols-2 gap-4">
                                <input
                                  type="text"
                                  value={post.author}
                                  onChange={(e) => updateBlogPost(index, 'author', e.target.value)}
                                  className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white"
                                  placeholder="Author"
                                />
                                <input
                                  type="text"
                                  value={post.category}
                                  onChange={(e) => updateBlogPost(index, 'category', e.target.value)}
                                  className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white"
                                  placeholder="Category"
                                />
                              </div>
                              <input
                                type="text"
                                value={post.image}
                                onChange={(e) => updateBlogPost(index, 'image', e.target.value)}
                                className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white"
                                placeholder="Featured Image URL"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* SETTINGS TAB */}
                  {activeTab === 'settings' && (
                    <div>
                      <h2 className="text-3xl font-heading font-bold text-white mb-6">General Settings</h2>
                      <div className="space-y-6">
                        <div className="bg-black/50 border border-primary/30 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-white mb-2">Salon Name</label>
                              <input
                                type="text"
                                value={content.settings.salonName}
                                onChange={(e) => setContent({
                                  ...content,
                                  settings: { ...content.settings, salonName: e.target.value }
                                })}
                                className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white"
                              />
                            </div>
                            <div>
                              <label className="block text-white mb-2">Phone</label>
                              <input
                                type="text"
                                value={content.settings.phone}
                                onChange={(e) => setContent({
                                  ...content,
                                  settings: { ...content.settings, phone: e.target.value }
                                })}
                                className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white"
                              />
                            </div>
                            <div>
                              <label className="block text-white mb-2">Email</label>
                              <input
                                type="email"
                                value={content.settings.email}
                                onChange={(e) => setContent({
                                  ...content,
                                  settings: { ...content.settings, email: e.target.value }
                                })}
                                className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white"
                              />
                            </div>
                            <div>
                              <label className="block text-white mb-2">Instagram</label>
                              <input
                                type="text"
                                value={content.settings.instagram}
                                onChange={(e) => setContent({
                                  ...content,
                                  settings: { ...content.settings, instagram: e.target.value }
                                })}
                                className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white"
                              />
                            </div>
                            <div className="md:col-span-2">
                              <label className="block text-white mb-2">Address</label>
                              <input
                                type="text"
                                value={content.settings.address}
                                onChange={(e) => setContent({
                                  ...content,
                                  settings: { ...content.settings, address: e.target.value }
                                })}
                                className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-white"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="bg-black/50 border border-primary/30 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
                          <div className="space-y-3">
                            {Object.entries(content.settings.hours).map(([day, hours]) => (
                              <div key={day} className="flex items-center gap-4">
                                <label className="w-32 text-white capitalize">{day}</label>
                                <input
                                  type="text"
                                  value={hours}
                                  onChange={(e) => setContent({
                                    ...content,
                                    settings: {
                                      ...content.settings,
                                      hours: { ...content.settings.hours, [day]: e.target.value }
                                    }
                                  })}
                                  className="flex-1 bg-black/50 border border-primary/30 rounded-lg px-4 py-2 text-white"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
