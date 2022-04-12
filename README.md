# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first element in an array
* `tail(array)`: returns the contents of an array without the first element
* `middle(array)`: returns the elements located at the centre of an array
* `assertArraysEqual(actualArray, expectedArray)`: returns an assertion based on if two arrays are equal
* `assertEqual(array1, array2)`: returns an assertion based on if two values are equal
* `assertObjectsEqual(actualObject, expectedObject)`: returns an assertion based on if two objects are equal
* `eqArrays(array1, array2)`: returns true or false if two arrays are equal
* `eqObjects(object1, object2)`: returns true or false if two objects are equal
* `countLetters(string)`: returns count of each of the letters in that string
* `countOnly(allItems, itemsToCount)`: returns counts for a subset of those items
* `findKey(object, condition)`: returns any key that matches the value condition
* `findKeyByValue(object, targetValue)`: returns any key that matches the target value
* `letterPositions(string, targetValue)`: returns the index of where a target letter is found
* `map(array, function())`: returns a new array based on the input function
* `reverse(string)`: returns a new string that has the elements reversed
* `takeUntil(array, function())`: returns a new array that utilizes the callback function to change the conditions
* `without(array, target)`: returns a new array that removes any elements that contain the target

