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

	}

	remove(data) {

	}

	size() {

	}

	isEmpty() {

	}
}
