import { Date } from 'elements'
import Link from 'next/link'
import React from 'react'
import readingTime from 'reading-time'
import s from './styles.module.scss'

export const PostCard = ({ post }) => {
  const { readingTime, description, date, title, id } = post

  return (
    <Link href={`/blog/${id}`}>
      <a className={s.card}>
        <article>
          <h2 className={s.title}>{title}</h2>
          <p>
            <Date dateString={date} /> - <span>{readingTime}</span>
          </p>
          <p className={s.desc}>{description}</p>
        </article>
      </a>
    </Link>
  )
}
