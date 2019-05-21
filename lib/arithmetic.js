'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(arr) {
  let total = 0;
  for(let number in arr) {
    if(typeof(arr[number]) !== 'number') {
      return null;
    } else {
      total += arr[number];
    }
  }
  return total;
};

arithmetic.subtract = function (arr) {
  let total = 0;
  for(let i = 0; i < arr.length; i++){
    if(typeof(arr[i]) !== 'number') {
      return null;
    }
    if(i === 0) total = arr[i]; 
    else total -= arr[i];
  }
  return total;
};

arithmetic.mult = function(arr) {
  let total = 1;
  for(let number in arr) {
    if(typeof(arr[number]) !== 'number') {
      return null;
    } else {
      total *= arr[number];
    }
  }
  return total;
};

arithmetic.div = function(a,b) {
  if(typeof(a) !== 'number' || typeof(b) !== 'number' || b === 0) {
    return null;
  } else {
    return a/b;
  }
};