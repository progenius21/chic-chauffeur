import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-warm-grey/20">
        <Container>
          <div className="flex items-center justify-between py-5">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 relative">
                <Image
                  src="/images/london-coupes-original.png"
                  alt="London Coupes Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl text-navy font-semibold">London Coupes</h1>
                <p className="text-xs text-warm-grey uppercase tracking-wider">Distinguished Service</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-charcoal hover:text-navy transition-colors font-medium">Services</a>
              <a href="#heritage" className="text-charcoal hover:text-navy transition-colors font-medium">Heritage</a>
              <a href="#fleet" className="text-charcoal hover:text-navy transition-colors font-medium">Fleet</a>
              <a href="#contact" className="text-charcoal hover:text-navy transition-colors font-medium">Contact</a>
              <Button size="sm">Book Now</Button>
            </nav>
          </div>
        </Container>
      </header>

      {/* Hero Section */}
      <section className="pt-36 pb-24 bg-gradient-to-b from-cream to-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-navy mb-6">
              Experience Timeless Elegance
            </h1>
            <h2 className="text-charcoal mb-8 font-light">
              Distinguished Chauffeur Service
            </h2>
            <p className="text-xl text-warm-grey mb-12 max-w-2xl mx-auto leading-relaxed source-serif-text">
              Discover the epitome of classic British luxury with our bespoke chauffeur service, 
              featuring the iconic Rover P5B. Where heritage meets modern sophistication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-10">Book Your Journey</Button>
              <Button variant="secondary" size="lg" className="text-lg px-10">Learn More</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Overview */}
      <section id="services" className="py-24 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-navy mb-6">Our Distinguished Services</h2>
              <p className="text-lg text-warm-grey max-w-2xl mx-auto source-serif-text">
                Crafted experiences that honor tradition while embracing modern convenience
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-navy/5 flex items-center justify-center group-hover:bg-navy/10 transition-colors">
                  <div className="w-8 h-8 border-2 border-gold rounded-full"></div>
                </div>
                <h3 className="text-xl text-navy mb-4">Executive Transport</h3>
                <p className="text-warm-grey leading-relaxed source-serif-text">
                  Professional chauffeur service for business meetings, airport transfers, and corporate events.
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-navy/5 flex items-center justify-center group-hover:bg-navy/10 transition-colors">
                  <div className="w-8 h-8 border-2 border-gold rounded-full"></div>
                </div>
                <h3 className="text-xl text-navy mb-4">Special Occasions</h3>
                <p className="text-warm-grey leading-relaxed source-serif-text">
                  Weddings, anniversaries, and milestone celebrations deserve the finest in classic luxury.
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-navy/5 flex items-center justify-center group-hover:bg-navy/10 transition-colors">
                  <div className="w-8 h-8 border-2 border-gold rounded-full"></div>
                </div>
                <h3 className="text-xl text-navy mb-4">Heritage Tours</h3>
                <p className="text-warm-grey leading-relaxed source-serif-text">
                  Explore London&apos;s rich history in authentic style with our curated heritage experiences.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Heritage Story */}
      <section id="heritage" className="py-24 bg-cream">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-navy mb-6">A Legacy of Excellence</h2>
                <div className="space-y-6 text-charcoal leading-relaxed source-serif-text">
                  <p>
                    Since our founding, London Coupes has been dedicated to preserving the golden age of 
                    British automotive craftsmanship. Our meticulously maintained Rover P5B represents 
                    more than transportation—it embodies a philosophy of elegance and attention to detail.
                  </p>
                  <p>
                    Each journey with us is a step back into an era when luxury meant substance, when 
                    quality was paramount, and when every detail reflected the highest standards of 
                    British engineering and design.
                  </p>
                  <p>
                    Today, we continue this tradition, offering discerning clients an authentic 
                    experience that honors the past while meeting the demands of modern life.
                  </p>
                </div>
                <div className="mt-8">
                  <Button variant="secondary">Discover Our Story</Button>
                </div>
              </div>
              <div className="bg-white p-8 rounded-classic shadow-sm">
                <div className="aspect-square bg-navy/5 rounded-classic flex items-center justify-center">
                  <span className="text-4xl text-navy">🏛️</span>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg text-navy mb-2">Founded in Tradition</h3>
                  <p className="text-sm text-warm-grey source-serif-text">
                    Celebrating British automotive heritage with every journey
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Fleet Showcase */}
      <section id="fleet" className="py-24 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-navy mb-6">The Rover P5B</h2>
              <p className="text-lg text-warm-grey max-w-2xl mx-auto source-serif-text">
                An icon of British luxury and engineering excellence
              </p>
            </div>
            <div className="bg-cream rounded-classic p-12">
              <div className="aspect-video bg-navy/5 rounded-classic mb-8 flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                    <Image
                      src="/images/london-coupes-original.png"
                      alt="London Coupes - Professional Chauffeur Service"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-navy text-xl source-serif-text">Distinguished Rover P5B Service</p>
                  <p className="text-warm-grey mt-2 source-serif-text">Your classic vehicle images coming soon</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-lg text-navy mb-3">Classic Elegance</h3>
                  <p className="text-warm-grey source-serif-text">
                    Timeless design that continues to turn heads decades after its creation
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg text-navy mb-3">Meticulous Care</h3>
                  <p className="text-warm-grey source-serif-text">
                    Every detail maintained to original specifications with period-correct materials
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg text-navy mb-3">Modern Comfort</h3>
                  <p className="text-warm-grey source-serif-text">
                    Contemporary conveniences seamlessly integrated while preserving authentic character
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact & Booking */}
      <section id="contact" className="py-24 bg-navy text-cream">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Begin Your Journey</h2>
            <p className="text-xl mb-12 text-cream/80 source-serif-text">
              Ready to experience distinguished service? Contact us to arrange your bespoke journey.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className=" text-lg mb-3">Phone</h3>
                <p className="text-cream/80 source-serif-text">+44 20 7XXX XXXX</p>
              </div>
              <div>
                <h3 className=" text-lg mb-3">Email</h3>
                <p className="text-cream/80 source-serif-text">enquiries@londoncoupes.com</p>
              </div>
              <div>
                <h3 className=" text-lg mb-3">Location</h3>
                <p className="text-cream/80 source-serif-text">Central London, UK</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cream text-navy hover:bg-cream/90">Book Your Journey</Button>
              <Button variant="secondary" size="lg" className="border-cream text-cream hover:bg-cream/10">
                Request Quote
          </Button>
        </div>
      </div>
    </Container>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-charcoal text-cream">
        <Container>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/london-coupes-original.png"
                  alt="London Coupes Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg">London Coupes</h3>
                <p className="text-xs text-cream/60 uppercase tracking-wider">Distinguished Service</p>
              </div>
            </div>
            <div className="border-t border-cream/20 pt-6">
              <p className="text-cream/60 text-sm source-serif-text">
                © 2024 London Coupes. Preserving British automotive heritage with distinction.
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  )
}