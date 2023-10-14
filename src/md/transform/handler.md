---
title: Handler
description: Stream Transform - user handler function
keywords: ['stream', 'transform', 'handler', 'synchronous', 'asynchronous', 'alter', 'skip', 'clone']
sort: 5
---

# Stream Transform user handler function

The handler function is the responsible for handling all the record transformation. It is the responsibility of the developer to write it. It can clone or modify the input records, skip them and emit multiple records.

## Synchronous versus asynchronous execution

The mode is defined by the return value or the signature of transformation function:

- **synchronous mode**   
  The handler is run synchronously when it declares only one argument and when its return value is a not promise.
- **asynchronous mode with a returned promise**   
  The handler is run asynchronously when it declares only one argument and when its return value is a promise.
- **asynchronous mode with a callback**   
  The handler is run asynchronously until a callback is called when it declare two arguments, the data to transform and the callback to be called once the transformed data is ready.

Using a callback presents the advantage that more than one record may be emitted per transform callback.

## Defining synchronous transformations

In the [synchronous example](https://github.com/adaltas/node-csv/blob/master/packages/stream-transform/samples/mode.sync.js), the transformation function is run synchronously because it only declares one argument, the data to be transformed. It is expected to return the transformed data or to throw an error.

`embed:packages/stream-transform/samples/mode.sync.js`

## Defining asynchronous transformations with a promise

In the [promise example](https://github.com/adaltas/node-csv/blob/master/packages/stream-transform/samples/mode.promise.js), the transformation function is run asynchronously because it only declares one argument and because the return value is a promise with the transformed record.

`embed:packages/stream-transform/samples/mode.promise.js`

## Defining asynchronous transformations

In the [callback example](https://github.com/adaltas/node-csv/blob/master/packages/stream-transform/samples/mode.callback.js), the transformation callback declares two arguments, the data to transform and the callback to call once the data is ready. The transformation callback is executed concurrently with a maximum of 20 parallel executions.

`embed:packages/stream-transform/samples/mode.callback.js`

## Altering or cloning the provided data

The data received inside the transformation function is the original data and is not modified nor cloned. If you wish to alter the original data, it is your responsibility to send a new data in your transformation function instead of the original modified data.

## Skipping records

Skipping records is easily achieved by returning null in synchronous mode or passing null to the callback handler in asynchronous mode.

## Creating multiple records

Generating multiple records is only supported in asynchronous mode when calling a callback by providing n-arguments after the error argument instead of simply one.
