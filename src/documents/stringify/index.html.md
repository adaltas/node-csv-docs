---
title: CSV Stringifier
layout: page
tags: ['intro','page']
pageOrder: 1
---

[![Build Status](https://secure.travis-ci.org/wdavidw/node-csv-stringify.png)][travis-csv-stringify]

This package is a stringifier converting records into a CSV text and implementing the
Node.js `stream.Transform` API. It is also providing a simple callback-base API
for converniency. It is both extremely easy to use and powerfull. It was
released since 2010 and is tested against very large dataset by a large
community.

Usage
-----

Run `npm install csv` to install the full csv module or run
`npm install csv-stringify` if you are only interested by the CSV stringifier.

Use the callback style API for simplicity or the stream based API for
scalability.

For additionnal usage and example, you may refer to
[example page](/stringify/examples/),
[the "samples" folder][stringify-samples] and [the "test" folder][stringify-test].

[csv]: https://github.com/wdavidw/node-csv
[travis-csv-stringify]: http://travis-ci.org/wdavidw/node-csv-stringify
[stringify-samples]: https://github.com/wdavidw/node-csv-parse/tree/master/samples
[stringify-test]: https://github.com/wdavidw/node-csv-parse/tree/master/test
