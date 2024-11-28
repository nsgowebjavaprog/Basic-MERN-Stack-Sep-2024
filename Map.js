const names = ["A","B","C","D","E"];

let store = names.map(function(vals){
    return vals + " -- LONI";
   
})
console.log(store);

/*
[ 'ALONI', 'BLONI', 'CLONI', 'DLONI', 'ELONI' ]
    ||
    ||
    ||
    ||
[ 'A -- LONI', 'B -- LONI', 'C -- LONI', 'D -- LONI', 'E -- LONI' ]
 */