---
title: Promises usage
description: CSV Parse - how to use promises with the latest Nodejs Stream API.
keywords: ['csv', 'parse', 'parser', 'recipe', 'promises', 'stream', 'pipe', 'read']
---

# Promises usage

Starting with Node.js version 15, the Stream API promise a new ["stream/promises" module](https://nodejs.org/api/stream.html#stream_streams_promises_api).

Part of the Stream Promises module is the `finished` function. The Function plugs into a stream and resolves a promise when it is no longer readable, writable or has experienced an error or a premature close event.

The [promises example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/recipe.promises.js) leverages `pipe` as well as `finished` to provide a convenient solution to read a file from the file system and to pipe its output into the parser.

This example is available with the command `node samples/recipe.promises.js`.

`embed:packages/csv-parse/samples/recipe.promises.js`
