const Node = require('./node');

class MaxHeap {
    constructor() {
        this.root = null;
        this.parentNodes = [];
        this.size = 0;  
    }

    push(data, priority) {
        let newNode = new Node(data, priority);
        this.insertNode(newNode);
        this.shiftNodeUp(newNode);
        ++this.size;
    }

    pop() {
        if(!this.isEmpty())
        {
           let heapRoot = this.detachRoot();
           this.restoreRootFromLastInsertedNode(heapRoot);
           this.shiftNodeDown(this.root);
           return heapRoot.data;
        }
    }

    detachRoot() {
        let heapRoot = this.root;
        if (!this.isEmpty())
        {
            this.parentNodes.shift();
        }
        this.root = null;
        --this.size;
        return heapRoot;
    }

    restoreRootFromLastInsertedNode(detached) {
        
        
    }

    size() {
        return this.size;
    }

    isEmpty() {
        if(this.size==0)
        {
            return true;
        }
        return false;
    }

    clear() {
        this.root=null;
        this.parentNodes=[];
        this.size=0;
    }

    insertNode(node) {
          
    }

    shiftNodeUp(node) {
	if(node.parent!==null&&node.priority>node.parent.priority)
	{
		
		let parentNodeIndex=this.parentNodes.indexOf(node.parent);
		let nodeIndex=this.parentNodes.indexOf(node);
		if(parentNodeIndex>=0)
		{
			this.parentNodes.splice(parentNodeIndex,1,node);
			this.parentNodes.splice(nodeIndex,1,node.parent);
		}
		node.swapWithParent();
		this.shiftNodeUp(node);
	}
	else(node.parent===null)
	 {
		 this.root=node;
	 }   
}
    shiftNodeDown(node) {
        
 }
}


module.exports = MaxHeap;


