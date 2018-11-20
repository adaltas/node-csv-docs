---
title: Option relax_column_count
navtitle: relax_column_count
description: Options relative to the csv-parse package
keywords: ['csv', 'parse', 'options', 'relax_column_count', 'columns']
sort: 4
---

# Option relax_column_count

The `relax_column_count` option tolerates data sets with inconsistent number of fields between records. By default, an error is thrown if two records have a different number of fields.

The option can be used conjointly with the `columns` option. The expected number of fields is determined by the length of the `columns` option, wether it is defined by the user or dynamically discovered.

## Example

The [relax_column_count example](https://github.com/adaltas/node-csv-parse/blob/master/samples/option.relax_column_count.js) expect records with 2 fields. The second line contains less than 2 fields and the third line contains more than 2 fields. Both lines would have generated an error if the `relax_column_count` option was not `true`.

```js
const parse = require('csv-parse')
const assert = require('assert')

parse(`
"a 1","a 2"
"b 1"
"c 1","c 2","c 3"
`.trim(), {
  relax_column_count: true
}, function(err, records){
  assert.deepEqual(
    records, [
      ['a 1', 'a 2'],
      ['b 1'],
      ['c 1', 'c 2', 'c 3']
    ]
  )
})
```
