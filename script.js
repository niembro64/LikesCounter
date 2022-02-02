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

var users = [
    { name: "Neil M", likes: 9 },
    { name: "Nichole K", likes: 12 },
    { name: "Jim R", likes: 9 },
];
var likePage1 = document.querySelector(".likeCount1");
var likePage2 = document.querySelector(".likeCount2");
var likePage3 = document.querySelector(".likeCount3");
function likeButtonFunction(userId) {
    // alert("NEW NEW NEW")

    users[userId].likes++;
    
    likePage1.innerHTML = users[0].likes;
    likePage2.innerHTML = users[1].likes;
    likePage3.innerHTML = users[2].likes;
}
