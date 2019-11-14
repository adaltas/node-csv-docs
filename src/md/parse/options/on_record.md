---
title: Option on_record
navtitle: on_record
description: Option "on_record" alter a record before producing it.
keywords: ['csv', 'parse', 'options', 'transform', 'alter', 'filter', 'field']
sort: 4
---

# Option `on_record`

The `on_record` option provide an option to alter and filter records. It expect a function which receives the record and a context as arguments and which returns the new altered record or nothing if the record is to be filtered.

* Type: `function`
* Optional
* Default: `undefined`
* Since: 4.7.0

This option work at the record level. It complement the `cast` option which is adapted to field level transformations. Also, the [stream-transform](/transform/) package provides more advanced control on the record and the stream of records such asynchronous execution and concurrently control.

## Use cases

Use this option to filter, enrich and apply any transformation on a record.

## Usage

The option take a function which accept two arguments: the input record and the context. The return value is the new record. The record is filtered if `null` or `undefined`.

## Altering records

In the [alter example](https://github.com/adaltas/node-csv-parse/blob/master/samples/option.on_record.alter.js), for every record, the second field is striped out and the two other fields are re-ordered.

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

In the [filter example](https://github.com/adaltas/node-csv-parse/blob/master/samples/option.on_record.filter.js), the function returns `null` for the second record.

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
