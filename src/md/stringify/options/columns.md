---
title: Option columns
navtitle: columns
description: List of properties when records are provided as objects
keywords: ['csv', 'stringify', 'options', 'columns']
---

# Option `columns`

The `columns` option controls the generation of records at the field level. For example, it is used to name headers, to order columns in the generated records, and to filter columns. It applies when records are provided as objects and arrays.

Consider the [tests](https://github.com/adaltas/node-csv-stringify/blob/master/test/option.columns.coffee) as an exhaustive source of inspiration, examples and supported features. Also, refer to the ["header" option](/stringify/options/group_columns_by_name/) to learn how to print columns names on the first line.

* Type: `array` | `object`
* Optional
* Default: `undefined`
* Since: 0.0.1
* Related: [`header`](/stringify/options/group_columns_by_name/) &mdash; see [Available Options](/stringify/options/#available-options)

## Usage

The `columns` option can be an array of `{ 'key': string, 'header': string }` objects, or an array of column names (strings).

As objects, `columns` are defined with the properties:

* `key` (string)   
  Name of property present in the input records; required.
* `header` (string)   
  Value to be printed in the first header line; to be used conjointly with the `header` option; defaults to `key`.

Here is an [example](https://github.com/adaltas/node-csv/blob/master/packages/csv-stringify/samples/option.columns_array_with_objects.js):

`embed:packages/csv-stringify/samples/option.columns_array_with_objects.js`

A shorter variation is to declare column elements as strings. The previous example is simplified by defining [a column as a simple string](https://github.com/adaltas/node-csv/blob/master/packages/csv-stringify/samples/option.columns_array_with_strings.js):

`embed:packages/csv-stringify/samples/option.columns_array_with_strings.js`

## Order

The order definition matters. It reflects the order of the generated records. Reversing the order of the columns option in the above example to `[ { key: 'b' }, { key: 'a' } ]` results in reversed generated CSV data: `2,1\n`.

With records ingested in the form of objects, it is possible to re-order all columns. Columns keys are also auto discovered in the first record unless defined.

With records ingested in the form of arrays, order reflects the field positions. It is not possible to re-order columns, only to filter out the last ones.

## Nested properties

With records provided as object, the column `key` can refer to nested properties of the input. It supports both array and object references.

`embed:packages/csv-stringify/samples/option.columns_nested.js`

## Undefined properties

If a column is defined but it is not matching any properties in the data source, the value will be an empty string. If the data source defines a property which is not defined in the column option, the property will simply be disregarded. This is an [example](https://github.com/adaltas/node-csv/blob/master/packages/csv-stringify/samples/option.columns_undefined.js):

`embed:packages/csv-stringify/samples/option.columns_undefined.js`
