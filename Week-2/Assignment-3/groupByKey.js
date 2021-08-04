var keyValueDict = {};

function groupByKey(input) {
    for(let i = 0; i<input.length ; i++){
        if( keyValueDict[input[i].key] === undefined ){
            keyValueDict[input[i].key] = input[i].value;
        }else{
            keyValueDict[input[i].key] += input[i].value;
        }
    }
    return keyValueDict;
}

let input2 = [
 {key: 'a', value: 3},
 {key: 'b', value: 1},
 {key: 'c', value: 2},
 {key: 'a', value: 3},
 {key: 'c', value: 5}
]
console.log(groupByKey(input2)); 
// should print {a:6, b:1, c:7}