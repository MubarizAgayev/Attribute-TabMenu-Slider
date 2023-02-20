"use strict"

// let linkElem=document.querySelector("a");

// linkElem.setAttribute("href","https://www.linkedin.com/");

// console.log(linkElem.hasAttribute("href"));

// let btnGoogle = document.querySelector("button:nth-child(1)");
// let btnLinkedin = document.querySelector("button:nth-child(2)");

// btnGoogle.addEventListener("click",function(){
//     linkElem.setAttribute("href","https://www.google.com/")
// })

// btnLinkedin.addEventListener("click",function(){
//     linkElem.setAttribute("href","https://www.linkedin.com/")
// })


// let headers = document.querySelectorAll(".tab-menu .header .item");

// let contents = document.querySelectorAll(".tab-menu .content .item");

// headers.forEach(element => {
//     element.addEventListener("click",function(){
//         document.querySelector(".active").classList.remove("active");
//         this.classList.add("active");
        
//         contents.forEach(content => {
//             if(content.getAttribute("data-id") == this.getAttribute("data-id")){
//                 content.classList.remove("d-none")
//             }else{
//                 content.classList.add("d-none")
//             }
//         });
//     })
// });





//slider


let leftIcon = document.querySelector(".slider .left");

let rightIcon = document.querySelector(".slider .right");

function rightSlider(){
    let activeİmage = document.querySelector(".active");
    if(activeİmage.nextElementSibling != null){
        activeİmage.classList.remove("active");
        activeİmage.nextElementSibling.classList.add("active");
    }else{
        activeİmage.classList.remove("active");
        activeİmage.parentNode.firstChild.classList.add("active");
    }
}
rightIcon.addEventListener("click",rightSlider)


function leftSlider(){
    let activeİmage = document.querySelector(".active");
    if(activeİmage.previousElementSibling != null){
        activeİmage.classList.remove("active");
        activeİmage.previousElementSibling.classList.add("active");
    }else{
        activeİmage.classList.remove("active");
        activeİmage.parentNode.lastElementChild.classList.add("active");
    }
}
leftIcon.addEventListener("click",leftSlider)

rightIcon.addEventListener("mouseover",rightSlider)

leftIcon.addEventListener("mouseover",leftSlider)


setInterval(() => {
    rightSlider();
}, 2000);