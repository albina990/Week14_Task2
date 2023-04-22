const intersection = (...arrays) => {
    let newArrays = Array.from(arrays); // создаём массив из параметров
    let firstArray = newArrays.shift(); // удаляем первый массив из массива параметров и присваиваем его переменной
    let result = []; // создаём пустой массив, куда будем пушить совпадающие значения
    for (let i = 0; i < firstArray.length; i++) { // проверяем наличие каждого значения из первого массива в остальных массивах
        let count = 0;
        newArrays.forEach((array) => {
            if (array.includes(firstArray[i])) {
                count++; // счётчик увеличивается на единицу каждый раз, когда икомое значение есть в массиве
            }
            return count;
        })
        if (count === newArrays.length) { // проверяем, совпадает ли значение счётчика с количеством массивов
            if (!result.includes(firstArray[i])) { // убеждаемся, что этого значения ещё нет в результирующем массиве
                result.push(firstArray[i]);
            }
        }
    }
    return result;
}
const arr1 = [1, 2]
const arr2 = [2, 3]
const arr3 = ["a", "b"]
const arr4 = ["b", "c"]
const arr5 = ["b", "e", "c"]

const arr6 = ["b", "b", "e"]
const arr7 = ["b", "c", "e"]
const arr8 = ["b", "e", "c"]
console.log(intersection(arr1, arr2)) // [2]
console.log(intersection(arr3, arr4, arr5)) // ['b']
console.log(intersection(arr6, arr7, arr8)) // ['b', 'e']
