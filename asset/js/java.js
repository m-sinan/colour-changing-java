function white() {
    document.getElementById("body").style.backgroundColor= "white";
    
}
function red() {
    document.getElementById("body").style.backgroundColor="red";
    
}
function blue() {
    document.getElementById("body").style.backgroundColor="blue";
    
}
function yellow() {
    document.getElementById("body").style.backgroundColor="yellow";
}
function back() {
    document.getElementById("body").style.backgroundColor="brown"
    alert("you want to refresh");
}
    var speed;
function mainloader() {
    speed = setTimeout(innerfunction,4000);
}
function innerfunction() {
    document.getElementById("main").style.display = "block";
    document.getElementById("loadee").style.display = "none";
}