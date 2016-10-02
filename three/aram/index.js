var three = (function () {
  var numbers = '';
  var conc = '';

  function getThree(data) {
    var localData = +data;
    var symbols = [];
    var response = '';
    for(var i=1; i<=localData; i++) {
      symbols.push(i);
    }
    if (symbols.length > 0) {
      response = processThree(symbols);
    }
    return response;
  }

  function processThree(arrayData) {
    arrayData.map(function(val) {
     for(var i=1; i<=(arrayData.length-val); i++) {
       numbers += ' ';
     }

     for(var c=1; c<=val; c++) {
       numbers += '#';
     }
      numbers = numbers + '\n';
    });
    return numbers;
  }

  return {
    getThree: getThree
  };
})();

var submitButton = document.getElementById('three-data');
submitButton.addEventListener('click', function() {
  var elements = +document.getElementById('elements').value;
  var data = three.getThree(elements);
  document.getElementById('response').innerText = '';
  document.getElementById('response').innerText = data;
});
