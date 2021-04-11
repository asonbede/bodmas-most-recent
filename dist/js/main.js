import {
  solArcJonBon1,
  transformQuestionArray,
} from "./aws-files/sol-arch-asso.js";
import { jsQuestionArray } from "./web-dev/javascript-tutor.js";

import {
  generateQuestions,
  main,
  replaceRegex,
  colorStrWithReplace,
  colorReplaceBra,
} from "./math-files/bodmas.js";

let skippedArray = [];
let skippedQuestionNumber = [];
//get html element references

//buttons references
const showWorkingButton = document.querySelector("#show-working");
const quickAnswerButton = document.querySelector("#quick-answer");
const cleanBorad = document.querySelector("#clean-board");
const searchInput = document.querySelector("#search-input");

const newQuestion = document.querySelector("#new-question");

//question option div container
const instruction = document.querySelector(".instructions");
const questionOption = document.querySelector("#question-options");

//div references to show score and details
const scorePara = document.querySelector("#show-score");
const calControl = document.querySelector("#show-score.cal-control");
const testIndicator = document.querySelector("#test-indicator");

const showDetailsPara = document.querySelector("#show-details");
const buttonQue = document.querySelector("#buttons");

//number input reference
const numberInput = document.querySelector("#number-input");

//span refences to show time
const timeCheck = document.querySelector("#time-check");
//menu burger reference
const menuBtn = document.querySelector(".menu-btn");

const calModeBtn = document.querySelector("#cal-mode");

const controlDive = document.querySelector("#control");
let calcInput = document.querySelector("#calc-input"); //cal-control
let calcInputCalControl = document.querySelector("#calc-input.cal-control"); //cal-control

const allControlLink = document.querySelectorAll("#control a");
// let selectEle = document.querySelector("#bodmss-level");
// let strUser = selectEle.options[selectEle.selectedIndex].value;
//select topic
let selectEleTopic = document.querySelector("#select-topic");
console.log(selectEleTopic);
let strUserTopic = selectEleTopic.options[selectEleTopic.selectedIndex].value;

//add classes to menu-btn elements and the control elements
let menuBtnIsOpen = false;
menuBtn.addEventListener("click", toggleMenuBtn);
function toggleMenuBtn() {
  if (!menuBtnIsOpen) {
    allControlLink.forEach((link) => link.classList.add("open-control")); //  visibility: visible;
    controlDive.classList.add("open-control");
    menuBtn.classList.add("open-menubtn");
    menuBtnIsOpen = true;
  } else {
    allControlLink.forEach((link) => link.classList.remove("open-control"));
    menuBtn.classList.remove("open-menubtn");
    controlDive.classList.remove("open-control");
    menuBtnIsOpen = false;
  }
}

//add classes that enables change of interface from quize mode to calculator mode
calModeBtn.addEventListener("click", addChangeInterfaceClasses);
let isInCalMode = true;
function addChangeInterfaceClasses() {
  if (isInCalMode) {
    allControlLink.forEach((item) => item.classList.add("cal-control"));
    // scorePara.classList.add("cal-control");
    // showDetailsPara.classList.add("cal-control");
    buttonQue.classList.add("cal-control");
    menuBtn.classList.add("cal-control");
    controlDive.classList.add("cal-control");
    calcInput.classList.add("cal-control");
    cleanBorad.classList.add("cal-control");

    this.textContent = "Go To BODMAS Qiuze";

    isInCalMode = false;
  } else {
    allControlLink.forEach((item) => item.classList.remove("cal-control"));

    buttonQue.classList.remove("cal-control");
    menuBtn.classList.remove("cal-control");
    controlDive.classList.remove("cal-control");
    this.textContent = "Go To BODMAS Cal.";
    calcInput.classList.remove("cal-control");
    cleanBorad.classList.remove("cal-control");

    isInCalMode = true;
  }
}

let setInterVar;
let minuteTime = 0;
let secondsTime = 0;
let bodmasQuestionsArray = [];
//let mesagebra = `Brackets are present, so evaluate the contents of the brackets first.<br>`;
//returns the number of milliseconds since midnight jan 1,1970
let initialTime = getMsTime();
//number of questions
let questionNumber = Number(numberInput.value);
//publishes questions and options

testIndicator.value = 0;
showQuestions();
attachEventListenerToRadioButton();
selectEleTopic.addEventListener("change", function () {
  //countWallCollion = 0;
  strUserTopic = selectEleTopic.options[selectEleTopic.selectedIndex].value;
  console.log(strUserTopic, "RERRERRRRR11");
  if (
    strUserTopic === "bodmas" ||
    strUserTopic === "solution-architect-associate" ||
    strUserTopic === "javascript"
  ) {
    console.log(strUserTopic, "RERRERRRRR22222");
    testIndicator.value = 0;
    showQuestions();
    attachEventListenerToRadioButton();
  }
});

//display questions
function showQuestions() {
  let arrOfObj;
  //array of objects
  // solution-architect-associate
  strUserTopic = selectEleTopic.options[selectEleTopic.selectedIndex].value;
  console.log(strUserTopic, "RERRERRRRR11");
  if (strUserTopic === "bodmas") {
    questionOption.innerHTML = "";
    console.log(strUserTopic, "RERRERRRRR22222");
    arrOfObj = generateQuestions();
  } else if (strUserTopic === "solution-architect-associate") {
    const searchInputValue = searchInput.value;
    console.log({ searchInputValue });
    questionOption.innerHTML = "";
    questionNumber = Number(numberInput.value);
    arrOfObj = transformQuestionArray(
      solArcJonBon1,
      questionNumber,
      searchInputValue
    );
  } else if (strUserTopic === "javascript") {
    const searchInputValue = searchInput.value;
    console.log({ searchInputValue });
    questionOption.innerHTML = "";
    questionNumber = Number(numberInput.value);
    arrOfObj = transformQuestionArray(
      jsQuestionArray,
      questionNumber,
      searchInputValue
    );
  }

  //get all questions
  bodmasQuestionsArray = arrOfObj
    ? arrOfObj.map((item) => Object.keys(item)[0])
    : [];
  //iterate through array of objects
  for (let indexQue = 0; indexQue < arrOfObj.length; indexQue++) {
    //get a question and its option item
    let questionOptionItemObject = arrOfObj[indexQue];
    //get only the question
    let questionItem = Object.keys(questionOptionItemObject)[0];

    //get only the options
    let optionsArray = questionOptionItemObject[questionItem];

    //replace / with / and color it with red
    questionItem = colorStrWithReplace(
      questionItem,
      replaceRegex.replaceSignRegex,
      "red",
      "fa-divide"
    );

    //replace * with x and color it with red
    questionItem = colorStrWithReplace(
      questionItem,
      replaceRegex.replaceSignRegexTimes,
      "red",
      "fa-times"
    );

    //replace + with + and color it with red
    questionItem = colorStrWithReplace(
      questionItem,
      replaceRegex.replaceSignRegexPlus,
      "blue",
      "fa-plus"
    );

    //replace - with - and color it with blue
    questionItem = colorStrWithReplace(
      questionItem,
      replaceRegex.replaceSignRegexMinus,
      "blue",
      "fa-minus"
    );

    //replace ( with (  and color it with pink
    questionItem = colorReplaceBra(
      questionItem,
      replaceRegex.replaceSignRegexLeftParent,
      "pink",
      "("
    );

    //replace )  with ) and color it with pink
    questionItem = colorReplaceBra(
      questionItem,
      replaceRegex.replaceSignRegexRightParent,
      "pink",
      ")"
    );

    // questionItem = questionItem.replace(
    //   replaceSignRegexLeftBracket,
    //   `<span  style="font-size:30px; color:pink" >[</span>`
    // );

    //replace [   with [ and color it with pink
    questionItem = colorReplaceBra(
      questionItem,
      replaceRegex.replaceSignRegexLeftBracket,
      "pink",
      "["
    );

    //replaceSignRegexRightParent;

    //replace ]   with ] and color it with red
    questionItem = questionItem.replace(
      replaceRegex.replaceSignRegexRightBracket,
      `<span  style="font-size:30px; color:pink" >]</span>`
    );

    //option letters
    const optLetters = ["A", "B", "C", "D", "E"];
    //question Number
    let quesNumber = `Question ${indexQue + 1}.`;
    //number the question item
    questionItem = `${questionItem}`;
    //create a paragraph and display the question on the page
    let divElem = createDiv(questionOption, questionItem, quesNumber);

    //shuffle the options
    randomizeArray(optionsArray);
    //iterate through the options create radio buttons and display them
    for (let index = 0; index < optionsArray.length; index++) {
      // const element = optionsArray[index];
      let name = `optioname${indexQue}`;
      let value = optionsArray[index];
      let idd = `question${index}:${indexQue}`;
      let optionText = `${optLetters[index]}. ${value}`;
      createRadioButton(name, value, idd, optionText, divElem);
    }
  }
}
//create div and append it to  questionOption
function createDiv(parent, questionText, numText) {
  let divEle = document.createElement("div");
  divEle.setAttribute("class", "question-and-alloptions");

  parent.appendChild(divEle);
  createQuePara(questionText, divEle, numText);
  return divEle;
}
//creates a paragraph, give it a class and append it to the document
function createQuePara(questionText, parent, numText) {
  //create paragraph element,text of the paragraph and set the class
  let paraEle = document.createElement("p");
  let spanEle = document.createElement("span");
  spanEle.setAttribute("class", "que-num");

  let nodeNumText = document.createTextNode(numText);
  spanEle.appendChild(nodeNumText);
  paraEle.appendChild(spanEle);
  paraEle.setAttribute("class", "question");
  let nodeTextQue = document.createTextNode(questionText);
  //paraEle.appendChild(nodeTextQue);
  paraEle.innerHTML += questionText;
  parent.appendChild(paraEle);
}

//creative div, create radio buttons and append them to the div
function createRadioButton(name, value, idd, optionText, parent) {
  let divEle = document.createElement("div");
  divEle.setAttribute("class", "options");
  parent.appendChild(divEle);

  let inputRadioEle = document.createElement("input");
  inputRadioEle.setAttribute("type", "radio");
  inputRadioEle.setAttribute("class", "radio-button");
  inputRadioEle.setAttribute("name", name);
  inputRadioEle.setAttribute("value", value);
  inputRadioEle.setAttribute("id", idd);
  let inputLabelEle = document.createElement("label");
  inputLabelEle.setAttribute("for", idd);

  let nodeText = document.createTextNode(optionText);
  inputLabelEle.appendChild(nodeText);
  let spanEle = document.createElement("span");
  // italiceEle.setAttribute("id", "mark");

  divEle.appendChild(inputRadioEle);

  divEle.appendChild(inputLabelEle);
  divEle.appendChild(spanEle);
}

//javascript implementation of Fisher-Yates shufflew Algorithm
function randomizeArray(array) {
  for (let index = array.length - 1; index > 0; index--) {
    const ran = Math.floor(Math.random() * index);
    const temp = array[index];
    array[index] = array[ran];
    array[ran] = temp;
  }
}
//mark the script and score it
function markScript() {
  let score = 0;
  let allRadioButtons = document.querySelectorAll(".radio-button");
  let arrLen = allRadioButtons.length;
  for (let index = 0; index < arrLen; index++) {
    const radioEle = allRadioButtons[index];

    let radioEleId = radioEle.id;
    let radioParentEle = radioEle.parentNode;
    let questionNumber = radioEleId.split(":");
    questionNumber = Number(questionNumber[questionNumber.length - 1]);
    console.log(questionNumber, "rrrr");
    let radioEleValue = Number(radioEle.value);
    let questionToBeMark = bodmasQuestionsArray[questionNumber];
    let correctAnswer = Number(main(questionToBeMark)[0]);

    strUserTopic = selectEleTopic.options[selectEleTopic.selectedIndex].value;
    console.log(strUserTopic, "RERRERRRRR11");
    if (strUserTopic === "solution-architect-associate") {
      console.log(strUserTopic, "RERRERRRRR22222");
      correctAnswer = noneBodmasMarker(questionToBeMark, solArcJonBon1);
      correctAnswer = correctAnswer[0];
      radioEleValue = radioEle.value;
    } else if (strUserTopic === "javascript") {
      console.log(strUserTopic, "RERRERRRRR22222");
      correctAnswer = noneBodmasMarker(questionToBeMark, jsQuestionArray);
      correctAnswer = correctAnswer[0];
      radioEleValue = radioEle.value;
    }

    if (radioEle.checked) {
      console.log({ radioEleValue });
      if (correctAnswer === radioEleValue) {
        //console.log(questionNumber, "yyyyy");

        radioParentEle.lastChild.innerHTML = `<i class="fas fa-check"  style="color:green;font-size:20px;margin-left:5px"></i>`;

        score += 1;
      } else {
        console.log(questionNumber, "zzzz");
        radioParentEle.lastChild.innerHTML = `<i class="fas fa-times" style="color:red;font-size:20px;margin-left:5px" ></i>`;
        //console.log(allRadioButtons);
        // findRadioBut(allRadioButtons, correctAnswer);
      }
    } else {
      if (correctAnswer === radioEleValue) {
        radioParentEle.lastChild.innerHTML = `<i class="fas fa-check"  style="color:blue;font-size:20px;margin-left:5px"></i>`;
      } else {
        radioParentEle.lastChild.innerHTML = "";
      }
    }
  }
  let percentScore = ((score / bodmasQuestionsArray.length) * 100).toFixed();
  let timeSpent = timeCheck.textContent;
  let result = `<p id="report-card">Result:</p><br> ${score} out of ${bodmasQuestionsArray.length}<br>${percentScore}%<br>
  Time Spent<br>${timeSpent}`;
  return result;
}

//Mark none badmass questions
function noneBodmasMarker(questionToBeMarked, ArrayOfQuesAndOptions) {
  const questionOptionObj = ArrayOfQuesAndOptions.filter(
    (item) => item.question === questionToBeMarked
  );
  console.log({ questionToBeMarked });
  console.log({ questionOptionObj });
  const correctAlphabet = questionOptionObj[0].correctAnswer;
  console.log({ correctAlphabet });
  const correctAns = questionOptionObj[0].answers[correctAlphabet];
  const explanationValue = questionOptionObj[0].explanation;
  console.log("cccorreet", correctAns);
  return [correctAns, explanationValue];
}

//do correction
function findRadioBut(array, correct) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (Number(element.value) === correct) {
      element.parentNode.lastChild.innerHTML = `<i class="fas fa-check"  style="color:blue;font-size:20px;margin-left:5px"></i>`;
    }
  }
}

//estimate what percentage of radio buttons are checked
function getCheckedRadioButton() {
  const radioButtonEleArray = document.querySelectorAll(`input[type=radio]`);
  const radioButtonEleGroupArray = document.querySelectorAll(
    `input[type=radio][name=optioname0]`
  );

  console.log({ radioButtonEleArray });
  const checkRadioButtonEleArray = document.querySelectorAll(
    `input[type=radio]:checked`
  );
  console.log({ checkRadioButtonEleArray });
  const maxCheckedRadioButtonNumber =
    radioButtonEleArray.length / radioButtonEleGroupArray.length;
  console.log({ maxCheckedRadioButtonNumber });
  const percentageOfCheckedRadioButton =
    (checkRadioButtonEleArray.length / maxCheckedRadioButtonNumber) * 100;
  testIndicator.value = percentageOfCheckedRadioButton;
  console.log("checkNumber", checkRadioButtonEleArray.length);
}

function attachEventListenerToRadioButton(params) {
  const radioButtonEleArray = document.querySelectorAll(`input[type=radio]`);
  for (let index = 0; index < radioButtonEleArray.length; index++) {
    const element = radioButtonEleArray[index];

    if (element) {
      element.onclick = function () {
        getCheckedRadioButton();
      };
    }
  }
}

//get score and display the score
quickAnswerButton.addEventListener("click", function () {
  //scorePara.style.display = "block";
  //console.log("nothing is happing");
  skippedQuestionNumber = [];
  if (setInterVar) {
    clearInterval(setInterVar);
  }
  collectWorkReview();
  if (skippedArray.length > 0) {
    console.log({ skippedArray });
    const comfirmResult = confirm(`You have skipped ${
      skippedArray.length
    } questions, they are: ${skippedQuestionNumber.join(", ")}. 
    If you click ok  your script will be submitted and you will lose the skipped questions marks.
    To discontinue with submission click cancel
  `);
    if (comfirmResult) {
      let score = markScript();
      //scorePara.innerHTML = score;
      if (calControl) {
        calControl.style.display = "none";
      }

      console.log(score, "########@@");

      localStorage.setItem("resultValue", score);
      // console.log(localStorage.getItem("resultValue"), "$$$$%%%@@");

      // window.location.assign("result.html");
      window.open("result.html", "_blank");
    } else {
      return;
    }
  } else {
    let score = markScript();
    //scorePara.innerHTML = score;
    if (calControl) {
      calControl.style.display = "none";
    }

    console.log(score, "########@@");

    localStorage.setItem("resultValue", score);
    // console.log(localStorage.getItem("resultValue"), "$$$$%%%@@");

    // window.location.assign("result.html");
    window.open("result.html", "_blank");
  }
});

//display detail answeer
showWorkingButton.addEventListener("click", function () {
  //const calControl = document.querySelector("#show-score.cal-control");
  if (calControl) {
    calControl.style.display = "none";
  }
  console.log("not working");
  // showDetailsPara.innerHTML = detailsAnswer();//detailValue
  calcInputCalControl = document.querySelector("#calc-input.cal-control"); //cal-control
  // console.log(calcInput, "&&&&&&))---##777777");
  // let details;
  // if (calcInputCalControl) {

  strUserTopic = selectEleTopic.options[selectEleTopic.selectedIndex].value;
  if (calcInputCalControl) {
    localStorage.setItem("detailValue", detailsAnswer());
    localStorage.setItem("manipulateSelectBox", "hide");
    localStorage.setItem("correctValue", "");
    localStorage.setItem("incorrectValue", "");
    localStorage.setItem("skippedValue", "");

    localStorage.setItem("detailValueLength", ""),
      localStorage.setItem("correctValueLength", "");
    localStorage.setItem("incorrectValueLength", "");
    localStorage.setItem("skippedValueLength", "");
  } else {
    const {
      allQuestionString,
      correctQuestionString,
      incorrectQuestionString,
      skippedQuestionString,

      allQuestionLength,
      correctQuestionLength,
      incorrectQuestionLength,
      skippedQuestionLength,
    } = collectWorkReview();

    localStorage.setItem("detailValue", allQuestionString),
      localStorage.setItem("correctValue", correctQuestionString);
    localStorage.setItem("incorrectValue", incorrectQuestionString);
    localStorage.setItem("skippedValue", skippedQuestionString);

    localStorage.setItem("detailValueLength", allQuestionLength),
      localStorage.setItem("correctValueLength", correctQuestionLength);
    localStorage.setItem("incorrectValueLength", incorrectQuestionLength);
    localStorage.setItem("skippedValueLength", skippedQuestionLength);
    localStorage.setItem("manipulateSelectBox", "show");
  }

  // window.location.assign("result.html");
  window.open("details.html", "_blank");

  if (setInterVar) {
    clearInterval(setInterVar);
  }
});

function collectWorkReview(questionKind) {
  let radioEleStr = "";
  let incorrectArray = [];
  let correctArray = [];
  skippedArray = [];
  let allQuestionArray = [];
  let rightOrWrongValue;
  let correctAns;
  skippedQuestionNumber = [];
  for (let index = 0; index < bodmasQuestionsArray.length; index++) {
    const element = bodmasQuestionsArray[index];
    const radioButtonEleArray = document.querySelectorAll(
      `input[name=optioname${index}]`
    );
    const radioButtonValue = document.querySelector(
      `input[name=optioname${index}]:checked`
    );
    strUserTopic = selectEleTopic.options[selectEleTopic.selectedIndex].value;
    if (strUserTopic === "solution-architect-associate") {
      correctAns = noneBodmasMarker(element, solArcJonBon1);
    }
    if (strUserTopic === "javascript") {
      correctAns = noneBodmasMarker(element, jsQuestionArray);
    }

    if (strUserTopic === "bodmas") {
      correctAns = main(element);

      //return `${details[1]}${details[2]}`
    }

    const abc = ["A", "B", "C", "D", "E"];
    for (
      let radioIndex = 0;
      radioIndex < radioButtonEleArray.length;
      radioIndex++
    ) {
      const radioElement = radioButtonEleArray[radioIndex];
      let radioEleId = radioElement.id;
      let radioEleName = radioElement.name;

      //let allOptionsLabelValue= allOptionsLabel[index].textContent
      let radioEleValue = radioElement.value;
      if (radioElement.checked && radioEleValue == correctAns[0]) {
        radioEleStr += `<div class="options" >
      <input type="radio" class="radio-button" name= ${radioEleName}  id=${radioEleId}  value=${radioEleValue} checked disabled >
        <label for=${radioEleId}>${abc[radioIndex]}. ${radioEleValue}</label>
        <i class="fas fa-check"  style="color:green;font-size:20px;margin-left:5px"></i>
          </div>`;
      } else if (radioElement.checked && radioEleValue != correctAns[0]) {
        radioEleStr += `<div class="options" >
      <input type="radio" class="radio-button" name= ${radioEleName}  id=${radioEleId}  value=${radioEleValue}  checked disabled>
        <label for=${radioEleId}>${abc[radioIndex]}. ${radioEleValue}</label>
        <i class="fas fa-times"  style="color:red;font-size:20px;margin-left:5px"></i>
          </div>`;
      } else if (!radioElement.checked && radioEleValue == correctAns[0]) {
        radioEleStr += `<div class="options" >
      <input type="radio" class="radio-button" name= ${radioEleName}  id=${radioEleId}  value=${radioEleValue}  disabled>
        <label for=${radioEleId}>${abc[radioIndex]}. ${radioEleValue}</label>
        <i class="fas fa-check"  style="color:blue;font-size:20px;margin-left:5px"></i>
          </div>`;
      } else {
        radioEleStr += `<div class="options" >
      <input type="radio" class="radio-button" name= ${radioEleName}  id=${radioEleId}  value=${radioEleValue}   disabled>
        <label for=${radioEleId}>${abc[radioIndex]}. ${radioEleValue}</label>
        
          </div>`;
      }
    }

    if (radioButtonValue) {
      rightOrWrongValue =
        radioButtonValue.value == correctAns[0] ? "correct" : "incorrect";
      allQuestionArray.push(
        questionTemplate({
          rightOrWrongValue,
          index,
          element,
          radioEleStr,
          correctAns,
        })
      );
    } else {
      rightOrWrongValue = "Skipped";
      allQuestionArray.push(
        questionTemplate({
          rightOrWrongValue,
          index,
          element,
          radioEleStr,
          correctAns,
        })
      );
    }

    if (radioButtonValue) {
      if (rightOrWrongValue == "correct") {
        correctArray.push(
          questionTemplate({
            rightOrWrongValue,
            index,
            element,
            radioEleStr,
            correctAns,
          })
        );
      } else {
        incorrectArray.push(
          questionTemplate({
            rightOrWrongValue,
            index,
            element,
            radioEleStr,
            correctAns,
          })
        );
      }
    } else {
      skippedQuestionNumber.push((index + 1).toString());

      rightOrWrongValue = "Skipped";
      skippedArray.push(
        questionTemplate({
          rightOrWrongValue,
          index,
          element,
          radioEleStr,
          correctAns,
        })
      );
    }
    radioEleStr = "";
  }

  return {
    allQuestionString: allQuestionArray.join(""),
    correctQuestionString: correctArray.join(""),
    incorrectQuestionString: incorrectArray.join(""),
    skippedQuestionString: skippedArray.join(""),

    allQuestionLength: allQuestionArray.length,
    correctQuestionLength: correctArray.length,
    incorrectQuestionLength: incorrectArray.length,
    skippedQuestionLength: skippedArray.length,
  };
}

function questionTemplate(object) {
  return `<div class="detail-item"><p class="captions"> <span class="que-num">Question ${
    object.index + 1
  }</span>
        ${object.element} <span class=${
    object.rightOrWrongValue === "incorrect"
      ? "red-color"
      : object.rightOrWrongValue === "correct"
      ? "green-color"
      : "skipp-blue"
  }> ${object.rightOrWrongValue}</span>
        </p>
        <br>
        <br>
        ${object.radioEleStr} 
        <br>
        <br>
     ${object.correctAns[1]}
     
     <br>
        </div>`;
}

//clear the board and paste brand  new questions
newQuestion.addEventListener("click", function name() {
  instruction.style.display = "block";
  // scorePara.style.display = "none";
  if (setInterVar) {
    clearInterval(setInterVar);
  }
  minuteTime = 0;
  initialTime = getMsTime();
  setInterVar = setInterval(checkTime, 1000);
  questionOption.innerHTML = "";
  // scorePara.innerHTML = "";
  //showDetailsPara.innerHTML = "";
  showQuestions();
});

//detail answer
function detailsAnswer() {
  // calcInput = document.querySelector("#calcInput.cal-control");
  calcInputCalControl = document.querySelector("#calc-input.cal-control"); //cal-control
  console.log(calcInput, "&&&&&&))---##777777");
  let details;
  if (calcInputCalControl) {
    if (setInterVar) {
      clearInterval(setInterVar);
    }
    console.log("&&&&&&))---##111");
    minuteTime = 0;
    initialTime = getMsTime();
    setInterVar = setInterval(checkTime, 1000);

    let userInput = calcInput.value;
    userInput = userInput.replace(/\s/g, "");

    userInput = trimString(userInput, ";")[1];
    userInput = formateStrExponent(userInput); //formateStrExponent(str)
    details = main(userInput);
  } else {
    console.log("&&&&&&))---##2222");
    const questionStr = bodmasQuestionsArray.join(";");
    details = main(questionStr);
  }

  return `${details[2]}${details[1]}`;
}

//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
function getMsTime() {
  let Time = new Date();
  return Time.getTime();
}
// let finalTime = checkTime(iniTime, getMsTime());
// displayTime(finalTime);

function checkTime() {
  // checkTime(initialTime, getMsTime());
  let timeInterval = getMsTime() - initialTime;
  let secondsTim;
  secondsTim = (timeInterval / 1000).toFixed();
  secondsTim = Number(secondsTim);
  if (secondsTim % 60 === 0) {
    minuteTime += 1;
    initialTime = getMsTime();
  }
  let formateTime = `${minuteTime} Minutes:${secondsTim} seconds`;

  timeCheck.textContent = formateTime;
  //end exam when time is up
  // forcedSubmitAndMark(minuteTime);
  forcedSubmitAndMark(minuteTime, secondsTim);
}
setInterVar = setInterval(checkTime, 1000);

//end exam when time is up
function forcedSubmitAndMark(minuteTime, secondsTim) {
  let timePerQuestionInMinutes = 1;
  let totalTime = questionNumber * timePerQuestionInMinutes;
  if (minuteTime === totalTime && secondsTim === 2) {
    const calControl = document.querySelector("#show-score.cal-control");
    if (calControl) {
      calControl.style.display = "none";
    }
    if (setInterVar) {
      clearInterval(setInterVar);
    }
  }
}
