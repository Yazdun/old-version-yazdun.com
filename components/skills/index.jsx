import s from './styles.module.scss'
import { links } from './links'
import Link from 'next/link'
import { useTheme } from 'next-themes'

export const Skills = () => {
  const { theme, setTheme } = useTheme()
  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)

  return (
    <div className={s.skills}>
      <h2>🐲 My Skills</h2>
      <div className={s.skillsGrid}>
        {links.map(link => {
          const { title, icon, url, key, darkfg, lightfg } = link
          return (
            <Link href={url} key={key}>
              <a
                target="_blank"
                title={title}
                className={s.skillCard}
                style={{ color: isDark ? darkfg : lightfg }}
              >
                {icon}
                {title}
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
