---
title: Option on_record
navtitle: on_record
description: Option "on_record" alter a record before producing it.
keywords: ['csv', 'parse', 'options', 'transform', 'alter', 'filter', 'field']
---

# Option `on_record`

The `on_record` option provides an option to alter and filter records. It expects a function which receives the record and a context as arguments and which returns the new altered record or nothing if the record is to be filtered.

* Type: `function`
* Optional
* Default: `undefined`
* Since: 4.7.0

This option works at the record level. It complements the `cast` option which is adapted to field-level transformations. Also, the [stream-transform](/transform/) package provides more advanced control on the record and stream of records with asynchronous execution and concurrent control.

## Use cases

Use this option to filter, enrich, and apply any transformations on a record.

## Usage

The option takes a function which accepts two arguments: the input record and the context. The return value is the new record or is filtered if `null` or `undefined` are returned.

## Altering records

In the [alter example](https://github.com/adaltas/node-csv-parse/blob/master/samples/option.on_record.alter.js), for every record, the second field is stripped out and the two other fields are re-ordered.

```
parse(`
a.1,a.2,a.3
b.1,b.2,b.3
`.trim(), {
  on_record: (record, {lines}) =>
    [lines, record[2], record[0]]
}, function(err, records){
  assert.deepEqual(
    records, [
      [1, 'a.3', 'a.1'],
      [2, 'b.3', 'b.1']
    ]
  )
})
```

## Filtering records

In the [filter example](https://github.com/adaltas/node-csv-parse/blob/master/samples/option.on_record.filter.js), the function returns `null` for the second record, filtering it from the result.

```
parse(`
line 1
line 2
line 3
`.trim(), {
  on_record: (record, {lines}) =>
    lines === 2 ? null : record
}, function(err, records){
  assert.deepEqual(
    records, [
      [`line 1`],
      [`line 3`]
    ]
  )
})
```

## Error behaviour

Errors throw inside the `on_record` function are caught and handled as any other errors.

They won't be honoured by the [`skip_lines_with_error` option](/parse/options/skip_lines_with_error/). The "error" in `skip_lines_with_error` must be interpreted as a parsing error and not as a user thrown error.
