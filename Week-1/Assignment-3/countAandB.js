function countAandB(input) {
    var countA = 0;
    var countB = 0;
    for (var i = 0; i < input.length; i++) {
        if(input[i] ==='a'){
            countA++;
        }else if(input[i] ==='b'){
            countB++;
        }
    }
    countA + countB;
    return (`${countA + countB} ( ${countA} 'a' ${letters(countA)}, ${countB} 'b' ${letters(countB)})`);
}
function letters(count){
    return count > 1?"letters" : "letter";
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); 

// let input2 = ['e', 'd', 'c', 'd', 'e'];
// console.log(countAandB(input2)); 