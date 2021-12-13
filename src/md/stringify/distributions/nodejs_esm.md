---
title: ECMAScript modules
navtitle: Node.js ESM
description: The callback API transform all the records and buffers the results into a single dataset which is passed to a user provided function.
keywords: ['csv', 'stringify', 'esm', 'node.js', 'ECMAScript', 'modules']
sort: 2.1
---

# Node.js ECMAScript modules (ESM)

The `csv-stringify` package is written as [ECMAScript modules](https://nodejs.org/api/esm.html). It is available in your code with:

* Stream and callback API: `import {stringify} from 'csv-stringify';`
* Sync API: `import {stringify} from 'csv-stringify/sync';`

Additional information is available in the [`csv` ESM](/project/distributions/nodejs_esm/) documentation.

## Implementation

Internally, the `export` property inside the `package.json` file exposes the modules in the [`./lib` folder](https://github.com/adaltas/node-csv/tree/master/packages/csv-stringify/lib).

## Supported Node.js versions

According to our tests, ECMAScript modules started to work with this package and with Node.js version 12.16 when the `--experimental-modules` flag activated. Starting with version 12.17, the usage of the `--experimental-modules` flag was no longer required.

The [CommonJS distribution](/project/stringify/nodejs_cjs/) supports older version of Node.js starting with version 8.3.

## Older versions of this package

ECMAScript modules support came with version 3.0.0 of `csv-stringify`. Prior versions shall refer to the CommonJS documentation.
