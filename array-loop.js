/* for(var i = 0; i <= 10; i++){
    console.log(i);
} */

// target: display every elements of an array
/*
var numbers = [68, 49, 65, 16, 84, 98, 41, 36, 54, 78, 44];
 
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    console.log(i, '-->',number);
}
 */

var items = ['Laptop', 'Monitor', 'Pen', 'Charger', 'Keyboard', 'Mouse', 'Table Lamp', 'Notebook'];

for(var i = 0; i < items.length; i++){
    var item = items[i];
    console.log('Item #'+i+':', item);
}