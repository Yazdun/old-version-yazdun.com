import { Container } from 'elements'
import { data } from './projects'
import s from './styles.module.scss'
import { ImCheckmark } from 'react-icons/im'
import Link from 'next/link'
import { AiOutlineGithub } from 'react-icons/ai'
import { BiWorld } from 'react-icons/bi'
import cn from 'classnames'
import { SiFrontendmentor } from 'react-icons/si'

export const Projects = () => {
  return (
    <Container sx={s.container}>
      <h2 className={s.title}>📍My Projects</h2>
      <div className={s.grid}>
        {data.map(project => {
          const { title, desc, features, github, live, icon, key } = project
          return (
            <div className={s.project} key={key}>
              <div className={s.info}>
                <p className={cn(s.heading, s.center)}>
                  {icon}
                  {title}
                </p>

                <p className={s.desc}>{desc}</p>
              </div>

              <div className={s.features}>
                <p className={s.heading}>Features</p>

                <ul className={s.items}>
                  {features.map((feature, index) => {
                    return (
                      <li key={index}>
                        <ImCheckmark />
                        {feature}
                      </li>
                    )
                  })}
                </ul>
                <div className={s.links}>
                  <Link href={github}>
                    <a target="_blank" className="link">
                      <AiOutlineGithub />
                      Github
                    </a>
                  </Link>
                  <Link href={live}>
                    <a target="_blank" className="link">
                      <BiWorld />
                      Live
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <Link href="https://www.frontendmentor.io/profile/Yazdun">
        <a target="_blank" className={s.link}>
          <SiFrontendmentor />
          Over +20 more projects
        </a>
      </Link>
    </Container>
  )
}
