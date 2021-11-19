---
title: File system interaction
description: Read and write UTF-8 CSV files 
keywords: ['csv', 'parse', 'parser', 'recipe', 'file', 'fs', 'read', 'write', 'utf8', 'utf-8', 'bom']
---

# File system interaction

This recipe illustrates how to read and write to an UTF-8 file with a byte order mark (BOM).

The native Node.js File System module named `fs` is used to read the content of a file. The parser doesn't provide any file access method, it is not its responsibility, and using the native `fs` module conjointly with the `csv-parse` is easy and natural.

You must first choose the right API. This package exposed multiple API all backed by the same parsing algorithm and supporting the same options. Whether you select one API over another one encompasses the scope of this page and is documented inside the [API section]('/parse/api/').

The easiest way is using the sync API. You read the file and get its content. You then inject this content into the parser and get the result as an array of records. Records may be printed to the console and written to a file one JSON per line for each record. The [final code](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/recipe.file.js) looks like:

`embed:packages/csv-parse/samples/recipe.file.js`

Alternatively, you could use the [Stream API](/parse/api/stream/) by [piping a file readable stream](/parse/recipes/stream_pipe/) to the parser transform stream which is itself piped into a writable stream.

## Alternative encoding

The parser shall comply without interfering with the file encoding. You can specify the file encoding when calling `fs.readFile` by passing the encoding property as a second argument. If the second argument is a string, then it specifies the encoding of the source file.

An alternative is to initialize the parser with the `encoding` option and [writing bytes](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/recipe.file.utf16le.js) to it.

`embed:packages/csv-parse/samples/recipe.file.utf16le.js`

At the time of this writing, the list of Node.js [supported encodings](https://github.com/nodejs/node/blob/master/lib/buffer.js) includes 'utf8', 'ucs2', 'utf16le', 'latin1', 'ascii', 'base64', 'hex'.
