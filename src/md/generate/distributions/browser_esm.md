---
title: ECMAScript modules browser environments
navtitle: Browser ESM
description: The ESM distribution target the latest browsers which support ECMAScript modules introduced by ES6.
keywords: ['csv', 'generate', 'esm', 'browser', 'ECMAScript', 'modules']
sort: 2.3
---

# ECMAScript modules (ESM) for newer browsers

The ESM distribution target the latest browsers with support for [ECMAScript modules introduced by ES6](https://caniuse.com/es6-module) introduced by ES6.

Compared with the [Node.js version](/csv/distributions/nodejs_esm/), this distribution bundles polyfills to run outside of the Node.js environment.

Addtionnal information are available in the [project ECMAScript modules](/project/distributions/browser_esm/) documentation.

## Usage

The files can be manually imported. They dont require any external dependencies and they are located inside the [`packages/csv-generate/dist/esm`](https://github.com/adaltas/node-csv/tree/master/packages/csv-generate/dist/esm) folder.

When using NPM to manage and load your modules, for example within webpack, use:

```js
import {generate} from 'csv-generate/browser/esm';
// Or
import {generate} from 'csv-generate/browser/esm/sync';
```

## Vanilla JavaScript

A working demo is available in the project [`demo/browser`](https://github.com/adaltas/node-csv/tree/master/demo/browser) directory.

* [`./esm/generate.html`](https://github.com/adaltas/node-csv/tree/master/demo/browser/esm/generate.html)
* [`./esm/generate_sync.html`](https://github.com/adaltas/node-csv/tree/master/demo/browser/esm/generate_sync.html)

With Express, expose the files with:

```js
const app = express();
app.use('/lib/generate/',
  express.static(`node_modules/csv-generate/dist/esm/`));
app.listen(3000);
```

The HTML code looks like:

```html
<script type="module">
  import {generate} from '/lib/generate/index.js';
  generate(options, (err, data) => {
    console.info(data)
  });
</script>
```

If you wish to use the sync API, use:

```html
<script type="module">
  import {generate} from '/lib/generate/sync.js';
  const data = generate(options);
</script>
```

## Webpack module bundler

This distribution is compatible with [webpack version 5](https://webpack.js.org/). It comes with the Node.js polyfills. A [working demo](https://github.com/adaltas/node-csv/tree/master/demo/webpack) is shared on the project repository.

In your module, import the appropriate `csv-generate` module:

* [`./generate.js`](https://github.com/adaltas/node-csv/blob/master/demo/webpack/src/generate.js#L2):   
  ```js
  import {generate} from 'csv-generate/browser/esm';
  ```
* [`./generate_sync.js`](https://github.com/adaltas/node-csv/blob/master/demo/webpack/src/generate_sync.js#L2):   
  ```js
  import {generate} from 'csv-generate/browser/esm/sync';
  ```

The relevant [webpack configuration](https://github.com/adaltas/node-csv/tree/master/demo/webpack/webpack.config.js) looks like:

`embed:demo/webpack/webpack.config.js{snippet: "generate"}`
