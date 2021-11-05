---
title: ECMAScript modules browser environments
navtitle: Browser ESM
description: The ESM distribution target the latest browsers which support ECMAScript modules introduced by ES6.
keywords: ['csv', 'esm', 'browser', 'ECMAScript', 'modules', 'generate', 'parse', 'transform', 'stringify']
sort: 4.3
---

# ECMAScript modules (ESM) for newer browsers

The ESM distribution target the latest browsers with support for [ECMAScript modules introduced by ES6](https://caniuse.com/es6-module). Compared with the [Node.js version](/csv/distributions/nodejs_esm/), this distribution bundles polyfills to run outside of the Node.js environment.

The files are located inside the `packages/{package}/dist/esm` folders. Import them inside your project or use NPM to download the package and to reference them:

If using the `csv` package:

* [csv](https://github.com/adaltas/node-csv/tree/master/packages/csv/dist/esm)

If using individual packages:

* [csv-generate](https://github.com/adaltas/node-csv/tree/master/packages/csv-generate/dist/esm)
* [csv-parse](https://github.com/adaltas/node-csv/tree/master/packages/csv-parse/dist/esm)
* [csv-stringify](https://github.com/adaltas/node-csv/tree/master/packages/csv-stringify/dist/esm)
* [stream-transform](https://github.com/adaltas/node-csv/tree/master/packages/stream-transform/dist/esm)

## Integration

ESM code is imported from a script tag with the `module` type:

```html
<script type="module">
// Import your modules and insert your code
</script>
```

When using the `csv` package, use the following import directives:

```js
// For the stream and callback APIs
import {generate, parse, transform, stringify} from '/lib/csv/index.js'
// Or for the sync API
import {generate, parse, transform, stringify} from '/lib/csv/sync.js'
```

When using individual packages:

```js
// For the stream and callback APIs
import {generate} from '/lib/generate/index.js'
import {parse} from '/lib/parse/index.js'
import {transform} from '/lib/transform/index.js'
import {stringify} from '/lib/stringify/index.js'
// Or for the sync API
import {generate} from '/lib/generate/sync.js'
import {parse} from '/lib/parse/sync.js'
import {transform} from '/lib/transform/sync.js'
import {stringify} from '/lib/stringify/sync.js'
```

## Example

A working demo is available in the project [`demo/browser`](https://github.com/adaltas/node-csv/tree/master/demo/browser) directory.

* [`./esm/csv.html`](https://github.com/adaltas/node-csv/tree/master/demo/browser/esm/csv.html)
* [`./esm/csv_sync.html`](https://github.com/adaltas/node-csv/tree/master/demo/browser/esm/csv_sync.html)

With Express, expose the files with:

```js
const app = express();
app.use('/lib/csv/',
  express.static(`node_modules/csv/dist/esm/`));
app.listen(3000);
```

The HTML code looks like:

```html
<script type="module">
  import {transform} from '/lib/csv/index.js';
  transform(input, handler, options, (err, data) => {
    console.info(data)
  });
</script>
```

If you wish to use the sync API, use:

```html
<script type="module">
  import {transform} from '/lib/csv/sync.js';
  const data = transform(input, handler, options);
</script>
```
