'use client';

import { cn } from '@/utils/cn';
import { useState } from 'react';
import { useBooking } from './booking-provider';
import { Button } from './button';

interface MobileMenuProps {
  className?: string;
}

export function MobileMenu({ className }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { openBookingModal } = useBooking();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { href: '#services', label: 'Services' },
    { href: '#heritage', label: 'Heritage' },
    { href: '#fleet', label: 'Fleet' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className={cn('md:hidden', className)}>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="relative w-8 h-8 flex flex-col justify-center items-center space-y-1 group"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            'w-6 h-0.5 bg-black transition-all duration-300 ease-in-out',
            isOpen ? 'rotate-45 translate-y-1.5' : ''
          )}
        />
        <span
          className={cn(
            'w-6 h-0.5 bg-black transition-all duration-300 ease-in-out',
            isOpen ? 'opacity-0' : ''
          )}
        />
        <span
          className={cn(
            'w-6 h-0.5 bg-black transition-all duration-300 ease-in-out',
            isOpen ? '-rotate-45 -translate-y-1.5' : ''
          )}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 mobile-menu-backdrop z-44 h-screen w-screen"
            onClick={closeMenu}
          />
          
          {/* Menu Panel */}
          <div className="fixed bg-white top-0 right-0 h-screen w-80 max-w-[85vw] bg-cream shadow-xl z-50 transform transition-transform duration-300 ease-in-out animate-in slide-in-from-right">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-warm-grey/20">
                <h2 className="text-lg font-semibold high-contrast-text">Menu</h2>
                <button
                  onClick={closeMenu}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-warm-grey/10 transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-5 h-5 high-contrast-text"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-8">
                <ul className="space-y-6">
                  {menuItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={closeMenu}
                        className="block text-lg readable-text hover:high-contrast-text transition-colors font-medium py-3 leading-relaxed"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Footer Actions */}
              <div className="p-6 border-t border-warm-grey/20 space-y-4">
                <Button
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    closeMenu();
                    openBookingModal();
                  }}
                >
                  Book Now
                </Button>
                <div className="text-center">
                  <p className="text-sm text-warm-grey leading-relaxed">
                    Experience distinguished service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
