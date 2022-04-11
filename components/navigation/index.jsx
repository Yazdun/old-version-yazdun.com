import { ThemeSwitch } from 'components'
import { Container } from 'elements'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { links } from './links'
import s from './styles.module.scss'
import { HiMenu } from 'react-icons/hi'
import { CgClose } from 'react-icons/cg'
import { useOnClickOutside } from 'hooks'
import Animated from 'react-mount-animation'
import { mountAnimation } from './anim'
import cn from 'classnames'

export const Navigation = () => {
  return (
    <nav className={cn(s.nav)}>
      <Container sx={s.container}>
        <div className={s.desktopNav}>
          <Link href="/">
            <a className={s.logo}>
              Yazdun<span>.</span>
            </a>
          </Link>
          <List />
        </div>
        <Menu />
        <div className={s.desktopTheme}>
          <ThemeSwitch />
        </div>
      </Container>
    </nav>
  )
}
const List = () => {
  return (
    <ul className={s.list}>
      {links.map(link => {
        const { desktopTitle, desc, url, key } = link
        return (
          <li key={key}>
            <Link href={url}>
              <a title={desc}>{desktopTitle}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

const Menu = () => {
  const [show, setShow] = useState(false)
  const ref = useRef()

  useOnClickOutside(ref, () => setShow(false))

  return (
    <div ref={ref}>
      <button
        aria-label={`hamburger menu ${show ? 'opened' : 'closed'}`}
        className={s.cta}
        onClick={() => setShow(prev => !prev)}
      >
        {show ? <CgClose /> : <HiMenu />}
      </button>

      <Animated.ul
        mountAnim={mountAnimation}
        time={0.5}
        show={show}
        className={s.menuItems}
      >
        {links.map(link => {
          const { mobileTitle, icon, desc, url, key } = link
          return (
            <li key={key}>
              <Link href={url}>
                <a title={desc}>
                  {mobileTitle}
                  {icon}
                </a>
              </Link>
            </li>
          )
        })}
        <li className={s.theme}>
          Dark mode
          <ThemeSwitch />
        </li>
      </Animated.ul>
    </div>
  )
}
