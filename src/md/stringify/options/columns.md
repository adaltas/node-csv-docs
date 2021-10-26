---
title: Option columns
navtitle: columns
description: List of properties when records are provided as objects
keywords: ['csv', 'stringify', 'options', 'columns']
---

# Option `columns`

The associate value with the `column` option may come in different flavours: an int, an array or an object. Consider the [tests](https://github.com/adaltas/node-csv-stringify/blob/master/test/option.columns.coffee) as an exhaustive source of inspiration, examples and supported features.

Once normalised, the final columns option is an array defining each column. Columns are themselves defined as an object with the properties:

* `key` (string)   
  Name of property present in the input records; required.
* `header` (string)   
  Value to be printed in the first header line; to be used conjointly with the `header` option; default to `key`.

Here is an [example](https://github.com/adaltas/node-csv/blob/master/packages/csv-stringify/samples/option.columns_array_with_objects.js):

```js
stringify( [
  { a: '1', b: '2' }
], {
  columns: [ { key: 'a' }, { key: 'b' } ]
}, function(err, data){
  assert.equal(data, '1,2\n')
})
```

The order definition matters. Reverse the order of the column option in the above example to `[ { key: 'b' }, { key: 'a' } ]` will have the consequence to reverse the order of the generated CSV as `2,1\n`.

This example could have been simplified by defining the [column definitions as simple strings](https://github.com/adaltas/node-csv/blob/master/packages/csv-stringify/samples/option.columns_array_with_strings.js):

```js
stringify( [
  { a: '1', b: '2' }
], {
  columns: [ 'a', 'b' ]
}, function(err, data){
  assert.equal(data, '1,2\n')
})
```

## Undefined properties

If a column is defined but it is not matching any properties in the data source, the value will be an empty string. If the data source defined a property which is not defined in the column option, the property will simply be disregarded. This is an [example](https://github.com/adaltas/node-csv/blob/master/packages/csv-stringify/samples/option.columns_undefined.js):

```js
stringify([
  { year: 'XXXX', phone: 'XXX XXXX', nocolumn: 'XXX' },
  { year: 'YYYY', phone: 'YYY YYYY', nocolumn: 'YYY' }
],{
  columns: ['phone', 'year', 'nofield']
}, function(err, data){
  assert.equal(
    data,
    "XXX XXXX,XXXX,\n" +
    "YYY YYYY,YYYY,\n"
  )
})
```
