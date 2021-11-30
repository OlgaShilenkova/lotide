# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @olgashil/lotide`

**Require it:**

`const _ = require('@olgashil/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: description "return the first element from the array"
* `tail`: description "return all elements exept firstone from the array"
* `middle`: description`: "take in an array and return the middle-most element(s) of the given array" 
* `without`: description "return a subset of a given array, removing unwanted elements"
* `takeUntil`: description "return a slice of the array with elements taken from the beginning"
* `map`: description "return a new array based on the results of the callback function"
* `letterPositions`: description "return all the indices (zero-based positions) in the string where each character is found"
* `findKeyByValue`: description "scan the object and return the first key which contains the given value"
* `findKey`: description "scan the object and return the first KEY for which the callback returns a truthy VALUE"