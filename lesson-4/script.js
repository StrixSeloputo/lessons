// 1. Написать свою реализацию map через reduce

const myMap = (array, callback) => array.reduce((result, currentItem) => ([
    ...result, callback(currentItem)
]), []);

const myMapArray = [1, 2, 3, 4];
const myMapResult = myMap(myMapArray, (y) => y + 1);

console.log(x);

// 2. Написать свою реализацию reduce через map

const myReduce = (array, callback, accumulator) => { 
    let storage = accumulator;
    array.map(array, (currentItem) => { storage = callback(storage, currentItem) });
    return storage;
}

const myReduceArray = [1, 1, 1, 1];
const myReduceResult = myReduce(myReduceArray, (acc, elem) => acc + elem);

console.log(myReduceArray);
console.log(myReduceResult);