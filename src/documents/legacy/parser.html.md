---
title: Parsing
layout: page
tags: ['intro','page']
pageOrder: 1
---

The library extend the [EventEmitter][event] and emit the following events:

*   *row*   
  Emitted by the parser on each line with the line content as an array of fields.
*   *end*   
  Emitted when no more data will be parsed.
*   *error*   
  Emitted when an error occured.

<a name="write"></a>
`write(chars)`
--------------

Parse a string which may hold multiple lines.
Private state object is enriched on each character until 
transform is called on a new line.

[event]: http://nodejs.org/api/events.html
