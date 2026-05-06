let count =0;
 let progress = document.querySelector(".progress-bar");
   let percentText = document.querySelector(".progress-box");
setInterval(function(){
if(count<99){
    count++;
  progress.style.width=`${count}%`
}
},30);