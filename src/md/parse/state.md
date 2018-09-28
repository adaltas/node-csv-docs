---
title: State
description: CSV Parse - state properties
keywords: ['intro','page']
sort: 4
---

# CSV Parse state properties

Those properties are for internal usage but may be considered useful to the
final user in some situations. They are accessible from the stream instance returned by
the `parse` function.

* `count` (number)   
  Internal counter of records being processed.
* `empty_line_count` (number)   
  Internal counter of empty lines
* `skipped_line_count` (number)   
  Number of non uniform lines skipped when `relax_column_count` is true.
* `lines` (number)   
  The number of lines encountered in the source dataset, start at 1 for the
  first line.
* `is_int` (regexp, function)   
  The regular expression or function used to determine if a value should be
  cast to an integer.
* `is_float` (regexp, function)   
  The regular expression or function used to determine if a value should be
  cast to a float.
