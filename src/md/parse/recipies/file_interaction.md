---
title: File system interaction
description: Read and write UTF-8 CSV files 
keywords: ['csv', 'parse', 'parser', 'recipe', 'file', 'fs', 'read', 'write', 'utf8', 'utf-8', 'bom']
sort: 5
---

# File system interaction

This recipe illustrates how to read and write to an UTF-8 file with a byte order mark (BOM).

Let's assume we are reading a file with 3 records. The file has been previously
written with the script:

```js
const fs = require('fs').promises

(async function(){
  await fs.writeFile(`${__dirname}/input.csv`, [
    '\ufeff' // BOM
    'a,1\n'  // First record
    'b,2\n'  // Second record
  ].join(''), {encoding: 'utf8'})
})()
```

We can now access the CSV content of this file with the native Node.js File System module named `fs`. The parser doesn't not provide any file access method, it is not its reponsibilty and using the native `fs` module conjointly with the `csv-parse` is easy and natural.

You must first choose the right API. This package exposed multiple API all backed by the same parsing algorythm and supporting the same options. Wether you select one API over another one encompass the scope of this page and is documented inside the [API section]('/parse/api/').

The easiest way is using the sync API. You read the file and get its content. You then inject this content into the parser and get the result as an array of records. Records may be printed to the console and written to a file one JSON per line for each record. The [final code](https://github.com/adaltas/node-csv-parse/blob/master/samples/recipes.file.js) looks like:

```js
const os = require('os');
const fs = require('fs').promises;
const parse = require('csv-parse/lib/sync');

(async function(){
  // Prepare the dataset
  await fs.writeFile(`${os.tmpdir()}/input.csv`, [
    '\ufeff', // BOM
    'a,1\n',  // First record
    'b,2\n'  // Second record
  ].join(''), {encoding: 'utf8'})
  // Read the content
  const content = await fs.readFile(`${os.tmpdir()}/input.csv`)
  // Parse the CSV content
  const records = parse(content)
  // Print records to the console
  records.map( record => console.log(record) )
  // Write a file with one JSON per line for each record
  const json = records.map( JSON.stringify ).join('\n')
  fs.writeFile(`${os.tmpdir()}/output.json`, json)
})()
```

Alternatively, you could use the [Stream API](/parse/api/stream/) by [piping a file readable stream](/parse/recipes/stream_pipe/) to the parser transform stream which is itself piped into a writable stream.

## Alternative encoding

The parser shall comply without interfering with the file encoding. You can specify the file encoding when calling `fs.readFile` by passing the encoding property as a second argument. If the second argument is a string, then it specifies the encoding the source file.

```js
const os = require('os');
const fs = require('fs').promises;
const parse = require('csv-parse/lib/sync');

(async function(){
  // Read the content
  const content = await fs.readFile(`${os.tmpdir()}/input.csv`, 'utf16le')
  // Parse the CSV content
  const records = parse(content)
  // Write a file with one JSON per line for each record
  const json = records.map( JSON.stringify ).join('\n')
  fs.writeFile(`${os.tmpdir()}/output.json`, json)
})()
```

At the time of this writing, the list of Node.js [supported encodings](https://github.com/nodejs/node/blob/master/lib/buffer.js) includes 'utf8', 'ucs2', 'utf16le', 'latin1', 'ascii', 'base64', 'hex'.
