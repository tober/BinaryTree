'use strict';

class BinaryTree {


	constructor() {


	  this.root = null;

	
	
 }
	insert(data) 
	{
	 
			var node = { 
                data: data, 
                left: null,
                right: null 
            }, 
			current;
			if (this.root === null)
			{
            this.root = node;
			}
			else {
				current = this.root;
					while(true)
					{
						if (data < current.data)
						{
							if (current.left === null)
							{
								current.left = node
								break;
							}
							else
							{
							current = current.left
							}
						}
						else
						{
                
							if (current.right === null)
							{
								current.right = node;
							break;
							}
							else 
							{                    
								current = current.right;
							}						
						}
					} 	
				}
	}


	contains(data) {
	var current = this.root;
	var search = false;
		 while(!search && current){
            if (data < current.data){
                current = current.left;
            } else if (data > current.data){
                current = current.right;
            } else {
                search = true;
            }
        }
        return search;
	}

	remove(data) 
	{
		var search = false,
            parent = null,
            current = this.root,
            replace,
            replaceParent,
			children;
			
		while(!search && current)
		{
            if (data < current.data)
			{
                parent = current;
                current = current.left;
            }
			else if (data > current.data)
			{
                parent = current;
                current = current.right;
            } 
			else 
			{
                search = true;
            }
        }
            if (search)
			{
             children = (current.left !== null ? 1 : 0) + (current.right !== null ? 1 : 0);
				if (current === this.root)
				{
					switch(children)
					{
                    case 0:
                        this.root = null;
                        break;
                    
					case 1:
                        this.root = (current.right === null ? current.left : current.right);
                        break;
                    
					case 2:
                        replace = this.root.left;
                        while (replace.right !== null)
						{
                            replaceParent = replace;
                            replace = replace.right;
                        }
         
                        if (replaceParent !== null)
						{
                            replaceParent.right = replace.left;
                            replace.right = this.root.right;
                            replace.left = this.root.left;
                        } 
						else 
						{
                            replace.right = this.root.right;
                        }
                        this.root = replace;
                
                }        

            } 
			else 
			{
                switch (children)
				{
                    case 0:
						if (current.data < parent.data)
						{
							parent.left = null;
                        } 
						else 
						{
                            parent.right = null;
                        }
                        break;
                    
					case 1:

                        if (current.data < parent.data)
						{
                            parent.left = (current.left === null ? current.right : current.left);
                        } 
						else 
						{
                            parent.right = (current.left === null ? current.right : current.left);
                        }
                        break;    

					case 2:
                        if (current.left.data < this.root.data)
						{
						replace = current.left;
						}
						if (current.right.data > this.root.data)
						{
						replace = current.right;
						}
						replaceParent = current;
                        while(replace.right !== null)
						{
                            replaceParent = replace;
                            replace = replace.right;                            
                        }
                        replaceParent.right = replace.left;
                        replace.right = current.right;
                        replace.left = current.left;

                        if (current.data < parent.data)
						{
                            parent.left = replace;
                        } 
						else 
						{
                            parent.right = replace;
                        }                               
                }
            
            }
        
        }
			
	}

	size() {
 	var length = 0, leftBranchLength = 0, rightBranchLength = 0;
	
		
		if (this.root === null)
		{
			return 0;
		}
		else
		{
        function Step(node){
            if (node){

                if (node.left !== null){
                    Step(node.left);
					leftBranchLength++;
                }            

                if (node.right !== null){
                    Step(node.right);
					rightBranchLength++;
                }
            }        
        }

        Step(this.root);    

		length = leftBranchLength + 1 + rightBranchLength;
		 return length;
		}
    
    }

	isEmpty() 
	{
		var empty = false;
		if (this.root === null)
		{
			empty = true;
		}
		return empty;
	}
	
	
	
}
