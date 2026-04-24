import React from 'react'
import Heading from './Heading'
import { TracingBeam } from './ui/tracing-beam'
import { workExperience } from '@/data'
import { GlowingEffect } from './ui/glowing-effect'

const WorkExperience = () => {
  return (
    <section id='experience' className='pt-20'>
      <Heading text={'Here are'} subText={'my work experience'} />

      <TracingBeam className='px-6 h-full mt-10'>
        <div className='flex flex-col gap-10 antialiased'>
          {workExperience.map((item, index) => (
            <div
              key={`content-${index}`}
              className='relative flex items-center gap-6 text-sm leading-[1.6] font-normal rounded-2xl border p-5 md:p-10'
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className='group'>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                  <h3 className='text-xl font-semibold mt-3 md:mt-0'>
                    {item.title}
                  </h3>
                  <span className='text-xs text-white-100 italic'>
                    {item.date}
                  </span>
                </div>

                {/* description */}
                <p className='text-sm text-white-200 mt-2'>{item.desc}</p>

                {/* features */}
                <ul className='mt-4 space-y-2'>
                  {item.features.map((feature, i) => (
                    <li
                      key={i}
                      className='text-sm text-zinc-300 flex items-start gap-2'
                    >
                      <span className='mt-1 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0' />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </section>
  )
}

export default WorkExperience
