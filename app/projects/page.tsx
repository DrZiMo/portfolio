import Heading from '@/components/Heading'
import ProjectsPart from '@/components/ProjectsPart'
import Link from 'next/link'
import { FaAngleLeft } from 'react-icons/fa'

const page = () => {
  return (
    <div className='w-full min-h-screen bg-black-100 overflow-x-hidden'>
      <div className='relative h-full py-10 md:py-20 sm:px-10 px-5 max-w-7xl w-full mx-auto'>
        <div className='w-full absolute top-20 md:-top-50 left-0'>
          <img src='/pattern.png' alt='pattern' className='h-full' />
        </div>
        <div className='my-5 w-fit'>
          <Link href={'/'} className={'w-fit cursor-pointer'}>
            <FaAngleLeft size={23} />
          </Link>
        </div>
        <Heading text='Here are' subText='my projects' />

        <ProjectsPart full={true} />
      </div>
    </div>
  )
}

export default page
