---
title: ECMAScript modules
navtitle: Node.js CJS
description: The CommonJS distribution of CSV stringify is appropriate to Node.js packages which have not yet migrated to ECMAScript modules.
keywords: ['csv', 'stringify', 'CJS', 'CommonJS', 'modules', 'Node.js']
sort: 2.2
---

# Node.js CommonJS (CJS)

The CommonJS distribution is appropriate to Node.js packages which have not yet migrated to ECMAScript modules. It is available in your code with:

* Stream and callback API: `const {stringify} = require('csv-stringify');`
* Sync API: `const {stringify} = require('csv-stringify/sync');`

Addtionnal information are available in the [project CommonJS](/project/distributions/nodejs_cjs/) documentation.

## Supported Node.js versions

The CommonJS distribution of this package supports the usage of Node.js version 8.3 and above. However, the module path differs depending on your Node.js version.

Internally, the [`export` property](https://nodejs.org/api/packages.html#packages_exports) inside the `package.json` file declares the `csv-stringify` and `csv-stringify/sync` entry points. It exposes the modules of the [`./dist/cjs` folder](https://github.com/adaltas/node-csv/tree/master/packages/csv-stringify/lib).

It is supported in Node.js 12+ as an alternative to the `main` field. For older version, the `main` field behave as a fallback of the `csv` module. It is transparent. Use `require("csv/dist/cjs/sync.cjs")` as an alternative to `require("csv/sync")`.

## Older versions of this package

In version 2 and below, the module signature was:

```js
const stringify = require('csv-stringify');
// And
const stringify = require('csv-stringify/lib/sync');
```
