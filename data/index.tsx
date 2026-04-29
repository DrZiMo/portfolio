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
  {
    id: 1,
    title: '3D Solar System Planets to Explore',
    des: 'Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.',
    img: ['/p1.svg'],
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
    link: '/ui.earth.com',
    github: '',
  },
  {
    id: 2,
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
      '/next.svg',
      '/tail.svg',
      '/ts.svg',
      'https://www.svgrepo.com/show/354401/stripe.svg',
      'https://www.svgrepo.com/show/452093/redux.svg',
      '/express-svgrepo-com.svg',
      'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg',
    ],
    link: 'https://giveflow-two.vercel.app/',
    github: 'https://github.com/DrZiMo/giveflow-nextjs',
  },
  {
    id: 3,
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
    iconLists: [
      '/re.svg',
      '/tail.svg',
      'https://www.svgrepo.com/show/349419/javascript.svg',
      'https://www.svgrepo.com/show/354362/socket.svg',
      '/vercel.svg',
    ],
    link: 'https://guess-bice.vercel.app/',
    github: 'https://github.com/DrZiMo/guess-character-game',
  },
  {
    id: 4,
    title: 'Animated Apple Iphone 3D Website',
    des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
    img: ['/p4.svg'],
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    link: '/ui.apple.com',
    github: 'asdlkasjdl',
  },
]

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
]

export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg',
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg',
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
]

export const workExperience = [
  {
    id: 1,
    title: 'Frontend Engineer Intern',
    desc: 'Contributed to the development of a web-based platform using React.js, focusing on building responsive, user-friendly interfaces and improving overall application performance.',
    features: [
      'Collaborated with designers to translate UI/UX wireframes into responsive and reusable components.',
      'Built interactive UI elements that improved user engagement and usability.',
      'Optimized rendering performance to reduce load times and improve responsiveness.',
      'Debugged and fixed UI inconsistencies across different browsers and devices.',
      'Refactored existing components to improve maintainability and code structure.',
      'Assisted in integrating frontend components with backend APIs.',
      'Followed best practices for clean, scalable, and reusable code.',
      'Participated in team discussions and contributed ideas for UI improvements.',
      'Tested features to ensure functionality and responsiveness across screen sizes.',
    ],
    date: 'June 2022 - August 2022',
  },
  {
    id: 2,
    title: 'Mobile App Dev - JSM Tech',
    desc: 'Developed a cross-platform mobile application using React Native, delivering a smooth and consistent user experience across iOS and Android.',
    features: [
      'Built core mobile app features with a focus on performance and usability.',
      'Implemented secure user authentication and session management.',
      'Integrated real-time data updates for dynamic content display.',
      'Designed intuitive navigation flows to improve user experience.',
      'Tested the application on both iOS and Android devices for consistency.',
      'Fixed bugs and performance issues reported during testing phases.',
      'Worked with APIs to fetch and display dynamic data efficiently.',
      'Improved app responsiveness and reduced lag during interactions.',
      'Collaborated with stakeholders to refine features and functionality.',
    ],
    date: 'September 2022 - November 2022',
  },
  {
    id: 3,
    title: 'Freelance App Dev Project',
    desc: 'Independently developed a mobile application for a client, managing the entire process from planning and design to development and deployment.',
    features: [
      'Gathered and analyzed client requirements to define project scope.',
      'Created wireframes and UI layouts aligned with client expectations.',
      'Built the full application from scratch using a scalable structure.',
      'Implemented key features based on client needs and feedback.',
      'Ensured cross-platform compatibility and consistent performance.',
      'Optimized the app for speed and smooth user interaction.',
      'Tested and debugged the application before deployment.',
      'Prepared the app for submission to app stores.',
      'Maintained communication with the client throughout the project lifecycle.',
    ],
    date: 'December 2022 - February 2023',
  },
  {
    id: 4,
    title: 'Lead Frontend Developer',
    desc: 'Led frontend development by building scalable and high-performance interfaces while ensuring code quality and team collaboration.',
    features: [
      'Developed and maintained core frontend features for the application.',
      'Collaborated with backend developers to integrate APIs efficiently.',
      'Improved application performance and optimized data handling.',
      'Led code reviews to maintain high standards and consistency.',
      'Mentored junior developers and supported their technical growth.',
      'Structured projects for scalability and maintainability.',
      'Identified and resolved performance bottlenecks in the UI.',
      'Ensured responsive design across all devices and screen sizes.',
      'Introduced best practices for clean and reusable code.',
    ],
    date: 'March 2023 - Present',
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
    link: '',
  },
]
