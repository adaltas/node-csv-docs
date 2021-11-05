---
title: IIFE Vanilla JavaScript in old browser environments
navtitle: Browser IIFE
description: The IIFE distribution targets browsers which don't support ECMAScript modules.
keywords: ['csv', 'parse', 'iife', 'javascript', 'vanilla', 'browser']
sort: 2.4
---

# Vanilla JavaScript (IIFE) for older browsers

The [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) distribution targets browsers which don't support ECMAScript modules.

The files are located inside the [`packages/csv-parse/dist/iife`](https://github.com/adaltas/node-csv/tree/master/packages/csv-parse/dist/iife) folder. Import them inside your project or use NPM to download the package and to reference them.

It is globally available in the page context with:

* Stream and callback API: `csv_parse.parse(/* arguments */);`
* Sync API: `csv_parse_sync.parse(/* arguments */);`

## Example

A working demo is available in the [`demo/browser`](https://github.com/adaltas/node-csv/tree/master/demo/browser) directory:

* [`./iife/parse.html`](https://github.com/adaltas/node-csv/tree/master/demo/browser/iife/parse.html)
* [`./iife/parse_sync.html`](https://github.com/adaltas/node-csv/tree/master/demo/browser/iife/parse_sync.html)

With Express, expose the files with:

```js
const app = express();
app.use('/lib/parse/',
  express.static(`node_modules/csv-parse/dist/iife/`));
app.listen(3000);
```

The HTML code looks like:

```html
<script src="/lib/parse/index.js"></script>
<script>
  csv_parse.parse(records, options, (err, data) => {
    console.info(data)
  });
</script>
```

If you wish to use the sync API, use:

```html
<script src="/lib/parse/sync.js"></script>
<script>
  const data = csv_parse_sync.parse(records, options);
</script>
```
