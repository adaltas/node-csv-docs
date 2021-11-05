---
title: IIFE Vanilla JavaScript in old browser environments
navtitle: Browser IIFE
description: The IIFE distribution targets browsers which don't support ECMAScript modules.
keywords: ['csv', 'stringify', 'iife', 'javascript', 'vanilla', 'browser']
sort: 2.4
---

# Vanilla JavaScript (IIFE) for older browsers

The [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) distribution targets browsers which don't support ECMAScript modules.

The files are located inside the [`packages/csv-stringify/dist/iife`](https://github.com/adaltas/node-csv/tree/master/packages/csv-stringify/dist/iife) folder. Import them inside your project or use NPM to download the package and to reference them.

It is globally available in the page context with:

* Stream and callback API: `csv_stringify.stringify(/* arguments */);`
* Sync API: `csv_stringify_sync.stringify(/* arguments */);`

## Example

A working demo is available in the [`demo/browser`](https://github.com/adaltas/node-csv/tree/master/demo/browser) directory:

* [`./iife/stringify.html`](https://github.com/adaltas/node-csv/tree/master/demo/browser/iife/stringify.html)
* [`./iife/stringify_sync.html`](https://github.com/adaltas/node-csv/tree/master/demo/browser/iife/stringify_sync.html)

With Express, expose the files with:

```js
const app = express();
app.use('/lib/stringify/',
  express.static(`node_modules/csv-stringify/dist/iife/`));
app.listen(3000);
```

The HTML code looks like:

```html
<script src="/lib/stringify/index.js"></script>
<script>
  csv_stringify.stringify(records, options, (err, data) => {
    console.info(data)
  });
</script>
```

If you wish to use the sync API, use:

```html
<script src="/lib/stringify/sync.js"></script>
<script>
  const data = csv_stringify_sync.stringify(records, options);
</script>
```
