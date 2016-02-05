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
		var current = this.root,
			search = false,
			parent = null,
			children,
			replace,
			replaceParent;
		while (!search && current)
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
			children = ((current.left !== null) ? 1 : 0 ) + ((current.left !== null) ? 1 : 0 );
			if (current === this.root)
				{	
				switch(children)
					{
					case 0:
						
						this.root = null;
						break;
						
					case 1:
						
						this.root = ((current.right=== null) ? current.left : current.right);
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
				switch(children)
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
                      
                        } else 
						{
                            parent.right = (current.left === null ? current.right : current.left);
                        }
                        break;    
					
					case 2:
					
                        replace = current.left;
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
    var length = 0;
        
        this.traverse(function(node){
            length++;
        });
        
        return length;
 
      
    
    
    }

	isEmpty() {
	
	}
	traverse(func){
        function inOrder(node){
            if (node){
                
                
                if (node.left !== null){
                    inOrder(node.left);
                }            
                
               
                func.call(this, node);
            
                
                if (node.right !== null){
                    inOrder(node.right);
                }
            }        
        }
        
       
        inOrder(this.root);    
    }
	
	
}
