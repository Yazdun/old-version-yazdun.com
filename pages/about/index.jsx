import { Layout } from 'elements'
import { AboutHero, Certificates, Projects, Skills } from 'components'
import React from 'react'

export default function About() {
  return (
    <Layout
      title="Yazdun | About"
      desc="I'm full stack web developer, Read more about me and view my projects"
      url="about"
      image="https://res.cloudinary.com/dakts9ect/image/upload/v1649943963/opengraph/about_crnuyx.jpg"
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
