'use client'

import { createContext, ReactNode, useContext, useState } from 'react'
import { BookingModal } from './booking-modal'

interface BookingContextType {
  openBookingModal: () => void
  closeBookingModal: () => void
  isBookingModalOpen: boolean
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const openBookingModal = () => setIsBookingModalOpen(true)
  const closeBookingModal = () => setIsBookingModalOpen(false)

  return (
    <BookingContext.Provider
      value={{
        openBookingModal,
        closeBookingModal,
        isBookingModalOpen,
      }}
    >
      {children}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={closeBookingModal}
      />
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const context = useContext(BookingContext)
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider')
  }
  return context
}
