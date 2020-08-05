// Write a function that creates a queue using one stack.

class Queue {
  constructor() {
    this._storage = [];
  }

  enqueue(item) {
    this._storage.push(item);
  }

  dequeue() {
    if (this._storage.length > 1) {
      let lastAdded = this._storage.pop();
      let firstAdded = this.dequeue();
      this.enqueue(lastAdded);
      return firstAdded;
    } else if (this._storage.length === 1) {
      return this._storage.pop();
    } else {
      console.warn("Queue is empty");
      return undefined;
    }
  }

  get size() {
    return this._storage.length;
  }
}

//if _storage has more than one item in it,
//pop item in _storage and save it to a var
//recursively call dequeue until one item remains in storage
//save the value returned from dequeue as it will eventually be the first added item to the stack
//after the recursive call add the saved last value back into storage
//finally return the value returned from the recursive call (the first item)
//else if storage has one item
//return that item
//else return empty

//once we recursively reach the first item added to the stack
//we return it down the call stack while enqueueing each value
//that was ontop of it in the stack along the way

//this strategy effectively makes use of the built-in call stack to function as our second stack

// const q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// console.log(q._storage); // [ 1, 2, 3 ]
// console.log(q.dequeue()); // 1
// console.log(q._storage); //[] [ 2, 3 ]
// q.enqueue(4);
// q.enqueue(5);
// console.log(q._storage); // [ 4, 5 ] [ 3, 2 ]
// console.log(q.dequeue()); // 2
// console.log(q.dequeue()); // 3
// console.log(q.dequeue()); // 4
// console.log(q._storage); // [5]
// console.log(q.dequeue()); // 5
// console.log(q.dequeue()); // Queue is empty
// console.log(q._storage); // []
