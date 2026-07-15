"use client";

import { Utensils, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-terracotta to-burntOrange flex items-center justify-center">
                <Utensils className="w-5 h-5 text-white" />
              </div>
              <span className="font-poppins font-bold text-xl">Twisters</span>
            </div>
            <p className="text-white/60 leading-relaxed">
              Authentic African flavors served fresh every day in the heart of Ife.
            </p>
          </div>

          <div>
            <h4 className="font-poppins font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-golden transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-white/60">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-terracotta" />
                0810 921 2916
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-terracotta mt-1 shrink-0" />
                Ede Road, Opposite Maintenance Gate, Ife, Osun State
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-terracotta" />
                Open Daily &bull; Closes 10 PM
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {['Dine In', 'Takeaway', 'Delivery'].map((s) => (
                <li key={s} className="flex items-center gap-2 text-white/60">
                  <CheckCircle2 className="w-4 h-4 text-golden" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm">
            &copy; 2026 Twisters Restaurant and Bar. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
