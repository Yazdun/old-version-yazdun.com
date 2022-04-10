import { CodeBlock } from 'components'
import { Container, Layout } from 'elements'
import { getAllPostIds, getPostData } from 'lib/posts'
import ReactMarkdown from 'react-markdown'

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
          <h1>{title}</h1>
          <ReactMarkdown components={CodeBlock}>{markdown}</ReactMarkdown>
        </article>
      </Container>
    </Layout>
  )
}
