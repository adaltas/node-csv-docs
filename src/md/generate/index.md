---
title: Usage
description: CSV and object generation implementing the Node.js `stream.Readable` API
keywords: ['intro','page']
sort: 1
---

# CSV and object generator

## Introduction

[![Build Status](https://api.travis-ci.org/adaltas/node-csv-generate.svg)](https://travis-ci.org/#!/adaltas/node-csv-generate)

This package provides a flexible generator of CSV strings and Javascript objects
implementing the Node.js `stream.Readable` API. It may be used to generate 
random or user-defined datasets.

Source code for this project is available on [GitHub](https://github.com/adaltas/node-csv-generate).

## Main features

* Scalable `stream.Readable` implementation
* random or pseudo-random seed based generation
* Idempotence with the "seed" option
* User-defined value generation
* Multiple types of values (integer, boolean, dates, ...)
* BSD License

## Usage

The package is published on NPM and can be installed either with NPM or YARN.

You can install the package directly, for example using NPM with the command `npm install csv-generate`.

```bash
# Prepare the project directory
mkdir generator && cd generator
# Install its dependency
npm install csv-generate
# Write a sample module
cat > generator.js <<JS
# Require the csv module
const generate = require('csv-generate')
# Print 10 records
generate({length: 10}).pipe(process.stdout)
JS
# Execute the module
node generator.js
```

Another option is to access it through its parent `csv` package, which main module export a `generate` function. For example using the NPM with the command `npm install csv`.

```bash
# Prepare the project directory
mkdir generator && cd generator
# Install its dependency
npm install csv
# Write a sample module
cat > generator.js <<JS
# Require the csv module
const csv = require('csv')
# Print 10 records
csv.generate({length: 10}).pipe(process.stdout)
JS
# Execute the module
node generator.js
```

Run `npm install csv` to install the full csv module or run
`npm install csv-generate` if you are only interested by the CSV generator.



The source code uses modern JavaScript features and run natively in Node 7.6+.
For older browsers or older versions of Node, use the modules inside "./lib/es5".
