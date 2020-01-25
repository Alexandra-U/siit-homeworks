// Dsplay in the console the numbers from 1 to 20

function countToTwenty(num) {
    let count = 0;
    for (let i = 0; i < 20; i++) {
        count = count + 1;
        console.log(count);
    }
}
countToTwenty();

// Display in the console the odd numbers from 1 to 20

function oddNumbers(num) {
    for (let i = 0; i < 20; i++) {
        if ((i % 2) !== 0) {
            i = i + '';
            console.log(i);
        }
    }
}
oddNumbers();

// Compute the sum of the elements of an array and display it in the console 

function sumOfTheElements(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }   
    console.log(sum);  
}
sumOfTheElements([22, 44, 100, 1, 15, 20]);

// Compute the maximum of the elements of an array and display it in the console

function maxElements(num) {
    let a = 20, b = 300, max;
    
    if (a > b) {
        max = a;
    } else {
        max = b;
    }  
    console.log(max);
}
maxElements();

// Compute how many times a certain element appears in an array 
// (count the number of times one element of your choice is in the array)

function elementArrayEmerge(num) {
    let list = [10, 12, 10, 100, 20, 10, 30, 10];
    let result = {};

    for (let i = 0; i < list.length; i++) {
    let number = list[i];
    if (result[number]) {
        result[number] += 1;
    } else {
        result[number] = 1;
    }
    console.log(result);
 } 
  
}
elementArrayEmerge();


// Using nested for loops generate and display in the console the following pattern
// 0 1 0 1

// 1 0 1 0

// 0 1 0 1

// 1 0 1 0

function printPattern(num) {
    let list1 = [0, 1, 0, 1];
    let list2 = [1, 0, 1, 0];

    for (let i = 0; i < list1.length; i++) {

        for (let j = 0; j < list2.length; j++) {

        }
            console.log([0, 1, 0, 1]);
            console.log([1, 0, 1, 0]);
            console.log([0, 1, 0, 1]);
            console.log([1, 0, 1, 0]);
break;
    }
  
}
printPattern();

