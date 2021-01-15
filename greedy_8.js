"use strict";

/*
Вы открываете собственную авторскую программу на радио и хотите,
чтобы вас слушали во всех 50 штатах. Нужно решить, на каких радиостанциях
должна транслироваться ваша передача. Каждая станция стоит денег,
поэтому количество станция необходимо свести к минимуму.

Принцип работы жадного алгоритма:
   1. Выбрать станцию, покрывающую нибольшуе количество штатов,
   еще не входящих в покрытие. Если станция будет покрывать некоторые
   штаты, уже входящие в покрытие, это нормально.
   2. Повторять, пока остаются штаты, входящие в покрытие.
 */

// Составляем список штатов
let statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az'])


// Список станций, из которого будет выбираться покрытие.
// Воспользуемся хешем.
let stations = {}
stations['kone'] = new Set(['id', 'nv', 'ut'])
stations['ktwo'] = new Set(['wa', 'id', 'mt'])
stations['kthree'] = new Set(['or', 'nv', 'ca'])
stations['kfour'] = new Set(['nv', 'ut'])
stations['kfive'] = new Set(['ca', 'az'])

// Структура данных для хранения итогового набора станций
let finalStations = new Set()

// Вычисление ответа

while (statesNeeded.size) {
    // Перебераем все станции и выбираем ту, которая обслуживает больше всего штатов,
    // не вхзодящих в текущее покрытие. Назовем ее bestStation.
    let bestStation = null
    let statesCovered = new Set()
    for (let station in stations) {
        // Множество statesCovered содержит все штаты, обслуживаемые этой станцией,
        // которые еще не входят в текущее покрытие. Цикл for перебирает все станции
        // и находит среди них наилучшую. Рассмотрим тело цикла for
        const states = stations[station];
        // Данная операция называется пересечением множеств
        const covered = new Set([...statesNeeded].filter(x => states.has(x)));
        if (covered.size > statesCovered.size) {
            bestStation = station;
            statesCovered = covered;
        }
    }
    statesNeeded = new Set([...statesNeeded].filter(x => !statesCovered.has(x)));
    finalStations.add(bestStation);
}

console.log(finalStations) // Set { 'kone', 'ktwo', 'kthree', 'kfive' }


