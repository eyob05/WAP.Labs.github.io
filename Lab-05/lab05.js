/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, function2test) {
    let result = function2test();

    if (Array.isArray(expected)) {
        expected = expected.toString();
    }
    if (Array.isArray(result)) {
        result = result.toString();
    }
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
}

function myarr() {
    return [1, 1];
}
console.log("Expected output of myarr() is 40  " + myFunctionTest([1, 1], function () {
    return myarr();
}));
/***************** Problem 2. finding maximum of two numbers***************************/
function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
console.log("Expected output of max() is 5  " + myFunctionTest(5, function () {
    return max(3, 5);
}));
/**************** Problem 3. finding maximum of three numbers**************************/
function maxOfThree(num1, num2, num3) {
    let greater = num1 > num2 ? num1 : num2;
    return num3 > greater ? num3 : greater;
}

console.log("Expected output of maxOfThree() is 250 " + myFunctionTest(250, function () {
    return maxOfThree(250, 200, 220);
}));
/*************** Problem 4. function is vowel*******************************************/
function isVowel(cha) {
    if (cha.length === 0) return false;
    let vowels = 'AEIOU';
    return (vowels.indexOf(cha) >= 0) || (vowels.toLocaleLowerCase().indexOf(cha) >= 0);
}


console.log("Expected output of isVowel() is true " + myFunctionTest(true, function () {
    return isVowel("E");
}));
/*************** Problem 5 **************************************************************/
/*************** i.sum function of Array*************************************************/
function sum(arr) {
    const total = function () {
        return arr.reduce((a, b) => a + b, 0);
    }
    return total(arr);
}
console.log("Expected output of sum([1,2,3,4])  is 10 " + myFunctionTest(10, function () {
    return sum([1, 2, 3, 4]);
}));
/*************** ii.multiply function of Array********************************************/
function multiply(arr) {
    const product = function () {
        return arr.reduce((a, b) => a * b, 1);
    }
    return product(arr);
}

console.log("Expected output of multiply([1, 2, 3, 4]) is 24 " + myFunctionTest(24, function () {
    return multiply([1, 2, 3, 4]);
}));
/*************** Problem 6. function Reverse a String***************************************/
function reverse(str) {
    let q = "";
    for (let i = str.length - 1; i >= 0; i--) {
        q += str[i];
    }
    return q;
}

console.log("Expected output of reverse() is  tha " + myFunctionTest("tah", function () {
    return reverse("hat");
}));
/*************** Problem 7. function of longest word*****************************************/
function findLongestWord(arr) {
    let max = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max)
            max = arr[i].length;
    }
    return max;
}
console.log("Expected output of findLongestWord(['eyob','habtom','john']) is  6 " + myFunctionTest(6, function () {
    return findLongestWord(['eyob', 'habtom', 'john']);
}));
/* Problem 8. function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i*/

function fiterLongestWord(arr, i) {
    let result = arr.filter(
        function (elem) {
            return elem.length > i;
        });
    return result;
}
console.log("Expected output of fiterLongestWord(['eyob', 'habtom', 'john']) is  'habtom' " + myFunctionTest(['habtom'], function () {
    return fiterLongestWord(['eyob', 'habtom', 'john'], 4);
}));
/***************Problem 9. functions map/filter/reduce*****************************************/

/***************a) multiply each element by 10 of map******************************************/

function multiplyBy10(arr) {
    return arr.map(function (elem, i, arr) {
        return elem * 10;
    })
}
console.log("Expected output of multiplyBy10([1,2,3,4,5]) is  [10,20,30,40,50] " + myFunctionTest([10, 20, 30, 40, 50], function () {
    return multiplyBy10([1, 2, 3, 4, 5]);
}));

/**************** b) all ements equals 3 or filter********************************************/
function allElementsequals3(arr) {
    return arr.filter(function (elem, i, arr) {
        return elem === 3;
    })
}

console.log("Expected output of allElementsequals3([1,2,3,4,3,5,3]) is  [3,3,3] " + myFunctionTest([3, 3, 3], function () {
    return allElementsequals3([1, 2, 3, 4, 3, 5, 3]);
}));

/***************** product of all elements******************************************************/
function productOfAllElements(arr) {
    return arr.reduce(function (total, elem, i, arr) {
        return total * elem;
    }, 1);
}

console.log("Expected output of productOfAllElements([1,2,3,5]) is  30 " + myFunctionTest(30, function () {
    return productOfAllElements([1, 2, 3, 5]);
}));





