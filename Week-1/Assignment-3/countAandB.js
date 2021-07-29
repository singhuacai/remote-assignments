function countAandB(input) {
    var countA = 0;
    var countB = 0;
    var sum = 0;
    for (var i = 0; i < input.length; i++) {
        if(input[i] ==='a'){
            countA++;
        }else if(input[i] ==='b'){
            countB++;
        }
    }
    sum = countA + countB;
    if (countA===0 && countB ===0){
        return (0);
    }else if(countA <= 1 && countB > 1){
        return (sum+" ("+ countA +" \'a\' letter and "+ countB + " \'b\' letters)"); 
    }else if(countA > 1 && countB <= 1){
        return (sum+" ("+ countA +" \'a\' letters and "+ countB + " \'b\' letter)"); 
    }else if(countA <= 1 && countB <= 1){
        return (sum+" ("+ countA +" \'a\' letter and "+ countB + " \'b\' letter)"); 
    }else{
        return (sum+" ("+ countA +" \'a\' letters and "+ countB + " \'b\' letters)");
    }   
}

// let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
// console.log(countAandB(input1)); 

let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); 