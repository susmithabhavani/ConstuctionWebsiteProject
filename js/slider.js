 let sliderimg=document.querySelector('#slider-img');
let sliderImg=document.getElementById("slider-img")
let ham=document.querySelector('.ham');
let menu=document.querySelector(".menu")
let navbar=document.querySelector(".nav-bar");
ham.addEventListener("click",event=>{
menu.classList.toggle('show');
navbar.classList.toggle('nav-height');
})
let images=["./images/building-img-1.jpg","./images/building-img-2.jpg","./images/building-img-3.jpg","./images/building-img-4.jpg"];
let i=0;
function slider(){
sliderImg.src=images[i];
i++;
if(i==4){
i=0;
}
}
function start(){
interval=setInterval(slider,4000);
}
function stop(){
clearInterval(interval)
}