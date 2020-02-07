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

* [`bom`](/parse/options/bom/) (boolean)   
  _Since version 4.4.0_   
  If true, detect and exclude the byte order mark (BOM) from the CSV input if present.
* [`cast`](/parse/options/cast/) (boolean|function)   
  _Since version 2.2.0_   
  Alter the value of a field. If true, the parser will attempt to convert input strings to native types. A function must return the new value and the received arguments are the value to cast and the context object. This option was named `auto_parse` until version 2.
* `cast_date` (boolean|function)   
  _Since version 1.0.5_   
  If true, the parser will attempt to convert input string to dates. A function return a new value and the receive argument is the value to cast. It requires the `cast` option to be active. This option was named `auto_parse_date` until version 2. Be careful, it relies on [`Date.parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).
* [`columns`](/parse/options/columns/) (array|boolean|function)   
  _Since early days_   
  Generate records as object literals instead of arrays. List of fields as an array, a user defined callback accepting the first line and returning the column names, or `true` if auto-discovered in the first CSV line. Defaults to `null`. Affects the result data set in the sense that records will be objects instead of arrays. A value "false" "null", or "undefined" inside the column array skips the column from the output.
* `comment` (string|buffer)   
  _Since early days_   
  Treat all the characters after this one as a comment; one or multiple characters; disabled by default by defining an empty string `''`.
* `delimiter` (string|Buffer)   
  _Since early days_   
  Set the field delimiter as one or multiple characters. It defaults to `,` (comma).
* `escape` (string|Buffer)   
  _Since early days_   
  Set the escape character as one character/byte only. It only applies to quote and escape characters inside quoted fields and it defaults to `"` (double quote).
* `from` (number)   
  _Since version 1.2.0_   
  Start handling records from the requested number of records. Count is 1-based, for example, provides `1` (and not `0`) to emit first record.
* [`from_line`](/parse/options/from_line/) (number)   
  _Since version 4.0.0_   
  Start handling records from the requested line number.
* `info` (boolean)   
  _Since version 4.0.0_   
  Generate two properties `info` and `record` where `info` is a snapshot of the info object at the time the record was created and `record` is the parsed array or object; note, it can be used conjointly with the `raw` option.
* `ltrim` (boolean)   
  _Since early days_   
  If `true`, ignore whitespace immediately following the delimiter (i.e. left-trim all fields). Defaults to `false`. Does not remove whitespace in a quoted field.
* [`max_record_size`](/parse/options/max_record_size/) (integer)   
  _Since version 4.0.0_   
  Maximum number of characters to be contained in the field and line buffers before an exception is raised. It was previously named "max_limit_on_data_read".
* `objname` (string|Buffer)   
  _Since early days_   
  Name of header-record title to name objects by; the string or Buffer value must not be empty and it must match a header value.
* [`on_record`](/parse/options/on_record/) (function)   
  _Since 4.7.0_   
  Alter and filter records by executing a user defined function.
* `quote` (char|Buffer|boolean)   
  _Since early days_   
  Optional character surrounding a field as one character only; disabled if null, false or empty; defaults to double quote.
* `raw` (boolean)   
  _Since version 1.1.6_   
  Generate two properties `raw` and `record` where `raw` is the original CSV content and `record` is the parsed array or object; note, it can be used conjointly with the `info` option.
* `relax` (boolean)   
  _Since early days_   
  Preserve quotes inside unquoted field (be warned, it doesn't make coffee).
* [`relax_column_count`](/parse/options/relax_column_count/) (boolean)   
  _Since version 1.0.6_   
  Discard inconsistent columns count; disabled if null, false or empty; default to `false`.
* [`relax_column_count_less`](/parse/options/relax_column_count/) (boolean)   
  _Since version 4.8.0_   
  Similar to `relax_column_count` but only apply when the record contains less fields than expected.
* [`relax_column_count_more`](/parse/options/relax_column_count/) (boolean)   
  _Since version 4.8.0_   
  Similar to `relax_column_count` but only apply when the record contains more fields than expected.
* `record_delimiter` (chars|array)   
  _Since version 4.0.0_   
  One or multiple characters used to delimit records; defaults to auto discovery if not provided. Supported auto discovery methods are Linux ("\n"), Apple ("\r") and Windows ("\r\n") row delimiters. It was previously named `rowDelimiter`.
* `rtrim` (boolean)   
  _Since early days_   
  If `true`, ignore whitespace immediately preceding the delimiter (i.e. right-trim all fields). Defaults to `false`.  Does not remove whitespace in a quoted field.
* `skip_empty_lines` (boolean)   
  _Since version 0.0.5_   
  Don't generate records for empty lines (line matching `/\s*/`), defaults to `false`.
* [`skip_lines_with_error`](/parse/options/skip_lines_with_error/) (boolean)   
  _Since version 2.1.0_   
  Skip a line with error found inside and directly go process the next line.
* `skip_lines_with_empty_values` (boolean)   
  _Since version 1.1.8_   
  Don't generate records for lines containing empty column values (column matching `/\s*/`), empty Buffer or equals to `null` and `undefined` if their value was casted, defaults to `false`.
* `to` (number)   
  _Since version 1.2.0_   
  Stop handling records after the requested number of records.
* `to_line` (number)   
  _Since version 4.0.0_   
  Stop handling records after the requested line number.
* `trim` (boolean)   
  _Since early days_   
  If `true`, ignore whitespace immediately around the delimiter. Defaults to `false`. Does not remove whitespace in a quoted field.

## Choose your style

The code uses snake case as the conventional style for function and variable names. In snake case, all letters are lowercase and underscores separate words. It is however accepted to provide options in camel case. Thus, `record_delimiter` and `recordDelimiter` are equivalent when initialising a new parser. The option will be converted into snake case and exposed as such. For example, in case you need to access the `record_delimiter` option, use `generate().options.record_delimiter` and not `generate().options.recordDelimiter`. Choose the case which best fit your coding style.
