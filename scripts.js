let navOpen = document.querySelector("nav .fa-bars");
let navClose = document.querySelector("nav #nav-phone .fa-xmark");
let navPhone = document.querySelector("nav #nav-phone");

navOpen.addEventListener("click", () => {
    navPhone.classList.add("active");
})
navClose.addEventListener("click", () => {
    navPhone.classList.remove("active");
})

let mainNav = document.querySelector("nav .container");
window.onscroll = () => {
        if (this.scrollY >= 70) {
            mainNav.classList.add("active");
        } else mainNav.classList.remove("active");
    }
    //=========================== close my work its for my self===========================//
    // close website
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
//short cut closing
document.oncontextmenu = () => {
    return false
}
document.onkeydown = e => {
    if (e.key == "F12") {
        return false
    }
    if (e.key == "f12") {
        return false
    }
    if (e.ctrlKey && e.key == "u") {
        return false
    }
    if (e.ctrlKey && e.key == "U") {
        return false
    }
    if (e.ctrlKey && e.key == "a") {
        return false
    }
    if (e.ctrlKey && e.key == "A") {
        return false
    }
    if (e.ctrlKey && e.key == "C") {
        return false
    }
    if (e.ctrlKey && e.key == "c") {
        return false
    }
    if (e.ctrlKey && e.key == "v") {
        return false
    }
    if (e.ctrlKey && e.key == "V") {
        return false
    }
}









//met
document.onkeydown = function(e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (event.keyCode == 'Q') {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'S'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'Q'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'C'.charCodeAt(0)) {
        return true;
    }
    if (e.ctrlKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'V'.charCodeAt(0)) {
        return true;
    }
}