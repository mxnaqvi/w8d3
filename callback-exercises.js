// class Clock {
//     constructor() {
//         const date = new Date();
//         this.hours = date.getHours();
//         this.minutes = date.getMinutes();
//         this.seconds = date.getSeconds();
//         this.printTime();
//         setInterval(this._tick.bind(this), 1000);
//     }

//     printTime() {
//         console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
//     }

//     _tick() {
//         ++this.seconds;
//         if (this.seconds === 60) {
//             this.seconds = 0;
//             ++this.minutes;
//         }
//         if (this.minutes === 60) {
//             this.minutes = 0;
//             ++this.hours;
//         }
//         if (this.hours === 24) {
//             this.hours = 0;
//         }
//         this.printTime();
//     }
// }

// const clock = new Clock()



// const readline = require("readline");
// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// function addNumbers(sum, numsLeft, cb) {

//     if (numsLeft > 0) {
//         reader.question("Input a Number: ", answer => {
//             let num = parseInt(answer);
//             sum += num;
//             console.log(sum);
//             numsLeft -= 1;
//             console.log(`numsLeft: ${numsLeft}`);
//             addNumbers(sum, numsLeft, cb);
//         })
//     } else {
//         cb(sum);
//         reader.close();
//     }
// }

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

// Function.prototype.myBind = function(context){
//     return () => {
//         return this.apply(context);
//     }
// }

// class Lamp {
//     constructor() {
//       this.name = "a lamp";
//     }
//   }
  
//   const turnOn = function() {
//     console.log("Turning on " + this.name);
//   };
  
//   const lamp = new Lamp();
  
// //   turnOn(); // should not work the way we want it to
  
//   const boundTurnOn = turnOn.bind(lamp);
//   const myBoundTurnOn = turnOn.myBind(lamp);
  
//   boundTurnOn(); // should say "Turning on a lamp"
//   myBoundTurnOn(); // should say "Turning on a lamp"

const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function askIfGreaterThan(el1, el2, cb) {
    reader.question(`Is ${el1} greater than ${el2}. Only answer with yes or no`, answer => {
        answer === 'yes' ? cb(true) : cb(false);
    })
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
    // let madeAnySwaps = false
    if ( i < arr.length - 1){
        askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan){
            if (isGreaterThan === true){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                madeAnySwaps = true;
                innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
            }
        } )
    }
    if(i === arr.length-1){
    outerBubbleSortLoop(madeAnySwaps);
    }
}

function absurdBubbleSort(arr, sortCompletionCallback){
    madeAnySwaps = true
    function outerBubbleSortLoop(madeAnySwaps){
        if (madeAnySwaps === true){
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        }else {
            sortCompletionCallback(arr);
        }
    }
}

absurdBubbleSort([3, 2, 1], function(arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
  });