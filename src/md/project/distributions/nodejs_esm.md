---
title: ECMAScript modules
navtitle: Node.js ESM
description: The callback API transform all the records and buffers the results into a single dataset which is passed to a user provided function.
keywords: ['csv', 'esm', 'node.js', 'ECMAScript', 'modules']
sort: 4.1
---

# Node.js ECMAScript modules (ESM)

The packages of this project are written as [ECMAScript modules](https://nodejs.org/api/esm.html). When using the `csv` package, use the following import directives:

```js
// For the stream and callback APIs
import {generate, parse, transform, stringify} from 'csv';
// Or for the sync API
import {generate, parse, transform, stringify} from 'csv/sync';
```

When using individual packages:

```js
// For the stream and callback APIs
import {generate} from 'csv-generate';
import {parse} from 'csv-parse';
import {transform} from 'stream-transform';
import {stringify} from 'csv-stringify';
// Or for the sync API
import {generate} from 'csv-generate/sync';
import {parse} from 'csv-parse/sync';
import {transform} from 'stream-transform/sync';
import {stringify} from 'csv-stringify/sync';
```

## Supported Node.js versions

According to our tests, ECMAScript modules started to work with this package and with Node.js version 12.16 when the `--experimental-modules` flag activated. Starting with version 12.17, the usage of the `--experimental-modules` flag was no longer required.

Internally, the `export` property inside the `package.json` file exposes the modules in the [`./lib` folder](https://github.com/adaltas/node-csv/tree/master/packages/csv/lib).

The [CommonJS distribution](/project/distributions/nodejs_cjs/) supports older version of Node.js starting with version 8.3.

## Older versions of this package

ECMAScript modules support came with version 6.0.0 of `csv`. Prior versions shall refer to the CommonJS documentation.
