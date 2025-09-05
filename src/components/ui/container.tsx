import { cn } from '@/utils/cn'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Container({
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'max-w-content mx-auto px-5 md:px-20',
        className
      )}
      {...props}
    />
  )
}
