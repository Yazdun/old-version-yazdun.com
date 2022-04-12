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
      desc="You can contact me by filling this page's form"
      keywords="Yazdun, Yazdun Fathali, یزدان, یزدان فتحعلی, yazdun"
      url="about"
      image="https://res.cloudinary.com/dakts9ect/image/upload/v1649222587/blog-previews/contact_hak2x2.jpg"
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
  {
    title: 'Whatsapp',
    icon: <FaWhatsapp />,
    url: 'https://api.whatsapp.com/send/?phone=989201378001&text&app_absent=0',
    key: 'VNDRBDOxZ4',
  },
]
