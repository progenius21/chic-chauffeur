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
  const [hasError, setHasError] = useState(false)

  // Debug logging
  console.log('BookingModal render:', { isOpen, isLoaded, hasError })

  useEffect(() => {
    if (isOpen) {
      // Reset states when modal opens
      setHasError(false)
      setIsLoaded(false)

      // Check if Calendly script is already loaded
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      
      if (existingScript) {
        // Script exists, check if Calendly is available globally
        if (typeof (window as any).Calendly !== 'undefined') {
          setIsLoaded(true)
          return
        }
      }

      // Load Calendly widget script
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      script.onload = () => {
        // Wait a bit for Calendly to initialize
        setTimeout(() => {
          setIsLoaded(true)
        }, 100)
      }
      script.onerror = () => {
        console.error('Failed to load Calendly widget script')
        setIsLoaded(false)
        setHasError(true)
      }
      document.head.appendChild(script)

      return () => {
        // Don't remove the script as it might be used by other components
        // Just reset the loaded state
        setIsLoaded(false)
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
          {hasError ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-red-600 text-2xl">⚠️</span>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">Booking System Unavailable</h3>
                <p className="text-warm-grey mb-4">
                  We're experiencing technical difficulties with our booking system.
                </p>
                <div className="space-y-2 text-sm text-warm-grey">
                  <p>Please contact us directly:</p>
                  <p className="font-medium text-navy">enquiries@londoncoupes.com</p>
                  <p className="font-medium text-navy">+44 20 7XXX XXXX</p>
                </div>
                <Button 
                  variant="secondary" 
                  onClick={onClose}
                  className="mt-4"
                >
                  Close
                </Button>
              </div>
            </div>
          ) : isLoaded ? (
            <div className="h-full">
              <div 
                className="calendly-inline-widget h-full"
                data-url={webConfig.calendlyUrl}
                style={{ minWidth: '320px', height: '600px' }}
              />
              {/* Fallback iframe in case inline widget fails */}
              <iframe
                src={webConfig.calendlyUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Booking Calendar Fallback"
                className="border-0 hidden"
                onLoad={() => {
                  // If iframe loads successfully, hide the inline widget and show iframe
                  const inlineWidget = document.querySelector('.calendly-inline-widget')
                  const iframe = document.querySelector('iframe[title="Booking Calendar Fallback"]')
                  if (inlineWidget && iframe) {
                    setTimeout(() => {
                      if (inlineWidget.children.length === 0) {
                        inlineWidget.classList.add('hidden')
                        iframe.classList.remove('hidden')
                      }
                    }, 2000)
                  }
                }}
              />
            </div>
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
