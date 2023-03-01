---
title: Stream API
navtitle: Stream
description: The stream API might not be the most pleasant API to use but is scalable.
keywords: ['csv', 'stringify', 'api', 'stream', 'async', 'pipe', 'native', 'write', 'events']
sort: 3.1
---

# Node.js Stream API

The main module of the package implements the native Node.js [transform stream](https://nodejs.org/api/stream.html#stream_object_mode_duplex_streams) which is both readable and writable.

This is the recommended approach if you need a maximum of power. It ensures
scalability by treating your data as a stream from the source to the destination.

The signature is `const stream = stringify([options])`.

The [stream example](https://github.com/adaltas/node-csv/blob/master/packages/csv-stringify/samples/api.stream.js) write 2 records and register multiple events to read the generated CSV output and get notified when the serialisation is finished.

`embed:packages/csv-stringify/samples/api.stream.js`

_After cloning the project repository, run this example with the command `node samples/api.stream.js`._
