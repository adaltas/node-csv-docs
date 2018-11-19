---
title: Option cast
navtitle: cast
description: Options relative to the csv-parse package
keywords: ['csv', 'parse', 'options', 'delimiter', 'columns', 'comment', 'escape']
sort: 4
---

# Option cast

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
