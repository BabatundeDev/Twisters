"use client";

import { Phone, MapPin, Clock, Utensils } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-terracotta font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mt-3 mb-4">
            Visit or Call Us Today
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-terracotta to-burntOrange flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-lg text-charcoal mb-1">Phone</h3>
                  <p className="text-charcoal/70 text-lg">0810 921 2916</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-terracotta to-burntOrange flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-lg text-charcoal mb-1">Address</h3>
                  <p className="text-charcoal/70 text-lg">
                    FHR2+5VJ, Ede Road,<br />
                    Opposite Maintenance Gate,<br />
                    Ife 220101, Osun State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-terracotta to-burntOrange flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-lg text-charcoal mb-1">Business Hours</h3>
                  <p className="text-charcoal/70 text-lg">Open Daily &bull; Closes at 10:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-terracotta to-burntOrange flex items-center justify-center shrink-0">
                  <Utensils className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-lg text-charcoal mb-1">Service Options</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Dine In', 'Takeaway', 'Delivery'].map((s, i) => (
                      <span key={i} className="bg-cream px-4 py-2 rounded-full text-charcoal font-medium text-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Twisters+Restaurant+and+Bar+Ife+Osun+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-8 py-4 rounded-full text-white font-semibold flex items-center gap-2"
                >
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </a>
                <a 
                  href="tel:+2348109212916"
                  className="btn-secondary px-8 py-4 rounded-full font-semibold flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="rounded-3xl overflow-hidden shadow-2xl h-full min-h-[400px] bg-cream flex items-center justify-center relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.771461783161!2d4.549552474365667!3d7.4904673111731235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1038374636a1294d%3A0x79b55c8a3405ad48!2sTwisters%20Restaurant%20and%20Bar!5e0!3m2!1sen!2sng!4v1784128902949!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Twisters Restaurant Location"
                className="absolute inset-0"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
