import { Spotlight } from './ui/spotlight'
import { cn } from '@/lib/utils'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div className='w-full'>
        <Spotlight
          className='-top-40 -left-40 md:-left-32 md:-top-20 h-screen'
          fill='white'
        />

        <Spotlight
          className='top-10 left-full h-[80vh] w-[50vw]'
          fill='purple'
        />

        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />

        <div className='relative flex h-screen w-full items-center justify-center bg-black-100'>
          <div
            className={cn(
              'absolute inset-0',
              'bg-size-[40px_40px]',
              'linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
              'bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]',
            )}
          />
          <div className='pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]bg-black-100' />
        </div>

        <div className='flex justify-center z-20'>
          <div className='max-w-[89vw]'>
            <h1>Dynamic Web Magic with Next.js</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
