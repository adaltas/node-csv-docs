---
title: IIFE Vanilla JavaScript in old browser environments
navtitle: Browser IIFE
description: The IIFE distribution targets browsers which don't support ECMAScript modules.
keywords: ['stream', 'transform', 'iife', 'javascript', 'vanilla', 'browser']
sort: 2.4
---

# Vanilla JavaScript (IIFE) for older browsers

The [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) distribution targets browsers which don't support ECMAScript modules.

The files are located inside the [`packages/stream-transform/dist/iife`](https://github.com/adaltas/node-csv/tree/master/packages/stream-transform/dist/iife) folder. Import them inside your project or use NPM to download the package and to reference them.

It is globally available in the page context with:

* Stream and callback API: `stream_transform.transform(/* arguments */);`
* Sync API: `stream_transform_sync.transform(/* arguments */);`

## Example

A working demo is available in the [`demo/browser`](https://github.com/adaltas/node-csv/tree/master/demo/browser) directory:

* [`./iife/transform.html`](https://github.com/adaltas/node-csv/tree/master/demo/browser/iife/transform.html)
* [`./iife/transform_sync.html`](https://github.com/adaltas/node-csv/tree/master/demo/browser/iife/transform_sync.html)

With Express, expose the files with:

```js
const app = express();
app.use('/lib/transform/',
  express.static(`node_modules/stream-transform/dist/iife/`));
app.listen(3000);
```

The HTML code looks like:

```html
<script src="/lib/transform/index.js"></script>
<script>
  stream_transform.transform(input, handler, options, (err, data) => {
    console.info(data)
  });
</script>
```

If you wish to use the sync API, use:

```html
<script src="/lib/transform/sync.js"></script>
<script>
  const data = stream_transform_sync.transform(input, handler, options);
</script>
```
