//Sum and average
let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers[i] = Math.floor((Math.random() * 90))+10;
    console.log("Number " + i + " is " + numbers[i]);
}
let sum = 0;
for (let i = 0; i < 5; i++) {
    sum += numbers[i];
}
let avg = sum / 5;
console.log("Sum : " + sum);
console.log("Avergae is : " + avg);
