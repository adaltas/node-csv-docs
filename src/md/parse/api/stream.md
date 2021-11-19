---
title: Stream API
navtitle: Stream
description: The stream API might not be the most pleasant API to use but is scalable. It is the one upon which all the other implementation are based.
keywords: ['csv', 'parse', 'api', 'stream', 'async', 'pipe', 'native', 'write', 'events']
sort: 3.1
---

# Node.js Stream API

The main module exported by this package implements the native Node.js [transform stream](http://nodejs.org/api/stream.html#stream_class_stream_transform). Transform streams implement both the Readable and Writable interfaces.

This is the recommended approach if you need a maximum of power. The stream API might not be the most pleasant API to use but it ensures scalability by treating your data as a stream from the source to the destination.

The signature is `const stream = parse([options])`.

## Both a readable and writable stream

In the [stream example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/api.stream.js), CSV data is sent through the `write` function and the resulting data is obtained within the `readable` event by calling the `read` function.

`embed:packages/csv-parse/samples/api.stream.js`

## Using the pipe function

The stream API is extensive and connecting multiple streams together is a complex task for newcomers. Part of the stream API, the pipe function does just that. The [pipe recipe](/parse/recipes/stream_pipe/) explains its usage and provides an example.
