// contains duplicate 

var containsDuplicate = function(num){
    const myset = new Set(num)
    return myset.size !== num.length
}

console.log(containsDuplicate([2, 4, 3, 6, 9]));


// missing number 
var missingNumber = function(nums){
    var n = nums.length

    var expectedSum = (n * ( n + 1)) / 2

    var sum = nums.reduce((sum , nums) => sum + nums, 0)

    return expectedSum - sum
}

console.log(missingNumber([3, 0, 1]))