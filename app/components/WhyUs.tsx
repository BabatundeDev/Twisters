"use client";

import { motion } from 'framer-motion'
import { Heart, Leaf, Bike, Users } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function WhyUs() {
  const features = [
    {
      icon: Heart,
      title: 'Affordable Prices',
      desc: 'Enjoy delicious meals without spending too much. Great value for every plate.',
      color: 'from-terracotta to-burntOrange',
    },
    {
      icon: Leaf,
      title: 'Authentic African Taste',
      desc: 'Prepared with fresh local ingredients and traditional recipes passed down through generations.',
      color: 'from-burntOrange to-golden',
    },
    {
      icon: Bike,
      title: 'Flexible Service',
      desc: "Dine In, Takeaway, or Delivery whenever it's convenient for you.",
    },
    {
      icon: Users,
      title: 'Relaxed Atmosphere',
      desc: 'Comfortable restaurant and bar perfect for families, friends, and casual evenings.',
      color: 'from-terracotta to-golden',
    },
  ]

  return (
    <section id="why-us" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-terracotta font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mt-3 mb-4">
            What Makes Us Special
          </h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            We&apos;re more than just a restaurant &mdash; we&apos;re a place where great food meets genuine hospitality.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feat.color} flex items-center justify-center mb-6`}>
                  <feat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-poppins font-bold text-xl text-charcoal mb-3">{feat.title}</h3>
                <p className="text-charcoal/60 leading-relaxed">{feat.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
