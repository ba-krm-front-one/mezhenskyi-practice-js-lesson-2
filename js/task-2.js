var minFirst = 1;
var maxFirst = 6;
var minSecond = 1;
var maxSecond = 6;

function getRandomInt(minFirst, maxFirst) {
    return Math.floor(Math.random() * (maxFirst - minFirst + 1)) + minFirst;
}

function getRandomInt(minSecond, maxSecond) {
    return Math.floor(Math.random() * (maxSecond - minSecond + 1)) + minSecond;
}
var resultFirst;
var resultSecond;

resultFirst = getRandomInt(minFirst, maxFirst);
resultSecond = getRandomInt(minSecond, maxSecond);

alert(resultFirst);
alert(resultSecond);