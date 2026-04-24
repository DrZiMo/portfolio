import { FaExternalLinkAlt } from 'react-icons/fa'
import MagicButton from './MagicButton'
import Link from 'next/link'

const ReadyToTalk = () => {
  return (
    <div className='pb-20 pt-40'>
      <div className='font-bold text-4xl md:text-5xl text-center w-full md:w-[50%] mx-auto'>
        Ready to talk your <span className='text-purple'>digital presence</span>{' '}
        to the next level?
      </div>
      <div className='text-center mt-4 text-white-100'>
        Reach out to me today and let&apos;s discuss how I can help you achieve
        your goals.
      </div>

      <div className='flex justify-center items-center mt-5 md:mt-0'>
        <Link href={''} className='w-fit h-fit p-0'>
          <MagicButton
            title='Contact me now'
            icon={<FaExternalLinkAlt />}
            position='right'
          />
        </Link>
      </div>
    </div>
  )
}

export default ReadyToTalk
