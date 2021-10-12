---
title: Option skip_empty_lines
navtitle: skip_empty_lines
description: Option "skip_empty_lines" skips any line which is empty.
keywords: ['csv', 'parse', 'options', 'skip_lines_with_error', 'columns']
---

# Option `skip_empty_lines`

The `skip_empty_lines` skips any line which is empty.

* Type: `boolean`
* Optional
* Default: `false`
* Since: 0.0.5
* Related: [`skip_lines_with_error`](/parse/options/skip_lines_with_error/), [`trim`](/parse/options/trim/) &mdash; see [Available Options](/parse/options/#available-options)

## Example

The [`option.skip_empty_line.js` option example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.skip_empty_line.js) activates the option by setting its value to `true`:

```js
const parse = require('csv-parse/lib/sync')
const assert = require('assert')

const records = parse(`
"a","b","c"

"d","e","f"
`, {
  skip_empty_lines: true
})

assert.deepStrictEqual(
  records, [
    ['a', 'b', 'c'],
    ['d', 'e', 'f']
  ]
)
```

## Whitespace characters

The line must be completely empty, without any characters including spaces and tabs. If you happens to have such characters, you can [associate the `skip_empty_lines` option with the `trim` option](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.skip_empty_line.trim.js):

```js
const parse = require('csv-parse/lib/sync')
const assert = require('assert')

const records = parse(`
"a","b","c"
\t
"d","e","f"
`, {
  skip_empty_lines: true,
  trim: true
})

assert.deepStrictEqual(
  records, [
    ['a', 'b', 'c'],
    ['d', 'e', 'f']
  ]
)
```

Another possibility includes using a combination of `skip_lines_with_empty_values` and `relax_column_count`.
