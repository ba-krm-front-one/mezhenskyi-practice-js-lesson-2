var min = 0;
var max = 1;


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var result;

result = getRandomInt(min, max);

if (result == 0) {
    alert('Орел');
} else {
    alert('Решка');
}

