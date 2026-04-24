import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import RecentProjects from '@/components/RecentProjects'
import Testimonials from '@/components/Testimonials'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { navItems } from '@/data'

export default function Home() {
  return (
    <main className='bg-black-100 flex justify-center items-center flex-col mx-auto relative w-full h-fit overflow-x-hidden sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Testimonials />
      </div>
    </main>
  )
}
