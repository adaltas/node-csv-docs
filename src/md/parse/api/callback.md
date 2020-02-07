---
title: Callback API
navtitle: Callback
description: The callback API buffers all the emitted data from the stream API into a single object which is passed to a user provided function.
keywords: ['csv', 'parse', 'api', 'callback', 'function', 'udf', 'stream']
sort: 2.2
---

# Callback API

The signature is `parse(data, [options], callback)`.

The [callback example](https://github.com/adaltas/node-csv-parse/blob/master/samples/api.callback.js) takes the CSV string in the first argument and a user callback in the second argument. The callback will received any error thrown by the CSV parser or an array of records object in the second argument. returns an array inside a user-provided callback.

```js
const parse = require('csv-parse')
const assert = require('assert')

const input = '#Welcome\n"1","2","3","4"\n"a","b","c","d"'
parse(input, {
  comment: '#'
}, function(err, output){
  assert.deepEqual(
    output,
    [ [ '1', '2', '3', '4' ], [ 'a', 'b', 'c', 'd' ] ]
  )
})
```
