---
title: Option comment_no_infix
navtitle: comment_no_infix
description: Option "columns" generate records as object literals instead of arrays.
keywords: ['csv', 'parse', 'options', 'columns']
---

# Option `comment_no_infix`

The `comment_no_infix` option restricts the definition of comments to full lines. Comment characters defined in the middle of a line are not interpreted as such.

Comments are disabled by default. Thus, this option only takes effect when comments are activated.

* Type: `boolean`
* Optional
* Default: `false`
* Since: `5.5.0`
* Related: [`comment`](/parse/options/comment/) &mdash; see [Available Options](/parse/options/#available-options)

## Example

While the default behavior generates `[ [ 'a', 'b' ] ]`, activating `comment_no_infix` in the example below disregards the comment character present in the second line.

`embed:packages/csv-parse/samples/option.comment_no_infix.js`
