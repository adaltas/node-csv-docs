---
title: ECMAScript modules
navtitle: Node.js CJS
description: The CommonJS distribution of CSV is appropriate to Node.js packages which have not yet migrated to ECMAScript modules.
keywords: ['csv', 'CJS', 'CommonJS', 'modules', 'Node.js']
sort: 4.2
---

# Node.js CommonJS (CJS)

The CommonJS distribution is appropriate to Node.js packages which have not yet migrated to [ECMAScript modules](/project/distributions/nodejs_esm/).

Node.js builtin globals and modules are not inserted. This is both motivated by performance and compatiblity reasons. The buffer shim generates error, [see #303](https://github.com/adaltas/node-csv/issues/303). Use the [browser IIFE distribution](/project/distributions/browser_iife/) or integrate the module with a build system to provide the appropriate shims.

When using the `csv` package, use the following import directives:

```js
// For the stream and callback APIs
const {generate, parse, transform, stringify} = require('csv');
// Or for the sync API
const {generate, parse, transform, stringify} = require('csv/sync');
```

When using individual packages:

```js
// For the stream and callback APIs
const {generate} = require('csv-generate');
const {parse} = require('csv-parse');
const {transform} = require('stream-transform');
const {stringify} = require('csv-stringify');
// Or for the sync API
const {generate} = require('csv-generate/sync');
const {parse} = require('csv-parse/sync');
const {transform} = require('stream-transform/sync');
const {stringify} = require('csv-stringify/sync');
```

## Supported Node.js versions

The CommonJS distribution of this package supports the usage of Node.js version 8.3 and above. However, the module path differs depending on your Node.js version.

Internally, the [`export` property](https://nodejs.org/api/packages.html#packages_exports) inside the `package.json` file declares the `csv` and `csv/sync` entry points. It exposes the modules of the [`./dist/cjs` folder](https://github.com/adaltas/node-csv/tree/master/packages/csv/lib).

It is supported in Node.js 12+ as an alternative to the `main` field. For older version, the `main` field behave as a fallback of the `csv` module. It is transparent but only apply to this module. Use `require("csv/dist/cjs/sync.cjs")` as an alternative to `require("csv/sync")`.

## Older versions of this package

In version 2 and below, the module signature was:

```js
const generate = require('csv');
// And
const generate = require('csv/lib/sync');
```
