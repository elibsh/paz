function hoverOnReadMore(element) {
    // element.style.color = "#005CA0";
    element.innerHTML = "<span>קרא עוד</span><img src=\"images\\read_more_blue.png\" alt=\"Read More\">";
}

function outOfReadMore(element) {
    // element.style.color = "white";
    element.innerHTML = "<span>קרא עוד</span><img src=\"images\\read_more_white.png\" alt=\"Read More\">";
}

function hoverOnMoreDetails(element) {
    element.innerHTML = "<span>לפרטים נוספים</span><img src=\"images\\read_more_blue.png\" alt=\"Read More\">";
}

function outOfMoreDetails(element) {
    element.innerHTML = "<span>לפרטים נוספים</span><img src=\"images\\read_more_yellow.png\" alt=\"Read More\">";
}

function hoverOnNorth(element) {
    element.innerHTML = "<span>צפון</span><img src=\"images\\read_more_blue.png\" alt=\"Read More\">";
}

function outOfNorth(element) {
    element.innerHTML = "<span>צפון</span><img src=\"images\\read_more_yellow.png\" alt=\"Read More\">";
}

function hoverOnCenter(element) {
    element.innerHTML = "<span>מרכז</span><img src=\"images\\read_more_blue.png\" alt=\"Read More\">";
}

function outOfCenter(element) {
    element.innerHTML = "<span>מרכז</span><img src=\"images\\read_more_yellow.png\" alt=\"Read More\">";
}

function hoverOnSouth(element) {
    element.innerHTML = "<span>דרום</span><img src=\"images\\read_more_blue.png\" alt=\"Read More\">";
}

function outOfSouth(element) {
    element.innerHTML = "<span>דרום</span><img src=\"images\\read_more_yellow.png\" alt=\"Read More\">";
}

// var myImage = document.getElementById("temp-image");
var i = 1;
var images = ["Pic5a.jpg", "Pic5b.jpg", "Pic5c.jpg", "Pic5d.jpg"];

function changeImage() {
    var myImage = document.getElementById("temp-image");
    myImage.src = "images\\" + images[i++ % 4];
}

setInterval(changeImage, 2500);