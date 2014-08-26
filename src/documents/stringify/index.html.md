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

## Usage

Run `npm install csv` to install the full csv module or run
`npm install csv-stringify` if you are only interested by the CSV stringifier.

Use the callback style API for simplicity or the stream based API for
scalability.

For additionnal usage and example, you may refer to
[example page](/stringify/examples/),
[the "samples" folder][stringify-samples] and [the "test" folder][stringify-test].

## Options

Options may include:

*   `columns`   
    List of fields, applied when `transform` returns an object, order matters,
    read the transformer documentation for additionnal information, columns are
    auto discovered when the user write object, see the "header" option on how
    to print columns names on the first line.   
*   `delimiter`   
    Set the field delimiter, one character only, defaults to a comma.   
*   `eof`   
    Add the value of "options.rowDelimiter" on the last line, default to true.   
*   `escape`   
    Defaults to the escape read option.   
*   `header`
    Display the column names on the first line if the columns option is
    provided or discovered.   
*   `lineBreaks`   
    String used to delimit record rows or a special value; special values are
    'auto', 'unix', 'mac', 'windows', 'unicode'; defaults to 'auto'
    (discovered in source or 'unix' if no source is specified).   
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

All options are optional.

[travis-csv-stringify]: http://travis-ci.org/wdavidw/node-csv-stringify
[stringify-samples]: https://github.com/wdavidw/node-csv-parse/tree/master/samples
[stringify-test]: https://github.com/wdavidw/node-csv-parse/tree/master/test
