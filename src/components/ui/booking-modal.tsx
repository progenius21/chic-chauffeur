'use client'

import { webConfig } from '@/utils/config'
import { useEffect, useState } from 'react'
import { Button } from './button'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (isOpen) {
      // Load Calendly widget script
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      script.onload = () => setIsLoaded(true)
      document.head.appendChild(script)

      return () => {
        // Cleanup script when component unmounts
        const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
        if (existingScript) {
          document.head.removeChild(existingScript)
        }
      }
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-classic shadow-2xl w-full max-w-4xl max-h-[90vh] mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-warm-grey/20">
          <div>
            <h2 className="text-2xl font-semibold text-navy">Book Your Journey</h2>
            <p className="text-warm-grey mt-1">Choose your service and schedule</p>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={onClose}
            className="text-warm-grey hover:text-navy"
          >
            ✕
          </Button>
        </div>

        {/* Calendly Widget */}
        <div className="h-[600px]">
          {isLoaded ? (
            <div 
              className="calendly-inline-widget h-full"
              data-url={`https://calendly.com/${webConfig.calendlyUsername}/executive-transport`}
              style={{ minWidth: '320px', height: '600px' }}
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-navy mx-auto mb-4"></div>
                <p className="text-warm-grey">Loading booking system...</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-warm-grey/20 bg-cream/30">
          <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
            <div className="text-sm text-warm-grey">
              <p>Need assistance? Contact us at enquiries@londoncoupes.com</p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
