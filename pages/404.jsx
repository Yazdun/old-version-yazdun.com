import { Container, Layout } from 'elements'
import { VscDebugDisconnect } from 'react-icons/vsc'
import s from './styles.module.scss'
export default function NotFound() {
  return (
    <Layout title="Yazdun | 404" desc="Oops ! This pages does not exist">
      <Container sx={s.error}>
        <VscDebugDisconnect style={{ fontSize: '6rem' }} />
        <h1>404-NOT FOUND</h1>
        <p>This page either does not exist or has been deleted </p>
      </Container>
    </Layout>
  )
}
