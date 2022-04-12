import { FaNodeJs, FaReact } from 'react-icons/fa'

export const data = [
  {
    title: 'NOVELS APP',
    desc: 'Frontend application built with React and SCSS',
    features: [
      'User authentication',
      'Review and rating system',
      'User dashboard',
      'Admin panel',
      'Novel suggestions',
    ],
    github: 'https://github.com/Yazdun/react-novels-public',
    live: 'https://react-novels-public.netlify.app/',
    icon: <FaReact />,
    key: 'dmcGVB8XD1',
  },
  {
    title: 'NOVELS RESTful API',
    desc: 'RESTful API built with Node, Express & MongoDB',
    features: [
      'JWT user authentication',
      'Review submission',
      'Rating system',
      'Role-based routes',
      'Custom search controller',
    ],
    github: 'https://github.com/Yazdun/nodejs-novels',
    live: 'https://nodejs-novels.herokuapp.com/',
    icon: <FaNodeJs />,
    key: 'MdKbTVEpMQ',
  },
]
