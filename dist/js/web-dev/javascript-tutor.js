const jsQuestionArray = [
  {
    question: "What is the output of this code alert( `Du\\ncome`.length );",
    answers: {
      a: "4",
      b: "5",
      c: "6",
      d: "7",
    },
    correctAnswer: "d",
    explanation: `\\n is counted as one because it is a single “special” character, so the length is 7.`,
  },
  {
    question: `What is the output of the following code.
    let firstName = "Joseph";
    console.log(firstName[1]);
    `,
    answers: {
      a: "J",
      b: "o",
      c: "s",
      d: "e",
    },
    correctAnswer: "b",
    explanation: `
    Option b is the correct answer.
    firstName is a variable -  declared and initialized with the string type whose value is Joseph.
    The above code is trying to access the string character at index one which is "o".
    The first character of the string is at index zero, this character is J,
    the second character of the string  is at index one, this character is o.
    the third character of the string  is at index two, this character is s.
    the fourth character of the string  is at index three, this character is e....
    To get a character at any index in the above string, do firstName[index].
    or call the method str.charAt(index).
  `,
  },
  {
    question: `Suppose i want to change the string "canada" to "CANADA" which of the following 
    javascript string method will accomplish that`,
    answers: {
      a: "'canada'.toUpperCase()",
      b: "'canada'.toLowerCase() ",
      c: "'canada'.indexOf('nada')",
      d: "'canada'.includes('nada')",
      e: "'canada'.startsWith('can')",
    },
    correctAnswer: "a",
    explanation: `
    Option a is correct. Calling toUpperCase() on "canada" will turn it to uppercaser.
     The name of a javascript method will always give you a hints about what the method does.
    Option b is incorrect because calling toLowerCase on "canada" will have no effect.
    If a string is in uppercase, calling toLowerCase() on it will turn it to lowercase.
    "canada is already in lowercase".
    Option c is incorrect because calling  indexOf('nada') on "canada" will look for the 
    sub string "nada" in the string main "canada" starting from index zero and return the position/index where the match 
    was found or -1 if nothing was matched. In this case 1 will be returned. This is all that will happen
    "canada" will not be turned to uppercase.
    Option d is incorrect because calling includes('nada') on "canada" will return true because the main
    string "canada" contains the sub-string "nada" otherwise it would have returned false. 
    "canada" will not be turned to uppercase
   Option e is incorrect because calling startsWith('can') on "canada" will return true because
   "canada" starts with 'can'. This is all it will do, it won't turn "canada" to uppercase

    `,
  },
  {
    question: `A web developer wants to get the the substring "school" from from the string
    'Charity-school", Which of the following javascript statements will do the job.
    `,
    answers: {
      a: "'Charity-school-year'.slice(0, 6)",
      b: "'Charity-school-year'.slice(8, 13)",
      c: "'Charity-school-year'.slice(8, 14)",
      d: "'Charity-school-year'.slice(2)",
      e: "'Charity-school-year'.slice(-4,-1)",
    },
    correctAnswer: "c",
    explanation: `
    Option c is correct.
    Slice is one method to get a substring from a string in javascript.
    Other ways are str.substring and  str.substr.
    str.slice(start [, end]).
    The first argument of the slice indicates where to begin the string cut-off while
    the second argument shows where to end the cut off. However, the character at the 
    second argument is not included in the returned string.
    Option c is correct because executing the  'Charity-school'.slice(8, 14) statement will slice the 
    string between the character at index 8 which is "s" and the character at index 14 which is "-",
    but the character at the index 14 will not be included in the returned string which is "school".
    Option a is incorrect because executing the 'Charity-school-year'.slice(0, 6) statement will
    return 'Charit' not "school".
    Option d is incorrect because executing the 'Charity-school-year'.slice(2) statement will
    return 'arity-school-year' not "school", if slice is called without a second argument,
    the extraction will happen between the first argument and the end of the string.
    
    Option e is incorrect because executing the 'Charity-school-year'.slice(-4,-1) statement will
    return 'yea' not "school", slice can be called with negative arguments. With negative indexes,
    the last character is at index -1, this character is "r", the character  at index -2 is "a",
    the  character  at index -3  is "e", the character  at index -4 is "y",this is the first 
     argument and where the slice will begin.The slice will end at the last argument but will
     not include the character there.
     
  `,
  },
  // {
  //   question: ``,
  //   answers: {
  //     a: "",
  //     b: "",
  //     c: "",
  //     d: "",
  //   },
  //   correctAnswer: "",
  //   explanation: ` `,
  // },
];
export { jsQuestionArray };
