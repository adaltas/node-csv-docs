---
title: Option from_line
navtitle: from_line
description: Option "from_line" handles records starting from a requested line number.
keywords: ['csv', 'parse', 'options', 'columns']
---

# Option `from_line`

The `from_line` option handles records starting from a requested line number. The counting of lines start at `1` which is the default value, thus the first line is `1`.

* Type: `number`
* Coercion: `string` to `number`
* Optional
* Default: `1`
* Since: 4.0.0
* Related: [`to_line`](/parse/options/to_line/), `from`, `to` &mdash; see [Available Options](/parse/options/#available-options)

## Simple example with inferred column names

This [example](https://github.com/adaltas/node-csv-parse/blob/master/samples/option.from_line.js) skip the first lines and return records after the second line. The first records is used to determine column names:

```js
const parse = require('csv-parse')
const assert = require('assert')

parse(`
x,x
a,b
1,2
`.trim(), {
  columns: true,
  from_line: 2
}, function(err, records){
  assert.deepEqual(
    records, [{
      a: '1',
      b: '2'
    }]
  )
})
```
