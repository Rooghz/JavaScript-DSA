const invertTree = (root) => {
	const reverse = (node) => {
		if (!node) return;

		let left = node.left;
		let right = node.right;
		node.left = right;
		node.right = left;

		reverse(node.left);
		reverse(node.right);
	};

	reverse(root);
	return root;
};