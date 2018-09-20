---
title: Options
description: Options relative to the csv-generate package
keywords: ['csv', 'generate', 'options', 'duration', 'columns', 'seed', 'object', 'string']
sort: 3
github: 'https://github.com/adaltas/node-csv-generate'
---

# CSV Generate options

All options are optional.  

*   `duration`   
    Period to run in milliseconds, default to 4 minutes.
*   `columns`   
    Define the number of generated fields and the generation 
    method. If columns is an integer, it corresponds to the 
    number of fields. If it is an array, each element correspond 
    to a field. If the field is a function, the function is expected to return
    a value, if a string, it call the registered function of the same name (eg 
    `Generator.int` for the value "int"), current values are "ascii", "int" 
    and "bool", more could be added by the user or on demand by opending a 
    [pull request](https://github.com/adaltas/node-csv-generate/issues/new). 
    Default to 8 ascii columns.
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
