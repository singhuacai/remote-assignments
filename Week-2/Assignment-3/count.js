var countDict = {};
function count(input) {
    for( let i = 0 ; i < input.length ; i++ ){
        if(countDict[input[i]]=== undefined){
            countDict[input[i]] = 1;
        }else{
            countDict[input[i]] += 1;
        }
    }
    return countDict;
}
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x'];
console.log(count(input1)); 
// should print {a:3, b:1, c:2, x:1}