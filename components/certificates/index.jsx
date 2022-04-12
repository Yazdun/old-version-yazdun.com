import { Container } from 'elements'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { data } from './certifactes'
import s from './styles.module.scss'

export const Certificates = () => {
  return (
    <Container noPadding>
      <h2 className={s.title}>🎖️ My Certificates</h2>
      <div className={s.grid}>
        {data.map((cer, index) => {
          const { title, url, img } = cer
          console.log(img)
          return (
            <div className={s.cer} key={index}>
              <Image
                className={s.image}
                src={img}
                alt={title}
                placeholder="blur"
              />
              <div className={s.info}>
                <p className={s.rate}>PERFECT</p>
                <Link href={url}>
                  <a target="_blank">{title}</a>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </Container>
  )
}
