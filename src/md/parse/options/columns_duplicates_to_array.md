---
title: Option columns_duplicates_to_array
navtitle: columns_duplicates_to_array
description: Option "columns_duplicates_to_array" convert values into an array of values for duplicated column names.
keywords: ['csv', 'parse', 'options', 'columns', 'array', 'duplicates']
---

# Option `columns_duplicates_to_array`

When activated by settings its value to `true`, the `columns_duplicates_to_array` option will convert the return values into arrays of values when multiple columns of the same name are found. This imply the usage of the `columns` mode where records are returned as literal objects.

* Type: `boolean`
* Optional
* Default: `false` (a one character comma)
* Since: 0.0.1
* Related: `columns` &mdash; see [Available Options](/parse/options/#available-options)

## Exemple

The [columns_duplicates_to_array example](https://github.com/adaltas/node-csv-parse/blob/master/samples/option.columns_duplicates_to_array.true.js) contains a CSV data set with two columns named "email". Without the `columns_duplicates_to_array` option, only the last email will be available. Instead, every email is returned in the form of an array:

```js
const parse = require('csv-parse')
const assert = require('assert')

parse(`
friend,username,friend
athos,porthos,aramis
porthos,d_artagnan,athos
`.trim(), {
  columns: true,
  columns_duplicates_to_array: true
}, function(err, records){
  assert.deepEqual(
    records, [{
      username: 'porthos',
      email: ['athos', 'aramis']
    }, {
      username: 'd_artagnan',
      email: ['porthos', 'athos']
    }]
  )
})
```
