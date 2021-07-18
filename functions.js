//1 Print Low, Return High - Create a function that takes array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function printLowReturnHigh(arr){
    var low = arr[0];
    var high = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < low){
            low = arr[i];
        }else if (arr[i] > high){
            high = arr[i];
        }
    }
    console.log(low);
    return high;
}

// console.log(printLowReturnHigh([50,-1,20,12]));

//2 Print One, Return Another - Build a function that takes array of numbers.  The function should print second-to-last value in the array, and return first odd value in the array.

function print2ndToLastReturnOdd(arr){
    console.log(arr[arr.length-2]);
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 1){
            return arr[i];
        }
    }
}
// console.log(print2ndToLastReturnOdd([0,2,1,4,3]));

//3 Double Vision - Given array, create a function to return a new array where each value in the original has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing original.

function doubleVision(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        newArr.push(arr[i] * 2);
    }
    return newArr;
}
// console.log(doubleVision([1,2,3]));


//4 Count Positives - Given array of numbers, create function to replace last value with number of positive values.  Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

function countPositives(arr){
    var positives = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            positives++;
        }
    }
    arr[arr.length-1] = positives;
    return arr;
}
// console.log(countPositives([1,1,0,0]));

//5 Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!"

function evensOdds(arr){
    var odds = 0;
    var evens = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 1){
            odds++;
            evens = 0;
        }else{
            evens++;
            odds = 0;
        }
        if (odds == 3){
            console.log("That's odd!");
            odds = 0;
        }else if(evens == 3){
            console.log("Even more so!");
            evens = 0;
        }
    }
}
// evensOdds([1,1,1,2,2,1,1,1])
