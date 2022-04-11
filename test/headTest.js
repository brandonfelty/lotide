const assertEqual = require('../assertEqual');
const head = require('../head')

assertEqual(head([5,6,7]), 5);
assertEqual(head(["hello", "Lighthouse", "Labs"]), "hello");
assertEqual(head([1]),1);
assertEqual(head([]), undefined);