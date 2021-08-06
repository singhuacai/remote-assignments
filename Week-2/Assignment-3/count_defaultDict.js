class DefaultDict {
    constructor(defaultVal) {
        return new Proxy({}, {
            get: (target, name) => name in target ? target[name] : defaultVal
        });
    }
}
  
function count(input) {
    const countDict = new DefaultDict(0);   // countDict 是一個 dictionary, 裡面沒有的元素之 value 的默認值設為 0
    for( let i = 0 ; i < input.length ; i++ ){
        countDict[input[i]] += 1;
    }
    return countDict;
}
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'x'];
console.log(count(input1)); 
// should print {a:3, b:1, c:2, x:1}