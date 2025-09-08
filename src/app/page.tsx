import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MobileMenu } from "@/components/ui/mobile-menu";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen [&_section]:mt-7">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-warm-grey/20">
        <Container>
          <div className="flex items-center justify-between py-4 sm:py-5 md:py-6">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 relative flex-shrink-0">
                <Image
                  src="/images/london-coupes-original.png"
                  alt="London Coupes Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col max-sm:justify-center   max-sm:items-center">
                <h1 className="text-lg sm:text-xl md:text-2xl  text-navy mb-2 font-semibold leading-none sm:leading-tight mt-1 sm:mt-0">
                  London Coupes
                </h1>
                <p className="text-xs text-warm-grey text-left uppercase tracking-wider hidden sm:block mt-1">
                  Distinguished Service
                </p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a
                href="#services"
                className="text-charcoal hover:text-navy transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#heritage"
                className="text-charcoal hover:text-navy transition-colors font-medium"
              >
                Heritage
              </a>
              <a
                href="#fleet"
                className="text-charcoal hover:text-navy transition-colors font-medium"
              >
                Fleet
              </a>
              <a
                href="#contact"
                className="text-charcoal hover:text-navy transition-colors font-medium"
              >
                Contact
              </a>
              <Button size="lg">Book Now</Button>
            </nav>
            {/* Mobile Menu */}
            <div className="md:hidden flex items-center space-x-3">
              <Button size="lg" className="text-sm px-4 py-2 whitespace-nowrap font-semibold">
                Book Now
              </Button>
              <MobileMenu />
            </div>
          </div>
        </Container>
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-b from-cream to-white relative overflow-hidden">
        {/* Subtle background image */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/images/rover-p5b-front.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-navy mb-4 sm:mb-6 leading-tight">
              Experience Timeless Elegance
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-charcoal mb-6 sm:mb-8 font-light">
              Distinguished Chauffeur Service
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-warm-grey mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed source-serif-text px-2">
              Discover the epitome of classic British luxury with our bespoke
              chauffeur service, featuring the iconic Rover P5B. Where heritage
              meets modern sophistication.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 md:px-10 w-full sm:w-auto"
              >
                Book Your Journey
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 md:px-10 w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>
            {/* Simple Chrome Script */}
            <div className="mt-8 sm:mt-10 md:mt-12 text-center">
              <h3
                className="text-2xl sm:text-3xl md:text-4xl italic font-serif"
                style={{ color: "#d4af37" }}
              >
                Coupé
              </h3>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Overview */}
      <section id="services" className="py-16 sm:py-20 md:py-24 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-navy mb-4 sm:mb-6">
                Our Distinguished Services
              </h2>
              <p className="text-base sm:text-lg text-warm-grey max-w-2xl mx-auto source-serif-text">
                Crafted experiences that honor tradition while embracing modern
                convenience
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center group px-4 sm:px-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-navy/5 flex items-center justify-center group-hover:bg-navy/10 transition-colors">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-gold rounded-full"></div>
                </div>
                <h3 className="text-lg sm:text-xl text-navy mb-3 sm:mb-4">
                  Executive Transport
                </h3>
                <p className="text-sm sm:text-base text-warm-grey leading-relaxed source-serif-text">
                  Professional chauffeur service for business meetings, airport
                  transfers, and corporate events.
                </p>
              </div>
              <div className="text-center group px-4 sm:px-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-navy/5 flex items-center justify-center group-hover:bg-navy/10 transition-colors">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-gold rounded-full"></div>
                </div>
                <h3 className="text-lg sm:text-xl text-navy mb-3 sm:mb-4">
                  Special Occasions
                </h3>
                <p className="text-sm sm:text-base text-warm-grey leading-relaxed source-serif-text">
                  Weddings, anniversaries, and milestone celebrations deserve
                  the finest in classic luxury.
                </p>
              </div>
              <div className="text-center group px-4 sm:px-0 sm:col-span-2 md:col-span-1">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-navy/5 flex items-center justify-center group-hover:bg-navy/10 transition-colors">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-gold rounded-full"></div>
                </div>
                <h3 className="text-lg sm:text-xl text-navy mb-3 sm:mb-4">
                  Heritage Tours
                </h3>
                <p className="text-sm sm:text-base text-warm-grey leading-relaxed source-serif-text">
                  Explore London&apos;s rich history in authentic style with our
                  curated heritage experiences.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Heritage Story */}
      <section
        id="heritage"
        className="py-16 sm:py-20 md:py-24 bg-cream relative overflow-hidden"
      >
        {/* Subtle background branding */}
        <div className="absolute top-16 sm:top-20 right-4 sm:right-10 opacity-30">
          <span
            className="text-3xl sm:text-4xl md:text-5xl italic font-serif"
            style={{ color: "#d4af37" }}
          >
            Coupé
          </span>
        </div>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              <div className="px-4 sm:px-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-navy mb-4 sm:mb-6">
                  A Legacy of Excellence
                </h2>
                <div className="space-y-4 sm:space-y-6 text-charcoal leading-relaxed source-serif-text text-sm sm:text-base">
                  <p>
                    Since our founding, London Coupes has been dedicated to
                    preserving the golden age of British automotive
                    craftsmanship. Our meticulously maintained Rover P5B
                    represents more than transportation—it embodies a philosophy
                    of elegance and attention to detail.
                  </p>
                  <p>
                    In our heritage workshop, master craftsmen continue the
                    time-honored traditions of precision engineering. Every
                    component receives the same meticulous care that defined the
                    golden era of British automotive excellence.
                  </p>
                  <p>
                    Each journey with us is a step back into an era when luxury
                    meant substance, when quality was paramount, and when every
                    detail reflected the highest standards of British
                    engineering and design.
                  </p>
                </div>
                <div className="mt-6 sm:mt-8">
                  <Button variant="secondary" className="w-full sm:w-auto">
                    Discover Our Story
                  </Button>
                </div>
              </div>
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-classic shadow-sm">
                <div className="aspect-square rounded-classic overflow-hidden bg-navy/5 flex items-center justify-center">
                  <Image
                    src="/images/workshop-craftsmanship.jpg"
                    alt="Master craftsman working on vehicle components in our heritage workshop"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  />
                </div>
                <div className="mt-4 sm:mt-6 text-center">
                  <h3 className="text-base sm:text-lg text-navy mb-2">
                    Master Craftsmanship
                  </h3>
                  <p className="text-xs sm:text-sm text-warm-grey source-serif-text">
                    Every detail receives the meticulous attention of skilled
                    artisans
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Fleet Showcase */}
      <section id="fleet" className="py-16 sm:py-20 md:py-24 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-navy mb-4 sm:mb-6">
                The Rover P5B
              </h2>
              <p className="text-base sm:text-lg text-warm-grey max-w-2xl mx-auto source-serif-text">
                An icon of British luxury and engineering excellence
              </p>
            </div>
            <div className="bg-cream rounded-classic p-6 sm:p-8 md:p-12">
              {/* Logo Information Section */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 bg-navy/5 px-4 sm:px-6 md:px-8 py-4 rounded-classic">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 relative">
                    <Image
                      src="/images/london-coupes-original.png"
                      alt="London Coupes - Professional Chauffeur Service"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-navy text-sm sm:text-base md:text-lg font-semibold source-serif-text">
                      THE PROFESSIONAL CHAUFFEUR SERVICE
                    </p>
                    <p className="text-warm-grey text-xs sm:text-sm source-serif-text">
                      LONDON COUPES.COM
                    </p>
                    <p className="text-gold text-xs sm:text-sm font-medium">
                      ROVER P5B
                    </p>
                  </div>
                </div>
              </div>

              {/* Clean Rover Image */}
              <div className="aspect-video bg-navy/5 rounded-classic mb-6 sm:mb-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src="/images/rover-p5b-front.jpg"
                    alt="Classic Rover P5B - Distinguished Chauffeur Service Vehicle"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent"></div>
                </div>
                <div className="relative z-10 text-center px-4">
                  <p className="text-cream text-lg sm:text-xl source-serif-text font-semibold drop-shadow-lg">
                    Distinguished Rover P5B Service
                  </p>
                  <p className="text-cream/90 mt-2 text-sm sm:text-base source-serif-text drop-shadow-md">
                    Experience Classic British Luxury
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-lg text-navy mb-3">Classic Elegance</h3>
                  <p className="text-warm-grey source-serif-text">
                    Timeless design that continues to turn heads decades after
                    its creation
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg text-navy mb-3">Meticulous Care</h3>
                  <p className="text-warm-grey source-serif-text">
                    Every detail maintained to original specifications with
                    period-correct materials
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg text-navy mb-3">Modern Comfort</h3>
                  <p className="text-warm-grey source-serif-text">
                    Contemporary conveniences seamlessly integrated while
                    preserving authentic character
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact & Booking */}
      <section
        id="contact"
        className="py-16 sm:py-20 md:py-24 bg-navy text-cream"
      >
        <Container>
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
              Begin Your Journey
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 text-cream/80 source-serif-text">
              Ready to experience distinguished service? Contact us to arrange
              your bespoke journey.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
              <div>
                <h3 className="text-base sm:text-lg mb-2 sm:mb-3">Phone</h3>
                <p className="text-sm sm:text-base text-cream/80 source-serif-text">
                  +44 20 7XXX XXXX
                </p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg mb-2 sm:mb-3">Email</h3>
                <p className="text-sm sm:text-base text-cream/80 source-serif-text">
                  enquiries@londoncoupes.com
                </p>
              </div>
              <div className="sm:col-span-2 md:col-span-1">
                <h3 className="text-base sm:text-lg mb-2 sm:mb-3">Location</h3>
                <p className="text-sm sm:text-base text-cream/80 source-serif-text">
                  Central London, UK
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                size="lg"
                className="bg-cream text-navy hover:bg-cream/90 w-full sm:w-auto"
              >
                Book Your Journey
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="border-cream text-cream hover:bg-cream/10 w-full sm:w-auto"
              >
                Request Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-10 md:py-12 bg-charcoal text-cream">
        <Container>
          <div className="text-center px-4">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
                <Image
                  src="/images/london-coupes-original.png"
                  alt="London Coupes Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg">London Coupes</h3>
                <p className="text-xs text-cream/60 uppercase tracking-wider hidden sm:block">
                  Distinguished Service
                </p>
              </div>
            </div>
            <div className="border-t border-cream/20 pt-4 sm:pt-6">
              <div className="flex items-center justify-center space-x-4 mb-2 sm:mb-3">
                <span
                  className="text-xl sm:text-2xl italic font-serif"
                  style={{ color: "#d4af37" }}
                >
                  Coupé
                </span>
              </div>
              <p className="text-cream/60 text-xs sm:text-sm source-serif-text">
                © 2024 London Coupes. Preserving British automotive heritage
                with distinction.
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
