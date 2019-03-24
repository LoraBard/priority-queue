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
           if(this.root!=null)
           {
               this.shiftNodeDown(this.root);
           }
           return heapRoot.data;
        }
    }

    detachRoot() {
        let heapRoot = this.root;
        if (!this.isEmpty())
        {
            this.parentNodes.shift();
            --this.size;
        }
        this.root = null;
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
    if(node==null)
    {
        return;
    }
	if(node.parent!==null&&node.priority>node.parent.priority)
	{
		
		let parentNodeIndex=this.parentNodes.indexOf(node.parent),nodeIndex=this.parentNodes.indexOf(node),parent=node.parent;
        node.swapWithParent();
		if(parentNodeIndex>=0)
		{
            this.parentNodes.splice(parentNodeIndex,1,node);
        }
        if(nodeIndex>=0)
        {
            this.parentNodes.splice(nodeIndex,1,parent);
        }
		this.shiftNodeUp(node);
	}
	else(node.parent===null)
	 {
		 this.root=node;
	 }   
}
    shiftNodeDown(node) {
       
        let nodeMaxPriority;
        if(node===null)
        {
            return;
        }
        if(node.left!=null)
        {
            nodeMaxPriority=node.left;
        }
        else if(node.right!=null)
        {
            nodeMaxPriority=node.right;
        }
        else if(node.right!=null&&node.left!=null&&node.right.priority>=node.left.priority)
        {
             nodeMaxPriority=node.right;
        }
        else if(node.right!=null&&node.left!=null&&node.right.priority<=node.left.priority)
        {
            nodeMaxPriority=node.left;
        }
        if(nodeMaxPriority!=null)
        {
        
          if(nodeMaxPriority.priority>node.priority)
        {
            let parentNodeIndex=this.parentNodes.indexOf(node),nodeIndex=this.parentNodes.indexOf(nodeMaxPriority),parent=node;  
            if(parentNodeIndex>=0)
            {
                this.parentNodes.splice(parentNodeIndex,1, nodeMaxPriority);
            }
            if(nodeIndex>=0)
            {
                this.parentNodes.splice(nodeIndex,1,parent);
            }
            else(node===null)
            {
                this.root=nodeMaxPriority;
            }  
            nodeMaxPriority.swapWithParent(); 
            this.shiftNodeDown(node); 
        }
    }
    
 }
}


module.exports = MaxHeap;


