---
title: Stream API
navtitle: Stream
description: The stream API might not be the most pleasant API to use but is scalable. It is the one upon which all the other implementation are based.
keywords: ['stream', 'transform', 'api', 'stream', 'async', 'pipe', 'native', 'write', 'events']
sort: 3.1
---

# Node.js Stream API

The main module exported by the package is a native Node.js [Transform stream](https://nodejs.org/api/stream.html#stream_class_stream_transform). Transform streams implement both the Readable and Writable interfaces.

This is the recommended approach if you need a maximum of power. It ensures scalability by treating your data as a stream from the source to the destination and support all the options available.

The signature is `const stream = transform(records, [options], handler, [options], [callback])`.

## Both a readable and writable stream

In the [stream example](https://github.com/adaltas/node-csv/blob/master/packages/stream-transform/samples/api.stream.js), records in the form of an array are sent through the `write` function and the transformed records are obtained within the "readable" event by calling the `read` function.

`embed:packages/stream-transform/samples/api.stream.js`

_This example is available with the command `node samples/api.stream.js`._
