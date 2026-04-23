import { projects } from '@/data'
import Heading from './Heading'
import { PinContainer } from './ui/pin'
import { FaGithub, FaLocationArrow } from 'react-icons/fa'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import ProjectCard from './ProjectCard'
import { ImageGallery } from './ImageGallery'

const RecentProjects = () => {
  return (
    <div className='py-20'>
      <Heading text={'A small selection of'} subText={'recent projects'} />

      <div className='flex flex-wrap items-baseline-last justify-center p-4 gap-16 mt-10'>
        {projects.map((item) => (
          <Dialog key={item.id}>
            <DialogTrigger className='text-left'>
              <ProjectCard item={item} />
            </DialogTrigger>

            <DialogContent className='bg-black-100 border border-white/10 text-white max-w-5xl w-[90%] rounded-2xl p-6'>
              <div className='flex flex-col md:flex-row gap-6'>
                <ImageGallery images={item.img} />

                {/* RIGHT: INFO */}
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

                  {/* ACTIONS */}
                  <div className='flex flex-wrap gap-4 mt-8'>
                    {/* LIVE LINK */}
                    {item.link && (
                      <a
                        href={item.link}
                        target='_blank'
                        className='flex items-center gap-2 bg-[#161A31] hover:bg-[#1d2245] transition px-5 py-2.5 rounded-lg border border-white/10'
                      >
                        <span className='text-sm md:text-base'>Live Site</span>
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
  )
}

export default RecentProjects
