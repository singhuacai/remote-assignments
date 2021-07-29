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
    if (countB <= 1){
        return (sum+" ("+ countA +" \'a\' letters and "+ countB + " \'b\' letter)"); 
    }else{
        return (sum+" ("+ countA +" \'a\' letters and "+ countB + " \'b\' letters)");
    }     
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
countAandB(input1);
console.log(countAandB(input1)); 