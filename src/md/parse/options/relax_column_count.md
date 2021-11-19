---
title: Option relax_column_count
navtitle: relax_column_count
description: Option "relax_column_count" tolerates data sets with inconsistent number of fields.
keywords: ['csv', 'parse', 'options', 'relax_column_count', 'columns']
---

# Option `relax_column_count`

The `relax_column_count` option tolerates data sets with inconsistent number of fields between records. By default, an error is thrown if two records have a different number of fields.

Note, this option is completed by the [`relax_column_count_less` option](/parse/options/relax_column_count_less/) and the [`relax_column_count_more` option](/parse/options/relax_column_count_more/) which behave similarly.

* Type: `boolean`
* Optional
* Default: `false`
* Since: 1.0.6
* Related: [`relax_column_count_less`](/parse/options/relax_column_count_less/), `quote`, [`relax_column_count_more`](/parse/options/relax_column_count_more/) &mdash; see [Available Options](/parse/options/#available-options)

The option can be used conjointly with the `columns` option. The expected number of fields is determined by the length of the `columns` option, wether it is defined by the user or dynamically discovered.

## Default behavior

The [`option.relax_column_count.js` example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.relax_column_count.js) expect records with 2 fields. The second line contains less than 2 fields and the third line contains more than 2 fields. Both lines would have generated an error if the `relax_column_count` option was not `true`.

`embed:packages/csv-parse/samples/option.relax_column_count.js`

## Working with columns and objects

When using the `columns` option, the records are generated as objects whose properties are found in the column option and associated based on their index position. If a record has fewer fields than the number of columns, then the unmatched columns are discarded. Inversely, if a record has more fields than the number of columns, then the unmatched fields are discarded. The [`option.relax_column_count.columns.js` example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.relax_column_count.columns.js) illustrates both behavior:

`embed:packages/csv-parse/samples/option.relax_column_count.columns.js`

## Handling inconsistent number of fields errors

When used conjointly with other options, it is possible to accept inconsistent records and provide you own parsing implementation. For exemple, the [`on_record`](/parse/options/on_record/) option let you insert your custom code. If needed, the [`raw`](/parse/options/raw/) option expose the raw record. Finally, the full error is available including the error code.

This is an example to [handle inconsistent record field lengths](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.relax_column_count.record_inconsistent_length.js).

`embed:packages/csv-parse/samples/option.relax_column_count.record_inconsistent_length.js`

If the [`columns`](/parse/options/on_record/) option is active, the behavior is similar but the error throw is now `CSV_RECORD_DONT_MATCH_COLUMNS_LENGTH`. The `on_record` function can return any value. For example in [the inconsistent columns example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.relax_column_count.record_inconsistent_columns.js), the `columns` option is activated and an array is returned instead of an object literal.

`embed:packages/csv-parse/samples/option.relax_column_count.record_inconsistent_columns.js`
