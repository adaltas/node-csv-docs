---
title: Option delimiter_auto
navtitle: delimiter_auto
description: Option "delimiter_auto" automatically discovers the character used to separate the fields inside a record.
keywords:
  - csv
  - parse
  - options
  - delimiter
  - delimiter_auto
  - discovery
  - separator
  - tsv
  - fields
  - records
---

# Option `delimiter_auto`

Automatically discover the character used to delimit the fields inside a record. Only a single delimiter is discovered. The selection is based on a scoring function.

- Type: `boolean|object`
- Optional
- Default: `false`
- Since: 6.3.0
- Related: [`delimiter`](/parse/options/delimiter/), [`record_delimiter`](/parse/options/record_delimiter/) &mdash; see [Available Options](/parse/options/#available-options)

When enabled, the [`delimiter`](/parse/options/delimiter/) option is initialized to an empty array and the delimiter is resolved from the data instead. Discovery happens only once: as soon as a delimiter is selected, it is reused for the remaining records.

## Usage

Pass `true` to enable discovery with the default configuration:

`embed:packages/csv-parse/samples/option.delimiter_auto.ts`

In this example the colon (`:`) is selected over the comma (`,`) even though the comma carries a higher preference weight: the dot appears more often and just as consistently across both lines, so its score is higher.

## Configuration

The option is configured as a boolean or a configuration object.

The boolean value `true` is converted to a configuration object filled with the default values.

The configuration object accepts the following properties:

- `preferred (object)`  
  Map where each key is a character code and each value is the weight applied to that character's score. Defaults to:

  | Character       | Weight |
  | --------------- | ------ |
  | `,` (comma)     | 1.8    |
  | `\t` (tab)      | 1.8    |
  | `;` (semicolon) | 1.6    |
  | ` ` (space)     | 1.6    |
  | `:` (colon)     | 1.5    |
  | `.` (period)    | 1.4    |
  | `/` (slash)     | 1.4    |

  Any character not listed defaults to a weight of `1`.

- `score (function)`  
  User function computing the score of a character. See [Scoring function](#scoring-function) below.
- `size (number)`  
  Number of bytes buffered from the beginning of the input before discovery runs. Defaults to `2048`. In streaming mode, discovery is deferred until at least `size` bytes have been received, or until the input ends, whichever comes first. A larger value samples more data and improves accuracy at the cost of buffering more before the first record is emitted.

## How discovery works

1. The first chunk of data, up to `size` bytes, is parsed into records.
2. For every ASCII character code (`0` to `126`), the number of occurrences is counted on each line.
3. A score is computed per character from its total count, its standard deviation across lines, and its preference weight.
4. The character with the highest score is selected as the delimiter.

Because only character codes below `127` are inspected, multi-byte and non-ASCII delimiters are not considered.

## Scoring function

The scoring function returns the score used to extract the dominant character. It receives the `info` and `options` arguments.

- `info (object)`
  - `char_code (number)`  
    Character code being scored.
  - `lines (array)`  
    Array indexed by line number whose values are the number of occurrences of the character on that line.
  - `std (number)`  
    Standard deviation of the occurrences across the lines. A low value means the character appears with a consistent frequency on every line.
  - `total (number)`  
    Total number of occurrences of the character.
  - `preferred (boolean)`  
    `true` when the character is present in the `preferred` map.
- `options (object)`  
  The normalized `delimiter_auto` configuration object, exposing `preferred`, `score`, and `size`.

The default implementation rewards characters that are both frequent and evenly distributed across lines (low standard deviation), weighted by the preference map:

```js
const score = (info, options) => {
  return (info.total - info.std) * (options.preferred[info.char_code] || 1)
}
```

You can supply your own `score` function to change how the delimiter is selected, for example to consider only preferred characters or to penalize rare ones more aggressively.
`
