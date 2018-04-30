const Stack = require('./stack');
const assert = require('assert');

describe('Stack', () => {
  const testData = [
    null,
    true,
    false,
    undefined,
    'stringy',
    /regex/,
    0,
    Number.MAX_SAFE_INTEGER,
    Number.MIN_SAFE_INTEGER,
    Math.PI,
    [],
    {},
    () => {},
  ];

  const pushTestData = stack => {
    testData.map(data => stack.push(data));
  };

  describe('Size Property', () => {
    it('Returns the number of elements within the stack', () => {
      const stack = new Stack();
      pushTestData(stack);
      assert.strictEqual(stack.size, testData.length);
    });

    it('Returns zero, if the stack is empty', () => {
      const stack = new Stack();
      assert.strictEqual(stack.size, 0);
    });
  });

  describe('Push Method', () => {
    it('Accepts values of all data types', () => {
      const stack = new Stack();
      testData.map(value => {
        stack.push(value);
        assert.strictEqual(stack.peek(), value);
      });
    });
  });

  describe('Peek Method', () => {
    it('Returns the top element without removing it', () => {
      const stack = new Stack();
      pushTestData(stack);
      assert.strictEqual(stack.peek(), testData[testData.length - 1]);
      assert.strictEqual(stack.size, testData.length);
    });

    it('Returns undefined if the stack is empty.', () => {
      const stack = new Stack();
      assert.strictEqual(stack.peek(), undefined);
    });
  });

  describe('Clear Method', () => {
    it('Removes all elements from the Stack', () => {
      const stack = new Stack();
      pushTestData(stack);
      assert.notStrictEqual(stack.size, 0);
      stack.clear();
      assert.strictEqual(stack.size, 0);
      assert.strictEqual(stack.peek(), undefined);
    });
  });

  describe('Pop Method', () => {
    it('Returns and removes the top element of the Stack', () => {
      const stack = new Stack();
      pushTestData(stack);
      const poppedItem = stack.pop();
      assert.strictEqual(stack.size + 1, testData.length);
      assert.strictEqual(poppedItem, testData[testData.length - 1]);
    });

    it('Returns undefined if the stack is empty.', () => {
      const stack = new Stack();
      assert.strictEqual(stack.pop(), undefined);
    });
  });
});
