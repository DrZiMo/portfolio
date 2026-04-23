import React from 'react'

const Heading = ({ text, subText }: { text: string; subText: string }) => {
  return (
    <h1 className='font-bold text-4xl md:text-5xl text-center'>
      {text} <span className='text-purple'>{subText}</span>
    </h1>
  )
}

export default Heading
