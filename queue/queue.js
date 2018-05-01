/**
 * Abstract Data Type: Queue
 */
module.exports = function() {
  /* Private Variables */
  let dataStore = [];

  class Queue {
    /**
     * @returns {number} 1 based size of the queue
     */
    get size() {
      return dataStore.length;
    }

    /**
     * @returns {any} returns the element at the front of the queue.
     */
    get front() {
      return dataStore[0];
    }

    /**
     * @returns {any} returns the element
     */
    get back() {
      return dataStore[dataStore.length - 1];
    }

    /**
     * Adds an element to the queue.
     * @param {any} element the element to be added to the queue
     */
    enqueue(element) {
      dataStore.push(element);
    }

    /**
     * Removes and returns an element from the front of the queue.
     * @returns {any} the front element of the queue.
     */
    dequeue() {
      return dataStore.shift();
    }

    /**
     * Removes all elements from the queue.
     */
    clear() {
      dataStore = [];
    }
  }

  return new Queue();
};
