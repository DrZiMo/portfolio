'use client'

import { useState } from 'react'

export const ImageGallery = ({
  images,
  contain,
}: {
  images: string[]
  contain: boolean
}) => {
  const [active, setActive] = useState<string>(images[0])

  return (
    <div className='w-full lg:w-1/2 min-w-0 flex flex-col gap-4'>
      {/* MAIN IMAGE */}
      <div className='relative w-full h-[250px] md:h-[320px] rounded-xl overflow-hidden bg-black-100'>
        <img
          src={active}
          className={`w-full h-full ${contain ? 'object-contain' : 'object-cover'} transition-all duration-300`}
        />
      </div>

      <div className='flex gap-3 w-full overflow-x-auto py-1'>
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(img)}
            className={`h-16 w-20 min-w-[5rem] flex-shrink-0 rounded-md overflow-hidden border transition ${
              active === img
                ? 'border-purple'
                : 'border-white/10 opacity-70 hover:opacity-100'
            }`}
          >
            <img
              src={img}
              className={`w-full h-full ${contain ? 'object-contain' : 'object-cover'}`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
