---
title: Usage
description: CSV parsing implementing the Node.js `stream.Transform` API
keywords: ['csv', 'parse', 'parser', 'tsv', 'node.js', 'stream', 'features', 'usage']
sort: 1
---

# CSV Parser for Node.js

[![Build Status](https://api.travis-ci.org/adaltas/node-csv-parse.svg)](https://travis-ci.org/#!/adaltas/node-csv-parse)

This package is a parser converting CSV text input into arrays or objects. It implements the Node.js [stream API](/parse/api/#stream-api). It also provides alternative APIs for convenience such as the [callback API](/parse/api/#callback-api) and [sync API](/parse/api/#sync-api). It is both extremely easy to use and powerful. It was first released in 2010 and is used against big data sets by a large community.

Source code for this project is available on [GitHub](https://github.com/adaltas/node-csv/tree/master/packages/csv-parse).

## Main features

* Follow the Node.js streaming API
* Simplicity with the optional callback and sync API
* Support delimiters, quotes, escape characters and comments
* Line break discovery
* Support big datasets
* Complete test coverage and samples for inspiration
* No external dependencies
* Work nicely with the [csv-generate](/generate/), [stream-transform](/transform/) and [csv-stringify](/stringify/) packages
* MIT License

## Usage

Run `npm install csv` to install the full CSV package or run
`npm install csv-parse` if you are only interested by the CSV parser.

Use the stream based API for scalability and the sync or mixed APIs for simplicity.

The source code uses modern JavaScript features and run natively in Node 7.6+.
For older browsers or older versions of Node, use the modules inside "./lib/es5", i.e. `require("csv-parse")` will become `require("csv-parse/lib/es5")`.

## Additional help

For usage and examples, you may refer to
[recipes page](/parse/recipes/),
[the "samples" folder](https://github.com/adaltas/node-csv/tree/master/packages/csv-parse/samples) and [the "test" folder](https://github.com/adaltas/node-csv/tree/master/packages/csv-parse/test).
