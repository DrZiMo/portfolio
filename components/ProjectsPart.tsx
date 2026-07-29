import { projects } from '@/data'
import React from 'react'
import { FaGithub, FaLocationArrow, FaVideo } from 'react-icons/fa'
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
import { SVGs } from '@/data/svgs'

const ProjectsPart = ({ full = false }: { full?: boolean }) => {
  const projectsSlice = full ? projects : projects.slice(0, 4)

  return (
    <div className='flex flex-wrap items-baseline-last justify-center p-4 gap-16 mt-10'>
      {projectsSlice.map((item, index) => (
        <Dialog key={index}>
          <DialogTrigger className='text-left'>
            <ProjectCard item={item} />
          </DialogTrigger>

          <DialogContent className='bg-black-100 border border-white/10 text-white lg:max-w-7xl w-[90vw] rounded-2xl p-6 max-h-[90vh] overflow-y-scroll overflow-x-hidden'>
            <div className='flex flex-col lg:flex-row gap-6 w-[calc(90vw-48px)] lg:w-full min-h-0'>
              <ImageGallery
                images={item.img}
                contain={item.imageContain ? item.imageContain : false}
              />

              <div className='flex flex-col min-w-0 lg:w-full'>
                <DialogHeader className='space-y-3 w-full'>
                  <DialogTitle className='text-2xl md:text-3xl font-bold'>
                    {item.title}
                  </DialogTitle>

                  <DialogDescription className='text-base leading-relaxed text-wrap lg:max-w-[60%]'>
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
                        src={SVGs[icon]}
                        alt={icon}
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

                  {item.video && (
                    <a
                      href={item.video}
                      target='_blank'
                      className='flex items-center gap-2 bg-[#161A31] hover:bg-[#1d2245] transition px-5 py-2.5 rounded-lg border border-white/10'
                    >
                      <span className='text-sm md:text-base'>Video</span>
                      <FaVideo className='text-purple' />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}

export default ProjectsPart
