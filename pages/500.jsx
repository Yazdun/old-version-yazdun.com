import { Container, Layout } from 'elements'
import { FaServer } from 'react-icons/fa'
import s from './styles.module.scss'

export default function Custom500() {
  return (
    <Layout title="Yazdun | Error" desc="Error ! something went wrong">
      <Container sx={s.error}>
        <FaServer style={{ fontSize: '6rem' }} />
        <h1>Oops !</h1>
        <p>
          Something went wrong ! Looks like this page doesn&apos;t exist or has
          been deleted
        </p>
      </Container>
    </Layout>
  )
}
