import { Marquee } from '@/components/shadcn-space/animations/marquee'
import { brandList } from '@/data'

export default function MarqueeTechStack() {
  return (
    <>
      <Marquee className='[--duration:20s] px-0 py-10' pauseOnHover>
        {brandList.map((brand, index) => (
          <div key={index}>
            <img
              src={brand.image}
              alt={brand.name}
              className='w-36 h-8 mr-6 lg:mr-20 dark:hidden'
            />
            <img
              src={brand.lightimg}
              alt={brand.name}
              className='hidden dark:block w-36 h-8 mr-12 lg:mr-20'
            />
          </div>
        ))}
      </Marquee>
    </>
  )
}
