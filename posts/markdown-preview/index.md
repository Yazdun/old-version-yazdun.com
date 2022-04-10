---
title: 'Markdown snippets preview'
image: 'https://images.pexels.com/photos/845406/pexels-photo-845406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
description: 'Checking markdown renderer'
date: '2022-01-01'
---

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
Ipsum has been the industry's standard dummy text ever since the 1500s, when an
unknown printer took a galley of type and scrambled it to make a type specimen
book. It has survived not only five centuries, but also the leap into electronic
typesetting, remaining essentially unchanged. It was popularised in the 1960s
with the release of Letraset sheets containing Lorem Ipsum passages, and more
recently with desktop publishing software like Aldus PageMaker including
versions of Lorem Ipsum

- item one
- item two
- item three

and now im going to add a blockquote

> In HTML programming, a block-level element is any element that starts a new
> line (e.g., paragraph) and uses the full width of the page or container. A
> block-level element can take up one line or multiple lines and has a line
> break before and after the element.

It is a long established fact that a reader will be distracted by the readable
content of a page when looking at its layout. The point of using Lorem Ipsum is
that it has a more-or-less normal distribution of letters, as `opposed` to using
'Content here, content here', making it look like readable English. Many desktop
publishing packages and web `page` editors now use Lorem Ipsum as their default
model text, and a search for 'lorem ipsum' will uncover many web sites still in
their infancy. Various versions have evolved over the years, sometimes by
accident, sometimes on purpose (injected humour and the like).

```jsx
export const Footer = ({ hideFooter }) => {
  const year = new Date().getFullYear()

  return (
    <footer className={cn(s.footer, hideFooter && s.hide)}>
      <p>{year} © all rights reserved</p>
    </footer>
  )
}
```

now this a `map()` and this a good old **bold** and here is a
[link](https://yazdun.com)
