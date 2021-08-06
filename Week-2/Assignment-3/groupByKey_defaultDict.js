class DefaultDict {
    constructor(defaultVal) {
        return new Proxy({}, {
            get: (target, name) => name in target ? target[name] : defaultVal
        });
    }
}

function groupByKey(input) {
    const keyValueDict = new DefaultDict(0);   // countDict 是一個 dictionary, 裡面沒有的元素之 value 的默認值設為 0
    for(let i = 0; i<input.length ; i++){
        keyValueDict[input[i].key] += input[i].value;
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