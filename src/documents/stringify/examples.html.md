---
title: Examples
layout: page
tags: ['intro','page']
pageOrder: 1
github: 'https://github.com/wdavidw/node-csv-stringify'
---

## Using the callback API

This source code for this example is available in
["./samples/api.callback.js"][ac].

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

This source code for this example is available in
["./samples/api.stream.js"][as].

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
  console.log(err.message);
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

This source code for this example is available in
["./samples/api.pipe.js"][ap].

One usefull function part of the Stream API is `pipe` to interact between
multiple streams. You may use this function to pipe a `stream.Readable` array
or object source to a `stream.Writable` string destination. The next example
available as `node samples/pipe.js` generate records, stringify them and print
them to stdout.

```javascript
var stringify = require('csv-stringify');
var generate = require('csv-generate');

generator = generate({objectMode: true, seed: 1, headers: 2});
stringifier = stringify();
generator.pipe(stringifier).pipe(process.stdout);
```

## Using the "header" option

This source code for this example is available in
["./samples/options.header.js"][oh]. Run it with the command
`node ./samples/options.header.js`.

```javascript
var stringify = require('../lib');
var generate = require('csv-generate');

var generator = generate({objectMode: true, seed: 1, headers: 2});

var columns = {
 year: 'birthYear',
 phone: 'phone'
};
var stringifier = stringify({ header: true, columns: columns });

generator.pipe(stringifier).pipe(process.stdout);
```

The output on the console will start with:

```csv
birthYear,phone
OMH,ONKCHhJmjadoA
KB,dmiM
B,LF
```

[ac]: https://github.com/wdavidw/node-csv-stringify/blob/master/samples/api.callback.js
[as]: https://github.com/wdavidw/node-csv-stringify/blob/master/samples/api.stream.js
[ap]: https://github.com/wdavidw/node-csv-stringify/blob/master/samples/api.pipe.js
[oh]: https://github.com/wdavidw/node-csv-stringify/blob/master/samples/options.header.js
