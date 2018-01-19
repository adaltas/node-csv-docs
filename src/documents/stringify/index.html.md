---
title: CSV Stringifier
layout: page
tags: ['intro','page']
pageOrder: 1
github: 'https://github.com/adaltas/node-csv-stringify'
---

[![Build Status](https://secure.travis-ci.org/adaltas/node-csv-stringify.png)][travis-csv-stringify]

This package is a stringifier converting records into a CSV text and implementing the
Node.js `stream.Transform` API. It is also providing a easier synchronous or
callback-based API for converniency. It is both extremely easy to use and
powerfull. It was first released in 2010 and is tested against big data
sets by a large community.

Source code for this project is available on [GitHub][stringify].

## Usage

Run `npm install csv` to install the full csv module or run
`npm install csv-stringify` if you are only interested by the CSV stringifier.

Use the stream based API for scalability and the sync or mixed APIs for simplicity.

The source code uses modern JavaScript features and run natively in Node 7.6+.
For older browsers or older versions of Node, however, transpilation is required.

### Stream API

It implement the native Node.js [transform stream][stream] which is both
readable and writable.

This is the recommended approach if you need a maximum of power. It ensure
scalability by treating your data as a stream from the source to the destination.

```
const stringify = require('csv-stringify')
stringify([options]);
```

### Mixed API

It leverages the stream transform API but input doesn't have to be an readable
stream and output doesn't have to be a writable stream. Input may be a string
passed as first argument. Output may be obtained in the callback passed as last
argument.

Uses it for convenience in case you are already interacting with a readable
stream or a writable stream. It is not scalable because it implies that you
either have all your records in memory and wish to pipe the generated
CSV into a stream writer or that you have a stream reader generated records and
wish to obtain a string representing the full CSV text.

```
const stringify = require('csv-stringify')
stringify([data], [options], [callback])
```

### Sync API

It accepts a full data set of records and returns the full result set.

This represent a regular direct synchronous call to a function: you pass records
and it return a CSV text. Because of its simplicity, this is the recommended
approach if you don't need scalability and if your dataset fit in memory. 

```
const stringify = require('csv-stringify/lib/sync')
stringify(records, [options])
```

## Options

Options may include:

*   `columns`   
    List of fields, applied when `transform` returns an object, order matters,
    read the transformer documentation for additionnal information, columns are
    auto discovered in the first record when the user write objects, can refer
    to nested properties of the input JSON, see the "header" option on how to
    print columns names on the first line.
*   `delimiter`   
    Set the field delimiter, one character only, defaults to a comma.   
*   `eof`   
    Add the value of "options.rowDelimiter" on the last line, default to true.   
*   `escape`   
    Defaults to the escape read option.   
*   `header`   
    Display the column names on the first line if the columns option is
    provided or discovered.   
*   `quote`   
    Defaults to the quote read option.   
*   `quoted`   
    Boolean, default to false, quote all the non-empty fields even if not
    required.
*   `quotedEmpty`   
    Boolean, no default, quote empty fields?  If specified, overrides
    `quotedString` for empty strings.
*   `quotedString`   
    Boolean, default to false, quote all fields of type string even if not
    required.
*   `rowDelimiter`   
    String used to delimit record rows or a special value; special values are
    'auto', 'unix', 'mac', 'windows', 'unicode'; defaults to 'auto' (discovered
    in source or 'unix' if no source is specified).   
*   `formatters`
    Key-value object which defines custom formatters for certain data types
    * `date`
      Custom formatter for date values
    * `bool`
      Custom formatter for boolean values
    * `object`
      Custom formatter for generic object values

All options are optional.

## Additionnal help

For usage and examples, you may refer to
[example page](/stringify/examples/),
[the "samples" folder][stringify-samples] and [the "test" folder][stringify-test].

[travis-csv-stringify]: http://travis-ci.org/adaltas/node-csv-stringify
[stringify]: https://github.com/adaltas/node-csv-stringify
[stringify-samples]: https://github.com/adaltas/node-csv-stringify/tree/master/samples
[stringify-test]: https://github.com/adaltas/node-csv-stringify/tree/master/test
