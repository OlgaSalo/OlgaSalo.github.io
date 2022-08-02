let min = 3;
let max = document.querySelector('input[name="max"]');

let getRandom = document.querySelector('input[name="max"]');

let rand = Math.floor(min + Math.random() * (max - min + 1));
console.log(rand);
