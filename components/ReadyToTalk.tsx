'use client'

import { FaExternalLinkAlt, FaPaperPlane } from 'react-icons/fa'
import MagicButton from './MagicButton'
import Link from 'next/link'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { socialMedia } from '@/data'
import SocialMediaFooter from './SocialMediaFooter'
import { useState } from 'react'
import { toast } from 'sonner'

const ReadyToTalk = () => {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <section className='pb-20 pt-40' id='contact'>
      <div className='font-bold text-4xl md:text-5xl text-center w-full md:w-[50%] mx-auto'>
        Ready to talk your <span className='text-purple'>digital presence</span>{' '}
        to the next level?
      </div>
      <div className='text-center mt-4 text-white-100'>
        Reach out to me today and let&apos;s discuss how I can help you achieve
        your goals.
      </div>

      <div className='flex justify-center items-center mt-5 md:mt-0'>
        <Dialog>
          <DialogTrigger className='text-left'>
            <Link href={''} className='w-fit h-fit p-0'>
              <MagicButton
                title='Contact me now'
                icon={<FaExternalLinkAlt />}
                position='right'
              />
            </Link>
          </DialogTrigger>

          <DialogContent className='bg-black-100 border border-white/10 text-white max-w-2xl w-[90%] rounded-2xl p-8 max-h-[90vh] overflow-y-auto'>
            <div className='flex flex-col gap-6'>
              {/* HEADER */}
              <DialogHeader className='space-y-2 text-center'>
                <DialogTitle className='text-2xl md:text-3xl font-bold'>
                  Contact Me
                </DialogTitle>

                <DialogDescription className='text-white-100 text-sm md:text-base'>
                  Have a project in mind or just want to say hi? Fill the form
                  below or reach me on social media.
                </DialogDescription>
              </DialogHeader>

              {/* FORM */}
              <form
                className='flex flex-col gap-4 mt-4'
                onSubmit={async (e) => {
                  e.preventDefault()

                  const formData = new FormData(e.currentTarget)

                  const data = {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    subject: formData.get('subject'),
                    message: formData.get('message'),
                  }

                  setIsLoading(true)
                  const res = await fetch('/api/contact', {
                    method: 'POST',
                    body: JSON.stringify(data),
                  })

                  if (res.ok) {
                    toast('Message sent!')
                  } else {
                    toast('Failed to send message.')
                  }
                  setIsLoading(false)
                }}
              >
                <div className='flex flex-col md:flex-row gap-4'>
                  <input
                    type='text'
                    placeholder='Your Name'
                    name='name'
                    className='flex-1 bg-[#161A31] border border-white/10 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-purple'
                  />

                  <input
                    type='email'
                    placeholder='Your Email'
                    name='email'
                    className='flex-1 bg-[#161A31] border border-white/10 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-purple'
                  />
                </div>

                <input
                  type='text'
                  placeholder='Subject'
                  name='subject'
                  className='bg-[#161A31] border border-white/10 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-purple'
                />

                <textarea
                  placeholder='Your Message'
                  rows={5}
                  name='message'
                  className='bg-[#161A31] border border-white/10 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-purple resize-none'
                />

                {/* BUTTON */}
                <div className='mx-auto'>
                  <MagicButton
                    title={isLoading ? 'Sending...' : 'Send Message'}
                    icon={<FaPaperPlane />}
                    position='right'
                    type='submit'
                    otherClasses={
                      isLoading ? 'opacity-50 cursor-not-allowed' : ''
                    }
                    disabled={isLoading}
                  />
                </div>
              </form>

              {/* DIVIDER */}
              <div className='flex items-center gap-3 my-2'>
                <div className='flex-1 h-px bg-white/10' />
                <span className='text-xs text-white-100 text-sub-text'>
                  OR CONNECT WITH ME
                </span>
                <div className='flex-1 h-px bg-white/10' />
              </div>

              {/* SOCIAL MEDIA */}
              <div className='flex justify-center'>
                <div className='flex space-x-3'>
                  {socialMedia.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <SocialMediaFooter icon={item.icon} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

export default ReadyToTalk
