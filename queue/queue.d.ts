export declare class Queue {
  /**
   * @returns {number} 1 based size of the queue
   */
  get size(): number

  /**
   * @returns {any} returns the element at the front of the queue.
   */
  get front(): any

  /**
   * @returns {any} returns the element
   */
  get back(): any

  /**
   * Adds an element to the queue.
   * @param {any} element the element to be added to the queue
   */
  enqueue(element: any): void

  /**
   * Removes and returns an element from the front of the queue.
   * @returns {any} the front element of the queue.
   */
  dequeue(): any

  /**
   * Checks the Queue for a given element.
   * @param {any} element The element to be searched for
   * @returns {boolean} Returns true if the element is in the queue.
   */
  contains(element: any): boolean

  /**
   * Removes all elements from the queue.
   * @returns {void}
   */
  clear(): void
}
