"use strict"

let btnLogin = document.querySelector("button")

btnLogin.addEventListener("click",function(){
    this.nextElementSibling.classList.remove("active")
    this.parentNode.classList.add("active-body")
})



let inputRadio = document.querySelector(".choosing .checkbox")

inputRadio.addEventListener("click",function(){
    this.parentNode.nextElementSibling.classList.remove("de-active")
})

document.querySelectorAll(".characters img").forEach(element => {
    element.addEventListener("click",function(){
        this.parentNode.classList.add("de-active")
    })
});


let btnClose = document.querySelector(".alert .close");

btnClose.addEventListener("click",function(){
    this.parentNode.classList.add("active")
    this.parentNode.parentNode.classList.remove("active-body")
})