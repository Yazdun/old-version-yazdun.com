import { Hero, PostCard, Profile } from 'components'
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
    <Layout
      title="Yazdun | Homepage"
      desc="Fullstack web developer, with a focus on React ecosystem"
      url="/"
      image="https://res.cloudinary.com/dakts9ect/image/upload/v1649943963/opengraph/home_ba1git.jpg"
    >
      <Hero />
      <hr className="hr" />
      <Container noPadding>
        <h2 style={{ fontSize: '1.5rem' }}>Latest on blog 🚀</h2>
        {allPostsData.slice(0, 3).map((post, index) => {
          return <PostCard post={post} key={index} />
        })}
        <Link href="/blog">
          <a className="link">➜ More articles</a>
        </Link>
      </Container>
      <hr className="hr" />
      <Container noPadding>
        <Profile />
      </Container>
    </Layout>
  )
}
