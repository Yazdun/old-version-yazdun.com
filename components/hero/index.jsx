import s from './styles.module.scss'
import { SiReact, SiExpress, SiNodedotjs, SiNextdotjs } from 'react-icons/si'
import Link from 'next/link'
import cn from 'classnames'

export const Hero = () => {
  return (
    <div className={s.hero}>
      <h1>Fullstack Web Developer</h1>

      <div className={s.skills}>
        <p className="sr-only">
          specialized in react.js, next.js, node.js, express.js
        </p>
        <SiReact className={s.react} />
        <SiNextdotjs className={s.next} />
        <SiNodedotjs className={s.node} />
        <SiExpress className={s.express} />
      </div>
      <div className={s.buttons}>
        <Link href="/about">
          <a className={cn(s.btn)}>About me</a>
        </Link>
        <Link href="/blog">
          <a className={cn(s.btn)}>Read the blog</a>
        </Link>
      </div>
    </div>
  )
}
