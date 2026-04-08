// console.log("hello")
// alert("Hello jee")
// console.dir(document.body)

// let heading = document.getElementById("heading");
// console.dir(heading);

// let heading2 = document.getElementsByClassName("heading2");
// console.dir(heading2)

// let para = document.getElementById("id1")
// console.log(para)

// let firstEl = document.querySelector("p");
// console.dir(firstEl);
// let allEl = document.querySelectorAll("p");
// console.dir(allEl);


// let div = document.querySelector("div");
// console.log("div");

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + "abcd"


// let div= document.querySelector("div");
// console.log(div);

// div.getAttribute("id");
// console.dir(id)


let newBtn = document.createElement("button");
newBtn.innerText = "click Me";

newBtn.style.color="white";
newBtn.style.backgroundColor="red";

document.queryselector("body").prepend(newBtn);
