function findMultiples(int,limit){
    return Array(Math.floor(limit/int)).fill(1).map((x,i)=>int*(i+1));
}
