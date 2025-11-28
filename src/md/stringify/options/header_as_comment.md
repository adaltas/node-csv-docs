---
title: Option header_as_comment
navtitle: header_as_comment
description: Display the column names on the first line if the columns option is provided or discovered
keywords: ['csv', 'stringify', 'options', 'header', 'header_as_comment']
---

# Option `header_as_comment`

The `header_as_comment` option prints the list of columns in the header as a comment.

- Type: `boolean`, `string` or `Buffer`
- Optional
- Default: `false`
- Since: 6.7.0
- Related: [`header`](/stringify/options/header/), [`columns`](/stringify/options/columns/) &mdash; see [Available Options](/stringify/options/#available-options)

## Usage

This option implies discovery of columns and the [activation of the `header` columns](https://github.com/adaltas/node-csv/tree/master/packages/csv-stringify/samples/option.header_as_comment.js).

`embed:packages/csv-stringify/samples/option.header_as_comment.js`
