/**
 * Basics
 * We have in this learning path a array of psg players with there name, age, position and preferred foot.
 */

var  array = [
    {name: "Keylor Navas", age: "36", position: "Goalkeeper", foot: "Right"},
    {name: "Denis Franchi", age: "20", position: "Goalkeeper", foot: "Right"},
    {name: "Presnel Kimpembe", age: "27", position: "Defender", foot: "Left"},
    {name: "Sergio Ramos", age: "36", position: "Defender", foot: "Right"},
    {name: "Marquinhos", age: "28", position: "Defender", foot: "Right"},
    {name: "Abdou Diallo", age: "26", position: "Defender", foot: "Left"},
    {name: "El Chadaille Bitshiabu", age: "17", position: "Defender", foot: "Left"},
    {name: "Marco Verrati", age: "29", position: "Midfielder", foot: "Right"},
    {name: "Idrissa Gueye", age: "33", position: "Midfielder", foot: "Right"},
    {name: "Xavi Simons", age: "19", position: "Midfielder", foot: "Right"},
    {name: "Ismaël Gharbi", age: "18", position: "Midfielder", foot: "Right"},
    {name: "Edouard Michut", age: "19", position: "Midfielder", foot: "Right"},
    {name: "Kylian Mbappe", age: "24", position: "Forward", foot: "Right"},
    {name: "Neymar Jr", age: "29", position: "Forward", foot: "Right"},
    {name: "Lionel Messi", age: "37", position: "Forward", foot: "Left"}

];

// Array length

console.log(array.length);// 12


/**
 * Access to an item in the array
 * We can access to an item in the array by using the index number.
 */
console.log(array[0]);// {name: "Keylor Navas", age: "36", position: "Goalkeeper", foot: "Right"}


/**
 * Index of item in the array
 * Returns the index of the item in the array.
 * It will display -1 if the item is not found.
 */

console.log(array.indexOf({name: "Keylor Navas", age: "36", position: "Goalkeeper", foot: "Right"}));// 0

/**
 * Add item to array at the end
 * We can add an item to the end of the array by using the push() method.
 */
array.push({name: "Mauro Icardi", age: "29", position: "Forward", foot: "Right"});

/**
 * Add item at the beginnning of the array
 * We can add an item to the beginning of the array by using the unshift() method.
 */
array.unshift({name: "Gigio Donnarumma", age: "23", position: "Goalkeeper", foot: "Right"});

/**
 * Remove item from the end of the array
 * We can remove an item from the end of the array by using the pop() method.
 */
array.pop();//Last item in the array is removed

/**
 * Remove item from the beginning of the array
 * We can remove an item from the beginning of the array by using the shift() method.
 */

array.shift();//First item in the array is removed

/**
 * Remove a selected item from the array
 * We can remove an item from the array by using the splice() method.
 * Splice(itemIndex, numberOfItemsToRemove)
 * The first parameter is the index of the item to remove.
 * The second parameter is the number of items to remove.
 * Remove item selected and n - 1 items after it
 */
array.splice(0, 1);//First item in the array is removed
/**
 * Remove many items from the array
 */
array.splice(0, 2);//First 2 items in the array are removed

/**
 * We can create a new array with the result of function applyed to each item in the array by using the map() method.
 * You give to map a function and he will apply it to each item in the array.
 * If we don't need the result of the function we can use the arrow function like foreach and for...of.
 */
function name(params) {
    return params.name;
}
const playersName = array.map(name);
console.log(playersName);// ["Keylor Navas", "Denis Franchi", "Presnel Kimpembe", "Sergio Ramos", "Marquinhos", "Abdou Diallo", "El Chadaille Bitshiabu", "Marco Verrati", "Idrissa Gueye", "Xavi Simons", "Ismaël Gharbi", "Edouard Michut", "Kylian Mbappe", "Neymar Jr", "Lionel Messi"]


/**
 * We can create a new array with the result of function applyed to each item in the array by using the filter() method.
 * You give to filter a function and he will apply it to each item in the array.
 * Filter() is like map() but it will return only the items that satisfy the function.
 */
function name(params) {
    return params.age <= 20;
}

const titis = array.filter(name);
console.log(titis);//[{"name": "Denis Franchi","age": "20","position": "Goalkeeper", "foot": "Right"},{"name": "El Chadaille Bitshiabu","age": "17","position": "Defender","foot": "Left"},{"name": "Xavi Simons","age": "19","position": "Midfielder","foot": "Right"},{"name": "Ismaël Gharbi","age": "18","position": "Midfielder","foot": "Right"},{"name": "Edouard Michut","age": "19","position": "Midfielder","foot": "Right"}]