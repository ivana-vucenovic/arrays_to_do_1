// Skyline hights -  Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. As always with challenges, do not use built-in array functions such as unshift().


function skylineHights(arr) { 
    var newArr = []

    for (var i = 0; i < arr.length; i ++) {
        let number = arr[i];
        if (i < arr.length - 1) {
            if (number > 0 && number < arr[i+1]) {
                newArr.push(number)
            }
        }    
        else {
            if (arr[i - 1] < number) {
                newArr.push(number)
            } else {
                newArr.push(arr[i - 1]);
            }
        }
    }
    return newArr; 
}
var arr = [-1,1,1,7,3];
console.log(skylineHights(arr));

// Zip it - Create a standalone function that accepts two arrays and combines their values sequentially into a new array. Extra values from either array should be included afterward. Given [4,15,100] and [10,20,30,40], return new array containing [4,10,15,20,30,40,100].

function zipIt(arr1, arr2) {
    var arr3 = arr1.concat(arr2)
    // Sort an Array if Integers:
    arr3.sort(compareFunction)

    function compareFunction(a, b){
        // 1. < 0 ...a comes first
        // 2. 0 ...nothing changes
        // 3. > 0 ...b comes first
        return a-b;
    }
    return arr3;
}
var arr1 = [4, 15, 100];
var arr2 = [10,20, 30, 40];
console.log(zipIt(arr1, arr2));


