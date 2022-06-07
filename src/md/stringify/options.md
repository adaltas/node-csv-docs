---
title: Options
description: Options relative to the csv-stringify package
keywords: ['csv', 'stringify', 'options']
sort: 4
---

# CSV Stringify options

All options are optional. All the options from the [Node.js Writable Stream API](https://nodejs.org/api/stream.html#stream_constructor_new_stream_writable_options) and the [Node.js Readable Stream API](https://nodejs.org/api/stream.html#stream_new_stream_readable_options) are supported and passed as is.

## Available options

* `bom` (boolean)   
  _Since version 5.4.0_   
  Prepend the byte order mark (BOM) to the output stream.
* [`cast`](/stringify/options/cast/)   
  _Since version 1.1.0_   
  Defines custom cast for certain data types; was `formatters` until version 4.3.1.
  * `bigint`
    Custom function to transform bigint values.
  * `boolean`
    Custom function to transform boolean values.
  * `date`
    Custom function to transform date values.
  * `number`
    Custom function to transform number values.
  * `object`
    Custom function to transform object literals.
  * `string`
    Custom function to transform string values.
* [`columns`](/stringify/options/columns/) (array|object)   
  _Since version 0.0.1_   
  Influence the generation of records at the field level.
* [`delimiter`](/stringify/options/delimiter/) (string)   
  _Since version 0.0.1_   
  Set the field delimiter, one or multiple characters, defaults to a comma.   
* `eof` (boolean)   
  _Since version 0.0.2_   
  Add the value of "options.record_delimiter" on the last line, default to true.   
* `escape` (string|Buffer)   
  _Since version 0.0.1_   
  Single character used for escaping; only apply to characters matching the `quote` and the `escape` options default to `"`.   
* [`header`](/stringify/options/header/) (boolean)   
  _Since version 0.0.1_   
  Display the column names on the first line if the columns option is provided or discovered.   
* `quote` (string|Buffer|boolean)   
  _Since version 0.0.1_   
  The quote characters surrounding a field, defaults to the `"` (double quotation marks), an empty quote value will preserve the original field, whether it contains quotation marks or not.   
* [`quoted`](/stringify/options/quoted/) (boolean)    
  _Since version 0.0.1_   
  Boolean, default to false, quote all the non-empty fields even if not required.
* [`quoted_empty`](/stringify/options/quoted_empty/) (boolean)   
  _Since version 5.1.0_   
  Quote empty strings and overrides `quoted_string` on empty strings when defined; default is `false`.
* [`quoted_match`](/stringify/options/quoted_match/) (String|RegExp)   
  _Since version 5.1.0_   
  Quote all fields matching a regular expression; default is `false`.
* [`quoted_string`](/stringify/options/quoted_string/) (boolean)   
  _Since version 5.1.0_   
  Quote all fields of type string even if not required; default is `false`.
* `record_delimiter` (string|Buffer)    
  _Since version 0.0.1_   
  String used to delimit record rows or a special value; special values are 'auto', 'unix', 'mac', 'windows', 'ascii', 'unicode'; defaults to 'auto' (discovered in source or 'unix' if no source is specified); was `rowDelimiter` until version 4.3.1.
  
## Choose your style

The code uses snake case as the conventional style for function and variable names. In snake case, all letters are lowercase and underscores separate words. It is however accepted to provide options in camel case. Thus, `record_delimiter` and `recordDelimiter` are equivalent when initialising a new instance of `stringify`. The option will be converted into snake case and exposed as such. For example, in case you need to access the `record_delimiter` option, use `generate().options.record_delimiter` and not `generate().options.recordDelimiter`. Choose the case which best fit your coding style.
