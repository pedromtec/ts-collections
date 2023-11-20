import { Stack } from '.'

describe('Stack', () => {
  it('should push an item on the top of the stack', () => {
    const stack = new Stack<number>()
    stack.push(1)
    stack.push(2)
    expect(stack.peek()).toBe(2)
  })

  it('should remove the last item pushed', () => {
    const stack = new Stack<string>()
    stack.push('Apple')
    stack.push('Food')

    expect(stack.pop()).toBe('Food')
  })

  it('should search an item and return its index', () => {
    const stack = new Stack<number>()
    stack.push(2)
    stack.push(5)

    expect(stack.search(2)).toBe(0)
  })
})
