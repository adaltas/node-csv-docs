---
title: Options
description: Options relative to the csv-parse package
keywords: ['csv', 'parse', 'options', 'delimiter', 'columns', 'comment', 'escape']
sort: 3
---

# CSV Parse options

## Introduction

All options are optional. The options from the [Node.js Stream Writable](https://nodejs.org/api/stream.html#stream_constructor_new_stream_writable_options) are also supported and passed as is. Only the "objectMode" is overwritten to always equal "true".

## Available options

* [`cast`](/parse/options/cast/) (boolean|function)   
  If true, the parser will attempt to convert input string to native types. If a function, receive the value as first argument, a context as second argument and return a new value. This option was named `auto_parse` until version 2. More information about the context properties is available below.
* `cast_date` (boolean|function)   
  If true, the parser will attempt to convert input string to dates. If a function, receive the value as argument and return a new value. It requires the `auto_parse` option to be active. This option was named `auto_parse_date` until version 2. Be careful, it relies on [`Date.parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).
* [`columns`](/parse/options/columns/) (array|boolean|function)   
  Generate records as object literals instead of arrays. List of fields as an array, a user defined callback accepting the first line and returning the column names, or `true` if auto-discovered in the first CSV line. Defaults to `null`. Affects the result data set in the sense that records will be objects instead of arrays. A value "false" "null", or "undefined" inside the column array skips the column from the output.
* `comment` (char)   
  Treat all the characters after this one as a comment. Defaults to `''` (disabled).
* `delimiter` (string|Buffer)   
  Set the field delimiter. One or multiple character. Defaults to `","` (comma).
* `escape` (string|Buffer)   
  Set the escape character; one character/byte only; only apply to quote and escape characters inside quoted fields; defaults to double quote.
* `from` (number)   
  Start handling records from the requested number of records.
* `from_line` (number)   
  Start handling records from the requested line number.
* `info` (boolean)   
  Generate two properties `info` and `record` where `info` is a snapshot of the info object at the time the record was created and `record` is the parsed array or object; note, it can be used conjointly with the `raw` option.
* `ltrim` (boolean)   
  If `true`, ignore whitespace immediately following the delimiter (i.e. left-trim all fields). Defaults to `false`. Does not remove whitespace in a quoted field.
* `max_record_size` (integer)   
  Maximum numer of characters to be contained in the field and line buffers before an exception is raised; used to guard against a wrong `delimiter` or `record_delimiter`; a castable string will be converted to an integer; default to 128,000 characters.
* `objname` (string)   
  Name of header-record title to name objects by.
* `quote` (char|boolean)   
  Optional character surrounding a field; one character only; disabled if null, false or empty; defaults to double quote.
* `raw` (boolean)   
  Generate two properties `raw` and `record` where `raw` is the original CSV content and `record` is the parsed array or object; note, it can be used conjointly with the `info` option.
* `relax` (boolean)   
  Preserve quotes inside unquoted field (be warned, it doesn't make coffee).
* [`relax_column_count`](/parse/options/relax_column_count/) (boolean)   
  Discard inconsistent columns count; disabled if null, false or empty; default to `false`.
* `record_delimiter` (chars|array)   
  One or multiple characters used to delimit records; defaults to auto discovery if not provided. Supported auto discovery methods are Linux ("\n"), Apple ("\r") and Windows ("\r\n") row delimiters.
* `rtrim` (boolean)   
  If `true`, ignore whitespace immediately preceding the delimiter (i.e. right-trim all fields). Defaults to `false`.  Does not remove whitespace in a quoted field.
* `skip_empty_lines` (boolean)   
  Don't generate records for empty lines (line matching `/\s*/`), defaults to `false`.
* `skip_lines_with_error` (boolean)   
  Skip a line with error found inside and directly go process the next line.
* `skip_lines_with_empty_values` (boolean)   
  Don't generate records for lines containing empty column values (column matching `/\s*/`), defaults to `false`.
* `to`, (number)   
  Stop handling records after the requested number of records.
* `to_line`, (number)   
  Stop handling records after the requested line number.
* `trim` (boolean)   
  If `true`, ignore whitespace immediately around the delimiter. Defaults to `false`. Does not remove whitespace in a quoted field.

## Choose your style

The code uses snake case as the conventional style for function and variable names. In snake case, all letters are lowercase and underscores separate words. It is however accepted to provide options in camel case. Thus, `record_delimiter` and `recordDelimiter` are equivalent when initialising a new parser. The option will be converted into snake case and exposed as such. For example, in case you need to access the `record_delimiter` option, use `generate().options.record_delimiter` and not `generate().options.recordDelimiter`. Choose the case which best fit your coding style.
