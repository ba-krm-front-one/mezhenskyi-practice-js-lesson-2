/*if (a + b < 4) {
 result = 'Мало';
 } else {
 result = 'Много';
 }
 */
var a = Number(prompt('Введите значение a', ''));
var b = Number(prompt('Введите значение b', ''));

c = (a + b) < 4 ? 'Мало' : 'Много';
alert(c);