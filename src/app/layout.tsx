import { BookingProvider } from '@/components/ui/booking-provider'
import type { Metadata } from 'next'
import { Lora, Playfair_Display, Source_Serif_4 } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-serif',
})

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
})

export const metadata: Metadata = {
  title: 'Chic Chauffeur - Distinguished Chauffeur Service',
  description: 'Experience timeless elegance with our distinguished chauffeur service, featuring the classic Rover P5B.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSerif.variable} ${lora.variable}`}>
      <body className="bg-cream text-charcoal antialiased">
        <BookingProvider>
          <main className="min-h-screen">{children}</main>
        </BookingProvider>
      </body>
    </html>
  )
}