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
        {allPostsData.map((post, index) => {
          return <PostCard post={post} key={index} />
        })}
      </Container>
    </Layout>
  )
}
