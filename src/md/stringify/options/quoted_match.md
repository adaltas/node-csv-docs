---
title: Option quoted_match
navtitle: quoted_match
description: Quote all fields matching a regular expression.
keywords: ['csv', 'stringify', 'options', 'quotes', 'delimiter', 'escape']
---

# Option `quoted_match`

Quote all fields matching a regular expression.

* Type: `boolean`
* Optional
* Default: `false`
* Since: 5.0.0
* Related: [`quoted_empty`](/stringify/options/quoted_empty/), [`quoted_string`](/stringify/options/quoted_string/), [`quoted`](/stringify/options/quoted/)  &mdash; see [Available Options](/stringify/options/#available-options)

Note, several options are available to control when to quote fields under certain conditions. Make sure to review the alternatives.

## Example with a string

In the [quoted_match_string example](https://github.com/adaltas/node-csv-strinigify/blob/master/samples/option.quoted_match_string.js), fields containing the string `"."` are quoted.

```js
const stringify = require('../lib')
const assert = require('assert')

stringify([
  ['a value', '.', 'value.with.dot'],
], {
  quoted_match: '.'
}, function(err, records){
  assert.equal(records, 'a value,".","value.with.dot"\n')
})
```

## Example with a regular expression

In the [quoted_match_regexp example](https://github.com/adaltas/node-csv-strinigify/blob/master/samples/option.quoted_match_regexp.js), fields matching the regular expression `/\./` are quoted.

```js
const stringify = require('../lib')
const assert = require('assert')

stringify([
  ['a value', '.', 'value.with.dot'],
], {
  quoted_match: /\./
}, function(err, records){
  assert.equal(records, 'a value,".","value.with.dot"\n')
})
```
