"use client";

import { useBooking } from "@/components/ui/booking-provider";
import { Button } from "@/components/ui/button";

export default function TestConfig() {
  const { openBookingModal, isBookingModalOpen } = useBooking();

  return (
    <div style={{ 
      padding: '50px', 
      backgroundColor: 'lime', 
      color: 'black', 
      fontSize: '24px',
      textAlign: 'center',
      minHeight: '100vh'
    }}>
      <h1>CONFIGURATION TEST</h1>
      <p>If you can see this page, the allowedDevOrigins is working!</p>
      <p>Timestamp: {new Date().toISOString()}</p>
      
      <div style={{ marginTop: '30px' }}>
        <h2>Modal Test</h2>
        <p>Modal is open: {isBookingModalOpen ? 'YES' : 'NO'}</p>
        <Button onClick={openBookingModal} style={{ marginTop: '20px' }}>
          Test Booking Modal
        </Button>
      </div>
    </div>
  );
}
