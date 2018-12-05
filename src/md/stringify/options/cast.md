---
title: Option cast
navtitle: cast
description: Defines custom cast for certain data types
keywords: ['csv', 'stringify', 'options', 'cast']
sort: 4
---

# Option cast

The `cast` option define multiple function to transform values based on their type. It is an object where the keys represent the type and their associated values are the transform functions.

The following types are supported:

* `boolean`   
  Custom function to transform boolean values.
* `date`   
  Custom function to transform date values.
* `number`   
  Custom function to transform number values.
* `object`   
  Custom function to transform object literals.
* `string`   
  Custom function to transform string values.
  
The functions will be executed with 2 arguments:

* `value` (any)   
  The field value being casted.
* `context` (object)   
  A context object.

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

## Default behavior

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

This example is available with the command `node samples/option.cast.js`.

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
  cast: {
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

_Run this example with the command `node samples/option.cast.js`._