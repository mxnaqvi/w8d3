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



const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function addNumbers(sum, numsLeft, cb) {

    if (numsLeft > 0) {
        reader.question("Input a Number: ", answer => {
            let num = parseInt(answer);
            sum += num;
            console.log(sum);
            numsLeft -= 1;
            console.log(`numsLeft: ${numsLeft}`);
            addNumbers(sum, numsLeft, cb);
        })
    } else {
        cb(sum);
        reader.close();
    }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

