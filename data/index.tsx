import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
]

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-3 relative box-content',
    imgClassName: 'absolute bottom-0',
    titleClassName: 'justify-start',
    img: '/globe.png',
  },
  {
    id: 3,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
  },
]

export const brandList = [
  {
    image: 'https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg',
    lightimg: 'https://www.svgrepo.com/show/452214/go.svg',
    name: 'Golang',
  },
  {
    image: 'https://images.shadcnspace.com/assets/brand-logo/logoipsum-2.svg',
    lightimg: 'https://www.svgrepo.com/show/378837/node.svg',
    name: 'Nodejs',
  },
  {
    image: 'https://images.shadcnspace.com/assets/brand-logo/logoipsum-2.svg',
    lightimg: 'https://www.svgrepo.com/show/349540/typescript.svg',
    name: 'TypeScript',
  },
  {
    image: 'https://images.shadcnspace.com/assets/brand-logo/logoipsum-3.svg',
    lightimg: 'https://www.svgrepo.com/show/452092/react.svg',
    name: 'Reactjs',
  },
  {
    image: 'https://images.shadcnspace.com/assets/brand-logo/logoipsum-3.svg',
    lightimg: '/nextjs-icon-svgrepo-com.svg',
    name: 'Nextjs',
  },
  {
    image: 'https://images.shadcnspace.com/assets/brand-logo/logoipsum-5.svg',
    lightimg: 'https://www.svgrepo.com/show/374118/tailwind.svg',
    name: 'Tailwind CSS',
  },
  {
    image: 'https://images.shadcnspace.com/assets/brand-logo/logoipsum-4.svg',
    lightimg: 'https://www.svgrepo.com/show/452093/redux.svg',
    name: 'Redux',
  },
  {
    image: 'https://images.shadcnspace.com/assets/brand-logo/logoipsum-5.svg',
    lightimg: 'https://www.svgrepo.com/show/452091/python.svg',
    name: 'Python',
  },
  {
    image: 'https://images.shadcnspace.com/assets/brand-logo/logoipsum-5.svg',
    lightimg: 'https://www.svgrepo.com/show/373845/mongo.svg',
    name: 'MongoDB',
  },
  {
    image: 'https://images.shadcnspace.com/assets/brand-logo/logoipsum-5.svg',
    lightimg: 'https://www.svgrepo.com/show/354200/postgresql.svg',
    name: 'postgreSQL',
  },
  {
    image: 'https://images.shadcnspace.com/assets/brand-logo/logoipsum-5.svg',
    lightimg: 'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg',
    name: 'Supabase',
  },
  {
    image: 'https://images.shadcnspace.com/assets/brand-logo/logoipsum-5.svg',
    lightimg: 'https://www.svgrepo.com/show/354202/postman-icon.svg',
    name: 'Postman',
  },
  {
    image: 'https://images.shadcnspace.com/assets/brand-logo/logoipsum-5.svg',
    lightimg: 'https://www.svgrepo.com/show/452228/html-5.svg',
    name: 'HTML5',
  },
  {
    image: 'https://images.shadcnspace.com/assets/brand-logo/logoipsum-5.svg',
    lightimg: 'https://www.svgrepo.com/show/452185/css-3.svg',
    name: 'CSS3',
  },
  {
    image: 'https://images.shadcnspace.com/assets/brand-logo/logoipsum-5.svg',
    lightimg: '/cloudinary-svgrepo-com.svg',
    name: 'Cloudinary',
  },
]

export const projects = [
  // {
  //   title: '3D Solar System Planets to Explore',
  //   des: 'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
  //   img: ['/p1.svg'],
  //   iconLists: ['react', 'tailwind', 'typescript', 'three', 'framer'],
  //   link: '/ui.earth.com',
  //   github: '',
  // },
  {
    title: 'GiveFlow - Donation Platform',
    des: 'A modern donation platform designed to make giving simple, fast, and transparent. GiveFlow connects donors with causes, enabling seamless contributions and real-time impact tracking.',
    img: [
      '/giveflow  (1).png',
      '/giveflow  (2).png',
      '/giveflow  (3).png',
      '/giveflow  (4).png',
      '/giveflow  (5).png',
      '/giveflow  (6).png',
      '/giveflow  (7).png',
      '/giveflow  (8).png',
      '/giveflow  (9).png',
      '/giveflow  (10).png',
      '/giveflow  (11).png',
    ],
    iconLists: [
      'next',
      'tailwind',
      'typescript',
      'stripe',
      'redux',
      'express',
      'supabase',
    ],
    link: 'https://giveflow-two.vercel.app/',
    github: 'https://github.com/DrZiMo/giveflow-nextjs',
  },
  {
    title: 'Guess the Word Game',
    des: 'A real-time 2-player word guessing game where you challenge a friend to decode your secret word before they crack yours, featuring fast-paced interactive gameplay powered by live communication.',
    img: [
      '/guess-main.png',
      'guess  (1).png',
      'guess  (2).png',
      'guess  (3).png',
      'guess  (4).png',
    ],
    imageContain: true,
    iconLists: ['react', 'tailwind', 'javascript', 'socket', 'vercel'],
    link: 'https://guess-bice.vercel.app/',
    github: 'https://github.com/DrZiMo/guess-character-game',
  },
  {
    title: 'Waafi UI',
    des: 'Recreated the Waafi website with a focus on clean design and smooth user experience',
    img: [
      '/waafi-main.png',
      'waafi (1).png',
      'waafi (2).png',
      'waafi (3).png',
      'waafi (4).png',
    ],
    iconLists: ['react', 'tailwind', 'javascript', 'vercel'],
    link: 'https://waafi-app.vercel.app/',
    github: 'https://github.com/DrZiMo/waafi-app',
  },
  {
    title: 'Rock Paper Scissors Game',
    des: 'An interactive Rock Paper Scissors game featuring a clean, modern UI and real-time gameplay against a computer opponent. Designed with smooth animations, responsive layouts, and a focus on user experience.',
    img: ['/rbs-main.png', 'rbs (1).png', 'rbs (2).png', 'rbs (3).png'],
    imageContain: true,
    iconLists: ['react', 'tailwind', 'typescript', 'vercel'],
    link: 'https://rock-paper-scissors-weld-three.vercel.app/',
    github: 'https://github.com/DrZiMo/rock-paper-scissors-game',
  },
  {
    title: 'Ampire website',
    des: 'A modern and fully responsive website built with a clean UI and well-structured layout, focusing on smooth user experience across all devices.',
    img: [
      '/ampire-main.png',
      'ampire (1).png',
      'ampire (2).png',
      'ampire (3).png',
      'ampire (4).png',
      'ampire (5).png',
      'ampire (6).png',
    ],
    iconLists: ['html', 'tailwind'],
    link: 'https://drzimo.github.io/Tailwind-project/src/',
    github: 'https://github.com/DrZiMo/Tailwind-project',
  },
  {
    title: 'Cruip website',
    des: 'A modern and fully responsive website built with a clean UI and well-structured layout, focusing on smooth user experience across all devices.',
    img: [
      '/cruip-main.png',
      'cruip (1).png',
      'cruip (2).png',
      'cruip (3).png',
      'cruip (4).png',
      'cruip (5).png',
      'cruip (6).png',
    ],
    iconLists: ['html', 'tailwind', 'github'],
    link: 'https://drzimo.github.io/Tailwind-project/src/',
    github: 'https://github.com/DrZiMo/Tailwind-project',
  },
  {
    title: 'Pomodoro Timer',
    des: 'A responsive Pomodoro Timer built with a modern UI, featuring customizable focus sessions, short and long breaks, and real-time controls for an optimized productivity experience',
    img: ['/pomodoro-main.png'],
    iconLists: ['html', 'tailwind', 'javascript', 'github'],
    link: 'https://drzimo.github.io/pomodoro-timer/',
    github: 'https://github.com/DrZiMo/pomodoro-timer',
  },
  {
    title: 'Advice Generator',
    des: 'An interactive advice generator that fetches random advice from an external API, delivering a new tip with each click through a clean and responsive interface.',
    img: ['/advice-main.png'],
    iconLists: ['html', 'css', 'javascript', 'api'],
    link: 'https://drzimo.github.io/pomodoro-timer/',
    github: 'https://github.com/DrZiMo/pomodoro-timer',
  },
  {
    title: 'XO game',
    des: 'A command-line XO (Tic-Tac-Toe) game built in Go, focusing on game logic, turn handling, and efficient state management.',
    img: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTuUT8KAq6lb2pQNwb61RJD7bDJj96okIopw&s',
    ],
    iconLists: ['go'],
    link: '',
    github: 'https://github.com/DrZiMo/XO-in-go',
  },
  {
    title: 'Watch Tracker API',
    des: 'A RESTful Watch Tracker API built in Go using SQLite, allowing users to manage watched content with ratings and status. Includes secure authentication with hashed passwords and structured data models.',
    img: ['https://stabillon.com/wp-content/uploads/2025/06/stabillon-api.jpg'],
    iconLists: ['go', 'sqlite', 'api'],
    link: '',
    github: 'https://github.com/DrZiMo/watch-tracker-api-golang',
  },
]

export const testimonials = [
  {
    quote:
      "Suhayb is pro. He converted my Figma design into responsive HTML file, and everything looks perfect\n\nif you're looking for a professional HTML expert, I can vouch for him and will definitely work with him again\nThanks man",
    name: 'Olorunfemi Abiodun',
    title: 'Upwork Client',
  },
  {
    quote: 'Joe Farra gave me 5 stars on upwork, ⭐⭐⭐⭐⭐',
    name: 'Joe Farra',
    title: 'Upwork Client',
  },
  {
    quote:
      'We are very grateful for the excellent work Suhayb delivered on our project. He was professional, reliable, and paid attention to every detail. The final result exceeded our expectations, and we truly appreciate his dedication.\n\nWe highly recommend him and look forward to working with him again.',
    name: 'Abdirahman Mahamed',
    title: 'Administrator, Tacab College',
  },
]

export const workExperience = [
  {
    id: 1,
    title: 'Tacab College',
    desc: 'Developed a full-stack Student Management System with exam, payment, and student management features, including secure authentication and analytics dashboard.',
    features: [
      'Developed a full-stack Student Management System with exam and payment management features',
      'Implemented secure authentication using hashed passwords, JWT, refresh/access tokens, and role-based access control (Super Admin, Admin, Registration, Student)',
      'Built password recovery system with email reset links and secure credential updates',
      'Developed Excel bulk upload with automated data extraction, student classification (IT/Basic), and grade calculation',
      'Designed student management modules including CRUD operations, academic records, and payments tracking',
      'Created student portal for viewing results, payments, subjects, and updating credentials',
      'Built admin and payment management systems with role-based controls and financial tracking',
      'Implemented analytics dashboard with charts and statistics for academic and financial insights',
      'Designed responsive UI for both admin and student interfaces',
    ],
    date: 'October 2025 – March 2026',
    role: 'Full-stack Developer',
  },
  {
    id: 2,
    title: 'Xalkadoon Hackathon',
    desc: 'Built a geospatial decision-support system to identify optimal dam locations in Somaliland using environmental and terrain data analysis.',
    features: [
      'Built a geospatial decision-support system for optimal dam location selection in Somaliland',
      'Processed terrain data including elevation, slope, valleys, precipitation, and water flow to identify high water accumulation zones',
      'Developed a cloud-seeding feasibility model using 16 environmental conditions with confidence scoring',
      'Designed system logic for water flow analysis across highland and lowland regions',
      'Collaborated in a fast-paced team to deliver a working prototype under strict time constraints',
      'Applied problem-solving, teamwork, and rapid prototyping skills in a hackathon environment',
    ],
    date: 'December 2025',
    role: 'Full-stack Developer',
  },
  {
    id: 3,
    title: 'Upwork',
    desc: 'Worked as a freelance frontend developer on Upwork, delivering high-quality web solutions while maintaining a 100% Job Success Score and excellent client feedback.',
    features: [
      'Worked as a frontend developer on Upwork, building responsive and user-friendly web interfaces',
      'Maintained a 100% Job Success Score through consistent delivery of high-quality work',
      'Received 5-star ratings from clients for performance, reliability, and project outcomes',
      'Communicated effectively with clients to understand requirements and deliver tailored solutions',
      'Delivered projects efficiently under tight deadlines while maintaining quality standards',
      'Improved problem-solving and time management skills in a real-world freelance environment',
      'Collaborated directly with clients to achieve optimal results and ensure satisfaction',
    ],
    date: 'August 2025 - Present',
    role: 'Frontend Developer',
  },
]

export const socialMedia = [
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
    link: 'https://wa.me/+252634541983',
  },
]
