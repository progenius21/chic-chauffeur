"use client";

import { BookingModal } from '@/components/ui/booking-modal';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { serviceOptions } from '@/utils/mailer.config';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function BookingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white border-b border-warm-grey/20">
        <Container>
          <div className="flex flex-wrap items-center justify-between py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-16 h-16 relative">
                <Image
                  src="/images/london-coupes-original.png"
                  alt="London Coupes Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl text-navy font-semibold">London Coupes</h1>
                <p className="text-xs text-warm-grey uppercase tracking-wider">
                  Distinguished Service
                </p>
              </div>
            </Link>
            <Link href="/" className='ml-auto'>
              <Button variant="secondary" className='whitespace-nowrap'>← Back to Home</Button>
            </Link>
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl text-navy mb-4">
                Book Your Distinguished Journey
              </h1>
              <p className="text-lg text-warm-grey max-w-2xl mx-auto source-serif-text">
                Choose from our premium services and request your experience with our classic Rover P5B
              </p>
            </div>

            {/* Service Options */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {serviceOptions.map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-classic shadow-sm border border-warm-grey/10 hover:shadow-md transition-shadow">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-navy/5 flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-gold rounded-full"></div>
                    </div>
                    <h3 className="text-lg text-navy font-semibold">{service.name}</h3>
                    <p className="text-sm text-warm-grey">{service.duration}</p>
                  </div>
                  <p className="text-sm text-warm-grey source-serif-text text-center">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Booking Form Section */}
            <div className="bg-white rounded-classic shadow-sm border border-warm-grey/10 overflow-hidden mb-12">
              <div className="p-6 border-b border-warm-grey/20">
                <h2 className="text-2xl text-navy font-semibold text-center">
                  Request Your Service
                </h2>
                <p className="text-warm-grey text-center mt-2">
                  Fill out the form below and we'll contact you to confirm your booking
                </p>
              </div>
              
              <div className="p-8">
                <div className="max-w-2xl mx-auto">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-navy/5 flex items-center justify-center">
                      <svg className="w-10 h-10 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-navy mb-2">Ready to Book?</h3>
                    <p className="text-warm-grey">
                      Click the button below to open our booking form and tell us about your requirements.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <Button 
                      onClick={() => setIsModalOpen(true)}
                      size="lg"
                      className="px-8 py-4 text-lg"
                    >
                      Open Booking Form
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Information */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">Submit Request</h3>
                <p className="text-sm text-warm-grey">
                  Fill out our booking form with your details and service preferences
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">We Contact You</h3>
                <p className="text-sm text-warm-grey">
                  Our team will reach out to confirm availability and discuss your requirements
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">Enjoy Your Journey</h3>
                <p className="text-sm text-warm-grey">
                  Experience London in style with our classic Rover P5B and professional service
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center">
              <div className="bg-navy text-cream p-8 rounded-classic">
                <h3 className="text-xl font-semibold mb-4">Need Assistance?</h3>
                <p className="text-cream/80 mb-6 source-serif-text">
                  Our team is here to help you plan the perfect journey. Contact us for custom arrangements or special requests.
                </p>
                <div className="grid sm:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">Phone</h4>
                    <p className="text-cream/80">+44 20 7XXX XXXX</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Email</h4>
                    <p className="text-cream/80">enquiries@londoncoupes.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Location</h4>
                    <p className="text-cream/80">Central London, UK</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
}
