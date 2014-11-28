---
title: CSV
layout: page
tags: ['intro','page']
pageOrder: 1
---

This project provides CSV generation, parsing, transformation and serialization
for Node.js.

It has been tested and used by a large community over the years and should be
considered reliable. It provides every option you would expect from an advanced
CSV parser and stringifier.

[![NPM](https://nodei.co/npm/csv.png?stars&downloads)](https://nodei.co/npm/csv/) [![NPM](https://nodei.co/npm-dl/csv.png)](https://nodei.co/npm/csv/)

The `csv` package is itself split into 4 packages:

*   [`csv-generate`](https://github.com/wdavidw/node-csv-generate),
    a flexible generator of CSV string and Javascript objects.
*   [`csv-parse`](https://github.com/wdavidw/node-csv-parse),
    a parser converting CSV text into arrays or objects.
*   [`stream-transform`](https://github.com/wdavidw/node-stream-transform),
    a transformation framework.
*   [`csv-stringify`](https://github.com/wdavidw/node-csv-stringify),
    a stringifier converting records into a CSV text.

Additionaly, you might want to look at the [iconv-lite][iconv] module for
alternative encoding support.

## Legacy versions

This documentation is covering the current version 0.4.x. The documentation for
the previous versionis available [here][legacy]. You can also access 
previous release on github:

*   [0.3.x](https://github.com/wdavidw/node-csv/tree/v0.3.6/doc)
*   [0.2.x](https://github.com/wdavidw/node-csv/tree/v0.2.9/doc)
*   [0.1.x](https://github.com/wdavidw/node-csv/tree/v0.1.0/doc)

## Usage

Installation command is `npm install csv`.

This project is an umbrella behind multiple projects which can also be used
individually.

All modules are fully be compatible with the stream 2 and 3 specifications.
Also, a simple callback-based API is always provided for conveniency.

For additionnal usage and example, you may refer to
[the example page][examples].

[iconv]: https://github.com/ashtuchkin/iconv-lite
[examples]: /csv/examples/
[legacy]: /legacy/
