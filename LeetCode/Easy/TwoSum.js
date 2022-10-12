/**
 * @param {number[]} nums - array of integers, 2 to 10000 length, positive or negative (0)
 * @param {number} target - integer, posiotive or negative (0)
 * @return {number[]} - array of indices, must be unique indices, 
 
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]

 */
 
//	Brute Force Solution O(n^2)
// var twoSum = function(nums, target) {
//     //grab first element
//     for(let i = 0; i < nums.length; i++){
//         //compare to other elements
//         for(let j = 0; j < nums.length; j++){
//             //check to see if elements at i and j sum to target
//             //make sure i and j are not the same
//             if(nums[i] + nums[j] === target && i !== j){
//                 //return indicies that satisy sum
//                 return [i,j];
//             }
            
//         }
        
//     }
//     return [];
// };


//Hash map one pass solution O(n)
function twoSum(nums, target){
    //make a hash
    const hash = {};
    //grab elements of nums
    for(let i = 0; i < nums.length; i++){
		//store hash
        const comp = target - nums[i]
		//check to see if complement key is in the hash
        if(comp in hash){
			//return indicies
           return [hash[comp],i]
           }
		//store index w/ element as key
        hash[nums[i]] = i
    }
}


console.log(twoSum([2,7,11,15], 9) + 'expected to be [0,1]');
console.log(twoSum([3,2,4], 6) + 'expected to be [1,2]');
console.log(twoSum([3,3], 6) + 'expected to be [0,1]');