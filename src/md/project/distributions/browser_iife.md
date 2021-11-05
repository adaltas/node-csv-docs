---
title: IIFE Vanilla JavaScript in old browser environments
navtitle: Browser IIFE
description: The IIFE distribution targets browsers which don't support ECMAScript modules.
keywords: ['csv', 'iife', 'browser', 'vanilla javascript', 'generate', 'parse', 'transform', 'stringify']
sort: 4.4
---

# Vanilla JavaScript (IIFE) for older browsers

The [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) distribution targets browsers which don't support ECMAScript modules.

The files are located inside the [`packages/csv/dist/iife`](https://github.com/adaltas/node-csv/tree/master/packages/csv/dist/iife) folder. Import them inside your project or use NPM to download the package and to reference them.

It is globally available in the page context with:

* Stream and callback API: `stream_transform.transform(/* arguments */);`
* Sync API: `stream_transform_sync.transform(/* arguments */);`

## Example

A working demo is available in the [`demo/browser`](https://github.com/adaltas/node-csv/tree/master/demo/browser) directory.

* [`./iife/csv.html`](https://github.com/adaltas/node-csv/tree/master/demo/browser/iife/csv.html)
* [`./iife/csv_sync.html`](https://github.com/adaltas/node-csv/tree/master/demo/browser/iife/csv_sync.html)

With Express, expose the files with:

```js
const app = express();
app.use('/lib/csv/',
  express.static(`node_modules/csv/dist/iife/`));
app.listen(3000);
```

The HTML code looks like:

```html
<script src="/lib/csv/index.js"></script>
<script>
  csv
  // Generate 20 records
  .generate(/* arguments */)
  // Transform CSV data into records
  .pipe(csv.parse(/* arguments */))
  // Transform each value into uppercase
  .pipe(csv.transform(/* arguments */))
  // Convert objects into a stream
  .pipe(csv.stringify(/* arguments */))
  .pipe(/* consume the output */)
</script>
```

If you wish to use the sync API, use:

```html
<script src="/lib/csv/sync.js"></script>
<script>
  const input = csv_sync.generate(/* arguments */);
  const rawRecords = csv_sync.parse(input, /* arguments */);
  const refinedRecords = csv_sync.transform(rawRecords, /* arguments */);
  const output = csv_sync.stringify(refinedRecords, /* arguments */);
</script>
```
