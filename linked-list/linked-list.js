/**
 * Abstract Data Type: Linked List
 */
module.exports = function() {
  class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
  }

  /* Private Variables */
  const head = new Node('head');

  class LinkedList {
    /**
     * Locates and returns the node containing in the input element
     * @param {any} element The search criteria.
     * @returns {Node} The node containing the search criteria.
     */
    find(element) {
      let node = head;
      while (node.element !== element) {
        node = node.next();
        if (node === null) {
          break;
        }
      }
      return node;
    }

    /**
     * Searches the linked list for the node prior to the the node containing the input data
     * @param {any} element The search criteria
     * @returns {Node} The node prior to the node containing the search criteria.
     */
    findPrevious(element) {
      let currentNode = this.head;
      while (currentNode !== null && currentNode.next.element !== element) {
        currentNode = currentNode.next;
      }
      return currentNode;
    }

    /**
     * Inserts a new node into the linked listed
     * @param {any} newElement The value to be inserted as new node.
     * @param {any} prevItem The value of the node that will store newElement as it's 'next' property.
     * @returns {Node} The new node inserted.
     */
    insert(element, prevItem) {
      let newNode = new Node(element);
      let current = this.find(prevItem);
      newNode.next = current.next;
      current.next = newNode;
      return newNode;
    }

    /**
     * Logs out the contents of the linked list to the console.
     */
    display() {
      const node = this.head;
      while (node.next !== null) {
        console.log(node.next.element);
        node = node.next;
      }
    }

    /**
     * Removes an element from the linked list.
     * @param {any} item The element to be removed
     */
    remove(element) {
      let prevNode = this.findPrevious(element);
      if (prevNode.next !== null) {
        prevNode.next = prevNode.next.next || null;
      }
    }
  }

  return new LinkedList();
};
