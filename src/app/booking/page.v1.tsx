"use client";

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { webConfig } from '@/utils/config';
import Image from 'next/image';
import Link from 'next/link';



export default function BookingPage() {
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
                Choose from our premium services and schedule your experience with our classic Rover P5B
              </p>
            </div>

            {/* Service Options */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-classic shadow-sm border border-warm-grey/10">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-navy/5 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-gold rounded-full"></div>
                  </div>
                  <h3 className="text-lg text-navy font-semibold">Executive Transport</h3>
                  <p className="text-sm text-warm-grey">1-2 hours</p>
                </div>
                <p className="text-sm text-warm-grey source-serif-text text-center">
                  Professional chauffeur service for business meetings, airport transfers, and corporate events.
                </p>
              </div>

              <div className="bg-white p-6 rounded-classic shadow-sm border border-warm-grey/10">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-navy/5 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-gold rounded-full"></div>
                  </div>
                  <h3 className="text-lg text-navy font-semibold">Special Occasions</h3>
                  <p className="text-sm text-warm-grey">2-4 hours</p>
                </div>
                <p className="text-sm text-warm-grey source-serif-text text-center">
                  Weddings, anniversaries, and milestone celebrations deserve the finest in classic luxury.
                </p>
              </div>

              <div className="bg-white p-6 rounded-classic shadow-sm border border-warm-grey/10">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-navy/5 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-gold rounded-full"></div>
                  </div>
                  <h3 className="text-lg text-navy font-semibold">Heritage Tours</h3>
                  <p className="text-sm text-warm-grey">3-6 hours</p>
                </div>
                <p className="text-sm text-warm-grey source-serif-text text-center">
                  Explore London's rich history in authentic style with our curated heritage experiences.
                </p>
              </div>
            </div>

            {/* Calendly Widget */}
            <div className="bg-white rounded-classic shadow-sm border border-warm-grey/10 overflow-hidden">
              <div className="p-6 border-b border-warm-grey/20">
                <h2 className="text-2xl text-navy font-semibold text-center">
                  Schedule Your Service
                </h2>
                <p className="text-warm-grey text-center mt-2">
                  Select your preferred date and time below
                </p>
              </div>
              
              <div className="h-[700px]">
                <iframe
                  src={webConfig.calendlyUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Booking Calendar"
                  className="border-0"
                  onError={() => {
                    console.error('Failed to load Calendly iframe')
                  }}
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12 text-center">
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
    </div>
  )
}
