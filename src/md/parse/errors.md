---
title: Commons errors
description: Commons errors encountered while using the CSV parser
keywords: ['csv','parse', 'error', 'mistake']
sort: 5
---

# Commons errors

## End notification

Situation:

You are using the "finish" event and you don't have all your records. The "readable" event is still being called with a few records left.

Solution:

The parser is both a writable and a readable stream. You write data and you read records. Following [Node.js. stream documentation](https://nodejs.org/api/stream.html), the "finish" event is from the write API and is emitted when the input source has flushed its data. The "end" event is from the read API and is emitted when there is no more data to be consumed from the stream.

Issue: https://github.com/adaltas/node-csv-parse/issues/204
