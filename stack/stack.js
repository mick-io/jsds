/**
 * Abstract Data Type: Stack
 * A stack is a series of elements which are only accessible from the 'top'.
 * Stacks are the implementation of a last data in, first data out data structure.
 */
module.exports = function() {
  /* Private Variables */
  let dataStore = [];

  class Stack {
    /**
     * @returns {number} 1 based size of the stack
     */
    get size() {
      return dataStore.length;
    }

    /**
     * @param {any} element added to the top of the stack
     * @returns {void}
     */
    push(element) {
      dataStore.push(element);
    }

    /**
     * @returns {any} and removes the element at the top of the stack.
     */
    pop() {
      return dataStore.pop();
    }

    /**
     * @returns {any} the element at the top of the stack. Does not remove element
     */
    peek() {
      return dataStore[dataStore.length - 1];
    }

    /**
     * Removes all elements from the stack
     * @returns {void}
     */
    clear() {
      dataStore = [];
    }
  }

  return new Stack();
};
