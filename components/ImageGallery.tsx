'use client'

import { useState } from 'react'

export const ImageGallery = ({ images }: { images: string[] }) => {
  const [active, setActive] = useState<string>(images[0])

  return (
    <div className='w-full md:w-[50%] flex flex-col gap-4'>
      {/* MAIN IMAGE */}
      <div className='relative h-[250px] md:h-[300px] rounded-xl overflow-hidden bg-black-100'>
        <img
          src={active}
          className='w-full h-full object-cover transition-all duration-300'
        />
      </div>

      <div className='flex gap-3'>
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(img)}
            className={`h-16 w-20 rounded-md overflow-hidden border transition ${
              active === img
                ? 'border-purple'
                : 'border-white/10 opacity-70 hover:opacity-100'
            }`}
          >
            <img src={img} className='w-full h-full object-cover' />
          </button>
        ))}
      </div>
    </div>
  )
}
