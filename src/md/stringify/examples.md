---
title: Examples
keywords: ['csv','stringify', 'example', 'sample', 'stream', 'pipe', 'callback', 'sync', 'async']
sort: 4
---

# CSV Stringify examples

## Introduction

This package proposes different API flavours. Every example is available on [GitHub](https://github.com/adaltas/node-csv-stringify/tree/master/samples).

## Using the stream API

The stringify module implement both a writable and a readable stream

The [stream example](https://github.com/adaltas/node-csv-stringify/blob/master/samples/api.stream.js) write 2 records and register multiple events to read the generated CSV output and get notified when the serialisation is finished.

This example is available with the command `node samples/api.stream.js`.

```js
const stringify = require('csv-stringify')
const assert = require('assert')
const data = []
const stringifier = stringify({
  delimiter: ':'
})
stringifier.write([ 'root','x','0','0','root','/root','/bin/bash' ])
stringifier.write([ 'someone','x','1022','1022','','/home/someone','/bin/bash' ])
stringifier.end()
stringifier.on('readable', function(){
  let row;
  while(row = stringifier.read()){
    data.push(row)
  }
})
stringifier.on('error', function(err){
  console.error(err.message)
})
stringifier.on('finish', function(){
  assert.equal(
    data.join('\n'),
    "root:x:0:0:root:/root:/bin/bash\n" +
    "someone:x:1022:1022::/home/someone:/bin/bash\n"
  )
})
```

## Using the pipe function

One useful function part of the Stream API is `pipe`. It is used to connect
multiple `stream.Readable` sources to `stream.Writable` destinations.

The [pipe example](https://github.com/adaltas/node-csv-stringify/blob/master/samples/api.pipe.js) generates object records, stringifies them and print the generated CSV to the standard output.

This example is available with the command `node samples/api.pipe.js`.

```js
const stringify = require('csv-stringify')
const generate = require('csv-generate')
generator = generate({
  objectMode: true,
  seed: 1,
  headers: 2
})
stringifier = stringify()
generator.pipe(stringifier).pipe(process.stdout)
```

## Using the callback API

The [stringify example](https://github.com/adaltas/node-csv-stringify/blob/master/samples/api.callback.js) receives an array and a callback function. The input is serialised into a string unless an error occurred.

This example is available with the command `node samples/api.callback.js`.

```js
const stringify = require('csv-stringify')
const assert = require('assert')
input = [ [ '1', '2', '3', '4' ], [ 'a', 'b', 'c', 'd' ] ]
stringify(input, function(err, output){
  assert.equal(output, '1,2,3,4\na,b,c,d\n')
})
```

## Using the "header" option

In the [header example](https://github.com/adaltas/node-csv-stringify/blob/master/samples/options.header.js), the "header" option is set true and its value is obtained from the keys present in the "columns" option. 

This example is available with the command `node samples/options.header.js`.

```js
const stringify = require('csv-stringify')
const generate = require('csv-generate')
const generator = generate({
  objectMode: true,
  seed: 1,
  headers: 2
})
const stringifier = stringify({
  header: true,
  columns: {
   year: 'birthYear',
   phone: 'phone'
  }
})
generator.pipe(stringifier).pipe(process.stdout)
```

The output on the console will start with:

```csv
birthYear,phone
OMH,ONKCHhJmjadoA
```

## Using custom formatters

This example is available with the command `node samples/options.formatters.js`.

```js
const stringify = require('../lib')
const input = [{
  name: 'foo',
  date: new Date(1970, 0)
}, {
  name: 'bar',
  date: new Date(1971, 0)
}]
var stringifier = stringify(input, {
  formatters: {
    date: function(value) {
      return value.toISOString()
    }
  }
}, function(err, output) {
  console.info(output)
})
```

The output on the console will be:

```csv
foo,1969-12-31T23:00:00.000Z
bar,1970-12-31T23:00:00.000Z
```
