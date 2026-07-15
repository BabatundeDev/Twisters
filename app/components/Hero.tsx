"use client";

import { motion } from 'framer-motion'
import { Star, Clock, Utensils, ShoppingBag, Bike } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen hero-bg flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 mb-6 flex-wrap"
          >
            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-golden fill-golden" />
              ))}
              <span className="text-white text-sm font-medium ml-1">5.0 Rating</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <Clock className="w-4 h-4 text-golden" />
              <span className="text-white text-sm font-medium">Open Daily &bull; Closes 10 PM</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-poppins text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Authentic African Flavors
            <span className="block text-golden">Served Fresh Every Day</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/90 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl"
          >
            Experience delicious local dishes, refreshing drinks, and a relaxed atmosphere 
            where every meal feels like home. Whether you&apos;re dining in, ordering takeaway, 
            or requesting delivery &mdash; Twisters is ready to serve you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a href="#menu" className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center gap-2">
              <Utensils className="w-5 h-5" />
              View Menu
            </a>
            <a href="#contact" className="btn-secondary px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 bg-white/10 border-white/40 text-white hover:bg-white hover:text-terracotta">
              <ShoppingBag className="w-5 h-5" />
              Order Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            {[
              { icon: Utensils, label: 'Dine In' },
              { icon: ShoppingBag, label: 'Takeaway' },
              { icon: Bike, label: 'Delivery' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-5 py-3 rounded-xl">
                <item.icon className="w-5 h-5 text-golden" />
                <span className="text-white font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
