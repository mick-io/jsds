/**
 * Abstract Data Type: Stack
 * A stack is a series of elements which are only accessible from the 'top'.
 * Stacks are the implementation of a last data in, first data out data structure.
 */
module.exports = function() {
  /* Private Variables */
  let dataStore = [];
  let size = 0;

  class Stack {
    /**
     * @returns {number} 1 based size of the stack
     */
    get size() {
      return size;
    }

    /**
     * @param {any} element added to the top of the stack
     */
    push(element) {
      dataStore[size++] = element;
    }

    /**
     * @returns {any} and removes the element at the top of the stack.
     */
    pop() {
      return dataStore[--size];
    }

    /**
     * @returns {any} the element at the top of the stack. Does not remove element
     */
    peek() {
      return dataStore[size - 1];
    }

    /**
     * Removes all elements from the stack
     */
    clear() {
      dataStore = [];
      size = 0;
    }
  }

  return new Stack();
};
