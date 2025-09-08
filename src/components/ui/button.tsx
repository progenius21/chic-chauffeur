import { cn } from '@/utils/cn'
import { forwardRef } from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'default' | 'sm' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-classic font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-navy text-cream hover:bg-navy/90': variant === 'primary',
            'border border-gold text-charcoal hover:bg-gold/10': variant === 'secondary',
            'h-9 px-4 py-2': size === 'sm',
            'h-11 px-6 py-3': size === 'default',
            'h-[44px] px-8 py-4': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }
