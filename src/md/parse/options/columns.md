---
title: Option columns
navtitle: columns
description: Option "columns" generate records as object literals instead of arrays.
keywords: ['csv', 'parse', 'options', 'columns']
---

# Option `columns`

The `columns` option generates record in the form of object literals.

* Type: `boolean` | `array` | `function`
* Optional
* Default: `false`
* Since: early days
* Related: [`group_columns_by_name`](/parse/options/group_columns_by_name/) &mdash; see [Available Options](/parse/options/#available-options)

By default, the parser generates records in the form of arrays. Its associate value may takes multiple forms:

* [`true`](#as-true)    
  Infer the columns names from the first line.
* [`array`](#as-an-array)    
  Declare the column definition before processing the data.
* [`function`](#as-a-function)   
  Obtain the columns definition dynamically from the user.

It is possible to skip one or multiple fields by passing the value equal to `undefined`, `null` or `false` in the definition array.

When multiple columns share the same name, only the last value is retained. Previous values are swallowed. The [`group_columns_by_name` option](/parse/options/group_columns_by_name/) detects duplicate column names and inserts all the values into an array.

## As true

If the value is `true`, the first record present in the data set is treated as a header. No record is generated and each field defines a new property.

The [columns example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.columns.true.js) generates record literals whose properties match the first line of the data set.

`embed:packages/csv-parse/samples/option.columns.true.js`

## As an array

If the value is an array, to each element corresponds a property. The values may be a string or an object literal with the `name` property.

The [columns example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.columns.array.js) generates record literals whose properties match the values of `columns` option.

`embed:packages/csv-parse/samples/option.columns.array.js`

## As a function

If the value is a function, the user is responsible for returning the list of columns.  The first line is treated as a header and will not generate a record. The function receives the first line as a list of fields.

The [columns example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.columns.function.js) converts each field of the first to upper case.

`embed:packages/csv-parse/samples/option.columns.function.js`
