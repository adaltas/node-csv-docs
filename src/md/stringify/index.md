---
title: Usage
description: CSV stringifier implementing the Node.js `stream.Transform` API
keywords: ['intro','page']
sort: 1
---

## CSV stringifier for Node.js

[![Build Status](https://api.travis-ci.org/adaltas/node-csv-stringify.svg)](https://travis-ci.org/#!/adaltas/node-csv-stringify)

This package is a stringifier converting records into a CSV text and implementing the
Node.js `stream.Transform` API. It is also providing the easier synchronous and
callback-based APIs for conveniency. It is both extremely easy to use and
powerful. It was first released in 2010 and is tested against big data
sets by a large community.

Source code for this project is available on [GitHub][stringify].

## Main features

* Extends the native Node.js streaming API
* Simplicity with the optional callback API
* Support for custom formatters, delimiters, quotes, escape characters and header
* Support big datasets
* Complete test coverage and samples for inspiration
* Only 1 external dependency
* to be used conjointly with `csv-generate`, `csv-parse` and `stream-transform`
* BSD License

## Usage

Run `npm install csv` to install the full csv module or run
`npm install csv-stringify` if you are only interested by the CSV stringifier.

Use the stream based API for scalability and the sync or mixed APIs for simplicity.

The source code uses modern JavaScript features and run natively in Node 7.6+.
For older browsers or older versions of Node, use the modules inside "./lib/es5".

## Additional help

For usage and examples, you may refer to
[example page](/stringify/examples/),
[the "samples" folder][stringify-samples] and [the "test" folder][stringify-test].

[travis-csv-stringify]: http://travis-ci.org/adaltas/node-csv-stringify
[stringify]: https://github.com/adaltas/node-csv-stringify
[stringify-samples]: https://github.com/adaltas/node-csv-stringify/tree/master/samples
[stringify-test]: https://github.com/adaltas/node-csv-stringify/tree/master/test
