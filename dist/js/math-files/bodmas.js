const replaceSignRegex = /\/(?=\d+\.?d*|\(|\)|\[|\]|<)/g;
const replaceSignRegexTimes = /\*(?=\d+\.?d*|\(|\)|\-|\[|\]|<|\s)/g;
const replaceSignRegexPlus = /\+(?=\d+\.?d*|\(|\)|\[|\]|<)/g;
const replaceSignRegexMinus = /\-(?=\d+\.?d*|\(|\)|\[|\]|<)/g;
const replaceSignRegexLeftParent = /\(/g;
const replaceSignRegexRightParent = /\)/g;
const replaceSignRegexLeftBracket = /\[/g;
const replaceSignRegexRightBracket = /\]/g;

const replaceRegex = {
  replaceSignRegex,
  replaceSignRegexTimes,
  replaceSignRegexPlus,
  replaceSignRegexMinus,
  replaceSignRegexLeftParent,
  replaceSignRegexRightParent,
  replaceSignRegexLeftBracket,
  replaceSignRegexRightBracket,
};

// let selectEle = document.querySelector("#bodmss-level");
// let strUser = selectEle.options[selectEle.selectedIndex].value;
//number input reference
const selectEleTopic = document.querySelector("#select-topic");
const numberInput = document.querySelector("#number-input");
let questionNumber;
let mesagebra = `Brackets are present, so evaluate the contents of the brackets first.<br>`;
//generate random number between 2 and 19 both included
function generateRanNum() {
  let ranNum = Math.floor(Math.random() * 20);
  if (ranNum === 0 || ranNum === 1) {
    ranNum = 2;
  }
  return ranNum;
}

//generate a random number between 2 and 5 both included
function generateRanSlice() {
  let ranNum = Math.floor(Math.random() * 4);
  if (ranNum === 0 || ranNum === 1) {
    ranNum = 2;
  }
  return ranNum;
}

//generate a random number between 0 and 5 both included
function generateRanExponent() {
  let ranNum = Math.floor(Math.random() * 6);

  return ranNum;
}

//basic level
function basicQuestions(randomArray) {
  // (array.some((item) => item.startsWith("*")))

  let newRandomArray = randomArray.filter((item) => {
    let itemArray = item.split("");

    if (
      !itemArray.some((item) => item === "[") &&
      !itemArray.some((item) => item === "(") &&
      !itemArray.some((item) => item === ">")
    ) {
      return item;
    }
  });
  return newRandomArray;
}

//intermediate level
function intermediateQuestions(randomArray) {
  // (array.some((item) => item.startsWith("*")))

  let newRandomArray = randomArray.filter((item) => {
    let itemArray = item.split("");

    if (
      !itemArray.some((item) => item === "[") &&
      (itemArray.some((item) => item === "(") ||
        itemArray.some((item) => item === ">"))
    ) {
      return item;
    }
  });
  return newRandomArray;
}

//Advanced level
function advancedQuestions(randomArray) {
  // (array.some((item) => item.startsWith("*")))

  let newRandomArray = randomArray.filter((item) => {
    let itemArray = item.split("");

    if (
      itemArray.some((item) => item === "[") &&
      (itemArray.some((item) => item === "(") ||
        itemArray.some((item) => item === ">"))
    ) {
      return item;
    }
  });
  return newRandomArray;
}

//generate random array
function generateRandomArray() {
  //generate random numbers between 2 and 19
  let rN1 = generateRanNum();
  let rN2 = generateRanNum();
  let rN3 = generateRanNum();
  let rN4 = generateRanNum();
  let rN5 = generateRanNum();
  let rN6 = generateRanNum();
  let rN7 = generateRanNum();
  let rN8 = generateRanNum();
  let rN9 = generateRanNum();
  let rN10 = generateRanNum();

  let rN11 = generateRanNum();
  let rN12 = generateRanNum();
  let rN13 = generateRanNum();
  let rN14 = generateRanNum();
  let rN15 = generateRanNum();

  //generate random number between 0 and 1
  let tRN = Math.floor(Math.random() * 2);
  let tRN2 = Math.floor(Math.random() * 2);
  let tRN3 = Math.floor(Math.random() * 2);
  let tRN4 = Math.floor(Math.random() * 2);

  let pMA = ["+", "-"];
  let MD = ["*", "/"];

  //generate a random number between 2 and 5
  let ran2To5A = generateRanExponent();
  let ran2To5B = generateRanExponent();
  let ran2To5C = generateRanExponent();
  let ran2To5D = generateRanExponent();
  let newRandomArray;

  //question array//"5-2<i></i>+(3+2)<sup>2</sup>"
  let randomArray = [
    `<i></i>(${rN10}${pMA[tRN3]}${rN3})<sup>${ran2To5A}</sup>`,
    `+<i></i>${rN1}<sup>${ran2To5A}</sup>`,
    `+<i></i>${rN2}<sup>${ran2To5C}</sup>`,
    `+<i></i>${rN12}<sup>${ran2To5D}</sup>`,
    `+<i></i>${rN4}<sup>${ran2To5B}</sup>`,
    `*${rN3}`,
    `-${rN10}${MD[tRN]}${rN4}`,
    `*${rN10}${MD[tRN3]}${rN4}`,
    `*${rN12}${pMA[tRN3]}${rN8}`,
    `-${rN1}${MD[tRN3]}${rN10}`,
    `*${rN5}`,
    `*${rN6}`,
    `+${rN4}`,
    `*${rN9}`,
    `*${rN7}${pMA[tRN4]}${rN8}`,
    `-${rN1}${MD[tRN2]}${rN8}`,
    `*${rN3}${MD[tRN4]}${rN7}`,
    `*${rN2}${MD[tRN]}${rN9}`,
    `+${rN12}${MD[tRN3]}${rN14}`,
    `*${rN9}${MD[tRN3]}${rN10}`,
    `/${rN4}${pMA[tRN4]}${rN9}`,
    `+${rN1}${MD[tRN2]}${rN3}-<i></i>${rN13}<sup>${ran2To5A}</sup>`,
    `*(${rN11}${MD[tRN4]}${rN12}-<i></i>${rN8}<sup>${ran2To5B}</sup>)`,
    `*(${rN13}${pMA[tRN3]}${rN10}+<i></i>${rN3}<sup>${ran2To5C}</sup>)`,
    `+${rN5}(${rN13}${pMA[tRN2]}${rN14})-<i></i>${rN3}<sup>${ran2To5D}</sup>`,
    `-${rN7}+[${rN1}${pMA[tRN2]}(${rN3}${MD[tRN3]}${rN7})${pMA[tRN3]}${rN11}]`,
    `+${rN5}+[${rN15}${pMA[tRN2]}(${rN15}${pMA[tRN3]}${rN6})${pMA[tRN3]}${rN10}]`,
    `*${rN9}-[${rN10}${pMA[tRN2]}(${rN1}${pMA[tRN3]}${rN7})${MD[tRN3]}${rN5}]`,
    `-(${rN4}${pMA[tRN3]}${rN7})`,
    `/[${rN12}${pMA[tRN3]}(${rN3}${MD[tRN3]}${rN1})]+<i></i>${rN2}<sup>${ran2To5A}</sup>`,
    `*[${rN15}${pMA[tRN2]}(${rN7}${MD[tRN3]}${rN9})]-<i></i>${rN3}<sup>${ran2To5B}</sup>`,
    `[${rN11}${pMA[tRN2]}(${rN7}${MD[tRN3]}${rN6})]`,
    `+(${rN10}${pMA[tRN3]}${rN3})+${rN12}${MD[tRN3]}${rN14}`,
    `(${rN12}${MD[tRN3]}${rN13})-${rN10}${MD[tRN3]}${rN11}`,
    `+(${rN2}${pMA[tRN3]}${rN4})-${rN10}${MD[tRN3]}${rN11}`,
    `(${rN13}${pMA[tRN2]}${rN14})`,
    `(${rN3}${MD[tRN2]}${rN4})`,
    `(${rN5}${MD[tRN2]}${rN7})`,
    `(${rN2}${MD[tRN2]}${rN9})`,
  ];

  //implement level of bodmass
  let selectEle = document.querySelector("#bodmss-level");
  let userChoice = selectEle.options[selectEle.selectedIndex].value;
  if (userChoice === "basic") {
    newRandomArray = basicQuestions(randomArray);
  } else if (userChoice === "intermediate") {
    newRandomArray = intermediateQuestions(randomArray);
  } else {
    newRandomArray = advancedQuestions(randomArray);
  }

  return newRandomArray;
}

//create the questions from the random array
function generateQuestions() {
  //array of objects
  let questionBank = [];

  let que9Temp;
  //question number from number input
  questionNumber = Number(numberInput.value);
  for (let index = 0; index < questionNumber; index++) {
    //join array with empty string and replace * and / at the beging with empty string

    //returns a random number between 2 and 5 both included
    let sliceNum = generateRanSlice();
    //generate random number between 2 and 19 both included
    let rN1 = generateRanNum() * 3;
    let rN2 = generateRanNum() * 10;
    let rN3 = generateRanNum() * 15;
    let rN4 = generateRanNum() * 20;
    //generate random array
    let randomArray = generateRandomArray();
    //make copy of the random array
    let randomArrayCopy = [...randomArray];
    //shuffle the random array
    randomizeArray(randomArrayCopy);
    //slice out the random array,copy the slice and shuffle it
    let arraySlice = randomArrayCopy.slice(0, sliceNum);
    arraySlice = [...arraySlice];
    randomizeArray(arraySlice);
    //produce string from the array
    let que9 = arraySlice.join("");
    que9 = que9.replace(/^\//, "");
    que9 = que9.replace(/^\*/, "");
    que9 = que9.replace(/^\-/, "");
    que9 = que9.replace(/^\+/, "");
    //console.log(que9, "wwwqq");
    //check for duplicates
    if (que9 === que9Temp) {
      index = index - 1;
      continue;
    }
    que9Temp = que9;
    //solve the question, put the question and its options in question bank array as object
    let queAns = main(que9)[0];

    let option2 =
      getNumOfDeci(queAns - rN1) > 2
        ? Number((queAns - rN1).toFixed(2))
        : queAns - rN1;
    let option3 =
      getNumOfDeci(queAns + rN2) > 2
        ? Number((queAns + rN2).toFixed(2))
        : queAns + rN2;
    let option4 =
      getNumOfDeci(queAns - rN3) > 2
        ? Number((queAns - rN3).toFixed(2))
        : queAns - rN3;
    let option5 =
      getNumOfDeci(queAns + rN4) > 2
        ? Number((queAns + rN4).toFixed(2))
        : queAns + rN4;

    //replace signs /,*

    let questionOptionsObj = {
      [que9]: [queAns, option2, option3, option4, option5],
    };
    questionBank.push(questionOptionsObj);
  }

  return questionBank;
}
function getNumOfDeci(value) {
  if (value % 1 != 0) {
    return value.toString().split(".")[1].length;
  }
  return 0;
}
function randomizeArray(array) {
  for (let index = array.length - 1; index > 0; index--) {
    const ran = Math.floor(Math.random() * index);
    const temp = array[index];
    array[index] = array[ran];
    array[ran] = temp;
  }
}
//check whether the right and left bracket characters are in correct amoumt
function bracketCharsAgree(str) {
  let rightBracketNumber = str.split("(").length - 1;
  let leftBracketNumber = str.split(")").length - 1;
  if (rightBracketNumber === leftBracketNumber) {
    return true;
  }
  return false;
}
//evaluate brackek
// +(17+15)+9^3(4+2)^3*(14+4+23)
// (4+10+4^4)(10+4)^4+17(4-19)-4^4(4/9)

//multiply into brackets
function multiIntoBracket(strBeforBracket, braValue, stringVar) {
  let freeRegexPattern = /(\*?\+?\-?\/?\]?\[?)(\d+\.?\d*)$/;
  let testForMatch = strBeforBracket.match(freeRegexPattern);
  let operatorArray = ["/", "*", "+", "]", "[", "/[", "*[", "+[", "-["];
  let italicStrArr = ["<", "i", ">", "<", "/", ">"];
  let numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let strBeforBracketCopy = strBeforBracket;
  console.log(strBeforBracketCopy, "copy,end--");
  if (
    strBeforBracket.startsWith("<i></i>") &&
    strBeforBracket.endsWith("<i></i>")
  ) {
    console.log("startsWithtttttcopy,end--");
    return [braValue, "*" + strBeforBracket, ""];
  }
  // </sup><i></i>
  if (strBeforBracket.endsWith("</sup><i></i>")) {
    console.log(strBeforBracket, "strrrrrrttt1111");
    strBeforBracket =
      strBeforBracket.slice(0, strBeforBracket.lastIndexOf("<i></i>")) +
      "*" +
      "<i></i>";
    console.log(strBeforBracket, "strrrrrrtt2222222");
    return [braValue, strBeforBracket, ""];
  }
  if (strBeforBracket.endsWith("<i></i>")) {
    console.log("rrrend,end--");
    strBeforBracket = trimOPeratorFromRight(strBeforBracket, italicStrArr);
    console.log(strBeforBracket, "rrrend,end--");
  }
  if (strBeforBracket === "" || strBeforBracket.endsWith("</sup>")) {
    return [braValue, strBeforBracket + "*", ""];
  }
  if (testForMatch) {
    let matchStr = testForMatch[0];
    console.log(matchStr, "yyy^");
    let matchStrBraReplaced = matchStr.replace(/\-\[/g, "");
    matchStrBraReplaced = matchStrBraReplaced.replace(/\]|\[|\*|\//g, "");

    let matchStrNumber = Number(matchStrBraReplaced);
    let newBraValue = braValue * matchStrNumber;
    console.log(newBraValue, "$$uu");
    let lastIndexOFMatchStr = strBeforBracket.lastIndexOf(matchStr);
    let newStrBeforeBra = strBeforBracket.slice(0, lastIndexOFMatchStr);
    // if (matchStr.includes("[")) {
    //   newStrBeforeBra = newStrBeforeBra + "[";
    // }
    if (operatorArray.includes(testForMatch[1])) {
      newStrBeforeBra = newStrBeforeBra + testForMatch[1];
    }

    if (strBeforBracketCopy.endsWith("<i></i>")) {
      newStrBeforeBra = newStrBeforeBra + "<i></i>";
    }
    let lastDigitOfNewStr = newStrBeforeBra.charAt(newStrBeforeBra.length - 1);
    let firstDigitOfNewBraValue = newBraValue.toString().charAt(0);
    if (
      numberArray.includes(lastDigitOfNewStr) &&
      numberArray.includes(firstDigitOfNewBraValue)
    ) {
      newStrBeforeBra = newStrBeforeBra + "+";
    }

    return [newBraValue, newStrBeforeBra, matchStrNumber];
  }
  return false;
}

function bracketEvaluator(stringVar, mesagebra = "") {
  let workDetailsMessage = "";
  let errorMessage = "";
  let resultArr = "";
  console.log("runing");
  let numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ")"];
  let operatorArr = ["*", "+", "/", "-", "<"];
  stringVar = stringVar.replace(/\s/g, "");
  let reg3 = /^(\+?\-?\]?\(?<?\d*[\+\/\*\.\]?\[?\-\s\(\)\^supi\/<>\=]{0,2})+(\+?\*?\-?\d*\)?\>?\]?)$/g; //^(\d+[\+\/\*\.\- \(\)]{1})+\d+$/;
  let matchValue = stringVar.match(reg3);
  if (matchValue) {
    console.log("matchStr-runing2");
    //if stringVar does not contain brackeks,don;t process, return the stringVar like that
    if (!stringVar.includes("(") && !stringVar.includes(")")) {
      console.log("runing3");
      workDetailsMessage += `Brackets are absent in ${stringVar}<br>The the next operation should be Orders.<br>Is  there a number containing exponent?<br>`;
      resultArr = [stringVar, workDetailsMessage, errorMessage];
      console.log(resultArr[0], resultArr[1], resultArr[2]);
      return resultArr;

      //discard the stringVar if it contains any of the bracket char but they dont agree
    } else if (!bracketCharsAgree(stringVar)) {
      console.log("incompatible brakets");
      errorMessage += `Error:${stringVar} not processed: Reason;Bracket clearance operation failed, bracket pairs do not agree, please check your input and ensure that brackets are present in pairs.<br> `;
      resultArr = ["", "", errorMessage];
      console.log(resultArr[0], resultArr[1], resultArr[2]);
      return resultArr;
    } else {
      //contanin brackets that are in the right proportion
      workDetailsMessage += `${mesagebra}`;
      let arrStr = [];
      let startIndex = 0;
      let leftBraIndex = 0;
      let rightBraIndex = 0;
      //get the characters inside the brackets and the characters outside the bracket.
      //evaluates the string inside the bracket
      //puts the string before bracket and evaluated bracket string inside an array
      //join the string to produce an acceptable input for the next operation- which is orders
      let bracketContentAndValue = "";
      while (true) {
        console.log(stringVar, "vvvrrstrbeingEva");
        //find where the brackets items are located in the string
        leftBraIndex = stringVar.indexOf("(", startIndex);
        rightBraIndex = stringVar.indexOf(")", startIndex);
        //stop the operaton if there is no more brackets to be evaluated
        if (leftBraIndex === -1 || rightBraIndex === -1) {
          break;
        }

        //get the content inside the bracket
        let startSliceIndex = leftBraIndex + 1;
        let bracketStr = stringVar.substring(startSliceIndex, rightBraIndex);

        console.log(bracketStr, "===braStr");
        //get content before bracket and push it into array
        let strBeforBracket = stringVar.substring(startIndex, leftBraIndex);
        console.log(strBeforBracket, "(%%%StrBeBra");
        //arrStr.push(strBeforBracket);
        //remove any right trailing operator on the bracket string
        bracketStr = trimOPeratorFromRight(bracketStr, ["+", "-", "*", "/"]);
        //evaluate the bracket string
        let braResult = bordMass(bracketStr);

        let multiplyInto = multiIntoBracket(
          strBeforBracket,
          braResult,
          stringVar
        );
        if (multiplyInto) {
          arrStr.push(multiplyInto[1]);
          arrStr.push(multiplyInto[0]);
          bracketContentAndValue += `${multiplyInto[2]}(${bracketStr}) -------> ${multiplyInto[0]}<br>`;
        } else {
          arrStr.push(strBeforBracket);
          arrStr.push(braResult);
          bracketContentAndValue += `${bracketStr} -------> ${braResult}<br>`;
        }

        //get the next bracket and evaluate it
        startIndex = rightBraIndex + 1;

        console.log(arrStr, "@@arrayStrBeBraAndBraStr");
      }

      //include the last element of the str in the array i
      let splitArr = stringVar.split(")");
      let lastEle = splitArr[splitArr.length - 1];
      let firstCharOfLastEle = lastEle.charAt(0);
      //let lastCharOfArrStr = arrStr[arrStr.length - 1].charAt(0);
      lastEle = numArray.includes(firstCharOfLastEle) ? "*" + lastEle : lastEle;
      arrStr.push(lastEle);
      console.log(arrStr, "@@sameArrayWithlastEle");
      //remove empty str from the array
      let message = `<br>`;
      let arrayWithoutEmptyStr = arrStr.filter((item) => item.toString() != "");
      console.log(arrayWithoutEmptyStr, "**&&removeEmtyStr");
      workDetailsMessage += bracketContentAndValue;
      workDetailsMessage += `Therefore ${stringVar} simplifies to: `;
      //stringVarResult = joinStr(arrayWithoutEmptyStr).trim();

      //convert the array to string and put the right operators
      let stringVarResult = arrayWithoutEmptyStr.join("").trim();
      stringVarResult = trimOPeratorFromRight(stringVarResult, operatorArr);
      stringVarResult = stringVarResult.replace(/^\*/, "");
      stringVarResult = stringVarResult.replace(/\-\-/g, "+");
      stringVarResult = stringVarResult.replace(/\+\+/g, "+");
      stringVarResult = stringVarResult.replace(/\+\-/g, "-");
      stringVarResult = stringVarResult.replace(/\-\+/g, "-");
      //wstringVarResult = stringVarResult.replace(/\+\*/g, "*");

      stringVarResult = stringVarResult.replace(/\/<i><\/i>\*/g, "/<i></i>"); // /<i></i>*
      stringVarResult = stringVarResult.replace(/\*<i><\/i>\*/g, "*<i></i>");
      stringVarResult = stringVarResult.replace(/\+<i><\/i>\*/g, "+<i></i>");
      stringVarResult = stringVarResult.replace(/\-<i><\/i>\*/g, "-<i></i>");
      stringVarResult = stringVarResult.replace(/^(<i><\/i>\*)/, "<i></i>");
      stringVarResult = stringVarResult.replace(/\-<i><\/i>\-/g, "+<i></i>");
      stringVarResult = stringVarResult.replace(/\+<i><\/i>\-/g, "-<i></i>");

      console.log(stringVarResult, "555577==strProduced");

      //let mesResultStr = stringVarResult.replace(/\*|\/(?=\d+)/, "");

      workDetailsMessage += `${stringVarResult}` + message;
      console.log(stringVar, "^^^$$strWorkedOn");

      resultArr = [stringVarResult, workDetailsMessage, errorMessage];
      console.log(resultArr[0], resultArr[1], resultArr[2]);
      return resultArr;
    }
  } else {
    console.log("runing4-Bracket");
    errorMessage += `Error:${stringVar} not processed: Reason: input does not conform with format,
      Please ensure that input contains only numbers and signs and does not contain letters `;
    resultArr = ["", "", errorMessage];
    return resultArr;
  }
}

//handle square brackets
function squareBracketsHandler(str) {
  //let strCopy= str;
  let workDetailsMessage = "";
  //let errorMessage = "";
  if (str.indexOf("[") != -1 || str.indexOf("]") != -1) {
    //square brackets are present and in the right proportion
    console.log("running-SquareBracketsHandler");
    str = str.replace(/\]/g, ")");
    str = str.replace(/\[/g, "(");
    str = formateStrExponent(str);
    let resultArray = bracketEvaluator(str);
    workDetailsMessage += `Square brackets are present. Handle them.<br>`;
    workDetailsMessage += resultArray[1];
    let message = `Brackets successfully cleared.<br> The next operation should Orders, check whether a number containing exponent is present.<br>`;
    workDetailsMessage += message;
    return [resultArray[0], workDetailsMessage, resultArray[2]];
  } else {
    console.log("running-SquareBracketsHandler2");
    return [str, "", ""];
  }
}

//expand exponents
function expandExponents(baseNumber, exponentNuber) {
  let resultStr = "";
  for (let index = 0; index < exponentNuber; index++) {
    resultStr += baseNumber.toString() + " * ";
  }
  resultStr = trimString(resultStr.trim(" "), "*")[1];
  return resultStr;
}

//evaluate exponents
// `3+5+4*<i ></i>566<sup>5</sup>6+5`
function clearExponents(strFromBra) {
  //console.log(strFromBra, "expStr2");
  let strFromBraCopy = strFromBra;
  let workDetailsMessage = "";
  let exponentPresent = false;
  let workContent = "";
  while (strFromBra.indexOf("<i></i>") != -1) {
    //console.log("insidexponent");
    exponentPresent = true;
    let startSliceIndex = strFromBra.indexOf("<i></i>");
    let endSliceIndex = strFromBra.indexOf("</sup>") + 6;
    let strBeforeStart = strFromBra.slice(0, startSliceIndex); //this part 3+5+4*
    let strAfterEnd = strFromBra.slice(endSliceIndex); //this part 6+5
    let baseAndexponentStr = strFromBra.slice(startSliceIndex, endSliceIndex); //`3+5+4*<i></i>566<sup>5</sup>6+5`

    let baseAndExponentArray = baseAndexponentStr.split("<sup>"); // `3+5+4*<i></i>566<sup>5</sup>6+5`
    let baseNumber = baseAndExponentArray[0].slice(7); //3+5+4*<i></i>566 then get 566 as a string
    let baseTem = baseNumber;
    baseNumber = baseNumber.replace(/\*|\//, "");

    baseNumber = Number(baseNumber); //566 as number
    let exponentNumber = baseAndExponentArray[1].slice(0, -6); //5   as str
    exponentNumber = Number(exponentNumber); // 5 as number
    let resultNum = Math.pow(baseNumber, exponentNumber); //solve the problem
    resultNum = resultNum.toString();
    //resultNum = resultNum.startsWith("-") ? resultNum : "+" + resultNum;
    // resultNum = baseTem.startsWith("*")
    //   ? resultNum.replace(/\+/, "*")
    //   : resultNum;
    //resultNum = resultNum.replace(/^(\*\+)/g, "");
    strFromBra = strBeforeStart + resultNum.toString() + strAfterEnd;

    workContent += `${baseNumber.toString()}<sup>${exponentNumber.toString()}</sup> ---------> ${expandExponents(
      baseNumber,
      exponentNumber
    )} = ${resultNum.replace(/\*/, "")}<br>`;
  }
  strFromBra = strFromBra.replace(/\-\-/g, "-");
  strFromBra = strFromBra.replace(/\-\+/g, "-");
  strFromBra = strFromBra.replace(/\+\-/g, "-");
  strFromBra = strFromBra.replace(/\+\+/g, "+");
  strFromBra = strFromBra.replace(/\/\+/g, "/");
  strFromBra = strFromBra.replace(/^\*/, "");
  // strFromBra =  strFromBra.replace(/\*|\//, "")

  //mesStrFromBra = strFromBra.replace(/\*|\/(?=\d+)/, "");
  workContent =
    workContent +
    `${strFromBraCopy} now simplifys to ${strFromBra}<br>Exponents successfully tackled,now proceed to the next item on BODMAS, which is division or multiplication.<br>`;

  workDetailsMessage = exponentPresent
    ? `Exponent is present. Handle it.<br>${workContent}`
    : `Orders absent- there is no number containing  exponents  on ${strFromBra}.<br> So proceeds to the next  step which is Division or Multiplication.<br>`;
  //console.log(strFromBra, "expStr");

  const resultArr = [strFromBra, workDetailsMessage, ""];

  return resultArr;
}

//formate input exponent string
function formateStrExponent(str) {
  //let operatorArray = ["+", "-", "*", "/", "(", ")"];
  let strTemp = str;
  let newStr = "";
  let resultStr = "";
  let strAfterExponent;
  let exponentPresent = false;
  let lenOfCoeStr = "";
  let strBeforeCoeffi = "";
  let lenOfExponentStr = "";
  let indexOfLeftBra;
  //let workStr="";

  //(2+2)^2(3+3)^2//<i></i>(2+2)<sup>2</sup><i></i><i></i>(2+2)<sup>2</sup>(3+3)<sup>2</sup>
  while (str.indexOf("^") != -1) {
    exponentPresent = true;
    indexOfCaret = str.indexOf("^");
    if (str.charAt(indexOfCaret - 1) === ")") {
      for (let index = indexOfCaret; index > -1; index--) {
        const element = str[index];
        if (element === "(") {
          indexOfLeftBra = index;
          break;
        }
      }

      let coeffiStr = str.slice(indexOfLeftBra, indexOfCaret);
      strBeforeCoeffi = str.slice(0, indexOfLeftBra);
      let exponentStr = str.match(/\^(\-?\d+\.?\d*)([\+\-\*\/\(\)]?)/)[1];
      lenOfExponentStr = exponentStr.length;
      strAfterExponent = str.slice(indexOfCaret + lenOfExponentStr + 1);
      //str = strAfterExponent;
      str = `${strBeforeCoeffi}<i></i>${coeffiStr}<sup>${exponentStr}</sup>${strAfterExponent}`;

      //str = strAfterExponent;
    } else {
      if (str.charAt(str.indexOf("^") - 1) === "]") {
        str = str;
        break;
      } else {
        let coeffiStr = str.match(/[\+\-\*\/\(\)]?(\d+\.?\d*)\^/)[1];
        let exponentStr = str.match(/\^(\-?\d+\.?\d*)[\+\-\*\/\(\)]?/)[1];
        lenOfCoeStr = coeffiStr.length;
        strBeforeCoeffi = str.slice(0, indexOfCaret - lenOfCoeStr);

        lenOfExponentStr = exponentStr.length;
        strAfterExponent = str.slice(indexOfCaret + lenOfExponentStr + 1);
        //str = strAfterExponent;
        // newStr += `${strBeforeCoeffi}<i></i>${coeffiStr}<sup>${exponentStr}</sup>`;
        str = `${strBeforeCoeffi}<i></i>${coeffiStr}<sup>${exponentStr}</sup>${strAfterExponent}`;
      }

      // str = strAfterExponent;
    }
  }
  //newStr += strAfterExponent;
  resultStr = exponentPresent ? str : strTemp;
  console.log(resultStr, "###@@!!");
  return resultStr;
}

//do division of bodmas
// function DividNun(stringVar) {
//   //"+75h+9+698.78-5"
//   stringVar = stringVar.replace(/\s/g, "");
//   let reg3 = /^([+-]?\d*\+?\/?\*?\.?\-?\s?)+(\d*)$/; //^(\d+[\+\/\*\.\- \(\)]{1})+\d+$/;
//   let matchValue = stringVar.match(reg3);
//   console.log(stringVar, "divvvvStr");
//   let errorMessage = "";
//   let workDetailsMessage = "";
//   let resultArr = [];
//   let didDivision = false;
//   if (matchValue) {
//     //console.log("runing Division");
//     let matchStr = matchValue[0];
//     //put space between number and sign "4*6+7-4"="4 *6 +7 -4"
//     // let conStr = matchStr.replace(/(?=\*\-)/g, " ");
//     let conStr = matchStr.replace(/(?=\+|\-|\*|\/)/g, " ");
//     conStr = conStr.replace(/\*\s\-/g, "*-");
//     conStr = conStr.replace(/\*\s\+/g, "*+");
//     conStr = conStr.replace(/\+\s\*/g, "+");
//     conStr = conStr.replace(/\-\s\*/g, "-");
//     console.log(conStr, "divSpace");
//     //conStr = conStr.replace(/\*\-/, "-");

//     //console.log(conStr, "divvvv1StrAfterSpaceAdded");
//     //split the string  with space "4 *6 +7 -4/2"=["4, *6 ,+7, -4 /2"]
//     let array = conStr.trim().split(" ");
//     console.log(array, "divvvv2array");

//     //   let furCheck = matchStr.replace(/(?=\+|\-|\*|\/|\.)/g, " ");
//     //   let operators = ["*", "-", "+", "/", "."];
//     //   let furCheckArr= furCheck.split(" ");
//     //  let boolVal = furCheck.some((item) => operators.includes(item) )

//     //iterate through the array of numbers and signs
//     //get the current element and its sign
//     for (let index = 0; index < array.length; index++) {
//       var currentEle = array[index];
//       var currEleSign = "";
//       if (
//         currentEle.startsWith("*") ||
//         currentEle.startsWith("/") ||
//         currentEle.startsWith("+") ||
//         currentEle.startsWith("-")
//       ) {
//         currEleSign = currentEle.charAt(0);
//         currentEle = currentEle.slice(1);
//       }
//       //get the next element,divide the current element by the next element
//       //puts the sign of the current element in front of the answer
//       //removes the current and next element from array if division is successful
//       if (index != array.length - 1) {
//         let nextEle = array[index + 1];

//         if (nextEle.startsWith("/")) {
//           didDivision = true;
//           let nextEleSlice = nextEle.slice(1);
//           let divValue = Number(currentEle) / Number(nextEleSlice);
//           array.splice(index, 2, currEleSign + divValue.toString());
//           console.log(array, "divArrayAfterDiv");
//           workDetailsMessage += `${currEleSign}${currentEle}/${nextEleSlice} = ${
//             currEleSign + divValue.toString()
//           }<br>`;
//         }
//       }
//     }

//     //console.log(array, "divArray");
//     let message = `<br>Division successfully concluded,now proceed to the next operation which should be multiplication.<br>Is multiplication sign present?<br>`;
//     workDetailsMessage =
//       workDetailsMessage +
//       `${stringVar} now simplifys to ------> ${array.join(" ")}${message}<br>`;
//     workDetailsMessage =
//       didDivision === false
//         ? `division sign is absent on  ${stringVar}<br> The next operation should be multiplication.Check whether multiplication sign is present.<br>`
//         : `Division sign is present, so perform division on ${stringVar}:<br>  ${workDetailsMessage}`;
//     resultArr = [array, workDetailsMessage, errorMessage];
//     //console.log(resultArr[0], resultArr[1], resultArr[2], "divReturn");
//     return resultArr;
//   }
//   //console.log("runing4");
//   errorMessage += `error:${stringVar} not processed: Reason:Division operation failed, input does not conform with format,
//   Please ensure that input contains only numbers and signs and does not contain letters `;
//   resultArr = ["", "", errorMessage];
//   return resultArr;
// }

function handleSignReplacement(str) {
  str = str.replace(/\-\-/, "+");
  str = str.replace(/\+\-/, "-");
  str = str.replace(/\*\-/, "-");
  return str;
}

//divide and multiplr -7/4+43(4-7)+5*11
function multiplyAndDivide(stringVar) {
  //"+75h+9+698.78-5"
  stringVar = stringVar.replace(/\s/g, "");
  let reg3 = /^([+-]?\d*\+?\/?\*?\.?\-?\s?)+(\d*)$/; //^(\d+[\+\/\*\.\- \(\)]{1})+\d+$/;
  let matchValue = stringVar.match(reg3);
  console.log(stringVar, "divvvvStr");
  let errorMessage = "";
  let workDetailsMessage = "";
  let resultArr = [];
  let didDivision = false;
  let didMultiplication = false;

  if (matchValue) {
    //console.log("runing Division");
    let matchStr = matchValue[0];
    //put space between number and sign "4*6+7-4"="4 *6 +7 -4"
    let conStr = matchStr.replace(/(?=\+|\-|\*|\/)/g, " ");
    conStr = conStr.replace(/\*\s\-/g, "*-");
    conStr = conStr.replace(/\*\s\+/g, "*+");
    conStr = conStr.replace(/\+\s\*/g, "+");
    conStr = conStr.replace(/\-\s\*/g, "-");
    conStr = conStr.replace(/\/\s\-/g, "/-");

    console.log(conStr, "divSpace");

    //split the string  with space "4 *6 +7 -4/2"=["4, *6 ,+7, -4 /2"]
    //"4*2*3*4/2*2/1"
    let array = conStr.trim().split(" ");
    console.log(array, "divvvv2array");
    let index = 0;
    //continues to run untill all the * and have been evaluated
    while (
      array.some((item) => item.startsWith("*")) ||
      array.some((item) => item.startsWith("/"))
    ) {
      //when you get to the end of the array, start from the beginning again as long as * and / are present
      if (index > array.length - 2) {
        index = 0;
      }

      let currentEle = array[index];

      let nextElement = array[index + 1];
      //Carry out multiplication
      if (nextElement.startsWith("*")) {
        didMultiplication = true;
        //remove * and / before multiplication if they are present
        if (currentEle.charAt(0) === "*" || currentEle.charAt(0) === "/") {
          let currEleSign = currentEle.charAt(0);
          //currentEle = currentEle.slice(1);
          if (currEleSign === "/") {
            index += 1;
            continue;
          }

          let divValue =
            Number(currentEle.slice(1)) * Number(nextElement.slice(1));
          console.log(currentEle, nextElement.slice(1), "7&&&&");
          divValue = divValue.toString();
          divValue = handleSignReplacement(divValue);
          divValue = currEleSign + divValue;
          console.log(divValue, "ssddd__");
          array.splice(index, 2, divValue);
          console.log(array, "divArrayAfterMulti");
          workDetailsMessage += `${currentEle.slice(1)}*${nextElement.slice(
            1
          )} = ${divValue.replace(/\*|\//, "")}<br>`;
        } else {
          let divValue = Number(currentEle) * Number(nextElement.slice(1));
          divValue = divValue.toString();
          divValue = handleSignReplacement(divValue);
          array.splice(index, 2, divValue);
          console.log(array, "divArrayAfterMulti2");
          workDetailsMessage += `${currentEle}*${nextElement.slice(
            1
          )} = ${divValue.toString()}<br>`;
        }
      } else if (nextElement.startsWith("/")) {
        //carry out division, also remove the * and / sign if present
        didDivision = true;
        if (currentEle.charAt(0) === "*" || currentEle.charAt(0) === "/") {
          let currEleSign = currentEle.charAt(0);
          //currentEle = currentEle.slice(1);

          let divValue =
            Number(currentEle.slice(1)) / Number(nextElement.slice(1));
          console.log(currentEle, nextElement.slice(1), "7&&&&");
          divValue = divValue.toString();
          divValue = handleSignReplacement(divValue);
          divValue = currEleSign + divValue;
          console.log(divValue, "ssddd__");
          array.splice(index, 2, divValue);
          console.log(array, "divArrayAfterDivi2");
          workDetailsMessage += `${currentEle.slice(1)}/${nextElement.slice(
            1
          )} = ${divValue.replace(/\*|\//, "")}<br>`;
        } else {
          let divValue = Number(currentEle) / Number(nextElement.slice(1));
          divValue = divValue.toString();
          divValue = handleSignReplacement(divValue);
          array.splice(index, 2, divValue);
          console.log(array, "divArrayAfterDivi2");
          workDetailsMessage += `${currentEle}/${nextElement.slice(
            1
          )} = ${divValue.toString()}<br>`;
        }
      }
      index += 1;
    }
    console.log(array, "divArrayMain");
    //ensure that all numbers have a sign before them
    let newArray = array.map((item) =>
      item.startsWith("+") || item.startsWith("-") ? item : "+" + item
    );
    //let bothMessage
    //let message = `<br>Division successfully concluded,now proceed to the next operation which should be multiplication.<br>Is multiplication sign present?<br>`;
    workDetailsMessage =
      workDetailsMessage +
      `${stringVar} now simplifys to ------> ${newArray.join(" ")}<br>`;

    if (didDivision === true && didMultiplication === true) {
      workDetailsMessage = `Both Division and Multiplication signs are present on ${stringVar}. <br>These  two  operations have equal rank. They can be handled in any order .<br>
        Evaluate them from left to right before touching addition or subtraction.<br>  ${workDetailsMessage} Division or Multiplication  sucessfully handled.<br>
        Now proceed to the next operation which should be Addition or Subtraction.<br> Are there Addition or Subtraction signs?<br> `;
    } else if (didDivision === true && didMultiplication === false) {
      workDetailsMessage = `Division  sign is present on ${stringVar} but no multiplication sign<br> Handle the Division before attempting any addition or subtraction, work from left to right.<br>  ${workDetailsMessage} 
        Division  sucessfully handled.<br>Now proceed to the next operation which should be Addition or Subtraction.<br> Are there Addition or Subtraction signs?<br> `;
    } else if (didDivision === false && didMultiplication === true) {
      workDetailsMessage = `Multiplication  sign is present on ${stringVar} but no division.<br>Handle the multiplication before attempting any addition or subtraction, work from left to right.<br>  ${workDetailsMessage} 
         Multiplication  sucessfully handled.<br>Now proceed to the next operation which should be Addition or Subtraction.<br> Are there Addition or Subtraction signs?<br> `;
    } else {
      workDetailsMessage = `Neither Division nor  Multiplication sign is present on ${stringVar}<br> now proceed to the next operation which should be Addition or Subtraction.<br> Are there Addition or Subtraction signs?<br> `;
    }
    // workDetailsMessage =
    //   didDivision === false
    //     ? `division sign is absent on  ${stringVar}<br> The next operation should be multiplication.Check whether multiplication sign is present.<br>`
    //     : `Division sign is present, so perform division on ${stringVar}:<br>  ${workDetailsMessage}`;
    resultArr = [newArray, workDetailsMessage, errorMessage];
    //console.log(resultArr[0], resultArr[1], resultArr[2], "divReturn");
    return resultArr;
  }

  //console.log("runing4");
  errorMessage += `Error level-2:${stringVar} not solved:Reason? Division and multioperation failed, input does not conform with format,
    Please ensure that input contains only numbers and signs and does not contain letters `;
  resultArr = ["", "", errorMessage];
  return resultArr;
}

//do multiplication
//iterate through the array returned by division eg["-5", "+4", "*6"]
//gets the current element and its sign
//gets the next element and its sign
//multiply the current element by the next element
//repeats the multiplication if multiplication sign is still present

// function multOnly3(array) {
//   //iterate through the array returned by division eg["-5", "+4", "*6"]
//   //console.log("runingMultiplication");
//   let errorMessage = "";
//   let workDetailsMessage = "";
//   let resultArr = [];
//   let arrayCopy = [...array];
//   let didMulti = false;
//   let count = 0;
//   //while there is still something to multiply
//   while (array.some((item) => item.startsWith("*"))) {
//     //if you reach the end start from the beginner of the array again
//     //console.log("runningMultiplication");
//     if (count === array.length) {
//       count = 0;
//     }

//     //gets the current element and its sign
//     var currentEle = array[count];
//     //console.log(currentEle, "currentEle");
//     let currentEleSign = "";
//     if (
//       currentEle.startsWith("*") ||
//       currentEle.startsWith("/") ||
//       currentEle.startsWith("-") ||
//       currentEle.startsWith("+")
//     ) {
//       currentEleSign += currentEle.charAt(0);
//       console.log(currentEleSign, "currentEleSign");
//       currentEle = currentEle.slice(1);
//     }
//     //gets the next element and its sign
//     if (count != array.length - 1) {
//       let nextEle = array[count + 1];
//       //multiply the current element by the next element
//       if (nextEle.startsWith("*")) {
//         didMulti = true;
//         let nextEleSlice = nextEle.slice(1);
//         let divValue = Number(currentEle) * Number(nextEleSlice);
//         divValue = currentEleSign + divValue.toString();

//         divValue = divValue.replace(/\-\-/, "+");
//         divValue = divValue.replace(/\+\-/, "-");
//         divValue = divValue.replace(/\*\-/, "-");

//         //console.log(divValue, "vvvvvvll");

//         array.splice(count, 2, divValue);
//         //console.log(array, "multiArray1");
//         //record how the multiplication was done
//         workDetailsMessage += `${currentEleSign}${currentEle} * ${nextEleSlice} --------> ${divValue.toString()}<br>`;
//       }
//     }
//     count += 1;
//   }

//   let message = `Multiplication successfully concluded,now proceed to the next operation which should be addtion.<br>Is addittion sign present?<br>`;
//   //repeats the multiplication if multiplication sign is still present

//   //assemble records of all work done
//   workDetailsMessage = `Multiplication sign is present. Perform Multiplication on ${arrayCopy.join(
//     " "
//   )}:<br>${workDetailsMessage}<br>${arrayCopy.join(
//     " "
//   )} simplifys to -------->  ${array.join(" ")}<br>${message}<br>`;
//   //
//   workDetailsMessage =
//     didMulti === false
//       ? `Multiplication sign/operator is absent.<br> The next operation should be addition.<br>is addition sign present?<br>`
//       : workDetailsMessage;
//   //console.log(array, "multiArray2");
//   resultArr = [array, workDetailsMessage, errorMessage];
//   return resultArr;
// }

//do addition and  subtraction
function addAndSub(array) {
  //console.log("running additionAndSubtraction");
  let workDetailsMessage = "";
  let sumOfArrOfMinus;
  let sumOfArrOfPlus;
  let newAddOrSubResult;

  //ensure that all numbers have a sign before them
  let arrayOfPlusAndMinusStr = array.map((item) =>
    item.startsWith("+") || item.startsWith("-") ? item : "+" + item
  );

  //array of only positive numbers str
  let arrayOfPlusStr = arrayOfPlusAndMinusStr.filter((item) =>
    item.startsWith("+")
  );
  // console.log(arrayOfPlusStr.length, "%%%@+++");
  //array of only negative numbers str
  let arrayOfMinusStr = arrayOfPlusAndMinusStr.filter((item) =>
    item.startsWith("-")
  );

  //check whether addition sign is present
  let additionIsPresent = arrayOfPlusStr.length === 0 ? false : true;

  //check whether subtraction sign is present
  let subtractionIsPresent = arrayOfMinusStr.length === 0 ? false : true;

  let arrayOfPlusAndMinusNum = arrayOfPlusAndMinusStr.map((item) =>
    Number(item)
  );

  // workDetailsMessage += arrayOfPlusAndMinusNum.join(" ")
  //add all numbers together
  let totalResult = arrayOfPlusAndMinusNum.reduce(
    (acc, currItem) => acc + currItem
  );

  newAddOrSubResult = isFloat(totalResult)
    ? totalResult.toFixed(2)
    : totalResult;
  newAddOrSubResult = Number(newAddOrSubResult);
  workDetailsMessage += `${arrayOfPlusAndMinusStr.join(
    " "
  )} -------->  ${newAddOrSubResult}<br>`;

  if (additionIsPresent === true && subtractionIsPresent === true) {
    workDetailsMessage = `Addition and Subtraction signs are present on ${array.join(
      " "
    )}.<br> These  two  operations have equal rank. They can be handled in any order.<br>
      Evaluate them from left to right<br>  ${workDetailsMessage} Addition or subtraction  sucessfully handled.
      <br>Final Answer = ${newAddOrSubResult}`;
  } else if (additionIsPresent === true && subtractionIsPresent === false) {
    workDetailsMessage = `Addition  sign is present on ${array.join(
      " "
    )} but no subtraction sign.<br> Handle the Addition, work from left to right.<br>${workDetailsMessage} Addition  sucessfully handled<br>
      Final Answer = ${newAddOrSubResult}`;
  } else if (additionIsPresent === false && subtractionIsPresent === true) {
    workDetailsMessage = `Subtraction  sign is present on ${array.join(
      " "
    )} but no Addition sign.<br> Handle the subtraction , work from left to right.<br>  ${workDetailsMessage} Subtraction  sucessfully handled.<br>
      Final Answer = ${newAddOrSubResult}`;
  }

  //add all numbers together

  return [newAddOrSubResult, workDetailsMessage];
}

function isFloat(num) {
  return typeof num === "number" && !Number.isInteger(num);
}

//bring all together
function bordMass(stringVar) {
  //do division first
  //console.log(stringVar, "sssssssvardiv");
  let result;
  result = clearExponents(stringVar);
  result = multiplyAndDivide(result[0]);

  //do addition or subtraction
  let operationType = "+";
  let finalResult = addAndSub(result[0], operationType);

  return finalResult[0];
}

//right-trim string:remove specified letter from end of string
function trimString(str, letter) {
  let counter = 0;
  while (str.endsWith(letter)) {
    str = str.substring(0, str.length - 1);
    counter += 1;
  }
  return [str.length, str, counter];
}

//check for unwanted operator at the end of a str and remove it.
function trimOPeratorFromRight(str, arrayOfOperetors) {
  for (let index = 0; index < arrayOfOperetors.length; index++) {
    let letter = arrayOfOperetors[index];
    str = trimString(str, letter)[1];
  }
  return str;
}

function main(userInput) {
  //userInput = formateStrExponent(userInput);
  let answerSummary = `<p class="captions">Answer Summary:</p>`;
  let answerDetails = `<p class="captions">Answer Details:</p>`;
  let addOrSubResult = [];
  let newAddOrSubResult;
  let classStart = `<div class="detail-item">`;
  let classEnd = `</div>`;
  console.log(userInput, "(&&&mainINPUTTTTT");
  //let userInput = "6+(4+2)+(2+6)3-4/2*6*2/8+9/3;8+((4+2)(2+3)"; //inputEle.value;"6+(4+2)+(2+6)3+4/2*6*2/8+9/3;8+(4+2)(2+3)"

  let problemArray = userInput.split(";");
  let itemArrayLen = problemArray.length;
  for (let index = 0; index < itemArrayLen; index++) {
    let itemStr = problemArray[index];
    answerDetails += classStart;
    //clear brackets
    let braValue = bracketEvaluator(itemStr, mesagebra); //"(2+4)8+(-5*4)4-(-7-3)"),"(2+4)8+(-)4-(+7-3)"
    if (braValue[2].indexOf("Error") > -1) {
      //bracket clearance operation failed
      let errorMesage = braValue[2];
      // answerSummary +=
      //   answerSummary +
      //   `(${
      //     index + 1
      //   }) ${itemStr} problem not solved see below for error details`;

      answerSummary += `<div class="summary-item">(${
        index + 1
      }) ${itemStr}= Problem not solved see below for error details
        </div>`;

      answerDetails += `<p class="captions"><span class="que-num">Question ${
        index + 1
      }.</span> ${itemStr}</p><br>${errorMesage}`;

      answerDetails += `${classEnd}`;

      // answerDetails += `(${index + 1}) ${itemStr}<br> ${errorMesage}`;

      continue;
    } else {
      //answerSummary += answerSummary + `${index + 1} ${itemStr}= ${result}`;
      answerDetails += `<p class="captions"><span class="que-num">Question ${
        index + 1
      }.</span> ${itemStr}</p><br> ${braValue[1]}`;
    }
    //handle square bracket
    let squareBraResult = squareBracketsHandler(braValue[0]);

    if (squareBraResult[2].indexOf("Error") > -1) {
      //bracket clearance operation failed
      let errorMesage = squareBraResult[2].replace(
        /.*/,
        `Bracket clearance operation failed. Square brackets needs pair in ${itemStr}.
            Please check your input and ensure that all brackets are present in pairs then try again`
      );

      answerSummary = "";
      answerSummary += `<div class="summary-item">(${
        index + 1
      }) ${itemStr}= Problem not solved see below for error details
        </div>`;
      answerDetails = "";
      answerDetails += `<p class="captions"><span class="que-num">Question ${
        index + 1
      }.</span> ${itemStr}</p><br>${errorMesage}`;

      answerDetails += `${classEnd}`;

      // answerDetails += `(${index + 1}) ${itemStr}<br> ${errorMesage}`;

      continue;
    } else {
      //answerSummary += answerSummary + `${index + 1} ${itemStr}= ${result}`;
      let details = squareBraResult[1].replace(/\(/g, "[");
      details = details.replace(/\)/g, "]");
      answerDetails += `${details}`;
    }

    // evaluate exponent

    let exponentInput = squareBraResult[0];
    let exponentResult = clearExponents(exponentInput);
    answerDetails += exponentResult[1];

    //perform division
    let divisionAndMultiInput = exponentResult[0];
    let divisionAndMultiResult = multiplyAndDivide(divisionAndMultiInput);
    //let divisionResult = DividNun(divisionInput);
    if (divisionAndMultiResult[2].indexOf("Error") > -1) {
      let errorMesage = divisionAndMultiResult[2];
      answerSummary += `<div class="summary-item">(${
        index + 1
      }) ${itemStr}= Problem not solved see below for error details
        </div>`;

      answerDetails += `<p class="captions"><span class="que-num">Question ${
        index + 1
      }.</span> ${itemStr}</p><br>${errorMesage}`;

      answerDetails += `${classEnd}`;

      continue;
    } else {
      answerDetails += divisionAndMultiResult[1];
    }

    //perform additionor subtraction
    let addOrSubArrInput = divisionAndMultiResult[0];
    addOrSubResult = addAndSub(addOrSubArrInput);

    // newAddOrSubResult = Number(newAddOrSubResult);
    answerDetails += `${addOrSubResult[1]}${classEnd}`;

    //replace ) with ) and color it with pink
    itemStr = colorReplaceBra(
      itemStr,
      replaceSignRegexRightParent,
      "pink",
      ")"
    );

    //replace ( with (  and color it with pink
    itemStr = colorReplaceBra(itemStr, replaceSignRegexLeftParent, "pink", "(");

    answerSummary += `<div class="summary-item">(${index + 1}) ${itemStr}= ${
      addOrSubResult[0]
    }</div>`;
  }
  //h1Ele.innerHTML = `${answerSummary}<br>${answerDetails}`;
  answerSummary = `<div class="summary-all">${answerSummary}</div>`;

  //replace / with ./. and color it with red
  answerDetails = colorStrWithReplace(
    answerDetails,
    replaceSignRegex,
    "red",
    "fa-divide"
  );

  //replace * with x and color it with red
  answerDetails = colorStrWithReplace(
    answerDetails,
    replaceSignRegexTimes,
    "red",
    "fa-times"
  );

  answerSummary = answerSummary.replace(
    replaceSignRegex,
    ' <i class="fas fa-divide" style="font-size:19px; color:red" ></i> '
  );
  //replace / with ./. and color it with red
  answerSummary = colorStrWithReplace(
    answerSummary,
    replaceSignRegex,
    "red",
    "fa-divide"
  );

  // answerSummary = answerSummary.replace(
  //   replaceSignRegexTimes,
  //   ' <i class="fas fa-times" style="font-size:19px; color:red" ></i> '
  // );

  //replace * with x and color it with red
  answerSummary = colorStrWithReplace(
    answerSummary,
    replaceSignRegexTimes,
    "red",
    "fa-times"
  );

  // answerSummary = answerSummary.replace(
  //   replaceSignRegexPlus,
  //   ` <i class="fas fa-plus" style="font-size:19px; color:blue" ></i> `
  // );

  //replace + with + and color it with blue
  answerSummary = colorStrWithReplace(
    answerSummary,
    replaceSignRegexPlus,
    "blue",
    "fa-plus"
  );

  // answerSummary = answerSummary.replace(
  //   replaceSignRegexMinus,
  //   ` <i class="fas fa-minus" style="font-size:19px; color:blue" ></i> `
  // );

  //replace * with * and color it with blue
  answerSummary = colorStrWithReplace(
    answerSummary,
    replaceSignRegexMinus,
    "blue",
    "fa-minus"
  );

  // answerDetails = answerDetails.replace(
  //   replaceSignRegexPlus,
  //   ` <i class="fas fa-plus" style="font-size:19px; color:blue" ></i> `
  // );

  //replace + with + and color it with blue
  answerDetails = colorStrWithReplace(
    answerDetails,
    replaceSignRegexPlus,
    "blue",
    "fa-plus"
  );

  // answerDetails = answerDetails.replace(
  //   replaceSignRegexMinus,
  //   ` <i class="fas fa-minus" style="font-size:19px; color:blue" ></i> `
  // );

  //replace - with - and color it with blue
  answerDetails = colorStrWithReplace(
    answerDetails,
    replaceSignRegexMinus,
    "blue",
    "fa-minus"
  );

  // answerDetails = answerDetails.replace(
  //   replaceSignRegexLeftParent,
  //   `<span  style="font-size:30px; color:pink" >(</span>`
  // );

  //replace (  with (  and color it with pink
  answerDetails = colorReplaceBra(
    answerDetails,
    replaceSignRegexLeftParent,
    "pink",
    "("
  );

  // answerDetails = answerDetails.replace(
  //   replaceSignRegexRightParent,
  //   `<span  style="font-size:30px; color:pink" >)</span>`
  // );

  //replace )  with )  and color it with pink
  answerDetails = colorReplaceBra(
    answerDetails,
    replaceSignRegexRightParent,
    "pink",
    ")"
  );

  //replace  [    with [    and color it with pink
  answerSummary = colorReplaceBra(
    answerSummary,
    replaceSignRegexLeftBracket,
    "pink",
    "["
  );

  // answerDetails = answerDetails.replace(
  //   replaceSignRegexRightBracket,
  //   `<span  style="font-size:30px; color:pink" >]</span>`
  // );
  //replace  ]  with ]  and color it with pink
  answerDetails = colorReplaceBra(
    answerDetails,
    replaceSignRegexRightBracket,
    "pink",
    "]"
  );

  return [addOrSubResult[0], answerDetails, answerSummary];
}

//replace * with x and color it with red
function colorStrWithReplace(str, regexPattern, color, styleClass) {
  const strUserTopic =
    selectEleTopic.options[selectEleTopic.selectedIndex].value;
  if (strUserTopic === "bodmas") {
    str = str.replace(
      regexPattern,
      ` <i class="fas ${styleClass}" style="font-size:19px; color:${color}" ></i> `
    );
    return str;
  }

  return str;
}

function colorReplaceBra(str, regexPattern, color, sign) {
  const strUserTopic =
    selectEleTopic.options[selectEleTopic.selectedIndex].value;

  if (strUserTopic === "bodmas") {
    str = str.replace(
      regexPattern,
      `<span  style="font-size:30px; color:${color}" >${sign}</span>`
    );
    return str;
  }
  return str;
}

export {
  generateQuestions,
  main,
  replaceRegex,
  colorStrWithReplace,
  colorReplaceBra,
};
