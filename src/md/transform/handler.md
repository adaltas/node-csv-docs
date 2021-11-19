---
title: Handler
description: Stream Transform - user handler function
keywords: ['stream', 'transform', 'handler', 'synchronous', 'asynchronous', 'alter', 'skip', 'clone']
sort: 5
---

# Stream Transform user handler function

The handler function is the responsible for handling all the record transformation. It is the responsibility of the developer to write it. It can clone or modify the input records, skip them and emit multiple records.

## Synchronous versus asynchronous execution

The mode is defined by the signature of transformation function. It is expected to run synchronously when it declares only one argument, the data to transform. It is expected to run asynchronously when it declares two arguments, the data to transform and the callback to be called once the transformed data is ready.

In synchronous mode, you may simply return the altered data or throw an error. In asynchronous mode, you must call the provided callback with 2 arguments, the error if any or the altered data.

Using the asynchronous mode present the advantage that more than one record may be emitted per transform callback.


## Defining synchronous transformations

In the [synchronous example](https://github.com/adaltas/node-csv/blob/master/packages/stream-transform/samples/module.sync.js), the transformation function is run synchronously because it only declares one argument, the data to be transformed. It is expected to return the transformed data or to throw an error.

`embed:packages/stream-transform/samples/module.sync.js`

## Defining asynchronous transformations

In the [asynchronous example](https://github.com/adaltas/node-csv/blob/master/packages/stream-transform/samples/module.async.js), the transformation callback declares two arguments, the data to transform and the callback to call once the data is ready. The transformation callback is executed concurrently with a maximum of 20 parallel executions.

`embed:packages/stream-transform/samples/module.async.js`

## Altering or cloning the provided data

The data received inside the transformation function is the original data and is not modified nor cloned. Depending on which api you choose, it may be provided in the constructor or send to the `write` function. If you wish to not alter the original data, it is your responsibility to send a new data in your transformation function instead of the original modified data.

## Skipping records

Skipping records is easily achieved by returning null in synchronous mode or passing null to the callback handler in asynchronous mode.

## Creating multiple records

Generating multiple records is only supported in asynchronous mode by providing n-arguments after the error argument instead of simply one.
