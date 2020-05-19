---
title: Option delimiter
navtitle: delimiter
description: Option "delimiter" indicates how to split a record into multiple fields.
keywords: ['csv', 'parse', 'options', 'delimiter', 'separator', 'tsv', 'fields', 'records']
---

# Option `delimiter`

Defines the character(s) used to delimitate the fields inside a record. A single value or an array of values are accepted. A value can be a string or a Buffer. It can not be empty, and it can contain several characters. When not defined, the default value is a comma.

* Type: `string|Buffer|[string|Buffer]`
* Optional
* Default: `","` (a one character comma)
* Since: 0.0.1
* Related: `record_delimiter`, `quote`, `escape`  &mdash; see [Available Options](/parse/options/#available-options)

In the data, it is not possible to escape a delimiter. A field must be quoted to ensure the delimiter value it contains is not interpreted.

# Example of single-value delimiter

In the [delimiter example](https://github.com/adaltas/node-csv-parse/blob/master/samples/option.delimiter.js), fields are separated by a two characters delimiter value.

```js
const parse = require('csv-parse/lib/sync')
const assert = require('assert')

const data = 'a key => a value'
const records = parse(data, {
  delimiter: "=>",
  trim: true
})
assert.deepEqual(records, [
  [ "a key", "a value" ]
])
```

# Example of an array of values
An example of providing multiple delimiter values for parsing.  Also shows:
* the `columns` option that is used for naming the fields of each record
* quoting field values with double quotes to avoid delimiting
* how trim affects whitespace on values

```js
const parse = require('csv-parse/lib/sync')

const data = `color name::red::green::blue
Cyan :: 0 :: 255 :: 255
"Yellow":: " 255 " \t  "255"  ::"0"
Hot Pink\t255\t" :: 105"\t180`

const records = parse(data, {
  delimiter: ["::","\t"],
  trim: true,
  columns: true,
})

records.forEach((rec,index) => {
  let indent = ""
  Object.entries(rec).forEach(([key, value]) => {
    console.log(`${indent}${key}: <${value}>`)
    indent = (indent.length === 0 ? "    " : indent)
  })
})

// Output is:
//
//  color name: <Cyan>
//      red: <0>
//      green: <255>
//      blue: <255>
//  color name: <Yellow>
//      red: < 255 >
//      green: <255>
//      blue: <0>
//  color name: <Hot Pink>
//      red: <255>
//      green: < :: 105>
//      blue: <180>
```
