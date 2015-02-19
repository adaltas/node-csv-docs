---
title: Examples
layout: page
tags: ['intro','page']
pageOrder: 1
github: 'https://github.com/wdavidw/node-csv-stringify'
---

## Using the callback API

The stringifier receive an array and return a string inside a user-provided
callback. This example is available with the command `node samples/callback.js`.

```javascript
var stringify = require('csv-stringify');

input = [ [ '1', '2', '3', '4' ], [ 'a', 'b', 'c', 'd' ] ];
stringify(input, function(err, output){
  output.should.eql('1,2,3,4\na,b,c,d');
});
```

## Using the stream API

```javascript
// node samples/stream.js
var stringify = require('csv-stringify');

data = '';
stringifier = stringify({delimiter: ':'})
stringifier.on('readable', function(){
  while(row = stringifier.read()){
    data += row;
  }
});
stringifier.on('error', function(err){
  consol.log(err.message);
});
stringifier.on('finish', function(){
  data.should.eql(
    "root:x:0:0:root:/root:/bin/bash\n" +
    "someone:x:1022:1022:a funny cat:/home/someone:/bin/bash"
  );
});
stringifier.write([ 'root','x','0','0','root','/root','/bin/bash' ]);
stringifier.write([ 'someone','x','1022','1022','a funny cat','/home/someone','/bin/bash' ]);
stringifier.end();
```

## Using the pipe function

One usefull function part of the Stream API is `pipe` to interact between
multiple streams. You may use this function to pipe a `stream.Readable` array
or object source to a `stream.Writable` string destination. The next example
available as `node samples/pipe.js` generate records, stringify them and print
them to stdout.

```javascript
stringify = require('csv-stringify');
generate = require('csv-generate');

generator = generate({objectMode: true, seed: 1, headers: 2});
stringifier = stringify();
generator.pipe(stringifier).pipe(process.stdout);
```