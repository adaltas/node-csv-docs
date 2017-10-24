---
title: CSV Parser
layout: page
tags: ['intro','page']
pageOrder: 1
github: 'https://github.com/adaltas/node-csv-parse'
---

[![Build Status](https://secure.travis-ci.org/adaltas/node-csv-parse.png)][travis-csv-parse]

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

*   `auto_parse` (boolean|function)   
    If true, the parser will attempt to convert input string to native types. If a 
    function, receive the value as argument and return a new value.   
*   `auto_parse_date` (boolean|function)   
    If true, the parser will attempt to convert input string to dates. If a 
    function, receive the value as argument and return a new value. It
    requires the "auto_parse" option. Be careful, it relies on `Date.parse`.   
*   `columns` (array|boolean|function)   
    List of fields as an array, a user defined callback accepting the first line
    and returning the column names, or `true` if autodiscovered in the first CSV
    line. Defaults to `null`. Affects the result data set in the sense that 
    records will be objects instead of arrays. A value "false" skips the all column.   
*   `comment` (char)   
    Treat all the characters after this one as a comment. Defaults to `''`
    (disabled).   
*   `delimiter` (char)   
    Set the field delimiter. One character only. Defaults to `","` (comma).   
*   `escape` (char)   
    Set the escape character. One character only. Defaults to double quote.   
*   `from`, (number)   
    Start returning records from a particular line.   
*   `ltrim` (boolean)   
    If `true`, ignore whitespace immediately following the delimiter (i.e.
    left-trim all fields). Defaults to `false`. Does not remove whitespace in a
    quoted field.   
*   `max_limit_on_data_read` (int)   
    Maximum numer of characters to be contained in the field and line buffers
    before an exception is raised. Used to guard against a wrong `delimiter` or
    `rowDelimiter`. Default to 128,000 characters.   
*   `objname` (string)   
    Name of header-record title to name objects by.   
*   `quote` (char|boolean)   
    Optional character surrounding a field. One character only. Disabled if 
    null, false or empty. Defaults to double quote.   
*   `relax` (boolean)   
    Preserve quotes inside unquoted field (be warned, it doesn't make coffee).   
*   `relax_column_count` (boolean)   
    Discard inconsistent columns count. Default to `false`.   
*   `rowDelimiter` (chars|array)   
    One or multiple characters used to delimit record rows; defaults to 
    auto discovery if not provided. Suported auto disvovery method are Linux ("\n"),
    Apple ("\r") and Windows ("\r\n") row delimiters.   
*   `rtrim` (boolean)   
    If `true`, ignore whitespace immediately preceding the delimiter (i.e.
    right-trim all fields). Defaults to `false`.  Does not remove whitespace in
    a quoted field.   
*   `skip_empty_lines` (boolean)   
    Don't generate records for empty lines (line matching `/\s*/`), defaults to `false`.   
*   `skip_lines_with_empty_values` (boolean)   
    Don't generate records for lines containing empty column values (column 
    matching `/\s*/`), defaults to `false`.   
*   `to`, (number)   
    Stop returning records after a particular line.   
*   `trim` (boolean)   
    If `true`, ignore whitespace immediately around the delimiter. Defaults to
    `false`. Does not remove whitespace in a quoted field.   

All options are optional.

## Internal properties

Those properties are for internal usage but may be considered useful to the
final user in some situations. They are accessible from the intance returned by
the `parse` function.

*   `count` (number)   
    Internal counter of records being processed.   
*   `empty_line_count` (number)   
    Internal counter of empty lines
*   `skipped_line_count` (number)   
    Number of non uniform lines skipped when `relax_column_count` is true
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

[csv]: https://github.com/adaltas/node-csv
[travis-csv-parse]: http://travis-ci.org/adaltas/node-csv-parse
[stream]: http://nodejs.org/api/stream.html#stream_class_stream_transform
[fs_read]: https://github.com/adaltas/node-csv-parse/tree/master/samples/fs_read.js
[parse]: https://github.com/adaltas/node-csv-parse
[parse-samples]: https://github.com/adaltas/node-csv-parse/tree/master/samples
[parse-test]: https://github.com/adaltas/node-csv-parse/tree/master/test
