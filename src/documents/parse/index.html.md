---
title: CSV Parser
layout: page
tags: ['intro','page']
pageOrder: 1
---

This package is a
parser converting CSV text input into arrays or objects. It implements the
Node.js [stream.Transform`API](http://nodejs.org/api/stream.html#stream_class_stream_transform). It also provides a simple callback-base API for convenience. It is both extremely easy to use and powerful. It was first
released in 2010 and is used against big data sets by a large community.

## Features

*   Follow the Node.js streaming API
*   Support delimiters, quotes, escape characters and comments
*   Line breaks discovery
*   Support big datasets
*   Complete test coverage and samples for inspiration
*   no external dependencies
*   to be used conjointly with `csv-generate`, `stream-transform` and `csv-stringify`

## Usage

Run `npm install csv` to install the full CSV package or run
`npm install csv-parse` if you are only interested by the CSV parser.

Use the callback style API for simplicity or the stream based API for
scalability. You may also mix the two styles. For example, the
[fs_read.js example][fs_read] pipe a file stream reader and get the results
inside a callback.

For additionnal usage and example, you may refer to
[example page](/parse/examples/),
[the "samples" folder][parse-samples] and [the "test" folder][parse-test].

## Parser options

*   `delimiter`         Set the field delimiter. One character only, defaults to comma.   
*   `rowDelimiter`      String used to delimit record rows or a special value; special values are 'auto', 'unix', 'mac', 'windows', 'unicode'; defaults to 'auto' (discovered in source or 'unix' if no source is specified).   
*   `quote`             Optionnal character surrounding a field, one character only, defaults to double quotes.   
*   `escape`            Set the escape character, one character only, defaults to double quotes.   
*   `columns`           List of fields as an array, a user defined callback accepting the first line and returning the column names or true if autodiscovered in the first CSV line, default to null, affect the result data set in the sense that records will be objects instead of arrays.   
*   `comment`           Treat all the characteres after this one as a comment, default to '#'.   
*   `objname`           Name of header-record title to name objects by.   
*   `skip_empty_lines`  Dont generate empty values for empty lines.   
*   `trim`              If true, ignore whitespace immediately around the delimiter, defaults to false.   
*   `ltrim`             If true, ignore whitespace immediately following the delimiter (i.e. left-trim all fields), defaults to false.   
*   `rtrim`             If true, ignore whitespace immediately preceding the delimiter (i.e. right-trim all fields), defaults to false.   
*   `auto_parse`        If true, the parser will attempt to convert read data types to native types.   

## Migration

Most of the generator is imported from its parent project [CSV][csv] in a effort
to split it between the generator, the parser, the transformer and the
stringifier.

The "record" has disappeared, you are encouraged to use the "readable" event conjointly
with the "read" function as documented above and in the [Stream API][stream_transform].

[csv]: https://github.com/wdavidw/node-csv
[fs_read]: https://github.com/wdavidw/node-csv-parse/tree/master/samples/fs_read.js
[parse-samples]: https://github.com/wdavidw/node-csv-parse/tree/master/samples
[parse-test]: https://github.com/wdavidw/node-csv-parse/tree/master/test
[stream_transform]: http://nodejs.org/api/stream.html#stream_class_stream_transform
[travis]: https://travis-ci.org/#!/wdavidw/node-csv-parse
