export declare class Stack {
  /**
   * @returns {number} 1 based size of the stack
   */
  size(): number

  /**
   * @param {any} element added to the top of the stack
   */
  push(element: any): void

  /**
   * @returns {any} and removes the element at the top of the stack.
   */
  pop(): any

  /**
   * @returns {any} the element at the top of the stack. Does not remove element
   */
  peek(): any

  /**
   * Removes all elements from the stack
   * @return {void}
   */
  clear(): void
}
