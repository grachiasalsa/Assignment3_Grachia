// // exercise 1 //
function isArithmeticProgression(params) {
    if (params.length < 2) {
        return false;
    }

    const deretArray = params[1] - params[0];

    for (let i = 2; i < params.length; i++) {
        if (params[i] - params[i - 1] !== deretArray) {
            return false;
        }
    }
    return true;
}

console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6]));
console.log(isArithmeticProgression([2, 4, 6, 12, 24]));
console.log(isArithmeticProgression([2, 4, 6, 8]));
console.log(isArithmeticProgression([2, 6, 18, 54]));
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9]));



// exercise 2 // 
function threeStepsAB (params) {
    for (let i = 0; i < params.length; i++) {
        if (params[i] === "a" && params[i + 4] === "b") {
          return true;
        } else if (params[i] === "b" && params[i + 4] === "a") {
          return true;
        }
      }
      return false;
    } 

console.log(threeStepsAB('lane borrowed'));
console.log(threeStepsAB('i am sick'));
console.log(threeStepsAB('you are boring'));
console.log(threeStepsAB('barbarian'));
console.log(threeStepsAB('bacon and meat'));



// exercise 3 //
function sumArray(arr, int) {
    const result = [];

    arr.sort((a, b) => a - b);

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const currentSum = arr[left] + arr[right];

        if (currentSum === int) {
            result.push([arr[left], arr[right]]);
            left++;
            right--;
        } else if (currentSum < int) {
            left++;
        } else {
            right--;
        }
    }
    return result;
}

console.log(sumArray([2, 1, 4, 3], 5));   
console.log(sumArray([1, 8, 10, 3], 11));  



// exercise 4 // 
function arrSum(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];
    let start = 0;
    let end = 0;
    let tempStart = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > currentSum + arr[i]) {
            currentSum = arr[i];
            tempStart = i;
        } else {
            currentSum = currentSum + arr[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    const resultArray = arr.slice(start, end + 1);
    const resultSum = maxSum;

    return [resultArray, resultSum];
}

console.log(arrSum([-2, -3, 4, -1, -2, 1, 5, -3]));


