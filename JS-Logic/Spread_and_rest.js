// const names = ["A","B","C","D","E"];

// const copynames= [];

// // console.log(copynames);
// // // [ 'A', 'B', 'C', 'D', 'E' ]
// // console.log(names);
// // // [ 'A', 'B', 'C', 'D', 'E' ]

const obj = {
    name: "NS",
    age: 20,
    city: "USA",
  };
  
  const new_obj = { ...obj };
  
  console.log(new_obj);
  // Output: { name: "NS", age: 20, city: "USA" }