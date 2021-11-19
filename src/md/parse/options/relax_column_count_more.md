---
title: Option relax_column_count_more
navtitle: relax_column_count_more
description: Option "relax_column_count_more" tolerates data sets with inconsistent number of fields between records as long as the number of fields is inferior to the expectation.
keywords: ['csv', 'parse', 'options', 'relax_column_count_more', 'columns']
---

# Option `relax_column_count_more`

The `relax_column_count_more` option is inspired by the [`relax_column_count` option](/parse/options/relax_column_count/). It tolerates data sets with inconsistent number of fields between records as long as the number of fields is superior to the expectation.

* Type: `boolean`
* Optional
* Default: `false`
* Since: 4.8.0
* Related: [`relax_column_count`](/parse/options/relax_column_count/), `quote`, [`relax_column_count_less`](/parse/options/relax_column_count_less/) &mdash; see [Available Options](/parse/options/#available-options)

Refer to the [`relax_column_count` option](/parse/options/relax_column_count/) to learn about specific implementation details.

## Usage

[This example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.relax_column_count_more.js) shows how the second line is tolerated despite having more fields than in the first line.

`embed:packages/csv-parse/samples/option.relax_column_count_more.js`
