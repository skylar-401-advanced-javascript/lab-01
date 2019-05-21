'use strict';

module.exports.greeting = function(name) {
  if(typeof(name) !== 'string') {
    return null;
  } else {
    return `hello ${name}`;
  }
};