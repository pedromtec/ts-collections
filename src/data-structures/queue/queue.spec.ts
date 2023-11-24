import { Queue } from '.'

describe('Queue', () => {
  it('should remove an item from the queue', () => {
    const queue = new Queue<number>()

    queue.add(1)
    queue.add(2)
    queue.add(3)

    expect(queue.remove()).toBe(1)

    expect(queue.remove()).toBe(2)

    expect(queue.remove()).toBe(3)
  })
})
