var container = document.getElementById("container");
let arr= ["https://i.pinimg.com/736x/e8/b9/d8/e8b9d84bd1b0db0904f9f0b25c3f38d1.jpg",
    "https://i.pinimg.com/736x/6a/36/93/6a3693e81ef9ecb0a11c82be369cd875.jpg",
     "https://i.pinimg.com/1200x/5d/6d/23/5d6d23fd7adb44baba20a60c252da339.jpg",
      "https://i.pinimg.com/1200x/08/e7/f3/08e7f3f45fd3a34c7e7afdfd2e589e6a.jpg",
       "https://i.pinimg.com/736x/d5/b8/68/d5b868f5d1a24e6a01de8779de3c38c7.jpg"];
var s = "";
for(let i=1;i<=80;i++){
    let r =Math.floor(Math.random()*arr.length);
    s+= `<div class="card"><img src=${arr[r]}></div>`
}
container.innerHTML = s;


// for(let i=0;i<=15;i++){
//     var r =Math.floor(Math.random()*50);
//     s+= ` <div class="card">
//             <img src="pikachu.jpg">
//         </div>
//         <div class="card">
//             <img src="narutoch.jpg">
//         </div>
//         <div class="card">
//             <img src="builder.jpg">
//         </div>
//         <div class="card">
//             <img src="tanjiro.jpg">
//         </div>`;
// }