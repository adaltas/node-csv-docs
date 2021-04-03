---
title: Option from
navtitle: from
description: Option "from" handles records starting from a requested number of records.
keywords: ['csv', 'parse', 'options', 'columns']
---

# Option `from`

The `from` option handles records starting from a requested number of records. Count is 1-based, for example, provides 1 (and not 0) to emit first record.

* Type: `number`
* Coercion: `string` to `number`
* Optional
* Default: `1`
* Validation: positive integer
* Since: 4.0.0
* Related: [`to`](/parse/options/to/), [`from_line`](/parse/options/from_line/), `to` &mdash; see [Available Options](/parse/options/#available-options)

## Inferred column names

When the `column` option is active, the first record is treated as a header. It is not accounted as a record. Thus, the first record is used to retrieve the properties names and the count start from the next record.

This [example](https://github.com/adaltas/node-csv-parse/blob/master/samples/option.from.js) read the first `a,b` record to determine column names, skip the next record and return records afterward.

```js
const parse = require('csv-parse')
const assert = require('assert')

parse(`
a,b|1,2|3,4
`.trim(), {
  columns: true,
  record_delimiter: '|',
  from: 2
}, function(err, records){
  assert.deepStrictEqual(
    records, [{
      a: '3',
      b: '4'
    }]
  )
})
```
