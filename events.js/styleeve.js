let btn1 = document.querySelector("#btn");
// btn1.onclick = () => {
//     console.log("Handler1");
//     let a = 25;
//     a++;
//     console.log(a);
// };
// btn1.onclick = () => {
//     console.log("handler2");
// };
// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are inside div");
// };

let btn2 =document.querySelector("#btn1");
btn2.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target)
    console.log(evt.clientX, evt.clientY)
};

let div = document.querySelector("div");
div.onmouseover = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target)
    console.log(evt.clientX, evt.clientY)

};
btn1.addEventListener("click",(evt) => {
    console.log(evt);
    console.log("button1 was clicked")
    console.log(evt.type);
}); 

btn1.addEventListener("click",() => {
    console.log("button1 was clicked - handler2")
}); 