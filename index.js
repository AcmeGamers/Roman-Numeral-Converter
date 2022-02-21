function convertToRoman(num) {
  var roman = "";
  var romanNum = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
  ];
  var romanNum2 = [
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  for (var i = 0; i < romanNum.length; i++) {
    while (num >= romanNum[i][1]) {
      roman += romanNum[i][0];
      num -= romanNum[i][1];
    }
  }
  for (var i = 0; i < romanNum2.length; i++) {
    while (num >= romanNum2[i][1]) {
      roman += romanNum2[i][0];
      num -= romanNum2[i][1];
    }
  }
  return roman;
}

convertToRoman(36);
