---
title: Options
description: Options relative to the stream-transform package
keywords: ['stream', 'transform', 'options']
sort: 3
---

# Stream Transform options

All options are optional. All the options from the [Node.js Writable Stream API](https://nodejs.org/api/stream.html#stream_constructor_new_stream_writable_options) and the [Node.js Readable Stream API](https://nodejs.org/api/stream.html#stream_new_stream_readable_options) are supported and passed as is.

## Available options

*   `parallel` (number)   
     The number of transformation callbacks to run in parallel, default to "100".
*   `consume` (boolean)   
    In the absence of a consumer, like a stream.Readable, trigger the
    consumption of the stream.
*   `params` (anything)   
    Pass user defined parameters to the user handler as last argument.
