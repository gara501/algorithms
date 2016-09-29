/* 
 * Binary search
 */

var numbersArray = function() {
  var current = 0;
  var top = 1000000;
  var array = [];
  if(top)  {
    while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      array.push(current);
    }
  }
  return array;
};
// console.log(numbersArray());
var date = 0;
var totalTime = 0;
var flag = true;
var times = 0;
function binarySearch(array, min, max, searchNum) {
  times++;
  var half = Math.floor((max + min)/2);
  //console.log('min-max', min, max, half, array[half]);
  if (max <= min) {
    return -1;
  } else if (array[half] < searchNum) {
    min = half + 1;
    return binarySearch(array, min, max, searchNum);
  } else if (array[half] > searchNum) {
    max = half - 1;
    return binarySearch(array, min, max, searchNum);
  } else if (array[half] === searchNum) {
    return half;
  }
}

var arrayNumbers = numbersArray().sort(function(a, b){return a - b;});
console.log('array', arrayNumbers);

date = Date.now();
var position = binarySearch(arrayNumbers, 0, arrayNumbers.length - 1, 20000);
var newDate = Date.now();
totalTime = newDate - date;
console.log('total time', totalTime, position, times);
var text = 'Total time: ' + totalTime + ', Position: ' + position + ', Times to execute: ' + times;
document.getElementById("data").innerHTML = text; 