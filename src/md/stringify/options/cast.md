---
title: Option cast
navtitle: cast
description: Defines custom cast for certain data types
keywords: ['csv', 'stringify', 'options', 'cast']
---

# Option `cast`

The `cast` option define multiple function to transform values based on their type. It is an object where the keys represent the type and their associated values are the transform functions.

The following types are supported:

* `bigint`   
  Custom function to transform `BigInt` values.
* `boolean`   
  Custom function to transform `boolean` values.
* `date`   
  Custom function to transform `Date` values.
* `number`   
  Custom function to transform `Number` values.
* `object`   
  Custom function to transform `Object` literals.
* `string`   
  Custom function to transform `String` values.
  
The functions will be executed with 2 arguments:

* `value` (any)   
  The field value being casted.
* `context` (object)   
  A context object.

The accepted return values are:
* `null`, `undefined`   
  The field will be empty.
* `string`   
  The string value of the field.
* `object`   
  An object containing the `value` property of the field as a well as options applied at the field level in case of a need to overwrite global options.

## Context

The context object is passed as the second argument of the user provided function. It contains the following properties:

* `column` (number|string)   
  The column name if the columns options is defined or the column name was discovered or the field position.
* `header` (boolean)   
  A boolean indicating if the provided value is a part of the header.
* `index` (number)   
  The field position starting at 0.
* `records` (number)   
  The number of records which have been fully processed.

## Field level options

By returning an object instead of a string, a `cast` function can overwrite the default options on a field level. The field value must be provided in the `value` property. The supported options are: `delimiter`, `escape`, `quote`, `quoted`, `quoted_empty`, `quoted_string`, `quoted_match` and `record_delimiter`.

The following [`cast` example](https://github.com/adaltas/node-csv/blob/master/packages/csv-stringify/samples/option.cast.js) disable the quoting of the field, leaving it to the responsibility of the `cast` function:

`embed:packages/csv-stringify/samples/option.cast.js` 

_Run this example with the command `node samples/option.cast.js`._

## Default behaviour

### boolean

A value of `true` is converted to the string `1` while a value of `false` to converted to an empty string. The default implementation is:

```js
function(value){
  return value ? '1': ''
}
```

### date

Date objects are converted to timestamps. The default implementation is:

```js
function(value){
  return '' + value.getTime()
}
```

### number

Number are converted into string. The default implementation is:

```js
function(value){
  return '' + value
}
```

### object

Object literals are converted into JSON strings. The default implementation is:

```js
function(value){
  return JSON.stringify(value)
}
```

### string   

String are as returned without any modification. The default implementation is:

```js
function(value){
  return value
}
```

## Casting a date

This [`cast` example](https://github.com/adaltas/node-csv/blob/master/packages/csv-stringify/samples/option.cast.js) convert date objects into ISO 8601 dates.

`embed:packages/csv-stringify/samples/option.cast.date.js`

_Run this example with the command `node samples/option.cast.date.js`._
