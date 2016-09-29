var sortNumbers = (function () {
  var myArray = [];
  var elementKey = 0;
  var bubleResponse = ''
  function getArray(maxArrayValue) {
    var initialTime = Date.now();
    var response = '';
    for (var i=0; i <= maxArrayValue; i++) {
      // Use this line if want to fill the array with random numbers
      /* myArray.push(Math.floor(Math.random() * (maxArrayValue - 1)) + 1); */
      myArray.push(i);
      if (i === (maxArrayValue - 1)) {
        console.log('Total Time Filling Array:', Date.now() - initialTime);
        response = 'Total Time Filling Array:', Date.now() - initialTime;
      }
    }
    return response;
  }

  function basicSort(element) {
    var response = '';
    if (myArray.length > 0) {
      var initialTime = Date.now();
      myArray.map(function(k, v) {
       if(k === element) {
         elementKey = v;
         console.log('Spent time using lineal search:', Date.now() - initialTime);
         response = Date.now() - initialTime;
         return response;
       }
     });
   } else {
     response = 'Array Empty';
   }
    return response;
  }

  function bubbleSort(element) {
    var response = '';
    if (myArray.length > 0) {
      var initialTime = Date.now();
      var sortedArray = myArray.sort(function(a, b){return a-b});
      bubbleRun(element, sortedArray);

      response = Date.now() - initialTime
    } else {
      response = 'Array Empty';
    }
    console.log('BINARIO', bubleResponse);
    return bubleResponse;
  }

  function bubbleRun(element, arrayData) {
    var initialTime = Date.now();
    if (arrayData.length > 0) {
      var minIndex = 0;
	    var maxIndex = arrayData.length - 1;
      var centerVal = Math.ceil((arrayData.length-1)/2);
      var center = arrayData[centerVal];
      var arrayLeft = arrayData.splice(0, centerVal);
      var arrayRight = arrayData.splice(1, (arrayData.length-1));
      if (element === center) {
        console.log('Element found, spent time in binary search:', Date.now() - initialTime);
        bubleResponse = Date.now() - initialTime;
        return bubleResponse;
      } else {
        if (element < center) {
          bubbleRun(element, arrayLeft);
        } else {
          bubbleRun(element, arrayRight);
        }
      }
    } else {
        console.log('Element not found!');
        bubleResponse = 'Element not found!';
        return bubleResponse;
    }
  }

  return {
    getArray: getArray,
    basicSort: basicSort,
    bubbleSort: bubbleSort
  };
})();

var submitButton = document.getElementById('sort-data');
submitButton.addEventListener('click', function() {
  sortNumbers.getArray(+document.getElementById('arrayLimit').value);
  var totalLineal = sortNumbers.basicSort(+document.getElementById('element').value);
  var totalBinary =  sortNumbers.bubbleSort(+document.getElementById('element').value);
  document.getElementById('response-normal').innerText = 'Spent time using lineal search: ' + totalLineal;
  document.getElementById('response-binary').innerText = 'Spent time using binary search: ' + totalBinary;
});
