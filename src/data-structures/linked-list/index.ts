/* eslint-disable no-use-before-define */
class LinkedListNode<T> {
  value: T
  next: LinkedListNode<T> | null
  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

export class LinkedList<T> {
  head: LinkedListNode<T> | null = null
  constructor(initialValues?: T[]) {
    initialValues?.forEach((value) => this.addLast(value))
  }

  addFirst(value: T) {
    const node = new LinkedListNode(value)
    node.next = this.head
    this.head = node
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

  addLast(value: T) {
    const node = new LinkedListNode(value)
    if (!this.head) {
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
