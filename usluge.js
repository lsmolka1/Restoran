// Prvi gumb
let gumb1 = document.getElementById("povratak");
    


if(gumb1){
    gumb1.addEventListener("click", backToTop);
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Drugi gumb
let gumb2 = document.getElementById("povratak2");


if(gumb2){
    gumb2.addEventListener("click", backToTop);
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Treći gumb
let gumb3 = document.getElementById("povratak3");

if(gumb3){
    gumb3.addEventListener("click", backToTop);
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Četvrti gumb
let gumb4 = document.getElementById("povratak4");

if(gumb4){
    gumb4.addEventListener("click", backToTop);
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Gumb - povratak na vrh
let mojgumb = document.getElementById("vrh-gumb");

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mojgumb.style.display = "block";
    } else {
        mojgumb.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


