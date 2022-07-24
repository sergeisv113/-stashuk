function findMultiples(int,limit){
    return Array(Math.floor(limit/int)).fill(1).map((x,i)=>int*(i+1));
}
const playerRankUp = points =>
    points >= 100 ? 'Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.' : false;

function greet(name) {

    if (name === "Johnny") {
        return "Hello, my love!";
    } else {
        return "Hello, " + name + "!";
    }
}

const index = (array, n) => array.length > n ? Math.pow(array[n], n) : -1;
index([1, 2, 3, 4],2);

function position(letter){
    return "Position of alphabet: " + ((letter.charCodeAt(0)-97) + 1);
}

function isDivisible(n, x, y) {
    if(n % x == 0 && n % y == 0){
        return true;
    } else {
        return false;
    }
}

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}
capitalizeWord('word')

function sum (numbers) {
    let k = 0;
    if (numbers.length == 0) {return 0}
    for(let i = 0; i < numbers.length; i++){
        k += numbers[i];
    }
    return k;
};

function nearestSq(n){
    let i,j;
    for(i = j = n; Math.sqrt(i) % 1 != 0 && Math.sqrt(j) % 1 != 0; i++, j--);
    return Math.sqrt(i) % 1 == 0 ? i : j
}