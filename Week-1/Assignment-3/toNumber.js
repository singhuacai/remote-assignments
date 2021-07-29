function toNumber(input) {
    var dict = {};
    for(var i = 0; i < input.length; i++){
        ch = input[i];
        var pos = 0;
        var ascii = ch.codePointAt(pos);
        dict[ch] = ascii;
    }//先將input陣列中的字母轉換成 ascii code，利用 dictionary 存起來

    var num = [];
    for(var i = 0; i < input.length; i++){
        num[i] = dict[input[i]]-96;
    }// 將input的陣列字母，對應到需印出的值，並存在新的array中
    return num;
    // 回傳此陣列
}

let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]

// let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
// console.log(toNumber(input1));