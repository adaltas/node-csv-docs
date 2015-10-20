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

### Callback API   

signature: `parse(data, [options], callback)`     

### [Node.js Stream API][stream]   

signature: `parse([options], [callback])`   

For additional usage and example, you may refer to
[example page](/parse/examples/),
[the "samples" folder][parse-samples] and [the "test" folder][parse-test].

## Parser options

*   `delimiter` (char)   
    Set the field delimiter. One character only, defaults to comma.   
*   `rowDelimiter` (chars|constant)   
    String used to delimit record rows or a special value; special constants are
    'auto', 'unix', 'mac', 'windows', 'unicode'; defaults to 'auto' (discovered
    in source or 'unix' if no source is specified).   
*   `quote` (char)   
    Optionnal character surrounding a field, one character only, defaults to
    double quotes.   
*   `escape` (char)   
    Set the escape character, one character only, defaults to double quotes.   
*   `columns` (array|boolean|function)
    List of fields as an array, a user defined callback accepting the first line
    and returning the column names or true if autodiscovered in the first CSV
    line, default to null, affect the result data set in the sense that records
    will be objects instead of arrays.   
*   `comment` (char)   
    Treat all the characters after this one as a comment, default to '#'.   
*   `objname` (string)   
    Name of header-record title to name objects by.   
*   `relax` (boolean)   
    Preserve quotes inside unquoted field.   
*   `skip_empty_lines` (boolean)   
    Dont generate empty values for empty lines.   
*   `trim` (boolean)   
    If true, ignore whitespace immediately around the delimiter, defaults to
    false. Does not remove whitespace in a quoted field.   
*   `ltrim` (boolean)   
    If true, ignore whitespace immediately following the delimiter (i.e.
    left-trim all fields), defaults to false. Does not remove whitespace in a quoted field.
*   `rtrim` (boolean)   
    If true, ignore whitespace immediately preceding the delimiter (i.e.
    right-trim all fields), defaults to false.  Does not remove whitespace in a quoted field.
*   `auto_parse` (boolean)   
    If true, the parser will attempt to convert read data types to native types.   
*   `auto_parse_date` (boolean)   
    If true, the parser will attempt to convert read data types to dates. It
    requires the "auto_parse" option.   

All options are optional.

## Internal properites

Those properties are for internal usage but may be considered usefull to the
final user in some situations. They are accessible from the intance returned by
the `parse` function.

*   `count` (number)   
    Internal counter of records being processed.   
*   `lines` (number)   
    The number of lines encountered in the source dataset.   
*   `regexp_int` (regexp)   
    The regular expression used to determine if a value should be cast to an
    integer.   
*   `regexp_float` (regexp)   
    The regular expression used to determine if a value should be cast to an
    float.   

## Migration

Most of the generator is imported from its parent project [CSV][csv] in an
effort to split it between the generator, the parser, the transformer and the
stringifier.

The "record" has disappeared, you are encouraged to use the "readable" event
conjointly with the "read" function as documented above and in the
[Stream API][stream].

[csv]: https://github.com/wdavidw/node-csv
[travis-csv-parse]: http://travis-ci.org/wdavidw/node-csv-parse
[stream]: http://nodejs.org/api/stream.html#stream_class_stream_transform
[fs_read]: https://github.com/wdavidw/node-csv-parse/tree/master/samples/fs_read.js
[parse]: https://github.com/wdavidw/node-csv-parse
[parse-samples]: https://github.com/wdavidw/node-csv-parse/tree/master/samples
[parse-test]: https://github.com/wdavidw/node-csv-parse/tree/master/test
