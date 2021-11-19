---
title: Option info
navtitle: info
description: Option "info" generates two properties info and record to provide additional context information.
keywords: ['csv', 'parse', 'options', 'bom', 'utf', 'unicode', 'utf8']
---

# Option `info`

The `info` option provide additionnal context. Instead of generating records, in the form of objects literal or arrays, it generates two properties, `info` and `record`. The `info` property is a snapshot of the [info object](/parse/info/) at the time the record was created. The `record` property is the actual record.

Note, it can be used conjointly with the raw option.

* Type: `boolean`
* Optional
* Default: `false`
* Since: 4.0.0
* Related: [`cast`](/parse/options/cast/), [`on_record`](/parse/options/on_record/), [`raw`](/parse/options/raw/) &mdash; see [Available Options](/parse/options/#available-options)

## Example

When the [`info` option is activated](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.info.js) with the value `true`, field is made of the two properties `info` and `record`:

`embed:packages/csv-parse/samples/option.info.js`

If `info` was `false`, the assertion would have been:

```js
assert.deepStrictEqual(records, [
  [ 'a', 'b', 'c' ]
]);
```
