

let box = document.getElementsByClassName("box");
let box4 = document.getElementsByClassName("box4")[0];

box4.addEventListener("click", function () {

    for(let i = 0; i < box.length; i++){

        let r1 = Math.floor(Math.random()*256);
        let r2 = Math.floor(Math.random()*256);
        let r3 = Math.floor(Math.random()*256);

        box[i].style.backgroundColor = `rgb(${r1},${r2},${r3})`;
    }

});