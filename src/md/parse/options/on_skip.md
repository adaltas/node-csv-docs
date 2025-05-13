---
title: Option on_skip
navtitle: on_skip
description: Option "on_skip" provides a callback to handle skipped records that contain invalid data.
keywords: ['csv', 'parse', 'options', 'skip', 'error', 'invalid', 'record']
---

# Option `on_skip`

The `on_skip` option provides a way to track invalid records without interrupting the parsing process. It defines a function called when records are skipped due to parsing errors.

- Type: `function`
- Optional
- Default: `undefined`
- Since: 5.1.0
- Related: [`on_record`](/parse/options/on_record/), [`skip_records_with_error`](/parse/options/raw/), [`raw`](/parse/options/skip_records_with_error/) &mdash; see [Available Options](/parse/options/#available-options)

The `on_skip` option works at the record level and requires the `skip_records_with_error` option to be enabled.

## Use cases

Use this option to:

- Log skipped records for later analysis
- Track parsing errors while maintaining the parsing process
- Monitor data quality issues in your CSV files

## Usage

The user function receives the error object as an argument. If the `raw` option is enabled, a second argument contains the CSV string being currently processed.

- `error`: Error encountered during parsing
  - `message`: A descriptive error message
  - `code`: The error code (e.g., "CSV_RECORD_INCONSISTENT_FIELDS_LENGTH")
  - `record`: The raw record that caused the error
- `buffer`: Current processing buffer encoded as an UTF-8 string

## Example with inconsistent field lengths

The following example demonstrates how to handle records with inconsistent field counts:

`embed:packages/csv-parse/samples/option.on_skip.js`

## Error handling

The `on_skip` function is called after the parser has determined that a record should be skipped. It works in conjunction with the `skip_records_with_error` option:

1. When `skip_records_with_error` is `true`, invalid records are skipped and trigger the `on_skip` callback
2. When `skip_records_with_error` is `false` (default), parsing errors will cause the parser to emit an error and stop

## Error behaviour

Errors thrown inside the `on_skip` function are caught by the parser and handled as if `skip_records_with_error` was not enabled. It's recommended to implement proper error handling within your callback function to prevent the parsing process from being interrupted.
