---
title: Errors
description: Commons errors encountered while using the CSV parser
keywords: ['csv', 'parse', 'error', 'mistake']
sort: 7
---

# Errors

> Important: errors support appeared recently with version 4.5. The coverage is not yet exhaustive. The code, message and properties documented below may change in the near future.

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

## Runtime errors

* code: `CSV_INVALID_CLOSING_QUOTE`   
  Thrown when a quote is found at an unexpected location. The parser can be made tolerant to this error by activating the `relax_quotes` option.
* code: `CSV_RECORD_INCONSISTENT_FIELDS_LENGTH`   
  Thrown when a record don't match the same amount of fields as the previous records. The parser can be made tolerant to the number of fields with the [`relax_column_count`](/parse/options/relax_column_count/) option. Additional properties include:
  * `record`   
    The invalid encountered record.
* code: `CSV_RECORD_DONT_MATCH_COLUMNS_LENGTH`   
  Thrown when a record don't match the same amount of columns. This error is only present when the [`columns`](/parse/options/columns/) option is active. Additional properties include:
  * `record`   
    The invalid encountered record.
* code: `CSV_INVALID_COLUMN_MAPPING`   
  Thrown when the [`columns`](/parse/options/columns/) option is a function and it does not return an array of header fields as expected.
  * `headers`   
    The invalid headers value returned by the function.
* code: `CSV_MAX_RECORD_SIZE`   
  Thrown when a field is longer than the value defined by the `max_record_size` option.
* code: `CSV_NON_TRIMABLE_CHAR_AFTER_CLOSING_QUOTE`   
  Thrown when a field is no longer quoted and that new non-trimable characters are found after the closing quote. Only apply if the `trim` or the `rtrim` options are activated.
* code: `CSV_QUOTE_NOT_CLOSED`   
  Thrown when the parsing of data end while an opening quote is not closed.

## API Errors

* code: `CSV_INVALID_ARGUMENT`   
  message: `Invalid argument: got {value} at index {index}`   
  Thrown when calling the `parse` exported function with incorrect arguments.
* code: `CSV_INVALID_OPTION_BOM`   
  message: `Invalid option bom: bom must be true, got {value}`   
  Thrown when the cast option is incorrect.
* code: `CSV_INVALID_OPTION_CAST`   
  message: `Invalid option cast: cast must be true or a function, got {value}`   
  Thrown when the cast option is incorrect.
* code: `CSV_INVALID_OPTION_CAST_DATE`   
  message: `Invalid option cast_date: cast_date must be true or a function, got {value}`   
  Thrown when a column definition does not contain the `name` property.
* code: `CSV_INVALID_COLUMN_DEFINITION`  
  message: `Invalid column definition: expect a string or a literal object, got true at position {position}`   
  Thrown when a column definition is incorrect.
* code: `CSV_OPTION_COLUMNS_MISSING_NAME`   
  message: `Option columns missing name: property "name" is required at position {position} when column is an object literal`   
  Thrown when a column definition is an object without a name property.
* code: `CSV_INVALID_OPTION_COLUMNS`   
  message: `Invalid option columns: expect an object, a function or true, got {value}`   
  Thrown when the column option is incorrect.
* code: `CSV_INVALID_OPTION_COMMENT`   
  message: `Invalid option comment: comment must be a buffer or a string, got {value`   
  Thrown when the comment option is incorrect.
* code: `CSV_INVALID_OPTION_DELIMITER`   
  message: `Invalid option delimiter: delimiter must be a non empty string or buffer, got {value}`    
  Thrown when the delimiter option is incorrect.
* code: `CSV_INVALID_OPTION_RECORD_DELIMITER`   
  message: ```Invalid option `record_delimiter`: value must be a non empty string or buffer or array of string|buffer, got {value}```   
  since: 5.0.0   
  Thrown when the record_delimiter option is incorrect.

## Common issues

### End notification

Situation:

You are using the "finish" event and you don't have all your records. The "readable" event is still being called with a few records left.

Solution:

The parser is both a writable and a readable stream. You write data and you read records. Following [Node.js. stream documentation](https://nodejs.org/api/stream.html), the "finish" event is from the write API and is emitted when the input source has flushed its data. The "end" event is from the read API and is emitted when there is no more data to be consumed from the stream.

Issue: https://github.com/adaltas/node-csv-parse/issues/204
