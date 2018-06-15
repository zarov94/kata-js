

function isPalindrome(str) {
  return str == str.split("").reverse().join("");
}

function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

function highAndLow(numbers) {
  var arr = numbers.split(" ").map(Number);
  var max = Math.max(...arr);
  var min = Math.min(...arr);
  return max + " " + min
}

function GetSum(a, b) {
  var sum = 0;
  if (a === b) {
    return a;
  } else if (a < b) {
    for (var i = a; i <= b; i++) {
      sum += i;
    }
  } else {
    for (var i = b; i <= a; i++) {
      sum += i
    }
  }
  return sum
}



function findShort(s){

  var lengths = s.split(" ").map(x => x.length);
  return Math.min.apply(null, lengths);
}

