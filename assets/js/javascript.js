const arr = [];

console.log(arr);
populateArray(arr);
console.log(arr);
sortArray(arr);
console.log(arr);
console.log(findMinMax(arr));
const minmax = findMinMax(arr);
const [min, max] = minmax;
console.log(min, max);

function populateArray(array) {
	for (let i = 0; i < 10; i++) {
		array[i] = Math.trunc(Math.random() * 100);
	}
}

function sortArray(array) {
	array.sort();
}

function findMinMax(array) {
	const min = Math.min(...array);
	const max = Math.max(...array);

	return [min, max];
}

function sum(...nums) {
	let result = 0;
	for (let i = 0; i < nums.length; i++) {
		result += nums[i]; // result = result + nums[i]
	}

	return result;
}
