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