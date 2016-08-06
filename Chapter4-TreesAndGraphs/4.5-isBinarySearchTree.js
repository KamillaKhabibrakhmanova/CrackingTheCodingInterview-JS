var BT = function(){
	this.head = null;
};

var Node = function(data){
	this.data = data;
	this.right = null;
	this.left = null;
};

//for testing - follows binary search tree rules
BT.prototype.addRight = function(data) {
	var newNode = new Node(data);
	if (!this.head) this.head = newNode;
	else {
		var curr = this.head;
		while (curr) {
			if (data < curr.data) {
				if (curr.left) curr = curr.left;
				else {
					curr.left = newNode;
					break;
				}
			} else if (data >= curr.data) {
				if (curr.right) curr = curr.right;
				else {
					curr.right = newNode;
					break;
				}
			}
		}
	}
};

//for testing - does not follow binary search tree rules
BT.prototype.addWrong = function(data) {
	var newNode = new Node(data);
	if (!this.head) this.head = newNode;
	else {
		var curr = this.head;
		while (curr) {
			if (data > curr.data) {
				if (curr.left) curr = curr.left;
				else {
					curr.left = newNode;
					break;
				}
			} else if (data <= curr.data) {
				if (curr.right) curr = curr.right;
				else {
					curr.right = newNode;
					break;
				}
			}
		}
	}
};

BT.prototype.isBinarySearchTree = function(){
	if (!this.head) return true;
	var result = true;
	var nodes = [this.head];
	while (nodes.length > 0) {
		var curr = nodes[0];
		if (curr.left) {
			if (curr.data < curr.left.data) {
				result = false;
				break;
			}
			nodes.push(curr.left);
		}
		if (curr.right) {
			if (curr.data > curr.right.data) {
				result = false;
				break;
			}
			nodes.push(curr.right);
		}
		nodes.shift();
	}
	return result;
};