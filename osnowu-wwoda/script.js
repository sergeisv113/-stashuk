
/*

let inputIn = document.querySelector('.input-in'); // input
let button = document.querySelector('button'); // button
let div = document.querySelector('.out');

button.onclick = function () {
    // кнопка будет нажата
    console.log('Работает!!!!!!');
    // console.log(inputIn.value); // value - то, что введено в input
    let b = +inputIn.value; // + перевести в число!!!!!!!
    console.log(b + 10); // '66'+10 = 6610
    div.innerHTML = b;
    inputIn.value = '';
}*/

let inpitIn = document.querySelector('.input-in'),
    btn = document.querySelector('button'),
    outDiv = document.querySelector('.out');

btn.addEventListener("click", () => {
    console.log('Ok');
    // console.log(inpitIn.value);
    let b = inpitIn.value;
    console.log(b * 23);//1265
    console.log(b + 10);//5510
    inpitIn.value = '';//clear value
    outDiv.innerHTML = b;
});
let inp1 = document.querySelector('.c1'),
    inp2 = document.querySelector('.c2'),
    inp3 = document.querySelector('.c3'),
    inp4 = document.querySelector('.c4'),
    inp5name = document.querySelector('.c5-name'),
    inp5f = document.querySelector('.c5-fname'),
    inp6name = document.querySelector('.c6-name'),
    inp6f = document.querySelector('.c6-fname'),
    inp7 = document.querySelector('.c7'),
    y = document.querySelector('.c8'),
    inp9name = document.querySelector('.c9-name'),
    inp9f = document.querySelector('.c9-fname'),
    inp10 = document.querySelector('.c10')

    btn1 = document.querySelector('#c1'),
    btn2 = document.querySelector('#c2'),
    btn3 = document.querySelector('#c3'),
    btn4 = document.querySelector('#c4'),
    btn5 = document.querySelector('#c5'),
    btn6 = document.querySelector('#c6'),
    sUm = document.querySelector('.sum'),
    btn9 = document.querySelector('#c9'),
    btn10 = document.querySelector('#c10')

btn1.addEventListener('click', () => {
    console.log(inp1.value);
});
btn2.addEventListener('click', () => {
    console.log(inp2.value);
    inp2.value = '';
});
btn3.addEventListener('click',  () => {
    let b = inp3.value;
    console.log(b * 10);
});
btn4.addEventListener('click', () => {
    let b = +inp4.value;
    console.log(b + 10);
});
btn5.addEventListener('click', () => {
    let a = inp5name.value;
    let c = inp5f.value;
    console.log(`Hello ${a} ${c}`);
});
btn6.addEventListener('click', () => {
    let a = +inp6name.value;
    let c = +inp6f.value;
    sUm.innerHTML = a + c;
});
inp7.value = 'hello';
y.style.border = '2px solid red';
btn10.addEventListener('click', () => {
    let t = inp10.value;
    console.log(parseFloat(t));
});
/*
let a = 7,
    b = 9,
    c = 7,
    d = 9,
    e = 3,
    f = 5,
    e1 = '3',
    f1 = 5;

console.log(a * b);
console.log(c / d);
console.log(e + f);
console.log(e1 + f1);
*/

/*
let e2 = 3,
    f2 = 0,
    e3 = 3,
    f3 = 'Hello',
    e4 = 3,
    f4 = 'Hello';

console.log(e2 / f2);
console.log(e3 + f3);
console.log(e4 * f4);
*/




