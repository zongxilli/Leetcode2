const { performance } = require('perf_hooks'); // performance.now()

// let array = [1, 2, 0, 1, 0, 2, 1, 2, 0, 1, 0, 0, 0, 0, 1, 2, 2, 1, 2, 1];

// const sortColors = (nums) => {
// 	let left = 0;
// 	let right = nums.length - 1;
// 	let temp;

// 	let idx = 0;
// 	while (idx <= right) {
// 		temp = nums[idx];
// 		if (temp === 0) {
// 			nums[idx] = nums[left];
// 			nums[left] = temp;
// 			left++;
// 		} else if (temp === 2) {
// 			nums[idx] = nums[right];
// 			nums[right] = temp;
// 			right--;
// 		} else idx++;
// 		console.log(nums);
// 	}

// 	return nums;
// };

// sortColors(array);
 
let set = new Set();

set.add('kenny');
set.add('kennie');
set.add('kenney');
set.add('kennedy');

console.log(Array.from(set)[0])

let s1 = 'abc';
let s2 = 'cba';

let s3 = s1 + s2;
let s4 = 'abccba';

console.log(s3 === s4)