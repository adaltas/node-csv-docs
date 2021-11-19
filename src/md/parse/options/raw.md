---
title: Option raw
navtitle: raw
description: Option "raw" generates two properties info and record to provide additional context information.
keywords: ['csv', 'parse', 'options', 'raw', 'debug', 'buffer']
---

# Option `raw`

The `raw` option generates two properties `raw` and `record` instead of just the record. The `raw` property is the original CSV content and  the `record` property is the parsed array or object literral.

* Type: `boolean`
* Optional
* Default: `false`
* Since: 1.1.6
* Related: [`cast`](/parse/options/cast/), [`info`](/parse/options/info/), [`on_record`](/parse/options/on_record/) &mdash; see [Available Options](/parse/options/#available-options)

All options are compatible but the generated records are structured differently.

Its behavior is similar to the one of the `info` option. Both options can be used conjointly.

## Output

When the [`raw` option is activated]((https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.raw.js)) with the value `true`, the resulting record are made up of `raw` and `record` properties:

`embed:packages/csv-parse/samples/option.raw.js`
