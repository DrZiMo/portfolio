import Heading from './Heading'
import TailwindConnectButton from './TailwindConnectButton'
import Link from 'next/link'
import ProjectsPart from './ProjectsPart'

const RecentProjects = () => {
  return (
    <section className='py-20' id='projects'>
      <Heading text={'A small selection of'} subText={'recent projects'} />

      <ProjectsPart />
      <div className='flex justify-center mt-5'>
        <Link href={'/projects'}>
          <TailwindConnectButton text='See more' />
        </Link>
      </div>
    </section>
  )
}

export default RecentProjects
