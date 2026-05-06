let arr = [11,53,64,7,5,8];
// let sr = arr.sort(function(a,b){
//     return a-b;
// });
// console.log(sr);



// map jabhi use karna hi jab hame new array banana hai 

// let br = arr.map(function(val){
// if(val>3) return val
// });
// console.log(br)


// accumulator ki value shuru ma definr kar dete hai 
// reduce for single digit value
let ans = arr.reduce(function(accumulator, val){
    return accumulator+val;
},0);