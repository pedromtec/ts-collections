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

  it('should remove from the beginning of the list', () => {
    const list = new LinkedList<number>()
    list.addLast(1)
    list.addLast(2)
    list.addLast(3)
    list.addLast(10)
    list.removeFirst()
    list.removeFirst()

    const expectedArray = [3, 10]
    const array = list.toArray()
    expect(array).toEqual(expectedArray)
  })

  it('should remove from the end of the list', () => {
    const list = new LinkedList<number>()
    list.addLast(1)
    list.addLast(2)
    list.addLast(3)

    list.removeLast()
    list.removeLast()

    const expectedArray = [1]
    const array = list.toArray()
    expect(array).toEqual(expectedArray)
  })

  it('should not be possible to remove from an empty list', () => {
    const list = new LinkedList<number>()
    list.addLast(1)
    list.addLast(2)
    list.addLast(3)

    list.removeLast()
    list.removeLast()
    list.removeFirst()

    const expectedArray: number[] = []
    expect(list.toArray()).toEqual(expectedArray)
    list.removeLast()
    expect(list.toArray()).toEqual(expectedArray)
  })

  it('should get an element from a specific index', () => {
    const list = new LinkedList<number>()
    list.addLast(1)
    list.addLast(22)
    list.addLast(3)
    const firstValue = list.get(0)
    const secondValue = list.get(1)

    expect(firstValue).toBe(1)
    expect(secondValue).toBe(22)
  })

  it('should return undefined when try to get an element from an empty list', () => {
    const list = new LinkedList<number>()

    const firstValue = list.get(0)
    const secondValue = list.get(1)

    expect(firstValue).toBe(undefined)
    expect(secondValue).toBe(undefined)
  })

  it('should return undefined when try to get an element from an invalid index', () => {
    const list = new LinkedList<number>([3, 2, 1])
    expect(list.get(3)).toBe(undefined)
    expect(list.get(20)).toBe(undefined)
    expect(list.get(-1)).toBe(undefined)
    expect(list.get(0.6)).toBe(undefined)
    expect(list.get(1.4)).toBe(undefined)
  })

  it('should check if the list is empty', () => {
    const list = new LinkedList(['apple'])
    expect(list.isEmpty()).toBe(false)
    list.removeFirst()
    expect(list.isEmpty()).toBe(true)
  })
})
