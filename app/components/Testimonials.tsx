"use client";

import { Star } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Lola V.',
      text: 'The food was delicious, affordable, and served fresh. Definitely one of my favorite places in Ife.',
    },
    {
      name: 'Customer Review',
      text: 'Great atmosphere, tasty meals, and friendly staff. Highly recommended for anyone visiting Ife.',
    },
    {
      name: 'Regular Patron',
      text: "The grilled chicken and pepper soup were amazing. I'll definitely be coming back again and again.",
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-terracotta font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mt-3 mb-4">
            What Our Customers Say
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="testimonial-card bg-white rounded-3xl p-8 shadow-lg h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-golden fill-golden" />
                  ))}
                </div>
                <p className="text-charcoal/70 text-lg leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-terracotta to-burntOrange flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-poppins font-semibold text-charcoal">{t.name}</p>
                    <p className="text-charcoal/50 text-sm">Verified Customer</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
