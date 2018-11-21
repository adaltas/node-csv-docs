---
title: Option columns
navtitle: columns
description: List of properties when records are provided as objects
keywords: ['csv', 'stringify', 'options', 'columns']
sort: 4
---

# Option columns

The associate value with the `column` option may come in different flavours: an int, an array or an object. Consider the [tests](https://github.com/adaltas/node-csv-stringify/blob/master/test/option.columns.coffee) as an exhaustive source of inspiration, examples and supported features.

Once normalised, the final columns option is an array defining each column. Columns are themselves defined as an object with the properties:

* `key` (string)   
  Name of property present in the input records; required.
* `header` (string)   
  Value to be printed in the first header line; to be used conjointly with the `header` option; default to `key`.

Here is an example:

```js
stringify( {
  { a: '1', b: '2' }
}, {
  columns: [ { key: 'a' }, { key: 'b' } ]
}, function(err, data){
  assert.equals(data, '1,2\n')
})
```

The order definition matters. Reverse the order of the column option in the above example to `[ { key: 'b' }, { key: 'a' } ]` will have the consequence to reverse the order of the generated CSV as `2,1\n`.

This example could have been simplified by defining the column definitions as simple strings:

```js
stringify( {
  { a: '1', b: '2' }
}, {
  columns: [ 'a', 'b' ]
}, function(err, data){
  assert.equals(data, '1,2\n')
})
```

In case you wish to output the headers on the first line, you can used this option conjointly with the `header` option. The column definition object can receive an optional `header` property which default to the `key` property:

```js
stringify( {
  { a: '1', b: '2' }
}, {
  header: true,
  columns: [ { key: 'a', header: 'col_a' }, { key: 'b', header: 'col_b' } ]
}, function(err, data){
  assert.equals(data, 'col_a,col_b\n1,2\n')
})
```

This example could have been simplified by defining the column option as an object. This approach is not recommended as it implies relying on object property order which JavaScript doesn't guarantee.

```js
stringify( {
  { a: '1', b: '2' }
}, {
  header: true,
  columns: [ { 'a': 'col_a' }, { 'b': 'col_b' } ]
}, function(err, data){
  assert.equals(data, 'col_a,col_b\n1,2\n')
})
```
