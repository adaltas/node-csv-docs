---
title: CSV and object generator
layout: page
tags: ['intro','page']
pageOrder: 1
github: 'https://github.com/wdavidw/node-csv-generate'
---

[![Build Status](https://secure.travis-ci.org/wdavidw/node-csv-generate.png)][travis-csv-generate]

This package provides a flexible generator of CSV strings and Javascript objects
implementing the Node.js `stream.Readable` API.

Source code for this project is available on [GitHub][generate].

Features includes:

*   random or pseudo-random seed based generation
*   `stream.Readable` implementation

## Usage

Run `npm install csv` to install the full csv module or run
`npm install csv-generate` if you are only interested by the CSV parser.

Use the callback style API for simplicity or the stream based API for
scalability.

### Callback API   

`generate([options])`   

### [Node.js Stream API][stream]   

`generate([options], callback)`   

For additionnal usage and example, you may refer to
[the example page](/generate/examples/),
[the "samples" folder][generate-samples] and [the "test" folder][generate-test].

## Options

Options may include:   

*   `duration`   
    Period to run in milliseconds, default to 4 minutes.
*   `columns`   
    Define the number of generated fields and the generation 
    method. If columns is an integer, it corresponds to the 
    number of fields. If it is an array, each element correspond 
    to a field. If the element is a function, the function will generate
    the field value, if it is a string, it call the registered 
    function of the same name. Default to 8 ascii columns.
*   `max_word_length`   
    Maximum number of characters per word. Default to 16.
*   `seed`   
    Generate idempotent random characters if a number provided
*   `length`   
    Number of lines or records to generate.   
*   `objectMode`   
    Whether this stream should behave as a stream of objects. Meaning 
    that stream.read(n) returns a single value instead of a Buffer of 
    size n. Default=false   
*   `highWaterMark`   
    The maximum number of bytes to store in the internal buffer 
    before ceasing to read from the underlying resource. Default=16kb

All options are optional.

## Migration

Most of the generator is imported from its parent project [CSV][csv] in a effort
to split it between the generator, the parser, the transformer and the stringifier.

[csv]: https://github.com/wdavidw/node-csv
[stream]: http://nodejs.org/api/stream.html#stream_class_stream_transform
[travis-csv-generate]: http://travis-ci.org/wdavidw/node-csv-generate
[generate]: https://github.com/wdavidw/node-csv-generate
[generate-samples]: https://github.com/wdavidw/node-csv-generate/tree/master/samples
[generate-test]: https://github.com/wdavidw/node-csv-generate/tree/master/test
