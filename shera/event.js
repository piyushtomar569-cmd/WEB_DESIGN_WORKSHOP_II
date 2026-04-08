let h1 = document.querySelector("h1");

h1.addEventListener("click",function(){
    h1.style.color="red";
});


let p= document.querySelector("p");

p.addEventListener("dblclick",function(){

    p.style.color="green";
});

let input =document.querySelector("input");
input.addEventListener("input",function(e){
    if (e.data!==null){
    console.log(e.data)
    }
});

// change event tab chalta hai jab aapka koi input select ya textarea me koi change ho jaye
let sel = document.querySelector("select");
let device = document.querySelector("#device");
sel.addEventListener("change",function(e){
    // console.log(dets.target.value);
    // device.textContent = "Device Selected";
    device.textCotent = `${dets.target.value} Device Selected`;
});