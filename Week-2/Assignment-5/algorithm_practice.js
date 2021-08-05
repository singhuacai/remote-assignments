function binarySearchPosition(numbers, target) {
    let low = 0;
    let high = numbers.length - 1 ;
    while(low <= high){
        let mid = Math.floor( ( low + high ) / 2 );
        if(numbers[mid] === target){
            return mid;
        }else if(numbers[mid] > target){
            high = mid - 1;
        }else if(numbers[mid] < target){
            low = mid + 1;
        }
    }
    return -1;
}
console.log( binarySearchPosition([1, 2, 5, 6, 7], 1) ); // should print 0
console.log( binarySearchPosition([1, 2, 5, 6, 7], 6) ); // should print 3