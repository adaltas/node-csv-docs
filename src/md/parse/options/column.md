---
title: Option columns
navtitle: columns
description: Options relative to the csv-parse package
keywords: ['csv', 'parse', 'options', 'delimiter', 'columns', 'comment', 'escape']
sort: 3
---

# Option `columns`

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
