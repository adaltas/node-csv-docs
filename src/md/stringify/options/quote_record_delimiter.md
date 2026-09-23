---
title: Option quote_record_delimiter
navtitle: quote_record_delimiter
description: Quote fields containing carriage return or line feed characters to ensure round-trip safety.
keywords:
  [
    'csv',
    'stringify',
    'options',
    'quote',
    'record',
    'delimiter',
    'carriage return',
    'line feed',
  ]
---

# Option `quote_record_delimiter`

The `quote_record_delimiter` option controls whether fields containing `\r` (carriage return) or `\n` (line feed) are automatically quoted, beyond the configured [`record_delimiter`](/stringify/options/record_delimiter/) characters which are always quoted.

- Type: `boolean`
- Optional
- Default: `true` when `record_delimiter` is not set, `false` when `record_delimiter` is explicitly configured
- Since: 6.9.0
- Related: [`quote`](/stringify/options/quote/), [`record_delimiter`](/stringify/options/record_delimiter/), [`quoted`](/stringify/options/quoted/) &mdash; see [Available Options](/stringify/options/#available-options)

When `record_delimiter` is not explicitly configured, `quote_record_delimiter` defaults to `true`. This preserves round-trip safety: while `stringify` only treats `\n` as a record separator by default, `parse` treats all three sequences `\r`, `\n`, and `\r\n` as record boundaries. An unquoted `\r` inside a field would therefore be misread as a record separator on the next parse.

When `record_delimiter` is explicitly set, `quote_record_delimiter` defaults to `false`. The assumption is that the user has taken control of their format, so the extra protection for `\r` and `\n` is not applied automatically. Only fields containing the configured `record_delimiter` characters are quoted.

## Default behavior

With the default configuration (no `record_delimiter` set), only a field containing a carriage return `\r` or a line feed `\n` is quoted.

`embed:packages/csv-stringify/samples/option.quote_record_delimiter_default.js`

## With a custom `record_delimiter`

When `record_delimiter` is explicitly configured, `quote_record_delimiter` defaults to `false`. Fields containing `\r` or `\n` are not quoted unless those characters are part of the configured delimiter.

`embed:packages/csv-stringify/samples/option.quote_record_delimiter_record_delimiter.js`

## Disabling the option

When `quote_record_delimiter` is explicitly set to `false` with the default `record_delimiter`, a carriage return `\r` is not quoted. A line feed `\n` is still quoted because it matches the default `record_delimiter`.

`embed:packages/csv-stringify/samples/option.quote_record_delimiter_disabled.js`
