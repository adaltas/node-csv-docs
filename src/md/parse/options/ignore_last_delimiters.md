---
title: Option ignore_last_delimiters
navtitle: ignore_last_delimiters
description: Option "ignore_last_delimiters" handles records starting from a requested line number.
keywords: ['csv', 'parse', 'options', 'columns', 'ssa']
---

# Option `ignore_last_delimiters`

* Type: `boolean|integer`
* Optional
* Default: `false`
* Since: 4.15.0
* Related: [`columns`](/parse/options/columns/), [`delimiter`](/parse/options/delimiter/) &mdash; see [Available Options](/parse/options/#available-options)

The `ignore_last_delimiters` option disregard any [delimiters](/parse/options/delimiter/) present in the last field of the record. It requires the presence of the `column` option to know how many fields are expected when it is defined as `true`.

Some formats which claim to be partially compatible with csv formats assume that it's ok to have unescaped commas in the last field because the number of fields was registered when the header line was parsed.

For example, [Advanced SubStation Alpha (ASS)](https://en.wikipedia.org/wiki/SubStation_Alpha), technically SSA v4+, is a subtitle file format.  You can see such behavior in its specification:

> The format line specifies how SSA will interpret all following Event lines. The field names must be spelled correctly, and are as follows:
  Marked, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text.
  The last field will always be the Text field, so that it can contain commas.

and here:

> The information fields in each line are separated by a commas.
  This makes it illegal to use commas in character names and style names (SSA prevents you putting commas in these). It also makes it quite easy to load chunks of an SSA script into a spreadsheet as a CSV file, and chop out columns of information you need for another subtitling program.

## Example

In this [example](/https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.ignore_last_delimiters.js), the CSV data is made of 2 fields, `format` and `description`. Fields are separated by commans, the default [delimiter](/parse/options/delimiter/). The last field, `description`, can contains any number of commas without breaking the record.

`embed:packages/csv-parse/samples/option.ignore_last_delimiters.js`
