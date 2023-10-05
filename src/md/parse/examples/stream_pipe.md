---
title: Stream pipe
description: CSV Parse - stream, callback and sync APIs
keywords: ['csv', 'parse', 'parser', 'recipe', 'stream', 'sync', 'pipe', 'read', 'write']
---

# Using pipe to connect multiple streams

Part of the [Stream API](https://nodejs.org/api/stream.html), the [`pipe` function](https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options) is a precious tool used to wire multiple streams. The function is meant to connect a `stream.Readable` source to a `stream.Writable` destination.

The [pipe example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/recipe.pipe.js) reads a file, parses its content, transforms it and print the result to the standard output.

This example is available with the command `node samples/recipe.pipe.js`.

`embed:packages/csv-parse/samples/recipe.pipe.js`
