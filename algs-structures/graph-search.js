const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

function breadthSearch(graph, start, end) { // поиск в ширину, существует ли путь по вершинам графа между точками
  let queue = [start];

  while (queue.length > 0) {
    const current = queue.shift();
    if (!graph[current]) graph[current] = [];
    if (graph[current].includes(end)) return true;
    else queue = queue.concat(graph[current]);
  }

  return false;
}

console.log(breadthSearch(graph, 'a', 'g'));
