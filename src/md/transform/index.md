---
title: Usage
description: Object transformations implementing the Node.js `stream.Transform` API
keywords: ['csv', 'transform', 'node.js', 'stream', 'features', 'usage']
sort: 1
---

# Stream transformation for Node.js

[![Build Status](https://img.shields.io/github/actions/workflow/status/adaltas/node-csv/nodejs.yml?branch=master)](https://github.com/adaltas/node-csv/actions)
[![NPM](https://img.shields.io/npm/dm/stream-transform)](https://www.npmjs.com/package/stream-transform)
[![NPM](https://img.shields.io/npm/v/stream-transform)](https://www.npmjs.com/package/stream-transform)

This project provides a simple object transformation framework implementing the Node.js `stream.Transform` API. Transformations are based on a [user handler function](/transform/handler/) that must be provided. It was originally developed as a part of the Node.js [CSV package](https://github.com/adaltas/node-csv) (`npm install csv`) and can be used independently.

Source code for this project is available on [GitHub](https://github.com/adaltas/node-csv/tree/master/packages/stream-transform).

## Main features

* Extends the native Node.js [transform stream API](http://nodejs.org/api/stream.html#stream_class_stream_transform)
* Simplicity with the optional callback and sync API
* Pipe transformations between readable and writable streams
* Synchronous versus asynchronous user functions
* Sequential and parallel execution
* Accept object, array or JSON as input and output
* Sequential or user-defined concurrent execution
* Skip and multiply records
* Alter or clone input records
* Work nicely with the [csv-generate](/generate/), [csv-parse](/parse/) and [csv-stringify](/stringify/) packages
* MIT License

## Usage

Run `npm install csv` to install the full CSV module or run `npm install stream-transform` if you are only interested by this package.

The source code uses modern JavaScript features and run natively in Node 7.6+. For older browsers or older versions of Node, use the modules inside "./lib/es5".

Data is expected to be an array of records. Records may be provided in any form such as a string, an array or an object. Options can be placed in any positions.

## Additional help

For usage and examples, you may refer to
[the "samples" folder](https://github.com/adaltas/node-csv/tree/master/packages/stream-transform/samples) and [the "test" folder](https://github.com/adaltas/node-csv/tree/master/packages/stream-transform/test).
