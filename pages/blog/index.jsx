import { PostCard } from 'components'
import { Container, Layout } from 'elements'
import { getSortedPostsData } from 'lib/posts'
import s from './styles.module.scss'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Blog({ allPostsData }) {
  return (
    <Layout
      title="Yazdun | Blog"
      desc="Read interesting articles about web development"
      url="blog"
      image="https://res.cloudinary.com/dakts9ect/image/upload/v1649943963/opengraph/blog_nyfd7o.jpg"
    >
      <Container sx={s.container}>
        <header className={s.header}>
          <h1 className={s.title}>
            Blog <span>.</span>
          </h1>
          <p className={s.desc}>Articles about web development</p>
        </header>
      </Container>

      <Container>
        {allPostsData.map((post, index) => {
          return <PostCard post={post} key={index} />
        })}
      </Container>
    </Layout>
  )
}
