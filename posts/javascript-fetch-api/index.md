---
title: 'Javascript Fetch API'
image: 'https://res.cloudinary.com/dakts9ect/image/upload/v1649943966/opengraph/javascript-fetch-api_dtyedq.png'
description: 'Learn Javascript Fetch API by building a simple application'
date: '2022-04-13'
---

Regardless of type of application you are building, You'll probably come across
a situation which you need to fetch data from a remote API. Luckily, Javascript
has a built-in method called `fetch()` which makes handling API requests pretty
easy.

In this tutorial we are going to build a very simple app to learn basics of
`fetch()` , You can find the [source code on codepen](https://codepen.io/) . Now
let's take a brief look at Fetch API before building our app.

---

## Intro to Fetch API

Fetch API provides a global `fetch()` method that provides an easy way to fetch
resources asynchronously across the network. Fetch API uses **Promises** which
avoids us from creating callback hell, So you need to have a basic knowledge
about promises before jumping into Fetch API, here is a quick explaination :

> The Promise object represents the eventual completion (or failure) of an
> asynchronous operation and its resulting value. ~
> [developer mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Now that we have a basic knowledge about promises, let's take a step further and
look at a simple `fetch()` example :

```javascript
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))
```

This is the simplest usage of creating an API request using `fetch()`, Let's
examine what's going on here step by step :

✅ **STEP ONE :** `fetch()` method, takes an arguement which is the - the path
to the resource you want to fetch - and it returns a promise that resolves with
a `response` object.

✅ **STEP TWO :** Following step one, we have access to the returned promise,
but the returned promise is not an JSON response body, so we use `json()` method
to exract the JSON body content from `response` object

✅ **STEP THREE :** then, we have access to exracted JSON content and we can
display it on console, or anywhere else. at the end we add a catch block, so if
our request fails, our app won't crash and we can display an error to our users
.

Now we have acquired enough info to make our first real API call and create a
cool app with `fetch()`

---

## Let's code

Now we are going to build our app, we are going to change our app's background
color by clicking a button. This color will be fetched from
[Random Data API](https://random-data-api.com/documentation), and then we will
apply fetched color to our element using Javascript.

Now open your text editor and create a file called `index.html` and copy paste
the following code

```html
<!-- index.html -->
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./main.css" />
    <title>Random Color</title>
  </head>
  <body>
    <main id="main">
      <button id="btn">click me !</button>
    </main>
    <script src="./script.js"></script>
  </body>
</html>
```

Now let's spice things up and add a little bit of CSS to make our project more
presentable. So create a file called `main.css` and copy paste the following
code

```css
/* main.css */
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

main {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

button {
  font-size: 2rem;
  border: none;
  background-color: black;
  color: white;
  padding: 1rem;
  border-radius: 50px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 100%;
  max-width: 20rem;
  transition: 0.3s;
  font-family: monospace;
}

button:hover {
  transform: scale(1.1);
}
```

Now if you open `index.html` in your browser, you must see the following page
![Project preview](https://res.cloudinary.com/dakts9ect/image/upload/v1649852436/blog-images/img_ujo1qa.png 'Project preview')

Now it's time to jump into Javascript and make our first real API call ! Create
a file called `script.js` in your project directory. Before doing anything else,
Let's specify the endpoint which we are going to fetch data from it, the element
we are going to change it's background color and the button which will execute
our fetch request.

```javascript
const endpoint = 'https://random-data-api.com/api/color/random_color'
const main = document.getElementById('main')
const btn = document.getElementById('btn')
```

This endpoint will return us an JSON object, This object contains some random
colors which we are going to use later on. Now if you open this endpoint url in
your browser, You can see the JSON object on your screen which will look
something similar to the following JSON

```json
{
  "id": 329,
  "uid": "5bb15d5b-f31b-48fe-9b20-0b6aa09287dc",
  "hex_value": "#88c8b0",
  "color_name": "violet",
  "hsl_value": [90, 0.77, 0.12],
  "hsla_value": [121, 1, 0.95, 0.2]
}
```

As you can see, we have an object with different random colors. We are going to
use only `hex_value` for our app and we don't need the rest.

Now let's create a async arrow function which will handle the API call, add the
following code to your `script.js`

```javascript
const execute = async () =>
  fetch(endpoint)
    .then(res => res.json())
    .then(json => {
      // change the main element background color
      main.style.background = json.hex_value
    })
```

As you can see, we've fetched the data from the endpoint, exracted JSON object
with `json()` method, and then changed the `main` element background color based
on the returned JSON promise. But now if you click the button, nothing will
happen ! So we have to add an event listener to our button so on each click, we
fetch new color from our endpoint and apply it to `main` element. Add the
following code to you `script.js`

```javascript
btn.addEventListener('click', execute)
```

Now your final `script.js` will look like this 👇

```javascript
const endpoint = 'https://random-data-api.com/api/color/random_color'
const main = document.getElementById('main')
const btn = document.getElementById('btn')

const execute = async () =>
  fetch(endpoint)
    .then(res => res.json())
    .then(json => {
      // change the main element background color
      main.style.background = json.hex_value
    })

btn.addEventListener('click', execute)
```

Thats it 🎉 Now if you open up your `index.html` in your browser, You can change
the background by clicking the button like this 👇

![Alt Text](https://res.cloudinary.com/dakts9ect/image/upload/v1649854595/blog-images/ezgif-2-e6106d5fa1_ughgzu.gif)

---

## Conclusion

By reading this article, now you are able to fetch data from a remote API using
Javascript's Fetch API. Here is the list of some free good fake APIs which you
can play around with and create your own cool apps.

- [JSON Placeholder](https://jsonplaceholder.typicode.com/)
- [Advice Slip JSON API](https://api.adviceslip.com/)
- [Reqres](https://reqres.in/)
- [Random Data API](https://random-data-api.com/)

Also if you got stuck anywhere on this tutorial, You can find the
[final source code Codepen]().
