var numbers = [68, 49, 85, 16, 84, 98, 41, 86, 54, 78, 44];
/*  
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if(number >= 80){
        continue;
    }
    console.log(i, '-->',number);
}
*/

var i = 0;
while (i < numbers.length){
    var number = numbers[i];
    i++;
    if(number >= 80){
        continue;
    }
    console.log(i, '-->',number);
}
