function twoSum(nums, target) {
    let dict = {};
    for(let i = 0 ; i < nums.length ; i++ ){
        let diff = target - nums[i];
        if(diff in dict){
            return ([dict[diff], i]);
        }
        dict[nums[i]] = i;
    }
}
console.log(twoSum([2, 7, 11, 15], 9));