import { useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TooltipProps {
  content: string
  children: ReactNode
  disabled?: boolean
  className?: string
}

export function Tooltip({ content, children, disabled = false, className }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  if (disabled) {
    return <>{children}</>
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={cn(
            "absolute z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm",
            "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
            "before:content-[''] before:absolute before:top-full before:left-1/2 before:ml-[-5px]",
            "before:border-l-[5px] before:border-r-[5px] before:border-t-[5px]",
            "before:border-l-transparent before:border-r-transparent before:border-t-gray-900",
            className
          )}
        >
          {content}
        </div>
      )}
    </div>
  )
}