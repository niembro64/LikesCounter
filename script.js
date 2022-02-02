var numLike = 0;
var likeButton = document.querySelector("#likec");
function likef() {
    numLike++;
    likeButton.innerHTML = numLike;
}

function alertf() {
    alert("Alert");
}

var elem = document.getElementById("disappearingb");
function disappearingf() {
    elem.parentNode.removeChild(elem);
}

function mouseoverf(element) {
    element.style.backgroundColor = "lime";
}

function mouseoutf(element) {
    element.style.backgroundColor = "grey";
}
