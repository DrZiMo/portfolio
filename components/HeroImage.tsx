import { motion } from 'framer-motion'

const HeroImage = () => {
  return (
    <motion.img
      src='/main-img.png'
      alt='Hero'
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    />
  )
}

export default HeroImage
