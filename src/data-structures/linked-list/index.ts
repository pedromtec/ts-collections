/* eslint-disable no-use-before-define */
class LinkedListNode<T> {
  value: T
  next: LinkedListNode<T> | null
  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

const isValidIndex = (index: number) => {
  return index >= 0 && Math.floor(index) === index
}

export class LinkedList<T> {
  private head: LinkedListNode<T> | null = null

  constructor(initialValues?: T[]) {
    initialValues?.forEach((value) => this.addLast(value))
  }

  isEmpty() {
    return this.head === null
  }

  addFirst(value: T) {
    const node = new LinkedListNode(value)
    node.next = this.head
    this.head = node
  }

  get(index: number) {
    if (!isValidIndex(index)) {
      return undefined
    }

    let current = this.head
    let currentIndex = 0
    while (currentIndex < index && current !== null) {
      current = current.next
      currentIndex++
    }
    return current ? current.value : undefined
  }

  toArray() {
    const array: T[] = []
    let current = this.head
    while (current !== null) {
      array.push(current.value)
      current = current.next
    }
    return array
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head?.next
    }
  }

  removeLast() {
    if (!this.head) {
      return
    }
    if (!this.head.next) {
      this.removeFirst()
      return
    }

    let current = this.head
    while (current.next?.next !== null) {
      current = current.next!
    }
    current.next = current.next.next
  }

  addLast(value: T) {
    const node = new LinkedListNode(value)
    if (this.head === null) {
      this.head = node
      return
    }
    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = node
  }
}
