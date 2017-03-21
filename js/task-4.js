var min = 1;
var max = Number(prompt("Введите максимальное число", ""));

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min ) + min;
}

var result;

result = getRandomArbitrary(min, max);

alert(result);