import { testimonials } from '@/data'
import Heading from './Heading'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

const Testimonials = () => {
  return (
    <section className='py-20' id='testimonials'>
      <Heading text={'What people say about'} subText={'my work'} />
      <div className='mt-10'>
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
        />
      </div>
    </section>
  )
}

export default Testimonials
