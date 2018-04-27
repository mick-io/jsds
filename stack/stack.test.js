const Stack = require('./stack');
const assert = require('assert');
const { describe, afterEach, it } = require('mocha');

describe('Stack', () => {
  const stack = new Stack();
  const testData = [
    null,
    true,
    false,
    'stringy',
    /regex/,
    0,
    Number.MAX_SAFE_INTEGER,
    Number.MIN_SAFE_INTEGER,
    Math.PI,
    [],
    {},
    () => {}
  ];
  const pushTestData = () => {
    testData.map(data => stack.push(data));
  };

  afterEach(() => {
    stack.clear();
    pushTestData();
  });

  describe('Push Method', () => {
    it('Accepts values of all data types', () => {
      pushTestData();
      assert.deepEqual(stack.length, testData.length);
    });
  });

  describe('Clear Method', () => {
    it('Removes all elements from the Stack', () => {
      stack.clear();
      assert.deepEqual(stack.length, 0);
      assert.deepEqual(stack.peek(), undefined);
    });
  });

  describe('Peek Method', () => {
    it('Returns the top element without removing it', () => {
      const topItem = stack.peek();
      assert.deepEqual(topItem, testData[testData.length - 1]);
      assert.deepEqual(stack.length, testData.length);
    });
  });

  describe('Pop Method', () => {
    it('Returns and removes the top element of the Stack', () => {
      const poppedItem = stack.pop();
      assert.strictEqual(stack.length + 1, testData.length);
      assert.strictEqual(poppedItem, testData[testData.length - 1]);
    });
  });
});
