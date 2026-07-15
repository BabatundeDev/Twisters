"use client";

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import WhyUs from './components/WhyUs'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
