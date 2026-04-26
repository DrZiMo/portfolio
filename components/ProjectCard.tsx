import { PinContainer } from './ui/pin'

import { projects } from '@/data'

const ProjectCard = ({ item }: { item: (typeof projects)[number] }) => {
  return (
    <div
      className='lg:min-h-130 h-100 flex items-center justify-center sm:w-96 w-[80vw]'
      key={item.id}
    >
      <PinContainer>
        <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
          <div
            className='relative w-full h-full overflow-hidden lg:rounded-3xl'
            style={{ backgroundColor: '#13162D' }}
          >
            <img src='/bg.png' alt='bgimg' />
          </div>
          <img
            src={item.img[0]}
            alt='cover'
            className='z-10 absolute bottom-0'
          />
        </div>

        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
          {item.title}
        </h1>

        <p
          className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'
          style={{
            color: '#BEC1DD',
            margin: '1vh 0',
          }}
        >
          {item.des}
        </p>

        <div className='flex items-center justify-between mt-7 mb-3'>
          <div className='flex items-center'>
            {item.iconLists.map((icon, index) => (
              <div
                key={index}
                className='border border-white/20 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                style={{
                  transform: `translateX(-${5 * index + 2}px)`,
                }}
              >
                <img src={icon} alt='icon5' className='p-2' />
              </div>
            ))}
          </div>
        </div>
      </PinContainer>
    </div>
  )
}

export default ProjectCard
