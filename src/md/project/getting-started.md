---
title: Getting started
keywords: ['intro','page']
sort: 1
---

# Getting started

## Introduction

This project provides CSV generation, parsing, transformation and serialization
for Node.js.

It has been tested and used by a large community over the years and should be
considered reliable. It provides every option you would expect from an advanced
CSV parser and stringifier.

## Project organisation

The `csv` package is an umbrella which is itself split into 4 packages:

*   [`csv-generate`](https://github.com/adaltas/node-csv-generate),
    a flexible generator of CSV string and Javascript objects.
*   [`csv-parse`](https://github.com/adaltas/node-csv-parse),
    a parser converting CSV text into arrays or objects.
*   [`stream-transform`](https://github.com/adaltas/node-stream-transform),
    a transformation framework.
*   [`csv-stringify`](https://github.com/adaltas/node-csv-stringify),
    a stringifier converting records into a CSV text.

It means you can either install the `csv` package directly or selectively install one of its child projects to decrease your dependencies.

## Usage

Installation command is `npm install csv`. If using [Yarn](https://yarnpkg.com/en/), run `yarn add csv`.

The main modules are fully compatible with the Node.js native [stream API](https://nodejs.org/api/stream.html). Alternative API are also provided for convenience such as the callback, sync and promise APIs.

For additional usage and examples, you may refer to
[the example page](/project/examples/).
