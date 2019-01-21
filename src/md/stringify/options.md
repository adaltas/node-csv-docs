---
title: Options
description: Options relative to the csv-stringify package
keywords: ['csv', 'stringify', 'options']
sort: 3
---

# CSV Stringify options

All options are optional. All the options from the [Node.js Writable Stream API](https://nodejs.org/api/stream.html#stream_constructor_new_stream_writable_options) and the [Node.js Readable Stream API](https://nodejs.org/api/stream.html#stream_new_stream_readable_options) are supported and passed as is.

## Available options

* [`cast`](/stringify/options/cast/)   
  Defines custom cast for certain data types; was `formatters` until version 4.3.1.
  * `boolean`
    Custom function to transform boolean values.
  * `date`
    Custom function to transform date values.
  * `number`
    Custom function to transform number values.
  * `object`
    Custom function to transform object literals.
* [`columns`](/stringify/options/columns/) (array|object)   
  List of properties when records are provided as objects; work with records in the form of arrays based on index position; order matters; auto discovered in the first record when the user write objects, can refer to nested properties of the input JSON, see the "header" option on how to print columns names on the first line.
* [`delimiter`](/stringify/options/delimiter/) (string)   
  Set the field delimiter, one or multiple characters, defaults to a comma.   
* `eof`   
  Add the value of "options.rowDelimiter" on the last line, default to true.   
* `escape` (string|Buffer)   
  Single character used for escaping; only apply to characters matching the `quote` and the `escape` options default to `"`.   
* [`header`](/stringify/options/header) (boolean)   
  Display the column names on the first line if the columns option is provided or discovered.   
* `quote` (string|Buffer|boolean)   
  The quote characters, defaults to the `"`, an empty quote value will preserve the original field.   
* `quoted` (boolean)   
  Boolean, default to false, quote all the non-empty fields even if not required.
* `quoted_empty` (boolean)   
  Quote empty strings and overrides `quoted_string` on empty strings when defined; default is `false`.
* `quoted_match` (boolean)   
  Quote all fields matching a regular expression; default is `false`.
* `quoted_string` (boolean)   
  Quote all fields of type string even if not required; default is `false`.
* `record_delimiter` (string|Buffer)   
  String used to delimit record rows or a special value; special values are 'auto', 'unix', 'mac', 'windows', 'ascii', 'unicode'; defaults to 'auto' (discovered in source or 'unix' if no source is specified); was `rowDelimiter` until version 4.3.1.
  
## Choose your style

The code uses snake case as the conventional style for function and variable names. In snake case, all letters are lowercase and underscores separate words. It is however accepted to provide options in camel case. Thus, `record_delimiter` and `recordDelimiter` are equivalent when initialising a new instance of `stringify`. The option will be converted into snake case and exposed as such. For example, in case you need to access the `record_delimiter` option, use `generate().options.record_delimiter` and not `generate().options.recordDelimiter`. Choose the case which best fit your coding style.
