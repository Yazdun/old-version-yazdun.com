import { ContactForm } from 'components'
import { Container, Layout } from 'elements'
import s from './styles.module.scss'
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaTwitter,
  FaDiscord,
} from 'react-icons/fa'
import Link from 'next/link'
import SpaceImg from 'public/space.svg'
import Image from 'next/image'

export default function Contact() {
  return (
    <Layout
      title="Yazdun | Contact"
      desc="Contact me via social medias or email form"
      url="contact"
      image="https://res.cloudinary.com/dakts9ect/image/upload/v1649943964/opengraph/contact_pixik0.jpg"
    >
      <Container>
        <div className={s.contact}>
          <header>
            <h1>
              Let<span>&apos;</span>s get in touch
            </h1>
            <p>Contact me through social medias or email form</p>
            <div className={s.illu}>
              <Image src={SpaceImg} alt="Yazdun" />
            </div>
          </header>
          <div className={s.form}>
            <ContactForm />
            <hr className="hr" />
            <SocialMedia />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

const SocialMedia = () => {
  return (
    <div className={s.socials}>
      <p className="sr-only">follow me on social media</p>
      {socials.map(social => {
        const { title, icon, url, key } = social
        return (
          <Link href={url} key={key}>
            <a target="_blank" className={s.link} title={title}>
              {icon}
            </a>
          </Link>
        )
      })}
    </div>
  )
}

const socials = [
  {
    title: 'Twitter',
    icon: <FaTwitter />,
    url: 'https://twitter.com/Yazdun',
    key: 'us0s7OWjyy',
  },
  {
    title: 'Discord',
    icon: <FaDiscord />,
    url: 'https://discord.com/users/763077536816693299',
    key: 'f7ynVAWFs5',
  },
  {
    title: 'Telegram',
    icon: <FaTelegramPlane />,
    url: 'https://t.me/yazdunx',
    key: 'pEHLxVO4rE',
  },
]
