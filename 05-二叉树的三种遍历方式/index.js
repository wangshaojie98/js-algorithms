const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
};

function preorder (root) {
  if (!root) {
    return;
  }

  console.log(root.val)
  preorder(root.left)
  preorder(root.right)
}
// preorder(root)


function inorder (root) {
  if (!root) return;

  inorder(root.left)
  console.log(root.val)
  inorder(root.right)
}

// inorder(root)

function postOrder (root) {
  if (!root) return;

  postOrder(root.left)
  postOrder(root.right)
  console.log(root.val)
}
postOrder(root)