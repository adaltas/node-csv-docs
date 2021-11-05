---
title: ECMAScript modules browser environments
navtitle: Browser ESM
description: The ESM distribution target the latest browsers which support ECMAScript modules introduced by ES6.
keywords: ['csv', 'stringify', 'esm', 'browser', 'ECMAScript', 'modules']
sort: 2.3
---

# ECMAScript modules (ESM) for newer browsers

The ESM distribution target the latest browsers with support for [ECMAScript modules introduced by ES6](https://caniuse.com/es6-module) introduced by ES6. Compared with the [Node.js version](/csv/distributions/nodejs_esm/), this distribution bundles polyfills to run outside of the Node.js environment.

The files are located inside the [`packages/csv-stringify/dist/esm`](https://github.com/adaltas/node-csv/tree/master/packages/csv-stringify/dist/esm) folder. Import them inside your project or use NPM to download the package and to reference them.

## Integration

ESM code is imported from a script tag with the `module` type:

```html
<script type="module">
// Import your modules and insert your code
</script>
```

Use the following import directives:

```js
// For the stream and callback APIs
import {stringify} from '/lib/stringify/index.js'
// Or for the sync API
import {stringify} from '/lib/stringify/sync.js'
```

## Example

A working demo is available in the project [`demo/browser`](https://github.com/adaltas/node-csv/tree/master/demo/browser) directory.

* [`./esm/stringify.html`](https://github.com/adaltas/node-csv/tree/master/demo/browser/esm/stringify.html)
* [`./esm/stringify_sync.html`](https://github.com/adaltas/node-csv/tree/master/demo/browser/esm/stringify_sync.html)

With Express, expose the files with:

```
const app = express();
app.use('/lib/stringify/',
  express.static(`node_modules/csv-stringify/dist/esm/`));
app.listen(3000);
```

The HTML code looks like:

```html
<script type="module">
  import {stringify} from '/lib/stringify/index.js';
  stringify(records, options, (err, data) => {
    console.info(data)
  });
</script>
```

If you wish to use the sync API, use:

```html
<script type="module">
  import {stringify} from '/lib/stringify/sync.js';
  const data = stringify(records, options);
</script>
```
