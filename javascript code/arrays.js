// let obj={
//     name:"hello",
//     age:18,
//     greet : function(){
//         console.log("hello jee kaise ho saare");
//     }
// };
// console.log(obj)
// obj.greet();

// let arr=[1,2,3,4,5];
// console.log(arr);

// let brr=new Array('hello',1,true);
// console.log(brr);
// brr.push('babbar');
// brr.shift();
// console.log(brr);
// brr.unshift("hello buddy");
// console.log(brr); 
// brr.push(20);
// brr.push(30);
// console.log(brr);
// console.log(brr.slice(2,4));

// brr.splice(1,2,'kunal');
// console.log(brr);

// let cities = ["delhi", "mumbai", "noida", "hyderabad", "gurgaon"];
// for(let city of cities){
//     console.log(city.toUpperCase());
// }


// let marks = [85, 97, 93,88,90];
// let sum=0;
// for(let val of marks){
// sum += val;
// }
// console.log(sum);
// let avg=sum/marks.length;
// // console.log(avg);
// console.log(`avg marks of the class = ${avg}`);
 

// let items = [85, 97, 93,88,90];
// let idx=0;
// for (let val of items){
//     console.log(`val at index ${idx} = ${val}`);
//     idx++;
// } 

/*let items = [85, 97, 93,88,90];
let i=0;
for(let val of items){
    let offer =val/10;
    items[i]=items[i]-offer;
    console.log(`value after offer = ${items[i]}`);
    i++; 
}
*/

//Array methods
/*
let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "drstrange"];
console.log(marvelHeroes);
console.log(marvelHeroes.slice(1,3));
*/ 
 let arr = [85, 97, 93,88,90];
arr.splice(2,2,101,102);
console.log(arr);