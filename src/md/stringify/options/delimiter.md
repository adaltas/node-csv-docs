---
title: Option delimiter
navtitle: delimiter
description: Set the delimiter between fields of a record
keywords: ['csv', 'stringify', 'options', 'delimiter']
sort: 4
---

# Option delimiter

The `delimiter` option set the delimiter between the fields of a record. It can be one or multiple characters. The default value is a comma `,`.

## Default behavior

by default the generated CSV data set will have field value separated by `,`:

```js
const stringify = require('csv-stringify')
const assert = require('assert')

stringify([
  ['1', '2'],
  ['3', '4']
], function(err, records){
  assert.equal(records, '1,2\n3,4\n')
})
```

See [`csv-stringify/samples/option.delimiter_single.js`](https://github.com/adaltas/node-csv-stringify/blob/master/samples/option.delimiter_single.js)

## Custom behaviour

One or multiple characters can be defined to customise the field delimiter:

```js
const stringify = require('csv-stringify')
const assert = require('assert')

stringify([
  ['1', '2'],
  ['3', '4']
], {
  delimiter: ':)'
}, function(err, records){
  assert.equal(records, '1:)2\n3:)4\n')
})
```

See [`csv-stringify/samples/option.delimiter_multiple.js`](https://github.com/adaltas/node-csv-stringify/blob/master/samples/option.delimiter_multiple.js)
