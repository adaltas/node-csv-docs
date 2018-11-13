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

* `cast` (boolean|function)   
  If true, the parser will attempt to convert input string to native types. If a function, receive the value as first argument, a context as second argument and return a new value. This option was named `auto_parse` until version 2. More information about the context properties is available below.
* `cast_date` (boolean|function)   
  If true, the parser will attempt to convert input string to dates. If a function, receive the value as argument and return a new value. It requires the "auto_parse" option. This option was named `auto_parse_date` until version 2. Be careful, it relies on `Date.parse`.
* `columns` (array|boolean|function)   
  List of fields as an array, a user defined callback accepting the first line and returning the column names, or `true` if auto-discovered in the first CSV line. Defaults to `null`. Affects the result data set in the sense that records will be objects instead of arrays. A value "false" "null", or "undefined" inside the column array skips the column from the output.
* `comment` (char)   
  Treat all the characters after this one as a comment. Defaults to `''` (disabled).
* `delimiter` (string|Buffer)   
  Set the field delimiter. One or multiple character. Defaults to `","` (comma).
* `escape` (string|Buffer)   
  Set the escape character. One character/byte only, Only apply to quote and escape characters inside quoted fields. Defaults to double quote.
* `info` (boolean)   
  Generate two properties `info` and `record` where `info` is a snapshot of the info object at the time the record was created and `record` is the parsed array or object; note, it can be used conjointly with the `raw` option.
* `from` (number)   
  Start handling records from the requested number of records.
* `from_line` (number)   
  Start handling records from the requested line number.
* `ltrim` (boolean)   
  If `true`, ignore whitespace immediately following the delimiter (i.e. left-trim all fields). Defaults to `false`. Does not remove whitespace in a quoted field.
* `max_record_size` (int)   
  Maximum numer of characters to be contained in the field and line buffers before an exception is raised. Used to guard against a wrong `delimiter` or `record_delimiter`. Default to 128,000 characters.
* `objname` (string)   
  Name of header-record title to name objects by.
* `quote` (char|boolean)   
  Optional character surrounding a field. One character only. Disabled if null, false or empty. Defaults to double quote.
* `raw` (boolean)   
  Generate two properties `raw` and `record` where `raw` is the original CSV content and `record` is the parsed array or object; note, it can be used conjointly with the `info` option.
* `relax` (boolean)   
  Preserve quotes inside unquoted field (be warned, it doesn't make coffee).
* `relax_column_count` (boolean)   
  Discard inconsistent columns count. Default to `false`.
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

## Option `cast`

The `cast` option accept a function. It gives full control over a field. It is possible to transform its value or change its type. The [`test/options.cast.coffee`](https://github.com/adaltas/node-csv-parse/blob/master/test/options.cast.coffee) test provides insights on how to use it and its supported functionalities.

The function is called with 2 arguments: the field value and a context object. The context object accept the following properties:

* `column`   
  The column name if the `columns` options is defined or the field position.
* `empty_lines`   
  Internal counter of empty lines encountered until this field.
* `header`   
  A boolean indicating if the records being parsed is the header.
* `index`   
  The field position.
* `quoting`   
  A boolean indicating if the field was surrounded by quotes.
* `lines`   
  The number of lines which have been processed including the current line.
* `records`   
  The number of records which have been fully parsed. It was named `count` until version 3.
* `skipped_lines`   
  Number of non uniform lines skipped when relax_column_count is true.

The [cast example](https://github.com/adaltas/node-csv-parse/blob/master/samples/options.cast.js) uses the context to transform the first filed into a date and replace the second field with the injected context:

```js
const parse = require('csv-parse/lib/sync')
const assert = require('assert')

const data = `
  2000-01-01,date1
  2050-11-27,date2
`.trim()
const records = parse(data, {
  cast: function(value, context){
    if(context.index === 0){
      return `${value}T05:00:00.000Z`
    }else{
      return context
    }
  },
  trim: true
})
assert.deepEqual(records, [
  [ '2000-01-01T05:00:00.000Z', {
    column: 1, empty_lines: 0, header: false, index: 1,
    quoting: false, lines: 1, records: 0, skipped_lines: 0
  } ],
  [ '2050-11-27T05:00:00.000Z', {
    column: 1, empty_lines: 0, header: false, index: 1,
    quoting: false, lines: 2, records: 1, skipped_lines: 0
  } ]
])
```

## Option `columns`

By default, the parser generates records in the form of arrays. The [columns example](https://github.com/adaltas/node-csv-parse/blob/master/samples/options.columns.js) illustrates how to generate records in the form of objects using the "columns" option.

This example is available with the command `node samples/options.columns.js`.

```js
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
