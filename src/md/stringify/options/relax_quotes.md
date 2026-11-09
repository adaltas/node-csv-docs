---
title: Option relax_quotes
navtitle: relax_quotes
description: Preserve quotes inside fields which do not require quoting.
keywords: ['csv', 'stringify', 'options', 'relax_quotes', 'quote', 'escape']
---

# Option `relax_quotes`

Preserve the quote characters found inside a field without quoting it, as long as nothing else requires quotes.

By default, a field containing a quote character is surrounded by quotes and its interior quotes are escaped, for example `say "hi"` is written as `"say ""hi"""`. It is aligned with RFC 4180, section 2, rule 5, which states “If fields are not enclosed with double quotes, then double quotes may not appear inside the fields.”. With `relax_quotes`, the field is written as is, `say "hi"`.

Quoting is still applied when it is required to preserve the structure of the record:

- the field contains a delimiter;
- the field contains a record delimiter;
- the field starts with a quote character, leading whitespaces being ignored, otherwise it would be read back as a quoted field.

The option does not disable explicit quoting. The [`quoted`](/stringify/options/quoted/), [`quoted_string`](/stringify/options/quoted_string/) and [`quoted_match`](/stringify/options/quoted_match/) options still quote the fields they select, and their interior quotes are escaped. It applies to custom and multi-character values of the [`quote`](/stringify/options/quote/) option. It is also accepted as a field-level option returned by the [`cast`](/stringify/options/cast/) functions.

- Type: `boolean`
- Optional
- Default: `false`
- Since: 6.10.0
- Related: [`quote`](/stringify/options/quote/), [`escape`](/stringify/options/escape/), [`quoted`](/stringify/options/quoted/), [`quoted_match`](/stringify/options/quoted_match/), [`quoted_string`](/stringify/options/quoted_string/) &mdash; see [Available Options](/stringify/options/#available-options)

Note, the generated output does not comply with [RFC 4180](https://datatracker.ietf.org/doc/html/rfc4180#section-2), which forbids quotes inside unquoted fields. Parsers must be lenient to read it back, for example with the [`relax_quotes`](/parse/options/relax_quotes/) option of the parser.

## Example

In the [relax quotes example](https://github.com/adaltas/node-csv/blob/master/packages/csv-stringify/samples/option.relax_quotes.js), the first field is written without quotes. The second field is quoted because it contain a delimiter. The last field is quoted because it starts with a quote character.

`embed:packages/csv-stringify/samples/option.relax_quotes.js`
