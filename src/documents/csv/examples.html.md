---
title: Examples
layout: page
tags: ['intro','page']
pageOrder: 1
---

## Callback example

Execute this script with the command `node samples/callback.js`.

```javascript
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

## Stream example

Execute this script with the command `node samples/stream.js`.

```javascript
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

## Pipe example

Execute this script with the command `node samples/pipe.js`.

```javascript
var csv = require('csv');

csv.generate  ({seed: 1, columns: 2, length: 20}).pipe(
csv.parse     ()).pipe(
csv.transform (function(record){
                return record.map(function(value){return value.toUpperCase()});
              })).pipe(
csv.stringify ()).pipe(process.stdout);
```
