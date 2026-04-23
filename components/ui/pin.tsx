import React from 'react'
import { cn } from '@/lib/utils'

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode
  title?: string
  href?: string
  className?: string
  containerClassName?: string
}) => {
  return (
    <div
      className={cn(
        'group relative rounded-2xl border border-white/10 bg-[#0c0e23] p-5 transition duration-300 hover:border-white/20 hover:shadow-xl cursor-pointer',
        containerClassName,
      )}
    >
      {title && (
        <a
          href={href}
          target='_blank'
          className='inline-block mb-4 text-xs font-bold text-white bg-zinc-900 px-3 py-1 rounded-full ring-1 ring-white/10'
        >
          {title}
        </a>
      )}

      <div className={cn('relative z-10', className)}>{children}</div>

      <div className='pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-300' />
    </div>
  )
}
