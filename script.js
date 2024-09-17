// 1. myMap Implementation
Array.prototype.myMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// 2. myFilter Implementation
Array.prototype.myFilter = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// 3. myReduce Implementation
Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  // If no initialValue is provided, use the first element as the accumulator
  if (accumulator === undefined) {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  
  return accumulator;
};

// Test the functions with the provided example

const array = [1, 2, 3];

// 1. Testing myMap
const mappedArray = array.myMap((value, i, arr) => {
  return value + i + arr[1];
});
console.log(mappedArray);  // Expected output: [3, 5, 7]

// 2. Testing myFilter
const filteredArray = array.myFilter((value, i, arr) => {
  return (value + i + arr[1]) > 5;
});
console.log(filteredArray);  // Expected output: [3]

// 3. Testing myReduce
const reducedValue = array.myReduce((accumulator, value, i, arr) => {
  return accumulator + value + i + arr[1];
}, 3);
console.log(reducedValue);  // Expected output: 18
