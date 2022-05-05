/*console.log('Hello!'); // строки берем в кавычки
console.log("world");
console.log("3333");
console.log(334);
console.log('Hello' + 'world'); // конкатенация
console.log('Hello' + ' world'); // конкатенация
console.log('Hello ' + 'world'); // конкатенация
console.log('Hello' + ' ' + 'world'); // конкатенация
console.info('Hello');*/
// alert('Hello');
// alert('Hello'); // ctrl+l
// alert('Hello');
let one = document.querySelector('#one'),
    two = document.querySelector('#two'),
    oneClass = document.querySelector('.one'),
    spa = document.querySelector('#spa'),
    thr = document.querySelector('.three'),
    fou = document.querySelector('.four'),
    a = document.querySelector('.five'),
    div7 = document.querySelector('.seven'),
    d1 = document.querySelector('.test-1'),
    d2 = document.querySelector('.test-2'),
    divS3 = document.querySelector(' .s3'),
    body = document.querySelector('body');


let a1 = 12;
let b = 12;
let c = a1 * b;
    z1 = 6,
    z2 = 3,
    z = z1 * z2,
    y1 = 6,
    y2 = 3,
    x1 = 'Hello',
    x2 = 5;
    // d2 = 5;
// body.innerHTML = ''
one.innerHTML += 'Hello world  ';
two.textContent += c + '  ' +  x1 + x2;
oneClass.innerHTML += 'Hello world  ' + y1 / y2;
spa.innerHTML += ' World ' + z;
thr.innerHTML = '<h3> Text 3</h3>';
fou.innerHTML += '<h4>Text 4</h4>' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, omnis!</p>'
/*
document.getElementById('out').innerHTML = 'Hello';
document.getElementById('out').innerHTML = 2019;
document.getElementById('out').innerHTML = '<b>2020</b>';

document.querySelector('.header').innerHTML = 15;
document.querySelector('#one').innerHTML = 777; // есть #
document.getElementById('one').innerHTML = 888; // нет #

let b; // var a - устарело
let a = document.querySelector('#one'); // внутрь a получил параграф
let c;
c = document.querySelector('.header');

a.innerHTML = 9999; // new! - ошибка
c.innerHTML = 6666;*/
a.innerHTML = 3.1415;
div7.innerHTML = `<img src="https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png" alt="">`;


