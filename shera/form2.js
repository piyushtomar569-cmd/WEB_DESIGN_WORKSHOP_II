let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");
form.addEventListener("submit",function(dets){
    dets.preventDefault();
//    if(nm.value.length<=2){
//     document.querySelector("#small").style.display= "initial";
//    }
//    else{document.querySelector("#small").style.display= "none"};
 document.querySelector("#emailError").textContent = "";
   document.querySelector("#passwordError").textContent = "";
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
 const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
 let emailans = emailRegex.test(email.value);
 let passwordans = passwordRegex.test(password.value);
 if(!emailans){
    document.querySelector("#emailError").textContent = "Email is incorrect";
    document.querySelector("#emailError").style.display = "initial";
 }
  if(!passwordans){
    document.querySelector("#passwordError").textContent = "password is incorrect";
      document.querySelector("#passwordError").style.display = "initial";
 }
 // let ans = regex.test("a@a.a");
// console.log(ans);


});