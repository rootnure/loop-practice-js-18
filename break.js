/* 
for (var i = 0; i <= 20; i++) {
    console.log(i);
    if (i >= 7) {
        break;
    }
}
 */
/* 
var roastGiven = 0;
while(roastGiven <= 20) {
    console.log('Roast den, gift item ansi');
    roastGiven++;
    if(roastGiven > 7){
        break;
    }
}
 */
/* 
var items = ['Laptop', 'Monitor', 'Pen', 'Charger', 'Keyboard', 'Mouse', 'Table Lamp', 'Notebook'];

for(var i = 0; i < items.length; i++){
    var item = items[i];
    console.log('Item #'+i+':', item);
    if(item === 'Mouse'){
        break;
    }
}
 */

var numbers = [68, 49, 65, 16, 84, 98, 41, 36, 54, 78, 44];
 
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    console.log(i, '-->',number);
    if(number > 80){
        break;
    }
}
