// setTimeout(function(){
//     console.log("hello");
// },5000)

// har 5 second ma chalaga
// setInterval(function(){
//     console.log("hello");
// },5000)

//  let tm = setTimeout(function(){
//     console.log("hey");
// },3000)
// clearTimeout(tm);

 let count = 10;
 let interval=setInterval(function(){
if(count>=1){
 count--;
   console.log(count);
}
else clearInterval(interval)
},1000);