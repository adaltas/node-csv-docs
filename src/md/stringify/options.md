---
title: Options
description: Options relative to the csv-stringify package
keywords: ['csv', 'stringify', 'options']
sort: 3
---

# CSV Stringify options

All options are optional. All the options from the [Node.js Writable Stream API](https://nodejs.org/api/stream.html#stream_constructor_new_stream_writable_options) and the [Node.js Readable Stream API](https://nodejs.org/api/stream.html#stream_new_stream_readable_options) are supported and passed as is.

## Available options

* `columns` (array|object)   
  List of keys when records are provided in the of objects; work with records in the form of arrays based on index position; order matters; auto discovered in the first record when the user write objects, can refer to nested properties of the input JSON, see the "header" option on how to print columns names on the first line.
* `delimiter`   
  Set the field delimiter, one character only, defaults to a comma.   
* `eof`   
  Add the value of "options.rowDelimiter" on the last line, default to true.   
* `escape`   
  Defaults to the escape read option.   
* `header`   
  Display the column names on the first line if the columns option is provided or discovered.   
* `quote`   
  The quote characters, defaults to the `"`, an empty quote value will preserve the original field.   
* `quoted`   
  Boolean, default to false, quote all the non-empty fields even if not required.
* `quotedEmpty`   
  Boolean, no default, quote empty fields?  If specified, overrides `quotedString` for empty strings.
* `quotedString`   
  Boolean, default to false, quote all fields of type string even if not required.
* `rowDelimiter`   
  String used to delimit record rows or a special value; special values are 'auto', 'unix', 'mac', 'windows', 'ascii', 'unicode'; defaults to 'auto' (discovered in source or 'unix' if no source is specified).   
* `formatters`
  Key-value object which defines custom formatters for certain data types.
  * `boolean`
    Custom formatter for boolean values.
  * `date`
    Custom formatter for date values.
  * `number`
    Custom formatter for number values.
  * `object`
    Custom formatter for generic object values.

## Option `columns`

The associate value with the `column` option may come in different flavours: an int, an array or an object. Consider the [tests](https://github.com/adaltas/node-csv-stringify/blob/master/test/options.columns.coffee) as an exhaustive source of inspiration, examples and supported features.

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

In case you wish to output the headers on the first line, you can used this option conjoingly with the `header` option. The column definition object can receive an optional `header` property which default to the `key` property:

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

## Option `formatters`

This example is available with the command `node samples/options.formatters.js`.

```js
const stringify = require('csv-stringify')
const assert = require('assert')

stringify([{
  name: 'foo',
  date: new Date(1970, 0)
},{
  name: 'bar',
  date: new Date(1971, 0)
}],{
  formatters: {
    date: function(value) {
      return value.toISOString()
    }
  }
}, function(err, data) {
  assert.equal(
    data,
    "foo,1969-12-31T23:00:00.000Z\n" +
    "bar,1970-12-31T23:00:00.000Z\n"
  )
})
```

_Run this example with the command `node samples/options.formatters.js`._

## Option `header`

In the [header example](https://github.com/adaltas/node-csv-stringify/blob/master/samples/options.header.js), the value is `true` and the header content is obtained from the keys present in the "columns" option.

```js
const stringify = require('csv-stringify')
const assert = require('assert')

stringify([
  { year: 'XXXX', phone: 'XXX XXXX' },
  { year: 'YYYY', phone: 'YYY YYYY' }
],{
  header: true,
  columns: ['year', 'phone']
}, function(err, data){
  assert.equal(
    data,
    "year,phone\n" +
    "XXXX,XXX XXXX\n" +
    "YYYY,YYY YYYY\n"
  )
})
```

_Run this example with the command `node samples/options.header.js`._
