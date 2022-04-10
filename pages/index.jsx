import { Hero, PostCard } from 'components'
import { Container, Layout } from 'elements'
import Image from 'next/image'
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
      <hr className="hr" />
      <Container noPadding>
        <h2>Latest on blog 🚀</h2>
        {allPostsData.map((post, index) => {
          return <PostCard post={post} key={index} />
        })}
        <Link href="/blog">
          <a className="link">➜ More articles</a>
        </Link>
      </Container>
      <hr className="hr" />
    </Layout>
  )
}
