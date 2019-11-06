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

Here is an [example](https://github.com/adaltas/node-csv-stringify/blob/master/samples/option.columns_array_with_objects.js):

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

This example could have been simplified by defining the [column definitions as simple strings](https://github.com/adaltas/node-csv-stringify/blob/master/samples/option.columns_array_with_strings.js):

```js
stringify( [
  { a: '1', b: '2' }
], {
  columns: [ 'a', 'b' ]
}, function(err, data){
  assert.equal(data, '1,2\n')
})
```

If a column is defined but not matching properties is found the data source, the value will be an empty string. If the data source defined a property which is not defined in the column option, the property will simply be disregarded. This is an [example](https://github.com/adaltas/node-csv-stringify/blob/master/samples/option.header_columns.js):

```js
stringify([
  { year: 'XXXX', phone: 'XXX XXXX', nocolumn: 'XXX' },
  { year: 'YYYY', phone: 'YYY YYYY', nocolumn: 'XXX' }
],{
  header: true,
  columns: ['phone', 'year', 'nofield']
}, function(err, data){
  assert.equal(
    data,
    "phone,year,nofield\n" +
    "XXX XXXX,XXXX,\n" +
    "YYY YYYY,YYYY,\n"
  )
})
```

In case you wish to output the headers on the first line, you can use this option conjointly with the `header` option. The column definition object can receive an optional [`header` property which default to the `key` property](https://github.com/adaltas/node-csv-stringify/blob/master/samples/option.header_columns_array_with_strings.js):

```js
stringify( [
  { a: '1', b: '2' }
], {
  header: true,
  columns: [ { key: 'a', header: 'col_a' }, { key: 'b', header: 'col_b' } ]
}, function(err, data){
  assert.equal(data, 'col_a,col_b\n1,2\n')
})
```

This example could have been simplified by defining the [column option as an object](https://github.com/adaltas/node-csv-stringify/blob/master/samples/option.header_columns_object.js). This approach is not recommended as it implies relying on object property order which JavaScript doesn't guarantee.

```js
stringify( [
  { a: '1', b: '2' }
], {
  header: true,
  columns: { 'a': 'col_a', 'b': 'col_b' }
}, function(err, data){
  assert.equal(data, 'col_a,col_b\n1,2\n')
})
```
