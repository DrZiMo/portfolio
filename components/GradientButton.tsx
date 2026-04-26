const GradientButton = ({
  title,
  handleClick,
  otherClasses,
}: {
  title: string
  handleClick?: () => void
  otherClasses?: string
}) => {
  return (
    <button
      className='relative inline-flex h-12 overflow-hidden rounded-lg p-px focus:outline-none w-full md:w-60 mt-6 md:mt-4'
      onClick={handleClick}
    >
      <span
        className='absolute inset-[-1000%] animate-[spin_3s_linear_infinite] 
bg-[conic-gradient(from_0deg_at_50%_50%,#7C3AED_0%,#4F46E5_25%,#2563EB_50%,#4F46E5_75%,#A855F7_100%)]'
      />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg 
  bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900 
  px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {title}
      </span>
    </button>
  )
}

export default GradientButton
