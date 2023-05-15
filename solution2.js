// 1. Create a function to concatenate two integer arrays.
function concat(arr1, arr2) {
	return arr1.concat(arr2);
}

// 2. Create a function that takes an array and a string as arguments and returns the index of the string.
function findIndex(arr, str) {
	return arr.indexOf(str);
}

// 3. Given an index and an array, return the value of the array with the given index.
function valueAt(arr, i) {
	return arr[Math.floor(i)];
}

// 4. Create a function that finds the index of a given item.
function search(arr, item) {
	return arr.indexOf(item);
	return -1;
}

// 5. Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
function sumArray(arr) {
	let sum = 0;	
  for (let i=0; i<arr.length; i++) {
	  sum+=arr[i];
	}
  return sum;
}

// 6. Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.
function search(arr, item) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === item) return i;
    }
        return -1;
             }

// 7. Create a function that returns a number, based on the string provided. Here is a list of all digits

// 8. Write a function to check if an array contains a particular number.
function check(arr, el) {
    return arr.includes(el);
  }

//   9. Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.
function parseArray(arr) {
    return arr.map((item) => item.toString());
  }
  
//   10. Given a Rubik's Cube with a side length of n, return the number of individual stickers that are needed to cover the whole cube.
  function countStickers(n) {
    return 6 * n * n;
  }

// 11. A typical car can hold four passengers and one driver, allowing five people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.
function carsNeeded(n) {
	return Math.ceil(n/5);
}

// 12. Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
function addUp(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }

// 13. Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.
function matchHouses(step) {
    return step === 0 ? 0 : 5 * step + 1;
  }
  

// 14. The left shift operation is similar to multiplication by powers of two.
function shiftToLeft(x, y) {
    return x * Math.pow(2, y);
  }

// 15. Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
function minMax(arr) {
    let min = arr[0]; 
    let max = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i]; 
      }
      if (arr[i] > max) {
        max = arr[i]; 
      }
    }
  
    return [min, max];
  }
  
//   16. Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.
  function timeForMilkAndCookies(date) {
    return date.getMonth() === 11 && date.getDate() === 24;
  }
  
// 17. Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.
// If f returns the larger number, return the string f.
// If g returns the larger number, return the string g.
// If the functions return the same number, return the string neither.
function whichIsLarger(f, g) {
    const resultF = f();
    const resultG = g();
  
    if (resultF > resultG) {
      return "f";
    } else if (resultF < resultG) {
      return "g";
    } else {
      return "neither";
    }
  }

// 18. Create a function that returns true if the first array can be nested inside the second and false otherwise.
// arr1 can be nested inside arr2 if:
// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.
function canNest(arr1, arr2) {
    const min1 = Math.min(...arr1);
    const max1 = Math.max(...arr1);
    const min2 = Math.min(...arr2);
    const max2 = Math.max(...arr2);
  
    return min1 > min2 && max1 < max2;
  }

//   19. Create a function that calculates the number of different squares in an n * n square grid.
function numberSquares(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i * i;
    }
    return sum;
  }

//   20. Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
function largestSwap(num) {
    const tens = Math.floor(num / 10);
    const units = num % 10;
    return tens >= units;
  }

//   21. A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
//   The wanted word is in lowercase.
//   The crowd of letters is all in uppercase.
//   Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
function detectWord(letters) {
    let word = "";
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      if (letter === letter.toLowerCase()) {
        word += letter;
      }
    }
    return word;
  }
  