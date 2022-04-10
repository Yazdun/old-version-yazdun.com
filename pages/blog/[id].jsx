import { CodeBlock } from 'components'
import { Container, Date, Layout } from 'elements'
import { getAllPostIds, getPostData } from 'lib/posts'
import ReactMarkdown from 'react-markdown'
import readingTime from 'reading-time'
import s from './styles.module.scss'

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
            <ReactMarkdown components={CodeBlock}>{markdown}</ReactMarkdown>
          </div>
        </article>
      </Container>
    </Layout>
  )
}
