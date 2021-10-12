---
title: Option rtrim
navtitle: rtrim
description: Option "rtrim" ignore whitespaces from the right side of a CSV field.
keywords: ['csv', 'parse', 'options', 'columns']
---

# Option `rtrim`

The `rtrim` option ignore whitespace characters from the right side of a CSV field. Defaults to `false`. It does not remove whitespace present inside the quotes of a field.

* Type: `boolean`
* Optional
* Default: `false`
* Since: early days
* Related: [`trim`](/parse/options/trim/), `rtrim` &mdash; see [Available Options](/parse/options/#available-options)

Refer to the [`trim`](/parse/options/trim/) documentation to learn about which characters are interpreted as whitespaces.

## Example

This [example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.rtrim.js) declare spaces around fields at multiple locations. The ones on the right side are trimmed while the other ones are preserved.

```js
const parse = require('csv-parse/lib/sync')
const assert = require('assert')

const data = [
  'a ,1',
  'b, 2 ',
  ' c,3'
].join('\n')
const records = parse(data, {
  rtrim: true
})
assert.deepStrictEqual(
  records, [
    [ 'a', '1' ],
    [ 'b', ' 2' ],
    [ ' c', '3' ]
  ]
)
```
