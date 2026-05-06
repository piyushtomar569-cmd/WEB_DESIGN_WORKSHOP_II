// let h1 = document.querySelector("h1");
// window.addEventListener("keydown", function(dets){
//     // h1.textContent = dets.key;
//     if(dets.key === " "){
//         h1.textContent = "SPC";
//     }
//     else{
//         h1.textContent = dets.Key;
//     }
// });

let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");

btn.addEventListener("click", function(){
    fileinp.click();
});

fileinp.addEventListener("change", function(dets){
btn.textContent = dets.target.files[0].name
});