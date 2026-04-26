import { Spotlight } from './ui/spotlight'
import { cn } from '@/lib/utils'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import Link from 'next/link'
import SocialMediaFooter from './SocialMediaFooter'
import { socialMedia } from '@/data'

const Hero = () => {
  return (
    <>
      <div className='w-full lg:h-screen xl:h-fit'>
        <Spotlight
          className='-top-40 -left-40 md:-left-32 md:-top-20 h-screen'
          fill='white'
        />

        <Spotlight
          className='top-10 left-full h-[80vh] w-[50vw]'
          fill='purple'
        />

        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />

        <div className='relative w-full h-full'>
          <div className='absolute top-0 left-0 flex h-full w-full items-center justify-center bg-white dark:bg-black-100'>
            <div
              className={cn(
                'absolute inset-0',
                'bg-size-[40px_40px]',
                'bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
                'dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]',
              )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] dark:bg-black-100'></div>
          </div>

          <div className='flex flex-col md:flex-row justify-between items-center md:items-start h-full'>
            <div className='flex flex-col justify-center h-fit z-20 relative mt-28 mb-20 max-w-full md:max-w-[80%] lg:max-w-[55%]'>
              <div className='flex flex-col'>
                <h2 className='uppercase tracking-widest text-center md:text-left text-xs max-w-80'>
                  Scalable Fullstack Development
                </h2>

                <TextGenerateEffect
                  className='text-[40px] md:text-5xl lg:text-6xl text-center md:text-left'
                  words='Turning Ideas into Scalable, Real-World Applications'
                />

                <p className='md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white-100 text-center md:text-left'>
                  Hi, I&apos;m Zuhayb, a Fullstack web developer based in
                  Somaliland
                </p>
              </div>
              <div className='flex space-x-4 md:space-x-2 mt-2 md:mt-0 mx-auto md:mx-0'>
                {socialMedia.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <SocialMediaFooter icon={item.icon} />
                  </Link>
                ))}
              </div>
              <div className='w-full flex justify-center md:justify-start'>
                <Link href={'#projects'}>
                  <MagicButton
                    title='Show my Work'
                    icon={<FaLocationArrow />}
                    position='right'
                  />
                </Link>
              </div>
            </div>
            <div className='relative h-full flex items-center shrink-0 lg:w-[35%]'>
              <img
                src='/main-img.png'
                alt='Hero'
                className='w-full h-auto object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
