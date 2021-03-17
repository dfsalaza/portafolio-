function contActive() {
    var selector = document.getElementById("cont-colors");
    var selector2 = document.getElementById("btn-elemento");
    selector.classList.toggle("active");
    selector2.classList.toggle("active");
}

function bgGrey() {
    var selector = document.getElementById("body");
    selector.className = "";
    selector.classList.toggle("grey");
}

function bgYellow() {
    var selector = document.getElementById("body");
    selector.className = "";
    selector.classList.toggle("yellow");
}

function bgOrange() {
    var selector = document.getElementById("body");
    selector.className = "";
    selector.classList.toggle("orange");
}

function bgBrown() {
    var selector = document.getElementById("body");
    selector.className = "";
    selector.classList.toggle("brown");
}

function bgBlue() {
    var selector = document.getElementById("body");
    selector.className = "";
    selector.classList.toggle("blue");
}
    
    AOS.init();