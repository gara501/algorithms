function Three(staircase) {
  var stair = '';
  for (var i = staircase; i > 0; i--) {
    for (var j = 0; j <= staircase; j++) {
      if (j < i) {
        stair += ' ';
      }else {
        stair += '#';
      }
    }
    stair += '\n';
  }
  console.log(stair);
}

Three(6);

//recursive example

count = 0;

function string(stair, characters, total, cb) {
  if (total >= 0) {
    if (characters <= total) {
      stair += ' ';
      string(stair, characters, total - 1, cb);
    }else {
      stair += '#';
      string(stair, characters, total - 1, cb);
    }
    stair += '\n';
  }else {
    cb(stair);
  }
}

function ThreeR(staircase) {
  var stair = '';
  var total = staircase + count;
  count++;

  if (staircase !== 0) {
    string(stair, count, total, function(string) {
      console.log(string);
      ThreeR(staircase - 1);
    });
  }
}

ThreeR(6);
