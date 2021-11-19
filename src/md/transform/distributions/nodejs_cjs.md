---
title: ECMAScript modules
navtitle: Node.js CJS
description: The CommonJS distribution of stream transform is appropriate to Node.js packages which have not yet migrated to ECMAScript modules.
keywords: ['stream', 'transform', 'CJS', 'CommonJS', 'modules', 'Node.js']
sort: 2.2
---

# Node.js CommonJS (CJS)

The CommonJS distribution is appropriate to Node.js packages which have not yet migrated to ECMAScript modules. It is available in your code with:

* Stream and callback API: `const {transform} = require('stream-transform');`
* Sync API: `const {transform} = require('stream-transform/sync');`

Addtionnal information are available in the [project CommonJS](/project/distributions/nodejs_cjs/) documentation.

## Supported Node.js versions

The CommonJS distribution of this package supports the usage of Node.js version 8.3 and above. However, the module path differs depending on your Node.js version.

Internally, the [`export` property](https://nodejs.org/api/packages.html#packages_exports) inside the `package.json` file declares the `stream-transform` and `stream-transform/sync` entry points. It exposes the modules of the [`./dist/cjs` folder](https://github.com/adaltas/node-csv/tree/master/packages/stream-transform/lib).

It is supported in Node.js 12+ as an alternative to the `main` field. For older version, the `main` field behave as a fallback of the `csv` module. It is transparent. Use `require("csv/dist/cjs/sync.cjs")` as an alternative to `require("csv/sync")`.

## Older versions of this package

In version 2 and below, the module signature was:

```js
const transform = require('stream-transform');
// And
const transform = require('stream-transform/lib/sync');
```
