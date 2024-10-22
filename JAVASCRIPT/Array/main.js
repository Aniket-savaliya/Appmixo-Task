// Write a function to  find the sum of all Elements in an Array.

let number = [12,33,45,5,61];

let sum = 0;

for (let i = 0;i < number.length; i++){
    sum += number[i];
}

console.log("sum is " + sum)

// Write a function to find the maximum and minimum values in an array.						

let num = [9,24,66,36,85];

let minvalue = Math.min(...num);
let maxvalue = Math.max(...num);

console.log("Minimum element is:" + minvalue);
console.log("Maximum element is:" + maxvalue);

// Write a function to reverse the order of elements in an array.

let numbers = [44, 86, 14, 48, 99];
numbers.reverse();

console.log(numbers);

// Write a function to remove duplicates from an array.						

let arr = ["Wood", "Sky", "Wood","orange", "Sky", "mango"];

function removeDuplicates(arr) {
return arr.filter((item,index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates(arr));

// Write a function to implement a simple search algorithm binary search on a sorted array.	

function binnarysearch(array,target){
    let low = 0;
    let high = array.length -1;

    while(low = high){
        let mid = Math.floor((low+high)/2);
        if(array[mid] === target){
            return mid;
        }else if(array[mid] < target){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return -1;
}

const array = [2,5,8,12,16,42,38,23,53,69];
const target = 23;
console.log(`Target found at index: ${binnarysearch(array,target)}`);

// Implement the bubble sort algorithm to sort an array of numbers or objects.						

function bubbleSort(array) {
    const arrayLength = array.length;
    let isSwapped;

    for (let i = 0; i < arrayLength; i++) {
        isSwapped = false;

        for (let j = 0; j < arrayLength - i - 1; j++) {
            if (array[j] > array[j + 1]) {
        
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                isSwapped = true;
            }
        }
        if (!isSwapped) 
            break;
    }

    return array;
}
const sortedArray = bubbleSort([45,23,3,9999,5,352,441,28,35]);
console.log("Sorted Array:");
console.log(sortedArray);

// Write a function to find the second largest element in an array.						

function secondLargest(arr) {
    arr.sort();
    for (let i = arr.length - 2; i >= 0; i--) {
      if (arr[i] != arr[i - 1]) {
        return arr[i];
      }
    }
  }
              
  arr = [5,12,46,22,35];
  console.log(`The second largest element is: ${secondLargest(arr)}`);

// Implement a function to find the most frequent element in an array.		

function mostFrequent(arr, n) { 

	let maxcount = 0; 
	let element_having_max_freq; 
	for (let i = 0; i < n; i++) { 
		let count = 0; 
		for (let j = 0; j < n; j++) { 
			if (arr[i] == arr[j]) 
				count++; 
		} 

		if (count > maxcount) { 
			maxcount = count; 
			element_having_max_freq = arr[i]; 
		} 
	} 

	return element_having_max_freq; 
} 

arr = [40, 50, 30, 40, 50, 30, 30]; 
let n = arr.length; 
console.log("most frequent element:");
console.log(mostFrequent(arr, n)); 


// Write a function to remove falsy values (null, undefined, 0, false, NaN, "") from an array.						

arr = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];

function removeFalsey(arr) {
    let newArr = [];

    arr.forEach((k) => {
        if (k) {
            newArr.push(k);
        }
    });
    return newArr;
}
console.log(removeFalsey(arr));

// Implement a function to find the intersection of two arrays (elements that are present in both arrays).						

let first_array = [1, 3, 5, 7, 9];
let second_array = [2, 3, 4, 5, 6, 9];

let res_arr = (first_array, second_array) => {
    let new_array = [];
    for (let i = 0; i < first_array.length; i++) {
        for (let j = 0; j < second_array.length; j++) {
            if (first_array[i] === second_array[j]) {
                new_array.push(first_array[i]);
            }
        }
    }
    return new_array;
};

console.log("intersection of two Arrays- (Array obtained is):");
console.log(res_arr(first_array, second_array));

// Write a function to find the union of two arrays (all unique elements from both arrays).						

function findUnion(arr1, arr2) {
    const set = new Set();
    const union = [];
  
    for (let num of arr1) {
      set.add(num);
    }
  
    for (let num of arr2) {
      set.add(num);
    }
  
    for (let num of set) {
      union.push(num);
    }
  
    return union;
  }
  
  const arr1 = [11, 28, 35, 64, 25, 69, 87, 78, 59, 10];
  const arr2 = [25, 83, 28, 54, 64, 11, 69,35];
  
  const union = findUnion(arr1, arr2);
  
  console.log("Union of arr1 and arr2 is:");
  console.log(...union);

//   Implement a function to flatten a nested array (array containing other arrays) into a single-level array.						

function flatten(arr) {
    return arr.flat(Infinity)
  }
  
  const numArr = [51, [82, [43], 41, [5, 26, [17]]]];
  
  console.log(" flatten a nested array:");
  console.log(flatten(numArr));

//   Write a function to chunk an array into smaller arrays of a specified size.

function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("chunk an array into smaller arrays:");
console.log(sliceIntoChunks(arr, 3));