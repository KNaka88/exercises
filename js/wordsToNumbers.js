// Numbers to Words
// Create a webpage that translates numbers in numeric form into written words. For example, it would translate 384 into "three hundred eighty four".
// Start small, and then get your code working for numbers up to 1 trillion.


var userInput = prompt("type numbers");
var splitArray = userInput.split("");
var groupArray = [];
var returnWords = '';

var createGroupedArray = function(arr) {
  var group = [];
  for(var i=0; i<splitArray.length; i += 3){
    group.push(splitArray.slice(i, i+3));
  }
  return group;
}


var ones = function(number){
  switch(number){
    case "0":
      return "";
      break;
    case "1":
      return "one";
      break;
    case "2":
      return "two";
      break;
    case "3":
      return "three";
      break;
    case "4":
      return "four";
      break;
    case "5":
      return "five";
      break;
    case "6":
      return "six";
      break;
    case "7":
      return "seven";
      break;
    case "8":
      return "eight";
      break;
    case "9":
      return "nine";
      break;
    default:
      return "Error";
  }
}


var tens = function(number){
  switch(number){
    case "2":
      return "twenty";
      break;
    case "3":
      return "thirty";
      break;
    case "4":
      return "fourty";
      break;
    case "5":
      return "fifty";
      break;
    case "6":
      return "sixty";
      break;
    case "7":
      return "seventy";
      break;
    case "8":
      return "eighty";
      break;
    case "9":
      return "ninety";
      break;
    default:
      return "Error";
  }
}

var uniqueNum = function(number){
  switch(number){
    case "10":
      return "ten";
      break;
    case "11":
      return "eleven";
      break;
    case "12":
      return "twelve";
      break;
    case "13":
      return "thirteen";
      break;
    case "14":
      return "fourteen";
      break;
    case "15":
      return "fifteen";
      break;
    case "16":
      return "sixteen";
      break;
    case "17":
      return "seventeen";
      break;
    case "18":
      return "eighteen";
      break;
    case "19":
      return "nineteen";
      break;
    case "20":
      return "twenty";
      break;
    default:
      return "Error";
  }
}

var concat = function(number){
  switch(number){
    case "1":
      return ""; //hundred
      break;
    case "2":
      return " thousand ";
      break;
    case "3":
      return " million ";
      break;
    case "4":
      return " billion ";
      break;
    case "5":
      return " trillion ";
      break;
    case "6":
      return " quardrillion ";
      break;
    case "7":
      return " pentillion ";
      break;
    case "8":
      return " sextillion ";
      break;
    case "9":
      return " septillion ";
      break;
    case "10":
      return " octillion ";
      break;
    case "11":
      return " nonillion ";
      break;
    case "12":
      return " decillion ";
      break;
    default:
      return "Error";
  }
}

while(splitArray.length % 3 !== 0){
  splitArray.unshift("0");
}

groupArray = createGroupedArray(splitArray);
var digitSet = groupArray.length;

for(var i=0; i<groupArray.length; i++){
  var notZero = true;


  //Hundreds
  if(groupArray[i][0] != "0"){
    returnWords += ones(groupArray[i][0]) + " hundred and ";
  }


  //Tens and Ones
  if(groupArray[i][1] === "0"){
    //do nothing

  }else if (groupArray[i][1] === "1"){
    //eleven-nineteen case
    var tens = groupArray[i][1] + groupArray[i][2];
    returnWords += uniqueNum(tens)

  }else{
    //tens: twenty ... ninety
    var tensNum = groupArray[i][1];

    //ones: one ... nine
    var onesNum = groupArray[i][2];

    returnWords += tens(tensNum) + " ";
    returnWords += ones(onesNum);
  }

  //one:
  if(groupArray[i][0] === "0" && groupArray[i][1] === "0" && groupArray[i][2] === "0"){
    //case "000"
    notZero = false;
  }else if (groupArray[i][1] === "0"){
    var onesNum = groupArray[i][2];
    returnWords += ones(onesNum);
  }

  //More than thousands

  if(notZero) { //last three digits are not "000"
    returnWords += concat(digitSet.toString());
  }

  digitSet--;
}

alert(returnWords);
