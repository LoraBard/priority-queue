const MaxHeap = require('./max-heap.js');

class PriorityQueue {
    constructor(maxSize=30) {
	this.maxSize=maxSize;
	this.queueSize = 0;
    this.heap=new MaxHeap();

    }

    push(data, priority) {
	if(this.queueSize==this.maxSize)
	{
        throw Error('Size of queue is bigger than max size')
    }
		this.heap.push(data, priority);
		this.queueSize++;
    }

    shift() {
        if(this.heap.isEmpty())
        {
            throw Error('Error! Queue is empty!');
        }
		let deleted = this.heap.pop();
		this.queueSize--;
        return deleted;
    }

    size() {
       return this.queueSize;
    }

    isEmpty() {
        return this.queueSize==0;
    }
}

module.exports = PriorityQueue;
