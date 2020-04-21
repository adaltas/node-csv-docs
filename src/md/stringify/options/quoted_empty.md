---
title: Option quoted_empty
navtitle: quoted_empty
description: Quote empty fields.
keywords: ['csv', 'stringify', 'options', 'quotes', 'delimiter', 'escape']
---

# Option `quoted_empty`

Quote empty strings and overrides `quoted_string` on empty strings when defined. The behavior of this option is the opposite of the `quoted` option and can be used conjointly to quote every fields.

* Type: `boolean`
* Optional
* Default: `false`
* Since: 0.0.4
* Related: [`quoted_match`](/stringify/options/quoted_match/), [`quoted_string`](/stringify/options/quoted_string/), [`quoted`](/stringify/options/quoted/)

Note, several options are available to control when to quote fields under certain conditions. Make sure to review the alternatives.

## Example

In the [quoted_empty example](https://github.com/adaltas/node-csv-strinigify/blob/master/samples/option.quoted.js), every field evaluated as empty is quoted. It includes an empty string and values of `false`, `null` and `undefined`.

```js
const stringify = require('../lib')
const assert = require('assert')

stringify([
  ['1', ''],
  [false, '2'],
  ['3', null],
  [undefined, '4']
], {
  quoted_empty: true
}, function(err, records){
  assert.equal(records, '1,""\n"",2\n3,""\n"",4\n')
})
```
