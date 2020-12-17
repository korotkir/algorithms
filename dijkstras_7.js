// Алгоритм Дейкстры

// Для начала необходимо реализовать граф

// Граф — абстрактный математический объект,
// представляющий собой множество вершин графа и набор рёбер,
// то есть соединений между парами вершин.

let graph = {}


// Сохраняем соседей и стоимость перехода к соседу от старта
graph['start'] = {}
graph['start']['a'] = 6
graph['start']['b'] = 2

console.log(`Соседи начального узла:`)
console.table(graph)

// Включаем в граф остальные узлы и их соседей

graph['a'] = {}
graph['a']['fin'] = 1
graph['b'] = {}
graph['b']['a'] = 3
graph['b']['fin'] = 5
graph['fin'] = {} // у конечного узла соседей быть не может

console.log(`Полная хеш-таблица графа выглядит так:`)
console.table(graph)

// Также понадобится хеш-таблица для хранения стоимостей всех узлов
// Если стоимость еще неизвестна, она считается бесконечной.
// В JS бесконечность обазначается 'Infinity'

let costs = {}
costs['a'] = 6
costs['b'] = 2
costs['fin'] = Infinity

console.log('Таблица стоимостей:')
console.table(costs)

// Также, создается отдельная таблица для родителей:

let parents = {}
parents['a'] = 'start'
parents['b'] = 'start'
parents['in'] = undefined

console.log('Таблица родителей:')
console.table(parents)

// Наконец, нужен массив для отслеживания всех уже
// обработанных узлов, так один узел не должен обрабатываться многократно:

let processed = []

// Далее код алгоритма

// Сначала напишем функцию которая находит узел с наименьшей стоимостью
function find_lowest_cost_node(costs) {
    let lowestCost = Infinity
    let lowestCostNode = undefined

    for (let node in costs) {
        let cost = costs[node]

        // Если это узел с нимаеньшей стоимостью из уже виденных и он еще не был обработан
        if (cost < lowestCost && processed.indexOf(node) === -1) {
            // ..он назначается новым узлом с наименьшей стоимостью
            lowestCost = cost
            lowestCostNode = node
        }
    }
    return lowestCostNode
}

// Найти узел с наименьшей стоимостью среди необработанных
let node = find_lowest_cost_node(costs)

// Если обработанны все узлы, цикл while завершен
while (node !== undefined) {
    let cost = costs[node]
    let neighbors = graph[node]

    // Перебрать всех соседей текущего узла
    Object.keys(neighbors).forEach(function (n) {
        let new_cost = cost + neighbors[n]

        // Если к соседу можно быстрее добраться через текущий узел
        if (costs[n] > new_cost) {
            // .. Обновить стоимость для этого узла
            costs[n] = new_cost
            // Этот узел становится новым родителем для соседа
            parents[n] = node
        }
    })
    // Узел помечается как обработанный
    processed = processed.concat(node)
    // Найти следующий узел для обработки и повторить цикл
    node = find_lowest_cost_node(costs)
}


// Итог:
console.log(costs) // {a: 5, b: 2, fin: 6}