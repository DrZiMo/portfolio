import React from 'react'

const SocialMediaFooter = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <div className='relative shrink-0 rounded-md border border-b border-zinc-100 px-2 py-2 dark:border-zinc-700 bg-white-100/5 hover:bg-white-100/15 transition-colors duration-300'>
      {icon}
    </div>
  )
}

export default SocialMediaFooter
