---
title: Option delimiter
navtitle: delimiter
description: Option "delimiter" indicates how to split a record into multiple fields.
keywords: ['csv', 'parse', 'options', 'delimiter', 'separator', 'tsv', 'fields', 'records']
---

# Option `delimiter`

It defines the characters used to delimitate the fields inside a record. One or multiple values are accepted. A value can be a string or a Buffer. It can not be empty but it can contains several characters. When not defined, the default value is a comma.

* Type: `string|Buffer|[string|Buffer]`
* Optional
* Default: `","` (a one character comma)
* Since: 0.0.1
* Related: `record_delimiter`, `quote`, `escape`  &mdash; see [Available Options](/parse/options/#available-options)

It is not possible to escape a delimiter. A field must be quoted to ensure the delimiter it contains is not interpreted.

# Example

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
