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
    [![Build Status](https://secure.travis-ci.org/wdavidw/node-csv-generate.png)][travis-csv-generate]
*   [`csv-parse`](https://github.com/wdavidw/node-csv-parse),
    a parser converting CSV text into arrays or objects.
    [![Build Status](https://secure.travis-ci.org/wdavidw/node-csv-parse.png)][travis-csv-parse]
*   [`stream-transform`](https://github.com/wdavidw/node-stream-transform),
    a transformation framework.
    [![Build Status](https://secure.travis-ci.org/wdavidw/node-stream-transform.png)][travis-stream-transform]
*   [`csv-stringify`](https://github.com/wdavidw/node-csv-stringify),
    a stringifier converting records into a CSV text.
    [![Build Status](https://secure.travis-ci.org/wdavidw/node-csv-stringify.png)][travis-csv-stringify]

This documentation is covering the current version 0.4.x. You can access 
previous documentation on github:

*   [0.3.x](https://github.com/wdavidw/node-csv/releases/tag/v0.3.6)
*   [0.2.x](https://github.com/wdavidw/node-csv/releases/tag/v0.2.9)
*   [0.1.x](https://github.com/wdavidw/node-csv/releases/tag/v0.1.0)

## Usage

Installation command is `npm install csv`.

This project is an umbrella behind multiple projects which can also be used
individually.

Each modules are fully be compatible with the stream 2 and 3 specifications.
Also, a simple callback-based API is always provided for conveniency.

For additionnal usage and example, you may refer to
[example page](/csv/examples/).

Migration
---------

This README covers the current version 0.2.x of the `node
csv `parser. The documentation for the previous version (0.1.0) is
available [here](https://github.com/wdavidw/node-csv/tree/v0.1). The
documentation for the incoming 0.3.x version is not yet released.

The functions 'from*' and 'to*' are now rewritten as 'from.*' and 'to.*'. The 'data'
event is now the 'record' event. The 'data' now receives a stringified version
of the 'record' event.

The documentation for olders version are available on GitHub:
[0.1.x](https://github.com/wdavidw/node-csv/tree/v0.1),
[0.2.x](https://github.com/wdavidw/node-csv/tree/v0.2).

Development
-----------

This parent project doesn't have test in itself but instead it deleguates the
tests to its child projects.

Tests are executed with mocha. To install it, simple run `npm install`, it will
install mocha and its dependencies in your project "node_modules" directory.

To run the tests:
```bash
npm test
```

The tests run against the CoffeeScript source files.

To generate the JavaScript files:
```bash
make build
```

The test suite is run online with [Travis][travis] against Node.js version 0.6, 0.7, 0.8 and 0.9.

Contributors
------------

*   David Worms: <https://github.com/wdavidw>

Related projects
----------------

*   Pavel Kolesnikov "ya-csv": <http://github.com/koles/ya-csv>
*   Chris Williams "node-csv": <http://github.com/voodootikigod/node-csv>

[travis-csv-generate]: http://travis-ci.org/wdavidw/node-csv-generate
[travis-csv-parse]: http://travis-ci.org/wdavidw/node-csv-parse
[travis-stream-transform]: http://travis-ci.org/wdavidw/node-stream-transform
[travis-csv-stringify]: http://travis-ci.org/wdavidw/node-csv-stringify
[website]: http://www.adaltas.com/projects/node-csv/
