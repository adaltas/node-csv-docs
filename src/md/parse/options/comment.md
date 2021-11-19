---
title: Option comment
navtitle: comment
description: Option "comment" discard characters.
keywords: ['csv', 'parse', 'options', 'comment', 'escape']
---

# Option `comment`

Treat all the characters after this one as a comment. It can be made of one or multiple escape characters. It is disabled by default by defining an empty string `""`.

* Type: `boolean`
* Optional
* Default: `""`
* Since: early days

The escape sequence can be defined at the begining of record (a line if the record delimiter is a line return) or anywhere else. Every characters found after the escape sequence will be disregarded.

Escaping is disabled inside a quoted field. The escape sequence will be preserved like any other bytes. It cannot be escaped.

# Example

The [comment example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.comment.js) insert two comments, one at the begining of the file and another one after a record.

`embed:packages/csv-parse/samples/option.comment.js`
