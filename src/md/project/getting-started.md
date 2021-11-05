---
title: Getting started
keywords: ['intro','page']
sort: 3
---

# Getting started

## Introduction

This project provides CSV generation, parsing, transformation and serialization
for Node.js.

It has been tested and used by a large community over the years and should be
considered reliable. It provides every option you would expect from an advanced
CSV parser and stringifier.

## Project organisation

The `csv` package is an umbrella project exposing 4 packages:

*   [`csv-generate`](/generate)   
    A flexible generator of CSV string and Javascript objects.
*   [`csv-parse`](/parse)   
    A parser converting CSV text into arrays or objects.
*   [`stream-transform`](/transform)   
    A transformation framework.
*   [`csv-stringify`](/stringify)   
    A stringifier converting records into a CSV text.

It means you can either install the `csv` package directly or selectively install one of its child projects to decrease your dependencies.

## Usage

Installation command is `npm install csv`. If using [Yarn](https://yarnpkg.com/en/), run `yarn add csv`.

The main modules are fully compatible with the Node.js native [stream API](https://nodejs.org/api/stream.html). Alternative APIs are also provided for convenience such as the callback and sync APIs.

For additional usage and examples, you may refer to [the example page](/project/examples/).
