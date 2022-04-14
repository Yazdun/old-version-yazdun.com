import { DarkCodeBlock, LightCodeBlock, Profile } from 'components'
import { Container, Date, Layout } from 'elements'
import { getAllPostIds, getPostData } from 'lib/posts'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import readingTime from 'reading-time'
import s from './styles.module.scss'
import { BsTwitter, BsGithub } from 'react-icons/bs'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export default function Post({ postData }) {
  const { title, description, image, markdown, id, date } = postData
  const { theme } = useTheme()
  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  return (
    <Layout title={title} desc={description} image={image} url={id}>
      <Container>
        <article>
          <div className={s.info}>
            <h1>{title}</h1>
            <p>
              <Date dateString={date} /> ●
              <span> {readingTime(markdown).text}</span>
            </p>
          </div>
          <div className={s.markdown}>
            <ReactMarkdown components={isDark ? DarkCodeBlock : LightCodeBlock}>
              {markdown}
            </ReactMarkdown>
          </div>
        </article>
        <hr className="hr" />
        <div className={s.socials}>
          <Link
            href={`https://twitter.com/search?q=https%3A%2F%2Fyazdun.com%2Fblog%2F${id}&src=typed_query`}
          >
            <a className="link" target="_blank">
              <BsTwitter />
              Discuss on Twitter
            </a>
          </Link>
          <Link
            href={`https://github.com/Yazdun/yazdun.com/tree/main/posts/${id}`}
          >
            <a className="link" target="_blank">
              <BsGithub />
              Edit on Github
            </a>
          </Link>
        </div>
      </Container>
      <hr className="hr" />
      <Container noPadding>
        <Profile />
      </Container>
    </Layout>
  )
}
