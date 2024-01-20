import { LinkedList } from '.'

describe('LinkedList', () => {
  it('should add elements in the linked list', () => {
    const list = new LinkedList<number>()
    list.addLast(1)
    list.addFirst(2)
    list.addFirst(3)
    list.addLast(10)
    const expectedArray = [3, 2, 1, 10]
    const array = list.toArray()
    expect(array).toEqual(expectedArray)
  })
  it('should create a LinkedList instance with initial values', () => {
    const initialValues = ['apple', 'watermelon', 'orange']

    const list = new LinkedList(initialValues)

    expect(list.toArray()).toEqual(initialValues)
  })
})
