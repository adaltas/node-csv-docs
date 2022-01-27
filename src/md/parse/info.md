---
title: Info properties
description: CSV Parse - info properties
keywords: ['csv', 'parse', 'count', 'counter', 'information', 'lines', 'records']
sort: 6
redirects:
 - /parse/state/
---

# CSV Parse info properties

Info properties report internal information such as the number of records which have been processed.

Information have multiple level of granularity depending on how and where you access them. They apply to the overall dataset, a record or a field. Record information extends data information. Field information extends record and dataset information.

## Dataset information

They are available in the `info` object of a parser instance and are also exported as the third argument of the user callback.

* `bytes` (number)   
  Number of processed bytes.
* `columns` (boolean || object)   
  Normalized verion of `options.columns`.
* `comment_lines` (number)   
  Count the number of lines being fully commented.
* `empty_lines` (number)   
  Count the number of processed empty lines; was `empty_line_count` until version 3; work only with the `skip_empty_lines` option or an error will be thrown if an empty line is found.
* `invalid_field_length` (number)   
  Number of non uniform records when `relax_column_count` is true; was `skipped_line_count` until version 3.
* `lines` (number)   
  Number of lines encountered in the source dataset, start at 1 for the first line.
* `records` (number)   
  Count the number of processed records.

## Record information

It is exposed with the [`info` option](/parse/options/info/) and the [`on_record` option](/parse/options/on_record/). Refers to their respective documentation to learn their usage as well as any additionnal properties they might expose.

It contains all the dataset information with additionnal properties:

* `error` (Error)   
  The error that was encountered, useful with the variuos relax options.
* `header` (boolean)   
  True when the [`columns` option](/parse/options/columns/) is activated and the current record is interpreted as a header instead of a data record.
* `index` (number)   
  Position of the last processed field.

## Field information

It is exposed by the [`cast` option](/parse/options/cast/) and [`cast_date` option](/parse/options/cast_date/) when defined as functions.

Runtime errors are enriched with the field information as well as some additionnal properties when appropriate.

It contains all the dataset and record information with additionnal properties:

* `column` (string || index)   
  The column name if the `columns` option is active or the field index position in the record.
* `quoting` (boolean)   
  Indicates that the field is surrounded by quotes.

## Accessing the internal `info` object

The `info` object is directly available from the parser instance. Don't modify the object, some properties are used internally by the parser.

`embed:packages/csv-parse/samples/api.info.internal.js`

## Accessing `info` in the callback

The `info` object in provided in the third argument of the callback, after the `error` and `data` arguments.

`embed:packages/csv-parse/samples/api.info.callback.js`
