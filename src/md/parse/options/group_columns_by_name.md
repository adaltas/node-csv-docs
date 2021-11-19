---
title: Option group_columns_by_name
navtitle: group_columns_by_name
description: Option "group_columns_by_name" convert values into an array of values for duplicated column names.
keywords: ['csv', 'parse', 'options', 'columns', 'array', 'duplicates']
---

# Option `group_columns_by_name`

When activated by settings its value to `true`, the `group_columns_by_name` option will convert the return values into arrays of values when multiple columns of the same name are found.

The option implies the usage of the `columns` mode where records are returned as literal objects. An error is thrown if the `columns` mode is not activated.

* Type: `boolean`
* Optional
* Default: `false` (a one character comma)
* Since: 4.10.0
* Related: [`columns`](/parse/options/columns/) &mdash; see [Available Options](/parse/options/#available-options)
* History: prior to version 5.0.0, this option was named `columns_duplicates_to_array`.

## Example

The [group_columns_by_name example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.group_columns_by_name.js) contains a CSV data set with two columns named "email". Without the `group_columns_by_name` option, only the last email will be available. Instead, every email is returned in the form of an array:

`embed:packages/csv-parse/samples/option.group_columns_by_name.js`
