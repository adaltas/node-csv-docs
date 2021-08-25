---
title: Async iterator
description: CSV Parse - how to use ES6 async iterator to traverse your records.
keywords: ['csv', 'parse', 'parser', 'recipe', 'async', 'iterator', 'stream', 'pipe', 'read']
---

# Async iterator

Async iterators provides an elegant method to iterate over each parsed records with the usage of the [`for await...of` construct](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of).

CSV parse rely on and leverages the Node.js stream readable API. It implements the [Symbol.asyncIterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator) or [Symbol.iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) iterable protocol.

This is kind of an obscure JS functionnality and we don't have to deal with it. The end result very comprehensive and illustrated with the [async iterator example](https://github.com/adaltas/node-csv-parse/blob/master/samples/recipe.async.iterator.js)

This example is available with the command `node samples/recipe.async.iterator.js`.

```js
const parse = require('csv-parse');
const fs = require('fs');
 
const processFile = async () => {
  records = []
  const parser = fs
  .createReadStream(`./input.csv`)
  .pipe(parse({
    // CSV options if any
  }));
  for await (const record of parser) {
    // Work with each record
    records.push(record)
  }
  return records
}

(async () => {
  const records = await processFile()
  console.info(records);
})()
```

Async iteration is also supported in CoffeeScript. It is expressed with the [`for...from`](https://coffeescript.org/#generators) syntax available since version 1.12.0. The [async example in coffeescript](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/recipe.async.iterator.coffee) is:

```coffee
parse = require('csv-parse')
fs = require('fs')
 
processFile = () ->
  records = []
  parser = fs
  .createReadStream "#{__dirname}/fs_read.csv"
  .pipe parse(
    # CSV options if any
  )
  for await record from parser
    # Work with each record
    records.push(record)
  records

(() ->
  records = await processFile()
  console.info records
)()
```
