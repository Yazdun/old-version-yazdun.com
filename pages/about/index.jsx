import { Layout } from 'elements'
import { AboutHero, Certificates, Projects, Skills } from 'components'
import React from 'react'

export default function About() {
  return (
    <Layout
      title="Yazdun | About"
      desc="I'm full stack web developer, You can read about me and view my projects on this page"
      url="about"
    >
      <AboutHero />
      <hr className="hr gap" />
      <Projects />
      <hr className="hr gap" />
      <Skills />
      <hr className="hr gap" />
      <Certificates />
    </Layout>
  )
}
