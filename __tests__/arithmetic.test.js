'use strict';

const arithmetic = require('../lib/arithmetic.js');
const greeting = require('../lib/greet.js');

describe('addition test', () => {
  const arr = [3,3,3];
  it('should return 9', () => {
    expect(arithmetic.add(arr)).toBe(9);
  });
});

describe('addition test', () => {
  const arr = [3,'3',3];
  it('should return null', () => {
    expect(arithmetic.add(arr)).toBe(null);
  });
});

describe('subtraction test', () => {
  const arr = [9,3,3];
  it('should return 3', () => {
    expect(arithmetic.subtract(arr)).toBe(3);
  });
});

describe('subtraction test', () => {
  const arr = [9,'3',3];
  it('should return null', () => {
    expect(arithmetic.subtract(arr)).toBe(null);
  });
});

describe('multiplication test', () => {
  const arr = [3,3,3];
  it('should return 27', () => {
    expect(arithmetic.mult(arr)).toBe(27);
  });
});

describe('multiplication test', () => {
  const arr = [3,'3',3];
  it('should return null', () => {
    expect(arithmetic.mult(arr)).toBe(null);
  });
});

describe('division test', () => {
  it('should return 2', () => {
    expect(arithmetic.div(6,3)).toBe(2);
  });
});

describe('division test', () => {
  it('should return null', () => {
    expect(arithmetic.div(6,0)).toBe(null);
  });
});

describe('greet test', () => {
  it('should return hello jeff', () => {
    expect(greeting.greeting('jeff')).toBe('hello jeff');
  });
});

describe('greet test', () => {
  it('should return null', () => {
    expect(greeting.greeting(9)).toBe(null);
  });
});