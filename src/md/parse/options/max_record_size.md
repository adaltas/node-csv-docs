---
title: Option max_record_size
navtitle: max_record_size
description: Option "max_record_size" set a limit on the maximum number of characters of a record.
keywords: ['csv', 'parse', 'options', 'max_record_size', 'buffer', 'overflow', 'security']
---

# Option `max_record_size`

The `max_record_size` option set a limit on the maximum number of characters to be contained in the field and line before an exception is raised.

* Type: `number`
* Optional
* Default: `0` (unlimited)
* Since: 4.0.0

A castable string will be converted to an integer and it is not activated by default. It is available since version version 4.0.0 and it was previously named "max_limit_on_data_read".

## Use cases

This feature guards against a wrong [`delimiter`](/parse/options/delimiter/) or `record_delimiter`. It also prevent a CSV dataset from an uncontrolled source to fill the internal buffer memory.

## Example

This [example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.max_record_size.js) will throw an error with the message "Max Record Size: record exceed the maximum number of tolerated bytes of 10 on line 2" because the second record is longer than 10 characters.

`embed:packages/csv-parse/samples/option.max_record_size.js`
