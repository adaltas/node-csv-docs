---
title: ECMAScript modules browser environments
navtitle: Browser ESM
description: The ESM distribution target the latest browsers which support ECMAScript modules introduced by ES6.
keywords: ['csv', 'esm', 'browser', 'ECMAScript', 'modules', 'generate', 'parse', 'transform', 'stringify']
sort: 4.3
---

# ECMAScript modules (ESM) for newer browsers

The ESM distribution target the latest browsers with support for [ECMAScript modules introduced by ES6](https://caniuse.com/es6-module).

Compared with the [Node.js version](/csv/distributions/nodejs_esm/), this distribution bundles polyfills to run outside of the Node.js environment. 

Modern web browsers import ECMAScript modules nativelly and it also works within webpack and other alternative bundlers. Two demonstrations are available:

- A Vanilla Javascript application with [Express](https://expressjs.com/) targeting web browsers with module support.
- A web application bundled with [webpack](https://webpack.js.org/).

## Usage

The files are located inside the `packages/{package}/dist/esm` folders. Import them inside your project or use NPM to download the package and to reference them:

If using the `csv` package:

* [csv](https://github.com/adaltas/node-csv/tree/master/packages/csv/dist/esm)

If using individual packages:

* [csv-generate](https://github.com/adaltas/node-csv/tree/master/packages/csv-generate/dist/esm)
* [csv-parse](https://github.com/adaltas/node-csv/tree/master/packages/csv-parse/dist/esm)
* [csv-stringify](https://github.com/adaltas/node-csv/tree/master/packages/csv-stringify/dist/esm)
* [stream-transform](https://github.com/adaltas/node-csv/tree/master/packages/stream-transform/dist/esm)

When using NPM to manage and load your modules, for example within webpack, use:

```js
import * as csv from 'csv-parse/browser/esm/index.js';
// Or
import * as csv from 'csv-parse/browser/esm/sync.js';
```

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
import {generate, parse, transform, stringify} from '/your/path/lib/csv/index.js'
// Or for the sync API
import {generate, parse, transform, stringify} from '/your/path/lib/csv/sync.js'
```

When using individual packages:

```js
// For the stream and callback APIs
import {generate} from '/your/path/lib/generate/index.js'
import {parse} from '/your/path/lib/parse/index.js'
import {transform} from '/your/path/lib/transform/index.js'
import {stringify} from '/your/path/lib/stringify/index.js'
// Or for the sync API
import {generate} from '/your/path/lib/generate/sync.js'
import {parse} from '/your/path/lib/parse/sync.js'
import {transform} from '/your/path/lib/transform/sync.js'
import {stringify} from '/your/path/lib/stringify/sync.js'
```

## Vanilla JavaScript

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

## Webpack module bundler

This distribution is compatible with [webpack version 5](https://webpack.js.org/). It comes with the Node.js polyfills. A [working demo](https://github.com/adaltas/node-csv/tree/master/demo/webpack) is shared on the project repository.

In your module, import the appropriate `csv` module:

```js
import * as csv from 'csv-parse/browser/esm/index.js';
// Or
import * as csv from 'csv-parse/browser/esm/sync.js';
```

The relevant [webpack configuration](https://github.com/adaltas/node-csv/tree/master/demo/webpack/webpack.config.js) looks like:

`embed:demo/webpack/webpack.config.js{snippet: "csv"}`
