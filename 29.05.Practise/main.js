let menu=document.querySelector(".fa-bars")
let nav=document.querySelector("nav")
menu.addEventListener("click",function(){
    nav.classList.toggle("show")
    this.classList.contains("fa-bars")
    ?(this.classList="fa-solid fa-xmark")
    :(this.classList="fa-solid fa-bars")

})