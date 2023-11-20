export class Queue<T> {
  #items: T[] = []

  add(item: T) {
    this.#items.push(item)
  }

  remove() {
    return this.#items.shift()
  }

  peek() {
    return this.#items[0]
  }
}
