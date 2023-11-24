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

  search(item: T) {
    for (let i = 0; i < this.#items.length; i++) {
      if (this.#items[i] === item) {
        return i
      }
    }
    return -1
  }
}
