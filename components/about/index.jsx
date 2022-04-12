import Link from 'next/link'
import s from './styles.module.scss'
import { SiGithub, SiFrontendmentor, SiCodewars } from 'react-icons/si'
import { FiCodepen } from 'react-icons/fi'

export const AboutHero = () => {
  return (
    <header className={s.hero}>
      <h1>
        I<span>&apos;</span>m Yazdun
      </h1>
      <p>I&apos;m web developer, with a focus on React ecosystem</p>
      <div className={s.externals}>
        {links.map(link => {
          const { title, icon, url, key } = link
          return (
            <Link href={url} key={key}>
              <a target="_blank" title={title}>
                {icon}
              </a>
            </Link>
          )
        })}
      </div>
    </header>
  )
}

const links = [
  {
    title: 'Github',
    icon: <SiGithub />,
    url: 'https://github.com/Yazdun',
    key: 'jCxhLQPfDP',
  },
  {
    title: 'Frontend mentor',
    icon: <SiFrontendmentor />,
    url: 'https://www.frontendmentor.io/profile/Yazdun',
    key: 'HtEmnO7PGf',
  },
  {
    title: 'Codewars',
    icon: <SiCodewars />,
    url: 'https://www.codewars.com/users/Yazdun',
    key: 'GKgAPzYx2z',
  },
  {
    title: 'Codepen',
    icon: <FiCodepen />,
    url: 'https://codepen.io/yazdun',
    key: '5GBFE2umTa',
  },
]
