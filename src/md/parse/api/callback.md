---
title: Callback API
navtitle: Callback
description: The callback API buffers all the emitted data from the stream API into a single object which is passed to a user provided function.
keywords: ['csv', 'parse', 'api', 'callback', 'function', 'udf', 'stream']
sort: 2.2
---

# Callback API

The signature is `parse(data, [options], callback)`.

The [callback example](https://github.com/adaltas/node-csv-parse/blob/master/samples/api.callback.js) takes the CSV string in the first argument (`input`), options in the second argument, and a user callback in the third argument. The callback receives any error thrown by the CSV parser in the first parameter (`err`), or an array of records in the second argument (`output`). It returns an array.

```js
const parse = require('csv-parse')
const assert = require('assert')

const input = '#Welcome\n"1","2","3","4"\n"a","b","c","d"'
parse(input, {
  comment: '#'
}, function(err, output){
  assert.deepStrictEqual(
    output,
    [ [ '1', '2', '3', '4' ], [ 'a', 'b', 'c', 'd' ] ]
  )
})
```
