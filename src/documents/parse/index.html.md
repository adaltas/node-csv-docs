---
title: CSV Parser
layout: page
tags: ['intro','page']
pageOrder: 1
github: 'https://github.com/wdavidw/node-csv-parse'
---

[![Build Status](https://secure.travis-ci.org/wdavidw/node-csv-parse.png)][travis-csv-parse]

This package is a parser converting CSV text input into arrays or objects. It
implements the Node.js [`stream.Transform`API][stream]. It also
provides a simple callback-based API for convenience. It is both extremely easy
to use and powerful. It was first released in 2010 and is used against big data
sets by a large community.

Source code for this project is available on [GitHub][parse].

## Features

*   Follow the Node.js streaming API
*   Simplicity with the optional callback API
*   Support delimiters, quotes, escape characters and comments
*   Line break discovery
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

There is also a synchronous API if you need it.   

For additional usage and example, you may refer to
[example page](/parse/examples/),
[the "samples" folder][parse-samples] and [the "test" folder][parse-test].

### Callback API   

signature: `parse(data, [options], callback)`     

### [Node.js Stream API][stream]   

signature: `parse([options], [callback])`   

### Synchronous API

Using this API involves requiring the 'csv-parse/lib/sync' module.

signature: `records = parse(text, [options])`

## Parser options

*   `delimiter` (char)   
    Set the field delimiter. One character only. Defaults to `","` (comma).   
*   `rowDelimiter` (chars|constant)   
    String used to delimit record rows or a special constant; special constants are
    `'auto'`, `'unix'`, `'mac'`, `'windows'`, `'unicode'`; defaults to `'auto'` (discovered
    in source or `'unix'` if no source is specified).   
*   `quote` (char)   
    Optional character surrounding a field. One character only. Defaults to
    double quote.   
*   `escape` (char)   
    Set the escape character. One character only. Defaults to double quote.   
*   `columns` (array|boolean|function)
    List of fields as an array, a user defined callback accepting the first line
    and returning the column names, or `true` if autodiscovered in the first CSV
    line. Defaults to `null`. Affects the result data set in the sense that records
    will be objects instead of arrays.   
*   `comment` (char)   
    Treat all the characters after this one as a comment. Defaults to `''`
    (disabled).   
*   `objname` (string)   
    Name of header-record title to name objects by.   
*   `relax` (boolean)   
    Preserve quotes inside unquoted field.   
*   `relax_column_count` (boolean)   
    Discard inconsistent columns count. Default to `false`.   
*   `skip_empty_lines` (boolean)   
    Don't generate empty values for empty lines.   
*   `max_limit_on_data_read` (int)   
    Maximum numer of characters to be contained in the field and line buffers
    before an exception is raised. Used to guard against a wrong `delimiter` or
    `rowDelimiter`. Default to 128,000 characters.   
*   `trim` (boolean)   
    If `true`, ignore whitespace immediately around the delimiter. Defaults to
    `false`. Does not remove whitespace in a quoted field.   
*   `ltrim` (boolean)   
    If `true`, ignore whitespace immediately following the delimiter (i.e.
    left-trim all fields). Defaults to `false`. Does not remove whitespace in a quoted field.
*   `rtrim` (boolean)   
    If `true`, ignore whitespace immediately preceding the delimiter (i.e.
    right-trim all fields). Defaults to `false`.  Does not remove whitespace in a quoted field.
*   `auto_parse` (boolean)   
    If true, the parser will attempt to convert input string to native types.   
*   `auto_parse_date` (boolean)   
    If true, the parser will attempt to convert input string to dates. It
    requires the "auto_parse" option. Be careful, it relies on `Date.parse`.   

All options are optional.

## Internal properites

Those properties are for internal usage but may be considered useful to the
final user in some situations. They are accessible from the intance returned by
the `parse` function.

*   `count` (number)   
    Internal counter of records being processed.   
*   `lines` (number)   
    The number of lines encountered in the source dataset.   
*   `is_int` (regexp, function)   
    The regular expression or function used to determine if a value should be
    cast to an integer.   
*   `is_float` (regexp, function)   
    The regular expression or function used to determine if a value should be
    cast to a float.   

## Migration

Most of the generator is imported from its parent project [CSV][csv] in an
effort to split it between the generator, the parser, the transformer and the
stringifier.

As `record` has disappeared, you are encouraged to use the `"readable"` event
conjointly with the `"read"` function as documented above and in the
[Stream API][stream].

[csv]: https://github.com/wdavidw/node-csv
[travis-csv-parse]: http://travis-ci.org/wdavidw/node-csv-parse
[stream]: http://nodejs.org/api/stream.html#stream_class_stream_transform
[fs_read]: https://github.com/wdavidw/node-csv-parse/tree/master/samples/fs_read.js
[parse]: https://github.com/wdavidw/node-csv-parse
[parse-samples]: https://github.com/wdavidw/node-csv-parse/tree/master/samples
[parse-test]: https://github.com/wdavidw/node-csv-parse/tree/master/test
