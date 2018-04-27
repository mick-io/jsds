/**
 * Stack: Abstract Data Type
 */
module.exports = (function() {
  /* Private Variables */
  let dataStore = [];
  let size = 0;

  class Stack {
    /**
     * @returns {number} 1 based size of the stack
     */
    get length() {
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

  return Stack;
})();
