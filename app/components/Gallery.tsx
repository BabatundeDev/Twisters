"use client";

import AnimatedSection from './AnimatedSection'

export default function Gallery() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80', label: 'Restaurant Interior' },
    { src: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&q=80', label: 'African Dishes' },
    { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80', label: 'Grilled Meals' },
    { src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80', label: 'Bar Area' },
    { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80', label: 'Customer Dining' },
    { src: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80', label: 'Chef Preparing' },
  ]

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-terracotta font-semibold text-sm uppercase tracking-wider">Gallery</span>
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mt-3 mb-4">
            A Glimpse of Twisters
          </h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            Take a look at our cozy space, mouthwatering dishes, and the warm atmosphere that awaits you.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className={i === 0 || i === 3 ? 'col-span-2 lg:col-span-1' : ''}>
              <div className="gallery-card relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group h-64 sm:h-80">
                <img 
                  src={img.src} 
                  alt={img.label}
                  className="gallery-img w-full h-full object-cover transition-transform duration-700"
                />
                <div className="gallery-overlay absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 transition-opacity duration-500 flex items-end p-6">
                  <span className="text-white font-poppins font-semibold text-lg">{img.label}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
