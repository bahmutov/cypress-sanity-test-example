# cypress-sanity-test-example

The static landing page downloaded from [cruip.com](https://cruip.com/demos/solid/) via [40 Free HTML landing page templates](https://dev.to/davidepacilio/40-free-html-landing-page-templates-3gfp).

## The errors

I have introduced two errors into the page: a JavaScript reference error, and a 404 by changing a line in [public/index.html](./public/index.html)

```diff
- <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
+ <script src="https://unpkg.com/scrollreveal@1.0.0/dist/scrollreveal.min.js"></script>
```

![The landing page errors](./images/errors.png)
