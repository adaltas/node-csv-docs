---
title: Errors
description: Commons errors encountered while using the CSV parser
keywords: ['csv', 'parse', 'error', 'mistake']
sort: 6
---

# Errors

> Important: errors appeared recently with version 4.5. The coverage is not yet exhaustive. The code, message and properties documented below may change in the near future.

All errors instantiate the `CsvError` class which extends the JavaScript `Error` class. The 2 main properties of an error are:

* `code`   
  Identify the error type, unique for each error thrown by the parser, see below for the list of error codes.
* `message`   
  A descriptive and sometime verbose error message introduced by a readable version of the code.

The error is also enriched by multiple contextual properties:

* `column` (number|string)   
  The column name if the `columns` options is defined or the field position.
* `empty_lines` (number)   
  Internal counter of empty lines encountered until this field.
* `header` (boolean)   
  A boolean indicating if the provided value is a part of the header.
* `index` (number)   
  The field position starting at 0.
* `invalid_field_length` (number)   
  Number of records with a non uniform length when [`relax_column_count`](/parse/options/relax_column_count/) is true. It was named `skipped_lines` until version 3.
* `lines` (number)   
  The number of lines which have been processed including the current line.
* `quoting` (boolean)   
  A boolean indicating if the field was surrounded by quotes.
* `records` (number)   
  The number of records which have been fully parsed. It was named `count` until version 3.

Finally, each type of error identified by its code property may include additional properties.

## `CSV_QUOTE_NOT_CLOSED`

Thrown when the parsing of data end while an opening quote is not closed. 

## `CSV_INVALID_CLOSING_QUOTE`

Thrown when a quote is found at an unexpected location. The parser can be made tolerant to this error by activating the `relax` option.

## `CSV_INVALID_RECORD_LENGTH_DONT_PREVIOUS_RECORDS`

Thrown when a record don't match the same amount of fields as the previous records. The parser can be made tolerant to the number of fields with the [`relax_column_count`](/parse/options/relax_column_count/) option. Additional properties include:

* `record`   
  The invalid encountered record.

## `CSV_INVALID_RECORD_LENGTH_DONT_MATCH_COLUMNS`   

Thrown when a record don't match the same amount of columns. This error is only present when the [`columns`](/parse/options/columns/) option is active. Additional properties include:

* `record`   
  The invalid encountered record.

## `CSV_INVALID_COLUMN_MAPPING`

Thrown when the [`columns`](/parse/options/columns/) option is a function and it does not return an array of header fields as expected.

* `headers`   
  The invalid headers value returned by the function.

## Common Errors

### End notification

Situation:

You are using the "finish" event and you don't have all your records. The "readable" event is still being called with a few records left.

Solution:

The parser is both a writable and a readable stream. You write data and you read records. Following [Node.js. stream documentation](https://nodejs.org/api/stream.html), the "finish" event is from the write API and is emitted when the input source has flushed its data. The "end" event is from the read API and is emitted when there is no more data to be consumed from the stream.

Issue: https://github.com/adaltas/node-csv-parse/issues/204
