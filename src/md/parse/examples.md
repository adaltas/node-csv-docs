---
title: CSV Parse Examples
layout: page
keywords: ['intro','page']
sort: 1
github: 'https://github.com/adaltas/node-csv-parse'
---

## Using the callback API

The parser receives a string and returns an array inside a user-provided
callback. This example is available with the command `node samples/callback.js`.

```javascript
var parse = require('csv-parse');
require('should');

var input = '#Welcome\n"1","2","3","4"\n"a","b","c","d"';
parse(input, {comment: '#'}, function(err, output){
  output.should.eql([ [ '1', '2', '3', '4' ], [ 'a', 'b', 'c', 'd' ] ]);
});
```

## Using the stream API

The CSV parser implements the [`stream.Transform`API][stream_transform].

CSV data is sent through the `write` function and the resulting data is obtained
within the "readable" event by calling the `read` function. This example is
available with the command `node samples/stream.js`.

```javascript
var parse = require('csv-parse');
require('should');

var output = [];
// Create the parser
var parser = parse({delimiter: ':'});
// Use the writable stream api
parser.on('readable', function(){
  while(record = parser.read()){
    output.push(record);
  }
});
// Catch any error
parser.on('error', function(err){
  console.info(err.message);
});
// When we are done, test that the parsed output matched what expected
parser.on('end', function(){
  output.should.eql([
    [ 'root','x','0','0','root','/root','/bin/bash' ],
    [ 'someone','x','1022','1022','a funny cat','/home/someone','/bin/bash' ]
  ]);
});
// Now that setup is done, write data to the stream
parser.write("root:x:0:0:root:/root:/bin/bash\n");
parser.write("someone:x:1022:1022:a funny cat:/home/someone:/bin/bash\n");
// Close the readable stream
parser.end();
```

## Using the pipe function

One useful function of the Stream API is `pipe` to interact between
multiple streams. You may use this function to pipe a `stream.Readable` string
source to a `stream.Writable` object destination. This example is available as
`node samples/pipe.js` and reads the file, parses its content and transforms it.

```javascript
var fs = require('fs');
var parse = require('csv-parse');
var transform = require('stream-transform');

var output = [];
var parser = parse({delimiter: ':'})
var input = fs.createReadStream('/etc/passwd');
var transformer = transform(function(record, callback){
  setTimeout(function(){
    callback(null, record.join(' ')+'\n');
  }, 500);
}, {parallel: 10});
input.pipe(parser).pipe(transformer).pipe(process.stdout);
```

## Using the synchronous API

The parser receives a string and returns an array of objects. This example also
illustrate the "columns" options which return records as object instead of
arrays. This example is available with the command `node samples/callback.js`.

```javascript
var parse = require('csv-parse/lib/sync');
require('should');

var input = '"key_1","key_2"\n"value 1","value 2"';
var records = parse(input, {columns: true});
records.should.eql([{ key_1: 'value 1', key_2: 'value 2' }]);
```
