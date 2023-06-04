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
}
