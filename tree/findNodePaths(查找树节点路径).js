const treeArr = [
  { 
    id: 01,
    pid: null,
    children: [
      { 
        id: 03,
        pid: 01,
        children: [
          { id: 04, pid: 03 },
          { id: 06, pid: 03 },
        ]
      },
      { id: 05, pid: 01 },
    ]
  },
  { 
    id: 02, 
    pid: null,
    children: [
      { 
        id: 07,
        pid: 02,
        children: [
          { id: 10, pid: 07 },
          { id: 11, pid: 07 },
        ]
      },
      { id: 09, pid: 02 },
    ]
  },
]

const findNodePaths = (_tree, _id) => {
  const stack = []
  const dfs = (tree, id) => {
    if (!_tree) return []
    for (node of tree) {
      stack.push(node.id)
      if (node.id === id) {
        return stack
      }
      if (node.children) {
        const paths = dfs(node.children, id)
        console.log(paths, 'paths')
        if (paths && paths.length) return paths
      }
      stack.pop()
    }
    return []
  }
  dfs(_tree, _id)
  console.log(stack, 'stack')
  return stack
}

console.log(findNodePaths(treeArr, 07))

