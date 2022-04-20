---
title: 'On scroll animations with react framer motion'
image: 'https://res.cloudinary.com/dakts9ect/image/upload/v1650369798/opengraph/post_pas90c.png'
description:
  'Add on scroll animations to your react elements with 3 lines of code'
date: '2022-04-19'
---

Lately I was working on
[rest countries api](https://yazdun-rest-countries.netlify.app/) and also
playing around with [react framer motion](https://www.framer.com/motion/), Then
I found out the most awesome thing ! with framer motions, You can literally add
on scroll animation to your elements by 3 lines of codes 😲

I mean, You can achieve the same thing with Vanilla js too, but it requires some
configuration and add some unnecessary complexity to your codebase which becomes
pain in the neck over some time. In case you don't like framer motion, You can
checkout my
[Clipboard landing page](https://www.frontendmentor.io/solutions/clipboard-landing-page-9u2GHtx8-)
solution which features on scroll animation with Vanilla js.

---

## Let's get to code

Let's do this ! First I'm gonna explain the project overally, keep in my mind
that this approach can be applied to any project you have and It's not limited
to what we are going to talk about here.

So, I was building
[REST Countries API with color theme switcher](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca/hub/rest-countries-api-with-color-theme-switcher-BymkBdK49)
which is an advanced frontend mentor challenge, and I decided to use
[react framer motion](https://www.framer.com/motion/) to spice things up a
little bit. I fetched countries using
[restcountries API](https://restcountries.com/) and looped through them, and for
each country I returned a `Card` component ( which we will add on scroll
animation to it later on ). so initially, this is how my `Card` component looked
like 👇

```jsx
import Link from 'next/link'
import s from './styles.module.scss'

export const Card = ({ country }) => {
  const { name, population, region, capital, flags, alpha3Code } = country
  return (
    <div className={s.card}>
      <Link href={`/country/${alpha3Code}`}>
        <a>
          <img className={s.img} src={flags.png} alt={name} />
          <div className={s.text}>
            <h2 className={s.name}>{name}</h2>
            <ul className={s.list}>
              <li>
                Population : <span>{population.toLocaleString('en-US')}</span>
              </li>
              <li>
                Region : <span>{region}</span>
              </li>
              <li>
                capital : <span>{capital}</span>
              </li>
            </ul>
          </div>
        </a>
      </Link>
    </div>
  )
}
```

This is a really simple component, it receives a country as a prop and display
it's info, and I used scss modules for styling. and this how my homepage looked
like using initial `Card` component 👇

![Project preview](https://res.cloudinary.com/dakts9ect/image/upload/v1650367447/blog-images/raw_vgq1wm.gif 'Project preview')

This looks really straight forward, and honestly there is nothing wrong without
any animations here ! But animations brings more life to our applications and
make them feel more interactive. So let's install framer motion by running the
following command

```bash
npm i framer-motion
```

after package is installed, refactor the `Card` component and add scroll
animation to it 👇

```jsx
import Link from 'next/link'
import s from './styles.module.scss'
import { motion } from 'framer-motion'

export const Card = ({ country }) => {
  const { name, population, region, capital, flags, alpha3Code } = country
  return (
    <motion.div
      className={s.card}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <Link href={`/country/${alpha3Code}`}>
        <a>
          <img className={s.img} src={flags.png} alt={name} />
          <div className={s.text}>
            <h2 className={s.name}>{name}</h2>
            <ul className={s.list}>
              <li>
                Population : <span>{population.toLocaleString('en-US')}</span>
              </li>
              <li>
                Region : <span>{region}</span>
              </li>
              <li>
                capital : <span>{capital}</span>
              </li>
            </ul>
          </div>
        </a>
      </Link>
    </motion.div>
  )
}
```

As you can see, there is not much changes here and we only imported `motion`,
and added 2 more lines of codes to our Card's `div`, and boom ! let's checkout
our project in the browser 👇

![Project preview](https://res.cloudinary.com/dakts9ect/image/upload/v1650367466/blog-images/animated_qx0tc3.gif 'Project preview')

Much better ! as you can see, all the `Card`s elements have `opacity : 0` as
initial value, as soon as they get inside the viewport, their `opacity` becomes
1, and framer motion handles all the complexity for us ! And we are not even
limited to that and we can add more styles, for example we can add `scale` too
👇

```jsx
import Link from 'next/link'
import s from './styles.module.scss'
import { motion } from 'framer-motion'

export const Card = ({ country }) => {
  const { name, population, region, capital, flags, alpha3Code } = country
  return (
    <motion.div
      className={s.card}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
    >
      <Link href={`/country/${alpha3Code}`}>
        <a>
          <img className={s.img} src={flags.png} alt={name} />
          <div className={s.text}>
            <h2 className={s.name}>{name}</h2>
            <ul className={s.list}>
              <li>
                Population : <span>{population.toLocaleString('en-US')}</span>
              </li>
              <li>
                Region : <span>{region}</span>
              </li>
              <li>
                capital : <span>{capital}</span>
              </li>
            </ul>
          </div>
        </a>
      </Link>
    </motion.div>
  )
}
```

and the result will be 👇

![Project preview](https://res.cloudinary.com/dakts9ect/image/upload/v1650367410/blog-images/scale_sc5p03.gif 'Project preview')

Now you can do whatever you want and create your own unique and cool animations
with framer motion. You can also find the
[source code here](https://github.com/Yazdun/frontend-mentor/tree/rest-countries-api-with-color-theme-switcher)
🔥
