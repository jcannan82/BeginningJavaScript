// Write a function called isDivisibleBy3 which returns `true` if a number is
// divisible by 3, and `false` otherwise.
let isDivisibleBy3 = function (numberToCheck) {
    let modulusAnswer = numberToCheck % 3;
    return modulusAnswer == 0;
};


// Write a function that converts a Celsius temperature to Fahrenheit,
// and vice-versa. To convert from Celsius to Fahrenheit, you multiply
// the celsius value by 9 and then divide by 5. Then you add 32. To
// convert the other way, you subtract 32, and then multiply by
// 5. Finally, you divide by 9. The division operator in JavaScript is
// `/`.
let celsToFahr = function (temperature) {
    let convertedTemp = temperature * 9 / 5 + 32;
    return convertedTemp;
};

let fahrToCels = function (temperature) {
    let convertedTemp = (temperature - 32) * 5 / 9;
    return convertedTemp;
};


// Write a function called `randUpTo` that accepts a number and returns a random
// whole number between 0 and that number. For example:
//
//     randUpTo(10);
//     //=> 5
//
//     randUpTo(10);
//     //=> 9
//
//     randUpTo(1000);
//     //=> 561
//
//     randUpTo(1000);
//     //=> 236
let randUpTo = function (maxNumber) {
    return Math.floor(Math.random() * maxNumber);
};


// Write a function called `randBetween` that accepts two numbers representing a
// range and returns a random whole number between those two numbers.
let randBetween = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};


// The standard card suits are clubs, diamonds, hearts and spades. Write a
// function called isSuit that accepts a string and returns true if the input
// string is a suit, and false otherwise. Consider making a more robust function
// that will allow the case to be arbitrary, meaning "HEARTS", "hearts", and
// "hEaRtS" all return `true`. You can use the `toLowerCase` or `toUpperCase`
// string methods to achieve this.
//
//     isSuit("hearts");
//     //=> true
//
//     isSuit("HEARTS");
//     //=> true
//
//     isSuit("coins");
//     //=> false
let isSuit = function (rawSuit) {
    return "Hearts Clubs Diamonds Spades".toLowerCase().indexOf(rawSuit.toLowerCase()) >= 0;
};


// The valid ranks for a card are two, three, four, five, six, seven, eight,
// nine, ten, jack, queen, king and ace. Write a function called `isRank` that
// accepts a string and returns true if it is a card rank.
//
//     isRank("jack");
//     //=> true
//
//     isRank("Queen");
//     //=> true
//
//     isRank("one");
//     //=> false
let isRank = function (rawRank) {
    return "two three four five six seven eight nine ten jack queen king ace".toLowerCase().indexOf(rawRank.toLowerCase()) >= 0;
};


// Using the previous two functions, write a function called isCard that accepts
// two arguments, a rank and a suit, and returns true if they are valid for a card,
// and false otherwise.
let isCard = function (rank, suit) {
    return isRank(rank) && isSuit(suit);
};


// Write a function called `isCapitalized` that accepts a string and returns
// `true` if the first letter is a capital letter. How can you determine that?
// Remember that you can use strings in comparisons in the same way that you can
// use numbers, and the ordering is alphabetical (with capital letters having lower
// values than their lower-case counterparts).
let isCapitalized = function (wordToEvaluate) {
    return wordToEvaluate < wordToEvaluate.toLowerCase();
};


// Write a function that accepts a string representation of an HTML element (it
// can't have nested HTML elements) and returns the string contained inside. For
// example:
//
//     getHTMLText("<p>this is some text in a paragraph</p>");
//     //=> this is some text
//
//     getHTMLText("<li>this is a list item</li>");
//     //=> this is a list item
let getHTMLText = function (textToProcess) {
    return textToProcess.slice(textToProcess.indexOf(">") + 1,textToProcess.indexOf("</"));
};


// Write a function that determines if a string represents an HTML element. This
// means it has to start with an opening HTML tag and end with a closing HTML tag.
//
//     isHTMLElement("<p>this is a paragraph</p>");
//     //=> true
//
//     isHTMLElement("this is a tweet!");
//     //=> false
//
//     isHTMLElement("<p>this is NOT an paragraph</div>");
//     //=> false
//
//     isHTMLElement("<li>this is an HTML list element</li>");
//     //=> true
//
// It may help in this case to look up the `lastIndexOf` method on the string
// objects.
let isHTMLElement = function (stringToProcess) {
    return stringToProcess.length -1 == stringToProcess.lastIndexOf(">");
};
