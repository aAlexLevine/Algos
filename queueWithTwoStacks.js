// Write a function that creates a queue using two stacks.
// Besides these two stacks, you may not use any additional
// data structures in your implementation.
// It should have the methods enqueue, dequeue, and size.

class Queue {
  constructor() {
    this._stack1 = [];
    this._stack2 = [];
  }

  enqueue(item) {
    this._stack1.push(item);
  }

  dequeue() {
    if (this._stack2.length) {
      return this._stack2.pop();
    } else if (this._stack1.length) {
      while (this._stack1.length) {
        this._stack2.push(this._stack1.pop());
      }
      return this._stack2.pop();
    } else {
      console.warn("Queue is empty");
      return undefined;
    }
  }

  get size() {
    return this._stack1.length + this._stack2.length;
  }
}

//if stack 2 has items in it
  //pop item out
// else if stack 1 has stuff in it
  // empty stack 1
//enque them into stack 2
  // return dequeue
//else warn queue is empty

// const q = new Queue()
// q.enqueue(1)
// q.enqueue(2)
// q.enqueue(3)
// console.log(q._stack1, q._stack2) // [ 1, 2, 3 ] []
// console.log(q.dequeue()) // 1
// console.log(q._stack1, q._stack2) //[] [ 3, 2 ]
// q.enqueue(4)
// q.enqueue(5)
// console.log(q._stack1, q._stack2) // [ 4, 5 ] [ 3, 2 ]
// console.log(q.dequeue()) // 2
// console.log(q.dequeue()) // 3
// console.log(q.dequeue()) // 4
// console.log(q._stack1, q._stack2) // [] [5]
// console.log(q.dequeue()) // 5
// console.log(q.dequeue()) // Queue is empty
// console.log(q._stack1, q._stack2) // [] []
