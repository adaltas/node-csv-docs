---
title: CSV and object generator
layout: page
tags: ['intro','page']
pageOrder: 1
---

This package provides a flexible generator of CSV strings and Javascript objects
implementing the Node.js `stream.Readable` API.

Features includes:

*   random or pseudo-random seed based generation
*   `stream.Readable` implementation

## Usage

Run `npm install csv` to install the full csv module or run
`npm install csv-generate` if you are only interested by the CSV parser.

Use the callback style API for simplicity or the stream based API for
scalability.

For additionnal usage and example, you may refer to
[the example page](/generate/examples/),
[the "samples" folder][generate-samples] and [the "test" folder][generate-test].

## Migration

Most of the generator is imported from its parent project [CSV][csv] in a effort
to split it between the generator, the parser, the transformer and the stringifier.

[csv]: https://github.com/wdavidw/node-csv
[travis]: https://travis-ci.org/#!/wdavidw/node-csv-generate
[generate-samples]: https://github.com/wdavidw/node-csv-generate/tree/master/samples
[generate-test]: https://github.com/wdavidw/node-csv-generate/tree/master/test
