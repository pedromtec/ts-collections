export class Stack<T> {
  #items: T[]

  constructor() {
    this.#items = []
  }

  /**
   * Pushes an item onto the top of the stack.
   * @param item The item that will be added to the top of the stack
   */
  push(item: T): void {
    this.#items.push(item)
  }

  /**
   * Checks if the stack is empty
   * @returns true if the stack is empty
   */
  empty(): boolean {
    return this.#items.length < 1
  }

  /**
   * Remove the item from the top of this stack.
   * @returns the top item
   */
  pop(): T {
    const topItem = this.peek()
    this.#items.pop()
    return topItem
  }

  /**
   * Peek the item from the top of the stack.
   * @returns the top item
   */
  peek(): T {
    if (this.empty()) {
      throw new Error('The stack is empty')
    }
    return this.#items[this.#items.length - 1]
  }

  /**
   * Search an item and returns its index.
   * @returns the item index
   */
  search(item: T): number {
    return this.#items.findIndex((currentItem) => currentItem === item)
  }
}
