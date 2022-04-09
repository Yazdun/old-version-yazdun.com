import { Footer, Navigation } from 'components'
import Head from 'next/head'
import s from './styles.module.scss'

export const Layout = ({ children, title, desc, keywords, image, url }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={desc} />
        <meta name="keywords" content={keywords} />
        <meta name="image" content={image} />
        <meta property="og:url" content={`https://yazdun.com/${url}`} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta property="og:description" content={desc} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@yazdun" />
        <meta name="twitter:site" content="@yazdun" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:alt" content="Yazdun" />
        <title>{title}</title>
      </Head>
      <a className={s.skip} href="#main">
        Skip to main content
      </a>
      <Navigation />
      <main id="main">{children}</main>
      <Footer />
    </>
  )
}
