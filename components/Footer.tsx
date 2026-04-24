import SocialMediaFooter from './SocialMediaFooter'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  const socialMedia = [
    {
      id: 1,
      icon: <FaGithub />,
      link: 'https://github.com/DrZiMo',
    },
    {
      id: 2,
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/suhayb-faysal',
    },
    {
      id: 3,
      icon: <FaWhatsapp />,
      link: '',
    },
  ]

  return (
    <div className='py-10 flex flex-col md:flex-row justify-between items-center'>
      <div className='text-sm text-white-100'>
        &copy; 2026 Zuhayb. All rights reserved.
      </div>
      <div className='flex space-x-2 mt-2 md:mt-0'>
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
  )
}

export default Footer
