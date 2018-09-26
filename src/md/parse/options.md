---
title: Options
description: Options relative to the csv-parse package
keywords: ['csv', 'parse', 'options']
sort: 3
---

# CSV Parse options

## Introduction

All options are optional. The options from the [Node.js Stream Writable](https://nodejs.org/api/stream.html#stream_constructor_new_stream_writable_options) are also supported and passed as is. Only the "objectMode" is overwritten to always equal "true".

## Available options

* `auto_parse` (boolean|function)   
  Deprecated, alias of "cast".
* `auto_parse_date` (boolean|function)   
  Deprecated, alias of "cast_date".
* `cast` (boolean|function)   
  If true, the parser will attempt to convert input string to native types. If a function, receive the value as first argument, a context as second argument and return a new value. More information about the context properties is available below.
* `cast_date` (boolean|function)   
  If true, the parser will attempt to convert input string to dates. If a function, receive the value as argument and return a new value. It requires the "auto_parse" option. Be careful, it relies on `Date.parse`.
* `columns` (array|boolean|function)   
  List of fields as an array, a user defined callback accepting the first line and returning the column names, or `true` if auto-discovered in the first CSV line. Defaults to `null`. Affects the result data set in the sense that records will be objects instead of arrays. A value "false" "null", or "undefined" inside the column array skips the column from the output.
* `comment` (char)   
  Treat all the characters after this one as a comment. Defaults to `''` (disabled).
* `delimiter` (char)   
  Set the field delimiter. One character only. Defaults to `","` (comma).
* `escape` (char)   
  Set the escape character. One character only. Defaults to double quote.
* `from`, (number)   
  Start returning records from a particular line.
* `ltrim` (boolean)   
  If `true`, ignore whitespace immediately following the delimiter (i.e. left-trim all fields). Defaults to `false`. Does not remove whitespace in a quoted field.
* `max_limit_on_data_read` (int)   
  Maximum numer of characters to be contained in the field and line buffers before an exception is raised. Used to guard against a wrong `delimiter` or `rowDelimiter`. Default to 128,000 characters.
* `objname` (string)   
  Name of header-record title to name objects by.
* `quote` (char|boolean)   
  Optional character surrounding a field. One character only. Disabled if null, false or empty. Defaults to double quote.
* `relax` (boolean)   
  Preserve quotes inside unquoted field (be warned, it doesn't make coffee).
* `relax_column_count` (boolean)   
  Discard inconsistent columns count. Default to `false`.
* `raw` (boolean)   
  Generate two properties `raw` and `row` where `raw` is the original CSV row content and `row` is the parsed array or object.
* `rowDelimiter` (chars|array)   
  One or multiple characters used to delimit record rows; defaults to auto discovery if not provided. Suported auto disvovery method are Linux ("\n"), Apple ("\r") and Windows ("\r\n") row delimiters.
* `rtrim` (boolean)   
  If `true`, ignore whitespace immediately preceding the delimiter (i.e. right-trim all fields). Defaults to `false`.  Does not remove whitespace in a quoted field.
* `skip_empty_lines` (boolean)   
  Don't generate records for empty lines (line matching `/\s*/`), defaults to `false`.
* `skip_lines_with_error` (boolean)   
  Skip a line with error found inside and directly go process the next line.
* `skip_lines_with_empty_values` (boolean)   
  Don't generate records for lines containing empty column values (column matching `/\s*/`), defaults to `false`.
* `to`, (number)   
  Stop returning records after a particular line.
* `trim` (boolean)   
  If `true`, ignore whitespace immediately around the delimiter. Defaults to `false`. Does not remove whitespace in a quoted field.

## Casting context

The `cast` option accept a function which provides full control over a field.
The function is called with 2 arguments: the field value and a context object.
The context object accept the following properties: 

* `column`   
  The column name if the `columns` options is defined or the field index.
* `count`   
  The number of records which have been fully parsed.
* `index`   
  The field position.
* `header`   
  A boolean indicating if the records being parsed is the header.
* `quoting`   
  A boolean indicating if the field was surrounded by quotes.
* `lines`   
  The number of lines which have been processed including the current line.

## Option `columns`

By default, the parser generates records in the form of arrays. The [columns example](https://github.com/adaltas/node-csv-parse/blob/master/samples/options.columns.js)
illustrates how to generate records in the form of objects using the "columns" option.

This example is available with the command `node samples/options.columns.js`.

```javascript
const parse = require('csv-parse')
const assert = require('assert')

const records = parse(`
  "key_1","key_2"
  "value 1","value 2"
`, {
  columns: true,
  trim: true,
  skip_empty_lines: true
}, function(err, records){
  assert.deepEqual(
    records, [{
      key_1: 'value 1',
      key_2: 'value 2'
    }]
  )
})
```
