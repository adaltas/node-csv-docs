---
title: Usage
description: Object transformations implementing the Node.js `stream.Transform` API
keywords: ['intro','page']
sort: 1
---

## Stream transformation for Node.js

## Introduction

[![Build Status](https://api.travis-ci.org/adaltas/node-stream-transform.svg)](https://travis-ci.org/#!/adaltas/node-stream-transform)

This project provides a simple object transformation framework implementing the Node.js `stream.Transform` API. It was originally developed as a part of the Node.js [CSV package](https://github.com/adaltas/node-csv) (`npm install csv`) and can be used independently.

Source code for this project is available on [GitHub](https://github.com/adaltas/node-stream-transform).

## Main features

*   Simple callback based API
*   Node.js [stream.Transform](http://nodejs.org/api/stream.html#stream_class_stream_transform) API, pipe through it
*   synchronous versus asynchronous user callbacks
*   Accept object, array or JSON as input and output
*   Sequential or user-defined concurrent execution
*   Skip and create new records
*   Alter or clone input data

## Usage

Run `npm install csv` to install the full CSV module or run `npm install stream-transform` if you are only interested by this package.

Use the callback style API for simplicity or the stream based API for scalability or mix the 2 APIs.

The source code uses modern JavaScript features and run natively in Node 7.6+. For older browsers or older versions of Node, use the module inside "./lib/es5".

Data is expected to be an array of records. Records may be provided in any form such as a string, an array or an object. Options can be placed in any positions despite being represented as the second argument.

## Synchronous versus asynchronous execution

The mode is defined by the signature of transformation function. It is expected to run synchronously when it declares only one argument, the data to transform. It is expected to run asynchronously when it declares two arguments, the data to transform and the callback to be called once the transformed data is ready.

In synchronous mode, you may simply return the altered data or throw an error. In asynchronous mode, you must call the provided callback with 2 arguments, the error if any and the altered data.

Using the asynchronous mode present the advantage that more than one record may be emitted per transform callback.

## Sequential versus concurrent execution

By sequential, we mean only 1 transformation function is running at a given time. By concurrent, we mean a maximum of x functions are running in parrallel. The number of running functions is defined by the "parallel" option. When set to "1", the mode is sequential, when above "1", it defines the maximum of running functions. Note, this only affect asynchronous executions.

## Skipping and creating records

Skipping records is easily achieved by returning null in synchonous mode or passing null to the callback handler in asynchonous mode. Generating multiple records is only supported in asynchonous mode by providing n-arguments after the error argument instead of simply one.

## Altering or cloning the provided data

The data received inside the transformation function is the original data and is not modified nor cloned. Depending on which api you choose, it may be provided in the constructor or send to the `write` function. If you wish to not alter the original data, it is your responsibility to send a new data in your transformation function instead of the original modified data.
