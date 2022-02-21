function convertToRoman(num) {
  var roman = "";
  var romanNum = [
    {
      value: 1000,
      letter: "M",
    },
    {
      value: 900,
      letter: "CM",
    },
    {
      value: 500,
      letter: "D",
    },
    {
      value: 400,
      letter: "CD",
    },
    {
      value: 100,
      letter: "C",
    },
    {
      value: 90,
      letter: "XC",
    },
    {
      value: 50,
      letter: "L",
    },
    {
      value: 40,
      letter: "XL",
    },
    {
      value: 10,
      letter: "X",
    },
    {
      value: 9,
      letter: "IX",
    },
    {
      value: 5,
      letter: "V",
    },
    {
      value: 4,
      letter: "IV",
    },
    {
      value: 1,
      letter: "I",
    },
  ];
  for (var i = 0; i < romanNum.length; i++) {
    while (num >= romanNum[i].value) {
      roman += romanNum[i].letter;
      num -= romanNum[i].value;
    }
  }
  return roman;
}
