'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * Real Zeetreat product photo (front bottle cropped from the official
 * front/back reference shot), given a subtle interactive tilt + float so it
 * reads as a dynamic hero asset without ever redrawing the packaging.
 */
export function Product3D({
  className,
  interactive = true,
}: {
  className?: string
  interactive?: boolean
}) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 2, y: -4 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!interactive || !wrapRef.current) return
    const rect = wrapRef.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    setTilt({
      x: 2 + (0.5 - py) * 8,
      y: -4 + (px - 0.5) * 10,
    })
  }

  function handleMouseLeave() {
    setTilt({ x: 2, y: -4 })
  }

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn('relative [perspective:1400px]', className)}
    >
      {/* Grounding shadow */}
      <div className="absolute bottom-[4%] left-1/2 h-8 w-[46%] -translate-x-1/2 rounded-full bg-brand-espresso/35 blur-xl" />

      <div
        className="relative mx-auto h-full w-full animate-zt-float transition-transform duration-500 ease-out [transform-style:preserve-3d]"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        <div className="relative mx-auto aspect-[490/1080] w-[38%] drop-shadow-[0_30px_40px_rgba(36,22,8,0.45)]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/product-kf883jCeUSROE1a7ap8LAvJsrR5cdb.jpeg"
            alt="Zeetreat Herbal Hair Oil, 200ml bottle"
            fill
            className="object-contain object-left"
            style={{ objectPosition: '0% 50%', clipPath: 'inset(0 50% 0 0)' }}
            sizes="(max-width: 768px) 60vw, 30vw"
            priority
          />
        </div>

        {/* moving glossy sheen overlay */}
        <div className="pointer-events-none absolute inset-0 mx-auto w-[38%] overflow-hidden opacity-40 mix-blend-soft-light">
          <div className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-zt-shine" />
        </div>
      </div>
    </div>
  )
}
