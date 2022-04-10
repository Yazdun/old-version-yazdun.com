import s from './styles.module.scss'
// import ProfileImg from 'public/profile.jpg'
import Image from 'next/image'
import Link from 'next/link'

export const Profile = ({ title }) => {
  return (
    <div className={s.profile}>
      {/* <div className={s.image}>
        <Image src={ProfileImg} alt="Yazdun" placeholder="blur" />
      </div> */}
      <div className={s.text}>
        <p className={s.title}>{title ? title : 'About me'}</p>
        <p className={s.info}>
          I build high quality and accessible web applications using Javascript.
          I&apos;d love to collaborate with other people in tech industry, so
          <Link href="/contact">
            <a className="link"> contact me</a>
          </Link>{' '}
          if you need my help !
        </p>
        <div className={s.link}>
          <Link href="/about">
            <a className="link">➜ Read more about me</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
