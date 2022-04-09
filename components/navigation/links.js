import { BiMeteor } from 'react-icons/bi'
import { BsFillFilePersonFill, BsChatSquareText } from 'react-icons/bs'

export const links = [
  {
    desktopTitle: 'blog',
    icon: <BiMeteor />,
    mobileTitle: 'My blog',
    desc: "blog's posts",
    url: '/blog',
    key: 'F5ZEsMxLeY',
  },
  {
    desktopTitle: 'about',
    mobileTitle: 'About me',
    icon: <BsFillFilePersonFill />,
    desc: 'about me',
    url: '/about',
    key: 'tIY2KJZ3db',
  },
  {
    desktopTitle: 'contact',
    mobileTitle: 'Contact me',
    icon: <BsChatSquareText />,
    desc: 'contact info',
    url: '/contact',
    key: 'h3uD6VsrfQ',
  },
]
