"use client";

import { Star, Heart, CheckCircle2 } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80" 
                  alt="Restaurant interior" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-terracotta to-burntOrange flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-poppins font-bold text-2xl text-charcoal">5.0</p>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-golden fill-golden" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <span className="text-terracotta font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mt-3 mb-6">
              About Twisters Restaurant and Bar
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
              Twisters Restaurant and Bar is one of Ife&apos;s most welcoming destinations for authentic 
              African cuisine and refreshing drinks. We believe great food should be affordable, 
              flavorful, and served in a relaxed environment where everyone feels at home.
            </p>
            <p className="text-charcoal/70 text-lg leading-relaxed mb-8">
              Whether you&apos;re stopping by for lunch, dinner with friends, family gatherings, or evening 
              relaxation, our team is committed to serving freshly prepared meals made with quality 
              ingredients and genuine hospitality.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Fresh Ingredients', 'Authentic Recipes', 'Friendly Service'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-terracotta" />
                  <span className="text-charcoal font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
