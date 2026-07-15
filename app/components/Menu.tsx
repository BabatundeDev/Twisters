"use client";

import { Utensils, Flame, GlassWater, Leaf, ArrowRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function Menu() {
  const categories = [
    {
      title: 'Main Dishes',
      icon: Utensils,
      items: ['Jollof Rice', 'Fried Rice', 'Ofada Rice', 'Amala & Ewedu', 'Pounded Yam & Egusi', 'Eba & Okra Soup', 'Pepper Soup', 'Native Rice'],
      image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&q=80',
    },
    {
      title: 'Grills',
      icon: Flame,
      items: ['Suya', 'Grilled Chicken', 'Peppered Goat Meat', 'Catfish Pepper Soup', 'Asun', 'Barbecue Chicken'],
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
    },
    {
      title: 'Drinks',
      icon: GlassWater,
      items: ['Fresh Juice', 'Soft Drinks', 'Malt', 'Beer', 'Palm Wine', 'Cocktails', 'Chapman'],
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80',
    },
    {
      title: 'Sides',
      icon: Leaf,
      items: ['Plantain', 'Moi Moi', 'Salad', 'Coleslaw', 'French Fries'],
      image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?w=600&q=80',
    },
  ]

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-terracotta font-semibold text-sm uppercase tracking-wider">Our Menu</span>
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mt-3 mb-4">
            Delicious African Dishes
          </h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            From traditional favorites to grilled specialties, every dish is prepared with love and authentic flavors.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((cat, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="menu-card bg-cream rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={cat.image} 
                    alt={cat.title}
                    className="menu-img w-full h-full object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <cat.icon className="w-5 h-5 text-golden" />
                    <span className="text-white font-poppins font-bold text-lg">{cat.title}</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-charcoal/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <a href="#contact" className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-lg">
            See Full Menu
            <ArrowRight className="w-5 h-5" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
