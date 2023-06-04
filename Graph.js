/**
 * Simple implementation of a graph
 */
class Graph {
  __graph
  constructor() {
    this.__graph = {}
  }

  addNode(value) {
    if (!this.__graph[value]) this.__graph[value] = new Set()
  }

  addConnection(origin, destination) {
    this.__graph[origin].add(destination)
  }

  deleteConnection(origin, node_to_delete) {
    this.__graph[origin].delete(node_to_delete)
  }

  deleteNode(node) {
    delete this.__graph[node]
    for (let origin in this.__graph) {
      this.deleteConnection(origin, node)
    }
  }

  traverseGraph(origin, visitedNodes = {}) {
    const children = this.__graph[origin]
    visitedNodes[origin] = true
    for (const child of children) {
      if (!visitedNodes[child]) {
        // visitedNodes[child] = true
        console.log(child)
        this.traverseGraph(child, visitedNodes)
      }
    }

    return Object.keys(visitedNodes)
  }
  detectCycle(origin, visitedNodes = {}) {
    let stack = []
    stack.push(origin)
    while (stack.length) {
      const element = stack.pop()
      console.log('Working with', element, visitedNodes, stack)

      if (element in visitedNodes) return true
      visitedNodes[element] = true

      for (const child of this.__graph[element]) {
        if (!visitedNodes[child]) stack.push(child)
      }
    }
    return false
  }
  printGraph() {
    console.log(this.__graph)
  }
}

const graph = new Graph()
graph.addNode(1)
graph.addNode(2)
graph.addNode(3)
graph.addNode(4)

graph.addConnection(1, 2)
graph.addConnection(2, 3)
graph.addConnection(1, 3)
graph.addConnection(3, 4)

graph.printGraph()
// graph.traverseGraph(1)

console.log(graph.traverseGraph(3))
// console.log(graph.detectCycle(3))
