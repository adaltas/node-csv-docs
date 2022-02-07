---
title: ECMAScript modules browser environments
navtitle: Browser ESM
description: The ESM distribution target the latest browsers which support ECMAScript modules introduced by ES6.
keywords: ['stream', 'transform', 'esm', 'browser', 'ECMAScript', 'modules']
sort: 2.3
---

# ECMAScript modules (ESM) for newer browsers

The ESM distribution target the latest browsers with support for [ECMAScript modules introduced by ES6](https://caniuse.com/es6-module) introduced by ES6.

Compared with the [Node.js version](/csv/distributions/nodejs_esm/), this distribution bundles polyfills to run outside of the Node.js environment.

Addtionnal information are available in the [project ECMAScript modules](/project/distributions/browser_esm/) documentation.

## Usage

The files can be manually imported. They dont require any external dependencies and they are located inside the [`packages/stream-transform/dist/esm`](https://github.com/adaltas/node-csv/tree/master/packages/stream-transform/dist/esm) folder.

When using NPM to manage and load your modules, for example within webpack, use:

```js
import {transform} from 'stream-transform/browser/esm';
// Or
import {transform} from 'stream-transform/browser/esm/sync';
```

## Vanilla JavaScript

A working demo is available in the project [`demo/browser`](https://github.com/adaltas/node-csv/tree/master/demo/browser) directory.

* [`./esm/transform.html`](https://github.com/adaltas/node-csv/tree/master/demo/browser/esm/transform.html)
* [`./esm/transform_sync.html`](https://github.com/adaltas/node-csv/tree/master/demo/browser/esm/transform_sync.html)

With Express, expose the files with:

```js
const app = express();
app.use('/lib/transform/',
  express.static(`node_modules/stream-transform/dist/esm/`));
app.listen(3000);
```

The HTML code looks like:

```html
<script type="module">
  import {transform} from '/lib/transform/index.js';
  transform(input, handler, options, (err, data) => {
    console.info(data)
  });
</script>
```

If you wish to use the sync API, use:

```html
<script type="module">
  import {transform} from '/lib/transform/sync.js';
  const data = transform(input, handler, options);
</script>
```

## Webpack module bundler

This distribution is compatible with [webpack version 5](https://webpack.js.org/). It comes with the Node.js polyfills. A [working demo](https://github.com/adaltas/node-csv/tree/master/demo/webpack) is shared on the project repository.

In your module, import the appropriate `stream-transform` module:

* [`./transform.js`](https://github.com/adaltas/node-csv/blob/master/demo/webpack/src/transform.js#L2):   
  ```js
  import {transform} from 'stream-transform/browser/esm';
  ```
* [`./transform_sync.js`](https://github.com/adaltas/node-csv/blob/master/demo/webpack/src/transform_sync.js#L2):   
  ```js
  import {transform} from 'stream-transform/browser/esm/sync';
  ```

The relevant [webpack configuration](https://github.com/adaltas/node-csv/tree/master/demo/webpack/webpack.config.js) looks like:

`embed:demo/webpack/webpack.config.js{snippet: "transform"}`
