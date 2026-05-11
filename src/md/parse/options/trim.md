---
title: Option trim
navtitle: trim
description: Option "trim" ignore whitespaces immediately around the delimiter.
keywords:
  - csv
  - parse
  - options
  - columns
---

# Option `trim`

The `trim` option ignore whitespace characters immediately around the [delimiter](/parse/options/delimiter/). Defaults to `false`. It does not remove whitespace present inside the quotes of a field.

- Type: `boolean`
- Optional
- Default: `false`
- Since: early days
- Related: `ltrim`, `rtrim` &mdash; see [Available Options](/parse/options/#available-options)

The characters interpreted as trimable are ECMAScript [whitespaces](https://tc39.es/ecma262/#sec-white-space) and [line terminator set](https://tc39.es/ecma262/#sec-line-terminators).

- Basic Latin
  - [`0x0020` Space](https://www.fileformat.info/info/unicode/char/0020/index.htm)
  - [`0x0009` CHARACTER TABULATION (HT)](https://www.fileformat.info/info/unicode/char/0009/index.htm)
  - [`0x000a` LINE FEED (LF)](https://www.fileformat.info/info/unicode/char/000a/index.htm)
  - [`0x000d` CARRIAGE RETURN (CR)](https://www.fileformat.info/info/unicode/char/000d/index.htm)
  - [`0x000c` FORM FEED (FF)](https://www.fileformat.info/info/unicode/char/000c/index.htm)
  - [`0x000b` LINE TABULATION (VT)](https://www.fileformat.info/info/unicode/char/000b/index.htm)
- Latin-1 Supplement
  - [`0x00a0` NO-BREAK SPACE (NBSP)](https://www.fileformat.info/info/unicode/char/00a0/index.htm)
- Ogham
  - [`0x1680` OGHAM SPACE MARK](https://www.fileformat.info/info/unicode/char/1680/index.htm)
- General Punctuation
  - [`0x2000` EN QUAD](https://www.fileformat.info/info/unicode/char/2000/index.htm)
  - [`0x2001` EM QUAD](https://www.fileformat.info/info/unicode/char/2001/index.htm)
  - [`0x2002` EN SPACE](https://www.fileformat.info/info/unicode/char/2002/index.htm)
  - [`0x2003` EM SPACE](https://www.fileformat.info/info/unicode/char/2003/index.htm)
  - [`0x2004` THREE-PER-EM SPACE](https://www.fileformat.info/info/unicode/char/2004/index.htm)
  - [`0x2005` FOUR-PER-EM SPACE](https://www.fileformat.info/info/unicode/char/2005/index.htm)
  - [`0x2006` SIX-PER-EM SPACE](https://www.fileformat.info/info/unicode/char/2006/index.htm)
  - [`0x2007` FIGURE SPACE](https://www.fileformat.info/info/unicode/char/2007/index.htm)
  - [`0x2008` PUNCTUATION SPACE](https://www.fileformat.info/info/unicode/char/2008/index.htm)
  - [`0x2009` THIN SPACE](https://www.fileformat.info/info/unicode/char/2009/index.htm)
  - [`0x200a` HAIR SPACE](https://www.fileformat.info/info/unicode/char/200a/index.htm)
  - [`0x2028` LINE SEPARATOR](https://www.fileformat.info/info/unicode/char/2028/index.htm)
  - [`0x2029` PARAGRAPH SEPARATOR](https://www.fileformat.info/info/unicode/char/2029/index.htm)
  - [`0x202f` NARROW NO-BREAK SPACE (NNBSP)](https://www.fileformat.info/info/unicode/char/202f/index.htm)
  - [`0x205f` MEDIUM MATHEMATICAL SPACE (MMSP)](https://www.fileformat.info/info/unicode/char/205f/index.htm)
  - [`0x3000` IDEOGRAPHIC SPACE](https://www.fileformat.info/info/unicode/char/3000/index.htm)
  - [`0xfeff` ZERO WIDTH NO-BREAK SPACE (BOM)](https://www.fileformat.info/info/unicode/char/feff/index.htm)

## Example

This [example](https://github.com/adaltas/node-csv/blob/master/packages/csv-parse/samples/option.trim.js) insert spaces around fields at multiple locations.

`embed:packages/csv-parse/samples/option.trim.js`
