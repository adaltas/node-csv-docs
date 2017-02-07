---
title: CSV and object transformer
layout: page
tags: ['intro','page']
pageOrder: 1
github: 'https://github.com/wdavidw/node-stream-transform'
---

[![Build Status](https://secure.travis-ci.org/wdavidw/node-stream-transform.png)][travis-stream-transform]

This project provides a simple object transformation framework implementing the
Node.js `stream.Transform` API. It was originally developed as a part of the Node.js
[CSV package][csv] (`npm install csv`) and can be used independently.

Source code for this project is available on [GitHub][transform].

*   Simple callback based API
*   Node.js [stream.Transform][stream] API, pipe through it
*   synchronous versus asynchronous user callbacks
*   Accept object, array or JSON as input and output
*   Sequential or user-defined concurrent execution
*   Skip and create new records
*   Alter or clone input data

## Usage

Run `npm install csv` to install the full CSV module or run
`npm install stream-transform` if you are only interested by this package.   

Use the callback style API for simplicity or the stream based API for
scalability or mix the 2 APIs.   

### Callback API   

`transform(data, handler, [options], callback)`     

### [Node.js Stream API][stream]   

`transform(data, [options], handler, [options], [callback])`   

For additionnal usage and example, you may refer to
[example page](/transform/examples/),
[the "samples" folder][transform-samples] and [the "test" folder][transform-test].

## Options and properties

Options include:

*   `parallel` (number)   
     The number of transformation callbacks to run in parallel, default to "100".   
*   `consume` (boolean)   
    In the absence of a consumer, like a stream.Readable, trigger the
    consumption of the stream.   
*   `params` (anything)   
    Pass user defined parameters to the user handler as last argument.   

Available properties:

*    `transform.running`   
      The number of transformation callback being run at a given time.   
*    `transform.started`   
      The number of transformation callback which have been initiated.   
*    `transform.finished`   
      The number of transformation callback which have been executed.   

## Synchronous versus asynchronous execution

The mode is defined by the signature of transformation function. It is expected
to run synchronously when it declares only one argument, the data to
transform. It is expected to run asynchronously when it declares two arguments,
the data to transform and the callback to be called once the transformed data
is ready.

In synchronous mode, you may simply return the altered data or throw an error.
In asynchronous mode, you must call the provided callback with 2 arguments, the
error if any and the altered data.

Using the asynchronous mode present the advantage that more than one record may
be emitted per transform callback.

## Array versus objects

The transformation function may either receive arrays or objects.

If you specify the `columns` read option, the `row` argument will be
provided as an object with keys matching columns names. Otherwise it
will be provided as an array.

## Sequential versus concurrent execution

By sequential, we mean only 1 transformation function is running at a given
time. By concurrent, we mean a maximum of x functions are running in parrallel.
The number of running functions is defined by the "parallel" option. When set to
"1", the mode is sequential, when above "1", it defines the maximum of running
functions. Note, this only affect asynchronous executions.

## Skipping and creating records

Skipping records is easily achieved by returning null in synchonous mode or
passing null to the callback handler in asynchonous mode. Generating multiple
records is only supported in asynchonous mode by providing n-arguments after the
error argument instead of simply one.

## Altering or cloning the provided data

The data recieved inside the transformation function is the original data and is
not modified nor cloned. Depending on which api you choose, it may be provided
in the constructor or send to the `write` function. If you wish to not alter the
original data, it is your responsibility to send a new data in your
transformation function instead of the original modified data.

[travis-stream-transform]: http://travis-ci.org/wdavidw/node-stream-transform
[stream]: http://nodejs.org/api/stream.html#stream_class_stream_transform
[csv]: https://github.com/wdavidw/node-csv
[transform]: https://github.com/wdavidw/node-stream-transform
[transform-samples]: https://github.com/wdavidw/node-stream-transform/tree/master/samples
[transform-test]: https://github.com/wdavidw/node-stream-transform/tree/master/test
