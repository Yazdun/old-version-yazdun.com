import { Hero } from 'components'
import { Container, Layout } from 'elements'
import Link from 'next/link'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout title="Yazdun | Homepage" url="/">
      <Hero />
      <Container>
        {allPostsData.map((post, index) => {
          const { title, id } = post
          return (
            <Link href={`/blog/${id}`} key={index}>
              <a style={{ display: 'block' }}>{title}</a>
            </Link>
          )
        })}
      </Container>
    </Layout>
  )
}
