---
title: Option skip_lines_with_error
navtitle: skip_lines_with_error
description: Option "skip_lines_with_error" skip to the next line if a parsing error occurred.
keywords: ['csv', 'parse', 'options', 'skip_lines_with_error', 'columns']
sort: 4
---

# Option skip\_lines\_with\_error

The `skip_lines_with_error` option tolerates parsing errors. It skips the records containing an error inside and directly go process the next record.

* Type: `boolean`
* Optional
* Default: `false`
* Since: 1.0.6

Be careful, this functionality can not suit every data set. It implies a good knowledge in your data in the sense that you must be confident that no field contains any record delimiters. By nature, CSV fields can contains records delimiters if quoted. On error, the parser has no indication to know if a record delimiter is one or if it is inside a quoted field or not. Thus, using this option confidently implies that your fields do not contain any records delimiter inside.

A `skip` event is emitted when an error is found and when the record is skipped. The `error` object is passed as the first argument of the event callback.

## Listening to the `skip` event

The [`option.skip_lines_with_error.js` example](https://github.com/adaltas/node-csv-parse/blob/master/samples/option.skip_lines_with_error.js) catch an invalid closing quote error and continue parsing the next records.

```js
const parse = require('csv-parse')
const assert = require('assert')

parser = parse({
  skip_lines_with_error: true
}, function(err, records){
  assert.deepEqual(
    records, [
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
      ['h', 'i', 'j']
    ]
  )
})
parser.on( 'skip', function(err){
  assert(/^Invalid Closing Quote/.test(err.message))
})
parser.write(`
"a","b","c"
"d","e","f"
"invalid"," " ","record"
"h","i","j"
`.trim())
parser.end()
```
