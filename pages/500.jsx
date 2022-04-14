import { Container, Layout } from 'elements'
import { FaServer } from 'react-icons/fa'
import s from './styles.module.scss'

export default function Custom500() {
  return (
    <Layout title="Yazdun | 404" desc="500 ! something wrong with our servers">
      <Container sx={s.error}>
        <FaServer style={{ fontSize: '6rem' }} />
        <h1>500-OUR FAULT</h1>
        <p>Something wrong with our servers, we are looking into it </p>
      </Container>
    </Layout>
  )
}
