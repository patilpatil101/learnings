// Problem 1: Length of digits

// const digits = 124;

// function sumOfDigits(digits) {
//   let counter = 0;

//   while (digits > 0) {
//     digits = Math.floor(digits / 10);
//     console.log(digits);
//     counter++;
//   }
//   return counter;
// }

// console.log(sumOfDigits(digits));

// --------------------------------------------------------------
// --------------------------------------------------------------

// Problem 2: Sum of digits

// const num = 12345;
// let sum = 0;

// function sumOfDigits(num) {
//   while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }

// console.log(sumOfDigits(num));

// --------------------------------------------------------------
// --------------------------------------------------------------

// Problem 3: Palindrome

// let num = 121;
// let o = num;
// let temp = '';
// while (num > 0) {
//     temp += num % 10;
//     num = Math.floor(num / 10);
// }
// if (Number(temp) === o) {
//     console.log('palindrome');
// } else {
//     console.log('no palindrome');
// }

// --------------------------------------------------------------
// --------------------------------------------------------------
// Problem 4: Reverse integer 

// limit range
// min - 2 pow 31 and
// max 2 pow 31 - 1

//      123 => 321
//     - 321 => -123
// your code goes here


// function reverseInteger() {
//     let lastDigit = 0;
//     let rev = 0;
//     let numCopy = num;
//     num = Math.abs(num);

//     while (num > 0) {
//         lastDigit = num % 10;
//         rev = (rev * 10) + lastDigit;
//         num = Math.floor(num / 10);
//     }

//     let limit = Math.pow(2, 31); or // 2**31
//     if (rev < -limit || rev > limit - 1) return 0

//     return numCopy < 0 ? `-${rev}` : rev
// }

// let num = 1234567839;
// console.log("result:", reverseInteger(num));

// --------------------------------------------------------------
// --------------------------------------------------------------

// Problem: 5 Two Sum
// function twoSum(nums, target) {
//     const map = new Map();
//     for (let i = 0; i < nums.length; i++){
//       const complement = target - nums[i];
//       if (map.has(complement)) {
//           return [map.get(complement), i];
//       }
//       map.set(nums[i], i);
//     }
//     map.set({'id': 122}, 'Rohit');
//     console.log(map);
//     console.log(map.get({'id': 122}));
//   };
//   console.log(twoSum([2,7,1,15], 9));

// --------------------------------------------------------------
// --------------------------------------------------------------

// Problem: 6 Bubble Sort

// function bubbleSort(nums, n) {
//     let temp;
//     if (n == 1) {
//       return nums;
//     }
    
//     for (let i = 0; i < n-1; i++){
//       if (nums[i] > nums[i + 1]) {
//         temp = nums[i];
//         nums[i] = nums[i + 1];
//         nums[i + 1] = temp;
//       }
//     }
//     n = n - 1;
//     bubbleSort(nums, n);
  
//     return nums;
//   };
//   console.log(bubbleSort([2, 5, 1, 17], 4));


// --------------------------------------------------------------
// --------------------------------------------------------------

// Problem: 7 Selection Sort

// function selectionSort(nums, n) {
//     let min;
//     let temp;
//     for (let i = 0; i < nums.length; i++){
//       min = i;
//       for (let j = i + 1; j < nums.length; j++){
//         if (nums[j] < nums[min]) {
//           min = j;
//         }
//       }
//       temp = nums[min];
//       nums[min] = nums[i];
//       nums[i] = temp;
//     }
    
//     return nums;
// };
// console.log(selectionSort([18, 2, 5, 1, 17], 4));

// --------------------------------------------------------------
// --------------------------------------------------------------

// Problem: 7 Insertion Sort

// function insertionSort(a) {
//     let n = a.length;
//     for (let i = 1; i < n; i++){
//         let curr = a[i];
//         let prev = i - 1;
//         for (let j = i; j >=0; j--){
//           if (a[prev] > curr && prev >= 0) {
//             a[prev + 1] = a[prev];
//             prev--;
//           } else {
//             a[prev + 1] = curr;
//           }
//         }
//     }
//     return a;
//   };
//   console.log(insertionSort([18, 2, 5, 1, 17]));