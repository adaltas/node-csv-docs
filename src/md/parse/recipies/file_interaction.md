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

await fs.writeFile(`${__dirname}/input.csv`, [
  '\ufeff' // BOM
  'a,1\n'  // First record
  'b,2\n'  // Second record
].join(''), {encoding: 'utf8'})
```

We can now access the CSV content of this file with the native Node.js File System module named `fs`. The parse doesn't not provide any file access method, it is not its reponsibilty and using the native `fs` module conjointly with the `csv-parse` is easy and natural.

You must first choose the right API. This package exposed multiple API all backed by the same parsing algorythm and supporting the same options. Wether you select one API over another one encompass the scope of this page and is documented inside the [API section]('/parse/api/').

The easiest way is using the sync API. You read the file and get its content. You then inject this content into the parse and get the result as an array of records. Records may be printed to the console and written to a file one JSON per line for each record:

```js
const fs = require('fs')
const parse = require('csv-parse/lib/parse')
// Read the content
const content = await fs.readFile(`${__dirname}/input.csv`)
// Parse the csv content
const records = parse(content)
// Print records to the console
for(let record in records){
  console.info(record)
}
// Write a file with one JSON per line for each record
ws = fs.createWriteStream(`${__dirname}/output.csv`)
for(let record in records){
  ws.write(`${JSON.stringify(record)}\n`)
}
ws.end()
```

Alternatively, you could use the [Stream API](/parse/api/stream/) by [piping a file readable stream](/parse/recipies/stream_pipe/) to the parser transform stream which is itself piped into a writable stream.
