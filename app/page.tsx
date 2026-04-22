import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className='bg-black-100 flex justify-center items-center flex-col mx-auto relative w-full overflow-hidden'>
      <div className='max-w-7xl w-full'>
        <Hero />
      </div>
    </main>
  )
}
