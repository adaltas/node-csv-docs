---
title: Examples
keywords: ['csv', 'example', 'sample', 'stream', 'pipe', 'callback', 'sync', 'async']
sort: 4
---

# CSV Examples

## Introduction

This package proposes different API flavours. Every example is available on [GitHub](https://github.com/adaltas/node-csv/tree/master/samples).

## Using the stream API

This example is available with the command `node samples/stream.js`.

```js
var csv = require('csv');

var generator = csv.generate({seed: 1, columns: 2, length: 20});
var parser = csv.parse();
var transformer = csv.transform(function(data){
  return data.map(function(value){return value.toUpperCase()});
});
var stringifier = csv.stringify();

generator.on('readable', function(){
  while(data = generator.read()){
    parser.write(data);
  }
});

parser.on('readable', function(){
  while(data = parser.read()){
    transformer.write(data);
  }
});

transformer.on('readable', function(){
  while(data = transformer.read()){
    stringifier.write(data);
  }
});

stringifier.on('readable', function(){
  while(data = stringifier.read()){
    process.stdout.write(data);
  }
});
```

## Using the pipe API

This example is available with the command `node samples/pipe_funny.js`.

```js
// Import the package main module
const csv = require('csv')
// Use the module
csv.generate  ({seed: 1, length: 20}).pipe(
csv.parse     ()).pipe(
csv.transform (function(record){
                return record.map(function(value){
                  return value.toUpperCase()
              })})).pipe(
csv.stringify ()).pipe(process.stdout)
```

## Using the callback API

This example is available with the command `node samples/callback.js`.

```js
var csv = require('csv');

csv.generate({seed: 1, columns: 2, length: 20}, function(err, data){
  csv.parse(data, function(err, data){
    csv.transform(data, function(data){
      return data.map(function(value){return value.toUpperCase()});
    }, function(err, data){
      csv.stringify(data, function(err, data){
        process.stdout.write(data);
      });
    });
  });
});
```
