import Heading from '@/components/Heading'
import { ImageGallery } from '@/components/ImageGallery'
import ProjectCard from '@/components/ProjectCard'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { projects } from '@/data'
import Link from 'next/link'
import { FaAngleLeft, FaGithub, FaLocationArrow } from 'react-icons/fa'

const page = () => {
  return (
    <div className='w-full min-h-screen bg-black-100 overflow-x-hidden'>
      <div className='relative h-full py-10 md:py-20 sm:px-10 px-5 max-w-7xl w-full mx-auto'>
        <div className='w-full absolute top-20 md:-top-50 left-0'>
          <img src='/pattern.png' alt='pattern' className='h-full' />
        </div>
        <div className='my-5 w-fit'>
          <Link href={'/'} className={'w-fit'}>
            <FaAngleLeft size={23} />
          </Link>
        </div>
        <Heading text='Here are' subText='my projects' />

        <div className='flex flex-wrap items-baseline-last justify-center p-4 gap-16 mt-10'>
          {projects.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger className='text-left'>
                <ProjectCard item={item} />
              </DialogTrigger>

              <DialogContent className='bg-black-100 border border-white/10 text-white max-w-7xl w-[90%] rounded-2xl p-6'>
                <div className='flex flex-col md:flex-row gap-6'>
                  <ImageGallery images={item.img} />

                  <div className='flex flex-col flex-1'>
                    <DialogHeader className='space-y-3'>
                      <DialogTitle className='text-2xl md:text-3xl font-bold'>
                        {item.title}
                      </DialogTitle>

                      <DialogDescription className='text-sub-text text-base leading-relaxed'>
                        {item.des}
                      </DialogDescription>
                    </DialogHeader>

                    {/* TECH STACK */}
                    <div className='mt-6'>
                      <p className='text-sm text-sub-text mb-2'>Tech Stack</p>

                      <div className='flex items-center gap-3 flex-wrap'>
                        {item.iconLists.map((icon, index) => (
                          <img
                            key={index}
                            src={icon}
                            className='w-6 h-6 opacity-80 hover:opacity-100 transition'
                          />
                        ))}
                      </div>
                    </div>

                    <div className='flex flex-wrap gap-4 mt-8'>
                      {item.link && (
                        <a
                          href={item.link}
                          target='_blank'
                          className='flex items-center gap-2 bg-[#161A31] hover:bg-[#1d2245] transition px-5 py-2.5 rounded-lg border border-white/10'
                        >
                          <span className='text-sm md:text-base'>
                            Live Site
                          </span>
                          <FaLocationArrow className='text-purple' />
                        </a>
                      )}

                      {item.github && (
                        <a
                          href={item.github}
                          target='_blank'
                          className='flex items-center gap-2 bg-[#161A31] hover:bg-[#1d2245] transition px-5 py-2.5 rounded-lg border border-white/10'
                        >
                          <span className='text-sm md:text-base'>GitHub</span>
                          <FaGithub className='text-purple' />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page
