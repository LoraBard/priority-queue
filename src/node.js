class Node {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
        this.parent = null;
        this.left = null;
        this.right = null;
    }

    appendChild(node) 
    {
        if (this.left == null) 
        {
            this.left = node;
            this.left.parent = this;
        } else if (this.right == null)
        {
            this.right = node;
            this.right.parent = this;
        }
    }

    removeChild(node) {
        if (this.left == node) 
        {
            this.left.parent = null;
            this.left = null;
        } else if (this.right == node) 
        {
            this.right.parent = null;
            this.right = null;
        } 
        else
        {
            throw Error("This is not a child of this node!!!")
        }
    }

    remove() {
        if (this.parent) 
        {
            this.parent.removeChild(this);
        }
    }

    swapWithParent() {
        if (this.parent!=null) 
        {
            let childLeft=this.parent.left, childRight=this.parent.right;
            if (this.parent.parent!=null&&this.parent.parent.left == this.parent) 
            {
                this.parent.parent.left = this;
            }
            if (this.parent.parent!=null&&this.parent.parent.right == this.parent) 
            {
                this.parent.parent.right = this;
            }
            if (this.left!=null) 
            {
                this.left.parent = this.parent;
            }
            if (this.right!=null) 
            {
                this.right.parent = this.parent;
            }
            if (this.parent.left === this) 
            {
                this.parent.left=this.left;
                this.left=this.parent;
				if (this.parent.right != null) 
				{
                    this.parent.right.parent = this;
                }
                this.parent.right=this.right;
                this.right=childRight;
                this.parent=this.parent.parent;
                this.left.parent=this;

            } 
            else if (this.parent.right === this)
            {
                this.parent.right=this.right;
                this.right=this.parent;
                if (this.parent.left != null) 
                {
                    this.parent.left.parent = this;
                }
                this.parent.left=this.left;
                this.left=childLeft;
                this.parent=this.parent.parent;
                this.right.parent=this;

            }
        }
    }
}
module.exports = Node;
