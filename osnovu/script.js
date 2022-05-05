/*
// for in Obj
const  myObject = {x:10, y: true};

for (const key in myObject) {
    //значение св-ва Object[key]
    console.log(key, myObject[key])// x 10  y true
};
//[] - forEach
const arr = [10, true];
arr.forEach(el => {console.log(el)})//10  true

//forEach Obj=>[]
Object.keys(myObject).forEach(key => {    //Object.keys(myObject)=[]
    console.log(key, myObject[key])// x 10  y true = key+value
});
//forEach Obj=>[]
Object.values(myObject).forEach(value => {   //Object.values(myObject)=[]
    console.log(value)//  10   true  value
});
//for of str
const str = 'hey'
for (const letter of str) {console.log(letter)} // h e y

// for of NOT obj

//CLASS
class Comment  {
    constructor(text) {
        this.text = text;
        this.votesQty = 0;//начальное значение
    }
    upvote() {
        this.votesQty += 1//наследуются каждым классом комент
    }
    static mergeComment(first, second) {
        return `${first} ${second}`
    }
}
const firstComment = new Comment('First comment')//votesQty = 0//proto votesQty = 1
//все св-ва firstComment.text в консоли
//цепочка прото firstComment=Comment=>Object
console.log(firstComment.votesQty) // 0
firstComment.upvote()
console.log(firstComment.votesQty)//1
firstComment.upvote()
console.log(firstComment.votesQty)//2

//проверка принадлежности св-ва к классу
firstComment.hasOwnProperty('text')//true
firstComment.hasOwnProperty('votesQty')//true
firstComment.hasOwnProperty('upvote')//false
firstComment.hasOwnProperty('hasOwnProperty')// false

//static - не наследуются экземплярами class
Comment.mergeComment('First comment.', 'Second comment.')//First comment. Second comment.

//Расшир class
class NumberArr extends Array {
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}
const myArr = new NumberArr(2, 5, 7)
console.log(myArr)//[2, 5, 7]
myArr.sum()//14
//цепочка прото myArr=>NumberArr=>Array=>Object

//Promice
const myPromise = new Promise((resolve, reject) => {
     //выполн асинхд действие
    //вн этой ф-ции нужно вызвать resolve или reject
})
//получ результата
.then(value => {//если промис успешен, value=resolve
     })
.catch(error => {// промис отклонен, error=reject
   });
fetch('https:jsonplaceholder.typicode.com/todos')
.then(response =>  response.json())
//{
    // console.log(response)
    // return response.json()
// })
.then(json => console.log(json))
.catch(error => console.error(error))

const getData = (url) =>
    new Promise((resolve, reject) =>
      fetch(url)
          .then(response => response.json())
          .then(json => resolve(json))
          .catch(error => reject(error))
    )
getData('https:jsonplaceholder.typicode.com/todos')
  .then(data => console.log(data))
  .catch(error => console.log(error.message))

//ASync/Await
async function asyncFn() {return  10};//всегда возвращает Промис
asyncFn()//Promise 10
||
const asyncFn = async () => {return  "Yes"}//всегда возвращает Промис
asyncFn()
.then(value => console.log(value))//Yes
.catch(error => console.log(error.message))

//await-ожидание другого промиса
const asyncFn = async () => {await <Promise>}//всегда возвращает Промис
//ожидание результата await
const timePromise = () =>
    new Promise((resolve, reject) =>
    setTimeout(() => resolve(), 2000))
const asyncFn = async () => {
    console.log('Timer starts')
const startTime = performance.now()
    await timePromise()
const endTime = performance.now()
    console.log('Timer ended', endTime - startTime)
}
asyncFn()// Timer ended 2007.0009 = ms

//переход с промис на async|await
const getData = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}
// getData('https:jsonplaceholder.typicode.com/todos')
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))
const url = 'https:jsonplaceholder.typicode.com/todos'
try {
    const data = await getData(url)
    console.log(data)
} catch (error) {
    console.log(error.message)
}*/
