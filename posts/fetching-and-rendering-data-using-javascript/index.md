---
title: 'Javascript Fetch API'
image: 'https://images.pexels.com/photos/845406/pexels-photo-845406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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

## Starting to code !
