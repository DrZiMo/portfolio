import { projects } from '@/data'
import Heading from './Heading'
import { PinContainer } from './ui/pin'
import { FaLocationArrow } from 'react-icons/fa'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import ProjectCard from './ProjectCard'

const RecentProjects = () => {
  return (
    <div className='py-20'>
      <Heading text={'A small selection of'} subText={'recent projects'} />

      <div className='flex flex-wrap items-baseline-last justify-center p-4 gap-16 mt-10'>
        {projects.map((item) => (
          <Dialog key={item.id}>
            <DialogTrigger className={'text-left'}>
              <ProjectCard item={item} />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
