import { Container } from 'elements'
import s from './styles.module.scss'
import cn from 'classnames'

export const Footer = ({ hideFooter }) => {
  const year = new Date().getFullYear()

  return (
    <footer className={cn(s.footer, hideFooter && s.hide)}>
      <p>{year} © all rights reserved</p>
    </footer>
  )
}
